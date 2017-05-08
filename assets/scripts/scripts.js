/*


    ^^^           ^^^  ^^^^^^^^^^^^ ^^^           ^^^^^^^^^^^^  ^^^^^^^^^^^^ ^^^^^^^       ^^^^^^^ ^^^^^^^^^^^^
    ^^^           ^^^  ^^^^^^^^^^^^ ^^^           ^^^^^^^^^^^^  ^^^^^^^^^^^^ ^^^^^^^^      ^^^^^^^ ^^^^^^^^^^^^
	^^^           ^^^  ^^^          ^^^           ^^^ 		    ^^^      ^^^ ^^^    ^^    ^^   ^^^ ^^^
	^^^           ^^^  ^^^^^^^^     ^^^           ^^^           ^^^      ^^^ ^^^     ^^  ^^    ^^^ ^^^^^^
	^^^   ^^ ^^   ^^^  ^^^^^^^^     ^^^           ^^^           ^^^      ^^^ ^^^      ^^^^     ^^^ ^^^^^^
	^^^   ^^ ^^   ^^^  ^^^          ^^^           ^^^           ^^^      ^^^ ^^^      ^^^^     ^^^ ^^^
	^^^^^^^   ^^^^^^^  ^^^^^^^^^^^ ^^^^^^^^^^^^^  ^^^^^^^^^^^^  ^^^^^^^^^^^^ ^^^               ^^^ ^^^^^^^^^^^^
	^^^^^^     ^^^^^^  ^^^^^^^^^^^^ ^^^^^^^^^^^^^ ^^^^^^^^^^^^  ^^^^^^^^^^^^ ^^^               ^^^ ^^^^^^^^^^^^	 
		 
		 
*/ 

// Author Amir Saleem
//open menu function for sidebar
function openMenu() {
    var menuBox, mainBox, headerBox, first, second, leaveMe;
    menuBox = document.getElementsByTagName("aside");
    contentBox = document.getElementById("content");
    mainBox = document.getElementById("main");
    headerBox = document.getElementsByTagName("header");
    first = document.getElementById("firstBlock");
    second = document.getElementById("headBlock");
    leaveMe = document.getElementById("leavingWrapper");
    if (document.documentElement.clientWidth < 769) {
        menuBox[0].style.cssText += "margin-left: 0px;";
        first.style.marginLeft = "0px";
        second.style.marginLeft = "0px";
		
    } else {
        menuBox[0].style.cssText += "margin-left: 0px;";
        first.style.marginLeft = "0px";
        second.style.marginLeft = "0px";
        mainBox.style.marginLeft = "300px";
        leaveMe.style.marginLeft = "300px";
    }
}
//close menu function for sidebar
function closeMenu() {
    var menuBox, mainBox, headerBox, first, second, leaveMe;
    menuBox = document.getElementsByTagName("aside");
    contentBox = document.getElementById("content");
    mainBox = document.getElementById("main");
    headerBox = document.getElementsByTagName("header");
    first = document.getElementById("firstBlock");
    second = document.getElementById("headBlock");
    leaveMe = document.getElementById("leavingWrapper");
    if (document.documentElement.clientWidth < 769) {
        menuBox[0].style.marginLeft = "-101%";
        first.style.marginLeft = "-101%";
        second.style.marginLeft = "-101%";
        mainBox.style.marginLeft = "0px";
    } else {
        menuBox[0].style.marginLeft = "-300px";
        first.style.marginLeft = "-300px";
        second.style.marginLeft = "-300px";
        mainBox.style.marginLeft = "0px";
        leaveMe.style.marginLeft = "0px";
    }
}
//Show buttons for know more when user hover over the service elements
function showBtn1() {
    var target;
    if (document.documentElement.clientWidth > 1000) {
        target = document.getElementsByClassName("knowMore");
        target[0].style.cssText += "height: auto; padding: 10px 20px 10px 20px;";
    }
}

function closeBtn1() {
    var target;
    if (document.documentElement.clientWidth > 1000) {
        target = document.getElementsByClassName("knowMore");
        target[0].style.cssText += "height: 0; padding: 0";
    }
}

function showBtn2() {
    var target;
    if (document.documentElement.clientWidth > 1000) {
        target = document.getElementsByClassName("knowMore");
        target[1].style.cssText += "height: auto; padding: 10px 20px 10px 20px;";
    }
}

function closeBtn2() {
    var target;
    if (document.documentElement.clientWidth > 1000) {
        target = document.getElementsByClassName("knowMore");
        target[1].style.cssText += "height: 0; padding: 0";
    }
}

