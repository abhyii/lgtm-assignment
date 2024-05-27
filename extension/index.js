// index.ts
var updateProfilePic = function() {
  PROFILE_PIC_CLASSES.forEach((className) => {
    const profilePicElements = document.querySelectorAll(className);
    profilePicElements.forEach((element) => {
      element.setAttribute("src", IMAGE_URL);
      element.setAttribute("style", "object-fit: cover;");
    });
  });
};
var main = function() {
  const infiniteScrollDiv = document.querySelector(INFINITE_SCROLL_DIV_CLASS);
  if (infiniteScrollDiv) {
    const observerConfig = { childList: true, subtree: true };
    const observer = new MutationObserver(updateProfilePic);
    observer.observe(infiniteScrollDiv, observerConfig);
  }
};
var IMAGE_URL = "https://i.imgur.com/Ss75Vfa.jpeg";
var INFINITE_SCROLL_DIV_CLASS = ".scaffold-layout__main";
var PROFILE_PIC_CLASSES = [
  ".update-components-actor__avatar-image",
  ".ivm-image-view-model__circle-img",
  ".EntityPhoto-circle-0",
  ".EntityPhoto-square-0",
  ".avatar"
];
if (window) {
  window.addEventListener("load", function() {
    main();
  });
  window.addEventListener("popstate", function() {
    main();
  });
}
