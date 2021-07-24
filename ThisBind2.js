function Pessoa(){
    this.idade = 0

    const self = this
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this),1000)
}
new Pessoa  //en este caso se llama new para solo instanciar la función 