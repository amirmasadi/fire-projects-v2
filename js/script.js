// set addDeliveryElement height same as selectDeliveryFirstElement after content load
document.addEventListener("DOMContentLoaded", function () {
  let selectDeliveryFirstElement = document.querySelector(
    ".select-delivery div:first-child"
  );
  let addDeliveryElement = document.querySelector(".add-delivery");
  addDeliveryElement.style.height = `${selectDeliveryFirstElement.offsetHeight}px`;
});

new DataTable("#myTable", {
  responsive: true,
  language: {
    decimal: "",
    emptyTable: "داده ای مطابق با عبارت جستجو شده یافت نشد",
    info: "نمایش _START_ تا _END_ از _TOTAL_ کل ورودی ها",
    infoEmpty: "نمایش 0 تا 0 از 0 کل رکورد",
    infoFiltered: "(فیلتر شده از _MAX_ تعداد رکورد)",
    infoPostFix: "",
    thousands: ",",
    lengthMenu: "نمایش _MENU_ تا از کل ورودی ها",
    loadingRecords: "بارگزاری...",
    processing: "",
    search: "جستجو: ",
    zeroRecords: "داده ای مطابق با عبارت جستجو شده یافت نشد",
    paginate: {
      first: "اول",
      last: "آخر",
      next: "بعدی",
      previous: "قبلی",
    },
  },
});

function myFunction(id) {
  var element = document.getElementById(id);
  let allTypeofpayments = document.querySelectorAll(".typeofpayment");
  allTypeofpayments.forEach((itm) => {
    itm.style.backgroundColor = "#fff";
  });
  element.style.backgroundColor = "#e9e9f5";
  element.style.transition = "0.6s";
}

// products with sidebar project
let showMoreBtnAtCount = 3;
let sidebarlistItmes = document.querySelectorAll(".sidebar-list-item");
let showMore = false;
if (sidebarlistItmes.length - 1 > showMoreBtnAtCount) {
  sidebarlistItmes.forEach((itm, index) => {
    if (index > showMoreBtnAtCount - 1) itm.style.display = "none";
  });
}

function myFunctionShowing(target) {
  if (!showMore) {
    showMore = true;
    target.innerText = "- نمایش کمتر";
    sidebarlistItmes.forEach((itm, index) => {
      if (index > showMoreBtnAtCount - 1) {
        itm.style.visibility = "visible";
        itm.style.display = "block";
      }
    });
  } else {
    showMore = false;
    target.innerText = "+ نمایش بیشتر";
    sidebarlistItmes.forEach((itm, index) => {
      if (index > showMoreBtnAtCount - 1) {
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
  console.log("Open sidebar!");
}

function closeNav() {
  //document.querySelector(".overlay").style.transform = "translateY(100%)";
  document.querySelector(".sidebar-desktop").style.transform =
    "translateY(100%)";

  console.log("Close sidebar!");
}

// 3dot
// let matn = document.querySelector("body > div:nth-child(3) > div > div.col-12.col-md-3.sidebar-desktop > div > div:nth-child(8) > p");
// let matn = document.querySelector(".text-sidebar3");
// matn.innerText = matn.innerText.substring(0, 20) + "...";

// for list
$(function () {
  $(".list-group-item").on("click", function () {
    $(".glyphicon", this)
      .toggleClass("glyphicon-chevron-right")
      .toggleClass("glyphicon-chevron-down");
  });
});
