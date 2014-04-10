/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

var events = [];
var eventId = 0;

function doLogin() {
//	Here we connect to Facebook's api and do lots of cool stuff
	return true;
}

function getEvents() {
	return events;
}

function addEvent(eventName, user) {
	return {
		name: eventName,
		eventId: eventId,
		collaborators: [user],
		ingredients: []
	};
}

function addCollaborator(eventId, collaborator) {
	event = findEventById(eventId);
	if(event != undefined) {
		event.collaborators.push(collaborator);
	}
}

function addIngredientToEvent(eventId, ingredientName) {
	event = findEventById(eventId);
	if(event != undefined) {
		event.ingredients.push({
			name: ingredient,
			bought: false
		});
	}
}

function checkIngredientBought(eventId, name) {
	event = findEventById(eventId);
	if(event == undefined) {
		return;
	}
	
	for(var i = 0; i<event.ingredients.length; i++) {
		ingredient = event.ingredients[i];
		if(ingredient.name === name) {
			ingredient.bought = true;
		}
	}
}

function findEventById(eventId) {
	for(var i = 0; i<events.length; i++) {
		if(eventId = events[i].eventId) {
			return events[i];
		}
	}
	
	return undefined;
}
