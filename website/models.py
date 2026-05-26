from django.db import models

# Create your models here.
from django.db import models


class Admission(models.Model):

    student_name = models.CharField(max_length=200)

    email = models.EmailField()

    phone = models.CharField(max_length=20)

    grade = models.CharField(max_length=50)

    message = models.TextField(blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):

        return self.student_name


class Contact(models.Model):

    name = models.CharField(max_length=200)

    email = models.EmailField()

    message = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):

        return self.name
    
class Gallery(models.Model):
    
    title = models.CharField(max_length=200)

    image = models.ImageField(upload_to='gallery/')

    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):

        return self.title
    
    
class News(models.Model):
    
    CATEGORY_CHOICES = (

        ('new', 'New'),
        ('circular', 'Circular'),
        ('notice', 'Notice'),
        ('event', 'Event'),

    )

    title = models.CharField(max_length=300)

    category = models.CharField(
        max_length=20,
        choices=CATEGORY_CHOICES
    )

    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:

        ordering = ['-created_at']

    def __str__(self):

        return self.title
    
    
class AdmissionApplication(models.Model):
    
    student_name = models.CharField(max_length=200)

    parent_name = models.CharField(max_length=200)

    email = models.EmailField()

    phone = models.CharField(max_length=20)

    applying_class = models.CharField(max_length=100)

    message = models.TextField(blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):

        return self.student_name