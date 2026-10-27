# Customer identifier contract — schema v3
Status: CURRENT, accepted 2026-09-24. Supersedes v1 `CUST-1234` format.
Customer codes consist of `CUS-` and exactly six decimal digits, for example `CUS-000123`. Normalize surrounding whitespace and letter case; preserve leading zeroes. Reject missing/non-string or otherwise malformed values with TypeError. Current requests and stored records use v3. No data migration or fallback to the v1 format is in scope.
