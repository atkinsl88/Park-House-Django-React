from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api/admin/', admin.site.urls),
    path('api/enquiries/', include('enquiries.urls')),
    path('api/jobs/', include('jobs.urls')),
    path('api/images/', include('gallery.urls'))
]