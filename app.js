let questions = ["What does my Instagram tell you about me?", "What compliment do you think I hear the most?", "Do I seem like more of a creative or analytical type? Explain"
]
// console.log(questions);

//We need to have a variable for each input, which will be our playerA and playerB. This will eventually store the user input.
//Right now these are empty, but we've grabbed the location.
//Step 1:
//GLOBAL VARIABLES
let playerA = document.querySelector('.playerA')
// console.log(playerA)
let playerB = document.querySelector('.playerB')
// console.log(playerB)
let playerAResult = ''
let playerBResult = ''
//1. Let's add an event listener to our form on players.html
	//Find and store the location of our form in a variable
let formLocation = document.querySelector('#gameForm')
// console.log(formLocation)
	//Create a function that hides the form inside the div with a class "allText"
	//We are going to have this function run right after we store our user input
	//***JS is read top to bottom. So we created this function above our event listener, but it does not run
	//until the function inside our event listener is invoked. So when the compiler reads every line of code, 
	//the function will be available to us.
	function hideForm() {
		helper()
		let divLocation = document.querySelector('#gameForm')
		divLocation.style.display = 'none'
	}
	//For conceptual purposes:
	//This function will be used as a callback more than once in our app.js
	function helper() {
		// console.log("Your helper function has detected that this works!")
	}
    
    function navArray() {
        let i = 0;
        let notification = document.createElement("P")
        notification.setAttribute("class", "notification")
        notification.innerText = `${playerAResult} is asking ${playerBResult} questions`
        document.body.prepend(notification)
        //create a P tag with DOM manipulation
        let pTag = document.createElement("P");
        pTag.setAttribute("class", "pTag")
        let pTagLocation = document.querySelector(".pTag")
        //set inner text for p tag
        pTag.innerText = `${questions[i]}`
        //append this to div on players.html
        document.body.appendChild(pTag)
        //create next (new question) button
        let nextButton = document.createElement("button")
        nextButton.setAttribute("class", "nextButton")
        nextButton.innerText = "NEXT"
        document.body.appendChild(nextButton)
        //on each click iterate through the array
        let nextButtonLocation = document.querySelector(".nextButton")
        nextButtonLocation.addEventListener("click", function(e){
            // console.log("this works")
            // create condition to handle iteration if i is less than the questions array
            if (i === questions.length - 1) {
                //--->> this is where you continue with the game <----
                console.log("array is finished")
                let returnHome = document.createElement("a")
                returnHome.innerText = "START OVER"
                returnHome.setAttribute("href", "./players.html")
                document.body.appendChild(returnHome)
            } else if (i < questions.length - 1) {
                i++
                if(i % 2 !== 0){
                    notification.innerText = `${playerBResult} is asking ${playerAResult} questions`
                    console.log("we are inside our nested if statement")
                }else if (i % 2 === 0){
                    notification.innerText = `${playerAResult} is asking ${playerBResult} questions`
                }
                pTag.innerText = questions[i]
            }
            
        })
    }
	//BEST PRACTICE: .addEventListeners are typically organized at the bottom of the code
	//Attach our event listener to this form
	//submit is looking for any notion of submit happening in our form on players.html
    formLocation.addEventListener("submit", function(e) {
    // console.log(e.target)
	// helper()
	//Add our prevent default to stop default form submission behavior.
	e.preventDefault()
	//So now that preventDefault is stopping the default form submission, we can save what
	//the user typed into the input the fields
	//.value will give us the user input
	//***LET'S MAKE THIS DATA ACCESSIBLE IN THE GLOBAL SCOPE***
	// console.log("Here is the value for playerA:")
	// console.log(playerA.value)
	playerAResult = playerA.value
	console.log(playerAResult)
	// console.log("Here is the value for playerB:")
	// console.log(playerB.value)
	playerBResult = playerB.value
	console.log(playerBResult)
	hideForm()
    navArray()
})






