import { useState } from 'react';

export default function InquiryForm({ variant = 'shopify' }) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Fire Meta Pixel Lead event
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: variant,
        content_category: 'inquiry_form',
      });
    }

    // Simulate form submission (in production, this would send to an API)
    await new Promise(resolve => setTimeout(resolve, 500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', budget: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <div className="inquiry-form-container tc">
        <div className="success-message f4 fw6 pv4">
          ✓ Thanks! We'll be in touch soon.
        </div>
      </div>
    );
  }

  return (
    <div className="inquiry-form-container">
      <form onSubmit={handleSubmit} className="inquiry-form">
        <div className="form-row mb3">
          <label htmlFor="name" className="db f5 fw6 mb2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            className="form-input w-100 pa3 f5"
          />
        </div>

        <div className="form-row mb3">
          <label htmlFor="email" className="db f5 fw6 mb2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
            className="form-input w-100 pa3 f5"
          />
        </div>

        <div className="form-row mb3">
          <label htmlFor="budget" className="db f5 fw6 mb2">Estimated Budget</label>
          <select
            id="budget"
            name="budget"
            value={formState.budget}
            onChange={handleChange}
            required
            className="form-input w-100 pa3 f5">
            <option value="">Select a range</option>
            <option value="under-5k">Under $5,000</option>
            <option value="5k-10k">$5,000 – $10,000</option>
            <option value="10k-15k">$10,000 – $15,000</option>
            <option value="over-15k">$15,000+</option>
          </select>
        </div>

        <div className="form-row mb3">
          <label htmlFor="message" className="db f5 fw6 mb2">Tell us about your project</label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
            rows="4"
            className="form-input w-100 pa3 f5"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="form-submit-button f5 f4-ns fw6 pv3 ph4 w-100">
          {isSubmitting ? 'Sending...' : 'Send inquiry'}
        </button>
      </form>

      <style jsx>{`
        .inquiry-form-container {
          max-width: 600px;
          margin: 0 auto;
        }
        .form-input {
          border: 1px solid #20215b;
          background-color: white;
          font-family: inherit;
        }
        .form-input:focus {
          outline: none;
          border-color: #20215b;
          box-shadow: 0 0 0 2px rgba(32, 33, 91, 0.1);
        }
        .form-submit-button {
          background-color: white;
          border: 2px solid #20215b;
          color: #20215b;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .form-submit-button:hover:not(:disabled) {
          background-color: #20215b;
          color: white;
        }
        .form-submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .success-message {
          color: #20215b;
        }
      `}</style>
    </div>
  );
}
