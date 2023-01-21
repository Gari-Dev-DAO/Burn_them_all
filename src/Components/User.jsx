import CopyClipText from "./CopyClipText";
import RoundedImage from "./RoundedImage";
import { getRandom } from "../utils/js-utils";

const User = ({ publicKey, noOfTimes, rank }) => {
  const random=getRandom(5)
  return (
    <div className="user">
      <p style={{fontWeight:600}}>{rank}</p>
      <RoundedImage src={require(`../assests/Images/avtar${random}.png`)} size={32} />
      <p style={{ width: "65%" }}>
        <CopyClipText text={publicKey} />
      </p>
      <p style={{fontWeight:600}}>{noOfTimes}</p>
    </div>
  );
};

export default User;
