import React from "react";
import "./ContactUs.css";
const ContactUs = () => {
  return (
    <section style={{ marginTop: "8%" }} id="contact">
      <div class="overlay ">
        <div class="container ">
          <h2>get in touch...</h2>
          <hr className="dashed-hr" />
          <div class="row">
            <div class="col-lg-9">
              <form role="form" method="POST">
                <div class="form-group">
                  <label for="nameTXT">Your Name</label>
                  <input type="text" id="nameTXT" name="nameTXT" />
                </div>

                <div class="form-group">
                  <label for="emailTXT">Email Address</label>
                  <input type="email" id="emailTXT" name="emailTXT" />
                </div>

                <div class="form-group">
                  <label for="messageTXT">Message</label>
                  <textarea
                    cols="36"
                    rows="8"
                    id="messageTXT"
                    name="messageTXT"
                  ></textarea>
                </div>

                <a class="frame-btn">
                  <span class="frame-btn__outline frame-btn__outline--tall">
                    <span class="frame-btn__line frame-btn__line--tall"></span>
                    <span class="frame-btn__line frame-btn__line--flat"></span>
                  </span>
                  <span class="frame-btn__outline frame-btn__outline--flat">
                    <span class="frame-btn__line frame-btn__line--tall"></span>
                    <span class="frame-btn__line frame-btn__line--flat"></span>
                  </span>
                  <span class="frame-btn__solid"></span>
                  <span class="frame-btn__text">Send</span>
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
