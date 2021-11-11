
export const dateFormatter=(stringFormat)=>{
    console.log(stringFormat)
let date = new Date(stringFormat);
let year = date.getFullYear();
let month = date.getMonth()+1;
let dt = date.getDate();

if (dt < 10) {
  dt = '0' + dt;
}
if (month < 10) {
  month = '0' + month;
}
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
if(minutes<10){
	minutes="0"+minutes
}
if(seconds<10){
	seconds="0"+seconds
}
let dateArr=[]
dateArr.push(dt+'-' + month + '-'+year)
dateArr.push(hours + ":" + minutes + ":" +seconds)
return dateArr
}