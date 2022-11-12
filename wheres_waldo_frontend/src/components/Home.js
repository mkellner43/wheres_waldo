import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home">
      <header className="header">
        <h1>Where's Waldo?</h1>
      </header>
      <main>
        <div>
        <Link to="/easy">
          <h5>Easy</h5>
            <img className='small-img' src={require('../images/skiSlopes.jpeg')} alt="colorful where's waldo field of characters"/>
          </Link>
        </div>
        <div>
        <Link to="/medium">
          <h5>Medium</h5>
            <img className='small-img' src={require('../images/spaceStation.jpeg')} alt="colorful where's waldo field of characters"/>
          </Link>
        </div>
        <div>
        <Link to="/hard">
          <h5>Hard</h5>
            <img className='small-img' src={require('../images/fruitLand.jpeg')} alt="colorful where's waldo field of characters"/>
        </Link>
        </div>
      </main>
    </section>
  )
}

export default Home;