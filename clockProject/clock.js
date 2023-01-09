/* We can apply JS to HTML in two way:
==> use <script> in html file and write your JS codes that element.
==>you can create external JS and link to your HTML file with help of <script src"">:
*/
function showTime(){
    var dt = new Date();
    let h= dt.getHours();
    let m= dt.getMinutes();
    let s= dt.getSeconds();
    let format = 'AM';
    if(h==0){
        h=12;
    }
    if(h>12){
    h=h-12;//let says is 15==>15-12=3PM
    format = 'PM';
    }
    h= h<10? "0"+h: h;
    m= m<10? "0"+m: m;
    s= s<10? "0"+s: s;
    let time = h + ':' + m + ':' + s + ' ' + format;
    document.getElementById('Clock').innerHTML=time;
    setTimeout(showTime,1000);
}
showTime();