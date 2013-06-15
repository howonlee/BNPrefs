Surveys = new Meteor.Collection("surveys");

var canvas;

Meteor.startup( function(){
	canvas = new Canvas();
	Deps.autorun(function(){
		var data = Surveys.find({}).fetch();
		if (canvas){
			canvas.draw(data);
		}
	});
});

Template.question.q = function () {
	return "Welcome to bnprefs.";
};

Template.question.events({
	'click #first' : function () {
		// template data, if any, is available in 'this'
		if (typeof console !== 'undefined'){
			console.log("You pressed button one");
		}
	},
	'click #second' : function () {
		if (typeof console !== 'undefined'){
			console.log("You pressed button two");
		}
	}
});

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
