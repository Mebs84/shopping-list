$(document).ready(function () {
  $('#js-shopping-list-form').submit(function (event) {
    event.preventDefault();
    const addListItem = $("#shopping-list-entry").val();
    $(".shopping-list").append(' <li><span class="shopping-item">'
      + addListItem +
      `</span>
          <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div></li>`
    );
  });

  $(".shopping-item-toggle").click(function (event) {
    $(this).closest("li").find(".shopping-item")
      .toggleClass("shopping-item__checked");
  });

  $(".shopping-item-delete").click(function (event) {
    $(this).closest("li").remove()
  });

});








/*<ul class="shopping-list">
 <li>
   <span class="shopping-item">["shoppingListItem"]</span>
   <div class="shopping-item-controls">
     <button$() class="shopping-item-toggle">
       <span class="button-label">check</span>
     </button>
     <button class="shopping-item-delete">
       <span class="button-label">delete</span>
     </button>
   </div>
})
}






//.remove();
//$.toggleClass("shopping-list-item-toggle");
*/