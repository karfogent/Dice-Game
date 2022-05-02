const playBtn = document.getElementById('play-btn')

playBtn.addEventListener('click', function() {
    const randomNumber1 = Math.floor(Math.random()*6+1);
    const randomNumber2 = Math.floor(Math.random()*6+1);
    if (randomNumber1>randomNumber2){
        DiceGame = "Player 1 is WIN&#128552;"
    }
    else if(randomNumber1<randomNumber2){
        DiceGame = "Player 2 is WIN&#128561;"
    }
    else{
        DiceGame = "Draw &#128524;";
    }
    let src1 = `images/dice${randomNumber1}.png`;
    let src2 = `images/dice${randomNumber2}.png`;
    document.querySelector('.img1').setAttribute("src", src1);
    document.querySelector('.img2').setAttribute("src", src2);
    document.querySelector('h1').innerHTML = DiceGame;
})