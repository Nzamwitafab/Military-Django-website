from django.db import models

# Create your models here.
class EnlistmentApplication(models.Model):
    EDUCATION_CHOICES = [
        ('high_school', 'High School Diploma'),
        ('associate', 'Associate Degree'),
        ('bachelor', 'Bachelor\'s Degree'),
        ('master', 'Master\'s Degree'),
        ('doctorate', 'Doctorate'),
    ]

    fullname = models.CharField(max_length=255)
    dob = models.DateField(verbose_name='Date of Birth')
    ssn = models.CharField(max_length=11, verbose_name='Social Security Number')
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    education = models.CharField(max_length=20, choices=EDUCATION_CHOICES)
    reasons = models.TextField(verbose_name='Reasons for Enlisting')
    history = models.TextField(verbose_name='Prior Military Service', blank=True, null=True)

    def __str__(self):
        return f"{self.fullname} - {self.ssn}"