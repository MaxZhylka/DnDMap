from django.contrib import admin
from .models import Cities
from .models import Roads
from .models import News
admin.site.register(Cities)
admin.site.register(Roads)
admin.site.register(News)