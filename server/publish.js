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
			  console.log("VOTE COUNTED: " + num + " weight, to edge " + edge);
			  //console.log(Surveys.find().fetch());
			  edge.score = edge.score + num;
			  edge.votes = edge.votes + 1;
			  console.log(edge);
			  return 1;
		  },
});
