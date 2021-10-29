from rest_framework.routers import SimpleRouter

from .views import MovieViewSet
from user.views import UserViewSet, UserRefreshViewSet, UserRegisterViewSet, UserLoginViewSet



router = SimpleRouter()


router.register(r'user/refresh', UserRefreshViewSet, basename='refresh')
router.register(r'user/register', UserRegisterViewSet, basename='register')
router.register(r'user/login', UserLoginViewSet, basename='login')
router.register(r'user', UserViewSet, basename='user')
router.register(r'movie', MovieViewSet, basename='movie')



urlpatterns = [
    *router.urls
]