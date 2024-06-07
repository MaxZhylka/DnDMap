from django.contrib import admin
from .models import Cities, SeaRoute
from .models import Roads
from .models import News
admin.site.register(Cities)
admin.site.register(Roads)
admin.site.register(News)
admin.site.register(SeaRoute)