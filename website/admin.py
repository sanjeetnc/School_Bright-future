from django.contrib import admin

from .models import (
    Admission,
    Contact,
    Gallery,
    News,
)
from .models import AdmissionApplication


@admin.register(Admission)
class AdmissionAdmin(admin.ModelAdmin):

    list_display = (
        'student_name',
        'email',
        'phone',
        'grade',
        'created_at'
    )

    search_fields = (
        'student_name',
        'email',
        'phone'
    )

    list_filter = (
        'grade',
        'created_at'
    )


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):

    list_display = (
        'name',
        'email',
        'created_at'
    )

    search_fields = (
        'name',
        'email'
    )

    list_filter = (
        'created_at',
    )
    

@admin.register(Gallery)
class GalleryAdmin(admin.ModelAdmin):

    list_display = (
        'title',
        'uploaded_at'
    )

    search_fields = (
        'title',
    )

    list_filter = (
        'uploaded_at',
    )
    
    
    
@admin.register(News)
class NewsAdmin(admin.ModelAdmin):

    list_display = (
        'title',
        'category',
        'is_active',
        'created_at'
    )

    list_filter = (
        'category',
        'is_active',
        'created_at'
    )

    search_fields = (
        'title',
    )
admin.site.register(AdmissionApplication)
