
var colory= new Array("red", "blue", "yellow", "green");
$(document).ready(function(){ 
  $(".transcript").find("div").each(function(index) {
        var z=index%colory.length;
        $(this).css( "background-color", colory[z] );
  });
});

/*  

  $(document).ready(function(){
        var transcript = {{transcript|tojson|safe}}
        var people = {{people|tojson|safe}}
        
        var width= new Array(people.length);
        for(i=0; i<width.length;i++){
          width[i]=0;
        }
        var total_transcrip=0;
        
        for(i=0; i<transcript.length;i++){
          total_transcrip+= transcript[i][2].length;
          for(name=0; name < people.length;name++){
            if(transcript[i][1]==people[name][0]){
              width[name]+=transcript[i][2].length;
            }
          }       
        }
        for(i=0; i<width.length; i++){
          width[i]=(width[i]/total_transcrip)*100;
        }
        $( ".transcript div" ).each(function( index ) {
          $(this).style.width = Math.round(width[index]) + "%";
        });
        alert(total_transcrip + people[0][0] + Math.round(width[0]) + width[1]);
      });


$(document).ready(function(){
  var hello='{{ people[0][0]}}';
  alert(hello);
  
});


for( i=0; i< {{ people.length}}; i++){
    $(".transcript").text("hello");
  }
  
    var name={{page.people[i][0]}};
    var $div = $("<div>");
    $div.text(name);
    $(".transcript").append($div);
  */
  
