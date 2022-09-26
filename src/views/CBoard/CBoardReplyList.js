import React , {Component} from "react";
import CBoardServices from "./CBoardServices";
import axios from "axios";
import CBoardReplyDelete from "./CBoardReplyDelete";


class CBoardReplyList extends Component {
    constructor(props){
        super(props);
        this.state = {
            bnum:localStorage.getItem('bnum'),
            reply:[]
            

        };

        localStorage.setItem("rnum",this.state.reply.rnum);
        this.getReplyListData(this.state.bnum);
        
   
        console.log(this.state.bnum);
        console.log(this.state.rnum);
        console.log(this.state.reply);
       

        
    }



    replyCheck(){
        if (this.state.reply.length == 0) {

            return(
            <>
              
                <h6 className="mb-0">등록된 댓글이 없습니다.</h6>
            </>
            )
        }
        console.log("댓글 있냐?" + this.state.reply);
        
    }

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
      
    }


    

    getReplyListData(bnum){
        CBoardServices.getReply(bnum).then((res) => {
            console.log(res.data.reply.length);
                this.setState({
                    reply: res.data.reply
                });
            console.log(res.data.reply);
            console.log(this.state.reply);



                
              
              
              
        });
    }

   

    CBoardReplyDelete(RNum){
        
        console.log("왜 안돼 씨팔" + RNum);
        let form = new FormData();
        form.append("RNum", RNum)
        axios.post("/Community/deleteReply", form);

        window.location.reload();

        
    }

    render(){
       

        return(
            <>
             <div id = "replybody" className="list-group w-auto my-5">
                
                {this.replyCheck()}
                
                
                  {/* {
                    this.state.rnum.map(
                        reply =>
                        <div key={reply.rnum}>
                            <div>
                        <h6 className="mb-0">{this.state.reply[reply]}</h6>
                        <p className="mb-0 opacity-75 ms-5">{this.state.replyer[reply]}</p>
                    </div>
                    <small className="opacity-50 text-nowrap">{this.state.replyDate[reply]}</small>  

                        </div>
                    )

                  } */}
                  {this.state.reply.map(
                    obj=>
                    <div key={obj.rnum}>
                        
                        <div className="ms-3">
                            <div>
                                <p className="mb-0 fw-bold">{obj.replyer}</p>
                                <h6 className="">{obj.reply}</h6>
                            </div>
                            <small className="opacity-50 text-nowrap">{obj.replyDate}</small>
                            
                        </div>
                        <button onClick={()=>this.CBoardReplyDelete(obj.rnum)} className='removeBtn btn btn-close ms-2' style={{float:"right"}} >
                            <input type={"hidden"} value={obj.rnum} ></input>
                           
                        </button>
                    </div>
                  )}


               
             </div>
            </>
        )
    }
}


export default CBoardReplyList;