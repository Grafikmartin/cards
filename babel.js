const cards = document.querySelectorAll(".card");
const wrapper = document.querySelector(".cards");

wrapper.addEventListener("mousemove", function ($event) {
	cards.forEach((card) => {
		const rect = card.getBoundingClientRect();
		const x = $event.clientX - rect.left;
		const y = $event.clientY - rect.top;

		card.style.setProperty("--xPos", `${x}px`);
		card.style.setProperty("--yPos", `${y}px`);
	});
});




const navigationElements = document.querySelectorAll("nav ul li");
const nav = document.querySelector("nav");
const slider = document.querySelector(".slider");

navigationElements.forEach((element) => {
	element.addEventListener("mouseenter", () => {
		const { x: elmX } = element.getBoundingClientRect();
		const { x: navX } = nav.getBoundingClientRect();

		slider.style.translate = `${elmX - navX}px 0`;
	});
});

nav.addEventListener("mouseleave", () => {
	nav.classList.remove("animate");
});

nav.addEventListener("mouseenter", () => {
	setTimeout(() => {
		nav.classList.add("animate");
	}, 50);
});
