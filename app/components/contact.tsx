import React from 'react';
import { useForm } from 'react-hook-form';
import ContactForm from './contactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-medallion py-16">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-lg mb-6">
          Ready to transform your space? Contact us today for a consultation or
          to get a free quote.
        </p>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
