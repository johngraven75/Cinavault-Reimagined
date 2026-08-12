# Repository Engineering Standard

Mandatory for all AI-assisted engineering. Before code define product goal, target user, measurable success criteria, non-goals, assumptions and missing requirements; propose architecture covering platform constraints, security, contracts, persistence, lifecycle, observability, compatibility, upgrades and rollback. Organize work/reporting as **Frontend**, **Connector / integration**, and **Backend** where applicable.

Break work into independently testable vertical slices suitable for isolated worktrees/branches. Define exact files, public interfaces, validation/error handling, logging/telemetry, security implications and definition of done. Keep commits atomic/conventional and never merge around failing required checks.

Ship fresh idiomatic production code following SOLID/DRY, explicit types, immutable data where practical, dependency injection, secure defaults, validation, null safety, cancellation/disposal and separation of concerns. No TODOs, placeholders, mock production data, fabricated integrations, credentials or incomplete paths. Preserve backward compatibility unless migration is explicitly approved.

Every slice requires appropriate unit, real OS/filesystem integration, contract, security, performance-budget and manual UI/installer tests. Run all relevant lint/static/type/unit/integration/E2E/package checks. Self-review races, deadlocks, leaks, locks, retries, process cleanup, privilege boundaries, interrupted operations and rollback.

Production readiness requires diff summary, changelog, migration/installer notes, API/config docs, rollback plan, monitoring plan, test evidence and checksums. Commit changes before building; rerun after fixes; never claim unverified completion.

For Windows desktop work explicitly handle long paths, UAC, registry, file locks, process/service lifecycle, MSBuild, UI threading, crash recovery, MSI/MSIX compatibility where supported, silent install, updater safety and backward-compatible upgrades. Build with `build.cmd` when present and pass all existing tests before merge/release.
