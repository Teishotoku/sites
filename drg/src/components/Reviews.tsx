const Reviews = () => {

  let data = [
    {
      'star': 5,
      'count': 29320,
    },
    {
      'star': 4,
      'count': 9520,
    },
    {
      'star': 3,
      'count': 320,
    },
    {
      'star': 2,
      'count': 212,
    },
    {
      'star': 1,
      'count': 984,
    },
  ]

  return (
  <article className="Reviews">
    <div className="rate">
    <h1>Game rating</h1>
      <div className="rating">
        <div className="rating_average">
          <h1>96 % </h1>
          <div className="star_outer">
            <div className="star_inner">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          </div>
          <p>290,291 reviews</p>
        </div>
          
        <div className="rating_progress">
            
          <div className="rating_progress_value">
            <p>5 <span className="star">&#9733;</span></p>
              <div className="progress">
                  <div className="bar b1"></div>
              </div>
            <p>49,783</p>
          </div>
            
          <div className="rating_progress_value">
            <p>4 <span className="star">&#9733;</span></p>
              <div className="progress">
                  <div className="bar b2"></div>
              </div>
            <p>9,783</p>
          </div>
            
          <div className="rating_progress_value">
            <p>3 <span className="star">&#9733;</span></p>
              <div className="progress">
                  <div className="bar b3"></div>
              </div>
            <p>1,907</p>
          </div>
            
          <div className="rating_progress_value">
            <p>2 <span className="star">&#9733;</span></p>
              <div className="progress">
                  <div className="bar b4"></div>
              </div>
            <p>142</p>
          </div>
            
          <div className="rating_progress_value">
            <p>1 <span className="star">&#9733;</span></p>
              <div className="progress">
                  <div className="bar b5"></div>
              </div>
            <p>783</p>
          </div>
            
        </div>
      </div>
    </div>

    {/* CARDS BLOCK */}

      <div className="cards">
        <div className="card">
          <div className="cont">
            <img className="quote" src="./img/quote.png"/>
            <p>Best coop games in scifi-shooter setting everywhere, 9/10</p>
            <img className="user" src="./img/user.png"/>
            <h3>steam communiy</h3>
          </div>
        </div>
        
        <div className="card">
          <div className="cont">
            <img className="quote" src="./img/quote.png"/>
            <p>hard, scary gliphids, more beer, little dwarfs, ten stars 10/10</p>
            <img className="user" src="./img/ign.png"/>
            <h3>IGN inc.</h3>
          </div>
        </div>
        
        <div className="card">
          <div className="cont">
            <img className="quote" src="./img/quote.png"/>
            <p>Rock and stone, miner! very atmosheric gameplay 8/10</p>
            <img className="user" src="./img/stopgame.png"/>
            <h3>STOPGAME.ru</h3>
          </div>
        </div>
        
      </div>
      
  </article> 
  );  
}

export default Reviews;
