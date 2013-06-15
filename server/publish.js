Surveys = new Meteor.Collection("surveys");

Meteor.publish("surveys", function(){
	return Surveys.find();
});
