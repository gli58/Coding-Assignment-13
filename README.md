# Assignment 13 - UI Component Library

**Gavin Li**
Business Systems Build and Testing
November 2025

A React component library with automated code quality checks. Built on top of Assignment 12, this adds Husky pre-commit hooks, ESLint, Prettier, and GitHub Actions CI/CD. Everything runs in Docker on port 8018.

## Tech Stack

- React + TypeScript
- Styled Components
- Storybook
- Prettier & ESLint
- Husky (git hooks)
- Jest (testing)
- Docker + Nginx
- GitHub Actions

## Setup
```bash
git clone https://github.com/gli58/Coding-Assignment-13.git
cd Coding-Assignment-13
npm install
```

## Running Locally
```bash
npm start          # dev server on localhost:3000
npm run storybook  # component docs on localhost:6006
```

## Code Quality Tools
```bash
npm run format     # auto-format code
npm run lint       # check for errors
npm test           # run tests
```

## Pre-commit Hooks

Husky runs checks before every commit:
- Prettier formatting
- ESLint linting
- All tests

If something fails, commit is blocked. Just fix the issues and try again.
```bash
git commit -m "your message"
# hooks run automatically
```

## GitHub Actions

Every push triggers CI workflow:
1. Install dependencies
2. Run ESLint
3. Run tests
4. Build app

Check the Actions tab on GitHub to see results.

## Docker

Build and run:
```bash
docker build -t li_gavin_coding_assignment13 .
docker run -d --name li_gavin_coding_assignment13 -p 8018:8018 li_gavin_coding_assignment13
```

Open http://127.0.0.1:8018 to see Storybook with all components.

Stop:
```bash
docker stop li_gavin_coding_assignment13
docker rm li_gavin_coding_assignment13
```

## Components

- Button
- Label
- Text
- Card
- Dropdown
- Radio
- Image
- HeroImage
- Table (with Header, Row, Cell, Footer)

All components have tests and Storybook docs.

## Testing
```bash
npm test -- --watchAll=false
```

Results:
- 14 test suites
- 27 tests total
- All passing

## Common Issues

**Hooks not working?**
```bash
npm run prepare
```

**Commit blocked?**
```bash
npm run format
npm run lint:fix
```

**Docker fails?**
Make sure tests pass locally first.

**Port 8018 in use?**
```bash
# Windows
netstat -ano | findstr :8018

# Mac/Linux
lsof -i :8018
```

## File Structure
```
.
├── .github/workflows/ci.yml    # CI config
├── .husky/pre-commit           # git hook
├── src/lib/components/         # all components
├── .eslintrc.json
├── .prettierrc
├── Dockerfile                  # port 8018
├── nginx.conf
└── package.json
```

## Notes

- Can't commit without passing checks (by design)
- Docker build includes all quality checks
- Storybook shows interactive component demos
