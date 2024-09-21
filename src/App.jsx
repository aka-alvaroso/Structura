// App.jsx
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';

export default function App () {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4 fixed h-full">
        <h1 className="text-xl font-bold mb-6">My Design System</h1>
        <nav>
          <ul>
            <li className="mb-2">
              <Link to="/" className="hover:text-blue-400">Home</Link>
            </li>
            <li className="mb-2">
              <Link to="/about" className="hover:text-blue-400">About</Link>
            </li>
            <li className="mb-2">
              <Link to="/components" className="hover:text-blue-400">Components</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="ml-64 p-6 flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}
