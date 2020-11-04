import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <Link href="/">
        <img
          src="https://source.unsplash.com/user/erondu/400x400"
          alt=""
          className="header__logo"
        />
      </Link>
      <Link href="/">
        <h1 className="header__title">fish castle</h1>
      </Link>
      <a
        href="#"
        className="header__summary snipcart-checkout snipcart-summary"
        style={{ textDecoration: "none" }}
      >
        <span className="header__price snipcart-total-price"></span>
      </a>
    </header>
  );
}
