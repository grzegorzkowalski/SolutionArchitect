﻿Napisz złączenie, które połączy tabele rental oraz payment. Wyświetl tylko poniższe kolumny:
- payment_id,
- rental_id,
- amount,
- rental_date,
- payment_date.

W tym zadaniu użyj **INNER JOIN**.
Pamiętaj o użyciu aliasów dla tabel w zapytaniu.

**Uwaga:** Jeśli w dwóch tabelach jest ta sama nazwa kolumny, SQL będzie wymagał podania, z której tabeli chcemy wyświetlić kolumnę (można używać aliasów), przykładowo:

```sql
SELECT
t.col_name
FROM tab as t
```