function showBtn3() {
    var target;
    if (document.documentElement.clientWidth > 1000) {
        target = document.getElementsByClassName("knowMore");
        target[2].style.cssText += "height: auto; padding: 10px 20px 10px 20px;";
    }
}

function closeBtn3() {
    var target;
    if (document.documentElement.clientWidth > 1000) {
        target = document.getElementsByClassName("knowMore");
        target[2].style.cssText += "height: 0; padding: 0";
    }
}

function showBtn4() {
    var target;
    if (document.documentElement.clientWidth > 1000) {
        target = document.getElementsByClassName("knowMore");
        target[3].style.cssText += "height: auto; padding: 10px 20px 10px 20px;";
    }
}

function closeBtn4() {
    var target;
    if (document.documentElement.clientWidth > 1000) {
        target = document.getElementsByClassName("knowMore");
        target[3].style.cssText += "height: 0; padding: 0";
    }
}
//portfolio effect functions
function out() {
    var target;
    var i = 0;
    target = document.getElementsByClassName("fore");
    for (i = 0; i < target.length; i++) {
        target[i].style.backgroundColor = "rgba(0,0,0,0.0)";
    }
}

function a1() {
    var target;
    var i = 0;
    target = document.getElementsByClassName("fore");
    for (i = 0; i < target.length; i++) {
        if (i == 0) {
            continue;
        }
        target[i].style.backgroundColor = "rgba(0,0,0,0.8)";
    }
}

function a2() {
    var target;
    var i = 0;
    target = document.getElementsByClassName("fore");
    for (i = 0; i < target.length; i++) {
        if (i == 1) {
            continue;
        }
        target[i].style.backgroundColor = "rgba(0,0,0,0.8)";
    }
}

function a3() {
    var target;
    var i = 0;
    target = document.getElementsByClassName("fore");
    for (i = 0; i < target.length; i++) {
        if (i == 2) {
            continue;
        }
        target[i].style.backgroundColor = "rgba(0,0,0,0.8)";
    }
}

function a4() {
    var target;
    var i = 0;
    target = document.getElementsByClassName("fore");
    for (i = 0; i < target.length; i++) {
        if (i == 3) {
            continue;
        }
        target[i].style.backgroundColor = "rgba(0,0,0,0.8)";
    }
}

function a5() {
    var target;
    var i = 0;
    target = document.getElementsByClassName("fore");
    for (i = 0; i < target.length; i++) {
        if (i == 4) {
            continue;
        }
        target[i].style.backgroundColor = "rgba(0,0,0,0.8)";
    }
}

function a6() {
    var target;
    var i = 0;
    target = document.getElementsByClassName("fore");
    for (i = 0; i < target.length; i++) {
        if (i == 5) {
            continue;
        }
        target[i].style.backgroundColor = "rgba(0,0,0,0.8)";
    }
}

function a7() {
    var target;
    var i = 0;
    target = document.getElementsByClassName("fore");
    for (i = 0; i < target.length; i++) {
        if (i == 6) {
            continue;
        }
        target[i].style.backgroundColor = "rgba(0,0,0,0.8)";
    }
}

function a8() {
    var target;
    var i = 0;
    target = document.getElementsByClassName("fore");
    for (i = 0; i < target.length; i++) {
        if (i == 7) {
            continue;
        }
        target[i].style.backgroundColor = "rgba(0,0,0,0.8)";
    }
}
//Email validation for newsletter signup
function validateEmail() {
    var Email, pattern, i, target, myTitle, myInfo;
    Email = document.getElementById("newsInput").value;
    pattern = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    target = document.getElementsByClassName("modalWrapper");
    myTitle = document.getElementById("title");
    myInfo = document.getElementById("info");
    if (Email == null || Email == '') {
        target[0].style.display = "block";
        myTitle.style.color = "crimson";
        myTitle.innerHTML = "OOPS!";
        myInfo.innerHTML = "It seems that you have forgotton to enter your email id"
        return false;
    } else if (!Email.match(pattern)) {
        target[0].style.display = "block";
        myTitle.style.color = "crimson";
        myTitle.innerHTML = "OOPS!"
        myInfo.innerHTML = "It seems that you have entered an invalid email id"
        return false;
    } else {
        target[0].style.display = "block";
        myTitle.style.color = "forestgreen";
        myTitle.innerHTML = "WHOAA!"
        myInfo.innerHTML = "You have successfully subscribed to our newsletter"
        return false;
    }
}
//close modal when user click on close icon on modal
function closeModal() {
    var target = document.getElementsByClassName("modalWrapper");
    target[0].style.display = "none"
}
//Open thank you note
function openVisit() {
    var target, mainBlock;
    mainBlock = document.getElementById("main");
    target = document.getElementById("leavingWrapper");
    if (document.documentElement.clientWidth > 992) {
        target.style.zIndex = "200px";
        target.style.visibility = "visible";
        mainBlock.style.marginTop = "100px";
    } else {
		target.style.zIndex = "200px";
		target.style.visibility = "visible";
        target.style.marginTop = "0px";
    }
}
//close thank you note 
function closeVisit() {
    var target, mainBlock;
    mainBlock = document.getElementById("main");
    target = document.getElementById("leavingWrapper");
    if (document.documentElement.clientWidth > 992) {
        target.style.zIndex = "-200px";
        target.style.visibility = "hidden";
        mainBlock.style.marginTop = "0px";
    } else {
		target.style.zIndex = "200px";
		target.style.visibility = "hidden";
        target.style.marginTop = "-150px";
    }
}

