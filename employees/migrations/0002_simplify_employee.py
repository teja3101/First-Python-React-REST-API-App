# Generated manually to simplify Employee for the REST API payload.

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('employees', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='employee',
            old_name='first_name',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='employee',
            old_name='designation',
            new_name='role',
        ),
        migrations.RemoveField(
            model_name='employee',
            name='last_name',
        ),
        migrations.RemoveField(
            model_name='employee',
            name='email',
        ),
        migrations.RemoveField(
            model_name='employee',
            name='phone',
        ),
        migrations.RemoveField(
            model_name='employee',
            name='department',
        ),
        migrations.RemoveField(
            model_name='employee',
            name='date_joined',
        ),
        migrations.RemoveField(
            model_name='employee',
            name='is_active',
        ),
        migrations.RemoveField(
            model_name='employee',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='employee',
            name='updated_at',
        ),
    ]
