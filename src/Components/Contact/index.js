import React from 'react'
import {ContactSection, ContactTitle, Form, InputSub, Textarea, Span, InputBox, InputButton, InputEmail, InputText} from './style.js';
function Contact() {
  return (
    <ContactSection>
        <div className="container">
            <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
            <Form>
                <InputBox>
                    <InputText type="text" placeholder="Your Name" />
                    <InputEmail type="email" placeholder="Your Email" />
                </InputBox>
                <InputSub type="text" className="sub" placeholder="Your Subject" />
                <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                <InputButton type="submit" value="Send Message" />
            </Form>
        </div>
    </ContactSection>
  );
}

export default Contact;
