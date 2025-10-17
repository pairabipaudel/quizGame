import Header from './Header'
import Footer from './Footer'
import './App.css'
import Question_display from './Question_display'


function App() {
 

  return (
    <>
      <div className="full_container">
        <  Header className="header" ></Header>
           <Question_display/>
        <Footer className="footer" ></Footer>
      </div>
    </>
  )
}

export default App
