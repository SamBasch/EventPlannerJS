
var events = [{
    event: "ComicCon",
    city: "New York",
    state: "New York",
    attendance: 240000,
    date: "06/01/2017",
  },
  {
    event: "ComicCon",
    city: "New York",
    state: "New York",
    attendance: 250000,
    date: "06/01/2018",
  },
  {
    event: "ComicCon",
    city: "New York",
    state: "New York",
    attendance: 257000,
    date: "06/01/2019",
  },
  {
    event: "ComicCon",
    city: "San Diego",
    state: "California",
    attendance: 130000,
    date: "06/01/2017",
  },
  {
    event: "ComicCon",
    city: "San Diego",
    state: "California",
    attendance: 140000,
    date: "06/01/2018",
  },
  {
    event: "ComicCon",
    city: "San Diego",
    state: "California",
    attendance: 150000,
    date: "06/01/2019",
  },
  {
    event: "HeroesCon",
    city: "Charlotte",
    state: "North Carolina",
    attendance: 40000,
    date: "06/01/2017",
  },
  {
    event: "HeroesCon",
    city: "Charlotte",
    state: "North Carolina",
    attendance: 45000,
    date: "06/01/2018",
  },
  {
    event: "HeroesCon",
    city: "Charlotte",
    state: "North Carolina",
    attendance: 50000,
    date: "06/01/2019",
  },
];


function buildDropDown() {

    //get the dropdown menu from the page
    //empty the content of the HTML inside the dropdown so it is clean every program run/interation.
    //pull out just the city names
    //filter the cities to only DISTINCT city names
    //get the template from the HTML page
    //copy the template
     //get the <a> tag from the template copy
     //change the text
     // <a class="dropdown-item">All Cities</a>
     //add item to the page

    let dropDownMenu = document.getElementById('eventDropDown');

    dropDownMenu.innerHTML = '';

    let currEvents = getEventData();

    let eventCities = currEvents.map( (event) => event.city );

    let distinctCities = [...new Set(eventCities)];

    const template = document.getElementById('dropdownItemTemplate')
    let dropdownTemplateNode = document.importNode(template.content, true);
    let menuItem = dropdownTemplateNode.querySelector('a');

    menuItem.textContent = 'All Cities';

    menuItem.setAttribute("data-string", "All");

    dropDownMenu.appendChild(dropdownTemplateNode);



    for (let i = 0; i < distinctCities.length; i++) {
        let cityMenuItem = document.importNode(template.content, true)
        let cityButton = cityMenuItem.querySelector('a');
        cityButton.textContent = distinctCities[i];
        cityButton.setAttribute('data-string', distinctCities[i]);
        dropDownMenu.appendChild(cityMenuItem);
    }



    displayStats(currEvents)

    displayEvents(currEvents);

}



function displayStats(eventsArray) {

    let totalAttendance = calculateTotal(eventsArray);

    let averageAttendance = calculateAverage(eventsArray);

    let mostAttendance = calculateMost(eventsArray);

    let leastAttendance = calculateLeast(eventsArray);

    //do some math

    document.getElementById('total').textContent = totalAttendance.toLocaleString();
    document.getElementById('average').textContent = averageAttendance.toLocaleString(
        "en-US", {
            maximumFractionDigits: 0,
            minimumFractionDigits: 0
        }
    );
    document.getElementById('most').textContent = mostAttendance.toLocaleString();
    document.getElementById('least').textContent = leastAttendance.toLocaleString();
}



function calculateTotal(eventsArray) {
    
    let sum = 0;

    for(let i = 0; i < eventsArray.length; i++) {
        let currentEvent = eventsArray[i];
        sum = sum + currentEvent.attendance;
    }
    return sum;
}



function calculateAverage(eventsArray) {
    
    let sum = 0;
    let average = 0;

    

    for(let i = 0; i < eventsArray.length; i++) {
        let currentEvent = eventsArray[i];
        sum = sum + currentEvent.attendance;

        average = sum / eventsArray.length;
    }
    return average;
}


function calculateMost(eventsArray) {
    
   
    

    let largestAttendance = eventsArray[0].attendance;
    

    for (let i = 0; i < eventsArray.length; i++) {

       
        let currentEvent = eventsArray[i];
      

        if (currentEvent.attendance > largestAttendance) {
            largestAttendance = currentEvent.attendance;
        }
    }
    return largestAttendance;
}




