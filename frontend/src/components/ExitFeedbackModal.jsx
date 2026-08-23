import React, { useState, useEffect } from 'react';
import { Star, X, CheckCircle2, Send, HeartHandshake, Loader2 } from 'lucide-react';
import { submitTestimonialApi } from '../api/client';

const ExitFeedbackModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check session storage persistence
    const hasSeen = sessionStorage.getItem('hasSeenExitFeedback');
    if (hasSeen) return;

    const handleMouseLeave = (e) => {
      // Trigger when mouse moves near/above top edge of viewport
      if (e.clientY <= 10 && !sessionStorage.getItem('hasSeenExitFeedback')) {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenExitFeedback', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenExitFeedback', 'true');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitTestimonialApi({
        name: name.trim() || 'Verified Client',
        rating,
        text: comment.trim() || 'Great experience browsing Magarajothi Traders catalog.'
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Exit feedback submission error:', err);
      setSubmitted(true);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setIsOpen(false);
      }, 1800);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 font-sans">
      
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative border border-gray-200">
        
        {/* Dismiss Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {submitted ? (
          /* Thank You Success State */
          <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-300">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 font-heading">Thank You for Your Feedback!</h3>
            <p className="text-sm text-gray-600 max-w-xs mx-auto">
              Your review helps Magarajothi Traders deliver better eco-packaging services.
            </p>
          </div>
        ) : (
          /* Main Feedback Form */
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-jute-light/20 text-jute-dark text-xs font-bold uppercase tracking-wider">
              <HeartHandshake size={14} className="text-jute-dark" />
              <span>Your Opinion Matters</span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 font-heading tracking-tight">
                Leaving so soon?
              </h3>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                Help us improve Magarajothi Traders. How was your experience today?
              </p>
            </div>

            {/* 5-Star Interactive Rating System */}
            <div className="flex items-center justify-center gap-2 py-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="p-1 focus:outline-none transition-transform hover:scale-110"
                >
                  <Star
                    size={32}
                    className={`transition-colors duration-200 ${
                      (hoverRating || rating) >= star
                        ? 'fill-amber-400 text-amber-500'
                        : 'text-gray-300 fill-gray-100'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Optional Client Name Input */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                Your Name / Business (Optional)
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., K. Rajasekaran"
                className="w-full bg-[#FAF6F0] border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jute-dark focus:bg-white transition"
              />
            </div>

            {/* Written Feedback Textarea */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                Written Feedback / Requirements
              </label>
              <textarea
                rows="3"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="e.g., Great product catalog! Looking for food-grade 50kg jute bags with custom printing..."
                className="w-full bg-[#FAF6F0] border border-gray-300 rounded-xl p-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jute-dark focus:bg-white transition"
              ></textarea>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-1">
              <button
                type="button"
                onClick={handleClose}
                className="w-1/3 py-3 px-4 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-100 transition-colors uppercase tracking-wider"
              >
                No Thanks
              </button>
              <button
                type="submit"
                disabled={loading}
                className="w-2/3 bg-jute-dark hover:bg-jute text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5"
              >
                {loading ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <>
                    <Send size={14} />
                    <span>Submit Feedback</span>
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};

export default ExitFeedbackModal;
