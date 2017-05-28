var network;
var nodes;
var edges;
//
function init() {

      var nodes = new vis.DataSet([
        // {id: 1, label: 'Node 1'},
        // {id: 2, label: 'Node 2'},
        // {id: 3, label: 'Node 3'},
        // {id: 4, label: 'Node 4'},
        // {id: 5, label: 'Node 5'}
      ]);

      // create an array with edges
      var edges = new vis.DataSet([
        // {from: 1, to: 3},
        // {from: 1, to: 2},
        // {from: 2, to: 4},
        // {from: 2, to: 5},
        // {from: 3, to: 3}
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
        arrows: {
            to: {enabled: true, scaleFactor:1, type:'arrow'}
        },
        smooth: false
        //   type: "curvedCW",
        // }
      },
      interaction:{
        hover: true,
        multiselect: true
      },
      // configure: { // commnent out for enable settings
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
      },
    }


      network = new vis.Network(container, data, options);
      //Events
      // initializeEvents();

    //   width = $('#mynetwork').offsetWidth;
    //   height = $('#mynetwork').offsetHeight;
    //   network.moveTo({
    //     position: {x: 0, y: 0},
    //     offset: {x: (-width/2) , y: (-height/2)},
    //     scale: 1,
    // })

//Events
}
