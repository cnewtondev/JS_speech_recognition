function speechInput(){
    window.SpeechRecognition = window.SpeechRecognition || 
    window.webkitSpeechRecognition
    
    const recognition = new SpeechRecognition() 
    
    let p = document.createElement('p')
    const words = document.querySelector('.words')
    words.appendChild(p)
     
    //convert speech into the actual words
    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')

        p.textContent = transcript;
        // if statement allows us to set p tag and start new one instead of
        // replacing current p tag each time. comment out if statement to see
        //what i'm talking about
        if(e.results[0].isFinal){
            p = document.createElement('p')
            words.appendChild(p)
        }
        
        console.log(transcript)
    })

    recognition.addEventListener('end', recognition.start)
    recognition.start()
    
    recognition.start()
}
