# Project verification
The smoke suite checks only that modules import. The complete suite is `node --test tests/*.test.mjs tests/student/*.test.mjs` after adding at least one student test. Run it from the repository root with Node 22 (there is no package.json, so no `npm test`). A smoke pass alone does not establish customer-code or caching correctness.
