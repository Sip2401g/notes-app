import { FaTrash, FaEdit, FaThumbtack } from 'react-icons/fa';

const COLORS = ['#ffffff', '#ffff99', '#ffcccc', '#ccffcc', '#cce5ff', '#f5ccff'];

const NoteCard = ({ note, onDelete, onEdit, onPin }) => {
  return (
    <div style={{ ...styles.card, background: note.color || '#ffffff' }}>
      <div style={styles.header}>
        <h3 style={styles.title}>{note.title}</h3>
        <button
          onClick={() => onPin(note._id)}
          style={{ ...styles.iconBtn, color: note.pinned ? '#f59e0b' : '#aaa' }}
          title={note.pinned ? 'Unpin' : 'Pin'}
        >
          <FaThumbtack />
        </button>
      </div>
      <p style={styles.content}>{note.content}</p>
      <div style={styles.footer}>
        <small style={styles.date}>
          {new Date(note.createdAt).toLocaleDateString()}
        </small>
        <div style={styles.actions}>
          <button onClick={() => onEdit(note)} style={styles.iconBtn} title="Edit">
            <FaEdit color="#4a90e2" />
          </button>
          <button onClick={() => onDelete(note._id)} style={styles.iconBtn} title="Delete">
            <FaTrash color="#e25555" />
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    borderRadius: '12px',
    padding: '16px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    border: '1px solid #eee',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    margin: 0,
    fontSize: '16px',
    fontWeight: '600',
    color: '#1a1a1a',
  },
  content: {
    margin: 0,
    fontSize: '14px',
    color: '#444',
    lineHeight: '1.5',
    whiteSpace: 'pre-wrap',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '8px',
  },
  date: {
    color: '#999',
    fontSize: '12px',
  },
  actions: {
    display: 'flex',
    gap: '8px',
  },
  iconBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    padding: '4px',
  },
};

export default NoteCard;