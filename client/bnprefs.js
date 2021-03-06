Nodes = new Meteor.Collection("nodes");
Edges = new Meteor.Collection("edges");

var canvas;
var data;
var question;
var currState;

Meteor.startup(function(){
	canvas = new Canvas();
	question = new Question();
	currState = 0;
	introJs().start();
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
	},
	'click #state0' : function(){ changeState(0, currState); },
	'click #state1' : function(){ changeState(1, currState); },
	'click #state2' : function(){ changeState(2, currState); },
	'click #state3' : function(){ changeState(3, currState); },
});

function Clicked(){
	$(".btn").slideUp(400)
		.slideDown(400);
	$(".q").slideUp(400, function(){ question.setText(ouredges); })
		.slideDown(400);
}

function changeState(newState, oldState){
	console.log("you picked a state");
	console.log("newstate:");
	console.log(newState);
	console.log("oldstate:");
	console.log(oldState);
	Meteor.apply("changeState", [newState, oldState]);
	canvas.clear();
	$(".chooser").removeClass("active");
	switch(newState){
		case 0:
			$("#state0").addClass("active");
			break;
		case 1:
			$("#state1").addClass("active");
			break;
		case 2:
			$("#state2").addClass("active");
			break;
		case 3:
			$("#state3").addClass("active");
			break;
	}
	currState = newState;
}

function Question(){
	var self = this;
	self.clear = function(){
		$("#q1").text("");
		$("#q2").text("");
	};
	self.setText = function(ouredges){
		if (ouredges.length < 1){
			self.clear();
			return;
		}
		var idx = Math.floor(Math.random() * ouredges.length);
		$("#q1").text(ouredges[idx].source.obj);
		$("#q2").text(ouredges[idx].target.obj);
		Session.set("currEdge", ouredges[idx]);
	};
}

function Canvas(){
	var self = this;
	var svg;
	var width = window.innerWidth;
	var height = window.innerHeight;
	var createSvg = function(){
		svg = d3.select('#vizwrapper').append('svg')
			.attr('width', width)
			.attr('height', height);
		svg.append("defs").append("marker")
			.attr("id", "varArrow")
            .attr("refX", 9)
            .attr("refY", 2)
            .attr("markerUnits","strokeWidth")
            .attr("markerWidth", 6)
            .attr("markerHeight", 4)
            .attr("orient","auto")
            .append("svg:path")
            .attr("d","M 0,0 V 4 L6,2 Z");
	};
	createSvg();
	self.clear = function(){
		svg.remove();
		createSvg();
	};
	//bit cheating here. but we need to resize whenever we rething things
	window.onresize = function(event){
		width = window.innerWidth;
		height = window.innerHeight;
		svg.attr("width", width)
			.attr("height", height);
	}
	self.draw = function(ournodes, ouredges){
		if (ournodes.length < 1){
			self.clear();
			return;
		}
		if (svg){
			var force = d3.layout.force()
				.charge(-1500)
				.linkDistance(200)
				.size([width, height]);
			force.nodes(ournodes)
				.links(ouredges)
				.start();
			var edge = svg.selectAll(".edge")
				.data(ouredges)
				.enter().append("line")
				.attr("class", "edge")
				.attr("marker-end", function(d) { if (d.score > 0){ return "url(#varArrow)"; }})
				.attr("marker-start", function(d) { if (d.score < 0){ return "url(#varArrow)"; }})
				.style("stroke-width", function(d){ return Math.sqrt(d.votes); })
				.style("stroke-opacity", function(d){ return Math.max(0.05, (1 / (1 + Math.pow(1.5, -Math.abs(d.score)))) - 0.5);});

			var node = svg.selectAll("g.node")
				.data(ournodes)
				.enter().append("g")
				.attr("class", "node")
				.call(force.drag);
			node.append("circle")
				.attr("r", 10);
			node.append("image")
				.attr("xlink:href", function(d) { return "./" + d.file; })
				.attr("x", 15)
				.attr("y", 15)
				.attr("width", 50)
				.attr("height", 50);

			force.on("tick", function(){
				edge.attr("x1", function(d){ return d.source.x; })
					.attr("y1", function(d){ return d.source.y; })
					.attr("x2", function(d){ return d.target.x; })
					.attr("y2", function(d){ return d.target.y; });

				node.attr("transform", function(d){ return "translate(" + d.x + "," + d.y + ")"; });

			});
		}
	}
}
