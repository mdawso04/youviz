from django.apps import AppConfig
from django.conf import settings as app_settings
from django.db.models.signals import post_migrate

def initialise(sender, **kwargs):
    """after migrations"""
    
    from .models import BaseModel, Datastream, Datasource, Viz, ItemView, Notification, Activity, Profile, Settings, Cover
    from random import randint
    from django.contrib.auth.models import User, Group, Permission
    
    #groups
    site_allusers, _ = Group.objects.get_or_create(name='site_allusers')
    site_registeredusers, _ = Group.objects.get_or_create(name='site_registeredusers')
    site_powerusers, _ = Group.objects.get_or_create(name='site_powerusers')
    datasource_owners, _ = Group.objects.get_or_create(name='datasource_owners')
    datasource_managers, _ = Group.objects.get_or_create(name='datasource_managers')
    datasource_collaborators, _ = Group.objects.get_or_create(name='datasource_collaborators')
    datastream_owners, _ = Group.objects.get_or_create(name='datastream_owners')
    datastream_managers, _ = Group.objects.get_or_create(name='datastream_managers')
    datastream_collaborators, _ = Group.objects.get_or_create(name='datastream_collaborators')
    comment_owners, _ = Group.objects.get_or_create(name='comment_owners')
    
    #perms
    view_published_datasource_perm = Permission.objects.get(codename='view_published_datasource')
    view_datasource_perm = Permission.objects.get(codename='view_datasource')
    change_datasource_perm = Permission.objects.get(codename='change_datasource')
    delete_datasource_perm = Permission.objects.get(codename='delete_datasource')
    
    view_published_datastream_perm = Permission.objects.get(codename='view_published_datastream')
    view_datastream_perm = Permission.objects.get(codename='view_datastream')
    change_datastream_perm = Permission.objects.get(codename='change_datastream')
    delete_datastream_perm = Permission.objects.get(codename='delete_datastream')
    
    change_activity_perm = Permission.objects.get(codename='change_activity')
    
    view_profile_perm = Permission.objects.get(codename='view_profile')
    change_profile_perm = Permission.objects.get(codename='change_profile')
    
    add_datasource_perm = Permission.objects.get(codename='add_datasource')
    add_datastream_perm = Permission.objects.get(codename='add_datastream')
    
    add_comment_perm = Permission.objects.get(codename='add_comment')
    view_comment_perm = Permission.objects.get(codename='view_comment')
    change_comment_perm = Permission.objects.get(codename='change_comment')
    delete_comment_perm = Permission.objects.get(codename='delete_comment')
    
    
    site_allusers.permissions.add(
        view_published_datasource_perm.pk,
        view_comment_perm.pk,
    )
    site_registeredusers.permissions.add(
        change_activity_perm.pk,
        view_profile_perm.pk,
        change_profile_perm.pk,
        add_datasource_perm.pk,
        add_comment_perm.pk,
        view_published_datastream_perm.pk,
    )
    site_powerusers.permissions.add(
        add_datastream_perm.pk
    )
    datasource_owners.permissions.add(
        view_datasource_perm.pk,
        change_datasource_perm.pk,
        delete_datasource_perm.pk,
    )
    datasource_managers.permissions.add(
        view_datasource_perm.pk,
        change_datasource_perm.pk,
        delete_datasource_perm.pk,
    )
    datasource_collaborators.permissions.add(
        view_datasource_perm.pk,
        change_datasource_perm.pk,
    )
    datastream_owners.permissions.add(
        view_datastream_perm.pk,
        change_datastream_perm.pk,
        delete_datastream_perm.pk,
    )
    datastream_managers.permissions.add(
        view_datastream_perm.pk,
        change_datastream_perm.pk,
        delete_datastream_perm.pk,
    )
    datastream_collaborators.permissions.add(
        view_datastream_perm.pk,
        change_datastream_perm.pk,
    )
    comment_owners.permissions.add(
        change_comment_perm.pk,
        delete_comment_perm.pk,
    )
    
    
    #assign group to GuardianUser
    guardian_user_exists = User.objects.filter(username='GuardianUser').exists()
    if not guardian_user_exists:
        from django.apps import apps as django_apps
        from django.db.models.signals import post_migrate
        guardian_config = django_apps.get_app_config('guardian')
        post_migrate.send(
            sender=guardian_config,
            app_config=guardian_config,
            verbosity=2,
            interactive=False,
            using=None,
        )
    guardian_user = User.objects.get(username='GuardianUser')    
    guardian_user.groups.add(site_allusers)
    
    #system user
    system_user_exists = User.objects.filter(username='system').exists()
    if not system_user_exists:
        email = f'user{randint(1, 99999)}@example.com'
        password = User.objects.make_random_password()
        system_user = User.objects.create_user(
            username='system',
            email=email,
            password=password)
    

    #covers
    covers_exist = Cover.objects.exists()
    if not covers_exist:
        business_cover = Cover.objects.create(
            name='Business',
            description='Business',
            slug='business',
            owner=system_user,
            search_terms='business,employee,work,attrition,turnover',
        )
        society_cover = Cover.objects.create(
            name='Society',
            description='Society',
            slug='society',
            owner=system_user,
            search_terms='society,population,',
        )
        health_cover = Cover.objects.create(
            name='Health',
            description='Health',
            slug='health',
            owner=system_user,
            search_terms='health,covid,sick,disease,death,accident,injur',
        )
        education_cover = Cover.objects.create(
            name='Education',
            description='Education',
            slug='education',
            owner=system_user,
            search_terms='education,univerity,school,learn',
        )
        default_cover = Cover.objects.create(
            name='_top',
            description='_top',
            slug='_top',
            owner=system_user,
            search_terms='{},{},{},{},'.format(
                business_cover.search_terms,
                society_cover.search_terms,
                health_cover.search_terms,
                education_cover.search_terms,
            ),
        )
    
    #datastream
    datastreams_exist = Datastream.objects.exists()
    if not datastreams_exist:
        ds1 = Datastream.objects.create(
            name='Synthetic Attrition Data',
            url='https://raw.githubusercontent.com/IBM/employee-attrition-aif360/master/data/emp_attrition.csv',
            owner=system_user,
        )
    
    #settings
    settings_exist = Settings.objects.exists()
    if not settings_exist:
        settings = Settings.objects.create(
            json={
                "sitename": "YouViz", 
                "sitedesc": "The free web app where you can Find, Visualise and Share Open Data", 
                "sitewelcome": {
                    "topline": "Welcome to YouViz!", 
                    "subline": "Search, Vizualize and Share Open Data for Free"
                },
                "comments": True,
            },
        )
    
    #notifications
    notifications_exist = Notification.objects.exists()
    if not notifications_exist:
        view_ad = Notification.objects.create(
            title='View ad',
            position=Notification.VIEW_AD,
            html='Block content',
        )
    
    #site
    from django.contrib.sites.models import Site
    site = Site.objects.get(id=app_settings.SITE_ID)
    site.domain = app_settings.SITE_DOMAIN_NAME
    site.name = app_settings.SITE_DISPLAY_NAME
    site.save()

    #if not SiteProfile.objects.exists():
    #    SiteProfile.objects.create(site=site)

class ProjectsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'projects'
    
    def ready(self):
        post_migrate.connect(initialise, sender=self)

        
from django.contrib.staticfiles.apps import StaticFilesConfig

class ProjectsStaticFilesConfig(StaticFilesConfig):
    ignore_patterns = ['CVS', '.*', '*~', 'projects/src/*',]  # your custom ignore list
    
    
    
def refresh_datasources():
    from projects.models import BaseModel, Datastream, Datasource, Viz, ItemView, Notification, Activity, Profile, Settings, Cover, Comment

    datastreams_to_refresh = Datastream.list(properties__refresh=True)
    if datastreams_to_refresh:
        for d in datastreams_to_refresh:
            d.refresh()
    else:
        print('No ds to refresh!')
    
