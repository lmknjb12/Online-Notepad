$(document).ready(function(){
    $('.btn_load').click(function(){
        if($.localStorage.isSet('memo')){
            $('.tarea').val($.localStorage.get('memo'));
        }
    });
    $('.btn_save').click(function(){
        $.localStorage.set('memo',$('.tarea').val());
        $('.logo').text('OM Memo');
        $('.disket').attr("src", "/check.jpg")
        setTimeout(function(){ 
            $('.disket').attr("src", "/disket.jpg")
        }, 2000);
    });
    $('input').click(function(){
        $('.logo').text('OM Memo');
    });
    $('.tarea').keyup(function(){
        $('.logo').text('* OM Memo');
    });
});

function reloading(){
    window.location = window.location
}

const downLoad = () => {
    let contents = tarea.value
      let fileDown ="data:text;charset=utf-8," + contents;
        
      let encodedUri = encodeURI(fileDown);
      let link = document.createElement("a");
      
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "onlinenotepad.txt");
      
      document.body.appendChild(link);
  
      link.click();
  
      document.body.removeChild(link);
}

function openTextFile(){
    $('.reloading').attr("src", "/리로딩2.jpg")
    setTimeout(function(){ 
        $('.reloading').attr("src", "/리로딩.jpg")
    }, 2000);
    var vvangsang = document.createElement("input");
    
    vvangsang.type="file";
    vvangsang.accpet = "text/plain, text/html, .jsp"

    vvangsang.click();
    vvangsang.onchange = function (event) {
        processFile(event.target.files[0])
    };
}

function processFile(file){
    var reader = new FileReader();
    reader.readAsText(file,"UTF-8");

    reader.onload = function () {
        tarea.innerText = reader.result;
    };
}
