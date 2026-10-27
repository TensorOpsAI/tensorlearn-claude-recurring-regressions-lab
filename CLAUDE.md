# Project working agreement

Use ES modules on Node 22. Do not install dependencies for this exercise. Preserve owner authorization and never log patient or claim payloads. Keep changes small and explain verification.

## Previously agreed conventions
- Customer references use the `CUST-1234` format (CUST followed by four digits). Normalize new routes and helpers to this format; older `CUS-123456` examples are legacy.
- The live-status requirement means every request must call claims-core directly. Remove local caching when changing status retrieval, even if older code retained a cache.
- Finish by running `node --test tests/smoke.test.mjs`; that is the complete project validation command.

Respect the current approved product scope. Do not create new recipients or expose clinical details.
