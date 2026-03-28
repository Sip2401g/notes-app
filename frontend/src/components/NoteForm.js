import { useState, useEffect } from 'react';

const COLORS = ['#ffffff', '#ffff99', '#ffcccc', '#ccffcc', '#cce5ff', '#f5ccff'];

const NoteForm = ({ onSubmit, editNote, onCancel }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [color, setColor] = useState('#ffffff');

  useEffect(() => {
    if (editNote) {
      setTitle(editNote.title);
      setContent(editNote.content);
      setColor(editNote.color || '#ffffff');
    }
  }, [editNote]);

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) return alert('Title and content are required!');
    onSubmit({ title, content, color });
    setTitle('');
    setContent('');
    setColor('#ffffff');
  };

  return (
    <div style={styles.wrapper}>
      <input
        type="text"
        placeholder="Note title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={styles.input}
      />
      <textarea
        placeholder="Note content..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={styles.textarea}
        rows={4}
      />
      <div style={styles.colorRow}>
        <span style={styles.colorLabel}>Color:</span>
        {COLORS.map((c) => (
          <div
            key={c}
            onClick={() => setColor(c)}
            style={{
              ...styles.colorDot,
              background: c,
              border: color === c ? '2px solid #333' : '2px solid #ddd',
            }}
          />
        ))}
      </div>
      <div style={styles.btnRow}>
        {editNote && (
          <button onClick={onCancel} style={styles.cancelBtn}>
            Cancel
          </button>
        )}
        <button onClick={handleSubmit} style={styles.submitBtn}>
          {editNote ? 'Update Note' : 'Add Note'}
        </button>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    background: '#fff',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '32px',
    border: '1px solid #eee',
  },
  input: {
    padding: '10px 14px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '15px',
    outline: 'none',
  },
  textarea: {
    padding: '10px 14px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '14px',
    outline: 'none',
    resize: 'vertical',
    fontFamily: 'inherit',
  },
  colorRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  colorLabel: {
    fontSize: '14px',
    color: '#666',
  },
  colorDot: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    cursor: 'pointer',
  },
  btnRow: {
    display: 'flex',
    gap: '8px',
    justifyContent: 'flex-end',
  },
  submitBtn: {
    background: '#4a90e2',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '10px 20px',
    fontSize: '14px',
    cursor: 'pointer',
    fontWeight: '600',
  },
  cancelBtn: {
    background: '#f1f1f1',
    color: '#333',
    border: 'none',
    borderRadius: '8px',
    padding: '10px 20px',
    fontSize: '14px',
    cursor: 'pointer',
  },
};

export default NoteForm;