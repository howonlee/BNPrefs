Meteor.startup(function () {
	if (Surveys.find().count() === 0){
		var initSurvey = [{
			name: "Maslow",
	nodes: [{name: "food"}, {name: "water"}],
	edges: [{
		source: 0,
		target: 1, 
		qs: ["hello world"],
		score: 1,
		votes: 1 
	}]
		}];
		Surveys.insert(initSurvey);
	}
});
