from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=50)
    dept = models.CharField(max_length=50)
    phone = models.CharField(max_length=50)
    age = models.IntegerField(default=0,null=True)

    def __str__(self):
        return self.name

