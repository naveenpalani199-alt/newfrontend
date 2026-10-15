import profileImage from "./assets/profile.jpg";

const Profilecard = ()=>{


    return (<>
    
    <div className="profile-card">
      <img
        src={profileImage}
        alt="Profile"
        className="profile-image"
      />

      <h2>Nancy Wheeler</h2>
      <p>Frontend Developer</p>

      <button className="profile-button">
        View Profile
      </button>
    </div>
    
    
    </>)
}
export default Profilecard