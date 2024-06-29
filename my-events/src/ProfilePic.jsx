 
function ProfilePic() {

  const imageURL = './src/assets/profile.jpeg';
  
  const handleClick = (e) => e.target.style.display = "none";

  return(
    <img onClick={(e) => handleClick(e)} src={imageURL} alt="profilepic" />
  );
}

export default ProfilePic