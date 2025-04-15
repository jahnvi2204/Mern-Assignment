import React from 'react';

const UserCard = ({ name, email }) => {
  const initial = name ? name.charAt(0).toUpperCase() : 'H';

  return (
    <div className="max-w-md mx-auto mt-12 bg-white rounded-3xl shadow-xl p-8 transition-all duration-300 hover:scale-[1.03] border border-gray-200">
      <div className="flex items-center gap-6">
        {/* Avatar Circle */}
        <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold shadow-md">
          {initial}
        </div>

        {/* Name & Email */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 tracking-tight">{name}</h2>
          <p className="text-sm text-gray-500">{email}</p>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="mt-6 h-1 w-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full" />

      {/* Footer / Tagline */}
      <div className="mt-4 text-center text-xs text-gray-400 italic">
        Passionate about web tech ✨
      </div>
    </div>
  );
};

export default UserCard;
