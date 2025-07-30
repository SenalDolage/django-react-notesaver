import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Note({ note, onDelete }) {
  const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");

  return (
    <Card body>
      <div className="note">
        <h4>{note.title}</h4>
        <p>{note.content}</p>
        <p>{formattedDate}</p>
        <Button variant="danger" onClick={() => onDelete(note.id)}>
          Delete
        </Button>
      </div>
    </Card>
  );
}

export default Note;
