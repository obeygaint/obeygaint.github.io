  const CANVAS = 0;
  const NODE = 1;
  const EDGE = 2;

function toggelePhysics(){
  var status = document.getElementById('physicsStatus').checked;
  network.physics.physicsEnabled = status;
}
function initializeEvents() {
  network.on("click", function (params) {
      var clickedObjectType = CANVAS; //0-canvas 1-node 2-edge
      if(params.nodes.length > 0) {
        clickedObjectType = NODE;
      } else if (params.edges.length > 0) {
        clickedObjectType = EDGE;
      }
      console.log(clickedObjectType);
      switch (clickedObjectType) {
        case CANVAS: //Add new Node
          $('#nodeModal').modal('show');
          // document.getElementById('nodeOper').innerHTML = "Add Node";
          // editNode(params.nodes[0]);
          break;
        case NODE:
          break;
        case EDGE:
          break;
        default:

      }
      //canvas click
      //node click
      //edge click
  });

  network.on("select", function (params) {
    if (params.nodes.length === 2) {
      edges.update({
        from: params.nodes[0],
        to: params.nodes[1]
       })
    }
      // alert('hold');
      //canvas click
      //node click
      //edge click
  });

  network.on("stabilized", function (param) {
        network.fit();
  });

  network.on("startStabilizing", function (param) {
        network.fit();
  });
}

function addNewNodeFromModal() {
  var node = {
    id: $('#nodeNum').val(),
    label: $('#nodeLabel').val()
  }
  nodes.update(node);
  $('#nodeModal').modal('hide');
  clearNodeModal();
}

function clearNodeModal() {
  $('#nodeNum').val('');
  $('#nodeLabel').val('');
}
