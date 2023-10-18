import Link from "next/link";

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light border">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
          Impacta Commerce
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/products" className="nav-link active" aria-current="page">
                PRODUTOS
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/orders" className="nav-link active" aria-current="page">
                PEDIDOS
              </Link>
            </li>
          </ul>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link href="/cart" className="nav-link active" aria-current="page">
                CARRINHO DE COMPRAS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
