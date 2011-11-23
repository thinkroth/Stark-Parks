Ext.regModel('Tweet', {
	fields: ['id', 'text', 'to_user_id', 'from_user', 'created_at', 'profile_image_url']
});

Ext.regModel('Moreinfo', {
	fields: ['title', 'description', 'link']
});
