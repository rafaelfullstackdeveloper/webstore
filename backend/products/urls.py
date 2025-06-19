from django.urls import path
from .views import store_main_page

urlpatterns = [
    path('', store_main_page, name='store_main_page'),
] 