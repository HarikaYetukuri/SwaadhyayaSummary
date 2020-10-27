$(".dropdown-item").click(function(e){
e.stopPropagation();
var imgId = e.target.id;
$(".img").attr("src","images/"+imgId+".png")
})