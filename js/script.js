// Show custom alert
function showAlert(msg) {
  var a = document.getElementById('alert');
  a.textContent = msg;
  a.style.display = 'block';
  setTimeout(function() { a.style.display = 'none'; }, 3000);
}

// Open modal
function openModal(id) {
  document.getElementById(id).style.display = 'flex';
}

// Close modal
function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Close modal on outside click
window.onclick = function(e) {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
};

// Form validation
function validateForm() {
  var name = document.getElementById('fullName').value.trim();
  var email = document.getElementById('email').value.trim();
  var pass = document.getElementById('password').value;
  var confirm = document.getElementById('confirmPassword').value;
  var valid = true;

  document.querySelectorAll('.error').forEach(function(el) { el.style.display = 'none'; });

  if (!name) {
    document.getElementById('nameErr').style.display = 'block';
    valid = false;
  }
  if (!email.includes('@') || !email.includes('.')) {
    document.getElementById('emailErr').style.display = 'block';
    valid = false;
  }
  if (pass.length < 6) {
    document.getElementById('passErr').style.display = 'block';
    valid = false;
  }
  if (pass !== confirm) {
    document.getElementById('confirmErr').style.display = 'block';
    valid = false;
  }

  if (valid) {
    showAlert('Sign up successful! Welcome to ReelTalk!');
    document.getElementById('signupForm').reset();
  }
  return false;
}

// Toggle expand/collapse
function toggleReview(id) {
  var el = document.getElementById(id);
  el.style.display = el.style.display === 'none' || !el.style.display ? 'block' : 'none';
}

// Video play/pause
function toggleVideo(id) {
  var v = document.getElementById(id);
  v.paused ? v.play() : v.pause();
}

// Random movie picker
function pickRandom() {
  var movies = [
    'The Shawshank Redemption',
    'The Godfather',
    'The Dark Knight',
    'Interstellar',
    'Avengers: Endgame'
  ];
  var i = Math.floor(Math.random() * movies.length);
  showAlert('We recommend: ' + movies[i] + '!');
}

// Image gallery
var galleryIndex = 0;
var galleryImages = [];

function initGallery(imgs) {
  galleryImages = imgs;
  galleryIndex = 0;
  showImage(0);
}

function showImage(n) {
  var img = document.getElementById('galleryImg');
  if (img && galleryImages.length) {
    galleryIndex = (n + galleryImages.length) % galleryImages.length;
    img.src = galleryImages[galleryIndex];
  }
}

function nextImage() { showImage(galleryIndex + 1); }
function prevImage() { showImage(galleryIndex - 1); }
