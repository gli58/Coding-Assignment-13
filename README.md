# Project Title: Web Component Library (Coding Assignment 12)

**Student:** Gavin Li
**Course:** Web Development 2
**Date:** October 2025

---

## 1. Overview
This project is a web component library built using React, TypeScript, and Storybook.
The goal of this assignment is to create reusable, responsive UI components and deploy them using Docker and Nginx.
Each component has both a default and a disabled state, and Storybook provides interactive controls for visual testing.

---

## 2. Technologies Used
- React with TypeScript
- Styled-Components for styling
- Storybook for documentation
- Jest and React Testing Library for testing
- Docker and Nginx for deployment

---

## 3. Components Included
The component library contains the following components:

- Button
- Label
- Text
- Dropdown
- Radio
- Card
- Img
- HeroImage
- Table
 • TableHeader
 • TableRow
 • TableCell
 • TableFooter

Each component folder contains:
```
ComponentName/
  ├── ComponentName.tsx
  ├── ComponentName.types.tsx
  ├── ComponentName.tests.tsx
  ├── ComponentName.stories.tsx
  └── index.ts

```


---

## 4. Testing
To run all tests:
```
npm test
```

Expected output:
```
Test Suites: 13 passed, 13 total
Tests: 26 passed, 26 total
```


Each component includes:
1. A test to confirm that it renders correctly.
2. A test to confirm that the background color or style changes when disabled.

---

## 5. Local Development
To run the app in development mode:
```
npm install
npm start
```

Then open:
```
http://localhost:3000
```

---

## 6. Docker Setup

### (1) Build and Run Main Component Library
Build a production image and start the container:
```
docker build -t li_gavin_coding_assignment12 -f Dockerfile .
docker run -d --name li_gavin_coding_assignment12 -p 8083:8083 li_gavin_coding_assignment12
```

Access the site at:
```
http://127.0.0.1:8083
```

### (2) Build and Run Storybook
```
docker build -t li_gavin_storybook -f Dockerfile.storybook .
docker run -d --name li_gavin_storybook -p 6006:6006 li_gavin_storybook
```

Access Storybook at:
```
http://127.0.0.1:6006
```

### (3) Clean Up Old Containers
```
docker stop li_gavin_coding_assignment12 li_gavin_storybook
docker rm li_gavin_coding_assignment12 li_gavin_storybook
docker rmi li_gavin_coding_assignment12 li_gavin_storybook
docker builder prune -af
```


---

## 7. File Structure
```
ui-garden/
│
├── Dockerfile
├── Dockerfile.storybook
├── nginx.conf
├── nginx-storybook.conf
├── package.json
├── README.md
└── src/
    ├── App.tsx
    ├── theme.ts
    ├── setupTests.ts
    ├── test-utils.tsx
    └── lib/
        └── components/
            ├── Button/
            ├── Label/
            ├── Text/
            ├── Dropdown/
            ├── Radio/
            ├── Img/
            ├── HeroImage/
            ├── Card/
            └── Table/
```


---

## 8. Explanation and Learning Summary
This assignment demonstrates how to:
- Build a component library using React and TypeScript.
- Use Styled-Components for consistent theming and responsiveness.
- Document and test UI components using Storybook.
- Write and run automated tests.
- Package and deploy a production build with Docker and Nginx.
