release: python manage.py migrate
web: gunicorn project.wsgi
gunicorn project.wsgi --max-requests 1200
gunicorn project.wsgi --timeout 10