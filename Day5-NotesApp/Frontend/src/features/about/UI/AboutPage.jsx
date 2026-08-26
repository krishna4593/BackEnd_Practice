const AboutPage = () => {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-indigo-600">
            About NoteSpace
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            A simple place for your thoughts.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            NoteSpace is a simple notes management application designed to
            help you capture, organize, and manage your thoughts in one place.
          </p>
        </div>

        {/* Main Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-2xl font-semibold text-slate-900">
            Built for learning. Designed like a real product.
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            This application is being built as a full-stack learning project,
            with a focus on understanding how modern frontend and backend
            technologies work together.
          </p>

          <p className="mt-4 leading-7 text-slate-600">
            The application will gradually include features such as note
            creation, editing, searching, deletion, authentication and
            authorization.
          </p>

          {/* Features */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-slate-50 p-5">
              <h3 className="font-semibold text-slate-900">
                Simple
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Keep your notes organized without unnecessary complexity.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-5">
              <h3 className="font-semibold text-slate-900">
                Fast
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Quickly create, find, update and manage your notes.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-5">
              <h3 className="font-semibold text-slate-900">
                Organized
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Keep your thoughts and ideas in one convenient place.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <p className="mt-10 text-center text-sm text-slate-500">
          Built while learning, experimenting and building.
        </p>

      </div>
    </main>
  );
};

export default AboutPage;