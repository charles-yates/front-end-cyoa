
export default function Comment({comment}) {
    const {id, name, message, created} = comment;

    return (
        <div className="comment" key={id} style={{
            borderStyle: "solid",
            borderWidth: "1px",
            marginBottom: "10px",
            padding: "5px",
            width: "400px",
        }}>
            <div className="message" style={{
                fontSize: "14px",
                marginBottom: "5px",
            }}>{message}</div>
            <div className="created" style={{
                marginBottom: "5px"
            }}>{`${name} on ${convertDateTimeToString(created)}`}</div>  
        </div>
    )
}

// Weekday, Month Day, Year, Hour:Minute am/pm, ex: Friday, May 12, 2023 at 3:32 AM
const convertDateTimeToString = (dateTime) => {
    const date = new Date(dateTime);
    const timezoneOffset = date.getTimezoneOffset() * 60 * 1000;
    const newDate = new Date(date.getTime() - timezoneOffset);
    const dateString = newDate.toLocaleDateString('en-US', {
        weekday: 'long', 
    });
    const timeString = newDate.toLocaleTimeString('en-US', {
        hour: 'numeric', 
        minute: 'numeric', 
        hour12: true
    });
    return `${dateString} at ${timeString}`;
}
