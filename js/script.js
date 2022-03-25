const list = document.querySelectorAll('.cards-card')
const cardInfoTitle = document.querySelector('.cards-info-title')
const cardInfoText = document.querySelector('.cards-info-text')


list.forEach(item => {
	item.addEventListener('click', (e) => {
		list.forEach(el => {
			el.classList.remove('active');
		});
		item.classList.add('active')

		console.log(item.ariaPlaceholder)

		switch (item.ariaPlaceholder) {
			case "1":
				cardInfoTitle.innerHTML = 'Easy Settings';
				cardInfoText.innerHTML = `The source of powerful qorld and making future sure. Its a  straight forward software. <br> <br>Where possibilities are made possible. We must have expand <span> Possibilities of better tomorrow.</span> The directly secure of your network deliveing  services.`
				break;
			case "2":
				cardInfoTitle.innerHTML = 'User Friendly';
				cardInfoText.innerHTML = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, <span>making it over 2000 years old.</span>`
				break;
			case "3":
				cardInfoTitle.innerHTML = 'Full secured';
				cardInfoText.innerHTML = `Richard McClintock, a Latin professor at <span>Hampden-Sydney College in Virginia</span>, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.`
				break;
			case "4":
				cardInfoTitle.innerHTML = 'Clean Code';
				cardInfoText.innerHTML = `Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.<br><br> <span>This book is a treatise on the theory of ethics, very popular during the Renaissance.</span> The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
				break;
			default:
		};

	})
})
