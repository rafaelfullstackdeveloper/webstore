from django.urls import path
from .views import store_main_page, react_app

urlpatterns = [
    path('store-main/', store_main_page, name='store_main_page'),
    path('', react_app, name='react_app'),
] 