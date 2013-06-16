Nodes = new Meteor.Collection("nodes");
Edges = new Meteor.Collection("edges");

Meteor.publish("nodes", function(){
	return Nodes.find();
});

Meteor.publish("edges", function(){
	return Edges.find();
});

var nodeStateInfo = [
			[
				{name: "Breathing", obj: "A breath of air when choking"},
				{name: "Food", obj: "Food when starving"},
				{name: "Water", obj: "Water when thirsty"},
				{name: "Temperature", obj: "A warm jacket when cold"},
				{name: "Sleep", obj: "Sleep when sleepy"},
				{name: "Homeostasis", obj: "Something that will make you vomit when you've taken poison"},
				{name: "Excretion", obj: "The opportunity to go to the bathroom if you need to go"},

				{name: "Security of body", obj: "Safety when you feel unsafe"},
				{name: "Security of employment", obj: "The ability to keep your job when it's threatened"},
				{name: "Security of resources", obj: "The ability to get gasoline, water, electricity and other resources when they're scarce"},
				{name: "Security of morality", obj: "The ability to keep to your faith or system of morality when it's threatened"},
				{name: "Security of the familiy", obj: "Safety for your family when you feel unsafe"},
				{name: "Security of health", obj: "The ability to be healthy when sick"},
				{name: "Security of property", obj: "The ability to keep your belongings when they're threatened"},

				{name: "Friendship", obj: "Your friends"},
				{name: "Family", obj: "Your family"},
				{name: "Intimacy", obj: "Your loved ones"},

				{name: "Self-esteem", obj: "Self-esteem"},
				{name: "Confidence", obj: "Confidence"},
				{name: "Achievement", obj: "A sense of achievement"},
				{name: "Respect of others", obj: "The ability to respect others"},
				{name: "Respect by others", obj: "The respect of others"},

				{name: "Morality", obj: "Your morality"},
				{name: "Creativity", obj: "Your creativity"},
				{name: "Spontaneity", obj: "Your spontaneity"},
				{name: "Problem Solving", obj: "Your ability to solve problems"},
				{name: "Lack of Prejudice", obj: "Your lack of prejudice"},
				{name: "Acceptance of Facts", obj: "Acceptance of the facts"}
			],
			[
				{name: "Xbone", obj: "An Xbox One"}, 
				{name: "PS4", obj: "A Playstation 4"}, 
				{name: "WiiU", obj: "A Wii U"}, 
				{name:"rock", obj: "A rock"}
			],
			[
				{name: "Samsung", obj: "A top-of-the-line Samsung phone"},
				{name: "Apple", obj: "A top-of-the-line Apple phone"},
				{name: "HTC", obj: "A top-of-the-line HTC phone"},
				{name: "Motorola", obj: "A top-of-the-line Motorola phone"},
				{name: "LG", obj: "A top-of-the-line LG phone"},
				{name: "Nokia", obj: "A top-of-the-line Nokia phone"}
			],
			[
				{name: "Bulbasaur", obj: "Bulbasaur"},
				{name: "Charmander", obj: "Charmander"},
				{name: "Squirtle", obj: "Squirtle"},
				{name: "Pikachu", obj: "Pikachu"}
			]
			];
