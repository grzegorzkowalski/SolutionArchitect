## Warsztat: Stworzenie systemu do wyszukiwania zdjęć dla redakcji portalu internetowego 

### Krok 1: Konfiguracja Projektu

#### 1. Utworzenie Projektu WebAPI

1. Utwórz w Visual Studio nowy projekt `ASP.NET Core Web API`. 
1. Nazwij go `PhotoSearch`.
1. Dodaj obsługę Swaggera i kontrolerów.
1. Framework docelowy `.NET 6`.

#### 2. Instalacja Pakietów NuGet
1. Dodaj wymagane pakiety w wersji dla `.NET 6` typu 6.x.x .

```
Dapper
Serilog.AspNetCore
Serilog.Settings.Configuration
Serilog.Sinks.MSSqlServer
System.Net.Http
Newtonsoft.Json
```
### Krok 2: Konfiguracja Bazy Danych

#### 1. Utworzenie Bazy Danych
1. Utwórz bazę danych SQL Server o nazwie `PhotoDB`.

### Krok 3: Implementacja Modelu

#### Definicja Modelu Photo i Category

1. Stwórz folder `Models`.
2. Dodaj poniższe klasy.

```csharp
namespace BlogCMS.Models
{
    public class Photo
    {
        public int Id { get; set; }
        public int CategoryId { get; set; }
        public string Title { get; set; }
        public string Link { get; set; }
        public string Tags { get; set; }
        public string Description { get; set; }
        public string PhotoFormat { get; set; }
        public string Resolution { get; set; }
    }
    
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
```

### Krok 4: Implementacja Wzorca Repository

1. Stwórz folder `Interface`.
1. Najpierw zdefiniuj interfejs `IRepository`, który będzie służył jako podstawa dla wszystkich operacji CRUD w aplikacji:

```csharp
public interface IRepository<T> where T : class
{
    Task<IEnumerable<T>> GetAllAsync();
    Task<T> GetByIdAsync(int id);
    Task<int> AddAsync(T entity);
    Task<bool> UpdateAsync(T entity);
    Task<bool> DeleteAsync(int id);
}
```

### Krok 5: Konfiguracja DapperContext
1. Stwórz folder `DAL`.
1. Dodaj klasę kontekstu.

```
    public class DapperContext
    {
        private readonly IConfiguration _configuration;
        public DapperContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public IDbConnection CreateConnection() => new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
    }
```

### Krok 6: Dodawanie logowania do bazy danych za pomocą biblioteki `Serilog`.
1. Dodaj konfigurację `Serilog` w `Program.cs`. Upewnij się, że dodajesz ją na samym początku zaraz po metodzie `WebApplication.CreateBuilder(args);`.

```
builder.Host.UseSerilog((hostingContext, loggerConfiguration) => loggerConfiguration
    .ReadFrom.Configuration(hostingContext.Configuration));
```

8. Dodaj konfigurację `Serilog` i odpowiedniego `sinka` do pliku konfiguracyjnego.

```
  "Serilog": {
    "Using": [ "Serilog.Sinks.Console", "Serilog.Sinks.MSSqlServer" ],
    "MinimumLevel": "Information",
    "WriteTo": [
      { "Name": "Console" },
      {
        "Name": "MSSqlServer",
        "Args": {
          "connectionString": "DefaultConnection",
          "sinkOptionsSection": {
            "tableName": "SeriLogs",
            "autoCreateSqlTable": true
          }
        }
      }
    ],
    "Enrich": [ "FromLogContext" ]
  },
```

### Krok 7: Implementacja repozytorium

1. Stwórz folder `Repositories`.
2. Dodaj klasę `PhotoRepository`.

