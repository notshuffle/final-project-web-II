const ThemeToggle = ({ theme, setTheme }) => {
  return (
    <button
      className={`btn ${theme === 'light' ? 'btn-dark' : 'btn-light'}`}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
};

export default ThemeToggle;