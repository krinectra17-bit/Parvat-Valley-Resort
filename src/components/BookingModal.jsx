import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Phone, Home, MessageSquare, AlertCircle, CheckCircle, ShieldCheck } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

function getDefaultDates() {
  const d = new Date();
  const today = d.toISOString().split('T')[0];
  const nextDay = new Date(d);
  nextDay.setDate(nextDay.getDate() + 1);
  const tomorrow = nextDay.toISOString().split('T')[0];
  return { today, tomorrow };
}

export default function BookingModal({ isOpen, onClose, initialRoom = 'Deluxe Room' }) {
  const { today, tomorrow } = getDefaultDates();

  const [formData, setFormData] = useState({
    guestName: '',
    mobileNumber: '',
    checkInDate: today,
    checkOutDate: tomorrow,
    adults: '2',
    children: '0',
    rooms: '1',
    roomCategory: initialRoom || 'Deluxe Room',
    specialRequests: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  // Lock body scroll when modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleModalClose = () => {
    setSuccessMessage(false);
    setErrors({});
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // If changing check-in date and check-out is before or equal to check-in, update check-out
    if (name === 'checkInDate') {
      if (formData.checkOutDate <= value) {
        const next = new Date(value);
        next.setDate(next.getDate() + 1);
        setFormData((prev) => ({
          ...prev,
          checkInDate: value,
          checkOutDate: next.toISOString().split('T')[0],
        }));
      }
    }

    // Clear error for field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.guestName.trim()) {
      newErrors.guestName = 'Please enter your name.';
    }

    const cleanPhone = formData.mobileNumber.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.mobileNumber = 'Please provide a valid 10-digit mobile number.';
    }

    if (!formData.checkInDate) {
      newErrors.checkInDate = 'Select check-in date.';
    } else if (formData.checkInDate < today) {
      newErrors.checkInDate = 'Check-in date cannot be in the past.';
    }

    if (!formData.checkOutDate) {
      newErrors.checkOutDate = 'Select check-out date.';
    } else if (formData.checkOutDate <= formData.checkInDate) {
      newErrors.checkOutDate = 'Check-out date must be after check-in date.';
    }

    if (parseInt(formData.adults, 10) < 1) {
      newErrors.adults = 'At least 1 adult is required.';
    }

    if (parseInt(formData.rooms, 10) < 1) {
      newErrors.rooms = 'At least 1 room is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Format WhatsApp message strictly per requirement:
    const message = `Hello Parvat Valley Resort,\n\nI would like to enquire about a stay.\n\nName: ${formData.guestName.trim()}\nMobile: ${formData.mobileNumber.trim()}\nCheck-in: ${formData.checkInDate}\nCheck-out: ${formData.checkOutDate}\nAdults: ${formData.adults}\nChildren: ${formData.children || '0'}\nRooms: ${formData.rooms}\nPreferred Room: ${formData.roomCategory}\nSpecial Requests: ${formData.specialRequests.trim() || 'None'}\n\nPlease confirm availability and share the applicable rates.`;

    const whatsappUrl = `https://wa.me/${RESORT_INFO.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Show instant success feedback and trigger WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setIsSubmitting(false);
      setSuccessMessage(true);
    }, 300);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div className="relative w-full max-w-xl bg-warm-ivory rounded-2xl shadow-2xl border border-muted-gold/40 overflow-hidden my-auto max-h-[90svh] flex flex-col">
        
        {/* Modal Top Header */}
        <div className="bg-forest-dark px-4 sm:px-6 py-4 sm:py-5 text-warm-ivory flex items-center justify-between border-b border-muted-gold/30 shrink-0">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-gold font-semibold block">
              Direct Resort Enquiry
            </span>
            <h3 id="booking-modal-title" className="font-serif text-lg sm:text-2xl font-bold">
              Enquire About Your Stay
            </h3>
          </div>

          <button
            onClick={handleModalClose}
            className="w-11 h-11 rounded-full hover:bg-forest-green text-warm-ivory transition-colors flex items-center justify-center focus:outline-none touch-manipulation shrink-0"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-7 overflow-y-auto flex-1 overscroll-contain">
          {successMessage ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-forest-green flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-forest-dark">
                WhatsApp Enquiry Initiated!
              </h4>
              <p className="text-sm text-dark-charcoal/80 max-w-md mx-auto leading-relaxed">
                Your pre-filled message has been opened in WhatsApp for <strong>+91 96363 52306</strong>. 
                Our resort reservation desk will reply with real-time room availability and applicable rates shortly.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleModalClose}
                  className="w-full sm:w-auto px-6 py-3 rounded bg-forest-green hover:bg-forest-dark text-warm-ivory text-xs uppercase tracking-wider font-semibold min-h-[44px] flex items-center justify-center touch-manipulation cursor-pointer"
                >
                  Return to Website
                </button>
                <a
                  href={`tel:${RESORT_INFO.contact.phoneRaw}`}
                  className="w-full sm:w-auto px-6 py-3 rounded border border-muted-gold text-forest-dark hover:bg-sand-beige text-xs uppercase tracking-wider font-semibold inline-flex items-center justify-center gap-2 min-h-[44px] touch-manipulation"
                >
                  <Phone className="w-3.5 h-3.5 text-muted-gold" />
                  <span>Call Us Now</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
              
              {/* Notice Banner */}
              <div className="bg-sand-beige/40 border border-muted-gold/40 rounded-lg p-3 text-xs text-dark-charcoal/80 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-forest-green shrink-0 mt-0.5" />
                <span>
                  <strong>Official Direct Booking:</strong> Submitting sends your enquiry directly to the resort's WhatsApp. No advance payment or card details are requested here.
                </span>
              </div>

              {/* Guest Name & Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-forest-dark uppercase tracking-wider mb-1">
                    Guest Name <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-muted-gold absolute left-3 top-3.5 pointer-events-none" />
                    <input
                      type="text"
                      name="guestName"
                      value={formData.guestName}
                      onChange={handleChange}
                      placeholder="e.g. Vikram Sharma"
                      className={`w-full pl-9 pr-3 py-2.5 sm:py-2 text-base sm:text-sm min-h-[44px] rounded-lg border bg-white text-dark-charcoal ${
                        errors.guestName ? 'border-red-500' : 'border-sand-beige focus:border-muted-gold'
                      }`}
                      required
                    />
                  </div>
                  {errors.guestName && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.guestName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-forest-dark uppercase tracking-wider mb-1">
                    Mobile Number <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-muted-gold absolute left-3 top-3.5 pointer-events-none" />
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      placeholder="e.g. 9876543210"
                      className={`w-full pl-9 pr-3 py-2.5 sm:py-2 text-base sm:text-sm min-h-[44px] rounded-lg border bg-white text-dark-charcoal ${
                        errors.mobileNumber ? 'border-red-500' : 'border-sand-beige focus:border-muted-gold'
                      }`}
                      required
                    />
                  </div>
                  {errors.mobileNumber && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.mobileNumber}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Dates Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-forest-dark uppercase tracking-wider mb-1">
                    Check-in Date <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-muted-gold absolute left-3 top-3.5 pointer-events-none" />
                    <input
                      type="date"
                      name="checkInDate"
                      min={today}
                      value={formData.checkInDate}
                      onChange={handleChange}
                      className={`w-full pl-9 pr-3 py-2.5 sm:py-2 text-base sm:text-sm min-h-[44px] rounded-lg border bg-white text-dark-charcoal ${
                        errors.checkInDate ? 'border-red-500' : 'border-sand-beige focus:border-muted-gold'
                      }`}
                      required
                    />
                  </div>
                  <span className="text-[10px] text-dark-charcoal/60 mt-0.5 block">Check-in from 12:00 PM</span>
                  {errors.checkInDate && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.checkInDate}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-forest-dark uppercase tracking-wider mb-1">
                    Check-out Date <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-muted-gold absolute left-3 top-3.5 pointer-events-none" />
                    <input
                      type="date"
                      name="checkOutDate"
                      min={formData.checkInDate || today}
                      value={formData.checkOutDate}
                      onChange={handleChange}
                      className={`w-full pl-9 pr-3 py-2.5 sm:py-2 text-base sm:text-sm min-h-[44px] rounded-lg border bg-white text-dark-charcoal ${
                        errors.checkOutDate ? 'border-red-500' : 'border-sand-beige focus:border-muted-gold'
                      }`}
                      required
                    />
                  </div>
                  <span className="text-[10px] text-dark-charcoal/60 mt-0.5 block">Check-out by 12:00 PM</span>
                  {errors.checkOutDate && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.checkOutDate}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Occupancy & Rooms: 1-col on tiny screens, 3-col on >= 420px */}
              <div className="grid grid-cols-1 xs:grid-cols-3 gap-2.5 sm:gap-3">
                <div>
                  <label className="block text-xs font-semibold text-forest-dark uppercase tracking-wider mb-1">
                    Adults
                  </label>
                  <select
                    name="adults"
                    value={formData.adults}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 sm:py-2 text-base sm:text-sm min-h-[44px] rounded-lg border border-sand-beige bg-white text-dark-charcoal focus:border-muted-gold cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-forest-dark uppercase tracking-wider mb-1">
                    Children
                  </label>
                  <select
                    name="children"
                    value={formData.children}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 sm:py-2 text-base sm:text-sm min-h-[44px] rounded-lg border border-sand-beige bg-white text-dark-charcoal focus:border-muted-gold cursor-pointer"
                  >
                    {[0, 1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>{num} Child{num === 1 ? '' : 'ren'}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-forest-dark uppercase tracking-wider mb-1">
                    Rooms
                  </label>
                  <select
                    name="rooms"
                    value={formData.rooms}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 sm:py-2 text-base sm:text-sm min-h-[44px] rounded-lg border border-sand-beige bg-white text-dark-charcoal focus:border-muted-gold cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>{num} Room{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preferred Room Category */}
              <div>
                <label className="block text-xs font-semibold text-forest-dark uppercase tracking-wider mb-1">
                  Preferred Room Category
                </label>
                <div className="relative">
                  <Home className="w-4 h-4 text-muted-gold absolute left-3 top-3.5 pointer-events-none" />
                  <select
                    name="roomCategory"
                    value={formData.roomCategory}
                    onChange={handleChange}
                    className="w-full pl-9 pr-3 py-2.5 sm:py-2 text-base sm:text-sm min-h-[44px] rounded-lg border border-sand-beige bg-white text-dark-charcoal focus:border-muted-gold font-medium cursor-pointer"
                  >
                    <option value="Deluxe Room">Deluxe Room (Signature Wood & Bedding)</option>
                    <option value="Luxury Room">Luxury Room (Spacious Pool/Mountain Vantage)</option>
                    <option value="Standard Room">Standard Room (Restful & Peaceful)</option>
                    <option value="Any Available Category">Any Available Room Category</option>
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-semibold text-forest-dark uppercase tracking-wider mb-1">
                  Special Requests / Travel Notes
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={2}
                  placeholder="e.g. Early check-in request, pool view preferred, traveling with elderly parents..."
                  className="w-full p-3 text-base sm:text-sm rounded-lg border border-sand-beige bg-white text-dark-charcoal focus:border-muted-gold resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider py-3.5 sm:py-4 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-98 min-h-[48px] touch-manipulation cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>
                <p className="text-[11px] text-center text-dark-charcoal/60 mt-2">
                  Destined to resort number: <strong>+91 96363 52306</strong>
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
