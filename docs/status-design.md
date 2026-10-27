# Accepted live-status design — 2026-09-24
"Live" means a freshness window of 30 seconds, not an upstream request on every render. claims-core permits 50 requests per second. Cache each normalized customer code for ttlMs (default 30000); refresh at age >= ttlMs. Do not cache failures. Caller must enforce owner authorization before requesting status. Never log claim payloads.

Factory: createClaimsClient(fetchClaim, {now = Date.now, ttlMs = 30000} = {}) returns {get(customerCode)}. get returns a Promise. fetchClaim receives the normalized current-schema customer code. now is a test clock returning milliseconds. Independent customer codes must have independent entries.
