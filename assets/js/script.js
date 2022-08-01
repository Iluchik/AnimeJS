let pathAnime = anime.path('.way');
const start = document.getElementById('start')
const pause = document.getElementById('pause')
const clear = document.getElementById('clear')
let canvas = document.querySelector('.path')
let path = document.getElementById('pathA')
let figure = document.getElementById('point')
let skeletionLoading = document.getElementById('skelet')
let square = document.getElementById('square')
let circle = document.getElementById('circle')
let triangle = document.getElementById('triangle')
const $speed = document.querySelector("#myRange");
let figureFlag = false
let skeletionLoadingFlag = false
let newElementBoxFlag = false
let figureIsSelected = false
let cardIsSelected = false
let newElementIsSelected = false
let isClicked = false
let stopFlag = true
let createFlag = false
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
let checkMark = document.getElementById("checkMark")
let newElemContainer = document.getElementById("newElemContainer")
let colorChange = document.getElementById('colorChange')
const wrapper = document.getElementById('wrapper')
user = document.getElementsByClassName('user')
// const link = document.getElementsByTagName('a')
const textButton = document.getElementsByClassName('text-button')
const durationText = document.getElementById('durationText')
// const sliderElement = document.getElementsByClassName('.slider::-webkit-slider-thumb')
const figures = document.getElementsByClassName('figure-button')
const pathButton = document.getElementsByClassName('path-button')
const newElementButton = document.getElementById('newElementButton')
let ArrayOfElements = document.getElementsByClassName('new-element')
const arrayOfPath = document.getElementsByClassName('new-way')
let arrayOfAnimations = []
let arrayOfTimeManagers = []
let remainderDivision = 0
let index = 0
output.innerHTML = slider.value;


