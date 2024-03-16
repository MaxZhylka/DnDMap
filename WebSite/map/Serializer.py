from rest_framework import serializers
from .models import Cities, Roads
class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Cities
        fields = '__all__'
class RoadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Roads
        fields = '__all__'