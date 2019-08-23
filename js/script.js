const buttons = document.querySelectorAll('#buttons > span, .operand')
		const displayScreen = document.querySelector('#screen-display')

		const buttons_array = Array.from(buttons);

		const displayOnScreen = (text) =>{
			displayScreen.innerText += text
		}

		buttons_array.map(button => {
			button.addEventListener('click', ()=>{
				displayOnScreen(button.innerText)
			})
		} )

		const solve = () =>{
			try{
				if(Number.isInteger(eval(displayScreen.innerText))){
				  displayScreen.innerText = eval(displayScreen.innerText)							
				}else{
				  displayScreen.innerText = eval(displayScreen.innerText).toFixed(4)									
				}
			}
			catch(err) {displayScreen.innerHTML = `<span style="color:red">Bad Maths!</span>`}			
		}

		const deleter = () =>{
			displayScreen.innerText = displayScreen.innerText.slice(0, -1)
		}

		const clearer = () =>{
			displayScreen.innerText = '';
		}