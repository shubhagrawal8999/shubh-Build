const statusColors = {
  live: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  beta: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  paused: 'bg-workshop-700/50 text-workshop-400 border-workshop-600/30',
  archived: 'bg-workshop-800/50 text-workshop-500 border-workshop-700/30',
}

export default function StatusBadge({ status }: { status: keyof typeof statusColors }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium uppercase tracking-wider ${statusColors[status]}`}>
      {status}
    </span>
  )
}
