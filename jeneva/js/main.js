$(document).on('focusin', '.search-btn', function(){
  $('.search-btn').addClass('focus-fild');
});

$(document).on('focusout', '.search-btn', function(){
  $('.search-btn').removeClass('focus-fild');
});