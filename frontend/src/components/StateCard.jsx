function StatCard({ title, value, subtitle, icon }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h3 className="mt-3 text-3xl font-bold text-slate-900">
            {value}
          </h3>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-2xl">
          {icon}
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-500">
        {subtitle}
      </p>
    </article>
  );
}

export default StatCard;