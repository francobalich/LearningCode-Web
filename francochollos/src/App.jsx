import './App.css'
import { Route,Routes} from 'react-router-dom'

const Home = () => <h1>Home</h1>

const SearchPage = () => <h1>Search Page</h1>

function App () {
  return (
    <div className='App'>
      francochollo⚡
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search-page' element={<SearchPage />} />

      </Routes>
    </div>
  )
}

export default App
