from rest_framework import serializers                                                          # Import Django REST framework serializers
from .models import Product, Category                                                          # Import our models
from typing import TYPE_CHECKING                                                               # Import type checking functionality
if TYPE_CHECKING:                                                                             # Only import during type checking
    from .models import Category                                                              # Import Category type for type hints

class CategorySerializer(serializers.ModelSerializer):                                         # Serializer for Category model
    class Meta:                                                                               # Meta class for configuration
        model = Category                                                                      # Specify model to serialize
        fields = ['id', 'name']                                                              # Fields to include in serialization

class ProductSerializer(serializers.ModelSerializer):                                         # Serializer for Product model
    category = CategorySerializer(read_only=True)                                            # Nested serializer for category details
    category_id = serializers.PrimaryKeyRelatedField(                                        # Field for category ID
        queryset=Category.objects.all(), source='category', write_only=True                  # Query all categories, map to category field
    )

    class Meta:                                                                              # Meta class for configuration
        model = Product                                                                      # Specify model to serialize
        fields = ['id', 'name', 'description', 'price',
                  'category', 'category_id', 'created_at']                                   # Fields to include in serialization


class CategorySerializer(serializers.ModelSerializer):                                         # Serializer for Category model
    class Meta:                                                                               # Meta class for configuration
        model = Category                                                                      # Specify model to serialize
        fields = ['id', 'name']                                                               # Fields to include in serialization

class ProductSerializer(serializers.ModelSerializer):                                         # Serializer for Product model
    category = CategorySerializer(read_only=True)                                            # Nested serializer for category details
    
