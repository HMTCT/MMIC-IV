const Header = () => {
  return (
    <header className="flex justify-between items-center p-4" style={{ backgroundColor: '#0D5074', color: '#FFFFFF' }}>
      <div className="flex space-x-4">
        <span className="hover:bg-opacity-80 px-4 py-2 rounded text-white font-bold">Overview</span>
        <span className="bg-white text-blue-900 px-4 py-2 rounded font-bold">Patient</span>
      </div>
      <div className="flex items-center space-x-2 text-white">
        <div className="flex flex-col text-right">
          <span>Nguyen Van A</span>
          <span className="text-gray-200">Admin</span>
        </div>
        <div className="bg-blue-700 p-2 rounded-full">
          <i className="fas fa-user text-white"></i> {/* Default avatar icon */}
        </div>
      </div>
    </header>
  );
};

export default Header;
