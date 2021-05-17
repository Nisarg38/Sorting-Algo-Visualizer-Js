const container = document.querySelector(".data");

function genRandBars (num = 20) {
    for(i = 0; i<num; i++){


        // Generate Random number 
        const value = Math.floor(Math.random()*100 +1);

        const bar = document.createElement("div");

        //Generate Bar 

        bar.classList.add("bar");

        bar.style.height = `${value * 3.5}px`;
  
        bar.style.transform = `translateX(${i * 5}px)`;



        //Generate label 

        const barLabel = document.createElement("label");
  
        // To add class "bar_id" to "label"
        barLabel.classList.add("bar_id");
      
        // Assign value to "label"
        barLabel.innerHTML = value;
          
        // Append "Label" to "div"
        bar.appendChild(barLabel);



        // append child bar to container

        container.appendChild(bar);

    }
}

genRandBars();

async function sort(delay = 300){

    let bars = document.querySelectorAll(".bar");

    for(var i =0 ; i < bars.length ; i++){

        let min_element = i; 

    }
}

function freeze(){
    document.getElementById("sort").disabled = true;

    document.getElementById("sort").style.backgroundColor = "#d8b6ff";
}

function generate(){
    window.location.reload();
}