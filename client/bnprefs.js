Nodes = new Meteor.Collection("nodes");
Edges = new Meteor.Collection("edges");

var canvas;
var data;
var question;

Meteor.startup(function(){
	canvas = new Canvas();
	question = new Question();
	Deps.autorun(function(){
		nodes = Nodes.find({}).fetch();
		edges = Edges.find({}).fetch();
		if (canvas){
			canvas.draw(nodes, edges);
		}
		if (question){
			question.setText(edges);
		}
	});
});

Template.question.events({
	// template data, if any, is available in 'this'
	'click #neg3' : function () {
		Meteor.call("vote", -3, Session.get("currEdge"));
		console.log("You pressed button neg three");
	},
	'click #neg2' : function () {
		Meteor.call("vote", -2, Session.get("currEdge"));
		console.log("You pressed button neg two");
	},
	'click #neg1' : function () {
		Meteor.call("vote", -1, Session.get("currEdge"));
		console.log("You pressed button neg one");
	},
	'click #zero' : function () {
		Meteor.call("vote", 0, Session.get("currEdge"));//this has a purpose, don't delete
		console.log("You pressed button zero");
	},
	'click #pos1' : function () {
		Meteor.call("vote", 1, Session.get("currEdge"));
		console.log("You pressed button pos one");
	},
	'click #pos2' : function () {
		Meteor.call("vote", 2, Session.get("currEdge"));
		console.log("You pressed button pos two");
	},
	'click #pos3' : function () {
		Meteor.call("vote", 3, Session.get("currEdge"));
		console.log("You pressed button pos three");
	}
});

function Question(){
	var self = this;
	self.clear = function(){
		$("#q").text("");
	};
	self.setText = function(edges){
		if (edges.length < 1){
			self.clear();
			return;
		}
		$("#q").text(edges[0].source.obj + " or " + edges[0].target.obj);
		Session.set("currEdge", edges[0]);
	};
}

function Canvas(){
	var self = this;
	var svg;
	var width = 1500;
	var height = 1500;
	var createSvg = function(){
		svg = d3.select('#vizwrapper').append('svg')
			.attr('width', width)
			.attr('height', height);
	};
	createSvg();
	self.clear = function(){
		d3.select('svg').remove();
		createSvg();
	};
	self.draw = function(nodes, edges){
		if (nodes.length < 1 || edges.length < 1){
			self.clear();
			return;
		}
		if (svg){
			var force = d3.layout.force()
				.charge(-2000)
				.linkDistance(100)
				.size([width, height]);
			var edge = svg.selectAll(".edge")
				.data(edges)
				.enter().append("line")
				.attr("class", "edge");

			var node = svg.selectAll("g.node")
				.data(nodes)
				.enter()
				.append("g");

			node.on("mouseover", function(d){
				//do something later
			})
				.call(force.drag);

			var circles = node.append("circle")
				.attr("class", "node")
				.attr("r", 20)
				.style("fill", "blue");

			force
				.nodes(nodes)
				.links(edges)
				.start();
			force.on("tick", function(){
				edge.attr("x1", function(d){ return d.source.x; })
					.attr("y1", function(d){ return d.source.y; })
					.attr("x2", function(d){ return d.target.x; })
					.attr("y2", function(d){ return d.target.y; })
				circles.attr("cx", function(d) { return d.x; })
					.attr("cy", function(d) { return d.y; });
			});
		}
	}
}
