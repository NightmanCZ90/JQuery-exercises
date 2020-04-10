$(".add").on("click", () => {
  addTodo = $("input").val(); //input value
  $("ul").append(`<li>${addTodo}</li>`); // add the value in the list
  $("input").val(""); // delete value from input
});
$("ul").on("click", "li", function(){
  $(this).toggleClass("scratched");
})
