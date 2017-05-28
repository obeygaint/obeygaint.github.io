//edit node info
function editNode(data, callback) {
      document.getElementById('nodeNum').value = data.id;
      document.getElementById('nodeLabel').value = data.label;
      document.getElementById('nodeSaveButton').onclick = saveNodeData.bind(this, data, callback);
      document.getElementById('nodeCancelButton').onclick = clearNodePopUp.bind();
      document.getElementById('nodePopUp').style.display = 'block';
    }
//clear pop-up window
function clearNodePopUp() {
      document.getElementById('nodeSaveButton').onclick = null;
      document.getElementById('nodeCancelButton').onclick = null;
      document.getElementById('nodePopUp').style.display = 'none';
    }
//cancel node edit
function cancelNodeEdit(callback) {
      clearNodePopUp();
      callback(null);
    }

//Adding new node to canvas
function saveNodeData(data, callback) {
      data.num = document.getElementById('nodeNum').value;
      data.label = document.getElementById('nodeLabel').value;
      template = "<div><p>№ ГК: <span>"+
      data.num+
      "</span></p><p>Описание: <span>"+
      data.label+
      "</span></div>"
      data.title = template;
      clearNodePopUp();
      callback(data);
    }

function editEdgeWithoutDrag(data, callback) {
      // filling in the popup DOM elements
      document.getElementById('edgeLabel').value = data.label;
      document.getElementById('edgeSaveButton').onclick = saveEdgeData.bind(this, data, callback);
      // document.getElementById('edgeCancelButton').onclick = cancelEdgeEdit.bind(this,callback);
      document.getElementById('edgePopUp').style.display = 'block';
    }
//clear popup
function clearEdgePopUp() {
      document.getElementById('edgeSaveButton').onclick = null;
      // document.getElementById('edgeCancelButton').onclick = null;
      document.getElementById('edgePopUp').style.display = 'none';
    }

function cancelEdgeEdit(callback) {
      clearEdgePopUp();
      callback(null);
    }

function saveEdgeData(data, callback) {
      if (typeof data.to === 'object')
        data.to = data.to.id
      if (typeof data.from === 'object')
        data.from = data.from.id
      data.label = document.getElementById('edgeLabel').value;
      clearEdgePopUp();
      callback(data);
    }
function addNewNodeFromModal() {
  template = "<div><p>№ ГК: <span>"+
  $('#nodeNum').val()+
  "</span></p><p>Описание: <span>"+
  $('#nodeLabel').val()
  "</span></div>"
  var node = {
    id: $('#nodeNum').val(),
    label: $('#nodeLabel').val(),
    x: $('#nodeX').val(),
    y: $('#nodeY').val(),
    title: template
  }
  nodes.update(node);
  $('#nodeModal').modal('hide');
  clearNodeModal();
}

function removeNode() {
  try {
    nodes.remove({id: $('#nodeNum').val() })
    $('#nodeModal').modal('hide');
    clearNodeModal();
  } catch (e) {
    console.log(e);
  }
}

function saveEdge() {
  var edge = {
    id: $('#edgeNum').val(),
    label: $("#edgeLabel").val()
  }
  edges.update(edge);
  $('#edgeModal').modal('hide');
}

function clearNodeModal() {
  $('#nodeX').val('');
  $('#nodeY').val('');
  $('#nodeNum').val('');
  $('#nodeLabel').val('');
}
