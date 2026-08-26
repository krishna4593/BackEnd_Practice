import { NavLink } from "react-router";

const NoteCard = ({ note, onDelete }) => {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">

      <div className="mb-4">
        <h2 className="text-lg font-semibold text-slate-900">
          {note.title}
        </h2>

        <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
          {note.description}
        </p>
      </div>

      <div className="flex items-center justify-between border-t border-slate-100 pt-4">

        <span className="text-xs text-slate-400">
          {note.createdAt}
        </span>

        <div className="flex gap-3">

          <NavLink
            to={`/notes/edit/${note._id}`}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
          >
            Edit
          </NavLink>

          <button
            type="button"
            onClick={() => onDelete(note._id)}
            className="text-sm font-medium text-red-500 hover:text-red-600"
          >
            Delete
          </button>

        </div>
      </div>

    </article>
  );
};

export default NoteCard;