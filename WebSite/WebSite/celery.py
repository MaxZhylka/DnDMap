from __future__ import absolute_import, unicode_literals
import os
from celery import Celery
from django.conf import settings

# Устанавливаем модуль настроек Django для celery
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'WebSite.settings')

app = Celery('WebSite')

# Используем строку настроек конфигурации, чтобы Celery мог найти настройки
app.config_from_object('django.conf:settings', namespace='CELERY')

# Автоматически обнаруживаем задачи в приложениях Django
app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)

@app.task(bind=True)
def debug_task(self):
    print('Request: {0!r}'.format(self.request))
