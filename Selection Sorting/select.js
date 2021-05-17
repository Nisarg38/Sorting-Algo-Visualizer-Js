const container = document.querySelector(".data");

function genRandBars (num = 20) {
    for(i = 0; i<num; i++){


        // Generate Random number 
        const value = Math.floor(Math.random()*100 +1);

        const bar = document.createElement("div");

        //Generate Bar 

        bar.classList.add("bar");

        bar.style.height = `${value * 3.5}px`;
  
        bar.style.transform = `translateX(${i * 10}px)`;



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

        for(var j = i+1 ; j < bars.length ; j++){

            var right = parseInt(bars[j].childNodes[0].innerHTML);
  
           
            var left = parseInt(bars[min_element].childNodes[0].innerHTML);

           
            if (right < left) {
                if(min_element !== i){
                    bars[min_element].style.backgroundColor = "  rgb(24, 190, 255)";
                }
                min_element = j;
            } else{
                bars[min_element].style.backgroundColor = "  rgb(24, 190, 255)";
            }

        }

        //Swapping the numbers 
            var temp1 = bars[min_element].style.height;
            var temp2 = bars[min_element].childNodes[0].innerText;
            bars[min_element].style.height = bars[i].style.height;
            bars[i].style.height = temp1;
            bars[min_element].childNodes[0].innerText = bars[i].childNodes[0].innerText;
            bars[i].childNodes[0].innerText = temp2;
              
            // To pause the execution of code for 300 milliseconds
            await new Promise((resolve) =>
              setTimeout(() => {
                resolve();
              }, 200)
            );
          
            // Provide skyblue color to the (min-idx)th bar
            bars[min_element].style.backgroundColor = "  rgb(24, 190, 255)";
          
            // Provide lightgreen color to the ith bar
            bars[i].style.backgroundColor = " greenyellow";
          
        }
    }

function freeze(){
    document.getElementById("sort").disabled = true;

    document.getElementById("sort").style.backgroundColor = "#d8b6ff";
}

function generate(){
    window.location.reload();
}