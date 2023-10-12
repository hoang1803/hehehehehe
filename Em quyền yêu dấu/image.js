var flowers = document.querySelectorAll(".flower");

for (var i = 0; i < flowers.length; i++) {
    var imgUrl = "url(flower" + "" + (i + 1) + ".jpg)";
    flowers[i].style.backgroundImage = imgUrl;
    console.log(i);
}