```
     public class PhotoRepository : IRepository<Photo>
    {
        private readonly DapperContext _context;
        private readonly ILogger<PhotoRepository> _logger;

        public PhotoRepository(DapperContext context, ILogger<PhotoRepository> logger)
        {
            _context = context;
            _logger = logger;
        }
        
        public async Task<IEnumerable<Photo>> GetAllAsync()
        {
            using (var connection = _context.CreateConnection())
            {
                return await connection.QueryAsync<Photo>("SELECT * FROM Photos");
            }
        }

        public async Task<Photo> GetByIdAsync(int id)
        {
            using (var connection = _context.CreateConnection())
            {
                return await connection.QuerySingleOrDefaultAsync<Photo>("SELECT * FROM Photos WHERE Id = @Id", new { Id = id });
            }
        }

        public async Task<int> AddAsync(Photo entity)
        {
            var sql = "INSERT INTO Photos (CategoryId, Title, Link, Tags, Description, PhotoFormat, Resolution) VALUES (@CategoryId, @Title, @Link, @Tags, @Description, @PhotoFormat, @Resolution); SELECT CAST(SCOPE_IDENTITY() as int)";
            using (var connection = _context.CreateConnection())
            {
                var id = await connection.QuerySingleAsync<int>(sql, entity);
                return id;
            }
        }

        public async Task<bool> UpdateAsync(Photo entity)
        {
            var sql = "UPDATE Photos Set CategoryId = @CategoryId, Title = @Title, Link = @Link, Tags = @Tags, Description = @Description, PhotoFormat = @PhotoFormat, Resolution = @Resolution Where Id = @Id";
            using (var connection = _context.CreateConnection())
            {
                var affectedRows = await connection.ExecuteAsync(sql, entity);
                return affectedRows > 0;
            }
        }

        public async Task<bool> DeleteAsync(int id)
        {
            using (var connection = _context.CreateConnection())
            {
                var affectedRows = await connection.ExecuteAsync("DELETE FROM Photos WHERE Id = @Id", new { Id = id });
                return affectedRows > 0;
            }
        }
    }
```


### Krok 8: Implementacja Kontrolerów

1. Utwórz `PhotoController`, który wykorzysta `IRepository<Photo>` do obsługi żądań HTTP. 
1. Utwórz `SearchController`.

### Krok 9: Baza Danych - nowe tabele

1. W bazie danych dodaj tabele i relacje dla encji `Photo` i `Category`.
```
CREATE TABLE Categories (
    Id INT PRIMARY KEY IDENTITY,
    Name NVARCHAR(255) NOT NULL
);

CREATE TABLE Photos (
    Id INT PRIMARY KEY IDENTITY,
    Title NVARCHAR(255) NOT NULL,
    Link NVARCHAR(255) NOT NULL,
    Tags NVARCHAR(MAX) NULL,
    Description NVARCHAR(MAX) NULL,
    PhotoFormat NVARCHAR(50) NOT NULL,
    Resolution NVARCHAR(50) NOT NULL,
    CategoryId INT,
    FOREIGN KEY (CategoryId) REFERENCES Categories(Id)
);

```

1. Dodaj w pliku `appsettings.json`:
```
  "ConnectionStrings": {
    "DefaultConnection": "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=PhotoDB;Integrated Security=True;Connect Timeout=30;Encrypt=False;Trust Server Certificate=False;Application Intent=ReadWrite;Multi Subnet Failover=False"
  },
```

### Krok 10: Dependency Injection

1. Zarejestruj wstrzykiwanie klasy `DapperContext` i klas repozytoriów.

```
builder.Services.AddSingleton<DapperContext>();
builder.Services.AddScoped<IRepository<Photo>, PhotoRepository>();
```

### Krok 11: Logika biznesowa

1. Stwórz folder `Services`.
1. Dodaj klasę `SearchService`, gdzie zdefiniujesz metody biznesowe do przeszukiwania baz danych.

1. Załóż konto w serwsie https://pixabay.com/api
1. Postępuj zgodnie z instrukcjami.
1. Znajdź swój klucz dostepu.

1. Załóż konto w serwisie https://www.pexels.com/api
1. Postępuj zgodnie z instrukcjami.
1. Znajdź swój klucz dostepu.
1. Zaistaluj bibliotekę:
```
PexelsDotNetSDK
```

1. Przygotuj metodę, która wyszuka obrazy według podanego stringa w bazie `Pixabay`.
1. Przygotuj metodę, która wyszuka obrazy według podanego stringa w bazie `Pexels`.

