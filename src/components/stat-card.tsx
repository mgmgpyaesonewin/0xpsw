interface StatCardProps {
  value: string;
  label: string;
  icon?: string;
}

export function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <div className="border border-border rounded-lg p-4 bg-card hover:border-green/30 transition-colors">
      <div className="text-2xl font-bold text-green text-glow">
        {icon && <span className="mr-1">{icon}</span>}
        {value}
      </div>
      <div className="text-xs text-muted mt-1">{label}</div>
    </div>
  );
}
