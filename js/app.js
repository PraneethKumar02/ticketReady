//Script for Navigation Bar
const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});


//Script for Content Body
Array.from(document.getElementsByTagName("input")).forEach((e, i) => {
    e.addEventListener('keyup', (e1) => {
        if (e.value.length > 0) {
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform = "rotate(180deg)";
        } else {
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform = "rotate(0deg)";
        }
    })
})

//Script for FAQs
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");

        var pannel = this.nextElementSibling;

        if (pannel.style.display === "block") {
            pannel.style.display = "none";
        } else {
            pannel.style.display = "block";
        }
    });
}

//Script for API Integration
$(document).ready(function () {

    $('#search_trains').click(function () {
        let boarding_station = $('#boarding_station').val();
        let destination_station = $('#destination_station').val();

        $.ajax({
            url: "https://indianrailapi.com/api/v2/TrainBetweenStation/apikey/30c382602bfa67c8a7c580e6cfe2becb/From/" + boarding_station + "/To/" + destination_station,
            success: function (data) {
                //console.log(data);
                console.log(data.Trains);

                let blob;
                for (let i = 0; i < data.Trains.length; i++) {
                    blob = blob + `<tr><td>${data.Trains[i].TrainNo}</td><td>${data.Trains[i].TrainName}</td><td>${data.Trains[i].TravelTime}</td><td>${data.Trains[i].TrainType}</td></tr>`;
                }

                $('#display_trains').html(`
                <table class="table">
                    <tr>
                        <th>Train Number</th>
                        <th>Train Name</th>
                        <th>Duration</th>
                        <th>Train Type</th>
                    </tr>
                    ${blob}
                </table>
                `);
            },
            error: function (error) {
                alert("Some error");
                console.log(error);

            }
        })
    });

    $('#fetch_stations').click(function () {
        let trainNo = $('#train_no').val();

        $.ajax({
            url: "https://indianrailapi.com/api/v2/TrainSchedule/apikey/30c382602bfa67c8a7c580e6cfe2becb/TrainNumber/" + trainNo,
            success: function (data) {
                console.log(data);

                let textBlob;
                for (let i = 0; i < data.Route.length; i++) {
                    textBlob = textBlob + `<tr><td>${data.Route[i].StationName}</td><td>${data.Route[i].ArrivalTime}</td><td>${data.Route[i].DepartureTime}</td><td>${data.Route[i].Distance} kms</td></tr>`;
                }

                $('#display_stations').html(`
                <table class="table">
                    <tr>
                        <th>Station Name</th>
                        <th>Arrival Time</th>
                        <th>Departure Time</th>
                        <th>Distance Travelled</th>
                    </tr>
                    ${textBlob}
                </table>
                `);
            },
            error: function (error) {
                console.log(error);
                alert("Error occured");
            }
        })
    })

});
