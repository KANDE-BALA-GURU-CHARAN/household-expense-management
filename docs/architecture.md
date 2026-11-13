# Product architecture

H ∈ M is a browser-based household finance application. The user interface provides the dashboard, transaction forms, reports, charts, household member management, and import/export tools.

## Application areas

- **Dashboard:** financial summary and visual trends
- **Transactions:** income, expenses, loans, savings, payment status, and dates
- **Reports:** monthly, member, type, category, and detailed views
- **People:** household membership and access roles
- **Import and backup:** spreadsheet import, CSV/Excel export, and JSON backup

## Storage options

The current application can work with local browser storage and also contains optional paths for a REST service or Firebase. Local storage is convenient for trying the application on one device; it should not be treated as secure shared production storage.

## Visual identity

The application keeps its existing colours, typography, spacing, and layout style. Reusable colour values are recorded in [src/styles/tokens.css](../src/styles/tokens.css), and the H ∈ M mark is available in [src/assets/hm-logo.svg](../src/assets/hm-logo.svg).

Future improvements should strengthen the existing application instead of replacing its household-finance workflow unnecessarily.

