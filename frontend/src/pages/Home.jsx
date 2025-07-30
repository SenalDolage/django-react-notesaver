import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import api from "../api";
import Note from "../components/Note";

function Home() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    // Fetch notes from the API
    const fetchNotes = async () => {
      try {
        const response = await api.get("/api/notes/");
        setNotes(response.data);
        console.log("Fetched notes:", response.data);
      } catch (error) {
        console.error("Error fetching notes:", error);
        alert("Failed to fetch notes. Please try again later.");
      }
    };

    fetchNotes();
  }, []);

  // Function to delete a note
  const deleteNote = async (id) => {
    try {
      const res = await api.delete(`/api/notes/delete/${id}/`);
      if (res.status === 204) {
        setNotes(notes.filter((note) => note.id !== id));
        alert("Note deleted successfully.");
      }
    } catch (error) {
      console.error("Error deleting note:", error);
      alert("Failed to delete note. Please try again later.");
    }
  };

  // Function to create a new note
  const createNote = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/api/notes/", {
        title,
        content,
      });
      if (response.status === 201) {
        alert("Note created successfully.");
        setNotes([...notes, response.data]);
        setTitle("");
        setContent("");
        alert("Note created successfully.");
      }
    } catch (error) {
      console.error("Error creating note:", error);
      alert("Failed to create note. Please try again later.");
    }
  };

  return (
    <div className="container my-5">
      <Stack gap={5}>
        <div className="create-notes">
          <h3>Create a New Note</h3>

          <Form onSubmit={createNote}>
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter note title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContent">
              <Form.Label>Content</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={3}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Create Note
            </Button>
          </Form>
        </div>

        <div className="notes-list">
          <h3>All Notes </h3>
          <Row>
            {notes.length === 0 ? (
              <p>No notes available</p>
            ) : (
              notes.map((note) => (
                <Col xs={12} md={6} key={note.id} className="mb-4">
                  <Note note={note} onDelete={deleteNote} />
                </Col>
              ))
            )}
          </Row>
        </div>
      </Stack>
    </div>
  );
}

export default Home;
