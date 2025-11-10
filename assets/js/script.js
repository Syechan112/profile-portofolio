document.addEventListener("DOMContentLoaded", function () {
  const reveals = document.querySelectorAll(".reveal");

  function reveal() {
    reveals.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", reveal);
  reveal(); // Initial check
});
function imageCarousel() {
  return {
    currentSlide: 0,
    init() {
      // Auto scroll setiap 3 detik
      setInterval(() => {
        this.currentSlide = this.currentSlide === 0 ? 1 : 0;
      }, 3000);
    },
  };
}


    document.addEventListener('DOMContentLoaded', function() {
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Ambil nilai dari form
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Validasi form
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Format pesan untuk WhatsApp
            const whatsappMessage = `Halo, saya ${name}.\n\n${message}.\n\n${email}`;
            
            // Ganti dengan nomor WhatsApp Anda (format internasional)
            const phoneNumber = "+628979673149";
            
            // Buka WhatsApp dengan pesan yang sudah diisi
            window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
            
            // Reset form setelah pengiriman
            contactForm.reset();
        });
    });