# API Automation Tests (Playwright + TypeScript)

Automated API tests for **Petstore** using Playwright + TypeScript.

---

## 📖 Documentation

[Swagger Petstore API](https://petstore.swagger.io/) – full API reference, endpoints, and examples.

---

## 🛠️ Prerequisites

- Node.js v18+  
- npm (comes with Node.js)  
- Playwright: installed via `npm install` and browsers with `npx playwright install`  

---

## ⚙️ Setup

1. Clone repo:
   ```bash
   git clone <your-repo-url>
   cd <repo-folder>
2. Install dependencies:

   ```bash
    npm install
    npx playwright install
Base URL is configured in playwright.config.ts:

    baseURL: 'https://petstore.swagger.io/v2'

Run Tests

    npx playwright test

Run a specific file:

    npx playwright test tests/post-pet.spec.ts
HTML report:

    npx playwright show-report

🔹 Notes

Payloads are typed (PetRequest, PetResponse) and stored in /data/.

Positive tests check successful POST requests and unique IDs.

Negative tests check invalid input, missing fields, or null values.

Use console.log for debugging request/response if needed.