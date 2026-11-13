# Deployment

## Phase 1 local use

The preserved prototype can be opened directly in a modern browser. A static HTTP server may be used when browser APIs require an HTTP origin. No build or package installation is required for the prototype.

## Configuration

Do not put real credentials in the HTML file or commit them. Copy `.env.example` to a local environment file only when a later integration requires configuration.

The prototype supports optional REST and Firebase paths, but this repository does not yet include a production backend, Firebase project, Firestore rules, database migrations, or deployment automation.

## Production checklist

- Choose and document one supported backend path.
- Enforce household and role access on the server or Firebase rules.
- Configure HTTPS and secure headers.
- Configure production secrets outside source control.
- Add database migrations and automated backups.
- Add CI checks and focused automated tests.
- Validate import, restore, sign-in, invitation, and synchronisation flows.
- Test accessibility and responsive behaviour.
- Monitor errors and failed synchronisation.

