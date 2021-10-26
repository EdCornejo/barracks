import json
from http import HTTPStatus

# from django.conf import settings
from django.test import TestCase, RequestFactory
# from django.contrib.auth.models import User

from rest_framework.test import force_authenticate
from rest_framework.test import APIClient

from user.views import UserViewSet, UserRegisterViewSet, UserLoginViewSet, UserRefreshViewSet
from user.models import User


class UserViewSetTest(TestCase):

    def setUp(self):
        self.factory = RequestFactory()
        self.user = User.objects.create_superuser(
            username='test',
            password='password',
            email='test@mail.com'
        )

        self.simple_user = User.objects.create_user(
            username='user',
            password='password',
            email='user@mail.com'
        )


    def test_user_viewset(self):
        request = self.factory.get('/api/user/')
        force_authenticate(request, user=self.user)
        response = UserViewSet.as_view({'get': 'list'})(request)

        self.assertEqual(len(response.data), 2)
        self.assertEqual(response.data[0]['username'], 'test')
        self.assertEqual(response.status_code, HTTPStatus.OK._value_)


    def test_user_without_authorization_viewset(self):
        request = self.factory.get('/api/user/')
        force_authenticate(request, user=self.simple_user)
        response = UserViewSet.as_view({'get': 'list'})(request)

        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.status_code, HTTPStatus.FORBIDDEN._value_)


    def test_user_list(self):
        client = APIClient()
        client.force_authenticate(user=self.user)
        response = client.get('/api/user/')
        self.assertEqual(response.status_code, HTTPStatus.OK._value_)
        self.assertEqual(response.data[0]['username'], 'test')


    def test_user_create(self):
        data = json.dumps({
            'username': 'demo',
            'password': 'password',
            'email': 'demo@mail.com',
        })

        client = APIClient()
        response = client.post('/api/user/register/', data=data, content_type='application/json')

        self.assertEqual(response.status_code, HTTPStatus.CREATED._value_)
        self.assertEqual(response.data['user']['username'], 'demo')