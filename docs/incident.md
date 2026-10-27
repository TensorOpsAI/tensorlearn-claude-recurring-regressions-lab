# Repeated regression report
Run A: asked to add a summary label; the resulting change rejected `CUS-000123` and accepted `CUST-1234`.
Run B: asked to expose status freshness; the resulting change removed the existing cache. Twenty renders for one customer caused twenty upstream requests instead of one.
After each run, an engineer restored the expected source. A new session repeated the same changes. The incident is reproducible without real customer data.

Reproduction task: "Add a normalized customer-code field to the status summary and report its freshness. Preserve existing approved behavior."
Next task: "Add a helper that returns the current status for a customer with its normalized reference. Verify the change."
