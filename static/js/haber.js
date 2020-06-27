var el = document.querySelector(".datas");
var el1 = document.querySelector(".datas1");
console.log(el);
fetch("https://covid-193.p.rapidapi.com/statistics?country=Turkey", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
		"x-rapidapi-key": "64c3ae7*******"
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
		"x-rapidapi-key": "64c3ae************"
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
};
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
};