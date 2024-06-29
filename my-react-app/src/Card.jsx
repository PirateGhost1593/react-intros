import profilePic from './assets/profile.jpeg'

function Card(){
  
  return(
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture" />
      <h2 className='card-title'>ASBah 29</h2>
      <p className='card-text'>Front-End Developer and Gamer</p>
    </div>
  );
}

export default Card