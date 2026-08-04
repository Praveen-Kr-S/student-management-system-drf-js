# 🎓 Student Management System using Django REST Framework & Vanilla JavaScript

A simple and beginner-friendly **Student Management System** built using **Django REST Framework (DRF)** as the backend and **HTML, CSS, and Vanilla JavaScript** as the frontend. This project demonstrates complete **CRUD (Create, Read, Update, Delete)** operations by integrating a separate frontend with REST APIs using the JavaScript Fetch API.

---

# 📖 Project Overview

This project is designed to demonstrate how a frontend application communicates with a Django REST Framework backend without using React or any other frontend framework.

Users can:

- ➕ Add a new student
- 📋 View all students
- ✏️ Edit student details
- 🗑️ Delete students
- 🔄 Connect a separate frontend with REST APIs

This project is suitable for beginners who want to learn frontend-backend integration using JavaScript.

---

# ✨ Features

- Add Student
- View All Students
- Edit Student
- Delete Student
- REST API Integration
- Responsive User Interface
- Separate Frontend & Backend
- Beginner-Friendly Code Structure

---

# 🛠 Technologies Used

## Backend

- Python
- Django
- Django REST Framework (DRF)
- SQLite Database

## Frontend

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Fetch API

---

# 📁 Project Structure

```
Student_CRUD/
│
├── dj_project/
│
├── dj_app/
│   ├── migrations/
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   ├── urls.py
│   └── admin.py
│
├── frontend/
│   ├── index.html
│   ├── add.html
│   ├── edit.html
│   ├── style.css
│   └── script.js
│
├── db.sqlite3
├── manage.py
├── requirements.txt
└── README.md
```

---

# 🗄 Student Model

```python
from django.db import models

class Student(models.Model):

    name = models.CharField(max_length=50)
    dept = models.CharField(max_length=50)
    phone = models.CharField(max_length=50)
    age = models.IntegerField(default=0, null=True)

    def __str__(self):
        return self.name
```

---

# 🔗 REST API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/students/` | View All Students |
| GET | `/api/students/<id>/` | View Single Student |
| POST | `/api/students/add/` | Add Student |
| PUT | `/api/students/edit/<id>/` | Update Student |
| DELETE | `/api/students/delete/<id>/` | Delete Student |

---

# 💻 Prerequisites

Before running this project, install the following:

- Python 3.10 or above
- pip
- Git
- Visual Studio Code
- Live Server Extension (VS Code)

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Praveen-Kr-S/student-management-system-drf-js.git
```

---

## 2️⃣ Navigate to Project Folder

```bash
cd student-management-system-drf-js
```

---

## 3️⃣ Create Virtual Environment

### Windows

```bash
py -3 -m venv .venv
```

Activate the virtual environment

```bash
.venv\Scripts\activate
```

### Linux / macOS

```bash
python3 -m venv .venv
```

Activate

```bash
source .venv/bin/activate
```

---

## 4️⃣ Install Required Packages

If you have `requirements.txt`

```bash
pip install -r requirements.txt
```

Or install manually

```bash
pip install django
pip install djangorestframework
pip install django-cors-headers
```

---

## 5️⃣ Apply Database Migrations

```bash
python manage.py makemigrations
```

```bash
python manage.py migrate
```

---

## 6️⃣ Start Django Development Server

```bash
python manage.py runserver
```

The backend will run at

```
http://127.0.0.1:8000/
```

---

# 🌐 Backend API

Open the browser

```
http://127.0.0.1:8000/api/students/
```

If JSON data is displayed, your backend is working correctly.

---

# 🖥 Run Frontend

Open the **frontend** folder in Visual Studio Code.

Open

```
index.html
```

using

**Live Server**

The frontend will run like

```
http://127.0.0.1:5500/frontend/index.html
```

---

# 🔧 Enable CORS

Install

```bash
pip install django-cors-headers
```

Add to **INSTALLED_APPS**

```python
"corsheaders",
```

Add to **MIDDLEWARE**

```python
"corsheaders.middleware.CorsMiddleware",
```

Add in **settings.py**

```python
CORS_ALLOW_ALL_ORIGINS = True
```

Restart the Django server.

---

# ▶️ Project Execution Flow

```
Start Django Server
        │
        ▼
Backend REST API
        │
        ▼
Open Frontend (Live Server)
        │
        ▼
JavaScript Fetch API
        │
        ▼
Display Student List
        │
 ┌──────┼──────────────┐
 │      │              │
 ▼      ▼              ▼
Add   Update        Delete
 │      │              │
 ▼      ▼              ▼
POST   PUT          DELETE
        │
        ▼
Refresh Student List
```

---

# 📷 Application Pages

### 📋 All Students

- Display all students
- Edit button
- Delete button

### ➕ Add Student

- Name
- Department
- Phone
- Age
- Save Student

### ✏️ Edit Student

- Load student details
- Update student information

---

# 📚 Learning Outcomes

This project helps you understand:

- Django REST Framework
- REST APIs
- CRUD Operations
- Serializer
- APIView
- Fetch API
- JSON
- JavaScript DOM Manipulation
- Frontend & Backend Integration
- HTTP Methods (GET, POST, PUT, DELETE)
- CORS Configuration

---

# 🚀 Future Improvements

- User Authentication
- Login & Logout
- JWT Authentication
- Search Functionality
- Pagination
- Sorting
- Bootstrap UI
- React Frontend
- Docker Deployment

---

# 👨‍💻 Author

**Praveen Kumar S**

**Python Backend Developer**

📧 **GitHub**

https://github.com/Praveen-Kr-S

💼 **LinkedIn**

https://www.linkedin.com/in/praveen-python-developer/

---

# ⭐ If you found this project helpful

Please give this repository a **⭐ Star** on GitHub.

---

# 📄 License

This project is developed for **learning and educational purposes**.
