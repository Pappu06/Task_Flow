function Navbar() {
  return (
    <header className="flex flex-col justify-between gap-4 border-b border-slate-200 bg-white px-6 py-5 sm:flex-row sm:items-center lg:px-8">
      <div>
        <p className="text-sm text-slate-500">
          Workspace / Overview
        </p>

        <h2 className="mt-1 text-2xl font-bold text-slate-900">
          Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="Notifications"
          className="relative rounded-xl border border-slate-200 p-3 text-slate-600 hover:bg-slate-50"
        >
          ♧
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500" />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700">
            PK
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">
              Pappu Kumar
            </p>

            <p className="text-xs text-slate-500">
              Project Manager
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;