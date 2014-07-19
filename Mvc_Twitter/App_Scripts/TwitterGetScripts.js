

//Sample Response Object
var TwitterObject =
{
    "Id":490234065123942400,
    "id_str":"490234065123942400",
    "InReplyToUserId":19659870,
    "InReplyToStatusId":490233830595637250,
    "InReplyToScreenName":"vampire__",
    "truncated":false,
    "favorited":false,
    "retweet_count":0,
    "Text":"@vampire__ si al cañón le agregaban la marca #acme, amaba a los creadores del video por siempre !jajajajaja! xd",
    "Source":"<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
    "User":{
        "Id":78957430,
        "FollowersCount":1304,
        "Name":"Rodrigo Mercado ® ",
        "Description":"#Fútbol #Juegos #Gamer #BWN #Usach #Chile",
        "ProfileImageUrl":"http://pbs.twimg.com/profile_images/1922449161/Roycronos-01_normal.png",
        "Url":null,
        "protected":false,
        "ScreenName":"Roycronos",
        "Location":"Santiago, Chile",
        "Status":null,
        "FriendsCount":2000,
        "ProfileBackgroundColor":"131516",
        "UtcOffset":"-14400",
        "ProfileTextColor":"333333",
        "ProfileBackgroundImageUrl":"http://abs.twimg.com/images/themes/theme14/bg.gif",
        "TimeZone":"Santiago",
        "FavouritesCount":3235,
        "ListedCount":16,
        "ProfileLinkColor":"009999",
        "StatusesCount":53846,
        "ProfileSidebarFillColor":"EFEFEF",
        "ProfileSidebarBorderColor":"EEEEEE",
        "profile_background_tile":true,
        "verified":false,
        "geo_enabled":false,
        "lang":"es",
        "created_at":"2009-10-01T17:27:55Z",
        "FollowRequestSent":false,
        "IsTranslator":false,
        "ContributorsEnabled":false,
        "ProfileBackgroundImageUrlHttps":"https://abs.twimg.com/images/themes/theme14/bg.gif",
        "ProfileImageUrlHttps":"https://pbs.twimg.com/profile_images/1922449161/Roycronos-01_normal.png",
        "default_profile":false,
        "RawSource":null
    },
    "RetweetedStatus":null,
    "created_at":"2014-07-18T20:38:03Z",
    "geo":null,
    "lang":"es",
    "Entities":{
        "user_mentions":[
        {
            "id":19659870,
            "screen_name":"vampire__",
            "name":"Carolina Burgos",
            "indices":[
            0,
            10
            ],
            "EntityType":1
        }
        ],
        "hashtags":[
        {
            "text":"acme",
            "indices":[
            45,
            50
            ],
            "EntityType":0
        }
        ],
        "urls":[
        ],
        "media":[
        ]
    },
    "possibly_sensitive":null,
    "Place":null,
    "RawSource":""
    };
function TwitterController($scope, $log) {



    $scope.TwitterResponse = { lastid: "0", Tweets: [] };
     //Test
     //$scope.TwitterResponse.Tweets.push(TwitterObject);


     $(document).ready(function () {
         //call function to retrieve tweets
         callMoreTweets()

     });


    function callMoreTweets() {
        // note i intennded to use max id and get only the new or fresh tweets but i alwase gave me the same result
        if ($scope.TwitterResponse.Tweets.length>0) {
        // get more tweets and append them to existing collection
            $.ajax({
                url: "/api/Twitter",
                type: "Post",
                data: "=" + $scope.TwitterResponse.Tweets[0].Id,

                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                success: function (data) {
                    if (data) {
                        if (!$scope.$$phase) {
                            $scope.$apply(function () {
                                $scope.TwitterResponse.Tweets = data;
                                // here instade of the apove sintence i wass going to add the new tweets and to splice the oldest one by the same count
                                // the titter always gave me the hall tweetes so i Did not Continue in that
                            });
                        }
                    }
                },
                error: function () { alert('error'); }
            });
        }else{
   // first call get all tweets
            $.ajax({
                url: "/api/Twitter",
                type: "Post",
               // data: jsonSerialized, //{ Name: name,
                // Address: address, DOB: dob },
                contentType: 'application/json; charset=utf-8',
                success: function (data) {
                    if (data) {
                        if (!$scope.$$phase) {
                            $scope.$apply(function () {
                                $scope.TwitterResponse.Tweets = data;
                            });
                        }
                    }
                },
                error: function () { alert('error'); }
            });
        }

 


    };



    var interval = 1000 * 60 * 0.5; // where X is your every X minutes
    setInterval(callMoreTweets, interval);
    setInterval(function() {
        //your jQuery ajax code
    }, 1000 * 60 * 0.5); // where 



    $scope.mapShow = function (item) {

       
        var mapOptions = {
            scaleControl: true,
            center: new google.maps.LatLng(  item.Location),
            //center: new google.maps.LatLng(-34.397, 150.644), //for test
            zoom: 10
        };

        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

        var marker = new google.maps.Marker({
            map: map,
            position: map.getCenter()
        });
        var infowindow = new google.maps.InfoWindow();
        infowindow.setContent(item.User.Name);
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });
        { }

        $("#PopUp").dialog({modal: true, height: 590, width: 850,
            buttons: {
                Ok: function () {
                    $(this).dialog("close");
                }
            }
        });

        $("#PopUp").dialog("open");


    };

    //google.maps.event.addDomListener(window, 'load', initialize);

};



