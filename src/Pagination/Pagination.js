import PaginationItem from "./PaginationItem";

const Pagination = ({ myFun, pages }) => {
    return (
        <div className="pagination">
            {pages.map(page => (
                <PaginationItem pageNo={page.pno} myFun={myFun} key={page.pno} active={page.active} />
            ))}
        </div>
    );


}



export default Pagination;