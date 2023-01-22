const btn = document.querySelector('#btnPlay')
const mySong=document.querySelector('#mySong')
btn.addEventListener ('click',()=>{
    if(btn.innerText=='Play'){
        mySong.play()
        btn.innerText='Pause'
    }
    else{
        mySong.pause()
        btn.innerText='Play'
    }
})