class Notas {
    constructor(titulo, etiqueta, nota) {
        this.titulo = titulo;
        this.etiqueta = etiqueta;
        this.nota = nota;
    }

    /* Setters */
    set setTitulo(n) {
        this.titulo = n;
    }
    set setEtiqueta(e) {
        this.etiqueta = e;
    }
    set setNota(c) {
        this.nota = c;
    }

    /* Getters */
    get getTitulo() {
        return this.titulo;
    }
    get getEtiqueta() {
        return this.etiqueta;
    }
    get getNota() {
        return this.nota;
    }
    get getInfo() {
        return `Titulo: ${this.titulo}<br> Etiqueta: ${this.etiqueta}<br> Nota: ${this.nota}`;
    }

}
export { Notas };