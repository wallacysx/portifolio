const Livro = require('./Livro.js');
class Biblioteca{
    Usuarios = []
    Livros = []

    adicionaLivro(livro){
        this.Livros.push(livro)
    }
    geraLivro(){
        livro = new Livro()
        livro.titulo = prompt("Titulo: ")
        livro.ano = prompt ("Ano: ")
        livro.genero = prompt("Autor: ")
    }

}

biblioteca = new Biblioteca()
biblioteca.geraLivro()