import React from 'react';
import classes from './ContactForm.module.css'

const ContactForm = props => {
    return(
        <div className= {classes['main-heading-wrapper']}>
           <h3 className="fw-bold mb-0 pb-3"><span>Email now</span> for free legal advice</h3>
            <div class="row">
            <div class="col-lg-12">
            <div class="form-group">
            <span class="form-control-wrap your-name">
            <input type="text" name="your-name" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" id="name" aria-required="true" aria-invalid="false" placeholder="Name" /></span>
            </div>
            </div>
            </div>
        </div>
    )
}
export default ContactForm;