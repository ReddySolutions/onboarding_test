from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


from .models import UserActivityLog
from .serializers import UserActivityLogSerializer


class UserActivityLogList(APIView):        
    def get(self, request):
        queryset = UserActivityLog.objects.select_related('user_activity').all().order_by('-score')
        serializer = UserActivityLogSerializer(queryset, many=True, context={'request': request})
        content = {'log_count': len(serializer.data), 'data': serializer.data}
        return Response(content, status=status.HTTP_200_OK)