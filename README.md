# Rok Šped website

Static marketing website implemented from the approved Figma design.

## Stack

- React and Vite
- Tailwind CSS
- React Router
- Framer Motion
- optional Spline scene in the final project phase

All website copy and media are stored locally in the repository. The project has no CMS or Sanity runtime.

## Commands

```powershell
npm.cmd run dev
npm.cmd run lint
npm.cmd run build
npm.cmd run preview
```

## Automatic deployment

Every push to `main` builds and deploys `dist/` through FTPS. The workflow is in `.github/workflows/deploy.yml` and can also be started manually from the GitHub Actions tab.

Add these values to the repository's `production` environment in GitHub:

- `FTP_SERVER` - FTP/FTPS hostname from the hosting provider
- `FTP_USERNAME` - FTP username
- `FTP_PASSWORD` - FTP password
- `FTP_SERVER_DIR` - target directory, for example `/public_html/`

Add this optional production variable to the same environment:

- `VITE_SITE_URL` - public site URL, for example `https://www.roksped.rs`

The workflow uses FTPS with strict TLS verification. If the hosting provider only supports plain FTP, change `protocol: ftps` to `protocol: ftp` and remove `security: strict` in the workflow.
