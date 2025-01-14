/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import '../../Style/myStyle.css'
import Cliente from "../../../Models/cliente";


type props = {
    cliente: Cliente
}

type state = {
    consumoProduto: any[]
    consumoServico: any[]
    servicos: any[]
    produtos: any[]
    totalProdutos: number
    totalServicos: number
    temHistorico: boolean
}

export default class HistoricoCliente extends Component<props, state> {

    constructor(props: props | Readonly<props>) {
        super(props);
        this.state = {
            consumoProduto: [],
            consumoServico: [],
            produtos: [],
            servicos: [],
            totalProdutos: 0,
            totalServicos: 0,
            temHistorico: false
        }
    }

    async componentDidMount() {
        var elemsModal = document.querySelectorAll('.modal');
        M.Modal.init(elemsModal);
        this.load()
    }

    componentDidUpdate(prevProps: Readonly<props>, prevState: Readonly<state>, snapshot?: any): void {
        if(prevProps != this.props){
            this.setState({
                consumoProduto: [],
                consumoServico: [],
                produtos: [],
                servicos: [],
                totalProdutos: 0,
                totalServicos: 0,
                temHistorico: false
            })
            this.load()
        }
    }

    async load(){
        await fetch("http://localhost:3001/servico", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json()).then(r => {
            this.setState({
                servicos: r
            })
        });

        await fetch("http://localhost:3001/produto", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json()).then(r => {
            this.setState({
                produtos: r
            })
        });

        await fetch("http://localhost:3001/clienteProduto/" + this.props.cliente.id, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json()).then(r => {
            if (r == null) return
            let valor = 0
            r.forEach(element => {
                let produto = this.state.produtos.find(pro => pro.id === element.produtoId)
                valor += produto.preco * element.quantidadeVendida
            });

            let has = false
            if(r.length > 0){
                has = true
            }

            this.setState({
                consumoProduto: r,
                totalProdutos: valor,
                temHistorico: has
            })
        });

        await fetch("http://localhost:3001/clienteServico/" + this.props.cliente.id, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json()).then(r => {
            if (r == null) return
            let valor = 0
            r.forEach(element => {
                let servico = this.state.servicos.find(pro => pro.id === element.servicoId)
                valor += servico.preco * element.quantidadeVendida
            });

            let has = false
            if(r.length > 0){
                has = true
            }

            this.setState({
                consumoServico: r,
                totalServicos: valor,
                temHistorico: has
            })
        });

    }

    render() {
        return (
            <>
                <div className="modal-content">
                    <h5>{this.state.temHistorico ? "Histórico de compras" : "" }</h5>
                    <div className="row">
                        <ul>
                            <li>
                                {this.state.temHistorico ?
                                    <div>
                                        <h5>Produtos</h5>
                                        {this.state.consumoProduto.map(item => {
                                            let produto = this.state.produtos.find(pro => pro.id === item.produtoId)
                                            let data = new Date(item.createdAt)
                                            return (
                                                <>
                                                    <span key={item.id}>{data.toLocaleString()} - {item.quantidadeVendida}x {produto.nome}</span><br />
                                                </>
                                            )
                                        })}
                                        {this.state.totalProdutos != 0 ?
                                            <>
                                                <hr />
                                                <span>Total Produto: R$: {this.state.totalProdutos}</span>
                                            </>
                                            :
                                            <></>}
                                        <h5>Serviços</h5>
                                        {this.state.consumoServico.map(item => {
                                            let servico = this.state.servicos.find(pro => pro.id === item.servicoId)
                                            let data = new Date(item.createdAt)
                                            return (
                                                <>
                                                    <span key={item.id}>{data.toLocaleString()} - {item.quantidadeVendida}x {servico.nome}</span><br />
                                                </>
                                            )
                                        })}
                                        {this.state.totalServicos != 0 ?
                                            <>
                                                <hr />
                                                <span>Total Serviço: R$: {this.state.totalServicos}</span>
                                            </>
                                            :
                                            <></>}
                                        <div id="totalContainer">
                                            <span id="total">Total: R$: {this.state.totalProdutos + this.state.totalServicos}</span>
                                        </div>
                                    </div>
                                    :
                                    <>
                                        <p className="phistorico">Esse cliente não realizou nenhuma compra até o momento.</p>
                                    </>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}
