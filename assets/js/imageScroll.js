  function imageCarousel() {
    return {
      currentSlide: 0,
      images: [
          { src: '/assets/image/profile/seans3.png', alt: 'Foto 1'},
          { src: '/assets/image/profile/seans2.jpg', alt: 'Foto 2'},
        { src: '/assets/image/profile/sean.png', alt: 'Foto 3'},
      ],
      startRotation() {
        setInterval(() => {
          this.currentSlide = (this.currentSlide + 1) % this.images.length;
        }, 4000);
      },
      goToSlide(index) {
        this.currentSlide = index;
      }
    };
  }