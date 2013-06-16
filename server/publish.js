Surveys = new Meteor.Collection("surveys");

Meteor.publish("surveys", function(){
	return Surveys.find();
});

Meteor.methods({
	vote: function(num, edge){
			  console.log("VOTE COUNTED: " + num + " weight, to edge " + edge);
			  edge.score = edge.score + num;
			  edge.votes = edge.votes + 1;
			  return 1;
		  },
});
