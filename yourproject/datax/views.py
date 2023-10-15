# yourapp/views.py
import csv
from django.shortcuts import render
from .forms import YourFormName
from .models import YourModelName
from django.http import JsonResponse

def upload_csv(request):
    if request.method == 'POST':
        form = YourFormName(request.POST, request.FILES)
        if form.is_valid():
            csv_file = request.FILES['csv_file']
            decoded_file = csv_file.read().decode('utf-8')
            csv_data = csv.reader(decoded_file.splitlines())
            for row in csv_data:
                YourModelName.objects.create(
                    field1=row[0],
                    field2=row[1],
                    # ... assign other fields from CSV row
                )
            return JsonResponse({'message': 'Data imported successfully.'})
        else:
            return JsonResponse({'error': 'Invalid form submission.'})
    else:
        form = YourFormName()
    return render(request, '../templates/yourapp/upload.html', {'form': form})
