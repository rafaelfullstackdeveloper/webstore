from django.contrib import admin                                 # Import Django's admin module
from .models import Product, Category                           # Import our Product and Category models

# Register your models here.
admin.site.register(Product)                                    # Make Product model available in admin interface
admin.site.register(Category)                                   # Make Category model available in admin interface
