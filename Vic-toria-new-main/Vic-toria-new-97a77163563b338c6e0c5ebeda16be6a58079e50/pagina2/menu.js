window.addEventListener("scroll",function(){
    let header = document.querySelector ('.cabeçalho-dois')
    header.classList.toggle('rolagemm',window.scrollY > 0)
})