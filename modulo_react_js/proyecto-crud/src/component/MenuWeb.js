const MenuWeb = () => {
    return (
        <section className="container">
        <div className="container-menu-web">
            <nav className="menu-web">
                <ul className="items-menu-web list-style-none">
                    <li className="item-order item-menu-web">
                        <p>Ordenar por</p>
                        <ul className="items-order list-style-none">
                            <li className="item-menu-web"><button className="btn-menu-order">Incompleto</button></li>
                            <li className="item-menu-web"><button className="btn-menu-order">Completo</button></li>
                            <li className="item-menu-web"><button className="btn-menu-order">Defecto</button></li>
                        </ul>
                    </li>
                    <li className="item-menu-web">
                        <input type="search" placeholder="buscar por nombre(estudiante)"></input>
                    </li>
                </ul>
            </nav>
        </div>
        </section>
    )
}
export default MenuWeb;