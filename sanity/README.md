# Rok Šped v4 — Sanity Studio

This Studio reuses the existing Rok Šped Sanity project and production dataset:

- Project ID: `7003ks3q`
- Dataset: `production`
- Existing Studio host: `roksped`

The original `rokspedv3/sanity` Studio is not modified by this project. The current v3 schema types are intentionally retained here to preserve existing production documents. v4 document types and a new Studio structure are added in later plan tasks; do not rename or remove legacy types before an owner-approved cutover.

## Local commands

From the `rokspedv4` root on this Windows environment:

```powershell
npm.cmd --prefix sanity run dev
npm.cmd --prefix sanity run build
```

Do not run deploy, dataset import/export, delete, or mutation commands as part of local setup. Sanity read/write tokens and any other credentials belong only in untracked local environment files when a later task explicitly requires them.
