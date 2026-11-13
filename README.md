# H ∈ M — Household Expense Management

H ∈ M is a household finance management application for recording income, expenses, loans, savings, budgets, and shared household transactions.

## Phase 1 status

This repository preserves the original working prototype and establishes a maintainable project structure without migrating the technology stack or changing the existing visual identity.

The preserved prototype is available at [prototype/budget-dashboard-new.html](prototype/budget-dashboard-new.html). It remains a standalone vanilla HTML, CSS, and JavaScript application and is not overwritten by the Phase 1 organisation work.

## Existing features

- Dashboard KPIs and Chart.js visualisations
- Income, expense, loan, and savings tracking
- Budget-versus-actual calculations
- Monthly, member, type, category, and detail reports
- Transaction search, sorting, pagination, editing, and deletion
- CSV and Excel import/export
- JSON backup and restore
- Admin, editor, and viewer roles
- Household member invitations
- Local browser storage fallback
- Optional REST API and Firebase integration paths
- Responsive layout and reduced-motion support

## Technology

The current prototype uses:

- Vanilla HTML, CSS, and JavaScript
- Chart.js for charts
- SheetJS for spreadsheet import/export
- Browser LocalStorage and SessionStorage fallback
- Optional Firebase Auth/Firestore integration
- Optional REST API integration

Phase 1 intentionally does not introduce a framework, backend migration, or build system.

## Repository structure

```text
household-expense-management/
├── README.md
├── .env.example
├── .gitignore
├── prototype/
│   └── budget-dashboard-new.html
├── src/
│   ├── assets/
│   └── styles/
│       └── tokens.css
├── docs/
│   ├── audit-report.md
│   ├── architecture.md
│   ├── deployment.md
│   ├── requirements.md
│   ├── security.md
│   └── source-materials/
├── firebase/
└── tests/
```

## Run the prototype

The prototype can be opened directly in a modern browser:

1. Open `prototype/budget-dashboard-new.html`.
2. Create a local account or sign in.
3. Use the sample data option to explore the dashboard.

For browser features that require an HTTP origin, serve the repository with any static file server and open the prototype path. No package installation is required for the preserved prototype.

Firebase and REST API integrations are opt-in. Do not place production credentials in the HTML file or commit them to this repository. See [.env.example](.env.example) and [docs/deployment.md](docs/deployment.md).

## Design tokens

The existing palette is documented as reusable CSS custom properties in [src/styles/tokens.css](src/styles/tokens.css). These values are copied from the prototype and are intended to prevent accidental visual drift. Phase 1 does not change the prototype theme.

The H ∈ M mark is provided in [src/assets/hm-logo.svg](src/assets/hm-logo.svg). It uses the existing ink, marigold, green, violet, and brick palette.

## Roadmap

1. **Phase 1 — Preserve and organise:** completed in this repository.
2. **Phase 2 — Stabilise core behaviour:** validation, save/retry handling, invitation rollback, import validation, and focused tests.
3. **Phase 3 — Complete core requirements:** category budgets, alerts, date-range filters, PDF export, and improved contribution reporting.
4. **Phase 4 — Planned features:** recurring transactions, reminders, notifications, receipts, savings goals, and settings.
5. **Phase 5 — Production readiness:** server-side authorisation, security rules, migrations, backups, CI, accessibility, and deployment.

## Documentation

- [Audit report](docs/audit-report.md)
- [Architecture](docs/architecture.md)
- [Requirements](docs/requirements.md)
- [Security](docs/security.md)
- [Deployment](docs/deployment.md)

