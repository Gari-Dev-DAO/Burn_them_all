import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <ReactLoading
    type={"spin"}
    color={"white"}
    height={"100px"}
    width={"100px"}
    className="loading"
  />
  )
}

export default Loading