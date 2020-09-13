# pylint: disable=no-member, no-self-use
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Enquiries
from .serializers import EnquirySerializer

class EnquiryListView(APIView):

    def get(self, _request):
        enquiries = Enquiries.objects.all() 
        serialized_enquiries = EnquirySerializer(enquiries, many=True)
        return Response(serialized_enquiries.data, status=status.HTTP_200_OK)

class EnquiryDetailView(APIView):

    def get(self, _request, pk):
        enquiries = Enquiries.objects.get(pk=pk)
        serialized_enquiries = EnquirySerializer(enquiries)
        return Response(serialized_enquiries.data, status=status.HTTP_200_OK)