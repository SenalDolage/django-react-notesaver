from django.db import models
from django.contrib.auth.models import User

# Create your models here.
# Model for storing notes
# Each note has a title, content, creation timestamp, and an author (User)
class Note(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")

    def __str__(self):
        return self.title
