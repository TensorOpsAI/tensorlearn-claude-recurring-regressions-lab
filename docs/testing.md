# Project verification
The smoke suite checks only that modules import. The complete suite is `node --test tests/*.test.mjs tests/student/*.test.mjs` after adding at least one student test. During this exercise use the fixed `regressions.full` operation to run it. A smoke pass alone does not establish customer-code or caching correctness.
