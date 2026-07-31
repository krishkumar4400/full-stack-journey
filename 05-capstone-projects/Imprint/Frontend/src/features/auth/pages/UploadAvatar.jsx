import "../style/avatar.scss";
import { Camera } from "lucide-react";

const UploadAvatar = () => {
  return (
    <div className="container">
      <div className="box">
        <img src="" alt="" />
        <div id="upload-button">
            <Camera />
        </div>
      </div>
    </div>
  );
};

export default UploadAvatar;
