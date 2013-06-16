Nodes = new Meteor.Collection("nodes");
Edges = new Meteor.Collection("edges");
CacheEdgeZero = new Meteor.Collection("cacheedgezero");
CacheEdgeOne = new Meteor.Collection("cacheedgeone");
CacheEdgeTwo = new Meteor.Collection("cacheedgetwo");
CacheEdgeThree = new Meteor.Collection("cacheedgethree");

var nodeStateInfo = [
[
{name: "Breathing", obj: "A breath of air when choking", file: "maslow/breathing.svg"},
{name: "Food", obj: "Food when starving", file: "maslow/food.svg"},
{name: "Water", obj: "Water when thirsty", file: "maslow/water.svg"},
{name: "Sex", obj: "Hanky-panky", file: "maslow/sex.svg"},
{name: "Sleep", obj: "Sleep when sleepy", file: "maslow/sleep.svg"},
{name: "Homeostasis", obj: "Warmth when cold, or coolness when hot", file: "maslow/homeostasis.svg"},
{name: "Excretion", obj: "The opportunity to go to the bathroom if you need to go", file: "maslow/excretion.svg"},

{name: "Security of body", obj: "Safety when you feel unsafe", file: "maslow/securityofbody.svg"},
{name: "Security of employment", obj: "The ability to keep your job when it's threatened", file: "maslow/securityofemployment.svg"},
{name: "Security of resources", obj: "The ability to get gasoline, water, electricity and other resources when they're scarce", file: "maslow/securityofresources.svg"},
{name: "Security of morality", obj: "The ability to keep to your faith or system of morality when it's threatened", file: "maslow/securityofmorality.svg"},
{name: "Security of the familiy", obj: "Safety for your family when you feel unsafe", file: "maslow/securityofthefamily.svg"},
{name: "Security of health", obj: "The ability to be healthy when sick", file: "maslow/securityofhealth.svg"},
{name: "Security of property", obj: "The ability to keep your belongings when they're threatened", file: "maslow/securityofproperty.svg"},

{name: "Friendship", obj: "Your friends", file: "maslow/friendship.svg"},
{name: "Family", obj: "Your family", file: "maslow/family.svg"},
{name: "Intimacy", obj: "Your loved ones", file: "maslow/intimacy.svg"},

{name: "Self-esteem", obj: "Self-esteem", file: "maslow/selfesteem.svg"},
{name: "Confidence", obj: "Confidence", file: "maslow/confidence.svg"},
{name: "Achievement", obj: "A sense of achievement", file: "maslow/achievement.svg"},
{name: "Respect of others", obj: "The ability to respect others", file: "maslow/respectofothers.svg"},
{name: "Respect by others", obj: "The respect of others", file: "maslow/respectbyothers.svg"},

{name: "Morality", obj: "Your morality", file: "maslow/morality.svg"},
{name: "Creativity", obj: "Your creativity", file: "maslow/creativity.svg"},
{name: "Spontaneity", obj: "Your spontaneity", file: "maslow/spontaneity.svg"},
{name: "Problem Solving", obj: "Your ability to solve problems", file: "maslow/problemsolving.svg"},
{name: "Lack of Prejudice", obj: "Your lack of prejudice", file: "maslow/lackofprejudice.svg"},
{name: "Acceptance of Facts", obj: "Acceptance of the facts", file: "maslow/acceptanceoffacts.svg"}
],
	[
{name: "Xbone", obj: "An Xbox One", file:"games/xboxone.png"}, 
{name: "PS4", obj: "A Playstation 4", file:"games/ps4logo.png"}, 
{name: "WiiU", obj: "A Wii U", file:"games/wiiu.png"}, 
{name: "PC", obj: "A good PC", file:"games/steam.png"}
],
	[
{name: "Samsung", obj: "A top-of-the-line Samsung phone", file:"phone/samsung.png"},
{name: "Apple", obj: "A top-of-the-line Apple phone", file:"phone/apple.png"},
{name: "HTC", obj: "A top-of-the-line HTC phone", file:"phone/htc.png"},
{name: "Motorola", obj: "A top-of-the-line Motorola phone", file:"phone/motorola.png"},
{name: "LG", obj: "A top-of-the-line LG phone", file:"phone/lg.png"},
{name: "Nokia", obj: "A top-of-the-line Nokia phone", file:"phone/nokia.png"}
],
	[
{name: "Bulbasaur", obj: "Bulbasaur", file:"pokemon/leaf.png"},
{name: "Charmander", obj: "Charmander", file:"pokemon/fire.png"},
{name: "Squirtle", obj: "Squirtle", file:"water.png"},
{name: "Pikachu", obj: "Pikachu", file:"electricity.png"}
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

	function stateToCache(state){
		if (state === 0){
			return CacheEdgeZero;
		}
		if (state === 1){
			return CacheEdgeOne;
		}
		if (state === 2){
			return CacheEdgeTwo;
		}
		if (state === 3){
			return CacheEdgeThree;
		}

	}

Meteor.methods({
	vote: function(num, edge){
			  console.log("VOTE COUNTED: " + num + " weight, to edge " + JSON.stringify(edge._id));
			  Edges.update(edge._id, {$inc: {score: num, votes: 1}});
			  console.log(JSON.stringify(Edges.find(edge._id).fetch()));
			  return 1;
		  },
	changeState: function(newState, oldState){
					 console.log("we think newstate is:");
					 console.log(newState);
					 if (arguments.length === 1){
						 console.log("argument length one entered for changeState");
						 _.each(nodeStateInfo[newState], function(elem){
							 Nodes.insert(elem);
						 });
						 _.each(edgeStateInfo[newState], function(elem){
							 Edges.insert(elem);
						 });
					 } else {
						 console.log("we think oldstate is:");
						 console.log(oldState);
						 oldEdge = stateToCache(oldState);

						 if (oldEdge.find({}).count() === 0){
							 Edges.find({}).forEach(function(elem){
								 oldEdge.insert(elem);
							 });
						 } else {
							 Edges.find({}).forEach(function(elem){
								 oldEdge.update(elem._id, {$set: {score: elem.score, votes: elem.votes}});
							 });
						 }
						 Nodes.remove({});
						 Edges.remove({});


						 _.each(nodeStateInfo[newState], function(elem){
							 Nodes.insert(elem);
						 });

						 var newEdge = stateToCache(newState);

						 if (newEdge.find().count() === 0){
							 _.each(edgeStateInfo[newState], function(elem){
								 Edges.insert(elem);
							 });
						 } else {
							 newEdge.find({}).forEach(function(elem){
								 Edges.insert(elem);
							 });
						 }
					 }
				 },
});
