let VisibleLiCount = 3;
let allSubmenuUls = document.querySelectorAll(".submenu");
let i = 0;

function createShowMoreBtn() {
  let showMoreBtn = document.createElement("a");
  showMoreBtn.innerText = "+ نمایش بیشتر";
  showMoreBtn.setAttribute("data-isactive", "true");
  showMoreBtn.setAttribute("onclick", "toggleLiVisibility(this)");
  showMoreBtn.classList.add("showMoreBtn");
  return showMoreBtn;
}

allSubmenuUls.forEach((ul) => {
  if (ul.childElementCount > VisibleLiCount) {
    for (let i = ul.childElementCount - 1; i >= VisibleLiCount; i--) {
      ul.children[i].style.display = "none";
    }
    ul.appendChild(createShowMoreBtn());
  }
});

function toggleLiVisibility(target) {
  if (target.dataset.isactive == "true") {
    for (
      let i = target.parentElement.childElementCount - 1;
      i >= VisibleLiCount;
      i--
    ) {
      target.parentElement.children[i].style.display = "block";
    }
    target.innerText = "- نمایش کمتر";
    target.dataset.isactive = false;
  } else {
    for (
      let i = target.parentElement.childElementCount - 1;
      i >= VisibleLiCount;
      i--
    ) {
      target.parentElement.children[i].style.display = "none";
    }
    target.innerText = "+ نمایش بیشتر";
    target.dataset.isactive = true;
  }
  target.style.display = "block";
}

function openNav() {
  //document.querySelector(".overlay").style.transform = "translateY(0%)";
  document.querySelector(".sidebar-desktop").style.transform = "translateY(0%)";
}

function closeNav() {
  //document.querySelector(".overlay").style.transform = "translateY(100%)";
  document.querySelector(".sidebar-desktop").style.transform =
    "translateY(100%)";
}

// 3dot
// let matn = document.querySelector("body > div:nth-child(3) > div > div.col-12.col-md-3.sidebar-desktop > div > div:nth-child(8) > p");
let matn = document.querySelector(".text-sidebar3");
matn.innerText = matn.innerText.substring(0, 20) + "...";

// for list
$(function () {
  $(".list-group-item").on("click", function () {
    $(".glyphicon", this)
      .toggleClass("glyphicon-chevron-right")
      .toggleClass("glyphicon-chevron-down");
  });
});

//for deleting filters
function deleteFilter(target) {
  target.parentElement.remove();
}

//for sidebarlist with dropdowns
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelectorAll(".sidebar .has-submenu")
    .forEach(function (element) {
      element.addEventListener("click", function (e) {
        let navLink = element.querySelector(".nav-link");
        let nextEl = navLink.nextElementSibling;
        let dropdownIcon = navLink.querySelector("img");
        if (nextEl && e.target.nodeName != "A") {
          e.stopPropagation();
          e.preventDefault();
          if (nextEl.classList.contains("show")) {
            dropdownIcon.style.transform = "rotate(0deg)";
          } else {
            dropdownIcon.style.transform = "rotate(-90deg)";
          }
          let mycollapse = new bootstrap.Collapse(nextEl, false);
          if (nextEl.classList.contains("show")) {
            mycollapse.hide();
          } else {
            mycollapse.show();
          }
        }
      });
    });
});

// function openNav(element) {

//   element.style.transform = " rotate(-90deg)";

// }

// function closeNav() {
//   //document.querySelector(".overlay").style.transform = "translateY(100%)";
//   element.style.transform = " rotate(90deg)";

//   console.log("Close sidebar!");
// }
