'use strict';
// JavaScript containing shared constants, for use in all pages.

var backendIp = '34.248.103.39';
var token = 'dd954681-19cb-4ebb-95ef-1075e844ccf4';

function buildUrl(path) {
    return 'http://' + backendIp + '/images' + path + '?token=' + token;
}
