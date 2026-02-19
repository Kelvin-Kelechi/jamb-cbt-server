import { AiOutlineSearch, } from 'react-icons/ai';
import { GoBell } from "react-icons/go";
export const Topbar = () => (
  <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
    {/* Search */}
    <div className="flex items-center gap-3 w-full max-w-xl   border border-gray-200 rounded-xl px-4 py-2">
      <AiOutlineSearch className="w-4 h-4 text-gray-400" />
      <input
        className="bg-transparent outline-none text-sm w-full placeholder-gray-400"
        placeholder="Search"
      />
    </div>

    {/* Right */}
    <div className="flex items-center gap-6">
      {/* Notification */}
      <button className="relative w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-50 transition-colors">
        <GoBell className="w-5 h-5 text-gray-600" />
        <span className="absolute top-1 right-2 w-3 h-3 bg-red-500 rounded-full border border-white"></span>
      </button>

      {/* User */}
      <div className="flex items-center gap-3">
        <img
          src="/profile1.jpg"
          alt="avatar"
          className="w-9 h-9 rounded-full object-cover"
        />
        <div className="leading-tight">
          <div className="text-sm font-medium">Brandon</div>
          <div className="text-xs text-gray-500">brandon@gmail.com</div>
        </div>
      </div>
    </div>
  </header>
);
