import {
  ChevronDown,
  CurlyBraces,
  FileCog2,
  Folder,
  Search,
  Server,
} from "lucide-react";

function App() {
  return (
    <div className="flex h-screen">
      <aside className="w-16 bg-white shadow-lg flex flex-col items-center py-6">
        <div className="mb-8">
          <Server />
        </div>
        <nav className="flex-grow">
          <ul className="space-y-6">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <Search />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <Folder />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <FileCog2 />
              </a>
            </li>
          </ul>
        </nav>
        <div className="mt-auto">
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            <CurlyBraces />
          </a>
        </div>
      </aside>

      <aside className="w-64 bg-gray-50 border-r border-gray-200 p-4 overflow-y-auto">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <nav>
          <ul className="space-y-2">
            <li>
              <details open>
                <summary className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded">
                  <ChevronDown size={16} className="mr-2 text-gray-500" />
                  <span className="font-medium">Demo</span>
                </summary>
                <ul className="ml-6 mt-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="flex items-center text-gray-600 hover:text-blue-600 p-2 rounded"
                    >
                      <Folder size={16} className="mr-2" />
                      <span>localhost</span>
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded">
                  <ChevronDown size={16} className="mr-2 text-gray-500" />
                  <span className="font-medium">Demo2</span>
                </summary>
                <ul className="ml-6 mt-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="flex items-center text-gray-600 hover:text-blue-600 p-2 rounded"
                    >
                      <Folder size={16} className="mr-2" />
                      <span>localhost2</span>
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-grow p-8 bg-gray-50">
        <header className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Welcome, <span className="text-blue-600">Dao Khoi!</span>
          </h2>
          <p className="text-xl text-gray-600">
            The open-source server manager for SSH, VNC, and RDP.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Quick Actions
            </h3>
            <div className="space-y-4">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                <i className="fab fa-github mr-2"></i> Star on GitHub
              </button>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                <i className="fab fa-discord mr-2"></i> Join Discord
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Recent Connections
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <i className="fas fa-desktop text-green-500 mr-3"></i>
                <span className="text-gray-700">localhost</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-desktop text-green-500 mr-3"></i>
                <span className="text-gray-700">localhost2</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
