import React from 'react'
import './ChooseUs.css'
import { FaShieldAlt, FaCertificate, FaHeadset } from 'react-icons/fa'

const ChooseUs = () => {
  return (
    <section className="choose-us">
      <div className="choose-us__container">
        <div className="choose-us__header">
          <h2>Why Choose Us</h2>
          <p>Providing Solar Energy Solutions</p>
        </div>
        
        <div className="choose-us__cards">
          <div className="choose-us__card">
            <div className="card__icon">
              <FaShieldAlt />
            </div>
            <h3>Trust & Warranty</h3>
            <p>Our comprehensive warranties cover equipment, performance, and installation, providing long-term protection for your solar investment.</p>
          </div>

          <div className="choose-us__card">
            <div className="card__icon">
              <FaCertificate />
            </div>
            <h3>High Quality Work</h3>
            <p>Our certified professionals deliver exceptional craftsmanship using premium materials and innovative cutting-edge solar technology solutions.</p>
          </div>

          <div className="choose-us__card">
            <div className="card__icon">
              <FaHeadset />
            </div>
            <h3>24/7 Support</h3>
            <p>Our dedicated support team provides round-the-clock technical assistance and comprehensive maintenance services for optimal system performance.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChooseUs