# School Vaccination Portal – FSAD Assignment 2024–25

A full-stack web application to manage school student vaccination drives, developed using **React (frontend)** and **Flask (backend)**.

This portal allows the school coordinator to:
- Add/edit/search students
- Schedule and track vaccination drives
- Monitor vaccination status
- View analytics and generate reports
- Upload and export data via CSV
- Simulated login with UI theme switcher

---

## Features

### Authentication (Simulated)
- Hardcoded login (username: `admin`, password: `admin123`)
- Session managed in browser local storage

### Student Management
- Add individual students
- Bulk upload via CSV
- Search/filter student records

### Vaccination Drives
- Create/edit drives (with validation)
- Date must be 15+ days from today
- Filter by applicable classes

### Vaccination Status
- Mark students as vaccinated (only once per vaccine)
- Track drive and vaccine name

### Dashboard
- Total students
- Vaccinated count and %
- Drives scheduled in the next 30 days

### Reports
- View full vaccination history
- Filterable and downloadable as CSV

### Theme Switcher
- Toggle between light and dark mode
- Persisted across sessions

---

## Tech Stack

| Frontend               | Backend              |
|------------------------|----------------------|
| React + React Router   | Flask + Flask-CORS   |
| Axios (API calls)      | SQLAlchemy (ORM)     |
| CSS (Theme Styling)    | SQLite (Database)    |

---

## Folder Structure

```
school_vaccination_portal/
├── backend/           # Flask app
│   ├── app.py
│   ├── models.py
│   └── routes/
├── frontend/          # React app
│   ├── src/
│   │   ├── pages/
│   │   └── components/
│   ├── App.js
│   └── styles.css
```

---

## Getting Started

### 1. Backend Setup (Flask)
```bash
cd backend
pip install -r requirements.txt
python app.py
```

### 2. Frontend Setup (React)
```bash
cd frontend
npm install
npm start
```

> Ensure Flask runs on `http://localhost:5000` by default

---

## Login Details (Simulated)
- **Username:** `admin`
- **Password:** `admin`

---

## Submission Notes
- All 5 user stories implemented
- Full backend validations, CSV features
- Rich UI, reusable components, responsive design
