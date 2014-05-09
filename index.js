var template = require('./template.html');
var Dialog = require('dialog');
var dom = require('dom');

module.exports = function(){
  var button = dom(template)
    .on('click', openDialog);
  return button;
};

function openDialog(){
  var dialog = new Dialog('Hello World', 'Welcom human!')
    .closable()
    .modal();
  dialog.show();
}