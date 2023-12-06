document.addEventListener('DOMContentLoaded', function () {
  const dialog = document.getElementById("dialog");

  const showButton = document.getElementById('contactMeBtn');

  const closeButton = document.getElementById("close_button");

  // "Show the dialog" button opens the dialog modally
  showButton.addEventListener("click", () => {
    dialog.showModal();
  });

  // "Close" button closes the dialog
  closeButton.addEventListener("click", () => {
    dialog.close();
  });
})