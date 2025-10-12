// Cross-browser smooth scroll utility with easing

export const easeInOutCubic = (t) => {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};

export const smoothScrollTo = (targetPosition, duration = 800) => {
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime = null;

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easing = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * easing);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  // Get absolute position of section
  const elementRect = element.getBoundingClientRect();
  const absoluteTop = elementRect.top + window.scrollY;


  smoothScrollTo(absoluteTop);
};
