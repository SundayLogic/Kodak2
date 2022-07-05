const Header = () => {
  return (
    <header className="sticky flex justify-between px-4 pt-4 bg-green-900">
      <div className="flex bg-green-700 space-x-4">
        <h2>Logo</h2>
        <h2>Icons</h2>
      </div>
      <div className="bg-green-700">
        <h2>Header Right</h2>
      </div> 
    </header>
  );
};
export default Header;
