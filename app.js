const body = document.querySelector('body')

body.addEventListener('mousemove', (event) => {
  const eyes = document.querySelectorAll('.eye-black')

  eyes.forEach(eye => {
    const x = eye.getBoundingClientRect().left + eye.clientWidth / 2
    const y = eye.getBoundingClientRect().top + eye.clientHeight / 2

    const radian = Math.atan2(event.pageX - x, event.pageY - y)
    const rotate = radian * (180 / Math.PI) * -1

    eye.style.transform = `rotate(${rotate}deg)`

  })
})

const label=document.querySelectorAll("label")
label.forEach(l=>{
  const inputOfLabel=l.parentElement.querySelector("input")
  l.onclick=()=>{
    l.classList.toggle("activeLabel")
    inputOfLabel.classList.toggle("activeInput")
    console.log(l.getAttribute("data-number"))
    if(l.getAttribute("data-number")==="last"){
      document.querySelector(".input2").style="display:flex"
    }
  }
})


const myAudio=document.getElementById("myAudio")



let isAngry=[false,false,false,false,false,false,false];
let btn=document.querySelector(".btn")

const eye=document.querySelectorAll(".eye")
const angry=document.querySelector(".angry")
const inputs=document.querySelectorAll("input[type='text']")
inputs.forEach((i,index)=>{
  i.onblur=()=>{
    if(i.value.length<5){
      i.classList.add("invalidInput")
      myAudio.play()
      btn.classList.add("inactiveBtn")
      isAngry[index]=true
      for(let i=0 ;i<=eye.length;i++){
        eye[i].style=`background-color:#b13f54`
        angry.style="display:block"
      }
    }
    else{
      i.classList.remove("invalidInput")
      document.getElementById("myAudio2").play()
      .then(_=>setTimeout(_=>document.getElementById("myAudio2").pause(),2000))
      .catch(err=>console.log(err))
      isAngry[index]=false;
      const check=isAngry.find(ele=>ele===true)
      if(!check){
        btn.classList.remove("inactiveBtn")
        angry.style="display:none"
        myAudio.pause()
        for(let i=0 ;i<=eye.length;i++){
          eye[i].style=`background-color:white`
        }

      }

    }
  }
})

btn.onclick=(e)=>{
  e.preventDefault()
  const check=isAngry.find(ele=>ele===true)
  const checkValue=document.querySelectorAll(".value")
  const checkedValue=Array.from(checkValue).find(ele=>ele.value.length===0)
  
  if(!check&&!checkedValue){
    document.querySelector(".finish").style='display:flex'
  }else{
    alert("no")
  }
}


