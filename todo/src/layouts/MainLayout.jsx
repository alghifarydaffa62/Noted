import '../App.css'

const MainLayout = ({children}) => (
    <div className='min-h-screen bg-[#0A192F] flex flex-col'>
        <header className='py-8 px-4'>
            <h1 className='text-6xl text-center font-mono font-bold text-white tracking-wider'>Noted.</h1>
            <p className='text-center text-2xl text-gray-300 font-medium font-mono mt-2'>Write, Plan, Organize</p>
        </header>
        <main>{children}</main>
        <footer className='py-4 px-4 text-center text-gray-400 text-sm'>
            <p>Copyright &copy; 2025 Noted</p>
        </footer>
    </div>
)

export default MainLayout