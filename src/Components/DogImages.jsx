

const DogImages = () => {
  return (
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',width:'100%'}}>
     <div className='dogImgContainer'>
     <img src={require('../assests/Images/dogs.png')} alt='dog-seat' className='dogImgs'/>
     </div>
    <button className='nftbtn'>NFT Launching Soon</button>
    </div>
  )
}

export default DogImages