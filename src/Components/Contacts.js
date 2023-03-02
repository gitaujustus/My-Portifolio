import { useEffect } from 'react';

const Contacts = () => {
  
  return (
    <div id='contacts' className='mx-auto px-6 sm:px-10 md:px-20 about'>
      <h1 className='text-2xl text-yellow-500 underline text-white text-center'>
        Contact Me
      </h1>
      <div className='text-white'>
        <p>
          <span className='text-yellow-500'>Phone Number:</span> +254729144533
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
  



    </div>
  );
};

export default Contacts;
