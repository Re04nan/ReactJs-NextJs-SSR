import React from 'react';
import Menu from '../components/Menu';
import HEAD from '../components/Head';
import Image from 'next/image';

function Products({ products }) {
    const estilo = {
        width: "20vw",
        height: "40vh",
        textAlign: "center",
    }
    return (
        // Essa página está sendo renderizada em side-server... 
        // porém as imagem só são mostradas com javascript do browser
        // habilitado no momento!
        <>
            <HEAD />
            <Menu />
            <main className="container justify-content-center">
                <div className="row justify-content-center d-flex m-8">
                {products.map((item, index) => {
                    return (
                    <div key={index} style={estilo} className="card row text-white bg-light mb-3">
                        <div className="card-body col">
                            <figure className="card-img-top">
                                <Image src={`/imagens/Produtos${item.nome_imagem}`}
                                    alt={item.nome}
                                    width={100} height={120} />
                            </figure>
                            <figcaption className="card-title text-primary">{item.nome}</figcaption>
                        </div>
                    </div>                        )
                })}
                </div>
            </main>
        </>
    );
}

export async function getServerSideProps(context) {
    const url = "http://localhost:3002/Produtos";
    const response = await fetch(url);
    const data = await response.json();
    return {
        props: { products: data },
    }
}

export default Products;