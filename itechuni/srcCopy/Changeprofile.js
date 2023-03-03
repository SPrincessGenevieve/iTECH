import { Component } from "react";
import profile from"../Images/unkown-ppicture.png"
import './../pages/Changeprofile.css'

export class Profile extends Component {
    state = { profileImg: 'https://www.seekpng.com/png/detail/413-4139803_unknown-profile-profile-picture-unknown.png'}

imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
        if (reader.readyState ===2){
            this.setState({profileImg: reader.result})
        }
    }
    reader.readAsDataURL((e.target.files[0]))
}
render () {
    const {profileImg} = this.state;
    return(
         
            <div className="">
                <div className="img-holder">
                    <img src={profileImg} alt = "" id="img" className="img"></img>
                </div>
                <input type="file" name = "image-upload" id = "input" accept = "image" onChange={this.imageHandler}></input>
                <div className="label">
                    <div className="text-prof">
                    <label htmlFor="input" className="image-upload">
                        <i className="material-icon"> </i>
                        Change Profile
                    </label>
                    </div>
                </div>
            </div>

        );
    };
};
export default Profile;