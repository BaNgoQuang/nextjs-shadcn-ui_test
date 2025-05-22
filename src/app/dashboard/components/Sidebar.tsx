import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-60 h-screen border-r bg-white dark:bg-gray-800">
      <div className="p-6 text-xl font-bold">Admin Dashboard</div>
      <nav className="space-y-2 px-4">
        <Link href="/dashboard">
          <span className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            Dashboard
          </span>
        </Link>
        <Link href="/dashboard/#">
          <span className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            Pending Suppliers
          </span>
        </Link>
        <Link href="/dashboard/#">
          <span className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            Pending Events
          </span>
        </Link>
        <Link href="/dashboard/#">
          <span className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            Moderate Posts
          </span>
        </Link>
        <Link href="/dashboard/#">
          <span className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            User Management
          </span>
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;