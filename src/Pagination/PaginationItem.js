const PaginationItem = ({ pageNo, active, myFun }) => {
    return (
        <div className={"pg-item"} onClick={() => myFun(pageNo)}>
            <h3 style={{ color: active ? "red" : "white" }}>{pageNo}</h3>
        </div>
    );
}
export default PaginationItem;