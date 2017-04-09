$("document").ready( function() {

                   $.ajax({
                       type: 'GET',
                        //url : 'https://api.myjson.com/bins/1179df',
                       url : 'http://acadprojects.com/py/notes/sharing/note',
                       dataType:'json',
                       success : function(result)  {
                            console.log(result["latest"]["QuestionPapers"][0]["name"]);
                            console.log(result["latest"]["StudyMaterials"][0].imgs);
                           $("#MoreSee1").on('click',function() {

                            });
                            AppendsValue("latest");                     

                          $("#SearchBtn").on('click',function(e) {
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
                                var lengths = result[a]["QuestionPapers"].length;                          


                             for(var i=0;i<lengths;i++) {                  
                                console.log(result[a]["QuestionPapers"][i].imgs);

                                $("#QuestionContainer").append(
                                '<div class="col-md-4 QuestionBoxContainer"><div class="NotesContainer"><div class="noteImg"><img id="paperimg" src=assets/images/' +  result[a]["QuestionPapers"][i].imgs  + ' class="img-responsive"></div><div class="noteContent"><h3 class="text-center" id="nameNote">' +  result[a]["QuestionPapers"][i].name + '</h3><p id="NoteDescription">' + result[a]["QuestionPapers"][i].desc +  '</p><div class="icons"><p><span class="span" id="download">' + result[a]["QuestionPapers"][i].downloads +' </span><span class="glyphicon glyphicon-download-alt"></span><span class="span"></span> <span class="glyphicon glyphicon-share" data-toggle="modal" data-target="#myModal1"></span><span class="span" id="likes">' +  result[a]["QuestionPapers"][i].likes + ' Likes </span><span class="glyphicon glyphicon-thumbs-up"></span><p></div></div></div></div>');
                            }


                                 var lengthsStudy = result[a]["StudyMaterials"].length; 



                                 for(var i=0;i<lengthsStudy;i++) {                  

                                $("#StudyMaterials").append(
                                '<div class="col-md-4 QuestionBoxContainer"><div class="NotesContainer"><div class="noteImg"><img id="paperimg" src=assets/images/' +  result[a]["StudyMaterials"][i].imgs  + ' class="img-responsive"></div><div class="noteContent"><h3 class="text-center" id="nameNote">' +  result[a]["StudyMaterials"][i].name + '</h3><p id="NoteDescription">' + result[a]["StudyMaterials"][i].desc +  '</p><div class="icons"><p><span class="span" id="download">' + result[a]["StudyMaterials"][i].downloads +' </span><span class="glyphicon glyphicon-download-alt"></span><span class="span"></span><span class="glyphicon glyphicon-share"></span><span class="span" id="likes">' +   result[a]["StudyMaterials"][i].likes + ' </span><span class="glyphicon glyphicon-thumbs-up"></span><p></div></div></div></div>');
                            }


                            }

                            // ON CC button Click
                            $("#CloudBtn").on("click",function() {
                                $("#QuestionContainer").html(''); 
                                $("#StudyMaterials").html(''); 
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
                            }*/

                        },
                        error: function() {
                            alert("error");
                        }
                    });

            });
        