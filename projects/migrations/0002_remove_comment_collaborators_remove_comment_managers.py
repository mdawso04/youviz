# Generated by Django 4.1.4 on 2024-06-02 12:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("projects", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="comment",
            name="collaborators",
        ),
        migrations.RemoveField(
            model_name="comment",
            name="managers",
        ),
    ]