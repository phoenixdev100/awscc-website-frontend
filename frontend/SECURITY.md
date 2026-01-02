<div align="center">

# Security Policy

</div>

## Supported Versions

We release patches for security vulnerabilities. Which versions are eligible for receiving such patches depends on the CVSS v3.0 Rating:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

The AWS Cloud Club team takes security bugs seriously. We appreciate your efforts to responsibly disclose your findings, and will make every effort to acknowledge your contributions.

To report a security issue, please use the GitHub Security Advisory ["Report a Vulnerability"](https://github.com/phoenixdev100/aws-cloud-club-website/security/advisories/new) tab.

The AWS Cloud Club team will send a response indicating the next steps in handling your report. After the initial reply to your report, the security team will keep you informed of the progress towards a fix and full announcement, and may ask for additional information or guidance.

### What to Include

Please include the following information along with your report:

- Type of issue (e.g. buffer overflow, SQL injection, cross-site scripting, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit the issue

This information will help us triage your report more quickly.

### Preferred Languages

We prefer all communications to be in English.

## Policy

- We will respond to your report within 72 hours with our evaluation of the report and an expected resolution date.
- If you have followed the instructions above, we will not take any legal action against you in regard to the report.
- We will handle your report with strict confidentiality, and not pass on your personal details to third parties without your permission.
- We will keep you informed of the progress towards resolving the problem.
- In the public disclosure, we will give your name as the discoverer of the problem (unless you desire otherwise).

## Security Best Practices

When contributing to this project, please follow these security guidelines:

### Code Security
- Never commit sensitive information (API keys, passwords, tokens) to the repository
- Use environment variables for configuration
- Validate and sanitize all user inputs
- Keep dependencies up to date
- Follow secure coding practices

### Dependency Management
- Regularly update dependencies to patch known vulnerabilities
- Use `npm audit` to check for security issues
- Review security advisories for used packages

### Deployment Security
- Use HTTPS in production
- Implement proper Content Security Policy (CSP)
- Secure headers configuration
- Regular security assessments

## Contact

For any security-related questions or concerns, please contact us at:
- Email: awscloudclub.sharda.univeristy@gmail.com
- GitHub: [@phoenixdev100](https://github.com/phoenixdev100)

Thank you for helping keep AWS Cloud Club and our users safe!
