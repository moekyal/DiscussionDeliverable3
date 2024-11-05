document.querySelectorAll('img').forEach(img => {
  console.log("runs")
  img.onerror = function() {
    this.onerror = null; // Prevents infinite loop if default image missing
    this.src = '../js/placeholder-image.jpg';
    this.alt = "Default image"
  };
});