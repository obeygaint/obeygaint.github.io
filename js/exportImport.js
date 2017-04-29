function handleFileSelect(evt) {
	var file = evt.target.files[0]; // FileList object
    var reader = new FileReader();
          reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.

			data = JSON.parse(e.target.result);
			// nodes.update();
			nodes.clear();
			edges.clear();
			data.nodes.forEach(function(item,i,nodes){
				template = "<div><p>№ ГК: <span>"+
				item.num+
				"</span></p><p>Описание: <span>"+
				item.label+
				"</span></div>"
				item.title = template;
			});
			nodes.add(data.nodes);
			edges.add(data.edges);
			// network.redraw();
        };
      })(file);

      // Read in the image file as a data URL.
      reader.readAsText(file);
}


function saveNodeToFile(nodes) {
    var element = document.createElement('a');
    var edgesArr = edges.get({
    	fields: ['id', 'from','label', 'to', 'physics', 'type']
    })

    var nodesArr = nodes.get({
    	fields: ['id','num', 'label','x','y']
    })
    var graphData = {
    	nodes: nodesArr,
    	edges: edgesArr
    }
    element.setAttribute('href', 'data:application/octet-stream;text/plain;charset=utf-8,'
        + encodeURIComponent(JSON.stringify(graphData)));
    var dateTime = new Date();
    element.setAttribute('download', dateTime);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function generateTitle(node) {

}
