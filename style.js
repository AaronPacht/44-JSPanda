document.addEventListener('DOMContentLoaded', (e)=>{
    let propic=document.querySelector(".highlight>img")
    propic.src="https://placebear.com/200/300"
    
    let skypic=document.querySelector(".portfolio-image>img")
    skypic.src="https://placebear.com/200/300"

    let name=document.querySelector('.bio-info-name')
    name.innerText='Aaron'
    
    let employ=document.querySelector('#employment>.info-title')
    employ.innerText='jobs'

    let body=document.querySelector('body')
    body.style.color="darkgreen"

    let highlights=document.querySelectorAll(".highlight")
    for(let x=0; x<highlights.length;x++){
        highlights[x].style.color='red'
    }

    let font=document.querySelector('h1')
    font.style.fontFamily='monospace'

    let round=document.querySelectorAll('a')
    round.forEach(r=>r.style.backgroundColor='red')

    let nameField=document.querySelector('#name')
    nameField.placeholder='identify yourself'
    
    let msgField=document.querySelector('#message')
    msgField.placeholder='state your business'

    nameField.value='your nemesis'

    let email=document.querySelector('#email')
    email.value='koalathebear@gmail.com'

    let submit=document.querySelector("#submit")
    submit.value='En garde!'
    submit.disabled=true

    info=document.querySelector('.bio-info')
    info.innerHTML=''
})