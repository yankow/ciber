//
var image1 = new Image()
image1.src = "http://www.gannett-cdn.com/-mm-/67059accfbbbef211be075a4b37a46ef0f34684c/c=634-221-4054-2151&r=x1128&c=2000x1125/local/-/media/USATODAY/None/2014/10/16/635490822867625015-488078153.JPG"
var image2 = new Image()
image2.src = "http://mediad.publicbroadcasting.net/p/shared/npr/201411/358354216.jpg"
var image3 = new Image()
image3.src = "http://i.huffpost.com/gen/3324162/images/o-ROBOTS-IA-facebook.jpg"
var image4 = new Image()
image4.src = "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/6/13/1402661507809/Thinking-Robot-011.jpg?w=1200&q=85&auto=format&sharp=10&s=f8893d53d79bdc8a8f519381a980efa5"
var image5 = new Image()
image5.src = "http://images.huffingtonpost.com/2016-01-12-1452621149-8235324-thetitanarm.jpeg"
var image6 = new Image()
image6.src = "https://cdn2.vox-cdn.com/thumbor/nZZfOPOb3-Xxynv6j89yyBDzTIg=/cdn0.vox-cdn.com/uploads/chorus_asset/file/3649258/DSCF1364.0.jpg"


var step = 1 
function slideit (){
	document.images.slide.src=eval("image"+step+".src")
	if(step<6)
	step++
	else
	step=1
	setTimeout("slideit()",4500)
	

}
slideit()


   

	function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("http://www.fnews.gr/wp-content/uploads/2015/06/evil-robots-3b.jpg")) {
        image.src = "http://photos1.blogger.com/x/blogger/6247/2375/1600/709550/01_s.jpg";
    } else {
        image.src = "http://www.fnews.gr/wp-content/uploads/2015/06/evil-robots-3b.jpg";
    }
}
	
	
