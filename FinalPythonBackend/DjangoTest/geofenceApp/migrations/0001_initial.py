# Generated by Django 4.0.5 on 2022-07-21 17:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Checkcontains',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('checkcontains', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='Fencepoints',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fencelat', models.CharField(max_length=200)),
                ('fencelon', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='liveLocationtemp',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('livelat', models.CharField(max_length=200)),
                ('livelon', models.CharField(max_length=200)),
            ],
        ),
    ]
