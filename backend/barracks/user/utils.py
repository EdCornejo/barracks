import re

def is_using_mobile(request):
  mobile_agent_regex = re.compile(r'.*(iphone|mobile|androidtouch)',re.IGNORECASE)
  user_agent = request.META['HTTP_USER_AGENT']
  mobile_user = False
  if mobile_agent_regex.match(user_agent):
      mobile_user = True
  return mobile_user