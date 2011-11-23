thinkroth.App = Ext.extend(Ext.TabPanel, {
	fullscreen: true,
	tabBar: {
		ui: 'gray',
		dock: 'bottom',
		layout: { pack: 'center' }
	},
	cardSwitchAnimation: false,
    
	initComponent: function() {
		
		if (navigator.onLine) {
			this.items = [
			{
				title: 'Home',
				iconCls: 'info',
				xtype: 'panel',
				scroll: 'vertical',
				cls: 'home',
				html: [
            '<img src="photo.png" />',
            "<h1>Today's Stark County Park District includes:</h1>",
            "<p><ul>",
							"<li>70+ miles of walking/bicycling trails</li>",
							"<li>38 miles of equestrian trails</li>",
							"<li>14 parks, including 25 miles of the Ohio & Erie Canalway</li>",
							"<li>746 educational programs and events for 36,301 participants</li>",
							"<li>46 Distance Learning programs for 2,725 students across the U.S.</li>",
							"<li>7000 acres of land, including 2,800 acres open to hunting and 1,200 acres of lakes, ponds, reservoirs</li>",
						"</ul></p>",
            '<h2>The mission of the Stark County Park District is to acquire, preserve, and develop natural areas for passive recreation, conservation, education and nature appreciation.</h2>',
						'<div id ="hidden"></div>'
        ].join("")
			},
			{
				title: 'Maps',
				iconCls: 'maps',
				xtype: 'pinchcarousel',
				//Set in index.js under mapImages
				images: this.mapImages
			},
			// {
			// 	title: 'Tweets',
			// 	iconCls: 'user',
			// 	xtype: 'tweetlist',
			// 	//Set in index.js under twitterSearch
			// 	hashtag: this.twitterSearch
			// },
			{
			title: 'Donate',
      iconCls: 'star', 
			scroll: 'vertical',
      cls: 'home',
      html: [
          '<img src="photo.png" />',
					'<p />',
					'<h1>Donate to Stark Parks</h1>',
					'<p />',
					'Donating to Stark Parks is a meaningful way to honor a loved one, pay tribute to an individual or an organization, ',
					'or celebrate a special occasion while preserving and expanding the recreational opportunities offered in your ',
					'Stark County Park District.  Through the generous contributions of individuals, non-profit organizations, corporations, ',
					'and foundations, the Stark County Park District is able to provide a variety of services and facilities beyond the ',
					'limitations of its typical budget. Your support can make a difference in many ways.',
					'<a href="http://www.starkparks.com/donations.asp">',
          '<h2>So go ahead and donate!</h2>',
					'</a><p /><div id ="hidden"></div>'
      ].join("")
			}
			];
		} else {
			this.on('render', function(){
				this.el.mask('No internet connection.');
				}, this);
			}
        
			thinkroth.App.superclass.initComponent.call(this);
		}   
});