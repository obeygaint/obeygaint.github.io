var network;
var nodes;
var edges;
function init() {
  nodes = new vis.DataSet([
          {id: 1, label: 'Node 1', physics: false, x:-214,y:-26},
          {id: 2, label: 'Node 2', physics: false},
          {id: 3, label: 'Node 3', physics: false},
          {id: 4, label: 'Node 4', physics: false},
          {id: 5, label: 'Node 5', physics: false}
      ]);

      // create an array with edges
      edges = new vis.DataSet([
          {from: 1, to: 3 , label: 'test', physics: false,  type:'arrow'},
          {from: 1, to: 2, physics: false},
          {from: 2, to: 4, physics: false},
          {from: 2, to: 5, physics: false}
      ]);

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
      smooth: {
        type: "discrete",
        forceDirection: "none"
      }
    },
      layout: {
      randomSeed: 1,
      improvedLayout:true,
      hierarchical: {
        enabled:false,
        levelSeparation: 150,
        nodeSpacing: 100,
        treeSpacing: 200,
        blockShifting: true,
        edgeMinimization: true,
        parentCentralization: true,
        direction: 'UD',        // UD, DU, LR, RL
        sortMethod: 'hubsize'   // hubsize, directed
            }
          }
    }

      // initialize your network!
      network = new vis.Network(container, data, options);
      network.on("click", function (params) {
            alert('event test');
        });


      network.moveTo({
        position: {x: 0, y: 0},
        offset: {x: -width/2, y: -height/2},
        scale: 1,
    })

//Events
}

function addNode() {
    try {
        nodes.add({
            id: undefined,
            label: document.getElementById('nodeName').value
            });
        } catch (err) {
             alert(err);
        }
}

