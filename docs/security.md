# Security and privacy

H ∈ M handles household financial information, so security is an important part of its continued improvement.

## Current safeguards

- User-facing values are generally escaped before being displayed.
- The application includes household roles such as admin, editor, and viewer.
- The optional Firebase path includes encrypted ledger handling.
- Recovery and invitation codes use random generation.
- The repository contains no real credentials or private keys.

## Important limitation

When the application uses browser storage, the data belongs to that browser profile. Someone with access to the device or browser developer tools may be able to read or change it. Local browser storage is suitable for testing and personal demonstrations, not as a secure multi-device financial service.

## Before shared production use

- Enforce roles on the server or Firebase rules, not only in the browser.
- Validate imported files and restored backups.
- Handle failed saves and simultaneous edits safely.
- Protect sessions and secrets outside source control.
- Use HTTPS, dependency controls, backups, monitoring, and security testing.

