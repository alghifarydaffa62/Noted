import '../App.css'
import MainLayout from '../layouts/MainLayout'
import SearchBar from '../components/searchBar'
import AddWorkspace from '../components/buttonAdd'
import LoginButton from '../components/loginButton'

function Home() {
  return (
    <MainLayout>
      <div className='flex justify-center gap-4'>
        <AddWorkspace/>
        <LoginButton/>
      </div>
      
      <SearchBar/>
    </MainLayout>
  )
}

export default Home
