const btnBurger = document.querySelector(".burger");
const boxMenu = document.querySelector(".box-menu");
const bgMenu = document.querySelector(".bg-menu");
const menuKelas = document.querySelector(".menu-kelas");
const subMenuKelas = document.querySelector(".sub-menu-kelas");
const subMenuKelasActive = document.querySelector(".sub-menu-kelas-active");

btnBurger.addEventListener("click", function () {
  boxMenu.classList.toggle("menu-active");
  bgMenu.classList.toggle("bg-active");
});

bgMenu.addEventListener("click", function () {
  this.classList.remove("bg-active");
  boxMenu.classList.remove("menu-active");
});

const hover = () => {
  if (
    menuKelas.addEventListener("mouseover", function () {
      subMenuKelas.classList.toggle("sub-menu-kelas-active");
    })
  ) {
  } else if (
    subMenuKelas.addEventListener("mouseover", function () {
      this.classList.add("sub-menu-kelas-active");
    })
  ) {
  } else if (
    subMenuKelas.addEventListener("mouseout", function () {
      this.classList.remove("sub-menu-kelas-active");
    })
  ) {
  }
  {
  }
};

hover();

window.onscroll = () => {
  boxMenu.classList.remove("menu-active");
  bgMenu.classList.remove("bg-active");
};
