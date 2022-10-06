import axios from "axios";

const CBOARD_API_BASE_URL = "/Community"

const REPLY_API_BASE_URL = "/CReply"

class CBoardServices{

    getBoardPage(pageNum){
        console.log("getBoardPage 작동 : " +pageNum );
        return axios.get(CBOARD_API_BASE_URL + "/getList.do?pageNum=" + pageNum);
    }

    getBoard(bnum){
        console.log("getBoard 실행 : " + bnum);
        return axios.get(CBOARD_API_BASE_URL + "/view.do?bnum="+ bnum);
    }

     getReplyPage(pageNum){
        console.log("getReplyPage 작동" + pageNum);
         return axios.get(REPLY_API_BASE_URL + "/replyList?pageNum=" + pageNum);
     }

    getReply(bnum){
        console.log("getReply 실행 : " + bnum);
        return axios.get(REPLY_API_BASE_URL + "/ReplyRead?bnum=" + bnum);
    }



}
export default new CBoardServices();