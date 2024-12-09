function updateCounter() {
    const now = new Date().getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const eightDays = oneDay * 8;

    const nextEightDayInterval = Math.ceil(now / eightDays) * eightDays;
    const distance = nextEightDayInterval - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector('.days span').innerText = days;
    document.querySelector('.hours span').innerText = hours;
    document.querySelector('.minutes span').innerText = minutes;
    document.querySelector('.seconds span').innerText = seconds;
  }

  // Update the counter every second
  setInterval(updateCounter, 1000);

  // Initial call to set the counter immediately
  updateCounter();