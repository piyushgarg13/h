const main= document.getElementsByClassName("main");
 const img = document.getElementsByTagName("img");
 main[0].addEventListener("mousemove",(event)=>{
       const x= event.clientX-event.target.offsetLeft;
       const y=event.clientY-event.target.offsetTop;
       img[0].style.transformOrigin=`${x}px ${y}px`;
       img[0].style.transform=`scale(2)`;
 })
 main[0].addEventListener("mouseleave",(e)=>{
      img[0].style.transformOrigin=`center center`;
      img[0].style.transform=`scale(1)`;
 })