const cityname = document.getElementById('cityname');
const city_name = document.getElementById('city_name');

const submitBtn = document.getElementById('submitBtn');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.mid_layer');

const getInfo = async(e) =>{
    e.preventDefault();
   
    let cityval = cityname.value;
    if(cityval === ""){
        city_name.innerText = 'Plz write the name before search';
        datahide.classList.add('data_hide');
    }else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=cd9561adc2679d6f0c681a698d6fbf2f`
            const res = await fetch(url);
            const data = await res.json();
            const arrdata = [data];
            console.log(data);
            city_name.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
            temp_real_val.innerText = arrdata[0].main.temp;
            // temp_status.innerText = arrdata[0].weather[0].main;

            const temp_Mood =  arrdata[0].weather[0].main;

            if(temp_Mood == "Clear"){
                temp_status.innerHTML =  "<i class='fa fa-sun' style ='color:#eccc68;'></i>";
            }else if( temp_Mood == "Clouds"){
                temp_status.innerHTML =  "<i class='fa fa-cloud' style ='color:#f1f2f6;'></i>";
            }else if(temp_Mood == "Rain"){
                temp_status.innerHTML = "<i class='fa fa-cloud-rain' style ='color:#a4b0be;'></i>";
            }else{
                temp_status.innerHTML = "<i class='fa fa-sun' style ='color:#eccc68;'></i>";
            }
            datahide.classList.remove('data_hide');

        }catch{
            city_name.innerText = 'Plz Enter the city name prooperly';
            datahide.classList.add('data_hide');
        }
    }
}


submitBtn.addEventListener('click',getInfo);