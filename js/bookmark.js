document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.bookmark-btn').addEventListener('click', function() {
     const icon = this.querySelector('i');
     // Toggle bookmark state
     if (icon.classList.contains('fa-bookmark')) {
        icon.classList.replace('fa-bookmark', 'fa-bookmarked');
        console.log("Bookmarked!");
     } else {
        icon.classList.replace('fa-bookmarked', 'fa-bookmark');
        console.log("Unbookmarked!");
     }
  });
});
