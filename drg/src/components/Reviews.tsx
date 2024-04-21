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

  let total_rating = 0;

  data.forEach(rating => {
      total_rating += rating.count;
  })

  data.forEach(rating => {
    let rating_progress = `
          <div className="rating_progress_value">
            <p>${rating.star} <span className="star">&#9733;</span></p>
              <div className="progress">
                  <div className="bar" style="width: ${(rating.count / total_rating)* 100}%"></div>
              </div>
            <p>${rating.count.toLocaleString()}</p>
          </div>
`;

  //  document.querySelector('.rating_progress').innerHTML += rating_progress;
  });
  
  //  document.querySelector('.rating_average p').innerHTML = total_rating.toLocaleString();

  return (
  <article className="Reviews">
    <div className="rate">
    <h1>Game rating</h1>
      <div className="rating">
        <div className="rating_average">
          <h1>96%</h1>
          <div className="star_outer">
            <div className="star_inner">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          </div>
          <p>290,291</p>
        </div>
          
        <div className="rating_progress">
            
          <div className="rating_progress_value">
            <p>5 <span className="star">&#9733;</span></p>
              <div className="progress">
                  <div className="bar"></div>
              </div>
            <p>89,783</p>
          </div>
            
          <div className="rating_progress_value">
            <p>5 <span className="star">&#9733;</span></p>
              <div className="progress">
                  <div className="bar"></div>
              </div>
            <p>89,783</p>
          </div>
            
          <div className="rating_progress_value">
            <p>5 <span className="star">&#9733;</span></p>
              <div className="progress">
                  <div className="bar"></div>
              </div>
            <p>89,783</p>
          </div>
            
          <div className="rating_progress_value">
            <p>5 <span className="star">&#9733;</span></p>
              <div className="progress">
                  <div className="bar"></div>
              </div>
            <p>89,783</p>
          </div>
            
          <div className="rating_progress_value">
            <p>5 <span className="star">&#9733;</span></p>
              <div className="progress">
                  <div className="bar"></div>
              </div>
            <p>89,783</p>
          </div>
            
        </div>
      </div>
    </div>

      <div className="cards">
        
      </div>
      
  </article> 
  );  
}

export default Reviews;
