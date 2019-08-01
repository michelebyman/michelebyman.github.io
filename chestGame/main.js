let div = document.querySelector('.boxes');
let button = document.querySelector('button');
let score = document.querySelector('.yourScore');
let youLost = document.querySelector('.tryAgain');
let highScore = 0;
let toggle = true;


// Array of imgage src's 
let treasure = [
    'chest-open.png',
    'chest-open.png',
    'chest-jewel.png'
];

// renders the images using the array above
let myFun = (classNameFromArray) => {    
    let image = document.createElement('img');
    image.src = 'chest-closed.png';
    image.className = classNameFromArray;
    document.querySelector('.boxes').appendChild(image);
};

// sorts the array and then calls the function above as many times as the array's length
treasure.sort(() => Math.random() - 0.5).forEach(myFun);


//chech if user scores by matching the className's 
let checkIfUserWinOrLose = (e) => {        
    if (e.target.className === 'chest-jewel.png') {
        highScore++;
        score.innerHTML = highScore;
        e.target.src = e.target.className;
        toggle = false;
        toggleEvent();
        
    } else {
        youLost.innerHTML = 'You lost, better luck next time!';
        e.target.src = e.target.className;
        toggle = false;
        toggleEvent();
    }
};

let toggleEvent = ()=> {
    if(toggle){
        let img = document.querySelectorAll('img');
        //adds event and calls a function to validate score 
        img.forEach((image) => {
            image.addEventListener('click', checkIfUserWinOrLose);
        });
    } else {
        let img = document.querySelectorAll('img');
        //adds event and calls a function to validate score 
        img.forEach((image) => {
            image.removeEventListener('click', checkIfUserWinOrLose);
        });
    }
};

toggleEvent();

//sorts the array so the diamond changes place and replaces the opened chest with 
button.addEventListener('click', () => {
    youLost.innerHTML = '';
    treasure.sort(() => Math.random() - 0.5);
    let img = document.querySelectorAll('img');
    img.forEach((image, index)=>{
        image.src = 'chest-closed.png';
        image.className = treasure[index];
    });
   toggle = true;
   toggleEvent();
});