"use strict"

const setTheme = (theme) => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }

  const getTheme = () => {
    const theme = localStorage.getItem('theme');
    theme && setTheme(theme);
  }
   
  getTheme();

  $('.show-modal').on('click',function(){
    $('#modal').show();
});
  $('.gallery-modal__close').on('click',function(){
    $('#modal').hide();
});
$('.gallery-modal').on("click", function(e) {
  if ($(e.target).closest('.gallery-modal__container').length == 0) {
      $(this).fadeOut();					
  }
});