const colorClasses = {
  blue: "bg-blue-500",
  purple: "bg-purple-500",
  emerald: "bg-emerald-500",
};

function ProjectCard({
  name,
  description,
  color,
  progress,
  totalTasks,
  completedTasks,
  deadline,
}) {
  const progressColor =
    colorClasses[color] ?? "bg-indigo-500";

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          <div
            className={`mt-1 h-3 w-3 shrink-0 rounded-full ${progressColor}`}
          />

          <div className="min-w-0">
            <h3 className="font-semibold text-slate-900">
              {name}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              {description}
            </p>
          </div>
        </div>

        <button
          type="button"
          aria-label={`More options for ${name}`}
          className="rounded-lg px-2 text-xl text-slate-400 hover:bg-slate-100"
        >
          ⋯
        </button>
      </div>

      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-slate-500">Progress</span>

          <span className="font-semibold text-slate-700">
            {progress}%
          </span>
        </div>

        <div
          className="h-2 overflow-hidden rounded-full bg-slate-100"
          role="progressbar"
          aria-label={`${name} progress`}
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className={`h-full rounded-full ${progressColor}`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm">
        <span className="text-slate-500">
          {completedTasks}/{totalTasks} tasks
        </span>

        <span className="text-slate-500">
          Due {deadline}
        </span>
      </div>
    </article>
  );
}

export default ProjectCard;