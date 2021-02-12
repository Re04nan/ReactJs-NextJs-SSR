import React from 'react';

import HEAD from '../components/Head';
import Menu from '../components/Menu';

export default function Home() {
    return (
        // Essa página está sendo renderizada em side-server
        <>
            <HEAD />
            <main className="container-fluid">
                <Menu />
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Seja bem vindo(a)!</h1>
                        <p className="lead">Aqui em nossa loja, <em className="text-danger">devs tem descontos %</em> nos produtos para sua casa!</p>
                        <div className="container">
                            <p>Temos produtos de ótima qualidade e para todos os gostos,</p>
                            <p>para mais informações acesse a aba contato na parte superior </p>
                            <p>do menu e mande sua pergunta que responderemos assim que possível, <b>boas compras.</b></p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}