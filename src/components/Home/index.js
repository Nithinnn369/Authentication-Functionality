// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="heading">Clothes That Get YOU Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-small-size-image"
        />
        <p className="fassion-content">
          Fashion is part of the daily air in the src/components directory.Don t
          change the component folder names as those are the files being
          imported into the tests.Do not remove the pre-filled codeWant to
          quickly review some of the concepts you ve been learning? Take a look
          at the Cheat Sheets.
        </p>
        <button type="button" className="shop-now-button">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="home-large-size-image"
      />
    </div>
  </>
)

export default Home
