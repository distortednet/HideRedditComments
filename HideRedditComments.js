// ==UserScript==
// @name         HideRedditComments
// @namespace    http://www.distortednetwork.scom
// @version      0.1
// @description  hides all but top level reddit comments.
// @author       You
// @match        https://www.reddit.com/r/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

$( ".bottom-area" ).after( '<a href="#" class="hidechild">Hide/Show Children</a>');
$('.hidechild').click( function() {
    $( ".child" ).toggle();
});
