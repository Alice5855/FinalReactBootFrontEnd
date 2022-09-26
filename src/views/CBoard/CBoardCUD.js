import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "reactstrap";
import $ from "jquery";

class CBoardCUD extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bnum : "",
            btitle: "",
            btext: "",
            bwriter: "",
            fileName:"",
            folderPath:"",
            uuid:"",
            crud: props.match.params.crud,
            
        };

        console.log(this.state);
        
        if(this.state.crud === "Insert"){
            this.state = {
                btitle: "",
                btext: "",
                bwriter:"",
                fileName:"",
                folderPath:"",
                uuid:"",
                crud:"Insert"
            }
        } else if (this.state.crud === "Update") {
            this.state = {
                bnum: this.props.location.state.bnum,
                btitle: this.props.location.state.btitle,
                btext: this.props.location.state.btext,
                bwriter: this.props.location.state.bwriter,
                fileName:"",
                folderPath:"",
                uuid:"",
                crud: "Update"
            };
        } else if(this.state.crud === "Delete"){
            this.state = {
                bnum: this.props.location.state.bnum,
                btitle: this.props.location.state.btitle,
                btext: this.props.location.state.btext,
                bwriter: this.props.location.state.bwriter,
                fileName:"",
                folderPath:"",
                uuid:"",
                crud: "Delete"
            };
        }
        

    }
    /*
    props에 VO에 저장된 column명으로 data를 저장할 수 있도록 함
    crud: 각각의 기능을 'view','update','delete','insert'로 구분
    하여 기능 정의 된 data를 Header로 넘김으로서 아래에서 data를
    axios로(ajax와 비슷한것) 넘기거나 form 값을 insert하기 위해 
    정의됨
    Insert의 경우 현재 form에 입력된 값을 data로 저장해 axios로
    값을 백으로 넘기게 됨
    */

    // IT WORKS!
    componentDidMount() {
        $(".trigger").on("click" , function(){
            document.getElementById("fileName").click();
            document.getElementById("uuid").click();
            document.getElementById("folderPath").click();
        })
    
        $('.uploadBtn').click(function( ) {
    
            var formData = new FormData();
    
            var inputFile = $("input[type='file']");
    
            var files = inputFile[0].files;
    
            var fileResult = {
                fileName : "",
                uuid : "",
                folderPath : ""
            };
    
            for (var i = 0; i < files.length; i++) {
                console.log(files[i]);
                formData.append("uploadFiles", files[i]);
            }
    
            //upload ajax
            $.ajax({
                url: '/CUpload/uploadAjax',
                processData: false,
                contentType: false,
                data: formData,
                type: 'POST',
                dataType:'json',
                success: function(result){
                    console.log(result);
                    //나중에 화면 처리
                    var fileName = result[0].fileName;
                    var uuid = result[0].uuid;
                    var folderPath = result[0].folderPath;

                    $('input[name=fileName]').attr('value', fileName);
                    $('input[name=uuid]').attr('value', uuid);
                    $('input[name=folderPath]').attr('value', folderPath);

                    // console.log("뭐드감?" + result[i].folderPath);
                    // console.log("뭐드감?" +result[i].uuid);
                    // console.log("뭐드감?" +result[i].fileName);

                    console.log("뭐드감?" + folderPath);
                    console.log("뭐드감?" + uuid);
                    console.log("뭐드감?" + fileName);
                    
                    console.log(result[0].folderPath);
                    console.log(result[0].uuid);
                    console.log(result[0].fileName);
                    console.log("뭐드감?" + result.length);
                    
                    // 추가
                    showUploadedImages(result);
                },
                error: function(jqXHR, textStatus, errorThrown){
                    console.log(textStatus);
                }
            }); //$.ajax
    
        }); //end click
    
        function showUploadedImages(arr){
    
            console.log(arr);
    
            var divArea = $(".uploadResult");
    
            var str = "";
    
            for(var i = 0; i < arr.length; i++){
                str += "<div>";
                str += "<img src='/CUpload/display?fileName=" + arr[i].thumbnailURL + "'>";
                str += "<button class='removeBtn btn btn-close ms-2' data-name='" + arr[i].imageURL + "' aria-label='Close'></button>"
                str += "<div>"
            }
            divArea.append(str);
    
        }
    
        $(".uploadResult").on("click", ".removeBtn", function(e){
            
            var target = $(this);
            var fileName = target.data("name");
            var targetDiv = $(this).closest("div");
            var targetImg = $(this).closest("img");
    
            console.log(fileName);
    
            $.post('/CUpload/removeFile', {fileName: fileName}, function(result){
                console.log(result);
                if(result === true){
                    targetDiv.remove();
                }else{
                    console.log("targetDiv remove()ed?" + targetDiv)
                }
            } )
    
        });
    }

    createHeaderName() {
        const crud = this.state.crud;
        if (crud === "View") {
            return "조회";
        } else if (crud === "Update") {
            return "수정";
        } else if (crud === "Delete") {
            return "삭제";
        } else if (crud === "Insert") {
            return "등록";
        }
    }
    // ViewButton.js에서 Link될 때 mapping된 url에 따라 기능이 구분되어
    // Header에 기능을 정의하는 부분

    createCrudBtn() {
        const crud = this.state.crud;

        let btnColor = "";
        if (crud === "Insert") {
            btnColor = "btn btn-md btn-outline-primary"
        } else if (crud === "Update") {
            btnColor = "btn btn-md btn-outline-info"
        } else if (crud === "Delete") {
            btnColor = "btn btn-md btn-outline-danger"
        } else {
            btnColor = "btn btn-md btn-outline-secondary"
        }

        if (crud === "View") {
            return null;
        } else {
            const crudName =
            crud === "Update" ? "수정" : crud === "Insert" ? "등록" : "삭제";
            return (
                <button className={btnColor} onClick={() => this.crud()}>{crudName}</button>
            );
        }
    }
    // 기능정의되어 넘어온 crud값을 통해 button text와 onClick 링크를
    // 버튼에 mapping 해줌. view의 경우 이미 data가 넘어온 상태일 것이므로
    // btn에 기능정의를 따로 하지 않음
    

    crud() {
        const {bnum, btitle, btext, crud, bwriter, bregdate, fileName, uuid, folderPath} = this.state;
        let crudType = "";
        console.log("bnum : " + bnum);
        if (crud === "Update") {
            crudType = "/Community/modify.do";
        } else if (crud === "Delete") {
            crudType = "/Community/delete.do";
        } else if (crud === "Insert") {
            crudType = "/Community/insertProcess.do";
        } else if (crud === "View") {
            return null;
        }
        console.log(crud);
        // crud에 정의된 기능에 따라 controller의 기능으로 url을 넘겨줌
        // 이 때 넘길 값들은 props에 저장되는 각각의 column값에 맞춘
        // 값들 (const {}부분)이 된다.

        let form = new FormData();  
        form.append("Btext", btext);
        form.append("Btitle", btitle);
        form.append("Bwriter", bwriter);
        form.append("fileName", fileName);
        form.append("folderPath", folderPath);
        form.append("uuid", uuid);
        
        if (crud !== "Insert") {
            form.append("BNum", bnum);
        }
        
        // form에 입력된 data를 props에 저장하는 부분. Insert가 아닌
        // 경우 백에서 넘어온 articleID를 사용해야 하므로 if(!==)문을
        // 사용함
        if (crud === "Insert") {
            axios
            .post(crudType, form)
            
            .then((res) => {
                console.log(form);
                console.log(crudType);
                alert("요청이 처리되었습니다");
                this.props.history.push("/Community");
                
            })
            .catch((err) => {
                alert("error: " + err.response.data.msg);
            });
            
        } else if(crud ==="Update"){
            axios
            .post(crudType, form)
            
            .then((res) => {
                console.log(form);
                console.log(crudType);
                alert("요청이 처리되었습니다");
                this.props.history.push("/Community");
            })
            .catch((err) => {
                alert("error: " + err.response.data.msg);
            });
        };
        if(crud ==="Delete"){
            axios
            .post(crudType, form)
            
            .then((res) => {
                console.log(form);
                console.log(crudType);
                alert("요청이 처리되었습니다");
                this.props.history.push("/Community");
            })
            .catch((err) => {
                alert("error: " + err.response.data.msg);
            });
        };
        
        // axios의 post method로 props의 data(crudType, form)를 넘기고
        // 성공했을 때(.then) .push('/')로 메인 페이지로 forward해주고
        // 실패했을 때(.catch) error message를 alert
    }

    getData() {
        axios.get("/Community/view.do?=").then((res) => {
            const data = res.data;
            this.setState({
                bnum: data.bnum,
                btitle: data.btitle,
                btext: data.btext,
            });
        });
    }

    upload() {
        axios.post("/CUpload/uploadAjax").then((res) => {
            const data = res.data;
            this.setState({
                fileName: data.fileName,
                uuid: data.uuid,
                folderPath: data.folderPath,
            });
        });
    }
    
    
    // view에서 넘어올 때에는 controller에서 넘어온 data를 props에 붙여
    // 출력할 수 있도록 함

    createArticleIdTag() {
        const bnum = this.state.bnum;
        const crud = this.state.crud;
        if (crud !== "Insert") {
            return <input type="hidden" value={bnum} readOnly />;
        } else {
            return null;
        }
    }
    // Insert를 제외한 기능의 경우 이미 존재하는 값을 받아오기 때문에
    // articleId를 readOnly 처리하여 수정할 수 없도록 함

    // TEST
    


    render() {
    
        const btitle = this.state.btitle;
        const btext = this.state.btext;
        const bwriter = this.state.bwriter;
       

        return (
            
            <>
                <div className="container-fluid px-5 my-5" id="cudbody">
                    <Card className="px-5 py-5 d-flex bg-body formBody kfont2" style={{borderColor: "#4C51BD"}}>
                    {contextValue => <h3>{`contextValueva : ${contextValue}`}</h3>}
                    <p className="fs-2 my-3 pb-2 mcolor1" style={{borderBottom: "1px solid", borderColor: "#4C51BD"}}>게시글 {this.createHeaderName()}</p>
                    {this.createArticleIdTag()}
                    <p className="fs-4 my-2">제목</p>
                    <input
                        type="text"
                        name={btitle}
                        value={btitle}
                        className='my-2 form-control inputTitle'
                        onChange={(event) =>{
                            this.setState({ btitle: event.target.value })
                        }
                            
                        }
                    />
                    {/* input form에 값이 변경되었을 때에(onChange)
                        해당 값을 props에 setState로 저장함 */}
                    <br />
                    <p className="fs-4 my-2">내용</p>
                    <textarea
                        rows="10"
                        cols="20"
                        name={btext}
                        value={btext}
                        className='mb-2 form-control'
                        style={{resize: 'none'}}
                        onChange={(event) =>
                            this.setState({ btext: event.target.value })
                        }
                    ></textarea>
                    
                    
                    <p className="fs-3 mt-2">File upload</p>
                    <div className="input-group mb-5">
                        <input name="uploadFiles" type="file" accept="image/*"  
                            className="form-control inputText"
                        />

                        <input type={"hidden"} name ="fileName" id="fileName"
                            onClick={(event) =>
                                this.setState({ fileName: event.target.value })
                            }
                        ></input>

                        <input type={"hidden"} name ="uuid" id="uuid"
                            onClick={(event) =>
                                this.setState({ uuid: event.target.value })
                            }
                        ></input>

                        <input type={"hidden"} name ="folderPath" id="folderPath"
                            onClick={(event) =>
                                this.setState({ folderPath: event.target.value })
                            }
                        ></input>

                        <button className="uploadBtn btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Upload</button>
                    </div>


                    {/* <div className="float-end">
                        <button class="uploadBtn btn btn-md btn-success">
                            <p class="float-start" style={{marginBottom:'auto'}}>Upload</p>
                        </button>
                    </div> */}

                    <div class="uploadResult">

                    </div>
                    
                    <p className="fs-4">글쓴이</p>
                    <input
                        type="text"
                        name={bwriter}
                        value={bwriter}
                        className="form-control inputRegdate"
                        onChange={(event) =>{
                            this.setState({ bwriter: event.target.value })
                        }
                        }
                    />

                    
                    <br /> <br />
                        <div className="d-flex mt-2 trigger">
                            {this.createCrudBtn()}
                        </div>
                        {/* createCrudBtn() method 선언부 참고 */}
                    </Card>
                    <div className="mt-5 d-flex flex-row-reverse">
                        <Link to={"/Community"}>
                            <Button className="" color="dark" outline>
                                취소
                            </Button>
                        </Link>
                    </div>
                
                </div>
            </>

        );
    }
}

export default CBoardCUD;