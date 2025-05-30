import React from 'react';
import './Home.css';
import heroImage from '../assets/hero-banner.jpeg';
import aboutImage from '../assets/aboutImage.jpeg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { QuoteIcon, CameraIcon, StarIcon, HeartIcon } from 'lucide-react';

const weddingImg = 'https://th.bing.com/th/id/OIP.cMem9iR69kY7cGrNUMUkmQHaE8?cb=iwc2&rs=1&pid=ImgDetMain';
const eventImg = 'https://images.pexels.com/photos/32222747/pexels-photo-32222747/free-photo-of-reflection-of-photographer-in-urban-taiwan-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
const droneImg = 'https://images.pexels.com/photos/2446713/pexels-photo-2446713.jpeg?auto=compress&cs=tinysrgb&w=600';
const candidImg = 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=600';
const editingImg = 'https://images.pexels.com/photos/439803/pexels-photo-439803.jpeg?auto=compress&cs=tinysrgb&w=600';
const preweddingImg = 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
const APP_NAME = 'OTP';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        style={{ backgroundImage: `url(${heroImage})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="overlay" 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5 }}
        >
          <h1 className="brand-name">
  {APP_NAME}
  <span className="subtitle d-block">ON TARGET PORTRAITS</span>
</h1>

          <h2 className="hero-text">Capture Moments, Create Memories</h2>
          <motion.div 
            className="hero-buttons" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.9 }}
          >
            <Link to="/portfolio" className="btn view-btn">View Portfolio</Link>
            <Link to="/contact" className="btn contact-btn">Get in Touch</Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <section className="about-section">
        <motion.div className="about-content" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <img src={aboutImage} alt="About OTP" className="about-img" />
          <div className="about-text">
            <h2>About {APP_NAME}</h2>
            <p>
              At OTP Studios, we specialize in turning your special moments into timeless memories. Whether it's a wedding,
              corporate event, or a personal photo session, our dedicated team brings creativity and passion to every project.
            </p>
          </div>
        </motion.div>
      </section>
{/* Our Services Section */}
<section className="services-section">
  <h2>Our Services</h2>
  <div className="services-grid">
    {[
      {
        image: weddingImg,
        title: "Wedding Photography",
        desc: "Capture your special day with elegance and emotion.",
      },
      {
        image: eventImg,
        title: "Event Coverage",
        desc: "From birthdays to corporate events, we’ve got it covered.",
      },
      {
        image: droneImg,
        title: "Drone Videography",
        desc: "Stunning aerial shots to elevate your story.",
      },
      {
        image: candidImg,
        title: "Candid Photography",
        desc: "Natural, unscripted moments that tell your real story.",
      },
      {
        image: editingImg,
        title: "Photo Editing",
        desc: "Professional retouching and editing to make every image shine.",
      },
      {
        image: preweddingImg,
        title: "Pre-Wedding Shoots",
        desc: "Celebrate love before the big day with beautiful portraits.",
      }
    ].map((service, index) => (
      <motion.div
        className="service-card"
        key={index}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.15 * index }}
      >
        <img src={service.image} alt={service.title} className="service-img" />
        <h3>{service.title}</h3>
        <p>{service.desc}</p>
      </motion.div>
    ))}
  </div>

  {/* View Our Services Button */}
  <div className="view-services-btn-container">
    <Link to="/services" className="view-services-btn">
      View Our Services
    </Link>
  </div>
</section>


      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <h2>Why Choose {APP_NAME} Studios?</h2>
        <div className="why-choose-grid">
          {[{
            icon: <CameraIcon className="icon" />,
            title: "Creative Vision",
            desc: "We bring a unique artistic perspective to every shot, ensuring your photos are not just pictures, but pieces of art.",
          }, {
            icon: <StarIcon className="icon" />,
            title: "Client-Focused Approach",
            desc: "Your story and satisfaction are our top priorities. We listen, adapt, and deliver a personalized experience.",
          }, {
            icon: <HeartIcon className="icon" />,
            title: "Customer Focused",
            desc: "We prioritize your vision and satisfaction above all else.",
          }].map((item, index) => (
            <motion.div
              className="why-card"
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index }}
            >
              <div className="icon-wrapper">{item.icon}</div>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section">
        <h2>Our Portfolio</h2>
        <div className="portfolio-grid">
          {[
            {
              image: "https://images.pexels.com/photos/3771832/pexels-photo-3771832.jpeg",
              title: "Wedding Moments",
            },
            {
              image: "https://images.unsplash.com/photo-1585507252242-11fe632c26e8?w=600&auto=format&fit=crop&q=60",
              title: "Candid Emotions",
            },
            {
              image: "https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg",
              title: "Event Highlights",
            },
            {
              image: "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg",
              title: "Aerial Views",
            },
            {
              image: "https://images.pexels.com/photos/1704120/pexels-photo-1704120.jpeg",
              title: "Studio Portraits",
            },
            {
              image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&auto=format&fit=crop&q=60",
              title: "Pre-Wedding Shoot",
            }
          ].map((item, index) => (
            <motion.div
              className="portfolio-card"
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index }}
            >
              <img src={item.image} alt={item.title} className="portfolio-img" />
              <h3>{item.title}</h3>
            </motion.div>
          ))}
        </div>
        <Link to="/portfolio" className="btn view-btn portfolio-btn">Explore Full Portfolio</Link>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>Kind Words From Our Clients</h2>
        <div className="testimonials-grid">
          {[{
            quote: "Amazing experience, highly professional!",
            name: "Swathi and Suhaas",
            service: "Wedding Photography"
          }, {
            quote: "Captured our corporate event perfectly.",
            name: "Michael Smith",
            service: "Corporate Event"
          }, {
            quote: "Highly recommend for any special occasion.",
            name: "Sarah Lee",
            service: "Personal Photoshoot"
          }].map((testimonial, index) => (
            <motion.div
              className="testimonial-card"
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 * index }}
            >
              <QuoteIcon className="quote-icon" />
              <blockquote>"{testimonial.quote}"</blockquote>
              <footer>
                <p className="client-name">{testimonial.name}</p>
                <p className="client-service">{testimonial.service}</p>
              </footer>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
