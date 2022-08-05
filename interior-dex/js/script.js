let doc = document
// const navElement = document.getElementById("mainNav")

function makeNavSticky(navElement) {
  let top = window.pageYOffset

  top > 100
    ? navElement.classList.add("sticky")
    : navElement.classList.remove("sticky")
}
