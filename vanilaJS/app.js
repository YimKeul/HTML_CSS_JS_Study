const canvas = document.getElementById("jsCanvas")

function onMouseMove (event) {
  console.log(event)

}

if(canvas){
  
  canvas.addEventListener("mousemove" ,onMouseMove)//마우스 포인터 동작확인
  
}
