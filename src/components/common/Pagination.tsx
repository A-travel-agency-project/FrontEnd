import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ items, itemsPerPage = 10, count }) => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    setPageCount(Math.ceil(count / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);
  return (
    <ReactPaginate
      className="flex"
      nextLabel=">"
      // onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="<"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      activeClassName="active"
      renderOnZeroPageCount={null}
    />
  );
};
export default Pagination;
