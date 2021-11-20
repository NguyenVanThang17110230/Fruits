import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const getSidebarClass = (path) => {
    const matched =
      path === "admin"
        ? router.pathname === path
        : router.pathname.match(new RegExp(`^${path}($|/.*)`));
    return matched ? " bg-success text-white" : "";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
      <div className="container-fluid px-5">
        <a className="navbar-brand fw-bold" href="#">
          Fruits
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto ms-5 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/">
                <a
                  className={
                    "nav-link px-4 rounded-pill" + getSidebarClass("/")
                  }
                  aria-current="page"
                  href="#"
                >
                  Trang chủ
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/product">
                <a
                  className={
                    "nav-link px-4 rounded-pill" + getSidebarClass("/product")
                  }
                  aria-current="page"
                  href="#"
                >
                  Sản phẩm
                </a>
              </Link>
            </li>
            <li className="nav-item">
            <Link href="/contact">
                <a
                  className={
                    "nav-link px-4 rounded-pill" + getSidebarClass("/contact")
                  }
                  aria-current="page"
                  href="#"
                >
                  Liên hệ
                </a>
              </Link>
            </li>
            <li className="nav-item">
            <Link href="/about">
                <a
                  className={
                    "nav-link px-4 rounded-pill" + getSidebarClass("/about")
                  }
                  aria-current="page"
                  href="#"
                >
                  Giới thiệu
                </a>
              </Link>
              
            </li>
          </ul>
          <div className="d-flex justify-content-center align-items-center">
            <Link href="/shopping-cart">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-shopping-cart me-3"
                  width={26}
                  height={26}
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx={6} cy={19} r={2} />
                  <circle cx={17} cy={19} r={2} />
                  <path d="M17 17h-11v-14h-2" />
                  <path d="M6 5l14 1l-1 7h-13" />
                </svg>
              </a>
            </Link>

            <div className="btn btn-outline-success">Login</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
