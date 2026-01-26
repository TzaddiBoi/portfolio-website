import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
//import { logFormSubmit } from '../utils/analytics';
import SEO from '../components/SEO';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
  setIsSubmitting(true);
  setSubmitStatus(null);

  try {
    // Web3Forms submission
    const formData = {
    access_key: import.meta.env.VITE_WEB3FORMS_KEY,
    name: data.name,
    email: data.email,
    service: data.service || 'Not specified',
    message: data.message,
    subject: `New Contact Form Submission from ${data.name}`,
    };

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      console.log('Form submitted successfully:', result);
      setSubmitStatus('success');
      reset(); // Clear form
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    setSubmitStatus('error');
    
    // Clear error message after 5 seconds
    setTimeout(() => {
      setSubmitStatus(null);
    }, 5000);
  } finally {
    setIsSubmitting(false);
  }
};

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'tzaddifatalla@gmail.com',
      link: 'mailto:tzaddifatalla@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+63 915 727 9003',
      link: 'tel:+639157279003',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Oriental Mindoro, Philippines, 5200',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/TzaddiBoi',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:tzaddifatalla@gmail.com',
    },
  ];

  return (
    <div className="min-h-screen bg-darkest-bg">
       {/* ✅ Add SEO component */}
      <SEO 
        title="Contact"
        description="Get in touch to discuss your project. Available for IoT solutions, application development, prototyping, and technical consulting. Response within 24 hours."
        keywords="contact engineer, hire developer, project inquiry, technical consultation, freelance engineer"
        url="https://engrtjaetzad.online/contact"
      />
      

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-darkest-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-bright-teal text-sm font-bold uppercase tracking-widest mb-4 block">
              Contact
            </span>
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-4 font-poppins">
              LET'S <span className="text-bright-teal">CONNECT</span>
            </h1>
            <div className="w-24 h-1 bg-bright-teal mx-auto mb-6"></div>
            <p className="text-light-gray text-lg max-w-2xl mx-auto">
              Ready to collaborate? Let's discuss your project and bring your ideas to life!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 bg-darkest-bg">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-darker-bg p-8 rounded-2xl border border-dark-gray">
              <h2 className="text-3xl font-bold text-white mb-6 font-poppins">Send a Message</h2>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-bright-teal/10 border border-bright-teal rounded-lg flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bright-teal mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-bright-teal font-semibold mb-1">Message Sent!</div>
                    <div className="text-light-gray text-sm">
                      Thank you for reaching out. I'll get back to you soon!
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500 rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-red-500 font-semibold mb-1">Oops! Something went wrong</div>
                    <div className="text-light-gray text-sm">
                      Please try again or email me directly.
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-light-gray mb-2 font-medium">
                    Name <span className="text-bright-teal">*</span>
                  </label>
                  <input
                    type="text"
                    {...register('name', {
                      required: 'Name is required',
                      minLength: {
                        value: 2,
                        message: 'Name must be at least 2 characters',
                      },
                    })}
                    className={`w-full px-6 py-4 bg-darkest-bg border rounded-xl text-white placeholder-medium-gray focus:outline-none transition-all duration-300 ${
                      errors.name
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-dark-gray focus:border-bright-teal'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-light-gray mb-2 font-medium">
                    Email <span className="text-bright-teal">*</span>
                  </label>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className={`w-full px-6 py-4 bg-darkest-bg border rounded-xl text-white placeholder-medium-gray focus:outline-none transition-all duration-300 ${
                      errors.email
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-dark-gray focus:border-bright-teal'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-light-gray mb-2 font-medium">
                    Service Interested In
                  </label>
                  <select
                    {...register('service')}
                    className="w-full px-6 py-4 bg-darkest-bg border border-dark-gray rounded-xl text-white focus:border-bright-teal focus:outline-none transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="iot">IoT Solutions</option>
                    <option value="app-dev">Application Development</option>
                    <option value="prototyping">Prototyping & Testing</option>
                    <option value="consulting">Technical Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-light-gray mb-2 font-medium">
                    Message <span className="text-bright-teal">*</span>
                  </label>
                  <textarea
                    rows="5"
                    {...register('message', {
                      required: 'Message is required',
                      minLength: {
                        value: 10,
                        message: 'Message must be at least 10 characters',
                      },
                    })}
                    className={`w-full px-6 py-4 bg-darkest-bg border rounded-xl text-white placeholder-medium-gray focus:outline-none transition-all duration-300 resize-none ${
                      errors.message
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-dark-gray focus:border-bright-teal'
                    }`}
                    placeholder="Tell me about your project..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 bg-gradient-to-r from-deep-teal to-bright-teal text-white rounded-xl font-bold transition-all duration-500 flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? 'opacity-70 cursor-not-allowed'
                      : 'hover:shadow-2xl hover:shadow-bright-teal/50'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>SEND MESSAGE</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Contact Information */}
              <div className="bg-darker-bg p-8 rounded-2xl border border-dark-gray">
                <h3 className="text-2xl font-bold text-white mb-6 font-poppins">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-deep-teal to-bright-teal rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-medium-gray text-sm mb-1">{info.label}</div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-white font-semibold hover:text-bright-teal transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-white font-semibold">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-darker-bg p-8 rounded-2xl border border-dark-gray">
                <h3 className="text-2xl font-bold text-white mb-6 font-poppins">
                  Connect With Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-darkest-bg border border-dark-gray rounded-xl flex items-center justify-center text-bright-teal hover:bg-bright-teal hover:text-white hover:border-bright-teal transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-br from-deep-teal to-bright-teal p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-3 font-poppins">Response Time</h3>
                <p className="text-white/90 leading-relaxed">
                  I typically respond within 24 hours on weekdays. For urgent inquiries, feel free
                  to call or message directly.
                </p>
              </div>

              {/* Availability */}
              <div className="bg-darker-bg p-8 rounded-2xl border border-dark-gray">
                <h3 className="text-xl font-bold text-white mb-4 font-poppins">Availability</h3>
                <div className="space-y-3 text-light-gray">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-bright-teal font-semibold">9 AM - 6 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-bright-teal font-semibold">10 AM - 2 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-medium-gray">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-darker-bg">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <h2 className="text-4xl font-bold text-white mb-12 text-center font-poppins">
            Frequently Asked <span className="text-bright-teal">Questions</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'What types of projects do you work on?',
                a: 'I specialize in IoT solutions, application development (web and mobile), prototyping, and technical consulting. I work with startups, small businesses, and academic institutions.',
              },
              {
                q: 'What is your typical project timeline?',
                a: 'Project timelines vary based on complexity. Simple projects take 2-4 weeks, while complex applications can take 2-3 months. I provide detailed timelines during initial consultation.',
              },
              {
                q: 'Do you offer ongoing support?',
                a: 'Yes! I provide post-launch support and maintenance packages. We can discuss your specific needs during our initial conversation.',
              },
              {
                q: 'What is your pricing structure?',
                a: 'Pricing depends on project scope, complexity, and timeline. I offer flexible pricing models including fixed-price projects and hourly rates. Contact me for a detailed quote.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-darkest-bg p-6 rounded-xl border border-dark-gray hover:border-bright-teal transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-3 font-poppins">{faq.q}</h3>
                <p className="text-light-gray leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-deep-teal via-bright-teal to-deep-teal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          ></div>
        </div>
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-6 font-poppins">
            Prefer to Email Directly?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Feel free to reach out at{' '}
            <a href="mailto:tzaddifatalla@gmail.com" className="font-bold underline">
              tzaddifatalla@gmail.com
            </a>
          </p>
        </div>
      </section>

     
    </div>
  );
};

export default Contact;