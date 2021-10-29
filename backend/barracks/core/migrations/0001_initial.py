# Generated by Django 3.2.8 on 2021-10-29 01:30

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('poster_path', models.URLField()),
                ('vote_average', models.IntegerField()),
                ('vote_count', models.IntegerField()),
                ('popularity', models.IntegerField()),
            ],
        ),
    ]