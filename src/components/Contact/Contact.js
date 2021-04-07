import './Contact.scss'


function Contact() {

    return (
        <div class="container">
            <div class="form-container">
                <h1 className="contact-title">Contact me</h1>
                <p className="contact-subhead">Have a cool role for me? Want to work on something together? Feel free to reach out!</p>
                <form id="contact-form" class="form" action="#" method="POST">
                    <div class="form-group">
                        <label class="form-label" for="name">Your Name</label>
                        <input type="text" class="form-control" id="name" name="name" placeholder="Your name" tabindex="1" required/>
                    </div>                            
                    <div class="form-group">
                        <label class="form-label" for="email">Your Email</label>
                        <input type="email" class="form-control" id="email" name="email" placeholder="Your Email" tabindex="2" required/>
                    </div>                            
                    <div class="form-group">
                        <label class="form-label" for="subject">Subject</label>
                        <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject" tabindex="3"/>
                    </div>                            
                    <div class="form-group">
                        <label class="form-label" for="message">Message</label>
                        <textarea rows="5" cols="50" name="message" class="form-control" id="message" placeholder="Message..." tabindex="4" required></textarea>                                 
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-start-order">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    );
  } 

export default Contact