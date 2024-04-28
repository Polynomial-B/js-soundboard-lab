


const audioPlayer = document.querySelector('audio')




// ? PLAY FUNCTION ------------------------------------------------------------



const getHtmlElement = document.querySelector('#player')

getHtmlElement.addEventListener('click', function(event) {
    
    let weWantToPlayThis = event.target.innerText
    
    // Replace spaces within two-word ids with "_"
    weWantToPlayThis = weWantToPlayThis.replace(/ /g,"_")
    
    audioPlayer.src = `./sounds/${weWantToPlayThis}.wav`
    audioPlayer.play()
    }
)


// ? LAZY FUNCTION --------------------------------------------------------
// PLAY EACH SOUND IN SEQUENCE BY CLICKING ONE BUTTON


    let clickCount = 0
const lazyPlayback = () => {
    if(clickCount <15) {
    clickCount ++
    } else {
        clickCount = 0
    }
    audioPlayer.src = daftSound[clickCount].soundToPlay
    audioPlayer.play()
    console.log(clickCount)
}

lazyButton = document.querySelector("#lazy-play")
lazyButton.addEventListener("click", lazyPlayback)


// ? RANDOMISE FUNCTION --------------------------------------------------------


const randomiseSample = () => {

    audioPlayer.src = daftSound[(Math.floor(Math.random() * 16))].soundToPlay
    audioPlayer.play()

}

randomiseButton = document.querySelector("#randomizer")
randomiseButton.addEventListener("click", randomiseSample)






// ? RANDOMISE 8 SAMPLES -------------------------------------------------
// ! NOT WORKING...

// const randomiseEight = () => {
    
//     for(i = 0; i<8; i++) {
//         audioPlayer.src = daftSound[(Math.floor(Math.random() * 16))].soundToPlay
//         audioPlayer.play()

    // * NEED FUNCTION TO PAUSE / WAIT WITHIN LOOP - ERROR WITH PROMISES
//     }
// }

// randomiseButton = document.querySelector("#play-8")
// randomiseButton.addEventListener("click", randomiseEight)




// ? ARRAY OF OBJECTS FOR RANDOMISE ------------------------------------------


const daftSound = [
    {idObject: "#work_it", soundToPlay: "./sounds/work_it.wav"},
    {idObject: "#harder", soundToPlay: "./sounds/harder.wav"},
    {idObject: "#make_it", soundToPlay: "./sounds/make_it.wav"},
    {idObject: "#better", soundToPlay: "./sounds/better.wav"},
    {idObject: "#do_it", soundToPlay: "./sounds/do_it.wav"},
    {idObject: "#faster", soundToPlay: "./sounds/faster.wav"},
    {idObject: "#makes_us", soundToPlay: "./sounds/makes_us.wav"},
    {idObject: "#stronger", soundToPlay: "./sounds/stronger.wav"},
    {idObject: "#more_than", soundToPlay: "./sounds/more_than.wav"},
    {idObject: "#ever", soundToPlay: "./sounds/ever.wav"},
    {idObject: "#hour", soundToPlay: "./sounds/hour.wav"},
    {idObject: "#after", soundToPlay: "./sounds/after.wav"},
    {idObject: "#our", soundToPlay: "./sounds/our.wav"},
    {idObject: "#work_is", soundToPlay: "./sounds/work_is.wav"},
    {idObject: "#never", soundToPlay: "./sounds/never.wav"},
    {idObject: "#over", soundToPlay: "./sounds/over.wav"}
]


