function notify(message) {
    alert("NOTICE: " + message);
}

function yell(message) {
    alert("OMFGGG: " + message);
}

export default {
    notify: notify,
    yell: yell
}