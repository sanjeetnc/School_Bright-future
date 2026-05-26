from django.shortcuts import render, redirect
from .models import (
    Admission,
    Contact,
    Gallery,
    News,
)
from .models import AdmissionApplication
from django.core.mail import send_mail
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User

def home(request):
    
    news_items = News.objects.filter(
        is_active=True
    )[:10]

    return render(request, 'index.html', {
        'news_items': news_items
    })


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
    
    success = False

    if request.method == "POST":

        student_name = request.POST.get('student_name')

        parent_name = request.POST.get('parent_name')

        email = request.POST.get('email')

        phone = request.POST.get('phone')

        applying_class = request.POST.get('class')

        message = request.POST.get('message')

        AdmissionApplication.objects.create(

            student_name=student_name,

            parent_name=parent_name,

            email=email,

            phone=phone,

            applying_class=applying_class,

            message=message

        )

        success = True

    return render(request, 'admission.html', {

        'success': success

    })

