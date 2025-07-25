import { useState } from "react";
import { Mail, Phone, Calendar, Send, X, CheckCircle, AlertCircle } from "lucide-react";
import { SiInstagram, SiLinkedin, SiFacebook, SiTiktok } from "react-icons/si";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'success' | 'error';
  message: string;
}

function Modal({ isOpen, onClose, type, message }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            {type === 'success' ? (
              <CheckCircle className="w-8 h-8 text-green-500" />
            ) : (
              <AlertCircle className="w-8 h-8 text-red-500" />
            )}
            <h3 className="text-xl font-semibold text-primary">
              {type === 'success' ? 'Message Sent!' : 'Error Occurred'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {message}
        </p>
        
        <button
          onClick={onClose}
          className="w-full bg-primary text-white py-3 rounded-xl hover:bg-primary/90 transition duration-300 font-semibold"
        >
          {type === 'success' ? 'Great!' : 'Try Again'}
        </button>
      </div>
    </div>
  );
}

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'success' | 'error';
    message: string;
  }>({
    isOpen: false,
    type: 'success',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      
      // Submit to Netlify
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setModalState({
          isOpen: true,
          type: 'success',
          message: 'Thank you for your message! I\'ll get back to you within 2 business days. I\'m excited to help you transform your social media strategy!'
        });
        // Reset the form
        e.currentTarget.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setModalState({
        isOpen: true,
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or contact me directly at lundberg.emilie@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
            Let's Start Your Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to see real results from your social media efforts? Get in touch to discuss your custom strategy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-primary mb-4">Get in Touch</h3>
              <p className="text-gray-600 leading-relaxed">
                I'd love to learn about your business and discuss how strategic social media marketing can help you achieve your goals.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Mail className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-primary">Email</div>
                  <div className="text-gray-600">lundberg.emilie@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Phone className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-primary">Phone</div>
                  <div className="text-gray-600">+1 (440) 371-7091</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Calendar className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-primary">Response Time</div>
                  <div className="text-gray-600">Within 2 business days</div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-semibold text-primary mb-4">Follow My Journey</h4>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/emiliessocialstrategy/" target="_blank" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition duration-300">
                  <SiInstagram className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/emilie-lundberg-52054b3a" target="_blank" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition duration-300">
                  <SiLinkedin className="w-5 h-5"  />
                </a>
                {/* <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition duration-300">
                  <SiFacebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition duration-300">
                  <SiTiktok className="w-5 h-5" />
                </a> */}
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Netlify form detection */}
              <input type="hidden" name="form-name" value="contact" />
              
              {/* Honeypot field to prevent spam */}
              <div className="hidden">
                <input name="bot-field" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    placeholder="Your first name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    placeholder="Your last name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition duration-200"
                />
              </div>

              <div>
                <label htmlFor="businessName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  placeholder="Your business name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition duration-200"
                />
              </div>

              <div>
                <label htmlFor="services" className="block text-sm font-semibold text-gray-700 mb-2">
                  Services Interested In
                </label>
                <select
                  id="services"
                  name="services"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition duration-200"
                >
                  <option value="">Select services you're interested in</option>
                  <option value="instagram">Instagram Marketing</option>
                  <option value="facebook">Facebook Marketing</option>
                  <option value="tiktok">TikTok Strategy</option>
                  <option value="pinterest">Pinterest Marketing</option>
                  <option value="email">Email Marketing</option>
                  <option value="facebook-groups">Facebook Groups</option>
                  <option value="full-package">Full Social Media Package</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Tell Me About Your Goals
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Share your current challenges and what you'd like to achieve with social media marketing..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-4 rounded-xl hover:bg-primary/90 transition duration-300 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="inline w-5 h-5 mr-2" />
                {isSubmitting ? "Sending..." : "Send My Message"}
              </button>

              <p className="text-sm text-gray-600 text-center">
                By submitting this form, you agree to receive marketing emails. You can unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        type={modalState.type}
        message={modalState.message}
      />
    </section>
  );
}
