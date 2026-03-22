// Модалка для галереи фото видео

function openModal(img) {
  document.getElementById("modal").style.display = "flex";

  document.getElementById("modal-img").style.display = "block";
  document.getElementById("modal-video").style.display = "none";

  document.getElementById("modal-img").src = img.src;
}

function openVideo(src) {
  document.getElementById("modal").style.display = "flex";

  document.getElementById("modal-img").style.display = "none";
  document.getElementById("modal-video").style.display = "block";

  document.getElementById("video-source").src = src;
  document.getElementById("modal-video").load();
}

function closeModal() {
  const modal = document.getElementById("modal");
  const video = document.getElementById("modal-video");

  modal.style.display = "none";

  // Останавливаем видео полностью
  video.pause();
  video.currentTime = 0;
}