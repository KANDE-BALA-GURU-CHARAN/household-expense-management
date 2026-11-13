# Using and deploying the application

## Personal computer

Download the repository ZIP from GitHub, extract it, and open `src/index.html` in a current browser. Windows users can use Edge, Chrome, or Firefox. macOS users can use Safari, Chrome, or Firefox.

No separate installation is required for the browser version.

## Mobile

Open the application in a mobile browser. The layout adapts to smaller screens. Landscape orientation is recommended for wide transaction tables and charts.

The current application is a web application and is not yet a separately installed Android or iOS app.

## GitHub Pages

The repository includes `.github/workflows/pages.yml`, which publishes the `src` folder as a static GitHub Pages site after Pages is enabled with **GitHub Actions** as the source.

GitHub Pages hosts the browser interface but does not provide a database or server-side authentication. The current release therefore remains local-only. Do not present it as secure multi-device household storage until a protected backend is added.

