import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth({ snackHealth }) {

  if(snackHealth){
    return (
      <>
        <p> <img src={heartSolid} alt="healthy food"/> </p>
      </>
    );
  } else{
    return (
      <>
        <p> <img src={heartOutline} alt="unhealthy food"/>  </p>
      </>
    );

  }

  
}

export default HeartHealth;
