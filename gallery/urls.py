from django.urls import path
from.views import GalListView, GalDetailView

urlpatterns = [
    path('', GalListView.as_view()),
    path('<int:pk>/', GalDetailView.as_view())
]