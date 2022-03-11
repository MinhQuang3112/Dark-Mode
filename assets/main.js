var container=document.querySelector('#container')
var check= document.querySelector('#check')
var box= document.querySelector('.box')
var ball=document.querySelector('.ball')
var dark=document.querySelector('.dark')
var light=document.querySelector('.light')

check.addEventListener('change',function(){
    if(this.checked==true){
        box.setAttribute('style','background-color: #ff4e00;background-image: linear-gradient(300deg, #e2d280 10%, #f53803 70%);')
        ball.setAttribute('style','transform:translatex(172%);')
        container.setAttribute('style','background-color:#fff;color:#f44336')
        light.setAttribute('style','visibility:visible;')
        dark.setAttribute('style','visibility:hidden;')
    }

    if(this.checked == false){
        box.setAttribute('style', 'background-color: #e056fd;    background-image: linear-gradient(40deg, #df86c4 20%, #460564 70%);')
        ball.setAttribute('style','transform:translatex(0%);')
        container.setAttribute('style','background-color:black; color:white;')
        light.setAttribute('style','visibility:hidden;')
        dark.setAttribute('style','visibility:visible;')
    }
    })