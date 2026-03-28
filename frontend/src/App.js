import { useState, useEffect } from 'react';
import { getNotes, createNote, updateNote, deleteNote, pinNote } from './api/notes';
import NoteCard from './components/NoteCard';
import NoteForm from './components/NoteForm';
import SearchBar from './components/SearchBar';

function App() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState('');
  const [editNote, setEditNote] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchNotes = async () => {
    try {
      const { data } = await getNotes();
      setNotes(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchNotes(); }, []);

  const handleCreate = async (data) => {
    try {
      await createNote(data);
      fetchNotes();
    } catch (err) { console.error(err); }
  };

  const handleUpdate = async (data) => {
    try {
      await updateNote(editNote._id, data);
      setEditNote(null);
      fetchNotes();
    } catch (err) { console.error(err); }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this note?')) return;
    try {
      await deleteNote(id);
      fetchNotes();
    } catch (err) { console.error(err); }
  };

  const handlePin = async (id) => {
    try {
      await pinNote(id);
      fetchNotes();
    } catch (err) { console.error(err); }
  };

  const filtered = notes.filter(n =>
    n.title.toLowerCase().includes(search.toLowerCase()) ||
    n.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📝 Notes App</h1>
      <NoteForm
        onSubmit={editNote ? handleUpdate : handleCreate}
        editNote={editNote}
        onCancel={() => setEditNote(null)}
      />
      <SearchBar search={search} setSearch={setSearch} />
      {loading ? (
        <p style={styles.empty}>Loading notes...</p>
      ) : filtered.length === 0 ? (
        <p style={styles.empty}>No notes found. Create one above!</p>
      ) : (
        <div style={styles.grid}>
          {filtered.map(note => (
            <NoteCard
              key={note._id}
              note={note}
              onDelete={handleDelete}
              onEdit={setEditNote}
              onPin={handlePin}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '32px 16px',
    fontFamily: "'Segoe UI', sans-serif",
  },
  heading: {
    textAlign: 'center',
    fontSize: '32px',
    marginBottom: '32px',
    color: '#1a1a1a',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '16px',
  },
  empty: {
    textAlign: 'center',
    color: '#999',
    fontSize: '16px',
  },
};

export default App;
