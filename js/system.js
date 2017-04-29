var network;
var nodes;
var edges;
//
function init() {
  document.getElementById('files').addEventListener('change', handleFileSelect, false);
  nodeTitle = "<div><p>№ ГК <span>123</span></p><p>№ ГК <span>123</span></p><p>№ ГК <span>123</span></p></div>"
  nodes = new vis.DataSet();

      // create an array with edges
      edges = new vis.DataSet(
      //   [
      //     {from: 1, to: 3 , label: 'test', physics: false,  type:'arrow'},
      //     {from: 1, to: 2, physics: false},
      //     {from: 2, to: 4, physics: false},
      //     {from: 2, to: 5, physics: false}
      // ]
      );

      // create a network
      var container = document.getElementById('mynetwork');

      // provide the data in the vis format
      var data = {
          nodes: nodes,
          edges: edges
      };
      var options = {
      nodes:{
        fixed: {
          x:false,
          y:false
        }
      },
       edges: {
        arrows: {
            to: {enabled: true, scaleFactor:1, type:'arrow'}
        }
        // smooth: {
        //   type: "curvedCW",
        // }
      },
      interaction:{
        hover: true,
        multiselect: true
      },
      // configure: { // FOR DEBUG ONLY
      //   enabled: true,
      //   showButton: true
      // },
      layout: {
        randomSeed: 1,
        // improvedLayout:true,
        // hierarchical: {
        //   enabled:false,
        //   levelSeparation: 150,
        //   nodeSpacing: 100,
        //   treeSpacing: 200,
        //   blockShifting: true,
        //   edgeMinimization: true,
        //   parentCentralization: true,
        //   direction: 'LR',        // UD, DU, LR, RL
        //   sortMethod: 'directed'   // hubsize, directed
        //   }
      },
      physics :{
        enabled:false,
        // maxVelocity: 150,
        // solver: 'forceAtlas2Based',
        // minVelocity: 2,
        // stabilization: {
        //   enabled: true,
        //   iterations: 100,
        //   updateInterval: 10,
        // }

      },
        manipulation: {
            enabled: true,
            addNode: function (data, callback) {
                // filling in the popup DOM elements
                document.getElementById('nodeOper').innerHTML = "Add Node";
                editNode(data, callback);
            },
            editNode: function (data, callback) {
                // filling in the popup DOM elements
                document.getElementById('nodeOper').innerHTML = "Edit Node";
                editNode(data, callback);
            },
            addEdge: function (data, callback) {
                if (data.from == data.to) {
                  var r = confirm("Do you want to connect the node to itself?");
                  if (r != true) {
                    callback(null);
                    return;
                  }
                }
                document.getElementById('edgeOperation').innerHTML = "Add Edge";
                editEdgeWithoutDrag(data, callback);
            },
            editEdge: {
                editWithoutDrag: function(data, callback) {
                  document.getElementById('edgeOperation').innerHTML = "Edit Edge";
                  editEdgeWithoutDrag(data,callback);
                }
            }
        }
    }


      network = new vis.Network(container, data, options);
      //Events
      initializeEvents();

      width = document.getElementById('mynetwork').offsetWidth;
      height = document.getElementById('mynetwork').offsetHeight;
      network.moveTo({
        position: {x: 0, y: 0},
        offset: {x: (-width/2) , y: (-height/2)},
        scale: 1,
    })

//Events
}
