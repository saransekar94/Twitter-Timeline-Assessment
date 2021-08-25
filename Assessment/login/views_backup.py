from django.shortcuts import render, redirect
from django.contrib.auth import logout
from django.views.generic import View, TemplateView
from django.http import HttpResponse, JsonResponse
from django.template.response import TemplateResponse

from .forms import LoginForm
from .models import Users
from Assessment.settings import *


def get_user_dict(request):
    """
    Returns the dictionary of session variables.
    """ 
    user = Users.objects.get(user=request.session["user"])
    # user_admin = user.is_admin
    return {
        # "user_admin": request.session["user_admin"],
        "user": request.session["user"],
        "user_id": user.id if user else ''
    }


class LoginRequiredMixin(object):
    """
    View mixin which verifies that the user has authenticated.

    NOTE:
        This should be the left-most mixin of a view.
    """

    def dispatch(self, *args, **kwargs):
        
        try:
            #import pdb;pdb.set_trace()
            user = self.request.session['user']
            # user_admin = Users.objects.get(user_name=user).is_admin
            # self.request.session['user_admin'] = user_admin
            return super(LoginRequiredMixin,  self).dispatch(*args, **kwargs)
        except KeyError as error:
            print "Error:" + error.message
            if error.message == "user" and self.request.is_ajax():
                return HttpResponse("Please Login")
            else:
                return redirect(Login_URL)

class AdminView(TemplateView):

    template_name = "registration/login.html"   
         
class LoginView(View):
    def get(self, request, *args, **kwargs):
        import pdb;pdb.set_trace();
        form = LoginForm(initial={'username': request.POST.get('username')})
        delete_all_session(request)
        return render(request, 'login.html')

    # def post(self, request, *args, **kwargs):
    #     request.session.set_expiry(60000)
    #     import pdb;pdb.set_trace();
    #     form = LoginForm(request.POST, user=request.POST.get('username'))
    #     response_status = {}

    #     if form.is_valid():

    #         request.session['uid'], request.session['user'] = 'Controller', request.POST.get('username')
    #         if request.session['user'] == 'Controller':
    #             response_status.update({
    #                 'status': 1,
    #                 'redirect_url': ''
    #             })
    #         else:
    #             response_status.update({
    #                 'status': 1,
    #                 'redirect_url': '/controller/home/'
    #             })
    #     else:
    #         response_status.update({
    #             'status': 0,
    #             'error': form.errors
    #         })
    #     return JsonResponse(response_status)    

def render_to_template(request, template_name, args):
    template = TemplateResponse(request, template_name, args)
    template.render()
    return template.content

def logout_view(request):
    logout(request)
    return redirect(Login_URL)
    
def delete_all_session(request):
    for key in request.session.keys():
        del request.session[key]
