// JavaScript Document
let future= new Date(2022,1,11);
    function  time(){
        let N =new Date();
        let d=(future.getTime()-N.getTime())/86400000;
        let h=(future.getTime()-N.getTime())%86400000/3600000;
        let m=(future.getTime()-N.getTime())%3600000/60000;
        let s=(future.getTime()-N.getTime())%60000/1000;
        document.getElementById("time").innerHTML=d.toFixed(0)-30+"天"+h.toFixed(0)+8+"小时"+m.toFixed(0)+"分钟"+s.toFixed(0)+"秒"
    }
    function now(){
        let N =new Date();
        document.getElementById("now").innerHTML=N.getFullYear()+"年"+(N.getMonth()+1)+"月"+N.getDate()+"日"+N.getHours()+"时"+
            N.getMinutes()+"分"+N.getSeconds()+"秒";
    }
    setInterval(now,100);
    setInterval(time,100);