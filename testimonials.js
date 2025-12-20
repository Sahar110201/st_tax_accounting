function renderSlider() {
  sliderWrapper.innerHTML = '';

  // Get previous, current, and next testimonial indexes
  const total = testimonials.length;
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  const displayIndexes = [prevIndex, currentIndex, nextIndex];

  displayIndexes.forEach((i, idx) => {
    const t = testimonials[i];
    const testimonialDiv = document.createElement('div');
    testimonialDiv.classList.add('testimonial');

    // Highlight the middle one
    if (idx === 1) testimonialDiv.classList.add('active');

    testimonialDiv.innerHTML = `
      <p>"${t.feedback}"</p>
      <div class="client__details">
        ${t.name} - <small>${t.date}</small>
      </div>
    `;
    sliderWrapper.appendChild(testimonialDiv);
  });
}

