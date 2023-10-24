let showMoreBtnAtCount = 1;
let showMoreBtnAtCount2 = 3;
let showMoreBtnAtCount3 = 3;
let showMoreBtnAtCount4 = 3;

let levelzero = document.querySelectorAll(".nav-item");
let levelone = document.querySelectorAll(".level-one");
let leveltwo = document.querySelectorAll(".level-two");
let leveltree = document.querySelectorAll(".level-tree");

let showMore = false;

if (levelzero.length - 1 > showMoreBtnAtCount) {
  
  levelzero.forEach((itm, index) => {
    if (index > showMoreBtnAtCount - 1) itm.style.display = "none";
  });
}

if (levelone.length - 1 > showMoreBtnAtCount2) {
  levelone.forEach((itm, index) => {
    if (index > showMoreBtnAtCount2 - 1) itm.style.display = "none";
  });
}

if (leveltwo.length - 1 > showMoreBtnAtCount3) {
  leveltwo.forEach((itm, index) => {
    if (index > showMoreBtnAtCount3 - 1) itm.style.display = "none";
  });
}

if (leveltree.length - 1 > showMoreBtnAtCount4) {
  leveltree.forEach((itm, index) => {
    if (index > showMoreBtnAtCount4 - 1) itm.style.display = "none";
  });
}

if(levelzero.length =1 ){
  document.querySelector(".more-data1").style.display = "none";
}
if(levelone.length <= showMoreBtnAtCount2 ){
  document.querySelector(".more-data2").style.display = "none";
}

if(leveltwo.length <= showMoreBtnAtCount3 ){
  document.querySelector(".more-data3").style.display = "none";
}

if(leveltree.length <= showMoreBtnAtCount4 ){
  document.querySelector(".more-data4").style.display = "none";
}

function myFunctionShowing(target) {
  if (!showMore) {
    showMore = true;
    target.innerText = "- نمایش کمتر";
    levelzero.forEach((itm, index) => {
      if (index > showMoreBtnAtCount - 1) {
        itm.style.visibility = "visible";
        itm.style.display = "block";
      }
    });
  } else {
    showMore = false;
    target.innerText = "+ نمایش بیشتر";
    levelzero.forEach((itm, index) => {
      if (index > showMoreBtnAtCount - 1) {
        // itm.style.visibility = "hidden" ;
        itm.style.display = "none";
      }
    });
  }
}


function myFunctionShowing2(target) {
  if (!showMore) {
    showMore = true;
    target.innerText = "- نمایش کمتر";
    levelone.forEach((itm, index) => {
      if (index > showMoreBtnAtCount2 - 1) {
        itm.style.visibility = "visible";
        itm.style.display = "block";
      }
    });
  } else {
    showMore = false;
    target.innerText = "+ نمایش بیشتر";
    levelone.forEach((itm, index) => {
      if (index > showMoreBtnAtCount2 - 1) {
        // itm.style.visibility = "hidden" ;
        itm.style.display = "none";
      }
    });
  }
}

function myFunctionShowing3(target) {
  if (!showMore) {
    showMore = true;
    target.innerText = "- نمایش کمتر";
    leveltwo.forEach((itm, index) => {
      if (index > showMoreBtnAtCount3 - 1) {
        itm.style.visibility = "visible";
        itm.style.display = "block";
      }
    });
  } else {
    showMore = false;
    target.innerText = "+ نمایش بیشتر";
    leveltwo.forEach((itm, index) => {
      if (index > showMoreBtnAtCount3 - 1) {
        // itm.style.visibility = "hidden" ;
        itm.style.display = "none";
      }
    });
  }
}


function myFunctionShowing4(target) {
  if (!showMore) {
    showMore = true;
    target.innerText = "- نمایش کمتر";
    leveltree.forEach((itm, index) => {
      if (index > showMoreBtnAtCount4 - 1) {
        itm.style.visibility = "visible";
        itm.style.display = "block";
      }
    });
  } else {
    showMore = false;
    target.innerText = "+ نمایش بیشتر";
    leveltree.forEach((itm, index) => {
      if (index > showMoreBtnAtCount4 - 1) {
        // itm.style.visibility = "hidden" ;
        itm.style.display = "none";
      }
    });
  }
}


// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

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
