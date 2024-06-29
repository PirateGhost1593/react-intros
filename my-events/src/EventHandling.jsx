

function EventHandling(){

  const handleClick = (e) => e.target.textContent = "Subscribed!!!";

  return(
    <button className="button" onClick={ (e) => handleClick(e)}>Subscribe </button>
  );
}

export default EventHandling