const navigationItems = [
  { label: "Dashboard", icon: "◫", active: true },
  { label: "My Projects", icon: "▦", active: false },
  { label: "My Tasks", icon: "☑", active: false },
  { label: "Calendar", icon: "▣", active: false },
  { label: "Settings", icon: "⚙", active: false },
];

function Sidebar() {
  return (
    <aside className="flex min-h-screen w-64 shrink-0 flex-col border-r border-slate-200 bg-white p-5">
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-xl font-bold text-white">
          T
        </div>

        <div>
          <h1 className="text-xl font-bold text-slate-900">
            TaskFlow
          </h1>
          <p className="text-xs text-slate-500">
            Project Workspace
          </p>
        </div>
      </div>

      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
        Workspace
      </p>

      <nav className="space-y-2">
        {navigationItems.map(({ label, icon, active }) => (
          <button
            key={label}
            type="button"
            className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
              active
                ? "bg-indigo-50 text-indigo-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span className="text-lg">{icon}</span>
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto rounded-2xl bg-indigo-600 p-4 text-white">
        <h3 className="font-semibold">Keep moving!</h3>

        <p className="mt-2 text-sm leading-6 text-indigo-100">
          Small steps every day lead to big results.
        </p>

        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-indigo-400">
          <div className="h-full w-3/4 rounded-full bg-white" />
        </div>

        <p className="mt-2 text-xs text-indigo-100">
          Your workspace awaits.
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;