//Show alert when user clicks on know more button
function myAlert() {
    alert('This page is under maintainance');
}

function validate() {
    validateFirstName();
    validateLastName();
    validateEmailId();
    validateComments();
    proceed();
    return false;
}

function signUpValidate() {
    var firstName, lastName, email, passWord, confirmPassword;
    firstName = document.forms["signUpForm"]["firstName"].value;
    lastName = document.forms["signUpForm"]["lastName"].value;
    email = document.forms["signUpForm"]["Email"].value;
    passWord = document.forms["signUpForm"]["pWord"].value;
    confirmPassword = document.forms["signUpForm"]["pCWord"].value;
    validateFirstName(firstName);
    validateLastName(lastName);
    validateEmailId(email);
    validatePassword(passWord);
    validateConfirmPassword(confirmPassword);
    validateCheck();
    finalValidate();
    return false;
}

function validateFirstName(x) {
    var pattern, showError;
    showError = document.getElementsByClassName("error");
    pattern = /\W|\d/;
    if (x == null || x == '') {
        showError[0].style.display = "block";
        showError[0].innerHTML = "First Name is required";
        return false;
    } else if (x.match(pattern)) {
        showError[0].style.display = "block";
        showError[0].innerHTML = "Sorry, no special characters or numbers are allowed";
        return false;
    } else {
        showError[0].style.display = "none";
        return false;
    }
}

function validateLastName(x) {
    var pattern, showError;
    showError = document.getElementsByClassName("error");
    pattern = /\W|\d/;
    if (x == null || x == '') {
        showError[1].style.display = "block";
        showError[1].innerHTML = "Last Name is required";
        return false;
    } else if (x.match(pattern)) {
        showError[1].style.display = "block";
        showError[1].innerHTML = "Sorry, no special characters or numbers are allowed";
        return false;
    } else {
        showError[1].style.display = "none";
        return false;
    }
}

function validateEmailId(x) {
    var pattern, showError;
    showError = document.getElementsByClassName("error");
    pattern = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    if (x == null || x == '') {
        showError[2].style.display = "block";
        showError[2].innerHTML = "Email is required";
        return false;
    } else if (!x.match(pattern)) {
        showError[2].style.display = "block";
        showError[2].innerHTML = "Please enter a valid email id";
        return false;
    } else {
        showError[2].style.display = "none";
        return false;
    }
}

function validateComments() {
    var comments, pattern, showError;
    comments = document.forms["contactFormClever"]["Comments"].value;
    showError = document.getElementsByClassName("error");
    if (comments == null || comments == '') {
        showError[3].style.display = "block"
        showError[3].innerHTML = "This field is required";
        return false;
    } else {
        showError[3].style.display = "none";
        return false;
    }
}

function proceed() {
    var target, myTitle, myInfo, firstName, lastName, email, comments, wholeForm, showError;
    showError = document.getElementsByClassName("error");
    firstName = document.forms["contactFormClever"]["Fname"].value;
    lastName = document.forms["contactFormClever"]["Lname"].value;
    email = document.forms["contactFormClever"]["Email"].value;
    comments = document.forms["contactFormClever"]["Comments"].value;
    wholeForm = document.forms["contactFormClever"];
    if (firstName != '' && lastName !== '' && email != '' && comments != '') {
        wholeForm.reset();
        target = document.getElementsByClassName("modalWrapper");
        myTitle = document.getElementById("title");
        myInfo = document.getElementById("info");
        target[0].style.display = "block";
        myTitle.style.color = "forestgreen";
        myTitle.innerHTML = "SUCCESS";
        myInfo.innerHTML = "We have successfully recieved your message. Will get back to you shortly";
        for (i = 0; i < showError.length; i++) {
            showError[i].style.display = "none";
        }
        return false;
    } else {
        return false;
    }
}

