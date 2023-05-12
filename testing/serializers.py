from rest_framework import serializers
from testing.models import Test, Pochta

class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = ("question", )
class PochtaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pochta
        fields = "__all__"