from django.urls import path
from . import views
urlpatterns = [
    path('', views.index, name='index'),
    path('index', views.index, name='index'),
    path('sss', views.sss, name='sss'),
    path('haberler', views.news, name='haberler'),
    path('hakkinda', views.about, name='hakkinda'),
    path('veriler', views.data, name='veriler'),
    path('neleryapmaliyiz', views.ques, name='neleryapmaliyiz'),
    path('haber1', views.haber1, name='haber1'),
]