from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('enquiries/', include('enquiries.urls')),
    path('jobs/', include('jobs.urls')),
    path('gallery/', include('gallery.urls'))
]