import React from "react";
import { Link } from "react-router-dom";
import style from "../asset/Styles/Pagination.module.css";

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className={style.paginationNav}>
      <ul className={style.paginationUL}>
        <li className={style.paginationLF}>
          <Link onClick={() => paginate(1)} to="">
            First Page
          </Link>
        </li>
        {pageNumbers.map((number) => (
          <li className={style.paginationLI} key={number}>
            <Link onClick={() => paginate(number)} to="">
              {number}
            </Link>
          </li>
        ))}
        <li className={style.paginationLF}>
          <Link
            onClick={() => paginate(Math.ceil(totalPosts / postPerPage))}
            to=""
          >
            Last Page
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

//////////////////// BootStrap Pagination Class //////////////////////
//   <nav aria-label="Page navigation example">
//   <ul class="pagination justify-content-center">
//     <li class="page-item"><Link class="page-link"onClick={() => paginate(1)} to="">First Page</Link></li>
//     {pageNumbers.map((number) => (
//        <li class="page-item" key={number}><Link class="page-link" onClick={() => paginate(number)} to="">{number}</Link></li>
//     ))}
//     <li class="page-item"><Link class="page-link"onClick={() => paginate(Math.ceil(totalPosts / postPerPage))} to="">Last Page</Link></li>
//   </ul>
// </nav>
