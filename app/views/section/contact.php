<section class="contact" id="contact">
    <div class="container">
        <heading>
            <h3>Contact</h3>
        </heading>						
        <div class="row-fluid">
            <div class="col-50 sec_cont">
                <div class="col-100">
                    <h3 class="ident">Address and Contact</h3>
                    <ul class="contact-ul">
                        <li>Frederick Lopez</li>
                        <li>Phone: <?php echo CONTACT_NUMBER; ?></li>
                        <li>Email : <span class="email-contact" data-name="<?php echo CONTACT_EMAIL; ?>"></span></li>
                        <li>Location: <?php echo CONTACT_ADDRESS; ?></li>
                    </ul>
                </div>
                <div id="map" style="width:100%;height:300px"></div>
            </div>
            <div class="col-50">
                <div class="contact_form">
                    <form id="contact-form" action="#" method="post">
                        <h3>Quick Contact</h3>
                        <h4>Message with go direct to the admin,thank you !</h4>
                        <fieldset>
                            <input placeholder="Your name" type="text" tabindex="1" required>
                        </fieldset>
                        <fieldset>
                            <input placeholder="Your Email Address" type="email" tabindex="2" required>
                        </fieldset>
                        <fieldset>
                            <input placeholder="Your Phone Number" type="tel" tabindex="3" required>
                        </fieldset>
                        <fieldset>
                            <textarea placeholder="Type your Message Here...." tabindex="5" required></textarea>
                        </fieldset>
                        <fieldset>
                            <button name="submit" type="submit" id="contact-form-submit" data-submit="...Sending">Submit</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>