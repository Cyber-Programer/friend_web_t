
var friend = document.querySelector('#ck_friend')

var button = document.querySelector('#ck_button')

var flag = 0

button.addEventListener("click",function(){
    if (flag == 0){
        friend.innerHTML = "Friends"
        friend.style.color = 'green'
        flag = 1 

        button.innerHTML = "Remove friend"
    }

    else {
        friend.innerHTML = "Stranger"
        friend.style.color = 'rgb(221, 28, 28)'
        flag = 0

        button.innerHTML = "Friend"
    }
})