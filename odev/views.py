from django.shortcuts import render
from .models import Haber

def index(request):
    return render(request,"ht/index.html",{})


def haber1(request):
    haberlist = Haber.objects.all();
    return render(request,"ht/haber1.html",{"haberlist" : haberlist})


def sss(request):
    return render(request,"ht/sss.html",{})


def news(request):
    return render(request,"ht/haberler.html",{})


def about(request):
    return render(request,"ht/hakkında.html",{})


def data(request):
    return render(request,"ht/veriler.html",{})


def ques(request):
    return render(request,"ht/neleryapmaliyiz.html",{})