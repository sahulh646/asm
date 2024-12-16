import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

//template_lnljyo5 

    emailjs
      .sendForm('service_l7f26em', 'template_zl627d8', form.current, {
        publicKey: '72AHAJ0xu0GvWTxcy',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="d-flex justify-content-center">
          <img
            className="img-thumbnail rounded-full mt-3 mb-3" style={{maxWidth:250}}
            src="https://i.imghippo.com/files/LToY7175buw.jpg"
            alt="AppleSuperMarketLogo"
          />
        </div>
        <h3 className="text-light mx-auto text-center">APPLE SUPER MARKET</h3>
        <h6 className="text-light mx-auto text-center">KOVUR</h6>
        <hr
          className="text-danger m-5 border-5 mx-auto"
          style={{ width: 300 }}
        />
        <div className="d-grid gap-2 col-9 mx-auto">
          <h6 className="text-light text-center">Connect With Us:</h6>
          <button className="btn btn-outline-success"><a className='link-success text-decoration-none' href="https://wa.me/qr/5TMBCSDCSOT5J1">WhatsApp</a></button>
          <div className="btn btn-outline-danger" ><a className='link-danger text-decoration-none' href='https://www.instagram.com/applesupermarket_kovur?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>Instagram</a></div>
          <div className="btn btn-outline-primary"><a className='link-primary text-decoration-none' href='https://www.facebook.com/applesupermarketkovur'>Facebook</a></div>
          <div className="btn btn-outline-warning"><a className='link-warning text-decoration-none' href='https://g.page/r/CX2HHHHV9wMWEAI/review'>Google - Review</a></div>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div class="form-floating mt-5 mb-3">
            <textarea
              class="form-control"
              id="floatingTextarea"
            ></textarea>
            <label for="floatingTextarea">Write Your Feedback Here</label>
          </div>
          <div className='d-flex justify-content-center'>
            <button type="submit" class="btn btn-primary mb-5">
            Submit
          </button>
          <button type="reset" class="btn btn-primary ms-2 mb-5" >
            Clear
          </button></div>
        </form>
        <p className="text-light text-center text-opacity-50">
          CopyRights: Apple super Market - Kovur (2024)
        </p>
        <p className="text-light text-center text-opacity-50">
          Developed By @ SL Solutions
        </p>
        <p className="text-light text-center text-opacity-50">
          Email: sahulh646@gmail.com
        </p>
      </div>
    </>
  );
}

export default App;
