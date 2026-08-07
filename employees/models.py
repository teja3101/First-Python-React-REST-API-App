from django.db import models


class Employee(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    salary = models.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return self.name
