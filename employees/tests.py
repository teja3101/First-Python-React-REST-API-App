from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from .models import Employee


class EmployeeApiTests(APITestCase):
    def test_create_and_list_employee(self):
        payload = {
            'name': 'Anita Sharma',
            'role': 'Software Engineer',
            'salary': '75000.00',
        }

        create_response = self.client.post(reverse('employee-list'), payload, format='json')

        self.assertEqual(create_response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Employee.objects.count(), 1)

        list_response = self.client.get(reverse('employee-list'))

        self.assertEqual(list_response.status_code, status.HTTP_200_OK)
        self.assertEqual(list_response.data[0]['name'], payload['name'])

    def test_bulk_create_employees(self):
        payload = [
            {
                'name': 'Raj Kumar',
                'role': 'Developer',
                'salary': '50000.00',
            },
            {
                'name': 'Priya Mehta',
                'role': 'Tester',
                'salary': '45000.00',
            },
        ]

        response = self.client.post(reverse('employee-bulk-create'), payload, format='json')

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Employee.objects.count(), 2)
        self.assertEqual(response.data[0]['name'], payload[0]['name'])
        self.assertEqual(response.data[1]['role'], payload[1]['role'])
