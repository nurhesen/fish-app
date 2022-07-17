from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from common.utils.inference import get_fish
from api.serializers import FishWeightSerializer
import pandas as pd
from time import sleep as sp

from common.utils.inference import get_fish_image


@api_view(['GET', 'POST'])
def home(request):
    if request.method == 'POST':
        serializer=FishWeightSerializer(data=request.data)
        name_list=["Species", "LengthVer", "LengthDia", "LengthCro", "Height", "Width"]
        if serializer.is_valid():
            fish_weight=get_fish([
                [request.data[field] for field in name_list],
        ])  
            return Response({"fish_weight":len(fish_weight) and fish_weight[0] or False, "fish_image":get_fish_image(request.data['Species'])}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def get_csv(request):
    if request.method == 'POST':
        if request.FILES.get('fish_list'):
            colnames=["Species", "LengthVer", "LengthDia", "LengthCro", "Height", "Width"]
            fish_list=pd.read_csv(request.FILES['fish_list'], names=colnames, header=None)
            fish_weight=get_fish(fish_list.values[1:])
            fish_list_weight=fish_list.values[1:].tolist()
            for index in range(len(fish_list_weight)):
                fish_list_weight[index].append(fish_weight[index])
            return Response({"data":fish_list_weight}, status=status.HTTP_200_OK)
        return Response({'message':'A csv file is required'}, status=status.HTTP_400_BAD_REQUEST)





