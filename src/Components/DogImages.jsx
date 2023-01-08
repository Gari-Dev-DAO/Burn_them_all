

const DogImages = () => {
  return (
    <div style={{height:'180px',display:'flex',flexWrap:'wrap'}}>
     <div className='dogImgContainer'>
     <img src={require('../assests/Images/dogs.png')} alt='dog-seat' className='dogImgs'/>
     </div>
    <button className='nftbtn'>NFT Launching Soon</button>
    </div>
  )
}

export default DogImages