import axios from "axios";

const QBOARD_API_BASE_URL = "/QnA"

class QBoardServices{

    getBoardPage(pageNum){
        console.log("getBoardPage 작동 : " +pageNum );
        return axios.get(QBOARD_API_BASE_URL + "/getList.do?pageNum=" + pageNum);
    }

    getBoard(bnum){
        console.log("getBoard 실행 : " + bnum);
        return axios.get(QBOARD_API_BASE_URL + "/view.do?bnum="+ bnum);
    }

}
export default new QBoardServices();