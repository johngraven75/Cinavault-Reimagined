# Contributing

## Development workflow

1. Create a focused branch from `main`.
2. Keep changes scoped and preserve the feature/parity contracts.
3. Run the complete local validation suite.
4. Open a pull request with a clear summary, testing evidence, and screenshots for UI changes.

```powershell
npm install
npm run validate
cargo check --manifest-path src-tauri/Cargo.toml
```

## Pull-request requirements

- TypeScript must remain strict and error-free.
- Frontend production build must pass.
- Rust validation must pass.
- Standalone release gates must pass.
- User-facing capabilities may not be silently removed.
- Packaging or version changes must update `RELEASE_NOTES.md`.
- Secrets, credentials, generated installers, build output, and local databases must never be committed.

## Commit style

Use concise conventional prefixes where practical:

- `feat:` product capability
- `fix:` defect correction
- `test:` validation coverage
- `docs:` documentation
- `ci:` workflow and release automation
- `build:` packaging or dependency configuration
- `chore:` maintenance

## Release discipline

`main` is release-producing. Relevant pushes trigger full Windows validation, MSI/NSIS packaging, artifact retention, and prerelease publication. Do not bypass failed gates or manually label an unverified build as complete.
