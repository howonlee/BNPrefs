Meteor.startup(function () {
	if (Surveys.find().count() === 0){
		var initSurvey = [{
			name: "Maslow",
	nodes: ["food", "water"],
	edges: [{
		node1: 0,
	node2: 1, 
	qs: ["hello world"],
	score: 1,
	votes: 1 
	}]
		}];
		Surveys.insert(initSurvey);
	}
});
