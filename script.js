document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll(".progress");

  progressBars.forEach((bar) => {
    let width = bar.style.width;
    bar.style.width = "0"; // Reset width for animation
    setTimeout(() => {
      bar.style.width = width;
    }, 500);
  });
});
