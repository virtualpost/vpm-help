$(document).ready(function($) {
  $('.nav').append('<li id="statusio"><a href="http://status.virtualpostmail.com" target="_blank">Status <i class="current-status-indicator"></i></a></li>');
  var sp = new StatusPage.page({ page: 'pr3rxxmdbwl8'});

  sp.status({
    success: function(data) {
      // adds the text description to the dropdown
      $('.current-status-description').text(data.status.description);
      // appends the status indicator as a class name so we can use the right color for the status light thing
      $('.current-status-indicator').addClass(data.status.indicator);
    }
  });    
});
