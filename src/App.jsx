// App.jsx
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';

import Button from './components/Button/Button'

export default function App () {
  return (
    <div className="min-h-screen">
      {/* Sidebar */}
      <nav className="w-64 text-gray-900 p-4 fixed h-full border-r-2 border-blackAlpha-100">
        <h1 className="text-center text-3xl font-bold mb-6">Structura</h1>
        <nav>
          <ul className="flex flex-col items-start">
            <Link to="/" className="w-full">
              <Button color="white" variant="ghost" text="left" classNames="w-full">
                <i className="fas fa-home"></i> Home
              </Button>
            </Link>
            <Link to="/about" className="w-full">
              <Button color="white" variant="ghost" text="left" classNames="w-full">
                <i className="fas fa-compass"></i> Getting started
              </Button>
            </Link>
            <span className="my-4"><i className="fas fa-cube"></i> Components</span>
            <Link to="/about" className="w-full">
              <Button color="white" variant="ghost" text="left" classNames="w-full">
                Button
              </Button>
            </Link>
            <Link to="/about" className="w-full">
              <Button color="white" variant="ghost" text="left" classNames="w-full">
                Button
              </Button>
            </Link>
          </ul>
        </nav>
      </nav>

      {/* Main Content */}
      <main className="ml-64 p-6 flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div >
  );
}
