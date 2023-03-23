const portImage = $(".portfolio-image");

$(".navigation__link").on("click", function () {
  $(".navigation__button").click();
});

$(".modal-x").on("click", function () {
  $(".modal-outer-in").toggleClass("modal-outer-away", true);
  $(".modal-outer-in").toggleClass("modal-outer-in", false);
  window.removeEventListener("click", clickRemove);
});

for (let i = 0; i < portImage.length; i++) {
  let num = portImage[i].dataset.index;

  $(portImage[i]).on("click", function () {
    switch (num) {
      case "1":

      case "2":

      case "3":

      case "4":

      case "5":

      case "6":

      case "7":
        closeModal();
        $(".modal-outer-away").toggleClass("modal-outer-in", true);
        $("#modal-header").html("Progressive Web App Starter Template");
        $("#modal-img").html(
          '<img class="modal-image" src="img/pwa-template.png" alt="pwa template" />'
        );
        //$('#visit').html('<a class="modal-visit" href="" target="_blank"></a>')
        $("#modal-content").html(
          "<span>This PWA starter template comes with a Web App Manifest and Service Worker file. Open and customize to start creating your PWA.</span> <div><a target='_blank' href='https://github.com/Ctharp11/pwa-template/blob/main/README.md'>View the Readme for technical details.</a></div>"
        );
        return;
      default:
        return;
    }
  });
}

function closeModal() {
  window.addEventListener("click", clickRemove);
}

const clickRemove = function (event) {
  const modal = document.querySelector(".modal-outer");
  if (event.target === modal) {
    $(".modal-outer-in").toggleClass("modal-outer-away", true);
    $(".modal-outer-in").toggleClass("modal-outer-in", false);
    window.removeEventListener("click", clickRemove);
  }
};
