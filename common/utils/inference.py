#!/usr/bin/env python
# coding: utf-8

# In[8]:


import pickle
import pandas as pd
import os
import requests
from bs4 import BeautifulSoup
# In[2]:


pickle_path = 'weight-prediction.model'
pickle_path_full=os.path.join(os.path.dirname(__file__),pickle_path)

# In[5]:


class PredictionModel:
    def __init__(self, encoder, model):
        import pickle
        self.encoder = encoder
        self.model = model
        
    def predict(self, inp):
        import numpy as np
        
        encoded_part = self.encoder.transform(inp[['Species']]).toarray()
        X = inp.drop(['Species'], axis=1)
        np.hstack([X.values, encoded_part])
        
        return self.model.predict(X)


# In[6]:





# In[14]:


testing_sample = pd.DataFrame(
    columns=["Species", "LengthVer", "LengthDia", "LengthCro", "Height", "Width"], 
    data=[
        ['Bream', 29.1, 31.5, 36.4, 13.7592, 4.368],
        ['Whitefish', 23.6, 26.0, 28.7, 8.3804, 4.2476]
    ])


# In[15]:


def get_fish(data):
    model = pickle.load(open(pickle_path_full, 'rb'))
    sample = pd.DataFrame(
        columns=["Species", "LengthVer", "LengthDia", "LengthCro", "Height", "Width"], 
        data=data
        )
    return model.predict(sample)


# In[16]:


def get_image_from_url(url):
    res=requests.get(url)
    html = res.text
    soup = BeautifulSoup(html, 'lxml')
    img = soup.findAll('img')
    return img[1].get('src')


def get_fish_image(species):
    url1=f"https://yandex.com/images/search?text={species}%20fish&from=tabbar"
    url2=f"https://www.google.com/search?q={species}+fish&sxsrf=ALiCzsaVkhssymjstUbtNe3mPZQJAb7WfQ:1657981781046&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiVtum4z_34AhWpVvEDHSt8A6UQ_AUoAXoECAIQAw&cshid=1657981835529844&biw=1396&bih=656&dpr=1.38"
    result=get_image_from_url(url1)
    if "captcha" in result:
        return get_image_from_url(url2)
    return result


# In[ ]:




