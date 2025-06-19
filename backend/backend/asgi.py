"""
ASGI config for backend project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.2/howto/deployment/asgi/
"""

# Import required modules
import os

# Import Django's ASGI application handler
from django.core.asgi import get_asgi_application

# Set the Django settings module path
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

# Initialize ASGI application
application = get_asgi_application()
