/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        // console.log( '    WARNING: initialize' );
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        // console.log( '    WARNING: onDeviceReady ' );

        // initAd();
        // showBannerFunc();
        // showInterstitialFunc();

    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement    = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement  = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        // console.log('    SYSTEM = Received Event: ' + id);
        console.log( '    WARNING: receivedEvent ' );

        initAd();
        showBannerFunc();
        // showInterstitialFunc();
    }
};




//initialize the goodies
function initAd() {
        if ( window.plugins && window.plugins.AdMob ) {
            var ad_units = {
                ios : {
                    banner: 'ca-app-pub-xxxxxxxxxxx/xxxxxxxxxxx',		//PUT ADMOB ADCODE HERE
                    interstitial: 'ca-app-pub-xxxxxxxxxxx/xxxxxxxxxxx'	//PUT ADMOB ADCODE HERE
                },
                android : {
                    // banner:       'ca-app-pub-xxxxxxxxxxx/xxxxxxxxxxx',	//PUT ADMOB ADCODE HERE
                    // interstitial: 'ca-app-pub-xxxxxxxxxxx/xxxxxxxxxxx'	  //PUT ADMOB ADCODE HERE
                    banner:       'ca-app-pub-2190439100604937~9088420443',	//PUT ADMOB ADCODE HERE
                    interstitial: 'ca-app-pub-2190439100604937/5506723495'	//PUT ADMOB ADCODE HERE
                    // banner:       'ca-app-pub-4789158063632032/7680949608',	//PUT ADMOB ADCODE HERE
                    // interstitial: 'ca-app-pub-4789158063632032/4587882405'	//PUT ADMOB ADCODE HERE
                }
            };
            var admobid = ( /(android)/i.test(navigator.userAgent) ) ? ad_units.android : ad_units.ios;

            window.plugins.AdMob.setOptions( {
                publisherId: admobid.banner,
                interstitialAdId: admobid.interstitial,
                adSize: window.plugins.AdMob.AD_SIZE.SMART_BANNER,	//use SMART_BANNER, BANNER, LARGE_BANNER, IAB_MRECT, IAB_BANNER, IAB_LEADERBOARD
                bannerAtTop: false,                                 // set to true, to put banner at top
                overlap: true,                                      // banner will overlap webview
                offsetTopBar: false,                                // set to true to avoid ios7 status bar overlap
                isTesting: false,                                   // receiving test ad
                autoShow: true                                      // auto show interstitial ad when loaded
            });

            registerAdEvents();
        } else {
            // alert( 'admob plugin not ready' );
            // console.log( 'admob plugin not ready' );
        }
}
//functions to allow you to know when ads are shown, etc.
function registerAdEvents() {
        document.addEventListener('onReceiveAd', function(){});
        document.addEventListener('onFailedToReceiveAd', function(data){});
        document.addEventListener('onPresentAd', function(){});
        document.addEventListener('onDismissAd', function(){ });
        document.addEventListener('onLeaveToAd', function(){ });
        document.addEventListener('onReceiveInterstitialAd', function(){ });
        document.addEventListener('onPresentInterstitialAd', function(){ });
        document.addEventListener('onDismissInterstitialAd', function(){ });
}
//
// Add the following 2 functions and call them when you want ads to show
//
// display the banner
function showBannerFunc() {
    window.plugins.AdMob.createBannerView();
    console.log( '    WARNING: showBannerFunc ' );
}
// display the interstitial
function showInterstitialFunc(){
    window.plugins.AdMob.createInterstitialView();	//get the interstitials ready to be shown and show when it's loaded.
    window.plugins.AdMob.requestInterstitialAd();
    console.log( '    WARNING: showInterstitialFunc ' );
}




app.initialize();
