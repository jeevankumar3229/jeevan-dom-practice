let left = document.querySelector(".left1");
let right = document.querySelector(".right1");
let dleft = document.querySelector(".double-left");
let dright = document.querySelector(".double-right");
let leftside = document.querySelector(".left");
let rightside = document.querySelector(".right");
let content = document.querySelector(".content");

function updateButtons() {
  let leftChecked =
    document.querySelectorAll('.left input[type="checkbox"]:checked').length >
    0;
  let rightChecked =
    document.querySelectorAll('.right input[type="checkbox"]:checked').length >
    0;
  right.disabled = !leftChecked;
  left.disabled = !rightChecked;
  let itemsOnRight = rightside.querySelectorAll(".check-set2").length > 0;
  dleft.disabled = !itemsOnRight;
  let itemsOnLeft = leftside.querySelectorAll(".check-set1").length > 0;
  dright.disabled = !itemsOnLeft;
}

document
  .querySelectorAll(
    '.left input[type="checkbox"], .right input[type="checkbox"]'
  )
  .forEach((checkbox) => {
    checkbox.addEventListener("change", updateButtons);
  });

content.addEventListener("click", function (e) {
  if (e.target.classList.contains("right-double-arrow")) {
    let set = document.querySelectorAll(".check-set1");
    set.forEach((item) => {
      item.classList.remove("check-set1");
      item.classList.add("check-set2");
      rightside.appendChild(item);
    });
  }

  if (e.target.classList.contains("left-double-arrow")) {
    let set = document.querySelectorAll(".check-set2");
    set.forEach((item) => {
      item.classList.remove("check-set2");
      item.classList.add("check-set1");
      leftside.appendChild(item);
    });
  }

  if (e.target.classList.contains("left-arrow")) {
    let set = document.querySelectorAll(
      '.right input[type="checkbox"]:checked'
    );
    set.forEach((item) => {
      item.parentElement.classList.remove("check-set2");
      item.parentElement.classList.add("check-set1");
      item.checked = false;
      leftside.appendChild(item.parentElement);
    });
  }

  if (e.target.classList.contains("right-arrow")) {
    let set = document.querySelectorAll('.left input[type="checkbox"]:checked');
    set.forEach((item) => {
      item.parentElement.classList.remove("check-set1");
      item.parentElement.classList.add("check-set2");
      item.checked = false;
      rightside.appendChild(item.parentElement);
    });
  }

  updateButtons();
});

updateButtons();
