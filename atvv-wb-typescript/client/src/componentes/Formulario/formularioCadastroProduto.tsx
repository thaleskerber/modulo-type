import { Component } from "react";
import Swal from "sweetalert2";

type props = {
    tema: string
}

export default class FormularioCadastroProduto extends Component<props> {

    private nome
    private preco
    private estoque

    constructor(props: props | Readonly<props>) {
        super(props);

        this.onClickNome = this.onClickNome.bind(this)
        this.onClickPreco = this.onClickPreco.bind(this)
        this.onClickEstoque = this.onClickEstoque.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(): void {
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
    }

    async cadastro(): Promise<boolean> {
        let retorno = false
        let mapeado = {
            nome: this.nome,
            preco: this.preco,
            estoque: this.estoque
        }
        await fetch("http://localhost:3001/produto/cadastrar", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mapeado)
        }).then(r => {
            retorno = r.status === 200
        })
        return retorno
    }

    async onSubmit() {
        if (!this.nome || !this.preco || !this.estoque) {
            Swal.fire(
                'Erro!',
                'Preencha todos os campos.',
                'error'
            )
            return
        }

        if(this.preco <= 0){
            Swal.fire(
                'Erro!',
                'O preço deve ser maior que 0.',
                'error'
            )
            return
        }

        if(this.estoque <= 0){
            Swal.fire(
                'Erro!',
                'O estoque deve ser maior que 0.',
                'error'
            )
            return
        }

        let resposta = await this.cadastro()
        if (resposta) {
            Swal.fire(
                'Sucesso!',
                'Produto cadastrado com sucesso.',
                'success'
            ).then(result => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.location.reload()
            })
        } else {
            Swal.fire(
                'Erro!',
                'Não foi possível cadastrar.',
                'error'
            ).then(result => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.location.reload()
            })
        }
    }

    onClickNome(event) {
        this.nome = event.target.value
    }

    onClickPreco(event) {
        this.preco = event.target.value
    }

    onClickEstoque(event) {
        this.estoque = event.target.value
    }

    render() {
        return (
            <>
            <div className="modal-content">
                <h5>Cadastro de Produto</h5>
                <div className="row">
                    <form className="col s12">
                        <div id="modalLine" className="row">
                            <div className="input-field col s12">
                                <input id="nome" type="text" onChange={this.onClickNome} />
                                <label htmlFor="nome">Nome</label>
                            </div>
                        </div>
                        <div id="modalLine" className="row">
                            <div className="input-field col s6">
                                <input id="preco" type="number" onChange={this.onClickPreco} />
                                <label htmlFor="preco">Preço</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="estoque" type="number" onChange={this.onClickEstoque} />
                                <label htmlFor="estoque">Estoque</label>
                            </div>
                        </div>  
                    </form>
                </div >
            </div>
            <div className="modal-footer">
                <button id="cancelButtonContainer" className="modal-close waves-effect waves-light btn-flat">
                    <a href="#!"><i id="cancelButton" className="material-icons right">cancel</i></a>Cancelar
                </button>
                <button id="cadastrarButtonContainer" onClick={this.onSubmit} type="submit" name="action" className="waves-effect waves-light btn-flat">
                    <a href="#!"><i id="sendButton" className="material-icons right">send</i></a>Cadastrar
                </button>
            </div>
            </>
        )
    }
}