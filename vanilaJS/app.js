const canvas = document.getElementById("jsCanvas")

function onMouseMove(event) {
    //확인용 
    //console.log(event)
    const x = event.offsetX

    const y = event.offsetY
    //console.log(x , y)
}

if(canvas){
  
  canvas.addEventListener("mousemove" ,onMouseMove)//마우스 포인터 동작확인
  
}
