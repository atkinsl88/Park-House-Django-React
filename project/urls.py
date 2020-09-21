from django.contrib import admin
from django.urls import path, include, re_path
from .views import index

urlpatterns = [
    path('api/admin/', admin.site.urls),
    path('api/enquiries/', include('enquiries.urls')),
    path('api/jobs/', include('jobs.urls')),
    path('api/images/', include('gallery.urls')),
    re_path(r'^.*$', index)
]