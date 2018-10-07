$(function(){
   $(".sf-menu").superfish({
      delay:200,
      speed: "fast",
      cssArrows: false
   })
   .after("<nav id='my-menu'>").clone().appendTo("#my-menu");
   $("#my-menu").children("ul").removeClass("sf-menu");
   $("#my-menu").find("*").attr("style", '');

});
   $ (function() {
      $("#my-menu").mmenu({
         extensions:[
            'widescreen',
           
            'effect-menu-slide',
            'pagedim-black',
            "position-back",
            "position-right"

         ],
         navbar:{
            title:'<span>BEAUTY</span><span class="orange">_S</span>'
         },
         offCanvas:{
            position:'right'
         }
      });
   
      var $icon = $("#my-icon");
var API = $('#my-menu').data( "mmenu" );

$icon.on( "click", function() {
   API.open();
});

API.bind( "open:finish", function() {
   setTimeout(function() {
      $icon.addClass( "is-active" );
   }, 100);
});
API.bind( "close:finish", function() {
   setTimeout(function() {
      $icon.removeClass( "is-active" );
   }, 100);
});





   });
