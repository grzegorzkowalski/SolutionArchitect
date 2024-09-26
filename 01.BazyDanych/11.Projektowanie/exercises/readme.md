## 1. System IoT do zliczania odwiedzin w bankowych placówkach

1. Każda placówka bankowa jest wyposażona w czujniki IoT,które rejestrują liczbę osób wchodzących i wychodzących. 
1. Dodatkowo mogą zbierać inne dane, takie jak godzina, dzień tygodnia, typ wizyty (np. w kasie, w biurze kredytowym), czy nawet parametry środowiskowe (temperatura, hałas).

### Kluczowe informacje do przechowywania:
1. Placówka: Identyfikator placówki, lokalizacja, godziny otwarcia.
2. Czujnik: Identyfikator czujnika, jego lokalizacja w placówce (np. przy wejściu, przy kasie).
3. Zdarzenie (odwiedziny): Timestamp (znacznik czasu), liczba osób, typ wizyty (np. wchodzący lub wychodzący), ID placówki, ID czujnika.

MongoDB może być użyte do przechowywania zdarzeń rejestrowanych przez czujniki. Dane te mogą być szybko zapisywane i odczytywane, a MongoDB dobrze radzi sobie z dużymi wolumenami danych przy wysokiej częstotliwości zapisywania.

## 2. Baza do generowania zestawień i raportów
Drugi komponent to baza używana do generowania zestawień i raportów z danych zbieranych przez czujniki. Dane te mogą być agregowane w regularnych odstępach czasu (np. godzinowo, dziennie, tygodniowo), aby odpowiedzieć na pytania biznesowe dotyczące odwiedzin w placówkach. 

#### Dane mogą być analizowane na potrzeby:
1. Optymalizacji liczby pracowników w poszczególnych placówkach.
1. Analizowania ruchu klientów w zależności od pory dnia lub tygodnia.
1. Oceny skuteczności kampanii marketingowych (np. więcej klientów po wysłaniu e-maila).

W SQL utwórz schemat zawierający następujące informacje:

Placówka: Identyfikator placówki, lokalizacja, godzina otwarcia.
Lista czujników.
Dzienna liczba odwiedzin: Data, liczba odwiedzin (osobno dla różnych rodzajów wizyt, np. liczba wejść/wyjść, w kasie, w biurze kredytowym), ID placówki, ID czujnika.
Raporty tygodniowe/miesięczne: Zestawienia sumaryczne na potrzeby analiz strategicznych.

1. Zaprojektuj schemat bazy danych MongoDB.
1. Możesz do tego wykorzystać narzędzie `https://studio.hackolade.com`, `draw.io` lub inne wybrane.
1. Zaprojektuch schemar ERD dla bazy SQL.
1. Możesz do tego wykorzystać narzędzie `https://erd-editor.io`, `https://studio.hackolade.com`, `draw.io` lub inne wybrane.

#### Przygotuj przykładową bazę danych MongoDB
1. Przygotuj przykładowy schemat bazy danych, skorzystaj z narzędzia `MongoDB Compass`.
2. Dodaj indeksy jeśli uznasz, że są potrzebne.

#### Przygotuj bazę danych SQL
1. Dodaj odpowiednie tabele.
2. Wybierz odpowiednie typy danych dla poszczególnych kolumn.
3. Dodaj relacje i ograniczenia zgodnie z najlepszymi praktykami.
4. Dodaj indeksy jeśli uznasz, że są potrzebne.
5. Pamiętaj o normalizacji danych.
