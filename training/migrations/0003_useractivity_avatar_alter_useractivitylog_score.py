# Generated by Django 5.0.3 on 2024-04-03 09:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("training", "0002_auto_20240324_0908"),
    ]

    operations = [
        migrations.AddField(
            model_name="useractivity",
            name="avatar",
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name="useractivitylog",
            name="score",
            field=models.IntegerField(default=0),
        ),
    ]