window.setTimeout(() => {
	// Анимация фигуры
let animationFigure = anime({
	direction: "normal",
	loop: true,
	autoplay: false,
	targets: '.round',
	translateX: pathAnime('x'),
	translateY: pathAnime('y'),
	rotate: 0,
	easing: 'linear',
})

	// анимация карточки

let animationCard = anime({
	direction: "normal",
	loop: true,
	autoplay: false,
	targets: '.user-card',
	translateX: pathAnime('x'),
	translateY: pathAnime('y'),
	rotate: 0,
	easing: 'linear',
	});

	// положение карточки
skeletionLoading.onclick = () => {
	cardIsSelected = true
	figureIsSelected = false
	newElementIsSelected = false
	skeletionLoadingFlag = true
	if (stopFlag) {
		animationCard = anime({
			direction: "alternate",
			loop: true,
			autoplay: false,
			targets: '.user-card',
			translateX: pathAnime('x'),
			translateY: pathAnime('y'),
			rotate: 0,
			easing: 'linear',
			duration: 5000
		})
	}
	skeletionLoading.style.marginTop = '-550px'
	skeletionLoading.style.marginLeft = '-30px'
	if (stopFlag) {} else {path.setAttribute("stroke", "none")}
}

	// положение фигуры
figure.onclick = () => {
	figureIsSelected = true
	cardIsSelected = false
	newElementIsSelected = false
	figureFlag = true
	if (stopFlag) {
	animationFigure = anime({
		direction: "alternate",
		loop: true,
		autoplay: false,
		targets: '.round',
		translateX: pathAnime('x'),
		translateY: pathAnime('y'),
		rotate: 0,
		easing: 'linear',
		duration: 5000
	})
	}
	figure.style.marginTop = '-60px'
	figure.style.marginLeft = '-50px'
	if (stopFlag) {} else {path.setAttribute("stroke", "none")}
}



	// при нажатии на пуск
start.onclick = () => {
	stopFlag = false
	requestAnimationFrame(loop)

	path.setAttribute("stroke", "none")

	
}

	// при нажатии на паузу
pause.onclick = () => {
	stopFlag = true
	remainderDivision = counter % 4
	if (remainderDivision === 0) {
		path.setAttribute("stroke", "#8453e3")
	} else if (remainderDivision === 1) {
		path.setAttribute("stroke", "#61c3ff")
	} else if (remainderDivision === 2) {
		path.setAttribute("stroke", "#ff4b4b")
	} else if (remainderDivision === 3) {
		path.setAttribute("stroke", "#18ff74")
	}
}
	
	// при нажатии на очистку

clear.onclick = () => {
	stopFlag = true
	figureFlag = false
	skeletionLoadingFlag = false
	newElementBoxFlag = false
	if (remainderDivision === 0) {
		path.setAttribute("stroke", "#8453e3")
	} else if (remainderDivision === 1) {
		path.setAttribute("stroke", "#61c3ff")
	} else if (remainderDivision === 2) {
		path.setAttribute("stroke", "#ff4b4b")
	} else if (remainderDivision === 3) {
		path.setAttribute("stroke", "#18ff74")
	}
	clearBox()
	}
	

	let i = 0
	newElementButton.onclick = () => {

		createFlag = true
		const sandBox = newElemContainer.insertAdjacentHTML('afterbegin', '<svg id="newElementBox" class="new-element"><path fill="none" stroke="#8453e3" stroke-width="1" id="newElementPath" class="new-way" d="M0,0"></path></svg>')
		let newElementPath = document.getElementById('newElementPath')
		let newElementBox = document.getElementById('newElementBox')
		newElementBox.style.display = 'inline-block'
		newElementBox.style.width = '150px'
		newElementBox.style.height = '150px'
		newElementBox.style.position = 'absolute'
		newElementBox.style.top = '130px'
		newElementBox.style.border = 'solid #8453e3'
		newElementBox.classList.add(`element${i}`)
		arrayOfAnimations.push(`animationElement${i}`)
		arrayOfTimeManagers.push(`timeManagerNewElement${i}`)
		i++
		for (let i = 0; i < ArrayOfElements.length; i++) {
			ArrayOfElements[i].style.marginLeft = `${i * 170}px`
		}
		
		newElementBox.addEventListener("click", (e) => {
			if (createFlag) {
				if (!isClicked) {
					newElementPath.setAttribute("d", "")
					const d = newElementPath.getAttribute("d")
					const { layerX, layerY } = e
					const newD = d + ` M ${layerX} ${layerY}`
					newElementPath.setAttribute("d", newD)

				}
				isClicked = !isClicked
			}
		})

		newElementBox.addEventListener("mousemove", (e) => {
			if (createFlag) {
				if (isClicked) {
					const d = newElementPath.getAttribute("d")
					const { layerX, layerY } = e
					const newD = d + `, L ${layerX} ${layerY}`
					newElementPath.setAttribute("d", newD)

				}
			}
		});
		

	}
	



	checkMark.onclick = () => {
		
		createFlag = false

		for (let i = 0; i < arrayOfPath.length; i++) {
			arrayOfPath[i].setAttribute("stroke", "#8453e3")
			ArrayOfElements[i].style.border ='none'
		}
		
		newElemContainer.addEventListener("click", (e) => {
			let i
			i = e.path[0].classList[1].slice(7)
			index = i
			newElementIsSelected = true
				cardIsSelected = false
				figureIsSelected = false
				if (stopFlag && !createFlag) {
					newElementBoxFlag = true
					arrayOfAnimations[i] = anime({
						direction: "alternate",
						loop: true,
						autoplay: false,
						targets: `.element${i}`,
						translateX: pathAnime('x'),
						translateY: pathAnime('y'),
						rotate: 0,
						easing: 'linear',
						duration: 5000
					})
				}
				if (!createFlag) {
					let k = ArrayOfElements.length - 1 - i
					ArrayOfElements[k].style.marginTop = '-210px'
					ArrayOfElements[k].style.marginLeft = '-74px'
					if (stopFlag) { } else { path.setAttribute("stroke", "none") }
				}
		})

		for (let i = 0; i < arrayOfTimeManagers.length; i++) {
			arrayOfTimeManagers[i] = new TimeMagic(1, 1)
		}
		console.log(arrayOfTimeManagers)
		
		

	}


	
	// рисование пути

		canvas.addEventListener("click", (e) => {
			if (!createFlag) {
				if (!isClicked) {
					path.setAttribute("d", "")
					const d = path.getAttribute("d")
					const { layerX, layerY } = e
					const newD = d + ` M ${layerX} ${layerY}`
					path.setAttribute("d", newD)
				}
				isClicked = !isClicked
			}
		})

		canvas.addEventListener("mousemove", (e) => {
			if (!createFlag) {
				if (isClicked) {
					// console.log(e)
					const d = path.getAttribute("d")
					const { layerX, layerY } = e
					const newD = d + `, L ${layerX} ${layerY}`
					path.setAttribute("d", newD)
				}
			}
		});
	

		


	// функция очистки 
function clearBox() {
	let newD = path.getAttribute("d");
	newD = "";
	path.setAttribute("d", newD);
	}
	
	// при нажатии на кнопку "квадрат"
square.onclick = () => {
   anime({
      targets: '.polymorph',
      d: [
         { value: 'M 0,0 C 50, 0 50, 0 100, 0 100, 50 100, 50 100, 100 50, 100 50, 100 0, 100 0, 50 0, 50 0, 0 Z;' },
         { value: 'M 100,0 C 100, 50 100, 50 100, 100 50, 100 50, 100 0, 100 0, 50 0, 50 0, 0 50, 0 50, 0 100, 0 Z;' }
      ],
      easing: 'easeOutQuad',
      duration: 3000,
      loop: false,
   }); 
	}
	
	// при нажатии на кнопку "круг"
circle.onclick = () => {
   anime({
      targets: '.polymorph',
      d: [
         { value: 'M 0,0 C 50, 0 50, 0 100, 0 100, 50 100, 50 100, 100 50, 100 50, 100 0, 100 0, 50 0, 50 0, 0 Z;' },
         { value: 'M 50,0 C 77.6, 0 100, 22.4 100, 50 100, 77.6 77.6, 100 50, 100 22.4, 100, 0, 77.6, 0, 50 0, 22.4, 22.4, 0, 50, 0 Z;' }
         
      ],
      easing: 'easeOutQuad',
      duration: 3000,
      loop: false
   });
	}
	
	// при нажатии на кнопку "треугольник"

triangle.onclick = () => {
   anime({
      targets: '.polymorph',
      d: [
         { value: 'M 0,0 C 50, 0 50, 0 100, 0 100, 50 100, 50 100, 100 50, 100 50, 100 0, 100 0, 50 0, 50 0, 0 Z;' },
         {
            value: ['M 0,0 C 50, 0 50, 0 100, 0 100, 50 100, 50 100, 100 50, 100 50, 100 0, 100 0, 50 0, 50 0, 0 Z;',
                'M 25, 50 C 37.5, 25 37.5, 25 50, 0 75, 50 75, 50 100, 100 50, 100 50, 100 0, 100 12.5, 75 12.5, 75 25, 50 Z;'] }

      ],
      easing: 'easeOutQuad',
      duration: 3000,
      loop: false
   });
}


	
slider.oninput = function () {
	output.innerText = this.value;
}

	// изменение скорости
	// класс – это расширяемый шаблон кода для создания объектов, который устанавливает в них начальные значения (свойства) и реализацию поведения (методы).
	
class TimeMagic {
	constructor(speed, oldSpeed) {
		this.accumulateTime = -1; //обновляемое время
		// this.accumulateOldTime = -1;
		this.lastTime = -1; //прошлое время
		this.speed = speed;
		this.oldSpeed = oldSpeed;
	}

	updateTime(t) {
	if (this.accumulateTime === -1) {
		this.accumulateTime = t;
	} else {
		const deltaT = t - this.lastTime;
		if (figureIsSelected) {
			timeManagerFigure.accumulateTime += deltaT * timeManagerFigure.speed;
		} else {
			timeManagerFigure.accumulateTime += deltaT * timeManagerFigure.oldSpeed;
		}
		
		if (cardIsSelected) {
			timeManagerCard.accumulateTime += deltaT * timeManagerCard.speed;
		} else {
			timeManagerCard.accumulateTime += deltaT * timeManagerCard.oldSpeed;
		} 

		if (newElementIsSelected) {
			this.accumulateTime += deltaT * this.speed;
		} else {
			this.accumulateTime += deltaT * this.oldSpeed;
		}
		
	}

	this.lastTime = t;
	}


	updateSpeed(speed) {
		this.speed = speed;
	}

	updateOldSpeed(oldSpeed) {
		
		if (figureIsSelected) {
			timeManagerFigure.oldSpeed = oldSpeed
		}
		if (cardIsSelected) {
			timeManagerCard.oldSpeed = oldSpeed
		}
		if (newElementIsSelected) {
			this.oldSpeed = oldSpeed
		}
	}

	getTime() {
		return this.accumulateTime;
	}
}


	const timeManagerFigure = new TimeMagic(1, 1);
	const timeManagerCard = new TimeMagic(1, 1);

	$speed.addEventListener("change", (event) => {
		if (figureIsSelected) {
			timeManagerFigure.updateSpeed(parseFloat(event.target.value));
		} else {
			timeManagerFigure.updateOldSpeed(parseFloat(event.target.value));
		}
		if (cardIsSelected) {
			timeManagerCard.updateSpeed(parseFloat(event.target.value));
		} else {
			timeManagerCard.updateOldSpeed(parseFloat(event.target.value));
		}
		if (newElementIsSelected) {
			arrayOfTimeManagers[index].updateSpeed(parseFloat(event.target.value));
		} else {
			arrayOfTimeManagers[index].updateOldSpeed(parseFloat(event.target.value));
		}
		
	})
	
	
	function loop(t) {

		timeManagerFigure.updateTime(t)
		timeManagerCard.updateTime(t)
		arrayOfTimeManagers.forEach(Element => Element.updateTime(t))
		if (figureFlag) {
			animationFigure.tick(timeManagerFigure.getTime());
		}


		if (skeletionLoadingFlag) {
			animationCard.tick(timeManagerCard.getTime());
		}

		if (newElementBoxFlag) {
			for (let i = 0; i < arrayOfAnimations.length; i++) {
				arrayOfAnimations[i].tick(arrayOfTimeManagers[i].getTime())
			}
		}


		if (!stopFlag) {
			requestAnimationFrame(loop);
		} else {
			animationFigure.pause()
			animationCard.pause()
			for (let i = 0; i < arrayOfAnimations.length; i++) {
				arrayOfAnimations[i].pause()
			}
		}
	}

}, 0);



