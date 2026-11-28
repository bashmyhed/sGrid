const cells = [
  // corners: halka, grid er feel dey
  { x: 0, y: 0, c: 'fill-brand-100' },
  { x: 26, y: 0, c: 'fill-brand-100' },
  { x: 0, y: 26, c: 'fill-brand-100' },
  { x: 26, y: 26, c: 'fill-brand-100' },
  // cross er 4 ta haat
  { x: 13, y: 0, c: 'fill-brand-500' },
  { x: 0, y: 13, c: 'fill-brand-500' },
  { x: 26, y: 13, c: 'fill-brand-500' },
  { x: 13, y: 26, c: 'fill-brand-500' },
  // majhkhane navy
  { x: 13, y: 13, c: 'fill-navy-700' },
]

export default function Logo({ className = 'h-10 w-10' }) {
  return (
    <svg viewBox="0 0 36 36" className={className} aria-hidden="true">
      {cells.map((cell, i) => (
        <rect key={i} x={cell.x} y={cell.y} width="10" height="10" rx="2.5" className={cell.c} />
      ))}
    </svg>
  )
}