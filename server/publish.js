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
			  console.log("VOTE COUNTED: " + num + " weight, to edge " + JSON.stringify(edge._id));
			  Edges.update(edge._id, {$inc: {score: num, votes: 1}});
			  console.log(JSON.stringify(Edges.find(edge._id).fetch()));
			  return 1;
		  },
});
