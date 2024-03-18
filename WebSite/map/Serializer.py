from rest_framework import serializers
from .models import Cities, Roads, News


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Cities
        fields = '__all__'
class RoadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Roads
        fields = '__all__'
class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'