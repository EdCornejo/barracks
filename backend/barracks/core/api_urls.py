from rest_framework.routers import SimpleRouter

from user.views import UserViewSet, UserRegisterViewSet



router = SimpleRouter()


router.register(r'user/register', UserRegisterViewSet, basename='register')
router.register(r'user', UserViewSet, basename='user')



urlpatterns = [
    *router.urls
]