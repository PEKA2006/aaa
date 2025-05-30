import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';

const SERVICES = [
  'Wedding Photography',
  'Pre-Wedding Shoots',
  'Baby Shoot',
  'Model Shoots',
  'Product Shoots',
  'Cinematic Photography',
  'Candid Photography',
  'Drone Videography',
  'Podcast Coverage',
  'Interview Coverage',
  'Regular Videography',
  'Regular Photography',
  'Video Editing',
  'Photo Editing',
  'Album Design',
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    address: '',
    mobileAddress: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email with EmailJS
    emailjs.send(
      'service_d8j536u',        // Replace with your EmailJS service ID
      'template_ngksoad',       // Replace with your EmailJS template ID
      formData,
      'hC7aNkNcUGSxn6mkQ'       // Replace with your EmailJS user/public key
    ).then((result) => {
      console.log(result.text);
      alert("Your message has been submitted via email!");
    }, (error) => {
      console.error(error.text);
      alert("Email sending failed. Please try again later.");
    });

    // Create Advanced WhatsApp Message
    const whatsappMessage = `
*New Service Inquiry*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}

*Selected Service:* ${formData.service}

*Address:* 
${formData.address}
 
*Mobile Location:* 
${formData.mobileAddress}

*Requested on:* ${new Date().toLocaleString()}
    `;

    const whatsappURL = `https://wa.me/919398828072?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-wrapper">
        <form onSubmit={handleSubmit} className="contact-form">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            required
            onChange={handleChange}
            placeholder="Enter your full name"
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            required
            onChange={handleChange}
            placeholder="Enter your phone number"
          />

          <label>Email ID</label>
          <input
            type="email"
            name="email"
            required
            onChange={handleChange}
            placeholder="Enter your email"
          />

          <label>Type of Service</label>
          <select name="service" required onChange={handleChange}>
            <option value="">-- Select a service --</option>
            {SERVICES.map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </select>

          <label>Address</label>
          <textarea
            name="address"
            rows="3"
            required
            onChange={handleChange}
            placeholder="Enter your full address"
          ></textarea>

          <label>Mobile Address (Location)</label>
          <textarea
            name="mobileAddress"
            rows="2"
            required
            onChange={handleChange}
            placeholder="Nearby landmark or mobile pickup location"
          ></textarea>

          <button type="submit">Submit</button>
        </form>

        <div className="contact-details">
          <h3>Get in Touch</h3>
          <p><strong>Phone: </strong> +91-81433 30111</p>
          <p><strong>Phone: </strong> +91-97034 50304</p>
          <p><strong>Email: </strong> 
 ontargetportraits@gmail.com</p>
          <p><strong>Address:- </strong> OTP Studios, Plot No 201, Bramanapalli, Manneguda, Ranga       Reddy, Telangana, 501510</p>

          <div className="social-icons" style={{ fontSize: '1.5rem' }}>
            <a href="https://www.instagram.com/p/DJ2BkTFS_Eo/?igsh=MW43eXRvaW05NHM1bA==" target="_blank" rel="noopener noreferrer" style={{ marginRight: '15px' }}>
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://facebook.com/otpstudios" target="_blank" rel="noopener noreferrer" style={{ marginRight: '15px' }}>
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://youtube.com/otpstudios" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-youtube"></i>
            </a>
          </div>
          <iframe
            title="OTP Studios Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.263407365053!2d78.3762294141883!3d17.4475749880389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e5b6ef0dfb%3A0x30c62f3a569ffcf5!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1651090644736!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0, marginTop: '20px' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
