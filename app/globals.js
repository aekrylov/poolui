'use strict';

angular.module('poolui.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "XMRPool.net",
		api_url : 'https://api.xmrpool.net',
		api_refresh_interval: 5000,
		app_update_interval: 5*60000
	};
});