import React, { useState } from 'react';
import { Calendar, User, Phone, Home, MessageSquare, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

function getDefaultDates() {
  const d = new Date();
  const today = d.toISOString().split('T')[0];
  const nextDay = new Date(d);
  nextDay.setDate(nextDay.getDate() + 1);
  const tomorrow = nextDay.toISOString().split('T')[0];
  return { today, tomorrow };
}

export default function BookingSection() {
  const { today, tomorrow } = getDefaultDates();

  const [formData, setFormData] = useState({
    guestName: '',
    mobileNumber: '',
    checkInDate: today,
    checkOutDate: tomorrow,
    adults: '2',
    children: '0',
    rooms: '1',
    roomCategory: 'Deluxe Room',
    specialRequests: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'checkInDate') {
      if (formData.checkOutDate <= value) {
        const nextDay = new Date(value);
        nextDay.setDate(nextDay.getDate() + 1);
        setFormData((prev) => ({
          ...prev,
          checkInDate: value,
          checkOutDate: nextDay.toISOString().split('T')[0],
        }));
      }
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.guestName.trim()) newErrors.guestName = 'Please enter your name.';
    const cleanPhone = formData.mobileNumber.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) newErrors.mobileNumber = 'Please provide a valid 10-digit phone number.';
    if (!formData.checkInDate) newErrors.checkInDate = 'Select check-in date.';
    else if (formData.checkInDate < today) newErrors.checkInDate = 'Check-in cannot be in the past.';
    if (!formData.checkOutDate) newErrors.checkOutDate = 'Select check-out date.';
    else if (formData.checkOutDate <= formData.checkInDate) newErrors.checkOutDate = 'Check-out must be after check-in.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Strict WhatsApp message template
    const message = `Hello Parvat Valley Resort,\n\nI would like to enquire about a stay.\n\nName: ${formData.guestName.trim()}\nMobile: ${formData.mobileNumber.trim()}\nCheck-in: ${formData.checkInDate}\nCheck-out: ${formData.checkOutDate}\nAdults: ${formData.adults}\nChildren: ${formData.children || '0'}\nRooms: ${formData.rooms}\nPreferred Room: ${formData.roomCategory}\nSpecial Requests: ${formData.specialRequests.trim() || 'None'}\n\nPlease confirm availability and share the applicable rates.`;

    const whatsappUrl = `https://wa.me/${RESORT_INFO.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="book" className="py-20 sm:py-28 bg-forest-dark text-warm-ivory relative overflow-hidden">
      {/* Decorative background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-muted-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-950/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct Booking Benefits */}
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-muted-gold" />
              <span className="text-xs uppercase tracking-[0.25em] text-sand-beige font-semibold">
                Direct Reservations
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-warm-ivory tracking-tight mb-6">
              Reserve Your <span className="block italic font-normal text-muted-gold">Pushkar Escape</span>
            </h2>

            <p className="text-sand-beige/90 text-sm sm:text-base leading-relaxed mb-8 font-light">
              Connect directly with our resort management for confirmed room availability, custom pilgrimage packages, 
              and family holiday stays. No hidden fees or third-party markups.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { title: 'Best Rate Assurance', desc: 'Direct pricing without intermediary OTA booking commissions.' },
                { title: 'Personalized Flexibility', desc: 'Flexible arrival coordination and special dietary arrangements.' },
                { title: 'Instant WhatsApp Communication', desc: 'Real-time chat with the property team on +91 96363 52306.' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-forest-green/40 p-4 rounded-xl border border-muted-gold/20">
                  <CheckCircle2 className="w-5 h-5 text-muted-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-base font-bold text-warm-ivory">{item.title}</h4>
                    <p className="text-xs text-sand-beige/80 mt-0.5 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-4 text-xs text-sand-beige/70">
              <ShieldCheck className="w-4 h-4 text-muted-gold" />
              <span>Check-in: 12:00 PM | Check-out: 12:00 PM</span>
            </div>
          </div>

          {/* Right Column: In-page Booking Card */}
          <div className="lg:col-span-7">
            <div className="bg-warm-ivory text-dark-charcoal rounded-2xl p-6 sm:p-8 shadow-2xl border border-muted-gold/60 text-left">
              <div className="border-b border-sand-beige/80 pb-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-forest-dark">
                    Plan Your Stay
                  </h3>
                  <p className="text-xs text-dark-charcoal/70">
                    Fill the details below to generate your direct WhatsApp enquiry.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 bg-forest-green/10 text-forest-green px-3 py-1 rounded-full text-xs font-semibold">
                  <span>Fast Response</span>
                </div>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto" />
                  <h4 className="font-serif text-xl font-bold text-forest-dark">
                    Enquiry Form Submitted via WhatsApp!
                  </h4>
                  <p className="text-xs sm:text-sm text-dark-charcoal/80 max-w-md mx-auto">
                    Your request details have been dispatched to <strong>+91 96363 52306</strong>. 
                    We look forward to welcoming you to Parvat Valley Resort.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs uppercase tracking-wider text-forest-green hover:underline font-semibold"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-forest-dark uppercase tracking-wider mb-1">
                        Your Full Name <span className="text-red-600">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-muted-gold absolute left-3 top-3 pointer-events-none" />
                        <input
                          type="text"
                          name="guestName"
                          value={formData.guestName}
                          onChange={handleChange}
                          placeholder="Your name"
                          className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border bg-white ${
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
                        <Phone className="w-4 h-4 text-muted-gold absolute left-3 top-3 pointer-events-none" />
                        <input
                          type="tel"
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleChange}
                          placeholder="10-digit mobile number"
                          className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border bg-white ${
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

                  {/* Dates */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-forest-dark uppercase tracking-wider mb-1">
                        Check-in Date <span className="text-red-600">*</span>
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-muted-gold absolute left-3 top-3 pointer-events-none" />
                        <input
                          type="date"
                          name="checkInDate"
                          min={today}
                          value={formData.checkInDate}
                          onChange={handleChange}
                          className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border bg-white ${
                            errors.checkInDate ? 'border-red-500' : 'border-sand-beige focus:border-muted-gold'
                          }`}
                          required
                        />
                      </div>
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
                        <Calendar className="w-4 h-4 text-muted-gold absolute left-3 top-3 pointer-events-none" />
                        <input
                          type="date"
                          name="checkOutDate"
                          min={formData.checkInDate || today}
                          value={formData.checkOutDate}
                          onChange={handleChange}
                          className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border bg-white ${
                            errors.checkOutDate ? 'border-red-500' : 'border-sand-beige focus:border-muted-gold'
                          }`}
                          required
                        />
                      </div>
                      {errors.checkOutDate && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.checkOutDate}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Occupancy */}
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-forest-dark uppercase tracking-wider mb-1">
                        Adults
                      </label>
                      <select
                        name="adults"
                        value={formData.adults}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 text-sm rounded-lg border border-sand-beige bg-white text-dark-charcoal focus:border-muted-gold"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                          <option key={n} value={n}>{n} Adult{n > 1 ? 's' : ''}</option>
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
                        className="w-full px-3 py-2.5 text-sm rounded-lg border border-sand-beige bg-white text-dark-charcoal focus:border-muted-gold"
                      >
                        {[0, 1, 2, 3, 4, 5].map((n) => (
                          <option key={n} value={n}>{n} Child{n === 1 ? '' : 'ren'}</option>
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
                        className="w-full px-3 py-2.5 text-sm rounded-lg border border-sand-beige bg-white text-dark-charcoal focus:border-muted-gold"
                      >
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                          <option key={n} value={n}>{n} Room{n > 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Room Category */}
                  <div>
                    <label className="block text-xs font-semibold text-forest-dark uppercase tracking-wider mb-1">
                      Preferred Room Category
                    </label>
                    <div className="relative">
                      <Home className="w-4 h-4 text-muted-gold absolute left-3 top-3 pointer-events-none" />
                      <select
                        name="roomCategory"
                        value={formData.roomCategory}
                        onChange={handleChange}
                        className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-sand-beige bg-white text-dark-charcoal focus:border-muted-gold font-medium"
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
                      Special Requests (Optional)
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      rows={2}
                      placeholder="e.g. Early check-in request, pool view preferred..."
                      className="w-full p-3 text-sm rounded-lg border border-sand-beige bg-white text-dark-charcoal focus:border-muted-gold resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-98"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>Send Enquiry via WhatsApp</span>
                    </button>
                    <p className="text-[11px] text-center text-dark-charcoal/60 mt-2">
                      Connects directly to Parvat Valley Resort on WhatsApp • <strong>+91 96363 52306</strong>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
