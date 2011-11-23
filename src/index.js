Ext.ns('thinkroth', 'thinkroth.views');

Ext.setup({
	statusBarStyle: 'black',
	onReady: function() {
		thinkroth.App = new thinkroth.App({
			title: 'Stark Parks',
			twitterSearch: 'from:StarkParks',
			mapImages: [
				'./maps/TowpathTrail.png',
				'./maps/MahoningValleyTrail2010.png',
				'./maps/Petros2010.png',
				'./maps/SippoLake2010.png',
				'./maps/Walborn2010.png',
				'./maps/WestBranchTrail2011.png'
			]
		});
	}
});

