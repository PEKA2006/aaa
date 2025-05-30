import React, { useState } from 'react';
import './Portfolio.css'; 

const portfolioData = {
  portrait: [
    { src: 'https://media.istockphoto.com/id/1045546948/photo/woman-having-fun-and-dancing-in-the-pink-bathtube.jpg?s=612x612&w=0&k=20&c=ElF9d5ycFrqD_BOnQ7yAnCNwGYmXnDp8GusLjd7gMII=', alt: 'Portrait 1' },
    { src: 'https://images.pexels.com/photos/1630344/pexels-photo-1630344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Portrait 2' },
    { src: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Portrait 3' },
    { src: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Portrait 4' },
    { src: 'https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Portrait 5' },
    { src: 'https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Portrait 6' },
    { src: 'https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=600',   alt: 'Portrait 7' },
    { src: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Portrait 8' },
    { src: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Portrait 9' }
  ],
  wedding: [
    { src: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Wedding 1' },
    { src: 'https://images.pexels.com/photos/341372/pexels-photo-341372.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Wedding 2' },
    { src: 'https://images.pexels.com/photos/1035665/pexels-photo-1035665.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Wedding 3' },
    { src: 'https://images.pexels.com/photos/32167264/pexels-photo-32167264/free-photo-of-elegant-indoor-wedding-portrait-with-bride-and-groom.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Wedding 4' },
    { src:'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D', alt: 'Wedding 5' },
    { src: 'https://images.pexels.com/photos/883362/pexels-photo-883362.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Wedding 6' },
    { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D', alt: 'Wedding 7' },
    { src: 'https://images.pexels.com/photos/840566/pexels-photo-840566.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Wedding 8' },
    { src: 'https://images.pexels.com/photos/169189/pexels-photo-169189.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Wedding 9' }
  ],
  event: [
    { src: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Event 1' },
    { src: 'https://media.istockphoto.com/id/1090034010/photo/holi-festival-dahan.jpg?b=1&s=612x612&w=0&k=20&c=y5Cb9TVRntjhha5NLjaXa4moiazuWIWktUdhPub7BdA=', alt: 'Event 2' },
    { src: 'https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Event 3' },
    { src: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Event 4' },
    { src: 'https://images.pexels.com/photos/433452/pexels-photo-433452.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Event 5' },
    { src: 'https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Event 6' },
    { src: 'https://media.istockphoto.com/id/1482845206/photo/male-asking-a-question-to-a-speaker-during-a-q-and-a-session-at-an-international-tech.jpg?b=1&s=612x612&w=0&k=20&c=vtNRvBXjaxmn9wnvR_-qXwsD81TEhGmTnPo8EEczQc0=', alt: 'Event 7' },
    { src: 'https://images.pexels.com/photos/1604991/pexels-photo-1604991.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Event 8' },
    { src: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Event 9' }
  ],
  commercial: [
    { src: 'https://images.pexels.com/photos/17132215/pexels-photo-17132215/free-photo-of-a-plate-of-food-with-cheese-and-herbs-on-it.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Commercial 1' },
    { src: 'https://images.pexels.com/photos/31993397/pexels-photo-31993397/free-photo-of-aerial-view-of-frankfurt-am-main-skyline.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Commercial 2' },
    { src: 'https://images.pexels.com/photos/1058276/pexels-photo-1058276.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Commercial 3' },
    { src: 'https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Commercial 4' },
    { src: 'https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Commercial 5' },
    { src: 'https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Commercial 6' },
    { src: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Commercial 7' },
    { src: 'https://images.pexels.com/photos/2116721/pexels-photo-2116721.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Commercial 8' },
    { src: 'https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Commercial 9' }
  ]
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('portrait');

  return (
    <>

    <div className="container py-5">
      <h2 className="text-center text-primary mb-4">Our Portfolio</h2>

      <div className="d-flex justify-content-center mb-4 flex-wrap gap-2">
        {Object.keys(portfolioData).map((category) => (
          <button
            key={category}
            className={`btn ${activeCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="row">
        {portfolioData[activeCategory].map((item, index) => (
          <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
            <img
              src={item.src}
              alt={item.alt}
              className="img-fluid rounded shadow"
              style={{ height: '300px', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </div>

    </>
  );
};

export default Portfolio;
