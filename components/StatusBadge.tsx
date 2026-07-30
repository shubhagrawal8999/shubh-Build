import { cn } from "@/lib/utils";

type StatusBadgeProps = {
  status: "Live" | "Building" | "Archived";
};

const styles = {
  Live: "bg-emerald-100 text-emerald-700 ring-emerald-200",
  Building: "bg-violet-100 text-violet-700 ring-violet-200",
  Archived: "bg-slate-100 text-slate-600 ring-slate-200",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={cn("rounded-full px-3 py-1 text-xs font-semibold ring-1", styles[status])}>
      {status}
    </span>
  );
}
