# pylint: disable=no-member, no-self-use
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Gallery
from .serializers import GalSerializer

class GalListView(APIView):

    def get(self, _request):
        images = Gallery.objects.all()
        serialized_images = GalSerializer(images, many=True)
        return Response(serialized_images.data, status=status.HTTP_200_OK)

class GalDetailView(APIView):

    def get(self, _request, pk):
        images = Gallery.objects.get(pk=pk)
        serialized_images = GalSerializer(images)
        return Response(serialized_images.data, status=status.HTTP_200_OK)