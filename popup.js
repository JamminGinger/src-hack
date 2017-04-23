// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */
function getCurrentTabUrl(callback) {
    // Query filter to be passed to chrome.tabs.query - see
    // https://developer.chrome.com/extensions/tabs#method-query
    var queryInfo = {
        active: true,
        currentWindow: true
    };

    chrome.tabs.query(queryInfo, function(tabs) {
        // chrome.tabs.query invokes the callback with a list of tabs that match the
        // query. When the popup is opened, there is certainly a window and at least
        // one tab, so we can safely assume that |tabs| is a non-empty array.
        // A window can only have one active tab at a time, so the array consists of
        // exactly one tab.
        var tab = tabs[0];

        // A tab is a plain object that provides information about the tab.
        // See https://developer.chrome.com/extensions/tabs#type-Tab
        var url = tab.url;

        // tab.url is only available if the "activeTab" permission is declared.
        // If you want to see the URL of other tabs (e.g. after removing active:true
        // from |queryInfo|), then the "tabs" permission is required to see their
        // "url" properties.
        console.assert(typeof url == 'string', 'tab.url should be a string');

        callback(url);
    });

    // Most methods of the Chrome extension APIs are asynchronous. This means that
    // you CANNOT do something like this:
    //
    // var url;
    // chrome.tabs.query(queryInfo, function(tabs) {
    //   url = tabs[0].url;
    // });
    // alert(url); // Shows "undefined", because chrome.tabs.query is async.
}

