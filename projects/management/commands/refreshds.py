from django.core.management.base import BaseCommand
from projects.apps import refresh_datasources

class Command(BaseCommand):
    def handle(self, *args, **options):
        refresh_datasources()