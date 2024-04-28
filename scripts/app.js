


const audioPlayer = document.querySelector('audio')




// ? PLAY FUNCTION --------------------------------------------------------



const getHtmlElement = document.querySelector('#player')

getHtmlElement.addEventListener('click', function(event) {
    
    let weWantToPlayThis = event.target.innerText
    
    // Replace spaces within two-word ids with "_"
    weWantToPlayThis = weWantToPlayThis.replace(/ /g,"_")
    
    audioPlayer.src = `./sounds/${weWantToPlayThis}.wav`
    audioPlayer.play()
    }
)



// ? RANDOMISE FUNCTION --------------------------------------------------------


const randomiseSample = () => {

    audioPlayer.src = daftSound[(Math.floor(Math.random() * 16))].soundToPlay
    audioPlayer.play()
}

randomiseButton = document.querySelector("#randomizer")
randomiseButton.addEventListener("click", randomiseSample)





// ? ITERATE 8 SAMPLES


const randomiseEight = () => {
    
    for(i = 0; i<8; i++) {
        audioPlayer.src = daftSound[(Math.floor(Math.random() * 16))].soundToPlay
        audioPlayer.play()
        if (i < 8) {
            setTimeout(500);
        }
    // * NEED FUNCTION TO PAUSE / WAIT WITHIN LOOP
    }
}

randomiseButton = document.querySelector("#play-8")
randomiseButton.addEventListener("click", randomiseEight)




// ? ARRAY OF OBJECTS FOR RANDOMISE ------------------------------------------


const daftSound = [
    {idObject: "#work_it", soundToPlay: "./sounds/work_it.wav"},
    {idObject: "#make_it", soundToPlay: "./sounds/make_it.wav"},
    {idObject: "#do_it", soundToPlay: "./sounds/do_it.wav"},
    {idObject: "#makes_us", soundToPlay: "./sounds/makes_us.wav"},
    {idObject: "#harder", soundToPlay: "./sounds/harder.wav"},
    {idObject: "#better", soundToPlay: "./sounds/better.wav"},
    {idObject: "#faster", soundToPlay: "./sounds/faster.wav"},
    {idObject: "#stronger", soundToPlay: "./sounds/stronger.wav"},
    {idObject: "#more_than", soundToPlay: "./sounds/more_than.wav"},
    {idObject: "#hour", soundToPlay: "./sounds/hour.wav"},
    {idObject: "#our", soundToPlay: "./sounds/our.wav"},
    {idObject: "#never", soundToPlay: "./sounds/never.wav"},
    {idObject: "#ever", soundToPlay: "./sounds/ever.wav"},
    {idObject: "#after", soundToPlay: "./sounds/after.wav"},
    {idObject: "#work_is", soundToPlay: "./sounds/work_is.wav"},
    {idObject: "#over", soundToPlay: "./sounds/over.wav"}
]


