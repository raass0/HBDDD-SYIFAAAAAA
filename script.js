const giftBox = document.getElementById("gift-box");
const explosion = document.querySelector(".explosion");
const poster = document.querySelector(".poster");

giftBox.onclick = () => {
  giftBox.style.display = "none";
  explosion.classList.remove("hidden");

  setTimeout(() => {
    explosion.classList.add("hidden");
    poster.classList.remove("hidden");
  }, 1500);
};
