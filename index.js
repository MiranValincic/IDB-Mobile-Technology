/** @format */

(function () {
  const [toggleButton] = document.getElementsByClassName("toggle-btn");
  const [navBarLinks] = document.getElementsByClassName("navbar-links");
  const [closeButton] = document.getElementsByClassName("close-btn");

  function actionHandler(action) {
    navBarLinks.classList[action]("active");
    toggleButton.classList[action]("active");
  }

  const onOpen = () => actionHandler("add");
  const onClose = () => actionHandler("remove");

  toggleButton.addEventListener("click", onOpen);
  closeButton.addEventListener("click", onClose);
})();
