import { Component } from "react";
import Swal from "sweetalert2";
import Cliente from "../../../Models/cliente";

type props = {
    cliente: Cliente
}

type state = {
    nome: string
}

export default class FormularioEdicaoCliente extends Component<props, state> {

    private nome
    private nomeSocial
    private cpf
    private email
    private telefone

    constructor(props: props | Readonly<props>) {
        super(props);
        this.state = {
            nome: this.props.cliente.nome
        }

        // this.nome = this.props.cliente.nome
        // this.cpf = this.props.cliente.cpf
        // this.nomeSocial = this.props.cliente.nomeSocial
        // this.telefone = this.props.cliente.telefone
        // this.email = this.props.cliente.email

        this.onClickNome = this.onClickNome.bind(this)
        this.onClickNomeSocial = this.onClickNomeSocial.bind(this)
        this.onClickCpf = this.onClickCpf.bind(this)
        this.onClickTelefone = this.onClickTelefone.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onClickEmail = this.onClickEmail.bind(this)
    }

    componentDidMount(): void {
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
        this.load()
    }



    componentDidUpdate(prevProps: Readonly<props>, prevState: Readonly<state>, snapshot?: any): void {
        if (this.props != prevProps) {
            this.load()
        }
    }

    load(): void {
        this.setState({
            nome: this.props.cliente.nome
        })
        this.nome = this.props.cliente.nome
        this.cpf = this.props.cliente.cpf
        this.nomeSocial = this.props.cliente.nomeSocial
        this.telefone = this.props.cliente.telefone
        this.email = this.props.cliente.email
    }

    async cadastro(): Promise<boolean> {
        let retorno = false
        let mapeado = {
            nome: this.nome,
            nomeSocial: this.nomeSocial,
            cpf: this.cpf,
            telefone: this.telefone,
            email: this.email
        }
        await fetch("http://localhost:3001/cliente/modificar/" + this.props.cliente.id, {
            method: "PUT",
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
        if (
            !this.nome || this.nome === "" ||
            !this.nomeSocial || this.nomeSocial === "" ||
            !this.email || this.email === "" ||
            !this.telefone || this.telefone === "" ||
            !this.cpf || this.cpf === "" 
        ) {
            Swal.fire("Erro!", "Preencha todos os campos.", "error");
            return;
        }

        if (!this.email.includes("@") || !this.email.includes(".com")) {
            Swal.fire({
                icon: "error",
                title: "E-mail inválido",
                text: "E-mail deve conter '@' e '.com'",
            });
            return;
        }

        if ((this.telefone + "").length < 11) {
            Swal.fire({
                icon: "error",
                title: "Número de telefone inválido.",
            });
            return;
        }

        if ((this.cpf + "").length < 11) {
            Swal.fire({
                icon: "error",
                title: "CPF inválido.",
            });
            return;
        }

        let resposta = await this.cadastro()
        if (resposta) {
            Swal.fire(
                'Sucesso!',
                'Cliente atualizado com sucesso.',
                'success'
            ).then(result => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.location.reload()
            })
        } else {
            Swal.fire(
                'Erro!',
                'Não foi possível atualizar.',
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

    onClickCpf(event) {
        if (event.target.value.length > event.target.maxLength) {
            event.target.value = event.target.value.slice(0, event.target.maxLength);
        }
        this.cpf = event.target.value
    }

    onClickNomeSocial(event) {
        this.nomeSocial = event.target.value
    }

    onClickTelefone(event) {
        if (event.target.value.length > event.target.maxLength) {
            event.target.value = event.target.value.slice(0, event.target.maxLength);
        }
        this.telefone = event.target.value
    }

    onClickEmail(event) {
        this.email = event.target.value
    }

    render() {

        return (
            <>
                <div className="modal-content">
                    <h5>Edição de Cliente</h5>
                    <div className="row">
                        <form className="col s12">
                            <div id="modalLine" className="row">
                                <div className="input-field col s6">
                                    <input defaultValue={this.nome} onChange={this.onClickNome} id="first_name" type="text" />
                                    <label htmlFor="first_name" className="active">nome</label>
                                </div>
                                <div className="input-field col s6">
                                    <input defaultValue={this.nomeSocial} id="nomeSocial" onChange={this.onClickNomeSocial} type="text" />
                                    <label htmlFor="nomeSocial" className="active">Nome Social</label>
                                </div>
                            </div>
                            <div id="modalLine" className="row">
                                <div className="input-field col s6">
                                    <input defaultValue={this.cpf} id="cpf" onChange={this.onClickCpf} type="number" maxLength={11} />
                                    <label htmlFor="cpf" className="active">CPF</label>
                                </div>
                                <div className="input-field col s6">
                                    <input defaultValue={this.email} id="email" onChange={this.onClickEmail} type="email" />
                                    <label htmlFor="email" className="active">Email</label>
                                </div>
                            </div>
                            <div id="modalLine" className="row">
                                <div className="input-field col s6">
                                    <input defaultValue={this.telefone} id="telefone" onChange={this.onClickTelefone} type="number"
                                        maxLength={11} />
                                    <label htmlFor="telefone" className="active">Telefone</label>
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
                        <a href="#!"><i id="sendButton" className="material-icons right">send</i></a>Atualizar
                    </button>
                </div>

            </>
        )
    }
}