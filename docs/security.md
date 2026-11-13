# Security

## Current protections

- Dynamic values are generally HTML-escaped before rendering.
- Firebase ledger data uses browser-side AES-GCM encryption when Firebase mode is configured.
- Firebase key wrapping uses PBKDF2-derived AES keys.
- Recovery and invitation codes use cryptographic randomness.
- The UI includes role checks and sign-in attempt throttling.

## Current limitations

- LocalStorage is readable and modifiable by anyone with browser access.
- Client-side permission checks can be bypassed and are not an authorisation boundary.
- Firebase security rules were not supplied with the prototype.
- Restore and import data are not yet schema-validated.
- Remote save failures have no durable retry queue or conflict resolution.
- CDN scripts are not integrity-pinned.
- Runtime requests to external font/CDN providers affect availability and privacy.

## Phase 1 policy

No credentials, Firebase configuration, tokens, private keys, or production endpoints are committed. `.env.example` contains placeholders only. The local mode must be described as demonstration/offline storage, not production security.

## Before production

Implement and verify server-side or Firebase rule enforcement, secure session handling, schema validation, audit logging, rate limiting, backup recovery, dependency pinning, HTTPS, and security testing.

