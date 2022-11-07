/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import './myStyle.css'



type props = {
    tema: string
}

export default class ListaCliente extends Component<props> {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.collapsible');
            M.Collapsible.init(elems);
        });
    }

    render() {
        return (
            <div id="backgroundClientContainer">
                <div id="titleContainer">
                    <h4 id="clientTitle">Clientes cadastrados</h4>
                </div>
                <div id="collapsibleContainer">
                    <ul className="collapsible">
                        <li className="active" >
                            <div id="collapsibleHeader" className="collapsible-header">
                                Vitoria
                            </div>
                            <div id="collapsibleBody" className="collapsible-body">
                                <span>Nome Social: Vizz</span><br />
                                <span>Sexo: F</span><br />
                                <span>RG: 123456789</span><br />
                                <span>Data Emissão: 12/12/2020</span><br />
                                <span>CPF: 12345678912</span><br />
                                <span>Data Emissão: 12/12/2021</span><br />
                                <span>DDD: 12</span><br />
                                <span>Telefone: 12345678</span><br />

                                <div id="editDeleteButtonContainer">
                                    <a href="#" id="editDeleteButton" className="btn-floating btn-medium pulse"><i className="small material-icons">create</i></a>
                                    <a href="#" id="editDeleteButton" className="btn-floating btn-medium pulse"><i className="small material-icons">delete</i></a>
                                </div>
                            </div>
                        </li>
                        <li className="">
                            <div id="collapsibleHeader" className="collapsible-header">
                                Thales
                            </div>
                            <div id="collapsibleBody" className="collapsible-body">
                                <span>Nome Social: TK</span><br />
                                <span>Sexo: M</span><br />
                                <span>RG: 987654321</span><br />
                                <span>Data Emissão: 12/12/2021</span><br />
                                <span>CPF: 11987654321</span><br />
                                <span>Data Emissão: 12/12/2021</span><br />
                                <span>DDD: 12</span><br />
                                <span>Telefone: 432749471</span><br />

                                <div id="editDeleteButtonContainer">
                                    <a href="#" id="editDeleteButton" className="btn-floating btn-medium pulse"><i className="small material-icons">create</i></a>
                                    <a href="#" id="editDeleteButton" className="btn-floating btn-medium pulse"><i className="small material-icons">delete</i></a>
                                </div>
                            </div>
                        </li>
                        <li >
                            <div id="collapsibleHeader" className="collapsible-header">
                                Francisco
                            </div>
                            <div id="collapsibleBody" className="collapsible-body">
                                <span>Nome Social: Fran</span><br />
                                <span>Sexo: O</span><br />
                                <span>RG: 987372180</span><br />
                                <span>Data Emissão: 17/09/2005</span><br />
                                <span>CPF: 09612739401</span><br />
                                <span>Data Emissão: 17/09/2005</span><br />
                                <span>DDD: 12</span><br />
                                <span>Telefone: 983618492</span><br />

                                <div id="editDeleteButtonContainer">
                                    <a href="#" id="editDeleteButton" className="btn-floating btn-medium pulse"><i className="small material-icons">create</i></a>
                                    <a href="#" id="editDeleteButton" className="btn-floating btn-medium pulse"><i className="small material-icons">delete</i></a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div id="collapsibleHeader" className="collapsible-header">
                                Fabiana
                            </div>
                            <div id="collapsibleBody" className="collapsible-body">
                                <span>Nome Social: Vizz</span><br />
                                <span>Sexo: F</span><br />
                                <span>RG: 123456789</span><br />
                                <span>Data Emissão: 12/12/2020</span><br />
                                <span>CPF: 12345678912</span><br />
                                <span>Data Emissão: 12/12/2021</span><br />
                                <span>DDD: 12</span><br />
                                <span>Telefone: 12345678</span><br />

                                <div id="editDeleteButtonContainer">
                                    <a href="#" id="editDeleteButton" className="btn-floating btn-medium pulse"><i className="small material-icons">create</i></a>
                                    <a href="#" id="editDeleteButton" className="btn-floating btn-medium pulse"><i className="small material-icons">delete</i></a>
                                </div>
                            </div>
                        </li>
                        <li className="">
                            <div id="collapsibleHeader" className="collapsible-header">
                                Adriana
                            </div>
                            <div id="collapsibleBody" className="collapsible-body">
                                <span>Nome Social: TK</span><br />
                                <span>Sexo: M</span><br />
                                <span>RG: 987654321</span><br />
                                <span>Data Emissão: 12/12/2021</span><br />
                                <span>CPF: 11987654321</span><br />
                                <span>Data Emissão: 12/12/2021</span><br />
                                <span>DDD: 12</span><br />
                                <span>Telefone: 432749471</span><br />

                                <div id="editDeleteButtonContainer">
                                    <a href="#" id="editDeleteButton" className="btn-floating btn-medium pulse"><i className="small material-icons">create</i></a>
                                    <a href="#" id="editDeleteButton" className="btn-floating btn-medium pulse"><i className="small material-icons">delete</i></a>
                                </div>
                            </div>
                        </li>
                        <li >
                            <div id="collapsibleHeader" className="collapsible-header">
                                Breno
                            </div>
                            <div id="collapsibleBody" className="collapsible-body">
                                <span>Nome Social: Fran</span><br />
                                <span>Sexo: O</span><br />
                                <span>RG: 987372180</span><br />
                                <span>Data Emissão: 17/09/2005</span><br />
                                <span>CPF: 09612739401</span><br />
                                <span>Data Emissão: 17/09/2005</span><br />
                                <span>DDD: 12</span><br />
                                <span>Telefone: 983618492</span><br />

                                <div id="editDeleteButtonContainer">
                                    <a href="#" id="editDeleteButton" className="btn-floating btn-medium pulse"><i className="small material-icons">create</i></a>
                                    <a href="#" id="editDeleteButton" className="btn-floating btn-medium pulse"><i className="small material-icons">delete</i></a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div id="collapsibleHeader" className="collapsible-header">
                                Maria
                            </div>
                            <div id="collapsibleBody" className="collapsible-body">
                                <span>Nome Social: Vizz</span><br />
                                <span>Sexo: F</span><br />
                                <span>RG: 123456789</span><br />
                                <span>Data Emissão: 12/12/2020</span><br />
                                <span>CPF: 12345678912</span><br />
                                <span>Data Emissão: 12/12/2021</span><br />
                                <span>DDD: 12</span><br />
                                <span>Telefone: 12345678</span><br />

                                <div id="editDeleteButtonContainer">
                                    <a href="#" id="editDeleteButton" className="btn-floating btn-medium pulse"><i className="small material-icons">create</i></a>
                                    <a href="#" id="editDeleteButton" className="btn-floating btn-medium pulse"><i className="small material-icons">delete</i></a>
                                </div>
                            </div>
                        </li>
                        <li className="">
                            <div id="collapsibleHeader" className="collapsible-header">
                                Juliana
                            </div>
                            <div id="collapsibleBody" className="collapsible-body">
                                <span>Nome Social: TK</span><br />
                                <span>Sexo: M</span><br />
                                <span>RG: 987654321</span><br />
                                <span>Data Emissão: 12/12/2021</span><br />
                                <span>CPF: 11987654321</span><br />
                                <span>Data Emissão: 12/12/2021</span><br />
                                <span>DDD: 12</span><br />
                                <span>Telefone: 432749471</span><br />

                                <div id="editDeleteButtonContainer">
                                    <a href="#" id="editDeleteButton" className="btn-floating btn-medium pulse"><i className="small material-icons">create</i></a>
                                    <a href="#" id="editDeleteButton" className="btn-floating btn-medium pulse"><i className="small material-icons">delete</i></a>
                                </div>
                            </div>
                        </li>
                        <li >
                            <div id="collapsibleHeader" className="collapsible-header">
                                César
                            </div>
                            <div id="collapsibleBody" className="collapsible-body">
                                <span>Nome Social: Fran</span><br />
                                <span>Sexo: O</span><br />
                                <span>RG: 987372180</span><br />
                                <span>Data Emissão: 17/09/2005</span><br />
                                <span>CPF: 09612739401</span><br />
                                <span>Data Emissão: 17/09/2005</span><br />
                                <span>DDD: 12</span><br />
                                <span>Telefone: 983618492</span><br />

                                <div id="editDeleteButtonContainer">
                                    <a href="#" id="editDeleteButton" className="btn-floating btn-medium pulse"><i className="small material-icons">create</i></a>
                                    <a href="#" id="editDeleteButton" className="btn-floating btn-medium pulse"><i className="small material-icons">delete</i></a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div id="addButtonContainer">
                    <div id="teste">
                        <a href="#" className="btn-floating btn-large pulse"><i className="large material-icons">add</i></a>


                    </div>
                </div>
            </div>
        )
    }
}