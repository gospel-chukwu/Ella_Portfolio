export function Container({
  children,
  size = 'default',
  className = '',
}: {
  children: React.ReactNode;
  size?: 'default' | 'narrow' | 'wide';
  className?: string;
}) {
  const widths = {
    default: 'max-w-5xl',
    narrow: 'max-w-3xl', // e.g. the case study body text column
    wide: 'max-w-[1600px]', // e.g. a page that genuinely needs more room
  };

  return (
    <div
      className={`${widths[size]} mx-auto px-6 md:px-12 lg:px-13 ${className}`}
    >
      {children}
    </div>
  );
}
