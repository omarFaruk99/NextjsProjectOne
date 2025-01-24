import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // Function to render authentication links
  const renderAuthLinks = () => {
    if (!user) {
      return (
        <>
          <li className="ml-4">
            <Link
              href="/api/auth/login"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md"
            >
              Login
            </Link>
          </li>
          <li className="ml-4">
            <Link
              href="/api/auth/register"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md"
            >
              Register
            </Link>
          </li>
        </>
      );
    } else {
      return (
        <li className="ml-4">
          <Link
            href="/api/auth/logout"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md"
          >
            Logout
          </Link>
        </li>
      );
    }
  };

  return (
    <header className="bg-gray-800 text-white shadow-lg w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Left Side: Website Name */}
        <h1 className="text-2xl font-bold">
          <Link href="/">Albertoes</Link>
        </h1>

        {/* Right Side: Navigation Links */}
        <nav>
          <ul className="flex items-center space-x-8">
            <li>
              <Link href="/" className="hover:text-gray-300 px-3 py-2">
                Home
              </Link>
            </li>
            <li>
              <Link href="/profile" className="hover:text-gray-300 px-3 py-2">
                Profile
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300 px-3 py-2">
                Test
              </Link>
            </li>

            {/* Conditional Authentication Buttons */}
            {renderAuthLinks()}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
