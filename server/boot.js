Meteor.startup(function () {
	if (Nodes.find().count() === 0 || Edges.find().count() === 0){
		Meteor.call("changeState", 0);
	}
});
