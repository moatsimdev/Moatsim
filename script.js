let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});
const btn = document.getElementById('buttonemail');
document.getElementById('formemail')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending Message...';

    const serviceID = 'default_service';
    const templateID = 'template_v3e9dbo';
    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Message';
        alert('Done Send Message successfully !');
        setTimeout(() => {
          location.reload();
        }, 1000);
      })
      .catch((err) => {
        btn.value = 'Send Message';
        alert('I cannot send  message!');
        setTimeout(() => {
          location.reload();
        }, 1000);
      });
  });


new TypeIt("#moatsim", { 
    lifeLike: false, 
    speed: 0 
})
	.delete(17, {instant: true})
	.type("m")
	.pause(237)
	.type("o")
	.pause(318)
	.type("a")
	.pause(580)
	.type("t")
	.pause(187)
	.type("s")
	.pause(343)
	.type("i")
	.pause(192)
	.type("m")
	.pause(251)
	.type(" ")
	.pause(602)
	.delete(1)
	.pause(511)
	.delete(1)
	.pause(30)
	.delete(1)
	.pause(32)
	.delete(1)
	.pause(31)
	.delete(1)
	.pause(31)
	.delete(1)
	.pause(31)
	.delete(1)
	.pause(29)
	.delete(1)
	.pause(32)
	.delete(1)
	.pause(30)
	.delete(1)
	.pause(31)
	.delete(1)
	.pause(31)
	.delete(1)
	.pause(31)
	.delete(1)
	.pause(31)
	.delete(1)
	.pause(31)
	.delete(1)
	.pause(31)
	.delete(1)
	.pause(32)
	.delete(1)
	.pause(1226)
	.type("b")
	.pause(148)
	.type("a")
	.pause(280)
	.type("c")
	.pause(205)
	.type("k")
	.pause(265)
	.type("e")
	.pause(193)
	.type("n")
	.pause(102)
	.type("d")
	.pause(137)
	.type(" ")
	.pause(632)
	.type("d")
	.pause(440)
	.type("e")
	.pause(675)
	.type("v")
	.pause(1137)
	.type("e")
	.pause(425)
	.type("l")
	.pause(355)
	.type("o")
	.pause(249)
	.type("p")
	.pause(127)
	.type("e")
	.pause(219)
	.type("r")
	.pause(234)
	.type(" ")
	.pause(175)
	.type(".")
	.go();
