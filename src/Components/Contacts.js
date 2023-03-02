import { useEffect } from 'react';

const Contacts = () => {
  
  return (
    <div id='contacts' className='mx-auto px-6 sm:px-10 md:px-20 about'>
      <h1 className='text-2xl text-yellow-500 underline text-white text-center'>
        Contact Me
      </h1>
      <div className='text-white'>
        <p>
          <span className='text-yellow-500'>Phone Number:</span> 0729144533
        </p>
        <p>
          <span className='text-yellow-500'>Email:</span> jgathiru02@gmail.com
        </p>
      </div>
      {/* <iframe
  id="JotFormIFrame-230604065837556"
  title="Fancy Envelope Contact Form"
  onload="window.parent.scrollTo(0,0)"
  allowtransparency="true"
  allowfullscreen="true"
  allow="geolocation; microphone; camera"
  src="https://form.jotform.com/230604065837556"
  frameborder="0"
  style={{ minWidth: "100%", maxWidth: "100%", height: "80vh", border: "none", backgroundColor: "transparent" }}
  scrolling="no"
></iframe> */}
  <div className="footer-contact">
  <form action="https://formspree.io/your-email-address" method="POST">
    <h3>Contact Us</h3>
    <div className="form-group">
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        rows="3"
        required
      ></textarea>
    </div>
    <div className="form-flex">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
        />
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="_replyto">Your Email:</label>
      <input
        type="email"
        id="_replyto"
        name="_replyto"
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="_subject">Subject:</label>
      <input
        type="text"
        id="_subject"
        name="_subject"
        required
      />
    </div>
    <button type="submit">Send</button>
  </form>
</div>



    </div>
  );
};

export default Contacts;
