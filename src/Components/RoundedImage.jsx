const RoundedImage = ({ src, size }) => {
  return (
    <img
      src={src}
      alt="avtar"
      style={{
        height: `${size}px`,
        width: `${size}px`,
        borderRadius: "50%",
        objectFit: "contain",
      }}
    />
  );
};

export default RoundedImage;
