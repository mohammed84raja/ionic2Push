import {Page} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {
	constructor(){
		var app = {
		    // Application Constructor
		    initialize: function() {
		        this.bindEvents();
		    },
		    // Bind Event Listeners
		    //
		    // Bind any events that are required on startup. Common events are:
		    // 'load', 'deviceready', 'offline', and 'online'.
		    bindEvents: function() {
		        document.addEventListener('deviceready', this.onDeviceReady, false);
		    },
		    // deviceready Event Handler
		    //
		    // The scope of 'this' is the event. In order to call the 'receivedEvent'
		    // function, we must explicitly call 'app.receivedEvent(...);'
		    onDeviceReady: function() {
		        var push = PushNotification.init({
		            "android": {
		                "senderID": "1234567890"
		            },
		            "ios": {"alert": "true", "badge": "true", "sound": "true"}, 
		            "windows": {} 
		        });
		        
		        push.on('registration', function(data) {
		            console.log("registration event");		            
		            console.log(JSON.stringify(data));
		        });

		        push.on('notification', function(data) {
		        	console.log("notification event");
		            console.log(JSON.stringify(data));		          
		            
		            push.finish(function () {
		                console.log('finish successfully called');
		            });
		        });

		        push.on('error', function(e) {
		            console.log("push error");
		        });
		    }
		};

		app.initialize();
	}
}