document.addEventListener('DOMContentLoaded', function() {
    getCurrentTabUrl(function(url) {
        var theKid = document.createElement("div");
        theKid.id = '_1dwg _1w_m';
        theKid.innerHTML = `<div class="
        _4r_y "> <
            div class = "_6a uiPopover _5pbi _cmw _5v56 _b1e"
        data - interaction - root - id = "_1he6"
        id = "u_0_y" > < /div> <
            /div> <
            div class = "_4gns accessible_elem"
        id = "js_7" > < /div> <
            div >
            <
            div class = "_5x46" >
            <
            div class = "clearfix _5va3" >
            <
            a class = "_5pb8 _8o _8s lfloat _ohe"
        href = "https://www.facebook.com/ABCNews/?ref=nf"
        aria - hidden = "true"
        tabindex = "-1"
        target = ""
        data - ft = "{&quot;tn&quot;:&quot;\u003C&quot;}"
        data - hovercard = "/ajax/hovercard/page.php?id=86680728811"
        data - hovercard - prefer - more - content - show = "1"
        data - hovercard - obj - id = "86680728811" > < /a> <
            div class = "clearfix _42ef" >
            <
            div class = "rfloat _ohf" > < /div> <
            div class = "_5va4" >
            <
            div >
            <
            div class = "_6a _5u5j" >
            <
            div class = "_6a _5u5j _6b" >
            <
            div class = "_5pcp _5lel" >
            <
            span >
            <
            span class = "fsm fwn fcg" >
            <
            a class = "_5pcq" >
            <
            abbr title = "Friday, April 21, 2017 at 10:33pm"
        data - utime = "100"
        data - shorten = "1"
        class = "_5ptz timestamp livetimestamp" >
            <
            span class = "timestampContent"
        id = "js_9" > 1 hr < /span> <
            /abbr> <
            /a> <
            /span> <
            /span> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            div class = "_5pbx userContent"
        data - ft = "{&quot;tn&quot;:&quot;K&quot;}"
        id = "js_a" >
            <
            p >
            Theranos secretly bought lab equipment through a shell company, faked tests and inappropriately pumped up its financial outlook to investors, according to.. <
            /p> <
            /div> <
            div class = "_3x-2" >
            <
            div data - ft = "{&quot;tn&quot;:&quot;H&quot;}" >
            <
            div class = "mtm" >
            <
            div id = "u_0_10"
        class = "_6m2 _1zpr clearfix _dcs _4_w4 _59ap"
        data - ft = "{&quot;tn&quot;:&quot;H&quot;}" >
            <
            div class = "clearfix _2r3x" >
            <
            div class = "lfloat _ohe" >
            <
            span class = "_3m6-" >
            <
            div class = "_6ks" >
            <
            a href = "http://abcn.ws/2pmwSIu"
        tabindex = "-1"
        target = "_blank"
        rel = "nofollow"
        onmouseover = "LinkshimAsyncLink.swap(this, &quot;http:\/\/abcn.ws\/2pmwSIu&quot;);"
        onclick = "LinkshimAsyncLink.referrer_log(this, &quot;http:\/\/abcn.ws\/2pmwSIu&quot;, &quot;\/si\/ajax\/l\/render_linkshim_log\/?u=http\u00253A\u00252F\u00252Fabcn.ws\u00252F2pmwSIu&amp;h=ATMoj3K6CY0ap_UeDB0REjOiedrpA0UsQDIiWftnrN_ujr6LQYJag7F-WOx0GxJWfVgnZLO5c0g5ItDJVtk3w77gKXLZeUdy1zkQ1ardGurMSnY2p082BjpfFUzaO4RuDYy6C8zTGLt3&amp;enc=AZNB0w2autBS-HTbN1AM3xHRVolDI-AI3SpK3VfMaZfoYAwSliUJxGR3GrGvpwGwo9BhEZtwnoF210JtTi9N5tTw41HeHqoagl_9wN4whMADehh7V00B2HO4HQXlQH9TPteAZyOFnrJuB207DEc5wWVzeJaN5X_RmtEPW46SB9nHlfuf7eEDZR6M5LrkLbzXq8cccf88FFbPYJfd7K-QEhoi&amp;d&quot;);" >
            <
            div class = "_6l- __c_" >
            <
            div class = "uiScaledImageContainer _6m5 fbStoryAttachmentImage"
        style = "width:476px;height:249px;" >
            <
            img class = "scaledImageFitWidth img"
        src = "https://tctechcrunch2011.files.wordpress.com/2014/09/elizabeth-holmes4.jpg?w=764&amp;h=400&amp;crop=1"
        alt = ""
        width = "476"
        height = "249" >
            <
            /div> <
            /div> <
            /a> <
            /div> <
            div class = "_3ekx _29_4" >
            <
            div class = "_6m3 _--6" >
            <
            div class = "mbs _6m6 _2cnj _5s6c" >
            <
            a href = "https://techcrunch.com/2017/04/21/theranos-says-it-has-been-mischaractarized-in-allegations-the-company-faked-tests-and-boosted-financials/"
        rel = "nofollow"
        target = "_blank"
        onmouseover = "LinkshimAsyncLink.swap(this, &quot;http:\/\/abcn.ws\/2pmwSIu&quot;);"
        onclick = "LinkshimAsyncLink.referrer_log(this, &quot;http:\/\/abcn.ws\/2pmwSIu&quot;, &quot;\/si\/ajax\/l\/render_linkshim_log\/?u=http\u00253A\u00252F\u00252Fabcn.ws\u00252F2pmwSIu&amp;h=ATO0UTn1z_CWGmv-j7vGK1MITztDeHZLYuSFthEUk12FnMfvkRj9c_ULxD19DnFTRdB1Vu7aHW_pdqW9B84z8hMrpFRX_NlKul7WY37hwimGtMMKds2VbcsS83q_7kdIXKUuUmzW7OSv&amp;enc=AZOKATtc-Q8uhTMHhfgrZxpr-OFFtmsA-yI0A4f-o7pH3mcgpEXyw73QQRBn9uZYdsPwOaew35kwAyT2HBLgW6vs2tVQyuCF3-M4xEpENUfy44tq24Hz1wVV7FX7KAoUX5Wxj4AcZOdgd275Kq1EKOvSZe7SoHXckw5hVFgrFE4c6weINW0-FHJaqa6CJrjACEAAZWYLZy3eE4uaZXe8oPHF&amp;d&quot;);" >
            "Theranos says it has been mischaracterized in allegations the company faked tests" <
            /a> <
            /div> <
            div class = "_6m7 _3bt9 hidden_elem" > < /div> <
            div class = "_59tj _2iau" >
            <
            div >
            <
            div class = "_6lz _6mb ellipsis" > Sarah Buhr < /div> <
            div class = "_5tc6" > < /div> <
            /div> <
            /div> <
            /div> <
            a class = "_52c6"
        href = "http://abcn.ws/2pmwSIu"
        tabindex = "-1"
        target = "_blank"
        rel = "nofollow"
        onmouseover = "LinkshimAsyncLink.swap(this, &quot;http:\/\/abcn.ws\/2pmwSIu&quot;);"
        onclick = "LinkshimAsyncLink.referrer_log(this, &quot;http:\/\/abcn.ws\/2pmwSIu&quot;, &quot;\/si\/ajax\/l\/render_linkshim_log\/?u=http\u00253A\u00252F\u00252Fabcn.ws\u00252F2pmwSIu&amp;h=ATMlP0dIxS95e7RHe3rw0cdFEUaM1nXlQhrHElBon5u--56pUuH_YQPqEBAIeBhw8DaUeTyLRj1xg1Og5dQ0XfB5TnhxVd7vdvGnUss51dE_1EyJ0vvs1tDYTtxWODymncJvB2lfo4HysujzyCq_KuY&amp;enc=AZNVedkQs6FEnX7bQFmiQAdhQpELjWJaMrE2-6t1c6UcVdQq-dTc7PZs-6-EOkNBa7oawI18wwen8JF0UsbWSwPJbvwTMNV0TgEMM-nG56RAq1nmBdSosWVAcbwOv7r4foSTPfCBO0XFo8MqX4Ao6VcQxzALpokVk_vKfUmMF-xD2QqhNTtmCK8n-hTeZDFKdGQhxNUIHomX6dL-wL6Il4jq&amp;d&quot;);" > < /a> <
            /div> <
            /span> <
            /div> <
            div class = "_42ef" >
            <
            span class = "_3c21" > < /span> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            div > < /div> <
            /div>`;
        // Put the image URL in Google search.
        //your code here
        if (url == 'https://www.facebook.com') {
            document.getElementById("stream-pagelet").insertBefore(theKid, document.getElementById('substream_0'));
        }
    });
});
