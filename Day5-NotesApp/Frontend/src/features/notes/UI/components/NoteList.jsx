import { NavLink } from "react-router";
import NoteCard from "./NoteCard";

const NoteList = ({ notes, onDelete }) => {
  if (!notes || notes.length === 0) {
    return (
      <div className="flex flex-col items-center py-16 text-center">
        <h3 className="text-lg font-semibold text-slate-900">
          No notes yet
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Create your first note to get started.
        </p>

        <NavLink
          to="/notes/add"
          className="mt-6 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700"
        >
          Add Note
        </NavLink>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {notes.map((note) => (
        <NoteCard
          key={note._id}
          note={note}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default NoteList;