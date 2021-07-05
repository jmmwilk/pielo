
export let eventBus = {
	subscribe: function(eventName, eventHandler) {
		if (!this.eventList[eventName]) {
			this.eventList[eventName] = [];
		}
		this.eventList[eventName].push(eventHandler)
	},
	trigger: function(eventName, data){
		let eventHandlers = this.eventList[eventName];
		for (let i=0; i<eventHandlers.length; i++) {
			eventHandlers[i](data);
		}
	},
	eventList: {
	}
}