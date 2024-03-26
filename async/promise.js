const hasMeeting = false;
const meeting = new Promise((resolve, reject) => {
    if(!hasMeeting){
        const meetingDetails = {
            name : 'Technical Meeting',
            location : 'Google Meet',
            time : '10:00 pm'
        };
        resolve(meetingDetails);
    }else{
        reject('meeting has been already scheduled')
    }
})

const addToCalendar = (meetingDetails) => {
    const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location}`;
    return Promise.resolve(calendar);
}


meeting
    .then(addToCalendar)
    .then( (res) => {
        //resolved data
        console.log(JSON.stringify(res))
    })
    .catch((err) => {
        //rejected data
        console.error(err)
    })
