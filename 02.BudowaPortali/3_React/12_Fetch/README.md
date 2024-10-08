### Używamy tylko komponentów funkcyjnych.

## Zadanie 1

1. Stwórz nową aplikację.
2. Stwórz nawigację z 3 podstronami `Home, CityWeather, FindWeather`.
3. Przygotuj nawigację, która pozwoli poruszać się po stronie.
4. W komponencie Home stwórz tablicę z listą wybranych miast.
5. Przygotuj komponent w celu wyrenderowania listy miast z przyciskiem przekierowującym na podstronę `CityWeather`.
6. W przekierowaniu powinieneś przekazać nazwę miasta.
7. Utwórz konto na portalu `https://openweathermap.org/api `.
8. W komponencie `CityWeather` na podstawie przekazywanej nazwy miasta utwórz zapytanie do powyższego api, które zwróci prognozę pogody. 
Żeby odczytać parametr miasta skorzystaj z hooka useParams. 
9. Wyświetl w komponencie nazwę miasta, aktualną temperaturę i ogólny opis pogody.
10. Utwórz konto w portalu `https://pixabay.com/api/docs/ `.
11. Na podstawie opisu pogody z API pogodowego wyślij zapytanie do portalu pixabay i znajdź obrazek ilustrujący opisaną pogodę.
12. Wyświetl go w komponencie.
13. W komponencie `FindWeather` stwórz prosty formularz z inputem i buttonem. Pozwól użytkownikowi wpisać nazwę miasta i zapisać ją w stanie komponentu.
14. Po naciśnięciu guzika wyślij zapytanie do API o pogodę dla danego miasta.
15. Jeśli pogoda dla danego miasta zostanie znaleziona wykonaj kroki z punktów 9-12.
16. Jeśli pogoda dla danego miasta nie zostanie znaleziona, wyświetl komponent z informacją error 404 brak danych.

## Zadanie 2

1. W naszej redakcji internetowej chcielibyśmy móc w łatwy sposób przeszukać różne bazy zdjęć.
2. Zaimplementuj rozwiązanie, które w zależności od preferencji pozwoli przeszukać bazę zdjęć [Pexels](https://www.pexels.com/api/)
   lub poznaną wcześniej bazę zdjęć [Pixabay](https://pixabay.com/api/docs/), po wybranej nazwie kategorii.
3. Wykonaj wszystkie wymagane kroki, żeby móc korzystać z API dla obu rozwiązań.
4. Przygotuj formularz, który umożliwi wpisanie wybranej kategorii i wybór bazy, z której chcemy skorzystać i wyszukać listę zdjęć.
5. Wyświetl listę zdjęć dla wybranej kategorii.

## Zadanie 3

1. Wyślij zapytanie po swój adres IP i poczekaj na odpowiedź.
2. Użyj serwisu `https://www.ipify.org/`.
3. Po otrzymaniu odpowiedzi odpytaj serwis `https://ip-api.com/` o szczegóły dla Twojego adresu IP.
4. Gdy dane z drugiego serwisu zostaną zwrócone wyrenderuj je.
5. Do czasu otrzymania drugiej odpowiedzi nie renderuj komponentu.
