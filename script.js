"use strict";
const one = document.querySelector(".list-1");
const two = document.querySelector(".list-2");
const three = document.querySelector(".list-3");
const four = document.querySelector(".list-4");
const five = document.querySelector(".list-5");
const submit = document.querySelector(".submit");
const mainDiv = document.querySelector(".main-div");
const thankYou = document.querySelector(".Thank-you");
const selection = document.querySelector(".selection");

// clicked = false;
const oneClicked = function () {
  one.classList.add("clicked");
  two.classList.remove("clicked");
  three.classList.remove("clicked");
  four.classList.remove("clicked");
  five.classList.remove("clicked");
  selection.textContent = `You selected 1 out of 5`;
};

const twoClicked = function () {
  one.classList.remove("clicked");
  two.classList.add("clicked");
  three.classList.remove("clicked");
  four.classList.remove("clicked");
  five.classList.remove("clicked");
  selection.textContent = `You selected 2 out of 5`;
};
const threeClicked = function () {
  one.classList.remove("clicked");
  two.classList.remove("clicked");
  three.classList.add("clicked");
  four.classList.remove("clicked");
  five.classList.remove("clicked");
  selection.textContent = `You selected 3 out of 5`;
};
const fourClicked = function () {
  one.classList.remove("clicked");
  two.classList.remove("clicked");
  three.classList.remove("clicked");
  four.classList.add("clicked");
  five.classList.remove("clicked");
  selection.textContent = `You selected 4 out of 5`;
};
const fiveClicked = function () {
  one.classList.remove("clicked");
  two.classList.remove("clicked");
  three.classList.remove("clicked");
  four.classList.remove("clicked");
  five.classList.add("clicked");
  selection.textContent = `You selected 5 out of 5`;
};

document.getElementById("list-1").addEventListener("click", function () {
  oneClicked();
  submit.addEventListener("click", function () {
    // submitted = true;
    mainDiv.classList.add("hidden");
    thankYou.classList.remove("hidden");
  });
});

document.getElementById("list-2").addEventListener("click", function () {
  twoClicked();
  submit.addEventListener("click", function () {
    // submitted = true;
    mainDiv.classList.add("hidden");
    thankYou.classList.remove("hidden");
  });
});
document.getElementById("list-3").addEventListener("click", function () {
  threeClicked();
  submit.addEventListener("click", function () {
    // submitted = true;
    mainDiv.classList.add("hidden");
    thankYou.classList.remove("hidden");
  });
});
document.getElementById("list-4").addEventListener("click", function () {
  fourClicked();
  submit.addEventListener("click", function () {
    // submitted = true;
    mainDiv.classList.add("hidden");
    thankYou.classList.remove("hidden");
  });
});
document.getElementById("list-5").addEventListener("click", function () {
  fiveClicked();
  submit.addEventListener("click", function () {
    // submitted = true;
    mainDiv.classList.add("hidden");
    thankYou.classList.remove("hidden");
  });
});
