import Sidebar from '../components/organisms/Sidebar'
import Header from '../components/organisms/Header'

export default function AdminLayout({ title, children }) {
  return (
    <div className="min-h-screen bg-slate-100 md:grid md:grid-cols-[240px_1fr]">
      <Sidebar />
      <div>
        <Header title={title} />
        <main className="p-6">{children}</main>
        <div className='max-h-max max-w-max'>
            <h1 className='p-5 font-bold colour-rotate'>INI PUNYA DUDUNG</h1>
        </div>
      </div>
    </div>
  )
}
