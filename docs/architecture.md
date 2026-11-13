# Architecture

## Current prototype

The preserved prototype is a standalone HTML document containing:

- HTML views and forms
- CSS layout, responsive rules, and theme
- JavaScript state and derived calculations
- Chart.js rendering
- SheetJS import/export
- LocalStorage/SessionStorage fallback
- Optional REST API integration
- Optional Firebase Auth/Firestore integration
- Client-side encryption helpers for the Firebase ledger

The file is intentionally retained at `prototype/budget-dashboard-new.html`.

## Runtime modes

1. **Local mode:** data is stored in the browser and is suitable for demonstrations and offline prototyping.
2. **REST mode:** the prototype detects an API health endpoint and sends authenticated requests.
3. **Firebase mode:** the prototype uses Firebase Auth and Firestore when configuration is supplied.

## Phase 1 structure

Phase 1 adds documentation, source-material preservation, reusable design tokens, and the H ∈ M SVG mark. It does not split or rewrite the prototype yet.

## Future modularisation

The approved incremental direction is to extract modules in this order:

1. Domain types and schema validation
2. Storage adapters
3. Authentication and authorisation adapters
4. Calculation and reporting functions
5. UI rendering and event wiring
6. Charts and import/export

Each extraction should preserve existing behaviour and be covered by focused tests before the next extraction.

