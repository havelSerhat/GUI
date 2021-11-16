export function convertDateObj(hhmmss){
	let obj = new Date();//creates a Date Object using the clients current time

    let [hours,minutes,seconds] = hhmmss.split(':'); 

    obj.setHours(+hours); // set the hours, using implicit type coercion
    obj.setMinutes(minutes); //you can pass Number or String, it doesn't really matter
    obj.setSeconds(seconds);
    return obj;
}