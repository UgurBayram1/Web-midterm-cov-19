from django.db import models

class Haber(models.Model):
    baslik1 = models.TextField()
    baslik2 = models.TextField()
    baslik3 = models.TextField()
    baslik4 = models.TextField()
    baslik5 = models.TextField()
