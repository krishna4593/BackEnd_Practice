import { NavLink } from "react-router";

import NoteList from "../components/NoteList";
import NoteSearch from "../components/NoteSearch";

import useNotes from "../../hooks/useNotes";
import useDeleteNote from "../../hooks/useDeleteNote";

const NotesPage = () => {
  const {
    notes,
    isLoading,
    isError,
    error,
  } = useNotes();

  const {
    deleteNote,
    isDeleting,
  } = useDeleteNote();

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this note?"
    );

    if (!confirmed) {
      return;
    }

    deleteNote(id);
  };

  // Loading
  if (isLoading) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-slate-500">
            Loading notes...
          </p>
        </div>
      </main>
    );
  }

  // Error
  if (isError) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
            <h2 className="font-semibold text-red-700">
              Failed to load notes
            </h2>

            <p className="mt-2 text-sm text-red-600">
              {error?.message || "Something went wrong."}
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Your Notes
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Keep your thoughts organized and accessible.
            </p>
          </div>

          <NavLink
            to="/notes/add"
            className="w-fit rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700"
          >
            + Add Note
          </NavLink>
        </div>

        {/* Search */}
        <div className="mt-8 max-w-2xl">
          <NoteSearch
            search=""
            onSearchChange={() => {}}
          />
        </div>

        {/* Notes */}
        <section className="mt-10">

          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">
              All Notes
            </h2>

            <span className="text-sm text-slate-500">
              {notes.length} notes
            </span>
          </div>

          <NoteList
            notes={notes}
            onDelete={handleDelete}
          />

          {/* Delete Loading */}
          {isDeleting && (
            <p className="mt-4 text-center text-sm text-slate-500">
              Deleting note...
            </p>
          )}

        </section>

      </div>
    </main>
  );
};

export default NotesPage;