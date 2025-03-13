import React from 'react'
import fashionBackgroundImg from '../assets/images/fashion.jpg'
import fashionShowImages from "../fashionShowImage"
import fashionShow from "../assets/images/fashionshow.jpg"

const Discover = () => {
  const fashionElement = fashionShowImages.map((item) => {
    return (
      <div key={item.id} className='fashion-image-box'>
        <img src={item.url}  alt='Fashion Images'/>
      </div>
    )
  })
  return (
    <div className='discover-container'>
      <h1>Zenova </h1>
      <p>Summer Winter 2025</p>
      <div className="image-container">
        <img src={fashionBackgroundImg} alt='fashion-background' />
      </div>
      <h1>ShopSphere VogueVista</h1>
      <p>
      The ShopSphere Fashion Show is a highly anticipated event that captivates the fashion world, bringing together creativity, sophistication, and the finest in contemporary design. As a premier platform for both emerging and established designers, the show is not only a celebration of fashion but a visual feast that reflects the evolving world of style. With a focus on exclusivity, this event serves as a stage for some of the most innovative and trendsetting collections, offering a sneak peek into the future of fashion.<br/>
Taking place in an iconic venue, the ShopSphere Fashion Show is a grand affair that invites an audience of industry leaders, influencers, celebrities, and fashion enthusiasts. Each year, it highlights the work of designers from around the world, showcasing a wide array of styles that range from luxurious couture to dynamic, ready-to-wear collections. Whether it's opulent gowns adorned with intricate detailing, avant-garde streetwear, or minimalist chic designs, the event offers something for every taste and aesthetic.<br/>
Beyond the glamour and artistry of the runway, ShopSphere is committed to promoting sustainability in the fashion industry. Many of the featured designers embrace ethical fashion practices, incorporating eco-friendly materials and innovative, sustainable techniques. This commitment to sustainability not only reflects the growing awareness within the fashion community but also speaks to ShopSphere’s forward-thinking approach to the industry.<br/>
The ShopSphere Fashion Show is a unique experience that goes beyond the traditional runway. It is an event that ignites the imagination, challenges conventional fashion norms, and opens up new possibilities for the future of design. Attendees have the chance to engage with the designers, discover emerging trends, and witness firsthand the cutting-edge technology and digital innovations shaping the fashion landscape.<br/>
      </p>
      <div className="fashion-show-container">
        {fashionElement}
      </div>
      <div className="image-container">
        <img src={fashionShow} alt='fashion-background' />
      </div>
    </div>
  )
}

export default Discover