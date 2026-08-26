import { NavLink, useNavigate } from "react-router";
import NoteForm from "../components/NoteForm";
import useCreateNote from "../../hooks/useCreateNote";

const AddNotePage = () => {
  const navigate = useNavigate();

  const {
    createNote,
    isCreating,
    isError,
    error,
  } = useCreateNote();

  const handleCreateNote = (data) => {
    return new Promise((resolve) => {
      createNote(data, {
        onSuccess: () => {
          resolve(true);
          navigate("/notes");
        },

        onError: () => {
          resolve(false);
        },
      });
    });
  };

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-2xl">

        {/* Back */}
        <NavLink
          to="/notes"
          className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
        >
          ← Back to Notes
        </NavLink>

        {/* Header */}
        <div className="mt-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Create a new note
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Add something you want to remember.
          </p>
        </div>

        {/* Error */}
        {isError && (
          <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4">
            <p className="text-sm text-red-600">
              {error?.message || "Failed to create note."}
            </p>
          </div>
        )}

        {/* Form */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <NoteForm
            onSubmit={handleCreateNote}
            isSubmitting={isCreating}
          />
        </div>

      </div>
    </main>
  );
};

export default AddNotePage;