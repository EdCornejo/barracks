from datetime import datetime
from django.utils import timezone
from django.conf import settings
from django.utils.functional import SimpleLazyObject
from django.contrib.auth.models import AnonymousUser
from django.http import HttpResponse

# from rest_framework import exceptions
from rest_framework import status
from rest_framework.request import Request
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework_simplejwt import authentication
from django.contrib.auth.middleware import get_user



class OneSessionPerUserMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        return response

    def process_view(self, request, view_func, view_args, view_kwargs):
        try:
            response = authentication.JWTAuthentication().authenticate(request)
            if response is not None:
                user, token = response
                timestamp = float(token.payload.get('timestamp'))
                last_login = float(str(user.last_login.timestamp()))

                if timestamp < last_login:
                    response = Response(
                        data={'error': 'Unauthorized token'}, status=status.HTTP_401_UNAUTHORIZED
                    )
                    response.accepted_renderer = JSONRenderer()
                    response.accepted_media_type = "application/json"
                    response.renderer_context = {}
                    return response
        except:
            response = Response(
                data={'error': 'Expired token'}, status=status.HTTP_401_UNAUTHORIZED
            )
            response.accepted_renderer = JSONRenderer()
            response.accepted_media_type = "application/json"
            response.renderer_context = {}
            return response