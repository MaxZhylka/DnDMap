from rest_framework import serializers
from .models import Cities, Roads
class MapSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cities
        fields = '__all__'