function calculateLeast(eventsArray) {
    
   
    

    let smallestAttendance = eventsArray[0].attendance;
    

    for (let i = 0; i < eventsArray.length; i++) {

       
        let currentEvent = eventsArray[i];
      

        if (currentEvent.attendance < smallestAttendance) {
            smallestAttendance = currentEvent.attendance;
        }
    }
    return smallestAttendance;
}




function calculateStats(eventsArray) {
    let sum = 0;
    let average = 0;
    let largestAttendance = eventsArray[0].attendance;
    let smallestAttendance = eventsArray[0].attendance;


    let stats = {
        total: sum, 
        averageAttendance: average, 
        minimumAttendance: min, 
        maximumAttendance: max
    }


    for (let i = 0; i < eventsArray.length; i++) {


        sum = sum + currentEvent.attendance;

        

        let currentEvent = eventsArray[i];

        if (currentEvent.attendance > largestAttendance) {
            largestAttendance = currentEvent.attendance;
        }

        if (currentEvent.attendance < smallestAttendance) {
            smallestAttendance = currentEvent.attendance;
        }
    }

    average = sum / eventsArray.length;



 

    return stats;
                                 

    }


function displayEvents(eventsArray) {

//link your HTML (that you want to fill out with content) element to a variable
//declare your template variable and link it to the template element in HTML
//initialize the HTML element that you want to fill out with content with ''(nothing) to clear it before every use 
    let tableBody = document.getElementById('tableEvent');
    const tableRowTemplate = document.getElementById('eventTableRowTemplate');
    tableBody.innerHTML = '';

    //using a for loop to iterate through all of the objects in the array
    //
    for (let i = 0; i < eventsArray.length; i++) {
        let eventRow = document.importNode(tableRowTemplate.content, true);
        let currentEvent = eventsArray[i];
        let tableCells = eventRow.querySelectorAll('td');
        tableCells[0].textContent = currentEvent.event.toLocaleString();
        tableCells[1].textContent = currentEvent.city.toLocaleString();
        tableCells[2].textContent = currentEvent.state.toLocaleString();
        tableCells[3].textContent = currentEvent.attendance.toLocaleString();
        tableCells[4].textContent = currentEvent.date.toLocaleString();

        tableBody.appendChild(eventRow);


        
    }


}



function getEventData() {
        let currentEvents = JSON.parse( localStorage.getItem('sb-eventData') );

        if (currentEvents == null) {
            currentEvents = events;
            localStorage.setItem('sb-eventData', JSON.stringify(currentEvents) );
        }

        return currentEvents;
}



function getEvents(element) {

    let currentEvents = getEventData();

    let cityName = element.getAttribute('data-string');

    let filteredEvents = currentEvents;

    if(cityName != 'All') {
        filteredEvents =  currentEvents.filter(
            function (event) {
                if (cityName == event.city) {
                    return event;
                }
            }
        );
    
    }
   

    document.getElementById('statsHeader').textContent = cityName;
    displayStats(filteredEvents);
    displayEvents(filteredEvents);

}



function saveEventData() {

    let eventName = document.getElementById('newEventName').value;
    let cityName = document.getElementById('newEventCity').value;
    let eventAttendance = parseInt(document.getElementById('newEventAttendance').value);
    let eventDate = document.getElementById('newEventDate').value;

    eventDate = `${eventDate} 00:00`;

    eventDate = new Date(eventDate).toLocaleDateString();


    let stateSelect = document.getElementById('newEventState');
    let state = stateSelect.options[stateSelect.selectedIndex].text;
    


    let newEvent =  {
        attendance: eventAttendance,
        event: eventName, 
        date: eventDate, 
        state: state,
        city: cityName, 

    };

    let currentEvents = getEventData();

    currentEvents.push(newEvent);

    localStorage.setItem("sb-eventData", JSON.stringify(currentEvents));


    

    //update the page later
    buildDropDown();
    document.getElementById('statsHeader').textContent = 'All';
    document.getElemenyById('newEventForm').reset();



}
    








