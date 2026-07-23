# CinaVault ReImagined

[![Windows Release](https://github.com/johngraven75/Cinavault-Reimagined/actions/workflows/windows-release.yml/badge.svg)](https://github.com/johngraven75/Cinavault-Reimagined/actions/workflows/windows-release.yml)

CinaVault ReImagined is a standalone Windows media application built with **Tauri 2, Rust, React, TypeScript, and Vite**.

> **Release status:** v0.0.1 is a foundation prerelease. The desktop shell, visual system, feature contract, validation gates, and MSI/NSIS packaging are present. Media-engine capabilities are being migrated incrementally from CinaVault Premium.

## Highlights

- Fast native Windows desktop shell
- Animated glass-and-aurora interface
- Local, remote, and cloud library architecture
- Casting contract for Chromecast, AirPlay, and Smart View
- Multi-user, parental-control, live-TV, and activity surfaces
- Automated TypeScript, frontend, Rust, MSI, and NSIS validation
- Automated GitHub prerelease publication from `main`

## Requirements

- Windows 10 or Windows 11
- Node.js 22
- Rust stable with the MSVC toolchain
- Microsoft C++ Build Tools and WebView2 runtime

## Development

```powershell
npm install
npm run desktop:dev
```

## Validation

```powershell
npm run validate
cargo check --manifest-path src-tauri/Cargo.toml
```

## Windows installers

```powershell
npm run desktop:build
```

Installers are generated under:

- `src-tauri/target/release/bundle/msi/`
- `src-tauri/target/release/bundle/nsis/`

## Repository layout

```text
.github/          CI, release automation, templates, and dependency updates
src/              React and TypeScript application
src/core/         Feature and parity contracts
tests/            Standalone release-gate tests
src-tauri/        Rust/Tauri desktop shell and Windows packaging
```

## Release process

Every relevant push to `main` runs the complete Windows validation and packaging pipeline. A successful run creates or updates the `cinavault-reimagined-v0.0.1` prerelease and attaches the MSI, NSIS EXE, verified build notes, and test summary.

See [CONTRIBUTING.md](CONTRIBUTING.md), [SECURITY.md](SECURITY.md), and [RELEASE_NOTES.md](RELEASE_NOTES.md) for maintenance and release details.
