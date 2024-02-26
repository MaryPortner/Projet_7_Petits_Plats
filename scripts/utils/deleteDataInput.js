export function deleteDataInput(){
    const crossToDelete = document.querySelectorAll('.deleteData');
    const inputData = document.querySelectorAll('.filterInput');

    for (let el of inputData){
        el.addEventListener('input', deleteData);
    }
  

    function deleteData(){

        for(let el of crossToDelete){
            el.addEventListener('click', (e) =>{
                inputData.value = "";
            })
            
            
         
        }


        
    }
    
}
