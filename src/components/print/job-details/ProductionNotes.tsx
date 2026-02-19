import { useState } from "react";
import { FiUser, FiTrash2 } from "react-icons/fi";

export interface Note {
  id: string;
  content: string;
  author: string;
  timestamp: string;
}

export const ProductionNotes = () => {
  const [noteInput, setNoteInput] = useState("");
  const [notes, setNotes] = useState<Note[]>([
    {
      id: "1",
      content: "Customer requested extra vibrant colors",
      author: "John D.",
      timestamp: "2h ago",
    },
    {
      id: "2",
      content: "Using premium white underbase",
      author: "Sarah M.",
      timestamp: "4h ago",
    },
  ]);

  const handleAddNote = () => {
    if (!noteInput.trim()) return;

    const newNote: Note = {
      id: Date.now().toString(),
      content: noteInput,
      author: "You", // Hardcoded current user
      timestamp: "Just now",
    };

    setNotes([...notes, newNote]);
    setNoteInput("");
  };

  const handleDeleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-base font-bold text-gray-900 mb-3">
        Production Notes
      </h3>
      <div className="mb-3">
        <textarea
          value={noteInput}
          onChange={(e) => setNoteInput(e.target.value)}
          placeholder="Add a production note or special instruction..."
          className="w-full h-16 p-2.5 text-xs rounded-lg border border-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleAddNote();
            }
          }}
        />
        <div className="flex justify-end mt-2">
          <button
            onClick={handleAddNote}
            disabled={!noteInput.trim()}
            className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-md hover:bg-blue-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add Note
          </button>
        </div>
      </div>

      <div className="space-y-2 max-h-[200px] overflow-y-auto custom-scrollbar">
        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-gray-50 p-2.5 rounded-lg flex gap-2.5 group relative"
          >
            <div className="w-6 h-6 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center">
              <FiUser className="w-3 h-3 text-gray-500" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium text-gray-900 pr-5">
                {note.content}
              </p>
              <p className="text-[10px] text-gray-500 mt-0.5">
                {note.author} • {note.timestamp}
              </p>
            </div>
            <button
              onClick={() => handleDeleteNote(note.id)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"
              title="Delete note"
            >
              <FiTrash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
        {notes.length === 0 && (
          <p className="text-center text-xs text-gray-400 py-4">
            No notes yet
          </p>
        )}
      </div>
    </div>
  );
};
