  const CANVAS = 0;
  const NODE = 1;
  const EDGE = 2;

function initializeEvents() {
  network.on("doubleClick", function (params) {
      var clickedObjectType = CANVAS; //0-canvas 1-node 2-edge
      if(params.nodes.length > 0) {
        clickedObjectType = NODE;
      } else if (params.edges.length > 0) {
        clickedObjectType = EDGE;
      }
      switch (clickedObjectType) {
        case CANVAS:
          break;
        case NODE:
          break;
        case EDGE:
          break;
        default:

      }
  });
  network.on("dragEnd", function (params) {
    for (var i = 0; i < params.nodes.length; i++) {
        var nodeId = params.nodes[i];
        var coordinates = params.pointer.canvas
        nodes.update({id: nodeId, x:coordinates.x, y:coordinates.y});
    }
  });
}
