function siguiente(n){

document
.querySelectorAll(
".pantalla"
)

.forEach(

p=>

p.classList
.add(
"oculta"
)

)

document

.getElementById(

"pantalla"+n

)

.classList

.remove(

"oculta"

)

}



function mostrarExtra(){

siguiente(4)

}