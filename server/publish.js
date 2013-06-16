Nodes = new Meteor.Collection("nodes");
Edges = new Meteor.Collection("edges");

Meteor.publish("nodes", function(){
	return Nodes.find();
});

Meteor.publish("edges", function(){
	return Edges.find();
});

Meteor.methods({
	vote: function(num, edge){
			  console.log("VOTE COUNTED: " + num + " weight, to edge " + JSON.stringify(edge));
			  Edges.update({source: edge.source, target: edge.target}, {$inc: {score: num}});
			  console.log(JSON.stringify(Edges.find({source: edge.source, target: edge.target}).fetch()));
			  return 1;
		  },
});
