import axios from "axios";

const NBOARD_API_BASE_URL = "/Notice"

class NBoardServices{

    getBoardPage(pageNum){
        console.log("getBoardPage 작동 : " + pageNum );
        return axios.get(NBOARD_API_BASE_URL + "/getList.do?pageNum=" + pageNum);
    }

    getBoard(bnum){
        console.log("getBoard 실행 : " + bnum);
        return axios.get(NBOARD_API_BASE_URL + "/view.do?bnum="+ bnum);
    }

}
export default new NBoardServices();