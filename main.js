document.querySelectorAll('.slider').forEach(slider => {
  const slides = slider.querySelector('.slides');
  const slide = slider.querySelectorAll('.slide');
  let index = 0;

  function update() {
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    index = (index + 1) % slide.length;
    update();
  }

  // Auto geser tiap 5 detik
  setInterval(nextSlide, 5000);

  update();
});
