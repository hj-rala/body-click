$('body').on('click', function(e){
  var $tgPoint = $(e.target);
  var $popCallBtn = $tgPoint.hasClass('cont')

  if ( !$popCallBtn) {
    $('.cont').removeClass('saveTxt');
    $('.saveLink').hide();
  }
});
