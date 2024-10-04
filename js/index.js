const today = new Date();
const currentHour = today.getHours();
let message = "Hello";

// if it's morning, show good morning message"
if (currentHour <= 12) {
    message = "Good morning, world!";
//if it's mid-day, show "hello" message
} else if (currentHour > 12 && currentHour <= 17) {
    message = "Hello world!";
//if it's evening, show "good evening" message
} else if (currentHour > 17) {
    message = "Good evening, world!";
}
const handleClick = () => {
    alert(message);
}