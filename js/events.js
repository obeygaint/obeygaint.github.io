  const CANVAS = 0;
  const NODE = 1;
  const EDGE = 2;

function toggelePhysics(){
  var status = document.getElementById('physicsStatus').checked;
  network.physics.physicsEnabled = status;
}
function initializeEvents() {
  network.on("doubleClick", function (params) {
      var clickedObjectType = CANVAS; //0-canvas 1-node 2-edge
      if(params.nodes.length > 0) {
        clickedObjectType = NODE;
      } else if (params.edges.length > 0) {
        clickedObjectType = EDGE;
      }
      console.log(clickedObjectType);
      switch (clickedObjectType) {
        case CANVAS: //Add new Node
          var coordinates = params.pointer.canvas;
          $('#nodeX').val(coordinates.x);
          $('#nodeY').val(coordinates.y);
          $('#nodeModal').modal('show');
          // document.getElementById('nodeOper').innerHTML = "Add Node";
          // editNode(params.nodes[0]);
          break;
        case NODE:
          var selectedNode = nodes.get(params.nodes[0]);
          $('#nodeNum').val(selectedNode.id);
          $('#nodeLabel').val(selectedNode.label);
          $('#nodeX').val(selectedNode.x);
          $('#nodeY').val(selectedNode.y);
          $('#nodeModal').modal('show');
          break;
        case EDGE:
          var selectedEdge = edges.get(params.edges[0]);
          $('#edgeNum').val(selectedEdge.id);
          $("#edgeLabel").val(selectedEdge.label);
          $('#edgeModal').modal('show');
          break;
        default:

      }
  });
  network.on('doubleClick',function (params) {
    console.log('doubleClicked');
  });

  network.on("select", function (params) {
    console.log(params);
    if (params.nodes.length === 2) {
      console.log(params);
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

  network.on("dragEnd", function (params) {
    for (var i = 0; i < params.nodes.length; i++) {
        var nodeId = params.nodes[i];
        var coordinates = params.pointer.canvas
        nodes.update({id: nodeId, x:coordinates.x, y:coordinates.y});
    }
  });
  // network.on('dragStart', function(params) {
  //   for (var i = 0; i < params.nodes.length; i++) {
  //       var nodeId = params.nodes[i];
  //       nodes.update({id: nodeId, fixed: {x: false, y: false}});
  //   }
  // });
}
