import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal, Image } from "react-bootstrap";
import "./Services.css";
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

const serviceData = [
  {
    title: "Core Photography Services",
    description: "Professional portraits tailored to your personality with studio lighting and background setup.",
    samples: [
      "https://images.pexels.com/photos/6957184/pexels-photo-6957184.png?auto=compress&cs=tinysrgb&w=600",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60",
      "https://images.pexels.com/photos/31732877/pexels-photo-31732877/free-photo-of-colorful-architecture-in-a-modern-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    ],
  },
  {
    title: "Wedding Photography",
    description: "Capturing every magical moment of your special day with artistic elegance and storytelling.",
    samples: [
      "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/931796/pexels-photo-931796.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
  },
  {
    title: "Baby Shoot",
    description: "Adorable portraits celebrating your babys's first precious milestones.",
    samples: [
      "https://images.pexels.com/photos/31149484/pexels-photo-31149484/free-photo-of-adorable-baby-s-first-birthday-celebration.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://plus.unsplash.com/premium_photo-1661780496345-6aeee82ec4b4?w=600&auto=format&fit=crop&q=60",
      "https://images.pexels.com/photos/30191797/pexels-photo-30191797/free-photo-of-adorable-sleeping-baby-in-cozy-setting.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
  },
  {
    title: "Candid Photography",
    description: "Capturing spontaneous, unposed moments that reflect real emotions and stories.",
    samples: [
      "https://images.pexels.com/photos/10578922/pexels-photo-10578922.jpeg?auto=compress&cs=tinysrgb&w=  ",
      "https://images.unsplash.com/photo-1711611985747-825a50aec03f?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=600&auto=format&fit=crop&q=60"
    ],
  },
   {
    title: "Pre-Wedding & Pre Shoots",
    description: "Capture your love story through dreamy indoor and outdoor pre-wedding sessions with romantic themes and cinematic flair.",
    samples: [
      "https://images.unsplash.com/photo-1631621583126-ed10a80f62b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJlJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1631621584619-8bef2408f569?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1686294590361-77d765d76aad?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
  },
  {
    title: "Fashion Photography",
    description: "Stylized fashion shoots for lifestyle, fitness, physique, and costume concepts with professional direction and lighting.",
    samples: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fEZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fEZpdG5lc3N8ZW58MHx8MHx8fDA%3D"
    ],
  },
  {
    title: "Regular Photography",
    description: "Classic posed photos for formal shoots, including group and individual portraits.",
    samples: [
      "https://plus.unsplash.com/premium_photo-1673448391005-d65e815bd026?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?w=600&auto=format&fit=crop&q=60",
      "https://plus.unsplash.com/premium_photo-1679865370855-5a367b828f9a?w=600&auto=format&fit=crop&q=60"
    ],
  },
  {
    title: "Product Shoot",
    description: "High-quality images that showcase your product’s features and boost your brand.",
    samples: [
      "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/8101520/pexels-photo-8101520.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
  },
  {
    title: "Model Shoot",
    description: "Professional portfolio shoots tailored for aspiring and established models.",
    samples: [
      "https://images.pexels.com/photos/7205398/pexels-photo-7205398.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/9821872/pexels-photo-9821872.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/9120830/pexels-photo-9120830.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
  },
  {
    title: "Drone Operator",
    description: "Aerial photography and videography using professional-grade drones with 4K resolution.",
    samples: [
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&auto=format&fit=crop&q=60",
      "https://plus.unsplash.com/premium_photo-1664637351108-394622ab796a?w=600&auto=format&fit=crop&q=60",
      "https://plus.unsplash.com/premium_photo-1668017179071-2d0d1b3c9066?w=600&auto=format&fit=crop&q=60"
    ],
  },
  
  {
    title: "Photo Editing & Retouching",
    description: "Professional post-processing to enhance clarity, colors, and beauty in your images.",
    samples: [
      "https://images.pexels.com/photos/6347722/pexels-photo-6347722.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/24286928/pexels-photo-24286928/free-photo-of-photographer-taking-a-self-portrait-with-laptop.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/7801140/pexels-photo-7801140.jpeg?auto=compress&cs=tinysrgb&w=600"
    ]
  },  {
    title: "Prints & Albums",
    description: "High-quality printed photos and personalized albums for lasting memories.",
    samples: [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1600585153970-6d99f9f08d3c?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1520262494112-9fe481d36ec3?w=600&auto=format&fit=crop&q=60"
    ]
  },
  {
    title: "Regular Videography",
    description: "Smooth, documentary-style video coverage with fast delivery and clear edits.",
    samples: [
      "https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/3379942/pexels-photo-3379942.jpeg?auto=compress&cs=tinysrgb&w=600"
    ]
  },
  {
    title: "Cinematic Videography",
    description: "Storytelling-driven films crafted with cinematic equipment and techniques.",
    samples: [
      "https://images.pexels.com/photos/275977/pexels-photo-275977.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/3062539/pexels-photo-3062539.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/3045396/pexels-photo-3045396.jpeg?auto=compress&cs=tinysrgb&w=600"
    ]
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  return (
      <div className="full-background">
        <div className="services-hero">
          <div className="overlay">
            <h1 className="hero-title">Our Photography Services</h1>
          </div>
        </div>

      <Container className="services-container py-5">
        <Row>
          {serviceData.map((service, index) => (
            <Col md={4} sm={6} xs={12} key={index} className="mb-4">
              <Card className="service-card h-100">
                <Card.Img variant="top" src={service.samples[0]} />
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <div className="d-flex justify-content-center">
                    <Button variant="info" onClick={() => handleCardClick(service)}>
                      View More
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {selectedService && (
          <Modal show={showModal} onHide={handleCloseModal} centered size="lg" className="custom-modal">
            <Modal.Header closeButton>
              <Modal.Title>{selectedService.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{selectedService.description}</p>

              {selectedService.title === "Drone Operator" && (
  <div className="drone-details mt-3">
    <ul>
      <li><i className="bi bi-person-check-fill"></i><strong> FAA-Certified Pilot:</strong> Fully insured, compliant with all flight regulations.</li>
      <li><i className="bi bi-camera-video-fill"></i><strong> 4K Aerial Footage & Photos:</strong> Smooth, cinematic drone moves—reveals, fly-overs, and top-down shots.</li>
      <li><i className="bi bi-geo-alt-fill"></i><strong> Site Surveys & Planning:</strong> We scout locations virtually or in person for safe, dramatic flights.</li>
      <li><i className="bi bi-images"></i><strong> Deliverables:</strong> 1–3 minute aerial montage, stills, geo-tagged mapping files.</li>
    </ul>

  </div>
)}
{selectedService.title === "Product Shoot" && (
  <div className="drone-details mt-3">
    <ul>
      <li><i className="bi bi-box-seam"></i><strong> Studio-Grade Setup:</strong> High-resolution, clean background shots perfect for e-commerce.</li>
      <li><i className="bi bi-lightbulb-fill"></i><strong> Lighting Perfection:</strong> Precision lighting to highlight features, textures, and quality.</li>
      <li><i className="bi bi-easel-fill"></i><strong> Styled Shoots:</strong> Creative compositions and props to make your products pop.</li>
      <li><i className="bi bi-upload"></i><strong> Optimized for Platforms:</strong> Web and marketplace-ready formats (Amazon, Flipkart, Shopify).</li>
      <li><i className="bi bi-check2-circle"></i><strong> Fast Turnaround:</strong> Quick delivery for marketing campaigns and product launches.</li>
    </ul>

  </div>
)}
{selectedService.title === "Photo Editing & Retouching" && (
  <div className="drone-details mt-3">
    <ul>
      <li><i className="bi bi-magic"></i><strong> Image Enhancement:</strong> Adjusting exposure, color balance, and sharpness for top-tier results.</li>
      <li><i className="bi bi-brush-fill"></i><strong> Retouching:</strong> Blemish removal, skin smoothing, and object cleanup for a polished finish.</li>
      <li><i className="bi bi-palette-fill"></i><strong> Color Grading:</strong> Custom styles to match your brand, event mood, or aesthetic preference.</li>
      <li><i className="bi bi-upload"></i><strong> Format Delivery:</strong> High-resolution and web-ready versions provided.</li>
    </ul>
 
  </div>
)}
{selectedService.title === "Prints & Albums" && (
  <div className="drone-details mt-3">
    <ul>
      <li><i className="bi bi-journal-album"></i><strong> Custom Albums:</strong> Layflat, leather-bound, or glossy hardcover options.</li>
      <li><i className="bi bi-image-fill"></i><strong> Print Options:</strong> Sizes from 4x6 to A2 — matte, glossy, and canvas finishes available.</li>
      <li><i className="bi bi-gift-fill"></i><strong> Gifting Packages:</strong> Framed photos, calendars, and personalized gifts.</li>
    </ul>
   
  </div>
)}
{selectedService.title === "Regular Videography" && (
  <div className="drone-details mt-3">
    <ul>
      <li><i className="bi bi-camera-video-fill"></i><strong> Natural Coverage:</strong> No-frills documentation with smooth, steady footage.</li>
      <li><i className="bi bi-scissors"></i><strong> Clean Editing:</strong> Straight cuts, minimal transitions — authentic and professional.</li>
      <li><i className="bi bi-clock-history"></i><strong> Quick Turnaround:</strong> Delivery in days — ideal for announcements or recaps.</li>
      <li><i className="bi bi-collection-play-fill"></i><strong> Deliverables:</strong> Full recap video, teaser clips, and raw footage if requested.</li>
    </ul>
   
  </div>
)}
{selectedService.title === "Cinematic Videography" && (
  <div className="drone-details mt-3">
    <ul>
      <li><i className="bi bi-film"></i><strong> Storytelling:</strong> Narrative-driven edits with emotion, buildup, and impact.</li>
      <li><i className="bi bi-camera2"></i><strong> Premium Gear:</strong> Cinema lenses, gimbals, and professional lighting setups.</li>
      <li><i className="bi bi-boombox-fill"></i><strong> Audio Design:</strong> Crystal-clear sound with ambient and music mixing.</li>
      <li><i className="bi bi-camera-video"></i><strong> Multi-Cam Coverage:</strong> Multiple angles captured for dynamic edits.</li>
      <li><i className="bi bi-file-play"></i><strong> Deliverables:</strong> 3–7 min highlight, full feature, social clips, and raw footage.</li>
    </ul>
    
  </div>
)}

{selectedService.title === "Candid Photography" && (
  <div className="drone-details mt-3">
    <ul>
      <li><i className="bi bi-camera-reels-fill"></i><strong> Freeze Real Moments:</strong> Unscripted smiles, tears, and laughter.</li>
      <li><i className="bi bi-person-lines-fill"></i><strong> Photojournalistic Style:</strong> We blend into the background to capture life as it unfolds.</li>
      <li><i className="bi bi-fast-forward-circle-fill"></i><strong> Continuous Shooting:</strong> Rapid bursts ensure we never miss a fleeting expression.</li>
      <li><i className="bi bi-sunrise-fill"></i><strong> Natural Light Emphasis:</strong> We prioritize available light for authentic, relaxed images.</li>
      <li><i className="bi bi-image-fill"></i><strong> Gallery Delivery:</strong> Curated online gallery with 50–200 fully edited, print-ready images. Slideshows and albums available.</li>
    </ul>
    
  </div>
)}
{selectedService.title === "Model Shoot" && (
  <div className="drone-details mt-3">
    <ul>
      <li><i className="bi bi-person-fill-up"></i><strong> Professional Posing:</strong> Expert guidance for confident and dynamic model poses.</li>
      <li><i className="bi bi-camera-fill"></i><strong> Studio & Outdoor Options:</strong> Choose between controlled lighting or natural scenic backdrops.</li>
      <li><i className="bi bi-palette-fill"></i><strong> Styling & Makeup Support:</strong> Coordinated looks with optional stylist and MUA recommendations.</li>
      <li><i className="bi bi-images"></i><strong> Portfolio Development:</strong> High-quality edits tailored to build or enhance your modeling portfolio.</li>
      <li><i className="bi bi-cloud-arrow-down-fill"></i><strong> Digital Delivery:</strong> Receive a curated set of high-resolution, retouched images.</li>
    </ul>
    
  </div>
)}

{selectedService.title === "Baby Shoot" && (
  <div className="drone-details mt-3">
    <ul>
      <li><i className="bi bi-balloon-heart-fill me-2 text-pink"></i><strong>Baby Shower:</strong> Celebrate the joy of new beginnings with beautiful, themed baby shower coverage.</li>
      <li><i className="bi bi-bandaid-fill me-2 text-info"></i><strong>Cradle Ceremony:</strong> Graceful and culturally rich photographs capturing your baby's naming or cradle event.</li>
      <li><i className="bi bi-camera-reels-fill me-2 text-warning"></i><strong>Pre-Birthday Shoot:</strong> Adorable setups and playful moments leading up to your baby's big birthday celebration.</li>
      <li><i className="bi bi-cake2-fill me-2 text-danger"></i><strong>Birthday Party:</strong> Candid and joyful birthday memories — from cake cutting to fun-filled games and guests.</li>
    </ul>

    <div className="baby-services mt-4">
      <h5 className="text-center mb-3">Baby Photography Coverage Includes:</h5>
      <div className="row">

        {/* Maternity Shoots */}
        <div className="col-md-6 mb-3">
          <div className="card h-100 shadow-sm border-0 wedding-card">
            <div className="card-body text-center">
              <i className="bi bi-person-heart fs-3 text-warning"></i>
              <h6 className="card-title mt-2">Maternity Shoots</h6>
              <p className="card-tex">Elegant and intimate captures of the beautiful journey to motherhood.</p>
            </div>
          </div>
        </div>

        {/* Newborn Photography */}
        <div className="col-md-6 mb-3">
          <div className="card h-100 shadow-sm border-0 wedding-card">
            <div className="card-body text-center">
              <i className="bi bi-emoji-smile fs-3 text-success"></i>
              <h6 className="card-title mt-2">Newborn Photography</h6>
              <p className="card-tex">Tender moments with soft lighting and cozy setups for your newborn.</p>
            </div>
          </div>
        </div>

        {/* Pre-Birthday Shoots */}
        <div className="col-md-6 mb-3">
          <div className="card h-100 shadow-sm border-0 wedding-card">
            <div className="card-body text-center">
              <i className="bi bi-gift-fill fs-3 text-pink"></i>
              <h6 className="card-title mt-2">Pre-Birthday Shoots</h6>
              <p className="card-tex">Playful setups with balloons, props, and smiles before the big day.</p>
            </div>
          </div>
        </div>

        {/* First Birthday Shoots */}
        <div className="col-md-6 mb-3">
          <div className="card h-100 shadow-sm border-0 wedding-card">
            <div className="card-body text-center">
              <i className="bi bi-cake2-fill fs-3 text-danger"></i>
              <h6 className="card-title mt-2">First Birthday Shoots</h6>
              <p className="card-tex">Joyful coverage of your baby’s first big celebration — cake smashes & giggles!</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
)}
{selectedService.title === "Pre-Wedding & Pre Shoots" && (
  <div className="drone-details mt-3">
    <ul>
      <li><i className="bi bi-heart-fill me-2 text-danger"></i><strong> Romantic Themes:</strong> Capture your love story before the big day with cinematic flair and chemistry.</li>
      <li><i className="bi bi-camera-fill me-2 text-primary"></i><strong> Professional Styling:</strong> From outfits to poses, we help you prepare for timeless couple portraits.</li>
      <li><i className="bi bi-flower2 me-2 text-success"></i><strong> Props & Creativity:</strong> Includes creative setups, backdrops, and storytelling concepts.</li>
      <li><i className="bi bi-calendar-heart me-2 text-warning"></i><strong> Perfect Keepsake:</strong> Ideal content for wedding invites, social media, or pre-wedding trailers.</li>
    </ul>

    <div className="wedding-services mt-4">
      <h5 className="text-center mb-3">Pre-Wedding Shoots Include:</h5>
      <div className="row">

        {/* Indoor Locations */}
        <div className="col-md-6 mb-3">
          <div className="card h-100 shadow-sm border-0 wedding-card">
            <div className="card-body text-center">
              <i className="bi bi-house-fill fs-3 text-pink"></i>
              <h6 className="card-title mt-2">Indoor Locations</h6>
              <p className="card-tex">Elegant indoor studio setups with controlled lighting and cinematic staging.</p>
            </div>
          </div>
        </div>

        {/* Outdoor Locations */}
        <div className="col-md-6 mb-3">
          <div className="card h-100 shadow-sm border-0 wedding-card">
            <div className="card-body text-center">
              <i className="bi bi-sunrise-fill fs-3 text-orange"></i>
              <h6 className="card-title mt-2">Outdoor Locations</h6>
              <p className="card-tex">Nature, urban streets, gardens, or scenic lakes — we shoot wherever your love shines.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
)}

{selectedService.title === "Fashion Photography" && (
  <div className="drone-details mt-3">
    <ul>
      <li><i className="bi bi-lightbulb-fill me-2 text-warning"></i><strong>Styled Concepts:</strong> High-fashion shoots with unique styling, themes, and poses.</li>
      <li><i className="bi bi-person-bounding-box me-2 text-info"></i><strong>Portfolio Building:</strong> Ideal for models, influencers, and designers to enhance their personal brand.</li>
      <li><i className="bi bi-camera2 me-2 text-danger"></i><strong>Professional Studio & Outdoor:</strong> Shoots in controlled lighting as well as dynamic outdoor environments.</li>
      <li><i className="bi bi-magic me-2 text-success"></i><strong>Artistic Direction:</strong> Carefully crafted poses, backgrounds, and expressions for a cinematic touch.</li>
    </ul>

    <div className="fashion-services mt-4">
      <h5 className="text-center mb-3">Fashion Photography Services Include:</h5>
      <div className="row">

        {/* Lifestyle */}
        <div className="col-md-6 mb-3">
          <div className="card h-100 shadow-sm border-0 wedding-card">
            <div className="card-body text-center">
              <i className="bi bi-house-heart fs-3 text-pink"></i>
              <h6 className="card-title mt-2">Lifestyle</h6>
              <p className="card-tex">Natural and candid moments showcasing your everyday vibe with aesthetic appeal.</p>
            </div>
          </div>
        </div>

        {/* Fitness */}
        <div className="col-md-6 mb-3">
          <div className="card h-100 shadow-sm border-0 wedding-card">
            <div className="card-body text-center">
              <i className="bi bi-heart-pulse-fill fs-3 text-danger"></i>
              <h6 className="card-title mt-2">Fitness</h6>
              <p className="card-tex">Dynamic and powerful visuals capturing your strength, form, and energy.</p>
            </div>
          </div>
        </div>

        {/* Physique */}
        <div className="col-md-6 mb-3">
          <div className="card h-100 shadow-sm border-0 wedding-card">
            <div className="card-body text-center">
              <i className="bi bi-person-fill-up fs-3 text-success"></i>
              <h6 className="card-title mt-2">Physique</h6>
              <p className="card-tex">Sculpted lighting to highlight body structure and muscular definition.</p>
            </div>
          </div>
        </div>

        {/* Character & Costume */}
        <div className="col-md-6 mb-3">
          <div className="card h-100 shadow-sm border-0 wedding-card">
            <div className="card-body text-center">
              <i className="bi bi-person-lines-fill fs-3 text-info"></i>
              <h6 className="card-title mt-2">Character & Costume</h6>
              <p className="card-tex">Creative portraits with theme-based attire, makeup, and props to reflect unique identities.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
)}


{selectedService.title === "Regular Photography" && (
  <div className="drone-details mt-3">
    <ul>
      <li><i className="bi bi-person-fill"></i><strong> Classic Portraits:</strong> Timeless solo and group portraits with polish and poise.</li>
      <li><i className="bi bi-people-fill"></i><strong> Posed & Group Shots:</strong> We guide you through flattering angles and compose each frame for maximum impact.</li>
      <li><i className="bi bi-palette-fill"></i><strong> Consistent Style:</strong> Uniform color tones and editing for a cohesive gallery.</li>
      <li><i className="bi bi-lightbulb-fill"></i><strong> Studio & On-Location:</strong> Choose between professional lighting setups or natural environmental backdrops.</li>
      <li><i className="bi bi-images"></i><strong> Deliverables:</strong> 30–100 beautifully edited images, ready for print or sharing.</li>
    </ul>
    
  </div>
)}
{selectedService.title === "Core Photography Services" && (
  <div className="drone-details mt-3">
    <div className="row">
      <div className="col-md-6 mb-3">
        <img src="https://images.pexels.com/photos/5091121/pexels-photo-5091121.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Portrait" className="img-fluid sample-photo" />
        <p><strong><i className="bi bi-person-bounding-box"></i> Portrait Photography:</strong> Individual, family, maternity, newborn, and pet portraits.</p>
      </div>
      <div className="col-md-6 mb-3">
        <img src="https://images.pexels.com/photos/265987/pexels-photo-265987.jpeg" alt="Event" className="img-fluid sample-photo" />
        <p><strong><i className="bi bi-calendar-event-fill"></i> Event Photography:</strong> Weddings, birthdays, anniversaries, and corporate events.</p>
      </div>
      <div className="col-md-6 mb-3">
        <img src="https://images.pexels.com/photos/1331311/pexels-photo-1331311.jpeg" alt="Commercial" className="img-fluid sample-photo" />
        <p><strong><i className="bi bi-box-seam"></i> Commercial Photography:</strong> Product, food, and lifestyle photography tailored for businesses.</p>
      </div>
      <div className="col-md-6 mb-3">
        <img src="https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg" alt="Real Estate" className="img-fluid sample-photo" />
        <p><strong><i className="bi bi-house-fill"></i> Real Estate Photography:</strong> Professional interior and exterior property photos.</p>
      </div>
      <div className="col-md-6 mb-3">
        <img src="https://images.pexels.com/photos/3812735/pexels-photo-3812735.jpeg" alt="Fashion" className="img-fluid sample-photo" />
        <p><strong><i className="bi bi-person-video2"></i> Fashion Photography:</strong> Editorial shoots, lookbooks, and portfolios for models and designers.</p>
      </div>
      <div className="col-md-6 mb-3">
        <img src="https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg" alt="Fine Art" className="img-fluid sample-photo" />
        <p><strong><i className="bi bi-brush"></i> Fine Art Photography:</strong> Artistic imagery suitable for galleries and collectors.</p>
      </div>
     
      <div className="col-md-6 mb-3">
        <img src="https://images.pexels.com/photos/5025109/pexels-photo-5025109.jpeg" alt="Drone" className="img-fluid sample-photo" />
        <p><strong><i className="bi bi-airplane-engines"></i> Drone/Aerial Photography:</strong> Overhead shots ideal for landscapes, real estate, and events.</p>
      </div>
      <div className="col-md-6 mb-3">
        <img src="https://images.pexels.com/photos/7156880/pexels-photo-7156880.jpeg" alt="360 Product" className="img-fluid sample-photo" />
        <p><strong><i className="bi bi-arrow-repeat"></i> 360° Product Photography:</strong> Interactive product visuals with full rotational views.</p>
      </div>
    </div>
    
  </div>
)}
{selectedService.title === "Wedding Photography" && (
  <div className="drone-details mt-3">
    <ul>
      <li><i className="bi bi-heart-fill me-2 text-danger"></i><strong>Timeless Moments:</strong> Capturing rituals, emotions, and every heartfelt glance.</li>
      <li><i className="bi bi-camera-fill me-2 text-primary"></i><strong>Multiple Angles:</strong> Covered by a team of photographers for complete event coverage.</li>
      <li><i className="bi bi-film me-2 text-warning"></i><strong>Cinematic Style:</strong> A mix of traditional and cinematic captures for a grand storytelling approach.</li>
      <li><i className="bi bi-people-fill me-2 text-success"></i><strong>Group Shots & Candids:</strong> From family portraits to candid guest moments.</li>
      <li><i className="bi bi-collection-play-fill me-2 text-info"></i><strong>Complete Package:</strong> Full-day coverage, highlight videos, edited albums, and online gallery delivery.</li>
    </ul>

    <div className="wedding-services mt-4">
      <h5 className="text-center mb-3">Wedding Coverage Includes:</h5>
      <div className="row">
        {/* Cinematic Videography */}
        <div className="col-md-6 mb-3">
          <div className="card h-100 shadow-sm border-0 wedding-card">
            <div className="card-body text-center">
              <i className="bi bi-film fs-3 text-danger"></i>
              <h6 className="card-title mt-2">Cinematic Videography</h6>
              <p className="card-tex">Stylized film editing with music, transitions, and storytelling flair.</p>
            </div>
          </div>
        </div>

        {/* Candid Photography + Drone */}
        <div className="col-md-6 mb-3">
          <div className="card h-100 shadow-sm border-0 wedding-card">
            <div className="card-body text-center">
              <i className="bi bi-camera-reels-fill fs-3 text-primary"></i>
              <h6 className="card-title mt-2">Candid Photography + Drone</h6>
              <p className="card-tex">Spontaneous shots with aerial views to capture real emotions.</p>
            </div>
          </div>
        </div>

        {/* Regular Photography */}
        <div className="col-md-6 mb-3">
          <div className="card h-100 shadow-sm border-0 wedding-card">
            <div className="card-body text-center">
              <i className="bi bi-camera-fill fs-3 text-success"></i>
              <h6 className="card-title mt-2">Regular Photography</h6>
              <p className="card-tex">Classic posed photos for all key moments and ceremonies.</p>
            </div>
          </div>
        </div>

        {/* Regular Videography */}
        <div className="col-md-6 mb-3">
          <div className="card h-100 shadow-sm border-0 wedding-card">
            <div className="card-body text-center">
              <i className="bi bi-play-btn-fill fs-3 text-warning"></i>
              <h6 className="card-title mt-2">Regular Videography</h6>
              <p className="card-tex">Traditional video coverage from start to end with live audio.</p>
            </div>
          </div>
        </div>

        {/* Drone Videography */}
        <div className="col-md-6 mb-3 mx-auto">
          <div className="card h-100 shadow-sm border-0 wedding-card">
            <div className="card-body text-center">
              <i className="bi bi-drone fs-3 text-info"></i>
              <h6 className="card-title mt-2">Drone Videography</h6>
              <p className="card-tex">Stunning aerial shots of the venue, crowd, and couple entries.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}


              <h5 className="mt-4">Sample Photos</h5>
              <Row>
                {selectedService.samples.map((img, i) => (
                  <Col md={4} sm={6} xs={12} key={i} className="mb-3">
                    <Image src={img} alt={`Sample ${i + 1}`} fluid className="sample-photo" />
                  </Col>
                ))}
              </Row>
            </Modal.Body>
            <Modal.Footer>
              
              <div className="d-flex justify-content-center gap-3 mt-4">
  <Link to="/contact" className="btn btn-success">
    Book Now
  </Link>
  <Button variant="secondary" onClick={handleCloseModal}>
    Close
  </Button>
</div>

            </Modal.Footer>
          </Modal>
        )}
      </Container>
    </div>
  );
};

export default Services;
