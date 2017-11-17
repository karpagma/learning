(function() {
    // Config
    var timelinePageCount = 3;

    // Templating functions
    var setUsers = function(users) {
            console.info('called setUsers with these users:', users);
            $('#user-select').html(_.template($('#user-select-template').html())({
                users: users
            })).find('select').on('change', handleUserChange).val(Object.keys(users)[0]).trigger('change');

        },
        setTimeline = function(timeline, userKey, buttons, callback) {
            console.info('called setTimeline with this timeline:', timeline);
            $('#user-timeline').html(_.template($('#user-timeline-template').html())({
                timeline: timeline,
                userKey: userKey,
                loadMore: buttons ? buttons.loadMore || false : false,
                orderByText: buttons ? buttons.orderByText || false : false,
                reset: buttons ? buttons.reset || false : false
            }));

            if (typeof callback === 'function') {
                callback();
            }
        },
        setFollowing = function(following) {
            console.info('called setFollowing with this following:', following);
            $('#user-following').html(_.template($('#user-following-template').html())({
                following: following
            }));

        },
        setTweetBox = function(user) {
            console.info('called setTweetBox with this user:', user);
            $('#user-tweet-box').html(_.template($('#user-tweet-box-template').html())({
                user: user
            })).find('textarea').on('keyup', function(e) {
                var characterCount = $(e.target).val().length,
                    tweetLength = $('#tweet-length'),
                    tweetButton = $('#tweet-button');

                tweetLength.text(140 - characterCount);

                if (characterCount <= 140) {
                    tweetLength.css('color', 'gray');

                    if (characterCount > 0) {
                        tweetButton.removeAttr('disabled');
                    }
                } else {
                    tweetLength.css('color', 'red');
                    tweetButton.attr('disabled', 'disabled');
                }
            });
        };

        
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyAmo2uDW1Xf7q33RZQZEqxm0n2EEVeV78M",
            authDomain: "tweetclone-229b5.firebaseapp.com",
            databaseURL: "https://tweetclone-229b5.firebaseio.com",
            storageBucket: "",
        };
        firebase.initializeApp(config);
        var usersRef = firebase.database().ref('users');
        var userObjectsRef = firebase.database().ref('userObjects');

        usersRef.on('value', snap => {
            setUsers(snap.val());
        });

        var handleUserChange = function(e) {
            var userKey = $(e.target).val();

            if (userKey) {
                var userRef = usersRef.child(userKey);
                userRef.on('value', snap => {
                    setTweetBox(snap.val());
                });

                userObjectsRef.child('following').child(userKey).once('value', snap => {
                    setFollowing(snap.val());
                });

            } else {
                setTweetBox({});
                setTimeline({});
                setFollowing({});
            }

        };

})();
