import diseno from "./img/helados1.jpg";
import ux from "./img/helados2sabor.jpg";
import marketing from "./img/helado sabor menta.jpg";
import web from "./img/vainilla.jpg";
import react from "./img/sabor maracuya.jpg";
import redes from "./img/pistacho italiano.jpg";

import Cards from "./Cards";

function Dashboard() {

    return (

        <div className="dashboard">

            <header className="header">
                <h1>Catálogo de Helados</h1>
            </header>

            <div className="filtros">
                <span>Todos</span>
                <span>Frutales</span>
                <span className="select">Cremosos</span>
                <span>Especiales</span>
            </div>

            <div className="contenido">

                <div className="cards-con">

                    <Cards
                        titulo="Fresa Artesanal"
                        categoria="Frutales"
                        imagen={diseno}
                        precio={8500}
                        estado="Disponible"
                        destacado={true}
                    />

                    <Cards
                        titulo="Chocolate Belga Intenso"
                        categoria="Cremosos"
                        imagen={ux}
                        precio={9000}
                        estado="Disponible"
                        destacado={false}
                    />

                    <Cards
                        titulo="Menta & Chispas"
                        categoria="Especiales"
                        imagen={marketing}
                        precio={8800}
                        estado="Agotado"
                        destacado={false}
                    />

                    <Cards
                        titulo="Vainilla Bourbon"
                        categoria="Cremosos"
                        imagen={web}
                        precio={8000}
                        estado="Disponible"
                        destacado={false}
                    />

                    <Cards
                        titulo="Maracuyá Tropical"
                        categoria="Frutales"
                        imagen={react}
                        precio={8200}
                        estado="Disponible"
                        destacado={true}
                    />

                    <Cards
                        titulo="Pistacho Italiano"
                        categoria="Especiales"
                        imagen={redes}
                        precio={10500}
                        estado="Disponible"
                        destacado={false}
                    />

                </div>

                <div className="panel">
                    <h2>Información</h2>
                    <p>Detalles del helado seleccionado</p>
                </div>

            </div>

        </div>

    );
}

export default Dashboard;