```
    public class SearchService
    {
        private readonly IRepository<Photo> _repository;
        private readonly ILogger<PhotoRepository> _logger;
        public SearchService(IRepository<Photo> repository, ILogger<PhotoRepository> logger) 
        {
            _logger = logger;
            _repository = repository;
        }

        public async Task<List<Photo>> GetFromPixaBay(string searchTerm)
        {
            var access_key = "Wstaw Twój osobisty klucz.";
            var url = $"https://pixabay.com/api/?key={access_key}&q={searchTerm}&image_type=photo";
            var httpClient = new HttpClient();
            var response = await httpClient.GetAsync(url);
            response.EnsureSuccessStatusCode();
            var content = await response.Content.ReadAsStringAsync();
            var result = JsonConvert.DeserializeObject<PixabayDTO>(content);
            var photoList = new List<Photo>();

            foreach (var photo in result.Hits)
            {
                // Ustawimy w bazie CategoryId = 1 jako "Default"
                var mapper = new Photo()
                {
                    CategoryId = 1,
                    Title = photo.Tags,
                    Link = photo.ImageURL ?? "",
                    Tags = photo.Tags,
                    Description = photo.Tags,
                    PhotoFormat = $"{photo.ImageWidth}x{photo.ImageHeight}",
                    Resolution = "Height"
                };
                photoList.Add(mapper);
                await _repository.AddAsync(mapper);
            }  
            return photoList;
        }

        public async Task<List<Photo>> GetFromPexels(string searchTerm)
        {
            var api_key = "Wstaw Twój osobisty klucz.";
            var pexelsClient = new PexelsClient(api_key);
            var result = await pexelsClient.SearchPhotosAsync(searchTerm);
            var photoList = new List<Photo>();

            foreach (var photo in result.photos)
            {
                // Ustawimy CategoryId 1 jako Default
                var mapper = new Photo()
                {
                    CategoryId = 1,
                    Title = searchTerm,
                    Link = photo.source.original,
                    Tags = photo.alt,
                    Description = photo.alt,
                    PhotoFormat = $"{photo.width}x{photo.height}",
                    Resolution = "Height"
                };
                photoList.Add(mapper);
                await _repository.AddAsync(mapper);
            }
            return photoList;
        }
    }
```

1. Pamiętaj o przygotowaniu odpowiednich modeli DTO.
```
 public class PixabayDTO
 {
     public int Total { get; set; }
     public int TotalHits { get; set; }
     public List<Hit> Hits { get; set; }
 }

 public class Hit
 {
     public int Id { get; set; }
     public string PageURL { get; set; }
     public string Type { get; set; }
     public string Tags { get; set; }
     public string PreviewURL { get; set; }
     public int PreviewWidth { get; set; }
     public int PreviewHeight { get; set; }
     public string WebformatURL { get; set; }
     public int WebformatWidth { get; set; }
     public int WebformatHeight { get; set; }
     public string LargeImageURL { get; set; }
     public string FullHDURL { get; set; }
     public string ImageURL { get; set; }
     public int ImageWidth { get; set; }
     public int ImageHeight { get; set; }
     public int ImageSize { get; set; }
     public int Views { get; set; }
     public int Downloads { get; set; }
     public int Likes { get; set; }
     public int Comments { get; set; }
     public int User_id { get; set; }
     public string User { get; set; }
     public string UserImageURL { get; set; }
 }
```

### Krok 12: Testy

1. Przetestuj aplikację za pomocą `Swaggera` i `Postmana`. 

### Krok 13: Dla chętnych
1. Dodaj więcej serwisów ze zdjęciami, które będziesz przeszukiwał jednocześnie np. [unsplash.com](https://unsplash.com).
1. Dodaj możliwość przeszukiwania rekordów zapisanych w bazie danych. 
1. Zdefiniuj metody z filtrami np. wyszukujące po tagach, po opisie.
1. Dodaj testy jednostkowe.
1. Ddoaj testy integracyjne.