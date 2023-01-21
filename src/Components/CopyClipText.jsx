import { toast } from "react-toastify";
import { copyTextToClipboard } from "../utils/js-utils";

const CopyClipText = ({ text,style }) => {
  const handleCopyClick = async () => {
    try {
      await copyTextToClipboard(text);
      toast.success("Address Copied!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (err) {
      toast.error("Can Not Copied!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <button onClick={handleCopyClick} className="copyBtn" style={style}>
      {text}
    </button>
  );
};

export default CopyClipText;
