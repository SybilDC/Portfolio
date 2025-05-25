window.onload = function () {
  const boxes = document.querySelectorAll(".box");
  const boxes2 = document.querySelectorAll(".box2");
  const boxes3 = document.querySelectorAll(".box3");

  function checkScrollPosition() {
    const triggerPoint = window.innerHeight * 0.4;

    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;
      box.classList.toggle("active", boxTop < triggerPoint);
    });

    boxes2.forEach((box2) => {
      const boxTop2 = box2.getBoundingClientRect().top;
      box2.classList.toggle("active", boxTop2 < triggerPoint);
    });

    boxes3.forEach((box3) => {
      const boxTop3 = box3.getBoundingClientRect().top;
      box3.classList.toggle("active", boxTop3 < triggerPoint);
    });
  }

  window.addEventListener("scroll", checkScrollPosition);
  window.addEventListener("load", checkScrollPosition);
};
