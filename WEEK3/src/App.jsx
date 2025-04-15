import { Route, Routes, Link } from "react-router-dom";
import TextUpdater from "./components/TextUpdater";
import UserCard from "./components/UserCard";
import Button from "./components/Button";
import LoginForm from "./components/LoginForm"; // Only one import for LoginForm

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-center space-x-6">
        <Link to="/" className="text-blue-600 hover:underline">TextUpdater</Link>
        <Link to="/login" className="text-blue-600 hover:underline">LoginForm</Link>
        <Link to="/user" className="text-blue-600 hover:underline">UserCard</Link>
        <Link to="/button" className="text-blue-600 hover:underline">Button</Link>
      </nav>

      {/* Page Content */}
      <main className="flex-grow flex justify-center items-start p-8">
        <div className="w-full max-w-4xl">
          <Routes>
            <Route path="/" element={<TextUpdater />} />
            <Route path="/login" element={<LoginForm />} />
            <Route
              path="/user"
              element={
                <UserCard
                  name="Hitanshu Yadav"
                  email="hitanshuyadav2022@gmail.com"
                />
              }
            />
            <Route path="/button" element={<Button />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
