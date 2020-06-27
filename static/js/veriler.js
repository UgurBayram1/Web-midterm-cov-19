var el = document.querySelector(".datas");
var el1 = document.querySelector(".datas1");
var tables = document.querySelector(".tables");
fetch("https://covid-193.p.rapidapi.com/statistics?country=Turkey", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
		"x-rapidapi-key": "64c3ae7efdmsh8665bbe13f34791p15c4d6jsnaf6*****"
	}
})
.then(response => response.json()) // Getting the actual response data
    .then(data => {         
       turkey(data.response);
    })
    .catch(err => {
        console.log(err);
    }); 
fetch("https://covid-193.p.rapidapi.com/statistics?country=Europe", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
		"x-rapidapi-key": "64c3ae7efdmsh8665bbe13f34791p15c4d6jsnaf6*****"
	}
})
.then(response => response.json()) // Getting the actual response data
    .then(data => {         
        Europe(data.response);
    })
    .catch(err => {
        console.log(err);
    }); 
const turkey = (data) => {
    var html = `
    <ul class="ul-cover" style="list-style-type : none">
        <li>Toplam Ölüm Saysısı: <strong>${data[0].deaths.total}</strong></li>
        <li>Entübe Hasta Saysısı : <strong>${data[0].cases.critical}</strong></li>
        <li>Toplam Hasta Sayısı : <strong>${data[0].cases.total}</strong></li>
        <li>Toplam İyilesen hasta Sayısı : <strong>${data[0].cases.recovered} </strong></li>
    </ul>   
    `;
    el.innerHTML = html;
}
const Europe = (data) => {
    var html = `
    <ul class="ul-cover" style="list-style-type : none">
        <li>Toplam Ölüm Saysısı: <strong> ${data[0].deaths.total}</strong></li>
        <li>Entübe Hasta Saysısı : <strong> ${data[0].cases.critical}</strong></li>
        <li>Toplam Hasta Sayısı : <strong> ${data[0].cases.total}</strong></li>
        <li>Toplam İyilesen hasta Sayısı  : <strong> ${data[0].cases.recovered} </strong></li>
    </ul>    
    `;
    el1.innerHTML=html;
}
main();
async function getData(url,obj) {
    const response = await fetch(url,obj);
    return response.json()
}

