import { useState } from 'react';
import { trackCalendlyClick } from '../../utils/trackCalendlyClick';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    title: '',
    email: '',
    budgetMin: 10000,
    budgetMax: 25000,
    details: '',
    honeypot: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBudgetChange = (e, type) => {
    const value = parseInt(e.target.value);
    setFormData((prev) => {
      if (type === 'min') {
        return { ...prev, budgetMin: Math.min(value, prev.budgetMax) };
      } else {
        return { ...prev, budgetMax: Math.max(value, prev.budgetMin) };
      }
    });
  };

  const formatBudget = (value) => {
    if (value >= 50000) return '$50k+';
    return `$${value / 1000}k`;
  };

  const handleEmailClick = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Contact', {
        content_name: 'home_email_link',
        content_category: 'contact',
      });
    }
  };

  const handleCalendlyClick = () => {
    trackCalendlyClick('home', 'contact');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.honeypot) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thanks, I\'ll be in touch soon.' });
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          title: '',
          email: '',
          budgetMin: 10000,
          budgetMax: 25000,
          details: '',
          honeypot: '',
        });

        if (typeof window !== 'undefined' && window.fbq) {
          window.fbq('track', 'Lead', {
            content_name: 'home_contact_form',
            content_category: 'contact_form',
          });
        }
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try emailing me directly at tommy@tmytrn.com',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try emailing me directly at tommy@tmytrn.com',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2 className="section-label">CONTACT</h2>
        
        <div className="contact-row">
          <div className="contact-intro-col">
            <p className="contact-intro">
              Fill out this form and I'll follow up with you, or email me at{' '}
              <a
                href="mailto:tommy@tmytrn.com"
                className="contact-link"
                onClick={handleEmailClick}
              >
                tommy@tmytrn.com
              </a>
            </p>
            
            <p className="contact-schedule">
              Want to schedule an intro call?{' '}
              <a
                href="https://calendly.com/tommy-tmytrn/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                onClick={handleCalendlyClick}
              >
                Let's do it
              </a>.
            </p>
          </div>

          <div className="contact-form-col">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-row">
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="form-input"
                />
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input form-input-full"
                required
              />

              <div className="budget-range-wrapper">
                <label className="budget-label">Budget Range</label>
                
                <div className="slider-wrapper">
                  <input
                    type="range"
                    name="budgetMin"
                    min="5000"
                    max="50000"
                    step="5000"
                    value={formData.budgetMin}
                    onChange={(e) => handleBudgetChange(e, 'min')}
                    className="range-slider range-slider-min"
                  />
                  <input
                    type="range"
                    name="budgetMax"
                    min="5000"
                    max="50000"
                    step="5000"
                    value={formData.budgetMax}
                    onChange={(e) => handleBudgetChange(e, 'max')}
                    className="range-slider range-slider-max"
                  />
                </div>

                <div className="slider-labels">
                  <span className="slider-label">{formatBudget(formData.budgetMin)}</span>
                  <span className="slider-label">{formatBudget(formData.budgetMax)}</span>
                </div>
              </div>

              <textarea
                name="details"
                placeholder="More Details..."
                value={formData.details}
                onChange={handleInputChange}
                className="form-textarea"
                rows={5}
              />

              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleInputChange}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-button"
              >
                {isSubmitting ? 'SENDING...' : 'SUBMIT'}
              </button>

              {submitStatus && (
                <div className={`submit-status ${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-container {
          width: 100%;
          padding: 0 15px;
          margin-top: 120px;
        }

        .contact-content {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 56px;
        }

        .section-label {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 24px;
          margin: 0 0 50px 0;
          text-transform: uppercase;
        }

        .contact-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 57px;
        }

        .contact-intro-col {
          max-width: 635px;
        }

        .contact-intro {
          font-size: 36px;
          line-height: 1.4;
          margin: 0 0 0 0;
        }

        .contact-schedule {
          font-size: 18px;
          line-height: 1.5;
          margin: 460px 0 0 0;
        }

        .contact-link {
          color: inherit;
          text-decoration: underline;
        }

        .contact-link:hover {
          opacity: 0.7;
        }

        .contact-form-col {
          width: 100%;
          max-width: 643px;
        }

        .contact-form {
          border: 1px solid var(--navy);
          padding: 44px 36px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 21px;
          margin-bottom: 12px;
        }

        .form-input {
          font-family: inherit;
          font-size: 18px;
          padding: 8px 12px;
          border: 1px solid var(--navy);
          background: transparent;
          color: var(--navy);
          outline: none;
        }

        .form-input::placeholder {
          color: var(--navy);
          opacity: 0.7;
        }

        .form-input-full {
          width: 100%;
          margin-bottom: 12px;
        }

        .budget-range-wrapper {
          margin: 40px 0;
        }

        .budget-label {
          display: block;
          font-size: 14px;
          text-align: center;
          margin-bottom: 30px;
        }

        .slider-wrapper {
          position: relative;
          height: 20px;
          margin-bottom: 15px;
        }

        .range-slider {
          position: absolute;
          width: 100%;
          height: 20px;
          -webkit-appearance: none;
          appearance: none;
          background: transparent;
          pointer-events: none;
          top: 0;
          left: 0;
        }

        .range-slider::-webkit-slider-track {
          width: 100%;
          height: 1px;
          background: var(--navy);
          border: none;
        }

        .range-slider::-moz-range-track {
          width: 100%;
          height: 1px;
          background: var(--navy);
          border: none;
        }

        .range-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          background: var(--navy);
          cursor: pointer;
          pointer-events: auto;
          border: none;
          border-radius: 0;
        }

        .range-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: var(--navy);
          cursor: pointer;
          pointer-events: auto;
          border: none;
          border-radius: 0;
        }

        .range-slider-max {
          z-index: 2;
        }

        .slider-labels {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
        }

        .slider-label {
          font-size: 18px;
        }

        .form-textarea {
          width: 100%;
          font-family: inherit;
          font-size: 18px;
          padding: 12px;
          border: 1px solid var(--navy);
          background: transparent;
          color: var(--navy);
          resize: vertical;
          outline: none;
          margin-bottom: 20px;
        }

        .form-textarea::placeholder {
          color: var(--navy);
          opacity: 0.7;
        }

        .submit-button {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 18px;
          padding: 8px 24px 4px;
          background: var(--navy);
          color: var(--cream);
          border: 1px solid var(--navy);
          cursor: pointer;
          transition: opacity 0.2s;
        }

        .submit-button:hover:not(:disabled) {
          opacity: 0.9;
        }

        .submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .submit-status {
          margin-top: 20px;
          padding: 12px;
          border: 1px solid var(--navy);
          font-size: 16px;
        }

        .submit-status.success {
          background: rgba(235, 193, 65, 0.1);
        }

        .submit-status.error {
          background: rgba(255, 0, 0, 0.05);
        }

        @media (max-width: 1440px) {
          .contact-content {
            padding: 0 40px;
          }
        }

        @media (max-width: 1024px) {
          .contact-content {
            padding: 0 30px;
          }
          
          .contact-row {
            gap: 30px;
          }

          .contact-intro {
            font-size: 28px;
          }

          .contact-schedule {
            margin-top: 300px;
          }
        }

        @media (max-width: 768px) {
          .contact-container {
            margin-top: 80px;
          }

          .contact-content {
            padding: 0;
          }

          .section-label {
            font-size: 14px;
            margin-bottom: 25px;
          }

          .contact-row {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .contact-intro {
            font-size: 24px;
          }

          .contact-schedule {
            margin-top: 30px;
            font-size: 16px;
          }

          .contact-form {
            padding: 30px 20px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .form-input,
          .form-textarea {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}
