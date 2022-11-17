import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home">
      <header className="header">
        <h1>Where's Waldo?</h1>
      </header>
      <main>
        <div className='game-selection'>
        <Link to="/easy">
          <h4 className='title'>Easy</h4>
            <img className='small-img' src={require('../images/skiSlopes.jpeg')} alt="colorful where's waldo field of characters"/>
          </Link>
        </div>
        <div>
        <Link to="/medium">
          <h4 className='title'>Medium</h4>
            <img className='small-img' src={require('../images/spaceStation.jpeg')} alt="colorful where's waldo field of characters"/>
          </Link>
        </div>
        <div>
        <Link to="/hard">
          <h4 className='title'>Hard</h4>
            <img className='small-img' src={require('../images/fruitLand.jpeg')} alt="colorful where's waldo field of characters"/>
        </Link>
        </div>
      </main>
    </section>
  )
}

export default Home;