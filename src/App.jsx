import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResortOverview from './components/ResortOverview';
import Accommodations from './components/Accommodations';
import PoolExperience from './components/PoolExperience';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import ExplorePushkar from './components/ExplorePushkar';
import BookingSection from './components/BookingSection';
import LocationContact from './components/LocationContact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedRoomCategory, setSelectedRoomCategory] = useState('Deluxe Room');

  const handleOpenBooking = (roomCategory = 'Deluxe Room') => {
    setSelectedRoomCategory(roomCategory);
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-warm-ivory text-dark-charcoal font-sans antialiased selection:bg-muted-gold selection:text-forest-dark overflow-x-hidden">
      {/* Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. Cinematic Hero Section (IMAGE 1: Exterior) */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. Resort Overview / Introduction (IMAGE 5: Aerial View) */}
        <ResortOverview onOpenBooking={handleOpenBooking} />

        {/* 3. Accommodation / Rooms (IMAGE 4: Guest Room Interior) */}
        <Accommodations onOpenBooking={handleOpenBooking} />

        {/* 4. Swimming Pool Experience (IMAGE 2: Pool & Mountain) */}
        <PoolExperience onOpenBooking={handleOpenBooking} />

        {/* 5. Resort Facilities & Amenities */}
        <Facilities />

        {/* 6. Property Gallery & Lightbox (All 5 Authentic Photographs) */}
        <Gallery />

        {/* 7. Destination: Explore Pushkar */}
        <ExplorePushkar />

        {/* 8. Direct Reservations / WhatsApp Booking Form */}
        <BookingSection />

        {/* 9. Location & Contact Details */}
        <LocationContact onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Interactive Booking Enquiry Modal */}
      <BookingModal
        key={`${selectedRoomCategory}-${isBookingModalOpen ? 'open' : 'closed'}`}
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        initialRoom={selectedRoomCategory}
      />

      {/* Floating WhatsApp and Mobile Action Bar */}
      <FloatingActions onOpenBooking={handleOpenBooking} />
    </div>
  );
}
