from django.urls import path, include
from . import views

urlpatterns = [
    path("notes/", views.NoteListCreateView.as_view(), name="note-list-create"),
    path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name="note-delete"),
]
