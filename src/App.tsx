// components
import Breadcrumbs from './Modules/Breadcrumbs/Breadcrumbs'
import Footer from './Modules/Footer/Footer'
import Header from './Modules/Header/Header'
import Hero from './Modules/Hero/Hero'
import Login from './Modules/Login/Login'

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Breadcrumbs />
      <Login />
      <Footer />
    </div>
  )
}

export default App
