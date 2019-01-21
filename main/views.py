from django.shortcuts import render
from django.http import HttpResponse
from django.template.response import TemplateResponse  

class DropdownMenu(object):
    def __init__(self, name, url=None):
        self.name = name
        self.url = url 
 
class HeaderItem(object):
    def __init__(self, name, url=None, active=False, dropdown=False, dropdown_menus=None):
        self.name = name
        self.url=url
        self.active = active 
        self.dropdown = dropdown
        self.dropdown_menus = dropdown_menus
        

def homepage(request):
    items = [HeaderItem('Home', active=True,),
             HeaderItem('Shop'),
             HeaderItem('Blog'),
             HeaderItem('Pages'),
             HeaderItem('Contact'),
             HeaderItem('JJ',url='ok'),
            ]
    context = {'items':items} 
    return TemplateResponse(request, 'templates/index.html', context) 

def ok(request):
    items = [HeaderItem('Home', active=True,url='/main'),
             HeaderItem('Shop'),
             HeaderItem('Blog'),
             HeaderItem('Pages'),
             HeaderItem('Contact'),
             HeaderItem('JJ',url='ok'),
            ]
    context = {'items':items} 
    return TemplateResponse(request,'templates/main.html',context)


def signup_view(request):
    return render(request,'signup.html',{})

    