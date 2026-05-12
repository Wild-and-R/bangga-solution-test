# PT Tri Nindya Utama — Programmer Test

JavaScript solutions for the **PT Tri Nindya Utama Programmer Test**, covering SQL query logic and programmatic pattern generation using core loop constructs.

---

## Project Structure

```
├── soal1_sql.js       # SQL query simulation using in-memory JS data
├── soal2_patterns.js  # Loop-based pattern and logic exercises
└── README.md
```

---

## Getting Started

**Prerequisites:** [Node.js](https://nodejs.org/) v14 or higher

```bash
# Clone the repository
git clone https://github.com/Wild-and-R/TNU-programmer-test.git
cd TNU-programmer-test

# Run Soal 1 (SQL)
node soal1_sql.js

# Run Soal 2 (Patterns)
node soal2_patterns.js
```

---

## Soal 1 — SQL Query Simulation

Simulates a relational database with three tables: `Country`, `City`, and `Building`. SQL queries are written as comments and executed as equivalent JavaScript array operations.

**Schema:**
```
Country (CountryID, Name)
    └── City (CityID, CountryID, Name, Population)
            └── Building (BuildingID, CityID, Name, Floors)
```

| # | Query | SQL Concepts Used |
|---|-------|-------------------|
| A | Cities with population > 500 | `WHERE` |
| B | Cities with no buildings | `LEFT JOIN ... IS NULL` |
| C | Countries with a city population < 500 | `JOIN`, `DISTINCT` |
| D | Buildings in Indonesia & Malaysia | `JOIN`, `IN` |
| E | Buildings in Indonesia & Malaysia with floors > 40 | `JOIN`, `IN`, `AND` |

**Sample Output:**
```
============================================================
A) Kota dengan populasi > 500
------------------------------------------------------------
SQL:
SELECT CityID, Name, Population
FROM   City
WHERE  Population > 500;
------------------------------------------------------------
Output:
  {"CityID":1,"Name":"Jakarta","Population":1000}
  {"CityID":4,"Name":"Kuala Lumpur","Population":600}
============================================================
```

---

## Soal 2 — Logical Patterns

Loop-based exercises using `for`, `while`, and `do-while`.

| # | Pattern | Loop Used |
|---|---------|-----------|
| A | Star triangle (`*` to `*****`) | `for` |
| B | Descending number triangle (`5 4 3 2 1` → `5`) | `for` |
| C | Odd numbers ascending (`1` → `1 3 5 7 9`) | `while` |
| D | Diamond pattern (`3 2 1` / `3` / `3 2 1`) | `do-while` + `for` |
| E | First 5 prime numbers (`2 3 5 7 11`) | `while` |

**Sample Output:**
```
A) Segitiga Bintang
*
**
***
****
*****

D) Pola Diamond
3 2 1
3 2
3
3 2
3 2 1

E) Bilangan Prima
2 3 5 7 11
```

---

## Tech Stack

- **Language:** JavaScript (Node.js)
- **No external dependencies** — runs with plain Node.js

---

## License

This project is submitted as part of a candidate assessment for **PT Tri Nindya Utama**.