function validatePassword(x) {
    var showError, pattern1, pattern2;
    showError = document.getElementsByClassName("error");
    pattern1 = /\d/;
    pattern2 = /\W/;
    if (x == null || x == '') {
        showError[3].style.display = "block";
        showError[3].innerHTML = "Password is required";
        return false;
    } else if (!x.match(pattern1)) {
        showError[3].style.display = "block";
        showError[3].innerHTML = "Must contain atleast one digit";
    } else if (!x.match(pattern2)) {
        showError[3].style.display = "block";
        showError[3].innerHTML = "Must contain atleast one special character";
    } else {
        showError[3].style.display = "none";
        return false;
    }
}	
function validateConfirmPassword(x) {
    var showError, passWord;
    showError = document.getElementsByClassName("error");
    passWord = document.forms["signUpForm"]["pWord"].value;
    if (x == null || x == '') {
        showError[4].style.display = "block";
        showError[4].innerHTML = "This field is required";
        return false;
    } else if (x != passWord) {
        showError[4].style.display = "block";
        showError[4].innerHTML = "Password didn't match";
        return false;
    } else {
        showError[4].style.display = "none";
        return false;
    }
}

function validateCheck() {
    var password1, password2, showError;
    password1 = document.forms["signUpForm"]["pWord"].value;
    password2 = document.forms["signUpForm"]["pCWord"].value;
    showError = document.getElementsByClassName("error");
    if (password2 != password1) {
        alert('Password didn\'t match');
        return false;
    } else {
        showError[4].style.display = "none";
        return false;
    }
}

function finalValidate() {
    var target, myTitle, myInfo, firstName, lastName, email, passWord, password1, password2, confirmPassword, wholeForm;
    target = document.getElementsByClassName("modalWrapper");
    myTitle = document.getElementById("title");
    myInfo = document.getElementById("info");
    firstName = document.forms["signUpForm"]["firstName"].value;
    lastName = document.forms["signUpForm"]["lastName"].value;
    email = document.forms["signUpForm"]["Email"].value;
    passWord = document.forms["signUpForm"]["pWord"].value;
    confirmPassword = document.forms["signUpForm"]["pCWord"].value;
    password1 = document.forms["signUpForm"]["pWord"].value;
    password2 = document.forms["signUpForm"]["pCWord"].value;
    wholeForm = document.forms["signUpForm"];
    if (firstName != '' && lastName != '' && email != '' && passWord != '' && confirmPassword != '') {
        wholeForm.reset();
        target[0].style.display = "block";
        myTitle.style.color = "forestgreen";
        myTitle.innerHTML = "SUCCESS";
        myInfo.innerHTML = "Registration was successfull";
        return false;
    } else {
        return false;
    }
}

function showPass() {
    var target, plainText;
    target = document.forms["logInForm"]["word"];
    plainText = document.getElementById("text");
    if (plainText.innerHTML == "show") {
        plainText.innerHTML = "SHOW";
        target.setAttribute("type", "text");
    } else if (plainText.innerHTML == "SHOW") {
        plainText.innerHTML = "show";
        target.setAttribute("type", "password");
    }
}

function loginValidate() {
    var pWord, email;
    pWord = document.forms["logInForm"]["word"].value;
    email = document.forms["logInForm"]["Email"].value;
    validPass(pWord);
    validateEmailId(email);
    finalMove();
    return false;
}

function validPass(x) {
    var showError;
    showError = document.getElementsByClassName("error");
    if (x == '' || x == null) {
        showError[3].style.display = "block";
        showError[3].innerHTML = "Please enter your password";
        return false;
    } else {
        showError[3].style.display = "none";
        return false;
    }
}

