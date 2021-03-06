$(function()  {

  $('.btn-delete').click(function(e) {
    e.preventDefault();

    var endpoint = $(this).attr('href');
    var modalId = $(this).data('modal') ? $(this).data('modal') : 'smartcrud-delete';
    var modal = $('#' + modalId).modal('show');
    var confirmButton = modal.find('.btn-confirm');

    confirmButton.off('click').on('click', function(e) {
      e.preventDefault();
      $.post(endpoint, {}, function() {
        modal.modal('hide');
        window.location.reload();
      });
    })
  });

});