import React, { Component } from "react";
import QBoardServices from "./QBoardServices";
import { Link } from "react-router-dom";
import { Button, NavItem, Pagination, PaginationItem, PaginationLink } from 'reactstrap';


class QBoardList extends Component{
    constructor(props){
        super(props);
        this.state = {
            List: [],
            currentPage: 0,
            maxPage: 0
        };

        this.getBoardListData(this.state.currentPage);
    }

    btnCreateBoardCheckLogin(){
        if(localStorage.getItem('token')){
            return(
                <Link to="/QnA/crudInsert">
                    <Button className="btn-sm float-end">
                        새 글 쓰기
                    </Button>
                </Link>
            )
        }
    }


    // 페이지 이동 버튼 출력하는 메소드
    createPageBtn(currentPage, maxPage){
    
        // 페이지 버튼 조건 정리
        // 1. 최대 보여주는 버튼 갯수는 5개 
        // → ([First] [prev] [2] [3] {4} [5] [6] [next] [Last])
        // 2. 본인이 첫 페이지인 경우 3페이지까지 보여줌.
        // → {1} [2] [3] [next] [Last]
        // 3. prev, next버튼
        // 3.1. 출력 조건 : currentPage 기준 +- 3 범위에 첫, 마지막 페이지 없는 경우
        // 3.2. prev, next버튼을 누르면 각각 본인의 -, + 3페이지로 이동
        // 4. First, Last버튼
        // 4.1. First, Last 버튼은 첫 번째, 마지막 페이지가 안보일 때 출력
        // 4.2. First, Last 버튼 누르면 각각 첫, 마지막 페이지로 이동
        return(
            <div className="pageMoveBtnContainer">
                {this.createPageBtnElement(currentPage-2, maxPage)}
                {this.createPageBtnElement(currentPage-1, maxPage)}
                {this.createPageBtnElement(currentPage, maxPage)}
                {this.createPageBtnElement(currentPage+1, maxPage)}
                {this.createPageBtnElement(currentPage+2, maxPage)}
            </div>
        )
    }

    // 조건에 따른 버튼을 만드는 메소드
    createPageBtnElement(pageNum, maxPage){
        var screenNum = pageNum; // 버튼에 출력될 텍스트 정의
        if(screenNum === 1){ // 
            screenNum = "First";
        }else if(screenNum === maxPage){
            screenNum = "Last";
        }

        if(pageNum <= 0 || pageNum > maxPage){ // pageNum 크기가 범주를 벗어나는 경우 출력하지않음. 
            return(
                <>
                </>
            )
        }

        return( // pageNum 크기가 정상 범주인 경우 출력
            <>
                <PaginationItem>
                    <PaginationLink onClick={() => this.getBoardListData(pageNum)}>{screenNum}</PaginationLink>
                </PaginationItem>
            </>
        )
    }

    getBoardListData(pageNum){  // 게시물 리스트를 초기화하는 메소드. 
        QBoardServices.getBoardPage(pageNum).then((res)=>{
            this.setState({
                List: res.data.list,
                currentPage: res.data.pageInfo.currentPage,
                maxPage: res.data.pageInfo.maxPage
            });
        });
    }

    createIsAnswer(answer){
        if(answer != null){
            
            return(
                <div>
                    답변있음
                </div>
            )
        }else{
            return(
                <div>
                    답변없음
                </div>
            )
        }
    }
    
    render(){
        return(
            <>
            {this.btnCreateBoardCheckLogin()}
            <div id="boardbody" className="list-group w-auto my-5">
                {
                            this.state.List.map(
                                board =>
                <div key={board.bnum} >
                    <Link to={`/QnA/view/bnum=${board.bnum}`} className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                        <div className="d-flex gap-2 w-100 justify-content-between">
                            <div>
                                <h6 className="mb-0">{board.bwriter}</h6>
                                <p className="mb-0 opacity-75 ms-5">{board.btitle}</p>
                            </div>
                            
                            <div>
                            <small className="opacity-50 text-nowrap">{board.bregDate}</small>
                            <small className="opacity-50 text-nowrap">
                                <p className="mb-0 opacity-75 ms-5">{this.createIsAnswer(board.banswerText)}</p>
                            </small>
                            </div>
                        </div>
                    </Link>
                </div>
                )}
                <div className="d-flex justify-content-center mt-3">
                    <Pagination size="md" aria-label="Page navigation">
                        {this.createPageBtn(this.state.currentPage, this.state.maxPage)}
                    </Pagination>
                </div>
                </div>
            </>
        );
    };
};
export default QBoardList;