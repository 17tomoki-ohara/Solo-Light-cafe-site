// カレンダー本日以降
const today = new Date ().toISOString().split('T')[0];
document.getElementById('date').min = today;
