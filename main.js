var mainNavList = document.querySelectorAll('.main-nav__link');
var organisationLinkList = document.querySelectorAll('.organisation__nav-link');
var replyButtonList = document.querySelectorAll('.reply__button');
var replyFormList = document.querySelectorAll('.reply-form');

for(var i = 0; i < mainNavList.length; i++){
	linkShow(i);
}

function linkShow(i){
	mainNavList[i].addEventListener('click', function(evt){
		evt.preventDefault();
		if(!this.classList.contains('active')){
			document.querySelector('.main-nav__link.active').classList.remove('active');
			this.classList.add('active');
		}
	});
}

for(var i = 0; i < organisationLinkList.length; i++){
	organisationLinkShow(i);
}

function organisationLinkShow(i){
	organisationLinkList[i].addEventListener('click', function(evt){
		evt.preventDefault();
		if(!this.classList.contains('active')){
			document.querySelector('.organisation__nav-link.active').classList.remove('active');
			this.classList.add('active');
		}
	});
}

for(var j = 0; j < replyButtonList.length; j++){
	showReply(j);
}

function showReply(i){
	replyButtonList[i].addEventListener('click', function(evt){
		evt.preventDefault();
		if(this.classList.contains('active')){
			this.classList.remove('active');
			replyFormList[i].classList.remove('active');
		}
		else{
			this.classList.add('active');
			replyFormList[i].classList.add('active');
		}
	});
}