import React, { Component } from "react";
import CBoardServices from "./CBoardServices";
import { Link } from "react-router-dom";
import { Button, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import AuthService from "../Auth/AuthService";


class CBoardList extends Component{
    constructor(props){
        super(props);
        this.state = {
            List: [],
            currentPage: 0,
            maxPage: 0,
            nickname: "",
            role: ""
        };
        this.sendToken();
        this.getBoardListData(this.state.currentPage);
    }


    sendToken(){

        AuthService.loginSuccessGetUserInfoList(localStorage.getItem('token')).then((res)=>{
            console.log(res);
            this.setState({
                nickname:res.data.memnickname,
                role:res.data.memrole
            })
        })
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
            <div className="pageMoveBtnContainer flex-row d-flex">
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
                    <PaginationLink onClick={() => this.getBoardListData(pageNum-1)}>{screenNum}</PaginationLink>
                </PaginationItem>
            </>
        )
    }

    getBoardListData(pageNum){  // 게시물 리스트를 초기화하는 메소드. 
        CBoardServices.getBoardPage(pageNum).then((res)=>{
            this.setState({
                List: res.data.list,
                currentPage: res.data.pageInfo.currentPage,
                maxPage: res.data.pageInfo.maxPage
            });
        });
    }
    

    btnCreateBoardCheckLogin(){
        if(localStorage.getItem('token')){
            return(
                <Link to="/Community/crudInsert">
                    <Button className="btn-sm my-3 float-end" color="primary" outline>
                        새 글 쓰기
                    </Button>
                </Link>
            )
        }
    }



    render(){
        return(
            <>
            <div id="boardbody" className="w-auto my-5">
                <table id="boardtable" className="table table-hover col-12">
                    <colgroup>
                        <col className="col-1"></col>
                        <col className="col-5"></col>
                        <col className="col-2"></col>
                        <col className="col-1"></col>
                        <col className="col-2"></col>
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col" className="text-center">글 번호</th>
                            <th scope="col" className="text-center">제목</th>
                            <th scope="col" className="text-center">작성자</th>
                            <th scope="col" className="text-center">조회수</th>
                            <th scope="col" className="text-center">작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                                    this.state.List.map(
                                        board =>
                            <tr key={board.bnum} >
                                <td scope="row" className="text-center">{board.bnum}</td>
                                <td>
                                    <Link to={`/Community/view/bnum=${board.bnum}`} className="text-decoration-none d-block w-100 mcolor2" aria-current="true">
                                    <span style={{color:"black"}}>{board.btitle}</span>  [{board.replies}]
                                    </Link>
                                </td>
                                
                                <td className="text-center">{board.bwriter}</td>
                                <td className="text-center">{board.hits}</td>
                                <td className="text-muted fs-6 text-center">{board.bregDate}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="d-flex flex-row-reverse">
                    {this.btnCreateBoardCheckLogin()}
                </div>
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
export default CBoardList;