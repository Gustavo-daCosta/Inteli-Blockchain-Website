import React from "react";
import './HomePage.css';
import Input from "../Components/Input/Input";

import logo from "../Assets/logo.svg";
import githubLogo from "../Assets/github.svg";
import whatsappLogo from "../Assets/wpp.svg";

const HomePage = () => {
    return(
        <main>
            <img src={logo} alt="" className="logo" />
            <section className="forms">
                <h1>Receba sua Proof-Of-Attendance NFT</h1>
                <p>Para receber sua NFT você precisa ter participado do evento e ter uma carteira na rede Sepolia.</p>
                <p>Ainda não tem uma carteira? Acesse o link e crie a sua já: <a href="https://metamask.io/download/" className="here-link" >Clique aqui.</a></p>
                <form action="">
                    <div className="input-area">
                        <label htmlFor="nome">Seu nome</label>
                        <p>Esse nome será gravado na NFT para provar sua presença</p>
                        <Input
                            type="text"
                            id="nome"
                            name="nome"
                            placeholder="Nome"
                            required={true}
                        />
                    </div>
                    <div className="input-area">
                        <label htmlFor="email">Email</label>
                        <p>Email para receber novidades</p>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="your.email@email.com"
                            required={true}
                        />
                    </div>
                    <div className="input-area">
                        <label htmlFor="carteira">Wallet</label>
                        <p>Carteira para receber o NFT na rede Sepolia</p>
                        <Input
                            type="text"
                            id="carteira"
                            name="carteira"
                            placeholder="0x00...0000"
                            required={true}
                        />
                    </div>
                    <button type="submit">Gerar NFT</button>
                </form>
            </section>

            <p>Todo o código pode ser encontrado aqui: <a href=""><img src={githubLogo} alt="" className="codigo" /></a></p>
            <p>Caso tenha alguma dúvida: <a href=""><img src={whatsappLogo} alt="" className="contato" /></a></p>
        </main>
    );
}

export default HomePage;