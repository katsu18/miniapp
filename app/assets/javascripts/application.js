// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

$(function() {
  var edit = $(".btn-edit-text");
  var del = $(".btn-delete-text");
  var tokou = $("#tokou");

  $('.edit_form').hide();


  edit.on("click", function() {
    $(".edit_form").show();
    });

  edit.on("mouseover", function() {
    edit.css('font-weight','bold');
  });
  edit.on("mouseout", function() {
    edit.css('font-weight','normal ');
  });

  del.on("mouseover", function() {
    del.css('font-weight','bold');
  });
  del.on("mouseout", function() {
    del.css('font-weight','normal ');
  });


  del.on("mouseover", function() {
    del.css('font-weight','bold');
  });
  del.on("mouseout", function() {
    del.css('font-weight','normal ');
  });

  tokou.on("mouseover", function() {
    tokou.css('font-weight','1000');
  });
  tokou.on("mouseout", function() {
    tokou.css('font-weight','bold ');
  });


});