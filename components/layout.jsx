import Header from "./header"
import Footer from "./footer"

const Layout = ({children}) => {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout
