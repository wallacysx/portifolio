class Livro{
    autor
    titulo
    ano
    genero
    #disponivel
    constructor(autor, titulo, ano, genero){
        this.autor = autor
        this.titulo = titulo
        this.ano = ano
        this.genero = genero
        this.#disponivel = true        
    }
    alteraDisponivel(){
        this.#disponivel = !this.#disponivel;
    }
    setDisponivel(disponivel){
        this.#disponivel = disponivel
    }
    getDisponivel(){
        return this.#disponivel
    }
    
}