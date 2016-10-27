firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        $(".login-form").hide();

    } else {
        // No user is signed in.
        $(".login-form").show();
    }
});

$("#LoginButton").click(function(event) {
    var email = $("#LoginEmail").val();
    var password = $("#LoginPassword").val();
    $("#LoginError").show();
    if (email != "" && password != "") {


        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // body...
            $("#LoginError").show().text(error.message);

        })
    }
});

$("#singOutBtn").click(function() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
    }, function(error) {
        // An error happened.
    });
});
