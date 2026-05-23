from django.shortcuts import render, redirect
from .models import Admission, Contact , Gallery
from django.core.mail import send_mail

def home(request):
    return render(request, 'index.html')


def about(request):
    return render(request, 'about.html')


def facilities(request):
    return render(request, 'facilities.html')


def gallery(request):
    
    images = Gallery.objects.all()

    return render(request, 'gallery.html', {
        'images': images
    })

def contact(request):
    
    if request.method == "POST":

        name = request.POST.get('name')

        email = request.POST.get('email')

        message = request.POST.get('message')

        # SAVE TO DATABASE

        Contact.objects.create(
            name=name,
            email=email,
            message=message
        )

        # SEND EMAIL

        send_mail(

            subject=f"New Contact Form Submission from {name}",

            message=f"""
Name: {name}

Email: {email}

Message:
{message}
""",

            from_email='njsa3803@gmail.com',

            recipient_list=['sanjeetncofficial@gmail.com'],

            fail_silently=False

        )

        return render(request, 'contact.html', {
            'success': True
        })

    return render(request, 'contact.html')


def admission(request):

    if request.method == "POST":

        student_name = request.POST.get('student_name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        grade = request.POST.get('grade')
        message = request.POST.get('message')

        Admission.objects.create(
            student_name=student_name,
            email=email,
            phone=phone,
            grade=grade,
            message=message
        )

        return render(request, 'admission.html', {
            'success': True
        })

    return render(request, 'admission.html')