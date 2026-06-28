/* ===== Mobile Menu Toggle ===== */
document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.querySelector('.hamburger');
  var mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
    });
  }

  /* ===== Announcement Navigation ===== */
  const announcementItems = document.querySelectorAll('.announcement-bar .item');
  let announcementIndex = 0;

  function showItem(i) {
    announcementItems.forEach(item => item.classList.remove('active'));
    announcementItems[i].classList.add('active');
  }

  document.querySelector('.announcement-bar .prev').onclick = () => {
    announcementIndex = (announcementIndex - 1 + announcementItems.length) % announcementItems.length;
    showItem(announcementIndex);
  };

  document.querySelector('.announcement-bar .next').onclick = () => {
    announcementIndex = (announcementIndex + 1) % announcementItems.length;
    showItem(announcementIndex);
  };

  setInterval(() => {
    document.querySelector('.announcement-bar .prev').click();
  }, 3000);

  /* ===== Mega Menu Backdrop ===== */
  var backdrop = document.getElementById('mega-backdrop');
  var navItems = document.querySelectorAll('.desktop-nav-item[data-mega]');

  if (backdrop && navItems.length) {
    navItems.forEach(function (item) {
      item.addEventListener('mouseenter', function () {
        backdrop.classList.add('visible');
      });
      item.addEventListener('mouseleave', function () {
        backdrop.classList.remove('visible');
      });
    });
  }

  /* ===== Carousel Scroll ===== */
  document.querySelectorAll('[data-carousel-btn]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var trackId = btn.getAttribute('data-carousel-track');
      var direction = btn.getAttribute('data-carousel-btn');
      var track = document.getElementById(trackId);
      if (track) {
        var scrollAmount = direction === 'left' ? -320 : 320;
        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    });
  });
});
