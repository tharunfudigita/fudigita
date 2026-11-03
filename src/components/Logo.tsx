interface LogoProps {
  light?: boolean;
  className?: string;
}

export default function Logo({ light = false, className = "" }: LogoProps) {
  return (
    <div className={`leading-none ${className}`}>
      <div
        className={`text-[28px] font-bold tracking-tight ${
          light ? "text-white" : "text-navy"
        }`}
      >
        fudigita
      </div>
      <div className="mt-1 text-[8px] font-medium uppercase tracking-[0.42em] text-gold">
        Digital Agency
      </div>
    </div>
  );
}
