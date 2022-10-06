import React , {Component} from "react";
import CBoardServices from "./CBoardServices";
import axios from "axios";
import CBoardReplyDelete from "./CBoardReplyDelete";


class CBoardReplyList extends Component {
    constructor(props){
        super(props);
        this.state = {
            bnum:localStorage.getItem('bnum'),
            reply:[],
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
        
        
        let form = new FormData();
        form.append("RNum", RNum);
        form.append("Replyer",this.state.reply);
        console.log("이거 뭔고" + this.state.reply.replyer);
        axios.post("/Community/deleteReply", form);

        window.location.reload();

        

        
    }

    btnReplyDeleteCheck(rnum){
        if(localStorage.getItem('token')){
            return(
                <button onClick={()=>this.CBoardReplyDelete(rnum)} className='removeBtn btn btn-close ms-2' style={{float:"right"}} >
                        <input type={"hidden"} value={rnum} ></input>
                </button>
            )
        }
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
                            {this.btnReplyDeleteCheck(obj.rnum)}
                        </div>
                        
                    </div>
                  )}


               
             </div>
            </>
        )
    }
}


export default CBoardReplyList;