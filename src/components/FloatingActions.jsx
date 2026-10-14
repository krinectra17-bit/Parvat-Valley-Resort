import React, { useState } from 'react';
import { Phone, Calendar } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

export default function FloatingActions({ onOpenBooking }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultWhatsappUrl = `https://wa.me/${RESORT_INFO.contact.whatsappNumber}?text=${encodeURIComponent(
    'Hello Parvat Valley Resort,\n\nI would like to enquire about a room stay at your resort in Pushkar.\n\nPlease share availability and room rates.'
  )}`;

  return (
    <>
      {/* Desktop & Tablet: Floating WhatsApp Button on Bottom Right */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-3">
        {/* Tooltip */}
        {showTooltip && (
          <div className="bg-forest-dark text-warm-ivory text-xs px-3 py-2 rounded-lg shadow-xl border border-muted-gold/40 animate-fade-in flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
            <span>Chat on WhatsApp with Resort Team</span>
          </div>
        )}

        {/* WhatsApp Floating Action Button */}
        <a
          href={defaultWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 relative group"
          aria-label="Direct WhatsApp Enquiry with Parvat Valley Resort"
        >
          {/* Subtle pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping group-hover:hidden" />
          
          {/* WhatsApp icon */}
          <svg
            className="w-8 h-8 fill-current relative z-10"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.996.586 3.864 1.602 5.438L2 22l4.672-1.578A9.977 9.977 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.758 14.188c-.242.684-1.398 1.309-1.922 1.391-.492.078-.961.117-3.117-.781-2.484-1.039-4.078-3.57-4.203-3.734-.125-.164-1.008-1.344-1.008-2.57 0-1.227.641-1.836.875-2.086.234-.25.516-.313.688-.313.172 0 .344 0 .492.008.156.008.367-.063.578.438.219.523.75 1.836.813 1.969.063.133.109.297.016.477-.094.18-.141.297-.281.469-.141.172-.297.383-.422.516-.141.141-.289.297-.125.578.164.281.727 1.195 1.555 1.938 1.07.953 1.969 1.258 2.25 1.398.281.141.445.117.609-.07.164-.188.703-.82 891-1.102.188-.281.375-.234.625-.141.25.094 1.578.742 1.852.875.273.133.453.203.523.313.07.109.07.641-.172 1.328z" />
          </svg>
        </a>
      </div>

      {/* Mobile Sticky Bottom Action Bar (Only on viewports < 640px) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-forest-dark/95 backdrop-blur-md border-t border-muted-gold/30 px-3 py-2.5 shadow-2xl flex items-center justify-between gap-2.5">
        <a
          href={`tel:${RESORT_INFO.contact.phoneRaw}`}
          className="flex-1 bg-forest-green hover:bg-forest-green/80 text-warm-ivory text-xs font-semibold uppercase tracking-wider py-2.5 px-2 rounded-lg flex items-center justify-center gap-1.5 border border-muted-gold/30"
        >
          <Phone className="w-3.5 h-3.5 text-muted-gold" />
          <span>Call Resort</span>
        </a>

        <button
          onClick={() => onOpenBooking()}
          className="flex-1 bg-muted-gold hover:bg-gold-light text-forest-dark text-xs font-semibold uppercase tracking-wider py-2.5 px-2 rounded-lg flex items-center justify-center gap-1.5 shadow"
        >
          <Calendar className="w-3.5 h-3.5 text-forest-dark" />
          <span>Book Stay</span>
        </button>

        <a
          href={defaultWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow"
          aria-label="Direct WhatsApp Message"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.996.586 3.864 1.602 5.438L2 22l4.672-1.578A9.977 9.977 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.758 14.188c-.242.684-1.398 1.309-1.922 1.391-.492.078-.961.117-3.117-.781-2.484-1.039-4.078-3.57-4.203-3.734-.125-.164-1.008-1.344-1.008-2.57 0-1.227.641-1.836.875-2.086.234-.25.516-.313.688-.313.172 0 .344 0 .492.008.156.008.367-.063.578.438.219.523.75 1.836.813 1.969.063.133.109.297.016.477-.094.18-.141.297-.281.469-.141.172-.297.383-.422.516-.141.141-.289.297-.125.578.164.281.727 1.195 1.555 1.938 1.07.953 1.969 1.258 2.25 1.398.281.141.445.117.609-.07.164-.188.703-.82 891-1.102.188-.281.375-.234.625-.141.25.094 1.578.742 1.852.875.273.133.453.203.523.313.07.109.07.641-.172 1.328z" />
          </svg>
        </a>
      </div>
    </>
  );
}
