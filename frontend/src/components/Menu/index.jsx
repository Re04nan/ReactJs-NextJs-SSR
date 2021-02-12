import React from 'react';
import Link from 'next/link';
import HEAD from '../Head';

export default function Menu() {
    return (
        <>
            <HEAD />
            <nav className="container-fluid bg-dark">
                <div className="navbar navbar-expand-lg navbar-light">
                    <Link href={'/'}><a className="navbar-brand text-primary">FullStackEletro</a></Link>
                    <Link href={'/products'}><a className="navbar-brand text-white">Produtos</a></Link>
                </div>
            </nav>
        </>
    );
}