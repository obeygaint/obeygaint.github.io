function editNode(data, callback) {
      document.getElementById('nodeLabel').value = data.label;
      document.getElementById('nodeSaveButton').onclick = saveNodeData.bind(this, data, callback);
      document.getElementById('nodeCancelButton').onclick = clearNodePopUp.bind();
      document.getElementById('nodePopUp').style.display = 'block';
    }

    function clearNodePopUp() {
      document.getElementById('nodeSaveButton').onclick = null;
      document.getElementById('nodeCancelButton').onclick = null;
      document.getElementById('nodePopUp').style.display = 'none';
    }

    function cancelNodeEdit(callback) {
      clearNodePopUp();
      callback(null);
    }

    function saveNodeData(data, callback) {
      data.label = document.getElementById('nodeLabel').value;
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