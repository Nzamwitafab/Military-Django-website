from django.shortcuts import render, redirect
from .models import EnlistmentApplication

# Create your views here
def home(request):
    return render(request, "web/index.html")

def submit_application(request):
    if request.method == 'POST':
        application = EnlistmentApplication(
            fullname=request.POST['fullname'],
            dob=request.POST['dob'],
            ssn=request.POST['ssn'],
            email=request.POST['email'],
            phone=request.POST['phone'],
            education=request.POST['education'],
            reasons=request.POST['reasons'],
            history=request.POST.get('history', '')  # Optional field
        )
        application.save()
        return render(request, 'view_applications.html', {'application': application})
    return render(request, 'submit_form.html')

def view_applications(request):
    applications = EnlistmentApplication.objects.all()
    return render(request, 'view_applications.html', {'applications': applications})
