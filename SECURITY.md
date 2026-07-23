# Security Policy

## Supported versions

Security fixes are currently applied to the latest prerelease and the `main` branch.

## Reporting a vulnerability

Do not disclose suspected vulnerabilities in a public issue. Report them privately to the repository owner through GitHub's private vulnerability reporting feature when available.

Include:

- A clear description of the issue
- Reproduction steps or a minimal proof of concept
- The affected version and Windows environment
- Expected and observed behavior
- Potential impact

Never include live credentials, access tokens, personal media, or private server addresses in a report.

## Security expectations

- No secrets or credentials in source control
- Least-privilege GitHub Actions permissions
- Dependency updates reviewed through automated pull requests
- Release assets produced only by the repository workflow
- Build evidence retained with every published prerelease
