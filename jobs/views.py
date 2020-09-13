# pylint: disable=no-member, no-self-use
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Jobs
from .serializers import JobSerializer

class JobListView(APIView):

    def get(self, _request):
        jobs = Jobs.objects.all()
        serialized_jobs = JobSerializer(jobs, many=True)
        return Response(serialized_jobs.data, status=status.HTTP_200_OK)

class JobDetailView(APIView):

    def get(self, _request, pk):
        jobs = Jobs.objects.get(pk=pk)
        serialized_jobs = JobSerializer(jobs)
        return Response(serialized_jobs.data, status=status.HTTP_200_OK)