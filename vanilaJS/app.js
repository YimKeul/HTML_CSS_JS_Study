const canvas = document.getElementById("jsCanvas")

let painting = false

function stopPainting () {
  painting = false;
}

function onMouseMove(event) {
    //확인용 
    //console.log(event)
    const x = event.offsetX

    const y = event.offsetY
    //console.log(x , y)
}

//마우스 클릭
function onMouseDown (event) {
  
  painting = true
}

//마우스 클릭 해제
function onMouseUp (event) {
  stopPainting()
}



if(canvas){
  canvas.addEventListener("mousemove" ,onMouseMove)//마우스 포인터 동작확인
  canvas.addEventListener("mousedown", onMouseDown)
  canvas.addEventListener("mouseup" , onMouseUp)
  canvas.addEventListener("mouseleave" , stopPainting)
}
