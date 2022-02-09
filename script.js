const container = document.createElement("div");
container.className = "container";
document.body.append(container);

const banner = document.createElement("div");
banner.className = "banner";
banner.style.height = innerHeight + "px";

const main = document.createElement("main");

container.append(banner, main);

const mainCaption = document.createElement("h2");
mainCaption.className = "main__caption";
mainCaption.innerText = "4 types of plants";
main.append(mainCaption);

class Plant {
  constructor(capt, imgPath, cnt, mini) {
    this.caption = capt;
    this.pic = imgPath;
    this.count = cnt;
    this.imgType = mini;
  }
}
const data = [
  new Plant("Foliage", "img/Rectangle3.png", 21, "img/plant1.svg"),
  new Plant("Pucculent", "img/Rectangle2.png", 4, "img/plant2.svg"),
  new Plant("Flower", "img/Rectangle1.png", 8, "img/plant3.svg"),
  new Plant("Fruit", "img/Rectangle.png", 10, "img/plant4.svg"),
];

let mainContent = "";
data.forEach((plant) => {
  mainContent += `
		<div class="main__item" style="background-image: url(${plant.pic})" >
			<h3>${plant.caption}</h3>
			<div class="main__item-text">${plant.count} plants</div>
			<img alt="${plant.caption}" src="${plant.imgType}">
		</div>
	`;
});

main.innerHTML += mainContent;
