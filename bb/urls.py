from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView
from testing.views import PochtaAPIView, TestAPIView
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/pochta/', PochtaAPIView.as_view()),
    path('api/test/', TestAPIView.as_view()),
]
