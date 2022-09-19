import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Pagination, PaginationItem, PaginationLink } from 'reactstrap';


class Nboardlist extends Component {
    pagination = (type) => {
        alert("Go "+type)
    }
    // page link function
    render(){
        return(
            <>
                <Link to="/Notice/CUD">
                    {/* *****TEMPORARY LINK***** */}
                    <Button className="btn-sm float-end">
                        새 글 쓰기
                    </Button>
                </Link>
                <div id="boardbody" className="list-group w-auto my-5">
                    <Link to="/Notice/Read" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                        {/* *****TEMPORARY LINK***** */}
                        <div className="d-flex gap-2 w-100 justify-content-between">
                            <div>
                                <h6 className="mb-0">Title</h6>
                                <p className="mb-0 opacity-75 ms-5">Content</p>
                            </div>
                            <small className="opacity-50 text-nowrap">date</small>
                        </div>
                    </Link>
                    <Link to="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                        <div className="d-flex gap-2 w-100 justify-content-between">
                            <div>
                                <h6 className="mb-0">Title</h6>
                                <p className="mb-0 opacity-75 ms-5">Content</p>
                            </div>
                            <small className="opacity-50 text-nowrap">date</small>
                        </div>
                    </Link>
                    <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                        <div className="d-flex gap-2 w-100 justify-content-between">
                            <div>
                                <h6 className="mb-0">Title</h6>
                                <p className="mb-0 opacity-75 ms-5">Content</p>
                            </div>
                            <small className="opacity-50 text-nowrap">date</small>
                        </div>
                    </a>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <Pagination size="md" aria-label="Page navigation">
                        <PaginationItem>
                            <PaginationLink previous onClick={e => this.pagination("previous")} />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink onClick={e => this.pagination("1")}>1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink onClick={e => this.pagination("2")}>2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink last onClick={e => this.pagination("last")} />
                        </PaginationItem>
                    </Pagination>
                </div>
            </>
        )
    }
}
export default Nboardlist;