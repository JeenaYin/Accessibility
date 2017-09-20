// The flag that indicates whether text-to-speech is on.
var isSpeaking = false; // Initially off
console.log('isSpeaking: ' + isSpeaking);

$(document).ready(function()
{
  var text; // A buffer for highlighted text

  $("*:not(body)").hover(
      function (e)
      {
        e.stopPropagation();
        $(this).addClass("highlight");

        // Put the text info to the buffer according to the type
        var tagname = this.tagName;
        if(tagname == 'IMG')
        {
          text = $(this).attr("title") ? $(this).attr("title") :
                 ($(this).attr("alt") ? $(this).attr("alt") :
                 ($(this).attr("src") ? $(this).attr("src") : ""));
        }
        else
        {
          text = $(this).text();
        }
      },
      function ()
      {
        $(this).removeClass("highlight");
        $(".highlight").removeClass("highlight")
        text = ""; // Remove the text
      }
   );

   // Control text-to-speech
   $(document).keydown(function(ev)
   {
     // The space bar controls text-to-speech
     if(ev.keyCode == 32)
     {
       // Prevent the page from schrolling down from pressing the space bar
       ev.preventDefault();
       // If text-to-speech is on, pressing space stops it.
       if (isSpeaking)
       {
         speechSynthesis.cancel();
         isSpeaking = false;
         console.log('Speech stopped manually!');
       }
       // If text-to-speech is off, pressing space starts it.
       else
       {
         console.log('Speech started!');
         var u = new SpeechSynthesisUtterance();
         u.text = text;
         console.log("> Reading: " + text);
         u.volume = 1;
         u.lang = 'en-US';
         u.rate = 0.9;
         u.onend = function(event)
         {
           isSpeaking = false; // Stopped at the end.
         };
         speechSynthesis.speak(u);
         isSpeaking = true;
       }
     }
   });
})