async function main() {
    const data = await getData("https://covid-193.p.rapidapi.com/history?country=Turkey",{
         	"method": "GET",
         	"headers": {
         		"x-rapidapi-host": "covid-193.p.rapidapi.com",
         		"x-rapidapi-key": "64c3ae7efdmsh8665bbe13f34791p15c4d6jsnaf6*****"
        	}
         });
         const asia = await getData("https://covid-193.p.rapidapi.com/statistics?country=Asia",{
         	"method": "GET",
         	"headers": {
         		"x-rapidapi-host": "covid-193.p.rapidapi.com",
         		"x-rapidapi-key": "64c3ae7efdmsh8665bbe13f34791p15c4d6jsnaf6*****"
        	}
         });
         const oceania = await getData("https://covid-193.p.rapidapi.com/statistics?country=Oceania",{
         	"method": "GET",
         	"headers": {
         		"x-rapidapi-host": "covid-193.p.rapidapi.com",
         		"x-rapidapi-key": "64c3ae7efdmsh8665bbe13f34791p15c4d6jsnaf6*****"
        	}
         });
         const europe = await getData("https://covid-193.p.rapidapi.com/statistics?country=Europe",{
         	"method": "GET",
         	"headers": {
         		"x-rapidapi-host": "covid-193.p.rapidapi.com",
         		"x-rapidapi-key": "64c3ae7efdmsh8665bbe13f34791p15c4d6jsnaf6*****"
        	}
         });
         const america = await getData("https://covid-193.p.rapidapi.com/statistics?country=North-America",{
         	"method": "GET",
         	"headers": {
         		"x-rapidapi-host": "covid-193.p.rapidapi.com",
         		"x-rapidapi-key": "64c3ae7efdmsh8665bbe13f34791p15c4d6jsnaf6*****"
        	}
         });
         const africa = await getData("https://covid-193.p.rapidapi.com/statistics?country=Africa",{
         	"method": "GET",
         	"headers": {
         		"x-rapidapi-host": "covid-193.p.rapidapi.com",
         		"x-rapidapi-key": "64c3ae7efdmsh8665bbe13f34791p15c4d6jsnaf6*****"
        	}
         });
         const sam = await getData("https://covid-193.p.rapidapi.com/statistics?country=South-America",{
         	"method": "GET",
         	"headers": {
         		"x-rapidapi-host": "covid-193.p.rapidapi.com",
         		"x-rapidapi-key": "64c3ae7efdmsh8665bbe13f34791p15c4d6jsnaf6*****"
        	}
         });
         const usaData = await getData("https://covid-193.p.rapidapi.com/statistics?country=USA",{
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "64c3ae7efdmsh8665bbe13f34791p15c4d6jsnaf6*****"
           }
        });
        const tr = await getData("https://covid-193.p.rapidapi.com/statistics?country=Turkey",{
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "64c3ae7efdmsh8665bbe13f34791p15c4d6jsnaf6*****"
           }
        });
        const ut = await getData("https://covid-193.p.rapidapi.com/statistics?country=Italy",{
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "64c3ae7efdmsh8665bbe13f34791p15c4d6jsnaf6*****"
           }
        });

        var html = `
        <table class="table" id="asd" align="center">
        <thead class="thead-light">
          <tr>        
            <th scope="col">Ülke</th>
            <th scope="col">Toplam Hasta</th>
            <th scope="col">Toplam Ölüm</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${usaData.parameters.country}</td>
            <td>${usaData.response[0].cases.total}</td>
            <td>${usaData.response[0].deaths.total}</td>
          </tr>
          <tr>
          <td>${tr.parameters.country}</td>
          <td>${tr.response[0].cases.total}</td>
          <td>${tr.response[0].deaths.total}</td>
          </tr>
          <tr>
          <td>${ut.parameters.country}</td>
          <td>${ut.response[0].cases.total}</td>
          <td>${ut.response[0].deaths.total}</td>
          </tr>
        </tbody>
      </table>   
    `;
    tables.innerHTML=html;

         new Chart(document.getElementById("myChart2"), {
            type: 'doughnut',
            data: {
               labels:  ["Asya","Afrika","Avrupa","Kuzey Amerika","Avusturalya","Güney Amerika"],
                datasets: [{
                    data: [asia.response[0].deaths.total,africa.response[0].deaths.total,europe.response[0].deaths.total,america.response[0].deaths.total,oceania.response[0].deaths.total,sam.response[0].deaths.total],
                    backgroundColor: [
                        "#9b4c96",
                        "#c9d164",
                        "#58b2bc",
                        "#FE6775",
                        "gray",
                        "#50658E"
                      ],
                    label: "kıtalar",
                    borderColor: "#3e95cd",
                }]
            },
            options: {
                responsive: true,
                aspectRatio:2,
                title: {
                    display: true,
                    text: 'Kıtalara göre Ölüm sayıları',
                    fontSize : 25
                },
                legend: {
                    display: false
                }
                
            }
        });


         new Chart(document.getElementById("myChart"), {
                    type: 'line',
                    data: {
                        labels:  Object.entries(data.response).slice(0).reverse().map( (item) => item[1].time.toString().slice(0,16)),
                        datasets: [{
                            data: Object.entries(data.response).slice(0).reverse().map( (item) => item[1].cases.total),
                            label: "Türkiye",
                            borderColor: "#3e95cd",
                            fill: false
                        }]
                    },
                    options: {   
                        responsive: true,
                        maintainAspectRatio: false,
                        title: {
                            display: true,
                            text: 'Ülkemizde Toplam Hasta Saysısı Grafiği',
                        } 
                    }
  
                });
}


new Chart(document.getElementById("yas"), {
    type: 'doughnut',
    data: {
       labels:  ["0-9","10-39","40-49","50-59","60-69","70-79","80+"],
        datasets: [{
            data: [0.1,0.3,0.5,2,3,8.5,13.6],
            backgroundColor: [
                "red",
                "blue",
                "green",
                "yellow",
                "pink",
                "gray",
                "#cc4574"
              ],
            label: "yaslar",
            borderColor: "#3e95cd",
        }]
    },
    options: {
        responsive: true,
        aspectRatio:2,
        title: {
            display: true,
            text: 'yaşlara Kıyasla Ölüm Oranı Grafiği',
            fontSize : 25
        },
        legend: {
            display: false
        }
        
    }
});

