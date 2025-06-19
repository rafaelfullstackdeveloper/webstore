from django.db import models                                                                      # Import Django's model system

# Create your models here.

class Category(models.Model):                                                                     # Define Category model
    name = models.CharField(max_length=100, unique=True)                                         # Category name field, must be unique

    def __str__(self):                                                                          # String representation
        return self.name                                                                        # Return category name

class Product(models.Model):                                                                     # Define Product model
    name        = models.CharField(max_length=200)                                               # Product name field
    description = models.TextField(blank=True)                                                   # Optional product description
    price       = models.DecimalField(max_digits=10, decimal_places=2)                          # Price with 2 decimal places
    category    = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE) # Link to Category model
    created_at  = models.DateTimeField(auto_now_add=True)                                       # Timestamp when product is created

    def __str__(self):                                                                          # String representation
        return self.name                                                                        # Return product name

