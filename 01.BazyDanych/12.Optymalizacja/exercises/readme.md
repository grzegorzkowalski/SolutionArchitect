## MongoDB

1. Wykorzystaj narzędzie `MongoDB Compass`. Stwórz nową bazę danych o nazwie `weather`.
2. Zaimportuj dane z pliku JSON pobranego z git `https://github.com/neelabalan/mongodb-sample-dataset/tree/main/sample_weatherdata`.
3. Wykorzystaj konsolę i narzędzie `mongosh`, żeby wyszukać wszystkie dokumenty, dla których temparatura jest większa niż 20.
4. Wykonaj funkcję `count`, żeby sprawdzić ile jest dokumentów spełniających dane zapytanie.
5. Wykonaj zapytanie jeszcze raz z funkcją explain("executionStats"), co pozwoli przeanalizować statystyki wykonanego zapytania.
6. Zwróć uwagę na parametry `executionTimeMillis`, `totalDocsExamined`.
7. Dodaj indeks na polu "airTemperature.value".
8. Ponownie zweryfikuj powyższe wartości.