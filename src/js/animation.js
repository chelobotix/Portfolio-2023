const animation = () => {
  setTimeout(() => {
    document.querySelector(".comet").classList.add("comet-fly");
  }, 2000);
  document.querySelector(".comet").classList.remove("comet-fly");

  setTimeout(() => {
    console.log("dde");
    document.querySelector(".comet").classList.add("comet-fly");
  }, 20000);
};

const gravity = () => {
  document.querySelector(".saturn").classList.add("gravity");
};

const comet = () => {
  setTimeout(() => {
    document.querySelector(".comet").classList.add("comet-fly");
  }, 2000);
  document.querySelector(".comet").classList.remove("comet-fly");
};

export default animation;
