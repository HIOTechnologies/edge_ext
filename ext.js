browser.tabs.query({
			active: true,
			currentWindow: true
		}, function(tabs) {
			browser.tabs.sendMessage(tabs[0].id,
			{'CMD':'MENU'},
            function (response) {
             
                close();
			});	
		});


