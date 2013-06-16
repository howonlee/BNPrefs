Nodes = new Meteor.Collection("nodes");
Edges = new Meteor.Collection("edges");

var canvas;
var data;
var question;

Meteor.startup(function(){
	canvas = new Canvas();
	question = new Question();
	Deps.autorun(function(){
		ournodes = Nodes.find({}).fetch();
		ouredges = Edges.find({}).fetch();
		if (canvas){
			Deps.nonreactive(function(){
				canvas.draw(ournodes, ouredges);
			});
		}
		if (question){
			question.setText(ouredges);
		}
	});
});

Template.question.events({
	// template data, if any, is available in 'this'
	'click #neg3' : function () {
		Meteor.call("vote", -3, Session.get("currEdge"));
		console.log("You pressed button neg three");
		Clicked();
	},
	'click #neg2' : function () {
		Meteor.call("vote", -2, Session.get("currEdge"));
		console.log("You pressed button neg two");
		Clicked();
	},
	'click #neg1' : function () {
		Meteor.call("vote", -1, Session.get("currEdge"));
		console.log("You pressed button neg one");
		Clicked();
	},
	'click #zero' : function () {
		Meteor.call("vote", 0, Session.get("currEdge"));//this has a purpose, don't delete
		console.log("You pressed button zero");
		Clicked();
	},
	'click #pos1' : function () {
		Meteor.call("vote", 1, Session.get("currEdge"));
		console.log("You pressed button pos one");
		Clicked();
	},
	'click #pos2' : function () {
		Meteor.call("vote", 2, Session.get("currEdge"));
		console.log("You pressed button pos two");
		Clicked();
	},
	'click #pos3' : function () {
		Meteor.call("vote", 3, Session.get("currEdge"));
		console.log("You pressed button pos three");
		Clicked();
	}
});

function Clicked(){
	$(".button").slideUp(400)
		.slideDown(400);
	question.setText(ouredges);
}

function Question(){
	var self = this;
	self.clear = function(){
		$("#q").text("");
	};
	self.setText = function(ouredges){
		if (ouredges.length < 1){
			self.clear();
			return;
		}
		var idx = Math.floor(Math.random() * ouredges.length);
		$("#q").text(ouredges[idx].source.obj + " or " + ouredges[idx].target.obj);
		Session.set("currEdge", ouredges[idx]);
	};
}

function Canvas(){
	var self = this;
	var svg;
	var width = 700;
	var height = 700;
	var createSvg = function(){
		svg = d3.select('#vizwrapper').append('svg')
			.attr('width', width)
			.attr('height', height);
	};
	createSvg();
	self.clear = function(){
		svg.remove();
		createSvg();
	};
	self.draw = function(ournodes, ouredges){
		if (ournodes.length < 1){
			self.clear();
			return;
		}
		if (svg){
			var force = d3.layout.force()
				.charge(-1000)
				.linkDistance(100)
				.size([width, height]);
			force.nodes(ournodes)
				.links(ouredges)
				.start();
			var edge = svg.selectAll(".edge")
				.data(ouredges)
				.enter().append("line")
				.attr("class", "edge");

			var node = svg.selectAll(".node")
				.data(ournodes)
				.enter().append("circle")
				.attr("class", "node")
				.attr("r", 10)
				.call(force.drag);

			force.on("tick", function(){
				edge.attr("x1", function(d){ return d.source.x; })
					.attr("y1", function(d){ return d.source.y; })
					.attr("x2", function(d){ return d.target.x; })
					.attr("y2", function(d){ return d.target.y; });
				node.attr("cx", function(d) { return d.x; })
					.attr("cy", function(d) { return d.y; });
			});
		}
	}
}