function finalMove() {
    var pWord, email, target, myTitle, myInfo;
    pWord = document.forms["logInForm"]["word"].value;
    email = document.forms["logInForm"]["Email"].value;
    target = document.getElementsByClassName("modalWrapper");
    myTitle = document.getElementById("title");
    myInfo = document.getElementById("info");
	var storedName = localStorage.userName;
	var storedPassword = localStorage.passWord;
    if (email != '' && pWord != '') {
        target[0].style.display = "block";
        myTitle.style.color = "crimson";
        myTitle.innerHTML = "OOPS!";
        myInfo.innerHTML = "Sorry, but you are not registered with us";
        return false;
    } else {
		return false;
    }
}
//show menu and back-to-top button when user scrolls more than 500px and hide when pageYOffsset < 500
function toggleMenu(){
	var target,target2;
	target = document.getElementsByClassName("menuBtn-2");
	target2 = document.getElementsByClassName("backToTop");
	if(window.pageYOffset > 500){
		target[0].style.display = "block";
		target2[0].style.display = "block";
	}
	else if (window.pageYOffset <= 500){
		target[0].style.display = "none";
		target2[0].style.display = "none";
	}
}
// back to top function
function scrollTopBody(){
	var myBody = document.body;
	var id = setInterval(secondFunction,1);
	var height = window.pageYOffset;
	var counter = height;
	function secondFunction(){
		if(window.pageYOffset == 0){
			clearInterval(id);
		}
		else {
			if(window.chrome && window.chrome.webstore) {
				counter -= 25;
				counter--;
				myBody.scrollTop = counter;
			}
			else {
			counter -= 35;
			counter--;	
			document.documentElement.scrollTop = counter;
			}
		}
	}
}
// open new tab for large screen
function showLargeScreen() {
	var largeWindow;
	largeWindow = window.open("file:///F:/projects/project%20001%20(Without%20Video)/home.html","_blank", "width = 1600,height = 600");
}
//open new tab for tablet window
function showTabletScreen(){
	var tabletWindow;
	tabletWindow = window.open("file:///F:/projects/project%20001%20(Without%20Video)/home.html","_blank", "width = 540,height = 700");
}
// open new tab for phone window
function showPhoneScreen(){
	var phoneWindow;
	phonetWindow = window.open("file:///F:/projects/project%20001%20(Without%20Video)/home.html","_blank", "width = 375,height = 600");
}
//open page and browser right sidebar
function openDetails(){
	var target;
	target = document.getElementById("rightBar");
	target.style.marginRight = "0px";
}
//close page and browser right sidebar
function closeDetails(){
	var target;
	target = document.getElementById("rightBar");
	target.style.marginRight = "-250px";
}
//page and browser details
function showDetails(){
	var detail,calcWidth;
	detail = document.getElementsByClassName("writeDetails");
	calcWidth = document.documentElement.clientWidth;
	detail[0].innerHTML = "Width: " + calcWidth + "px";
	detail[1].innerHTML = "Height: " + pageYOffset + "px";
	detail[2].innerHTML = "Theme Color: #00193E";
	detail[3].innerHTML = "Color Depth: " + screen.colorDepth;
	detail[4].innerHTML = "Pixel Depth: " + screen.pixelDepth;
	detail[5].innerHTML = "Page Protocol: " + window.location.protocol;
	detail[6].innerHTML = "Cookies: " + navigator.cookieEnabled;
	detail[7].innerHTML = "Browser Name: " + navigator.appName;
	detail[8].innerHTML = "Browser Code: " + navigator.appCodeName;
	detail[9].innerHTML = "Browser Engine: " + navigator.product;
	detail[10].innerHTML = "Browser Platform: " + navigator.platform;
	detail[11].innerHTML = "Browser Language: " + navigator.language;
	detail[12].innerHTML = "Browser Version: " + navigator.appVersion;
}
//onScroll functions
function myScroll(){
	toggleMenu();
	showDetails();
}
function changeValue1(){
	var target;
	target = document.getElementsByClassName("navValue");
	target[0].innerHTML = "SERVICES";
}
function changeValueAgain1(){
	var target;
	target = document.getElementsByClassName("navValue");
	target[0].innerHTML = "";
}
function changeValue2(){
	var target;
	target = document.getElementsByClassName("navValue");
	target[1].innerHTML = "PROCESS";
}
function changeValueAgain2(){
	var target;
	target = document.getElementsByClassName("navValue");
	target[1].innerHTML = "";
}
function changeValue3(){
	var target;
	target = document.getElementsByClassName("navValue");
	target[2].innerHTML = "CONTACT";
}
function changeValueAgain3(){
	var target;
	target = document.getElementsByClassName("navValue");
	target[2].innerHTML = "";
}