let counter = 0
colorChange.onclick = () => {
	counter++
	remainderDivision = counter % 4
	if (remainderDivision === 0) {
		colorPurple()
	} else if (remainderDivision === 1) {
		colorBlue()
	} else if (remainderDivision === 2) {
		colorRed()
	} else if (remainderDivision === 3) {
		colorGreen()
	}
}

function colorPurple() {
	colorChange.style.backgroundColor = '#8453e3'
	wrapper.style.borderColor = '#8453e3'
	start.style.borderColor = pause.style.borderColor = clear.style.borderColor = '#8453e3'
	square.style.borderColor = circle.style.borderColor = triangle.style.borderColor = '#8453e3'
	durationText.style.color = slider.style.borderColor = '#8453e3'
	path.setAttribute("stroke", "#8453e3")
	for (let i = 0; i < 3; i++) {
		figures[i].onmouseover = function () {
			figures[i].style.background = "#8453e3";
		};
		figures[i].onmouseleave = function () {
			figures[i].style.background = "none";
		};
		pathButton[i].onmouseover = function () {
			pathButton[i].style.background = "#8453e3"
		};
		pathButton[i].onmouseleave = function () {
			pathButton[i].style.background = "none"
		};
	}
	for (let g = 0; g < 6; g++) {
		textButton[g].style.color = "#8453e3"
		textButton[g].onmouseover = function () {
			textButton[g].style.color = "#292929"
		};
		textButton[g].onmouseleave = function () {
			textButton[g].style.color = "#8453e3"
		};
	}
	document.getElementsByClassName('polymorph')[0].setAttribute("stroke", "#8453e3")
	document.getElementsByClassName('user-card skeleton')[0].style.background = document.getElementsByClassName('user_avatar')[0].style.borderColor = "#5c3b9f"
	document.getElementsByClassName('user_avatar')[0].style.background = document.getElementsByClassName('user_cover')[0].style.background = "#462c7a"
	for (let f = 0; f < 4; f++) {
		user[f].animate([
			// keyframes
			{ backgroundColor: '#8453e3' },
			{ backgroundColor: '#462c7a' },
			{ backgroundColor: '#8453e3' }
		], {
			// timing options
			duration: 3000,
			iterations: Infinity
		});
	}
	slider.style.backgroundColor = "#8453e3"
}
function colorBlue() {
	colorChange.style.backgroundColor = '#61c3ff'
	wrapper.style.borderColor = '#61c3ff'
	start.style.borderColor = pause.style.borderColor = clear.style.borderColor = '#61c3ff'
	square.style.borderColor = circle.style.borderColor = triangle.style.borderColor = '#61c3ff'
	durationText.style.color = slider.style.borderColor = '#61c3ff'
	path.setAttribute("stroke", "#61c3ff")
	for (let i = 0; i < 3; i++) {
		figures[i].onmouseover = function () {
			figures[i].style.background = "#61c3ff";
		};
		figures[i].onmouseleave = function () {
			figures[i].style.background = "none";
		};
		pathButton[i].onmouseover = function () {
			pathButton[i].style.background = "#61c3ff"
		};
		pathButton[i].onmouseleave = function () {
			pathButton[i].style.background = "none"
		};
	}
	for (let g = 0; g < 6; g++) {
		textButton[g].style.color = "#61c3ff"
		textButton[g].onmouseover = function () {
			textButton[g].style.color = "#292929"
		};
		textButton[g].onmouseleave = function () {
			textButton[g].style.color = "#61c3ff"
		};
	}
	document.getElementsByClassName('polymorph')[0].setAttribute("stroke", "#61c3ff")
	document.getElementsByClassName('user-card skeleton')[0].style.background = document.getElementsByClassName('user_avatar')[0].style.borderColor = "#4286b1"
	document.getElementsByClassName('user_avatar')[0].style.background = document.getElementsByClassName('user_cover')[0].style.background = "#387398"

	for (let f = 0; f < 4; f++) {
		user[f].animate([
			// keyframes
			{ backgroundColor: '#61c3ff' },
			{ backgroundColor: '#387398' },
			{ backgroundColor: '#61c3ff' }
		], {
			// timing options
			duration: 3000,
			iterations: Infinity
		});
	}
	slider.style.backgroundColor = "#61c3ff"
}
function colorRed() {
	colorChange.style.backgroundColor = '#ff4b4b'
	wrapper.style.borderColor = '#ff4b4b'
	start.style.borderColor = pause.style.borderColor = clear.style.borderColor = '#ff4b4b'
	// start.style.backgroundColor = pause.style.backgroundColor = clear.style.backgroundColor = '#ff4b4b'
	square.style.borderColor = circle.style.borderColor = triangle.style.borderColor = '#ff4b4b'
	durationText.style.color = slider.style.borderColor = '#ff4b4b'
	path.setAttribute("stroke", "#ff4b4b")
	for (let i = 0; i < 3; i++) {
		figures[i].onmouseover = function () {
			figures[i].style.background = "#ff4b4b";
		};
		figures[i].onmouseleave = function () {
			figures[i].style.background = "none";
		};
		pathButton[i].onmouseover = function () {
			pathButton[i].style.background = "#ff4b4b"
		};
		pathButton[i].onmouseleave = function () {
			pathButton[i].style.background = "none"
		};
	}
	for (let g = 0; g < 6; g++) {
		textButton[g].style.color = "#ff4b4b"
		textButton[g].onmouseover = function () {
			textButton[g].style.color = "#292929"
		};
		textButton[g].onmouseleave = function () {
			textButton[g].style.color = "#ff4b4b"
		};
	}
	document.getElementsByClassName('polymorph')[0].setAttribute("stroke", "#ff4b4b")
	document.getElementsByClassName('user-card skeleton')[0].style.background = document.getElementsByClassName('user_avatar')[0].style.borderColor = "#c23838"
	document.getElementsByClassName('user_avatar')[0].style.background = document.getElementsByClassName('user_cover')[0].style.background = "#9a2f2f"

	for (let f = 0; f < 4; f++) {
		user[f].animate([
			// keyframes
			{ backgroundColor: '#ff4b4b' },
			{ backgroundColor: '#9a2f2f' },
			{ backgroundColor: '#ff4b4b' }
		], {
			// timing options
			duration: 3000,
			iterations: Infinity
		});
	}
	slider.style.backgroundColor = "#ff4b4b"
}
function colorGreen() {
	colorChange.style.backgroundColor = '#18ff74'
	wrapper.style.borderColor = '#18ff74'
	start.style.borderColor = pause.style.borderColor = clear.style.borderColor = '#18ff74'
	square.style.borderColor = circle.style.borderColor = triangle.style.borderColor = '#18ff74'
	durationText.style.color = slider.style.borderColor = '#18ff74'
	path.setAttribute("stroke", "#18ff74")
	for (let i = 0; i < 3; i++) {
		figures[i].onmouseover = function () {
			figures[i].style.background = "#18ff74";

		};
		figures[i].onmouseleave = function () {
			figures[i].style.background = "none";
		};
		pathButton[i].onmouseover = function () {
			pathButton[i].style.background = "#18ff74"
		};
		pathButton[i].onmouseleave = function () {
			pathButton[i].style.background = "none"
		};
	}

	for (let g = 0; g < 6; g++) {
		textButton[g].style.color = "#18ff74"
		textButton[g].onmouseover = function () {
			textButton[g].style.color = "#292929"
		};
		textButton[g].onmouseleave = function () {
			textButton[g].style.color = "#18ff74"
		};
	}
	document.getElementsByClassName('user-card skeleton')[0].style.background = document.getElementsByClassName('user_avatar')[0].style.borderColor = "#109b48"
	document.getElementsByClassName('user_avatar')[0].style.background = document.getElementsByClassName('user_cover')[0].style.background = "#2c7a3d"

	document.getElementsByClassName('polymorph')[0].setAttribute("stroke", "#18ff74")

	for (let f = 0; f < 4; f++) {
		user[f].animate([
			// keyframes
			{ backgroundColor: '#18ff74' },
			{ backgroundColor: '#2c7a3d' },
			{ backgroundColor: '#18ff74' }
		], {
			// timing options
			duration: 3000,
			iterations: Infinity
		});
	}
	slider.style.backgroundColor = "#18ff74"

}

// const elementArray = []
// let i = 0

