## Normalizacja

1. Masz poniższą tabelę `CustomerOrder`, która przechowuje zamówienia klientów, 
jednak tabela ta zawiera zduplikowane informacje, wieloczęściowe pola, co prowadzi do redundancji. 
2. Twoim zadaniem będzie znormalizowanie tej tabeli, eliminując nadmiarowość i tworząc odpowiednie relacje.
3. Pamiętaj o ustaleniu odpowiednich typów danych dla poszczególnych kolumn.

4. Problemy:
Dane klienta są powtarzane przy każdym zamówieniu.
Informacje o produktach są zduplikowane.
Redundancja danych może prowadzić do niezgodności (np. zmiana numeru telefonu dla jednego zamówienia, ale nie dla innych).

5. Zadanie:
Znormalizuj dane z tabeli `CustomerOrder`, tworząc odpowiednie tabele w formie trzeciej postaci normalnej (3NF).

6. Tabela `CustomerOrder` (denormalizowana):

| OrderID | CustomerName | CustomerPhone | CustomerEmail     | Address                                    | ProductName | ProductPrice | Category   | Quantity | Discount | ShippingCost | OrderDate   |
|---------|--------------|---------------|-------------------|--------------------------------------------|-------------|--------------|------------|----------|----------|--------------|-------------|
| 1       | John Doe     | 123-456-789   | john@example.com  | ul. Przykładowa 1, 24-100 Warszawa, Poland | Laptop      | 1500         | Electronics| 1        | 100      | 50           | 2024-09-10  |
| 2       | Jane Smith   | 987-654-321   | jane@example.com  | ul. Fikcyjna 5, 24-100 Warszawa, Poland    | Smartphone  | 800          | Electronics| 2        | 50       | 20           | 2024-09-11  |
| 3       | John Doe     | 123-456-789   | john@example.com  | ul. Przykładowa 1, 24-100 Warszawa, Poland | Headphones  | 200          | Audio      | 1        | 10       | 5            | 2024-09-12  |
| 4       | Jane Smith   | 987-654-321   | jane@example.com  | ul. Fikcyjna 5, 24-100 Warszawa, Poland    | Laptop      | 1500         | Electronics| 1        | 100      | 50           | 2024-09-13  |

