const SearchBar = ({ search, setSearch }) => {
  return (
    <div style={styles.wrapper}>
      <input
        type="text"
        placeholder="Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.input}
      />
    </div>
  );
};

const styles = {
  wrapper: {
    width: '100%',
    maxWidth: '500px',
    margin: '0 auto 24px',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '15px',
    outline: 'none',
    boxSizing: 'border-box',
  },
};

export default SearchBar;