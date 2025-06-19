from django.shortcuts import render
from rest_framework import viewsets
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer

# Create your views here.

# ViewSet for handling CRUD operations for Product model
class ProductViewSet(viewsets.ModelViewSet):
    """API endpoint for viewing and editing products."""
    queryset = Product.objects.all()  # type: ignore
    serializer_class = ProductSerializer

# ViewSet for handling CRUD operations for Category model
class CategoryViewSet(viewsets.ModelViewSet):
    """API endpoint for viewing and editing categories."""
    queryset = Category.objects.all()  # type: ignore
    serializer_class = CategorySerializer

# Django view to render the store main page
def store_main_page(request):
    """Render the store main page template."""
    return render(request, 'store_main.html')

def react_app(request):
    """Serve the React app's index.html template."""
    return render(request, 'react/index.html')
