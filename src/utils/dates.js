export function tenDaysBeforeNow(){
    let date = new Date()
    date.setHours(0,0,0,0)
    date.setDate(date.getDate() - 10);
    return date;
}