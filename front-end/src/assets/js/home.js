/* eslint-disable */
export default function initHome(){

  $("p.title").on('click',function(){
    $(".con").slideUp(100);
    $(this).next(".con").slideDown(100);
  });
 
}