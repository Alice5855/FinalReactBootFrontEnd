$(".Trigger").on("click" , function(){
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
 

    //실제 업로드 부분
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


                $('input[name=fileName]').attr('value',fileName);
                $('input[name=uuid]').attr('value',uuid);
                $('input[name=folderPath]').attr('value',folderPath);

                // console.log("뭐드감?" + result[i].folderPath);
                // console.log("뭐드감?" +result[i].uuid);
                // console.log("뭐드감?" +result[i].fileName);

                console.log("뭐드감?" + folderPath);
                console.log("뭐드감?" + uuid);
                console.log("뭐드감?" + fileName);
              
                
              
                
           
            console.log(result[0].folderPath);
            console.log(result[0].uuid);
            console.log(result[0].fileName);
            console.log("뭐드감?" +result.length);

            
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
        str += "<img src='/CUpload/display?fileName="+arr[i].thumbnailURL+"'>";
        str += "<button class='removeBtn' data-name='"+arr[i].imageURL+"'>REMOVE</button>"
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
            console.log("이거 왜 팔스 뜨냐 ㅡㅡ" + targetDiv)
        }
    } )

});