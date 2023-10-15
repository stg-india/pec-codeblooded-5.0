# yourapp/forms.py
from django import forms

class YourFormName(forms.Form):
    csv_file = forms.FileField()
