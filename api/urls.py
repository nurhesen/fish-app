
from django.urls import path

from api.views import home,get_csv

urlpatterns = [
    path('', home),
    path('get-csv/', get_csv),

]
