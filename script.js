window.onload = function (){
    var changeOccured = document.getElementById('changeOccured'); 
    if (changeOccured === null)
    {
        document.getElementById('nextButtonSchedule').click();
var currentmsg = "on hold";
var msgval = document.getElementById('j_id62').innerHTML;

var start = new Date().getTime();
   var end = start;
   while(end < start + 7000) {
     end = new Date().getTime();
   }

   var checkhold = msgval.includes("hold")
if(!checkhold)   
   {    
    g = document.createElement('div');
    g.setAttribute("id", "changeOccured");     
    window.alert("Something changed babe!");
    
   }

else
{
    //
}

    }
    

}



