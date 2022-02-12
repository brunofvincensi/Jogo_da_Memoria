let par = []

function flipCard()
{
   if( this.classList.length == 1){
 
     if(par.length < 2){
    this.classList.add("flip")
    par.push(this)

    if(par.length > 1){
        setTimeout(validacao, 500)  
    }}
   }else{
       alert("carta ja selecionada")
   }
}

function validacao(){

    if(par[0].dataset.icon != par[1].dataset.icon){

        par.forEach(d => d.classList = "card")
    }
    else{
        gameWin()
    }
    par = []

    
}

function gameWin(){
  let cardsFliped = document.getElementsByClassName("card flip")
  let gameOver = document.getElementById("gameOver") 
    if(cardsFliped.length == 20){
        gameOver.style.display = "flex"
        
    }
}