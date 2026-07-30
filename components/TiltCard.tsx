import type { ReactNode } from "react";

export default function TiltCard({ children }: { children: ReactNode }) {
  return (
    <div className="group rounded-3xl border border-white/70 bg-white/75 p-6 shadow-soft backdrop-blur transition duration-300 hover:-translate-y-1 hover:rotate-1 hover:bg-white">
      {children}
    </div>
  );
}
