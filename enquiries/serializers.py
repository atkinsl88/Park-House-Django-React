from rest_framework import serializers
from .models import Enquiries

class EnquirySerializer(serializers.ModelSerializer):

      class Meta:
        model = Enquiries
        fields = '__all__'