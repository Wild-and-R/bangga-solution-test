// =============================================================
//  SOAL 1 - SQL QUERIES (Simulated in JavaScript)
//  Schema: Country -> City -> Building
// =============================================================

// DATA
const country = [
  { CountryID: 1, Name: "Indonesia" },
  { CountryID: 2, Name: "Malaysia" },
  { CountryID: 3, Name: "Singapura" },
];

const city = [
  { CityID: 1, CountryID: 1, Name: "Jakarta",      Population: 1000 },
  { CityID: 2, CountryID: 1, Name: "Bandung",      Population: 400  },
  { CityID: 3, CountryID: 1, Name: "Medan",        Population: 200  },
  { CityID: 4, CountryID: 2, Name: "Kuala Lumpur", Population: 600  },
  { CityID: 5, CountryID: 2, Name: "Penang",       Population: 300  },
  { CityID: 6, CountryID: 2, Name: "Johor Bahru",  Population: 200  },
  { CityID: 7, CountryID: 3, Name: "Singapura",    Population: 400  },
];

const building = [
  { BuildingID: 1, CityID: 1, Name: "Bidakara",           Floors: 30 },
  { BuildingID: 2, CityID: 1, Name: "Mulia Tower",        Floors: 40 },
  { BuildingID: 3, CityID: 2, Name: "Cihampelas Apart",   Floors: 20 },
  { BuildingID: 4, CityID: 4, Name: "Petronas",           Floors: 70 },
  { BuildingID: 5, CityID: 5, Name: "Standard Chartered", Floors: 35 },
  { BuildingID: 6, CityID: 7, Name: "Marina Bays",        Floors: 50 },
  { BuildingID: 7, CityID: 7, Name: "Allianz Tower",      Floors: 60 },
];

// Helper: print a result table
function printResult(title, sqlQuery, rows) {
  console.log("\n" + "=".repeat(60));
  console.log(title);
  console.log("-".repeat(60));
  console.log("SQL:\n" + sqlQuery);
  console.log("-".repeat(60));
  console.log("Output:");
  if (rows.length === 0) {
    console.log("  (no rows)");
  } else {
    rows.forEach((r) => console.log(" ", JSON.stringify(r)));
  }
  console.log("=".repeat(60));
}

// A) Kota dengan populasi > 500 
/*
  SELECT CityID, Name, Population
  FROM   City
  WHERE  Population > 500;
*/
const resultA = city
  .filter((c) => c.Population > 500)
  .map(({ CityID, Name, Population }) => ({ CityID, Name, Population }));

printResult(
  "A) Kota dengan populasi > 500",
  `SELECT CityID, Name, Population
FROM   City
WHERE  Population > 500;`,
  resultA
);

// B) Kota yang tidak mempunyai gedung
/*
  SELECT c.CityID, c.Name
  FROM   City c
  LEFT JOIN Building b ON c.CityID = b.CityID
  WHERE  b.BuildingID IS NULL;
*/
const cityIDsWithBuilding = new Set(building.map((b) => b.CityID));
const resultB = city
  .filter((c) => !cityIDsWithBuilding.has(c.CityID))
  .map(({ CityID, Name }) => ({ CityID, Name }));

printResult(
  "B) Kota yang tidak mempunyai gedung",
  `SELECT c.CityID, c.Name
FROM   City c
LEFT JOIN Building b ON c.CityID = b.CityID
WHERE  b.BuildingID IS NULL;`,
  resultB
);

// C) Negara yang mempunyai kota dengan populasi < 500
/*
  SELECT DISTINCT co.CountryID, co.Name
  FROM   Country co
  JOIN   City c ON co.CountryID = c.CountryID
  WHERE  c.Population < 500;
*/
const countryIDsWithSmallCity = new Set(
  city.filter((c) => c.Population < 500).map((c) => c.CountryID)
);
const resultC = country
  .filter((co) => countryIDsWithSmallCity.has(co.CountryID))
  .map(({ CountryID, Name }) => ({ CountryID, Name }));

printResult(
  "C) Negara yang punya kota dengan populasi < 500",
  `SELECT DISTINCT co.CountryID, co.Name
FROM   Country co
JOIN   City c ON co.CountryID = c.CountryID
WHERE  c.Population < 500;`,
  resultC
);

// D) Gedung di Indonesia dan Malaysia
/*
  SELECT b.BuildingID, b.Name AS Building, ci.Name AS City, co.Name AS Country
  FROM   Building b
  JOIN   City    ci ON b.CityID    = ci.CityID
  JOIN   Country co ON ci.CountryID = co.CountryID
  WHERE  co.Name IN ('Indonesia', 'Malaysia');
*/
const resultD = building
  .map((b) => {
    const c  = city.find((ci) => ci.CityID    === b.CityID);
    const co = country.find((co) => co.CountryID === c.CountryID);
    return { BuildingID: b.BuildingID, Building: b.Name, City: c.Name, Country: co.Name };
  })
  .filter((r) => ["Indonesia", "Malaysia"].includes(r.Country));

printResult(
  "D) Gedung di Indonesia dan Malaysia",
  `SELECT b.BuildingID, b.Name AS Building, ci.Name AS City, co.Name AS Country
FROM   Building b
JOIN   City    ci ON b.CityID     = ci.CityID
JOIN   Country co ON ci.CountryID = co.CountryID
WHERE  co.Name IN ('Indonesia', 'Malaysia');`,
  resultD
);

// E) Gedung di Indonesia & Malaysia dengan lantai > 40
/*
  SELECT b.BuildingID, b.Name AS Building, b.Floors, ci.Name AS City, co.Name AS Country
  FROM   Building b
  JOIN   City    ci ON b.CityID     = ci.CityID
  JOIN   Country co ON ci.CountryID = co.CountryID
  WHERE  co.Name IN ('Indonesia', 'Malaysia')
    AND  b.Floors > 40;
*/
const resultE = building
  .map((b) => {
    const c  = city.find((ci) => ci.CityID    === b.CityID);
    const co = country.find((co) => co.CountryID === c.CountryID);
    return { BuildingID: b.BuildingID, Building: b.Name, Floors: b.Floors, City: c.Name, Country: co.Name };
  })
  .filter((r) => ["Indonesia", "Malaysia"].includes(r.Country) && r.Floors > 40);

printResult(
  "E) Gedung di Indonesia & Malaysia dengan lantai > 40",
  `SELECT b.BuildingID, b.Name AS Building, b.Floors, ci.Name AS City, co.Name AS Country
FROM   Building b
JOIN   City    ci ON b.CityID     = ci.CityID
JOIN   Country co ON ci.CountryID = co.CountryID
WHERE  co.Name IN ('Indonesia', 'Malaysia')
  AND  b.Floors > 40;`,
  resultE
);
