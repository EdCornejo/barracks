from rest_framework.routers import SimpleRouter

from user.views import UserViewSet



router = SimpleRouter()


router.register(r'user', UserViewSet, basename='user')


urlpatterns = [
    *router.urls
]