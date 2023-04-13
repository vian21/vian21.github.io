## Trend Micro + OWASP

- `Cloud one` event
- owasp has a slack with jobs posting
- OWASP top 10 vulnerability index, and open source projects(dependency check, Vulnerable apps for educational purposes, workflows and automation)

## Importance of security in SDLC

- what is more important? stengthening the weakest link or the strongest link?

## Owasp top 10

Three friends that keep me awake at night:

### 1. vulnerable components

- CWE - common weakness enumeration
- malicious clone
- unmaintained library | dependency
- Defence:
  1. provenance: knowing the sourcce of the components you use, contributers, issues, maintainers, type-squating ..
  1. Vulnerability check:
     - Snyk
     - OWASP dependency check
  1. code scanning: manual or automated
  1. SBOM: software bill of materials; a standard schema indentifying third party components and their versions ()

### 2. Insecure design

- different from insecure implementation

### 3. SSRF (server Side Request Forgery)

- Input validatiobn
- document code itself
- DOmain name validation
- Firewall: IP routes and tables
- Network segmentation: restrict access to the network. A service should not have access to services it does not need
- monitoring
- IMDSv2 Sidebar

## YAML

- `name`: name of the action
- `on`: when to run the action
  - branches: branches which will trigger the action
- `jobs`:
  - `name`: name of the job
    - `needs`: name of the job that this job depends on. This means that the current job will wait for the dependency job to finish first before running
    - `runs-on`: which VM to use to run the action. OS eg: ubuntu-latest
    - `steps`:
      - `- uses`: name of the action -`- name`: name of the step
      - `run`: command to run

```yaml
name: Owasp con
on: commit
    branches: main, master
jobs:
    lint:
        runs-on: ubuntu-latest
        steps:
            - name: run linter
            - run: npx run lint
```

Question: reduce feedback loop time?

## [Software Composition Analysis](https://en.wikipedia.org/wiki/Software_composition_analysis) (SCA)

- `SCA` is automated process of checking open souce components in a software project for known vulnerabilities

Examples:

- Synk
- OWASP dependency check

## Zero trust

`Zero trust` is a security model that assumes that all users and devices(internal or external) are untrustworthy until they are authenticated and verified. It always assumes `breach` and an Attacker might be inside the network.
