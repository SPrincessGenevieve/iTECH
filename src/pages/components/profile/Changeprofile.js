import { Component } from "react";
import './../../../pages/components/profile/Changeprofile.css'
import { Button } from "@material-ui/core";
export class ChangeProfile extends Component {
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
         
            <div  style={{marginLeft:"12rem", marginTop:"3.5rem", position:"absolute"}}>
                <div>
                    <div>
                        <img src={profileImg} style={{height: 180, width: 180, borderRadius: 20, boxShadow: "2px 2px 10px 4px #39302A", marginLeft: "-8.3rem", marginBottom: 15}}></img>
                    </div>
                    <input type="file" name = "image-upload" id = "input" accept = "image" onChange={this.imageHandler}></input>
                </div>
                
                
                <div className="label">
                    <div className="text-prof">
                        <label htmlFor="input" style={{backgroundColor:"#39302A", fontSize: 20, color:"white", padding: 15, borderRadius: 20, paddingLeft: 30, paddingRight: 30}}>
                            <i className="material-icon"></i>
                            Change Profile
                        </label>
                    </div>
                </div>
                <Button variant='contained' style={{backgroundColor:"green", width: "12rem", marginLeft:"-8.5rem", marginTop: "-3rem", borderRadius:15, color:"white", fontWeight:"bold"}}>SAVE</Button>
                
            </div>

        );
    };
};
export default ChangeProfile;