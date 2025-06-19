from django.test import TestCase                                                                # Import Django's test framework
from django.test import TestCase                                                                # Import Django's test framework again (duplicate)
from decimal import Decimal                                                                     # Import Decimal for precise prices
from .models import Product, Category                                                           # Import our models

class CategoryModelTests(TestCase):                                                             # Test cases for Category model
    def setUp(self):                                                                           # Set up test data
        self.category = Category.objects.create(name="Electronics")                            # Create a test category

    def test_category_creation(self):                                                          # Test category creation
        self.assertEqual(self.category.name, "Electronics")                                    # Verify category name
        self.assertTrue(isinstance(self.category, Category))                                   # Verify instance type
        self.assertEqual(str(self.category), "Electronics")                                    # Verify string representation

class ProductModelTests(TestCase):                                                             # Test cases for Product model
    def setUp(self):                                                                          # Set up test data
        self.category = Category.objects.create(name="Electronics")                           # Create a test category
        self.product = Product.objects.create(                                                # Create a test product
            name="Test Product",                                                              # Set product name
            description="Test Description",                                                   # Set product description
            price=Decimal("99.99"),                                                          # Set product price
            category=self.category                                                           # Link to test category
        )

    def test_product_creation(self):                                                         # Test product creation
        self.assertEqual(self.product.name, "Test Product")                                  # Verify product name
        self.assertEqual(self.product.description, "Test Description")                       # Verify product description
        self.assertEqual(self.product.price, Decimal("99.99"))                              # Verify product price
        self.assertEqual(self.product.category, self.category)                              # Verify category relationship
        self.assertTrue(isinstance(self.product, Product))                                  # Verify instance type
        self.assertEqual(str(self.product), "Test Product")                                # Verify string representation

    def test_product_category_relationship(self):                                          # Test product-category relationship
        self.assertEqual(self.category.products.count(), 1)                                # Verify product count in category
        self.assertEqual(self.category.products.first(), self.product)                     # Verify first product in category
