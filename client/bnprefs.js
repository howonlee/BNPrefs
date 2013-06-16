Surveys = new Meteor.Collection("surveys");

var canvas;
var data;
var question;

Meteor.startup(function(){
	canvas = new Canvas();
	question = new Question();
	Deps.autorun(function(){
		data = Surveys.find({}).fetch();
		if (canvas){
			canvas.draw(data);
		}
		if (question){
			question.setText(data);
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
	self.setText = function(data){
		if (data.length < 1){
			self.clear();
			return;
		}
		$("#q").text(data[0][0].edges[0].source.obj + " or " + data[0][0].edges[0].target.obj);
		Session.set("currEdge", data[0][0].edges[0]);
	};
}

function Canvas(){
	var self = this;
	var svg;
	var width = 500;
	var height = 500;
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
	self.draw = function(data){
		if (data.length < 1){
			self.clear();
			return;
		}
		if (svg){
			var force = d3.layout.force()
				.charge(-2000)
				.linkDistance(100)
				.size([width, height]);
			var edge = svg.selectAll(".edge")
				.data(data[0][0].edges)
				.enter().append("line")
				.attr("class", "edge");

			var node = svg.selectAll("g.node")
				.data(data[0][0].nodes)
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
				.nodes(data[0][0].nodes)
				.links(data[0][0].edges)
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
