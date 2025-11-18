import Link from 'next/link'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="mt-6 mb-8 mx-auto w-full max-w-6xl px-4 md:px-8">
      <div className="flex items-center gap-2 text-sm font-medium" style={{ fontFamily: 'Fredoka, cursive' }}>
        <Link href="/" className="text-slate-600 hover:text-slate-700 transition-colors">
          Home
        </Link>
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="text-slate-500">/</span>
            {item.href ? (
              <Link href={item.href} className="text-slate-600 hover:text-slate-700 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-700 font-semibold">{item.label}</span>
            )}
          </div>
        ))}
      </div>
    </nav>
  )
}
