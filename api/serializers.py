from rest_framework import serializers
# ["Species", "LengthVer", "LengthDia", "LengthCro", "Height", "Width"]


class FishWeightSerializer(serializers.Serializer):
    Species = serializers.CharField(required=True)
    LengthVer = serializers.FloatField(required=True)
    LengthDia = serializers.FloatField(required=True)
    LengthCro = serializers.FloatField(required=True)
    Height = serializers.FloatField(required=True)
    Width = serializers.FloatField(required=True)