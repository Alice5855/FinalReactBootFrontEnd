import axios from "axios";

const CBOARD_API_BASE_URL = "/Community"

class CBoardServices{

    getBoardPage(pageNum){
        console.log("getBoardPage 작동 : " +pageNum );
        return axios.get(CBOARD_API_BASE_URL + "/getList.do?pageNum=" + pageNum);
    }

    getBoard(bnum){
        console.log("getBoard 실행 : " + bnum);
        return axios.get(CBOARD_API_BASE_URL + "/view.do?bnum="+ bnum);
    }

}
export default new CBoardServices();