var edgeStateInfo = [
			[
	    		{"source":0, "target":7, "score":3, votes: 3},
	    		{"source":0, "target":8, "score":3, votes: 3},
	    		{"source":0, "target":9, "score":3, votes: 3},
	    		{"source":0, "target":10, "score":3, votes: 3},
	    		{"source":0, "target":11, "score":3, votes: 3},
	    		{"source":0, "target":12, "score":3, votes: 3},
	    		{"source":0, "target":13, "score":3, votes: 3},
	    		{"source":1, "target":7, "score":3, votes: 3},
	    		{"source":1, "target":8, "score":3, votes: 3},
	    		{"source":1, "target":9, "score":3, votes: 3},
	    		{"source":1, "target":10, "score":3, votes: 3},
	    		{"source":1, "target":11, "score":3, votes: 3},
	    		{"source":1, "target":12, "score":3, votes: 3},
	    		{"source":1, "target":13, "score":3, votes: 3},
	    		{"source":2, "target":7, "score":3, votes: 3},
	    		{"source":2, "target":8, "score":3, votes: 3},
	    		{"source":2, "target":9, "score":3, votes: 3},
	    		{"source":2, "target":10, "score":3, votes: 3},
	    		{"source":2, "target":11, "score":3, votes: 3},
	    		{"source":2, "target":12, "score":3, votes: 3},
	    		{"source":2, "target":13, "score":3, votes: 3},
	    		{"source":3, "target":7, "score":3, votes: 3},
	    		{"source":3, "target":8, "score":3, votes: 3},
	    		{"source":3, "target":9, "score":3, votes: 3},
	    		{"source":3, "target":10, "score":3, votes: 3},
	    		{"source":3, "target":11, "score":3, votes: 3},
	    		{"source":3, "target":12, "score":3, votes: 3},
	    		{"source":3, "target":13, "score":3, votes: 3},
	    		{"source":4, "target":7, "score":3, votes: 3},
	    		{"source":4, "target":8, "score":3, votes: 3},
	    		{"source":4, "target":9, "score":3, votes: 3},
	    		{"source":4, "target":10, "score":3, votes: 3},
	    		{"source":4, "target":11, "score":3, votes: 3},
	    		{"source":4, "target":12, "score":3, votes: 3},
	    		{"source":4, "target":13, "score":3, votes: 3},
	    		{"source":5, "target":7, "score":3, votes: 3},
	    		{"source":5, "target":8, "score":3, votes: 3},
	    		{"source":5, "target":9, "score":3, votes: 3},
	    		{"source":5, "target":10, "score":3, votes: 3},
	    		{"source":5, "target":11, "score":3, votes: 3},
	    		{"source":5, "target":12, "score":3, votes: 3},
	    		{"source":5, "target":13, "score":3, votes: 3},
	    		{"source":6, "target":7, "score":3, votes: 3},
	    		{"source":6, "target":8, "score":3, votes: 3},
	    		{"source":6, "target":9, "score":3, votes: 3},
	    		{"source":6, "target":10, "score":3, votes: 3},
	    		{"source":6, "target":11, "score":3, votes: 3},
	    		{"source":6, "target":12, "score":3, votes: 3},
	    		{"source":6, "target":13, "score":3, votes: 3},
	
	    		{"source":7, "target":14, "score":3, votes: 3},
	    		{"source":7, "target":15, "score":3, votes: 3},
	    		{"source":7, "target":16, "score":3, votes: 3},
	    		{"source":8, "target":14, "score":3, votes: 3},
	    		{"source":8, "target":15, "score":3, votes: 3},
	    		{"source":8, "target":16, "score":3, votes: 3},
	    		{"source":9, "target":14, "score":3, votes: 3},
	    		{"source":9, "target":15, "score":3, votes: 3},
	    		{"source":9, "target":16, "score":3, votes: 3},
	    		{"source":10, "target":14, "score":3, votes: 3},
	    		{"source":10, "target":15, "score":3, votes: 3},
	    		{"source":10, "target":16, "score":3, votes: 3},
	    		{"source":11, "target":14, "score":3, votes: 3},
	    		{"source":11, "target":15, "score":3, votes: 3},
	    		{"source":11, "target":16, "score":3, votes: 3},
	    		{"source":12, "target":14, "score":3, votes: 3},
	    		{"source":12, "target":15, "score":3, votes: 3},
	    		{"source":12, "target":16, "score":3, votes: 3},
	    		{"source":13, "target":14, "score":3, votes: 3},
	    		{"source":13, "target":15, "score":3, votes: 3},
	    		{"source":13, "target":16, "score":3, votes: 3},
	
	    		{"source":14, "target":17, "score":3, votes: 3},
	    		{"source":14, "target":18, "score":3, votes: 3},
	    		{"source":14, "target":19, "score":3, votes: 3},
	    		{"source":14, "target":20, "score":3, votes: 3},
	    		{"source":14, "target":21, "score":3, votes: 3},
	    		{"source":15, "target":17, "score":3, votes: 3},
	    		{"source":15, "target":18, "score":3, votes: 3},
	    		{"source":15, "target":19, "score":3, votes: 3},
	    		{"source":15, "target":20, "score":3, votes: 3},
	    		{"source":15, "target":21, "score":3, votes: 3},
	    		{"source":16, "target":17, "score":3, votes: 3},
	    		{"source":16, "target":18, "score":3, votes: 3},
	    		{"source":16, "target":19, "score":3, votes: 3},
	    		{"source":16, "target":20, "score":3, votes: 3},
	    		{"source":16, "target":21, "score":3, votes: 3},
	
	    		{"source":17, "target":22, "score":3, votes: 3},
	    		{"source":17, "target":23, "score":3, votes: 3},
	    		{"source":17, "target":24, "score":3, votes: 3},
	    		{"source":17, "target":25, "score":3, votes: 3},
	    		{"source":17, "target":26, "score":3, votes: 3},
	    		{"source":17, "target":27, "score":3, votes: 3},
	    		{"source":18, "target":22, "score":3, votes: 3},
	    		{"source":18, "target":23, "score":3, votes: 3},
	    		{"source":18, "target":24, "score":3, votes: 3},
	    		{"source":18, "target":25, "score":3, votes: 3},
	    		{"source":18, "target":26, "score":3, votes: 3},
	    		{"source":18, "target":27, "score":3, votes: 3},
	    		{"source":19, "target":22, "score":3, votes: 3},
	    		{"source":19, "target":23, "score":3, votes: 3},
	    		{"source":19, "target":24, "score":3, votes: 3},
	    		{"source":19, "target":25, "score":3, votes: 3},
	    		{"source":19, "target":26, "score":3, votes: 3},
	    		{"source":19, "target":27, "score":3, votes: 3},
	    		{"source":20, "target":22, "score":3, votes: 3},
	    		{"source":20, "target":23, "score":3, votes: 3},
	    		{"source":20, "target":24, "score":3, votes: 3},
	    		{"source":20, "target":25, "score":3, votes: 3},
	    		{"source":20, "target":26, "score":3, votes: 3},
	    		{"source":20, "target":27, "score":3, votes: 3},
	    		{"source":21, "target":22, "score":3, votes: 3},
	    		{"source":21, "target":23, "score":3, votes: 3},
	    		{"source":21, "target":24, "score":3, votes: 3},
	    		{"source":21, "target":25, "score":3, votes: 3},
	    		{"source":21, "target":26, "score":3, votes: 3},
	    		{"source":21, "target":27, "score":3, votes: 3}
			],
			[
				{"source": 0, "target": 1, "score": 3, votes: 3},
				{"source": 0, "target": 2, "score": 3, votes: 3},
				{"source": 0, "target": 3, "score": 3, votes: 3},
				{"source": 1, "target": 2, "score": 3, votes: 3},
				{"source": 1, "target": 3, "score": 3, votes: 3},
				{"source": 2, "target": 3, "score": 3, votes: 3},
			],
			[
				{"source": 0, "target": 1, "score": 3, votes: 3},
				{"source": 0, "target": 2, "score": 3, votes: 3},
				{"source": 0, "target": 3, "score": 3, votes: 3},
				{"source": 0, "target": 4, "score": 3, votes: 3},
				{"source": 0, "target": 5, "score": 3, votes: 3},
				{"source": 1, "target": 2, "score": 3, votes: 3},
				{"source": 1, "target": 3, "score": 3, votes: 3},
				{"source": 1, "target": 4, "score": 3, votes: 3},
				{"source": 1, "target": 5, "score": 3, votes: 3},
				{"source": 2, "target": 3, "score": 3, votes: 3},
				{"source": 2, "target": 4, "score": 3, votes: 3},
				{"source": 2, "target": 5, "score": 3, votes: 3},
				{"source": 3, "target": 4, "score": 3, votes: 3},
				{"source": 3, "target": 5, "score": 3, votes: 3},
				{"source": 4, "target": 5, "score": 3, votes: 3},
			],
			[
				{"source": 0, "target": 1, "score": 3, votes: 3},
				{"source": 0, "target": 2, "score": 3, votes: 3},
				{"source": 0, "target": 3, "score": 3, votes: 3},
				{"source": 1, "target": 2, "score": 3, votes: 3},
				{"source": 1, "target": 3, "score": 3, votes: 3},
				{"source": 2, "target": 3, "score": 3, votes: 3},
			]
			];

Meteor.methods({
	vote: function(num, edge){
			  console.log("VOTE COUNTED: " + num + " weight, to edge " + JSON.stringify(edge._id));
			  Edges.update(edge._id, {$inc: {score: num, votes: 1}});
			  console.log(JSON.stringify(Edges.find(edge._id).fetch()));
			  return 1;
		  },
	changeState: function(newState){
					Nodes.remove({});
					Edges.remove({});

					_.each(nodeStateInfo[newState], function(elem){
						Nodes.insert(elem);
					});
					_.each(edgeStateInfo[newState], function(elem){
						Edges.insert(elem);
					});

				 },
});
