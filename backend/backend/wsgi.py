"""
WSGI config for backend project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.2/howto/deployment/wsgi/
"""

import os                                                         # Operating system interface

from django.core.wsgi import get_wsgi_application                # Import Django's WSGI handler

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')  # Configure Django settings module

application = get_wsgi_application()                             # Initialize WSGI application
