import { NavLink, useNavigate, useParams } from "react-router";
import NoteForm from "../components/NoteForm";

import useNotes from "../../hooks/useNotes";
import useUpdateNote from "../../hooks/useUpdateNote";

const EditNotePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    notes,
    isLoading: isNotesLoading,
  } = useNotes();

  const {
    updateNote,
    isUpdating,
    isError,
    error,
  } = useUpdateNote();

  const note = notes.find((note) => note._id === id);

  if (isNotesLoading) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-slate-500">
            Loading note...
          </p>
        </div>
      </main>
    );
  }

  if (!note) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-10">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-xl font-semibold text-slate-900">
            Note not found
          </h1>

          <NavLink
            to="/notes"
            className="mt-4 inline-block text-sm font-medium text-indigo-600"
          >
            Back to Notes
          </NavLink>
        </div>
      </main>
    );
  }

  const handleUpdateNote = (data) => {
    return new Promise((resolve) => {
      updateNote(
        {
          id,
          noteData: data,
        },
        {
          onSuccess: () => {
            resolve(true);
            navigate("/notes");
          },

          onError: () => {
            resolve(false);
          },
        }
      );
    });
  };

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-2xl">

        <NavLink
          to="/notes"
          className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
        >
          ← Back to Notes
        </NavLink>

        <div className="mt-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Edit Note
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Update your note.
          </p>
        </div>

        {isError && (
          <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4">
            <p className="text-sm text-red-600">
              {error?.message || "Failed to update note."}
            </p>
          </div>
        )}

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <NoteForm
            defaultValues={{
              title: note.title,
              description: note.description,
            }}
            onSubmit={handleUpdateNote}
            isSubmitting={isUpdating}
            submitText="Update Note"
          />
        </div>

      </div>
    </main>
  );
};

export default EditNotePage;