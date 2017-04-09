$("document").ready( function() {
    
            CategoryResult('');
            function CategoryResult(a) {
                   
                
                   $.ajax({
                       type: 'GET',                        
                       url : 'http://acadprojects.com/py/notes/sharing/note' + a,
                       dataType:'json',
                       success : function(result)  {
                            alert("working");
                           $("#QuestionContainer").html('');
                           $("#StudyMaterials").html('');
                           $("#ProjectReports").html('');
                           
                                var lengths = result.notes.length;                         

                                    
                                for(var i=0;i<lengths;i++) {                  
                                //console.log(result[a]["QuestionPapers"][i].imgs);

                                    var myNotes = result.notes[i];                              
                                    var type = result.notes[i]["document_type"];
                                 alert(type);
                            if(type == 'Question Papers' || type == 'Question Paper') {
                                $("#QuestionContainer").append(
                                '<div class="col-md-4 QuestionBoxContainer"><div class="NotesContainer"><div class="noteImg"><img id="paperimg" src=' +  myNotes.image_url  + ' class="img-responsive"></div><div class="noteContent"><h3 class="text-center" id="nameNote">' +   myNotes["doc_name"] + '</h3><p id="NoteDescription">' + myNotes["doc_description"] +  '</p><div class="icons"><p><a href="' + myNotes.doc_url +'" target="_blank"> <span class="glyphicon glyphicon-download-alt"></span></a><span class="span"></span> <span class="glyphicon glyphicon-share" data-toggle="modal" data-target="#myModal1"></span><span class="span" id="likes">' +  myNotes.like_count + ' </span><span class="glyphicon glyphicon-thumbs-up"></span><p></div></div></div></div>');
                            }
                            else if(type == 'Study Material')  {
                                $("#StudyMaterials").append(
                                    '<div class="col-md-4 QuestionBoxContainer"><div class="NotesContainer">    <div class="noteImg"><img id="paperimg" src=' +  myNotes.image_url  +   ' class="img-responsive"></div><div class="noteContent"><h3 class="text-center" id="nameNote">' +   myNotes["doc_name"] + '</h3><p id="NoteDescription">' + myNotes["doc_description"] +  '</p><div class="icons"><p><a href="' + myNotes.doc_url +'" target="_blank"> <span class="glyphicon glyphicon-download-alt"></span></a><span class="span"></span> <span class="glyphicon glyphicon-share" data-toggle="modal" data-target="#myModal1"></span><span class="span" id="likes">' +  myNotes.like_count + ' </span><span class="glyphicon glyphicon-thumbs-up"></span><p></div></div></div></div>');
                            } else if (type == 'Project Report') {
                                 $("#ProjectReports").append(
                                '<div class="col-md-4 QuestionBoxContainer"><div class="NotesContainer"><div class="noteImg"><img id="paperimg" src=' +  myNotes.image_url  + ' class="img-responsive"></div><div class="noteContent"><h3 class="text-center" id="nameNote">' +   myNotes["doc_name"] + '</h3><p id="NoteDescription">' + myNotes["doc_description"] +  '</p><div class="icons"><p><a href="' + myNotes.doc_url +'" target="_blank"> <span class="glyphicon glyphicon-download-alt"></span></a><span class="span"></span> <span class="glyphicon glyphicon-share" data-toggle="modal" data-target="#myModal1"></span><span class="span" id="likes">' +  myNotes.like_count + ' </span><span class="glyphicon glyphicon-thumbs-up"></span><p></div></div></div></div>');
                            }

                        }

                    
                            
                        },
                        error: function() {
                            alert("error");
                        }
                    });
                
                }   
                                
                            // ON Arts button Click
                            $("#artsBtn").on("click",function() {                                 
                                CategoryResult('?category=arts');                            
                            });

                            // ON Science button Click
                            $("#SciBtn").on("click",function() {                                
                                CategoryResult('?category=science');

                            });

                            // ON Latest button Click
                            $("#latestbtn").on("click",function() {                                
                                CategoryResult('');

                            });

                            // ON Engineering button Click
                            $("#EnngBtn").on("click",function() {                                
                                CategoryResult('?category=engineering');

                            });

                            // ON Mathematics button Click
                            $("#MathsBtn").on("click",function() {                                 
                                CategoryResult('?category=mathematics');

        
                            });                            
    
    
        /**** Submission Button **********/
     
    
     /*   $("#submissionUpload").on('click',function() {
               
                
        
                    var $categorySel = $("#categorySel").val();
                    var $Doctype = $("#SelDocType").val();
                    var $NoteName = $("#NoteName").val();
                    var $DescNote = $("#comment").val();
            
                    console.log($categorySel + ' '+ $Doctype + ' ' + $NoteName  +  ' ' +  $DescNote);
            
            var formd= new FormData();
            formd.append('doc_name',$NoteName);
            formd.append('category',$categorySel);
            formd.append('document_type',$Doctype);
            formd.append('doc_description',$DescNote);
            
            $.ajax({
               
                url: 'http://acadprojects.com/py/notes/sharing/note',
                type:'POST',
                data :formd,
                processData: false,  
                contentType: false,
                success :function(result) {
                    console.log(result);
                    alert("File Successfully Uploaded!!");
                    $('#myModal').modal('toggle');
                    location.reload();
                },
                error: function() {

                    alert("error");
                },

            });
        });*/
    
            
    

});



                




        
/*
 $.ajax({
                       type: 'GET',
                        //url : 'https://api.myjson.com/bins/1179df',
                       url : 'http://acadprojects.com/py/notes/sharing/note',
                       dataType:'json',
                       success : function(result)  {
                        
                        
                    //                         $("#MoreSee1").on('click',function() {
    //                        });
                           
                            AppendsValue("latest");                     

                          /*$("#SearchBtn").on('click',function(e) {
                              e.preventDefault();
                              $("#QuestionContainer").html(' ');
                                var vals = $("#searchCtn").val().toLowerCase();
                           alert(vals);      


                              for(var key in result) {      

                                console.log(result[key]);                            
                                for(var key1 in result[key]) {

        //                            console.log(result[key][key1]);
                                    var resultLength = result[key][key1].length;

                                    for(var i=0;i<resultLength;i++) {
          //                              console.log();
                                     if(result[key][key1][i]["name"].toLowerCase() == vals) {
                                            console.log(result[key][key1][i]["name"] + "workinh");

                                         console.log(result[key][key1][i].imgs);


                                $("#QuestionContainer").append(
                                '<div class="col-md-4 QuestionBoxContainer"><div class="NotesContainer"><div class="noteImg"><img id="paperimg" src=assets/images/' +  result[key][key1][i].imgs  + ' class="img-responsive"></div><div class="noteContent"><h3 class="text-center" id="nameNote">' +  result[key][key1][i].name + '</h3><p id="NoteDescription">' + result[key][key1][i].desc +  '</p><div class="icons"><p><span class="span" id="download">' + result[key][key1][i].downloads +' </span><span class="glyphicon glyphicon-download-alt"></span><span class="span"></span> <span class="glyphicon glyphicon-share" data-toggle="modal" data-target="#myModal1"></span><span class="span" id="likes">' +  result[key][key1][i].likes + ' Likes </span><span class="glyphicon glyphicon-thumbs-up"></span><p></div></div></div></div>');
                                         break;


                                        } else {

                                            console.log(result[key][key1][i]["name"] + ' doesnot workig' );                              
                                        }
        //                                    console.log(result[key][key1]);
                                    }
                                }
                            }


                          });


    
                                

                            function AppendsValue(a) {                                             
                            
                                var lengths = result.notes.length;                         

                                    
                                for(var i=0;i<lengths;i++) {                  
                                //console.log(result[a]["QuestionPapers"][i].imgs);

                                    var myNotes = result.notes[i];                              
                                    var type = result.notes[i]["document_type"];
                                 
                            if(type == 'Question Papers') {
                                $("#QuestionContainer").append(
                                '<div class="col-md-4 QuestionBoxContainer"><div class="NotesContainer"><div class="noteImg"><img id="paperimg" src=' +  myNotes.image_url  + ' class="img-responsive"></div><div class="noteContent"><h3 class="text-center" id="nameNote">' +   myNotes["doc_name"] + '</h3><p id="NoteDescription">' + myNotes["doc_description"] +  '</p><div class="icons"><p><a href="' + myNotes.doc_url +'" target="_blank"> <span class="glyphicon glyphicon-download-alt"></span></a><span class="span"></span> <span class="glyphicon glyphicon-share" data-toggle="modal" data-target="#myModal1"></span><span class="span" id="likes">' +  myNotes.like_count + ' </span><span class="glyphicon glyphicon-thumbs-up"></span><p></div></div></div></div>');
                            }
                            else if(type == 'Study Material')  {
                                $("#StudyMaterials").append(
                                    '<div class="col-md-4 QuestionBoxContainer"><div class="NotesContainer">    <div class="noteImg"><img id="paperimg" src=' +  myNotes.image_url  +   ' class="img-responsive"></div><div class="noteContent"><h3 class="text-center" id="nameNote">' +   myNotes["doc_name"] + '</h3><p id="NoteDescription">' + myNotes["doc_description"] +  '</p><div class="icons"><p><a href="' + myNotes.doc_url +'" target="_blank"> <span class="glyphicon glyphicon-download-alt"></span></a><span class="span"></span> <span class="glyphicon glyphicon-share" data-toggle="modal" data-target="#myModal1"></span><span class="span" id="likes">' +  myNotes.like_count + ' </span><span class="glyphicon glyphicon-thumbs-up"></span><p></div></div></div></div>');
                            } else if (type == 'Project Report') {
                                 $("#ProjectReports").append(
                                '<div class="col-md-4 QuestionBoxContainer"><div class="NotesContainer"><div class="noteImg"><img id="paperimg" src=' +  myNotes.image_url  + ' class="img-responsive"></div><div class="noteContent"><h3 class="text-center" id="nameNote">' +   myNotes["doc_name"] + '</h3><p id="NoteDescription">' + myNotes["doc_description"] +  '</p><div class="icons"><p><a href="' + myNotes.doc_url +'" target="_blank"> <span class="glyphicon glyphicon-download-alt"></span></a><span class="span"></span> <span class="glyphicon glyphicon-share" data-toggle="modal" data-target="#myModal1"></span><span class="span" id="likes">' +  myNotes.like_count + ' </span><span class="glyphicon glyphicon-thumbs-up"></span><p></div></div></div></div>');
                            }

                        }

                    }                                                 

                                

                            

                            // ON CC button Click
                            $("#CloudBtn").on("click",function() {
                                $("#QuestionContainer").html(''); 
                                $("#StudyMaterials").html(''); 
                                $("#ProjectReports").html(''); 
                                AppendsValue("cc");

                            });

                            // ON SE button Click
                            $("#SEbtn").on("click",function() {
                                $("#QuestionContainer").html('');
                                $("#StudyMaterials").html(''); 
                                AppendsValue("se");

                            });

                            // ON LatestBtn button Click
                            $("#latestbtn").on("click",function() {
                                $("#QuestionContainer").html('');
                                $("#StudyMaterials").html(''); 
                                AppendsValue("latest");

                            });

                            // ON C button Click
                            $("#CBtn").on("click",function() {
                                $("#QuestionContainer").html('');
                                $("#StudyMaterials").html(''); 
                                AppendsValue("c");

                            });

                            // ON C++ button Click
                            $("#cplusBtn").on("click",function() {
                                $("#QuestionContainer").html('');
                                $("#StudyMaterials").html(''); 
                                AppendsValue("c++");

                            });



                            /*    $("#nameNote").html(result.cc.name);            
                                $("#paperimg").attr("src","assets/images/" + result.cc.imgs);
                                $("#NoteDescription").html(result.cc.desc);
                                $("#download").html(result.cc.downloads);      
                                $("#likes").html(result.cc.likes);    */
                            /*var ars = result.results;
                            console.log(ars);*/

                            /*var lengths = ars.length;

                            for(var i=0;i<lengths;i++) {
                                console.log(ars[i]);
                            }

                        },
                        error: function() {
                            alert("error");
                        }
                    });

*/

   $('#submissionUpload').on('click',function(e){
            e.preventDefault();
            var $filename = $('#NoteName').val();
            var $sel2 = $('#SelDocType').val();
            var $sel1 = $('#categorySel').val(); 
            var $file_desc = $('#comment').val();
            
            console.log($filename);
            var formd = new FormData();
            formd.append('doc_name',$filename);
            formd.append('category',$sel1);
            formd.append('document_type',$sel2); 
            formd.append('doc_description',$file_desc);  
             formd.append('file', $('input[type=file]')[0].files[0]);

          $.ajax({
            url: 'http://acadprojects.com/py/notes/sharing/note',
            type: 'POST',
            data: formd,
            processData: false, // Don't process the files
            contentType: false,
            success: function(result){                
                  alert("File Successfully Uploaded!!");
                  $('#myModal').modal('toggle');
                  location.reload();
            }
          });
       
        });