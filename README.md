# Django React NoteSaver

A full-stack note-taking application built with Django REST Framework backend and React frontend, featuring JWT authentication and user-specific note management.

## Features

- **User Authentication**: JWT-based authentication with registration and login
- **Note Management**: Create, read, and delete personal notes
- **Protected Routes**: Frontend route protection for authenticated users
- **RESTful API**: Clean API endpoints for seamless frontend-backend communication
- **Responsive UI**: React interface using bootstrap framework with protected user sessions

## Tech Stack

### Backend
- Django 
- Django REST Framework
- JWT Authentication (djangorestframework-simplejwt)
- SQLite Database
- Python

### Frontend
- React
- Axios for API calls
- JWT token handling
- React Router for navigation


## Project Structure

```
django-react-notesaver/
├── backend/
│   ├── api/
│   │   ├── models.py          # Note model
│   │   ├── serializers.py     # User and Note serializers
│   │   ├── views.py           # API views
│   │   └── urls.py            # API routes
│   ├── backend/
│   │   ├── settings.py        # Django settings
│   │   └── urls.py            # Main URL configuration
│   └── manage.py
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── ProtectedRoutes.jsx
│   │   └── ...
│   └── .env                   # Environment variables
└── README.md
```

## API Endpoints

- `POST /api/user/register/` - User registration
- `POST /api/token/` - Login (get JWT tokens)
- `POST /api/token/refresh/` - Refresh access token
- `GET /api/notes/` - List user's notes
- `POST /api/notes/` - Create new note
- `DELETE /api/notes/delete/<id>/` - Delete specific note

## Screenshots

Getting refresh and access tokens:
[![image.png](https://i.postimg.cc/C5ZY5k83/image.png)](https://postimg.cc/ctNP5KXh)

Home note listing (simeple UI):
[![image.png](https://i.postimg.cc/Dw0DTnqN/image.png)](https://postimg.cc/nX8TK8SK)


## Getting Started

### Prerequisites
- Python 3.8+
- Node.js 14+
- npm or yarn

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Create virtual environment**
   ```bash
   python -m venv env
   source env/bin/activate 
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run migrations**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Start the server**
   ```bash
   python manage.py runserver
   ```

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create .env file**
   ```
   REACT_APP_API_URL=http://127.0.0.1:8000
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

### Access the Application

- **Frontend**: `http://localhost:3000`
- **Django Admin**: `http://localhost:8000/admin`

