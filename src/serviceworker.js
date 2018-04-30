

self.addEventListener('install', function (e) {
	e.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function (e) {
	e.waitUntil(self.clients.claim());
});

/* Enable running functions provided by the application */

var executedScripts	= {};

self.addEventListener('message', function (e) {
	if (
		!e.data ||
		e.data.cyphFunction !== true ||
		!e.data.name ||
		typeof e.data.scriptURL !== 'string' ||
		!e.data.scriptURL.startsWith('blob:')
	) {
		return;
	}

	new Promise(function (resolve, reject) {
		var importedFunction;

		var alreadyExecuted				= executedScripts[e.data.name];
		executedScripts[e.data.name]	= true;

		if (!alreadyExecuted) {
			importScripts(e.data.scriptURL);

			importedFunction		= self.importedFunction;
			self.importedFunction	= undefined;
		}

		if (typeof importedFunction !== 'function') {
			reject(alreadyExecuted ? {alreadyExecuted: true} : {noFunctionProvided: true});
		}
		else {
			resolve(importedFunction(e.data.input));
		}
	}).then(function (output) {
		return {id: e.data.id, output: output};
	}).catch(function (err) {
		return {err: err, id: e.data.id, rejection: true};
	}).then(function (data) {
		return Promise.all([data, self.clients.matchAll()]);
	}).then(function (results) {
		var data	= results[0];
		var clients	= results[1];

		if (!(clients && clients.length > 0)) {
			return;
		}

		clients.forEach(function (client) {
			if (client) {
				client.postMessage(data);
			}
		});
	});
});

/* Make addEventListener available to functions provided by the application */

var serviceWorkerEvents			= [
	'activate',
	'controllerchange',
	'error',
	'fetch',
	'install',
	'message',
	'notificationclick',
	'push',
	'pushsubscriptionchange',
	'statechange',
	'updatefound'
];

var serviceWorkerEventHandlers	= {};

serviceWorkerEvents.forEach(function (event) {
	self.addEventListener(event, function (e) {
		var handlers	= serviceWorkerEventHandlers[event];
		if (!(handlers instanceof Array)) {
			return;
		}

		handlers.forEach(function (handler) {
			try {
				handler(e);
			}
			catch (err) {
				setTimeout(function () { throw err; }, 0);
			}
		});
	});
});

self.addEventListener	= function (event, handler) {
	if (!(serviceWorkerEventHandlers[event] instanceof Array)) {
		serviceWorkerEventHandlers[event]	= [];
	}

	serviceWorkerEventHandlers[event].push(handler);
};

