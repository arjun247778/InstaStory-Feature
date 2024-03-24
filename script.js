var arr = [
    {
        dp:"https://images.unsplash.com/photo-1710796987486-0e0fa9ef9265?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",story:"https://images.unsplash.com/photo-1710880694382-e2b370885ae9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1709248835088-03bb0946d6ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",story:"https://images.unsplash.com/photo-1707343846292-0c11438d145f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://plus.unsplash.com/premium_photo-1710329488094-94b1ca7c312e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1710869909192-52efcacee8b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1711026964454-c7729453cba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1620163280053-68782bd98475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D"
    },
]
var storys = document.querySelector('.storys')
var clutter = ""
arr.forEach(function(elem,idx){
    clutter += `<div  class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>
`
});
storys.innerHTML = clutter
storys.addEventListener('click',function(dets){
  document.querySelector('.full-screen').style.display = "block"
  document.querySelector('.full-screen').style.backgroundImage = `url(${arr[dets.target.id].story})`
  setTimeout(function(){
    document.querySelector('.full-screen').style.display = "none"
  }, 3000);
});
