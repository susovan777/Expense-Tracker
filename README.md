# Expense Tracker

A full-stack Expense Tracker application built with React, Node.js, Express, Prisma, and PostgreSQL.

## Features

### Dashboard

* View Total Expenses
* View Monthly Expenses
* View Recent Transactions

### Expense Management

* Add Expense
* Edit Expense
* Delete Expense
* View Expense History
* Search Expenses
* Filter by Category

### Validation

* Frontend form validation
* Backend validation using Zod

### UI

* Responsive Design
* Dark Theme
* Mobile Friendly Interface

---

## Tech Stack

### Frontend

* React
* Vite
* React Router
* Axios
* React Hook Form
* Zod
* Tailwind CSS v4
* Lucide React

### Backend

* Node.js
* Express.js
* Prisma ORM
* PostgreSQL (Neon)

### Development Tools

* pnpm
* Prisma Studio
* Postman

---

## Project Structure

```text
expense-tracker/

├── client/
│   ├── src/
│   └── ...
│
├── server/
│   ├── prisma/
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   ├── validations/
│   │   └── config/
│   └── ...
│
└── README.md
```

---

## API Endpoints

### Expenses

| Method | Endpoint          |
| ------ | ----------------- |
| GET    | /api/expenses     |
| GET    | /api/expenses/:id |
| POST   | /api/expenses     |
| PUT    | /api/expenses/:id |
| DELETE | /api/expenses/:id |

### Search

| Method | Endpoint                     |
| ------ | ---------------------------- |
| GET    | /api/expenses/search?q=pizza |

### Categories

| Method | Endpoint        |
| ------ | --------------- |
| GET    | /api/categories |

### Dashboard

| Method | Endpoint       |
| ------ | -------------- |
| GET    | /api/dashboard |

---

## Environment Variables

### Backend (.env)

```env
DATABASE_URL=your_neon_database_url
PORT=5000
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/susovan777/Expense-Tracker.git
```

---

### Backend Setup

```bash
cd server

pnpm install
```

Generate Prisma Client

```bash
pnpm prisma generate
```

Run Migrations

```bash
pnpm prisma migrate dev
```

Start Server

```bash
pnpm dev
```

Backend runs on:

```text
http://localhost:5000
```

---

### Frontend Setup

```bash
cd client

pnpm install
```

Start Development Server

```bash
pnpm dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## Database

This project uses:

* PostgreSQL
* Prisma ORM
* Neon Database

Schema:

```prisma
model Expense {
  id          String   @id @default(uuid())
  title       String
  amount      Decimal
  category    String
  description String?

  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

---

## Future Improvements

* User Authentication
* Expense Charts
* Dark / Light Theme Toggle
* Pagination
* Export to CSV
* Budget Tracking
* Recurring Expenses

---

## Author

**Susovan Sahoo**

Built as part of a Full Stack Developer Assignment using React, Express, Prisma, and PostgreSQL.
