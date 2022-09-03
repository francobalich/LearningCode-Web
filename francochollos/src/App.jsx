import './App.css'
import './index.css'
import { Route, Routes, Link, useParams, Outlet, NavLink } from 'react-router-dom'
import restauranteImg from './assets/restaurante.jpg'

const Home = () => {
  return (
    <div className='Inicio'>
      <h1>Inicio</h1>
      <img src={restauranteImg} alt='foto restaurante' className='imgRestaurante' />
    </div>
  )
}

const SearchPage = () => {
  const comidas = [
    '🍔Hamburguesa',
    '🍕Pizza',
    '🌭Pancho',
    '🍝Pastas',
    '🥟Empanadas',
    '🍻Cerveza',
    '🥗Ensalada',
    '🍣Sushi',
    '🍨Helado',
    '🌮Taco'
  ]
  return (
    <div className='Busqueda'>
      <h1>Menu</h1>
      <ul className='listaDeComidas'>
        {comidas.map(comida => (
          <li key={comida}>
            <Link to={`/comidas/${comida}`}><p>{comida.substring(0, 2)}</p>{comida.substring(2, comida.length)}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Comidas = () => {
  const { comida } = useParams()
  return (
    <div className='titulo'>
      <h1>Comidas</h1>
      <p>{comida}</p>
      <Link className='irdetalles' to='details'>Ir a los detalles</Link>
      <Outlet />
    </div>
  )
}
const ComidaDetails = () => {
  const { comida } = useParams()
  return (
    <div className='titulo'>
      <h1>Detalles de la comida</h1>
      <p className=''>{comida}</p>
    </div>
  )
}
function App () {
  return (
    <div className='App'>
      <header>
        <h1>Menu Restaurante🥟</h1>
        <nav>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? 'is-active' : undefined
                }}
                to='/'
              >Home
              </NavLink>
            </li>
            <li><Link to='/search-page'>Página de busqueda</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search-page' element={<SearchPage />} />
        <Route path='/comidas/:comida' element={<Comidas />}>
          <Route path='details' element={<ComidaDetails />} />
        </Route>
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App
