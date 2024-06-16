 const carousel = document.querySelector('.carousel');
  const carouselItems = document.querySelector('.carousel-items');
  const carouselItemsList = document.querySelectorAll('.carousel-item');
  const carouselPrev = document.querySelector('.carousel-prev');
  const carouselNext = document.querySelector('.carousel-next');
  const carouselIndicators = document.querySelector('.carousel-indicators');

  let currentIndex = 0;
  let intervalId;

  function showCarouselItem(index) {
    carouselItemsList.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
    updateIndicators();
  }

  function updateIndicators() {
    carouselIndicators.innerHTML = '';
    carouselItemsList.forEach((_, i) => {
      const indicator = document.createElement('button');
      indicator.classList.add('carousel-indicator');
      indicator.classList.toggle('active', i === currentIndex);
      indicator.addEventListener('click', () => showCarouselItem(i));
      carouselIndicators.appendChild(indicator);
    });
  }

  function prevCarouselItem() {
    currentIndex = (currentIndex - 1 + carouselItemsList.length) % carouselItemsList.length;
    showCarouselItem(currentIndex);
  }

  function nextCarouselItem() {
    currentIndex = (currentIndex + 1) % carouselItemsList.length;
    showCarouselItem(currentIndex);
  }

  function startAutoplay() {
    intervalId = setInterval(nextCarouselItem, 5000); // Cambia el intervalo de tiempo según tu preferencia
  }

  function stopAutoplay() {
    clearInterval(intervalId);
  }

  carouselPrev.addEventListener('click', prevCarouselItem);
  carouselNext.addEventListener('click', nextCarouselItem);

  carouselItemsList.forEach((item, i) => {
    const indicator = document.createElement('button');
    indicator.classList.add('carousel-indicator');
    indicator.classList.toggle('active', i === currentIndex);
    indicator.addEventListener('click', () => showCarouselItem(i));
    carouselIndicators.appendChild(indicator);
  });

  showCarouselItem(currentIndex);
  startAutoplay();

  carousel.addEventListener('mouseover', stopAutoplay);
  carousel.addEventListener('mouseout', startAutoplay);