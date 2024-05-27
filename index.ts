const IMAGE_URL: string = "https://i.imgur.com/Ss75Vfa.jpeg";
const INFINITE_SCROLL_DIV_CLASS: string = ".scaffold-layout__main";
const PROFILE_PIC_CLASSES: string[] = [
  ".update-components-actor__avatar-image",
  ".ivm-image-view-model__circle-img",
  ".EntityPhoto-circle-0",
  ".EntityPhoto-square-0",
  ".avatar",
];

function updateProfilePic() {
  PROFILE_PIC_CLASSES.forEach((className) => {
    const profilePicElements = document.querySelectorAll(className);
    profilePicElements.forEach((element) => {
      element.setAttribute("src", IMAGE_URL);
      element.setAttribute("style", "object-fit: cover;");
    });
  });
}

function main() {
  const infiniteScrollDiv = document.querySelector(INFINITE_SCROLL_DIV_CLASS);
  if (infiniteScrollDiv) {
    const observerConfig = { childList: true, subtree: true };
    const observer = new MutationObserver(updateProfilePic);
    observer.observe(infiniteScrollDiv, observerConfig);
  }
}

if (window) {
  window.addEventListener("load", function () {
    main();
  });
  window.addEventListener("popstate", function () {
    main();
  });
}
