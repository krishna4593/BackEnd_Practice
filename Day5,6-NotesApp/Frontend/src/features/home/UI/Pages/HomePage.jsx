const HomePage = () => {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Welcome to NoteSpace
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Organize your thoughts.
            <span className="block text-indigo-600">
              One note at a time.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Capture your ideas, keep track of important information,
            and manage your notes from one simple and organized place.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <button
              className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white
                         transition hover:bg-indigo-700"
            >
              Get Started
            </button>

            <button
              className="rounded-lg border border-slate-300 bg-white px-6 py-3
                         font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Login
            </button>

          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-slate-200 bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl">

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-900">
                ✦ Simple
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Create and manage your notes without unnecessary complexity.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-900">
                ✦ Organized
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Keep your ideas and important information in one place.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-900">
                ✦ Accessible
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Access and manage your notes whenever you need them.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default HomePage;