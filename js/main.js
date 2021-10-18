let theUserName = document.querySelector(".user-name");
let theInput = document.querySelector(".the-tweet");
let btnTweet = document.querySelector(".btn");
let contentTweet = document.querySelector(".content-tweet");
let tweetBox = document.querySelector(".tweet-box");
btnTweet.onclick = function() {
    if (theUserName.value === "" || theInput.value === "") {
        alert("Sory this fild can,t empty");
    } else {
        // create the elements
        var icons = document.createElement("i");
        var nameUser = document.createElement("span");
        var theTweet = document.createElement("span");
        var userReact = document.createElement("div");
        var like = document.createElement("i");
        var share = document.createElement("i");

        // create text to the elements
        var textUser = document.createTextNode(theUserName.value);
        var textTweet = document.createTextNode(theInput.value);

        // add the text to the elements
        nameUser.appendChild(textUser);
        theTweet.appendChild(textTweet);
        userReact.appendChild(like);
        userReact.appendChild(share);

        // add class to elements
        icons.className = "fas fa-user-circle the-user";
        nameUser.className = "name-user";
        theTweet.className = "the-tweet";
        userReact.className = "user-react";
        like.className = "fas fa-heart like deslike";
        share.className = "fas fa-retweet share";

        // add all elements to the content

        tweetBox.appendChild(icons);
        tweetBox.appendChild(nameUser);
        tweetBox.appendChild(theTweet);
        tweetBox.appendChild(userReact);
        contentTweet.appendChild(tweetBox);

        // empty the feild
        theUserName.value = "";
        theInput.value = "";
    }

    like.addEventListener("click", function() {
        this.classList.toggle("deslike");
        contentTweet.style.backgroundColor = "#d7d7d7";
    });

    share.addEventListener("click", function() {
        contentTweet.appendChild(tweetBox);
    });
};