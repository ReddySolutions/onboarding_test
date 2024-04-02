from django.contrib.auth.models import User
from django.utils.functional import SimpleLazyObject


class AddUserToRequestMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Function to get the user object based on the user_id 
        # from request header
        def get_user():
            user_id = request.headers.get('X-User-Id')
            if user_id:
                try:
                    return User.objects.get(pk=user_id)
                except User.DoesNotExist:
                    return None
            else:
                return None

        # Adding user object to request as a lazy object
        # This ensures that the database query to
        # fetch the user object is only executed when
        # the user attribute of the request is accessed.
        request.auth_user = SimpleLazyObject(get_user)

        # Call the next middleware or view
        response = self.get_response(request)
        return response
