# 🐳 Full-Stack Dockerized App

A full-stack web app with a PostgreSQL database, a Node.js backend, and a Next.js frontend. Built for local development and production with Docker and Docker Compose.

---

## 🧱 Tech Stack

- **Frontend:** React (Next.js)
- **Backend:** Express.js
- **Database:** PostgreSQL
- **DevOps:** Docker, Docker Compose

---

## 📁 Folder Structure

├── backend/ # Express backend
│ ├── Dockerfile # Production Dockerfile
│ ├── Dockerfile.dev # Dev Dockerfile
│ ├── .dockerignore
│ └── ...
├── frontend/ # Next.js frontend
│ ├── Dockerfile
│ ├── Dockerfile.dev
│ ├── .dockerignore
│ └── ...
├── docker-compose.yml # For production
├── docker-compose.dev.yml # For development
├── .env.example # Shared environment template
└── README.md

---

## 🚀 Getting Started (Development)

### 1. Clone the repository

```bash
git clone https://github.com/your-org/your-repo.git
cd your-repo
```

### 2. Create environment variables

```bash
cp .env.example .env.local
# Then update the values as needed
```

### 3. Start development environment

```bash
docker-compose -f docker-compose.dev.yml up --build
```

# PORTS
- Frontend: http://localhost:3000
- Backend: http://localhost:5200
- Database: localhost:5432

