# Django Backend for Amazon Clone

This backend provides a RESTful API for managing products and categories for the Amazon Clone project using Django and Django REST Framework.

## Features
- CRUD operations for Products and Categories
- Admin interface for managing data
- REST API endpoints for integration with frontend

## Project Structure
- `products/`: Django app for product and category management
- `backend/`: Django project settings and URLs

## Models
### Category
- `name`: Name of the category

### Product
- `name`: Name of the product
- `description`: Description of the product
- `price`: Price of the product
- `category`: ForeignKey to Category
- `created_at`: Timestamp when the product was created

## API Endpoints
- `/api/products/`: CRUD for products
- `/api/categories/`: CRUD for categories

## Usage
1. **Activate the virtual environment:**
   ```
   E:\Full-stack_Developer\backend_venv\Scripts\activate
   ```
2. **Run the development server:**
   ```
   cd GitHub/store/amazon-clone/backend
   python manage.py runserver
   ```
3. **Access the API:**
   - Products: `http://127.0.0.1:8000/api/products/`
   - Categories: `http://127.0.0.1:8000/api/categories/`
4. **Admin interface:**
   - `http://127.0.0.1:8000/admin/`
   - Create a superuser if needed: `python manage.py createsuperuser`

## Requirements

The backend dependencies are listed in `requirements.txt`:

```
asgiref==3.8.1
Django==5.2.3
djangorestframework==3.16.0
sqlparse==0.5.3
tzdata==2025.2
```

To install all dependencies, run:

```
pip install -r requirements.txt
```

## How to Migrate
```
python manage.py makemigrations
python manage.py migrate
```

## Notes
- Ensure the backend runs in a separate virtual environment from the frontend.
- Update the frontend to consume these API endpoints as needed. 