from rest_framework import permissions


class IsAuthenticated(permissions.BasePermission):

    def has_permission(self, request, view):
        user = request.auth_user
        return getattr(user, 'id', None) is not None
