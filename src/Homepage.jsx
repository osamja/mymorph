import yinyang from './yin-yang.png';
import './App.css';
// morph status component
import './styles.css'
// import footer react component
import Footer from './Footer'

function Homepage() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={yinyang} className="App-logo" alt="logo" />
          <p>
            Discover the magic of Face Morphing
          </p>
          <a
            className="Mymorph-link"
            href="https://apps.apple.com/us/app/mymorph/id1554421298"
          >
            MyMorph App
          </a>
        </header>
          <Footer />
      </div>

    </div>
  );
}

export default Homepage;
