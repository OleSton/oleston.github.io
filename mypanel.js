//var textarea = document.getElementById("code");
var demo = document.getElementById("demo");
var numPanels = 0;
var panels = {};
var editor;

//textarea.value = demo.innerHTML.trim();
// editor = CodeMirror.fromTextArea(textarea, {
//   lineNumbers: true,
//   mode: "htmlmixed"
// });

function makePanel(where, mode) {
  var node = document.createElement("div");
  var id = ++numPanels;
  var widget, close, label, btn, input;

  node.id = "panel-" + id;
  node.className = "panel " + where;
  close = node.appendChild(document.createElement("a"));
  close.setAttribute("title", "Remove me!");
  close.setAttribute("class", "remove-panel");
  close.textContent = "✖";
  CodeMirror.on(close, "mousedown", function(e) {
    e.preventDefault()
    panels[node.id].clear();
  });

  if (mode == 1) {
    label = node.appendChild(document.createElement("span"));
    label.textContent = "The script has one line. Split into lines? ";

    btn = node.appendChild(document.createElement("button"));
    btn.textContent = "OK";
    btn.className = "convert";
    btn.setAttribute("OnClick", "ConvertTxt()");
  }
  if (mode == 2)
  {
    label = node.appendChild(document.createElement("span"));
    label.textContent = "File name, please: ";

  input = node.appendChild(document.createElement("input"));
  input.type = "text";
  input.className = "saveFileName";
  input.id = "saveFileName";

    btn = node.appendChild(document.createElement("button"));
    btn.textContent = "OK";
    btn.className = "convert";
    btn.setAttribute("OnClick", "SaveFile()");
}

  return node;
}
function addPanel(where, mode) {
  var node = makePanel(where, mode);
  let myHeight =  editor.getWrapperElement().offsetHeight;
  panels[node.id] = editor.addPanel(node, {position: where, stable: true});

  editor.getWrapperElement().style["height"] = myHeight - 34 + "px";
  editor.refresh();
}

//addPanel("top");
//addPanel("bottom");

function replacePanel(form) {
  var id = form.elements.panel_id.value;
  var panel = panels["panel-" + id];
  var node = makePanel("");

  panels[node.id] = editor.addPanel(node, {replace: panel, position: "after-top", stable: true});
  return false;
}

