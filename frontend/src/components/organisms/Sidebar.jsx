const menus = ['Dashboard', 'Kursus', 'Pengguna']

export default function Sidebar() {
  return (
    <aside className="bg-blue-950 p-6 text-white">
      <h2 className="text-xl font-bold">Simple LMS</h2>
      <nav className="mt-8 grid gap-2">
        {menus.map((menu) => (
          <a key={menu} href="#" className="rounded-lg px-3 py-2 hover:bg-blue-800">
            {menu}
          </a>
        ))}
      </nav>
    </aside>
  )
}
