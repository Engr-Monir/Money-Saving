

const inputs = document.querySelectorAll('.field');

for (const input of inputs) {
  input.setAttribute('required', '');
}

// utilits funcation

function getInputfildValueById(calculation){
    const inputfild=document.getElementById(calculation);
    const inputfildString=inputfild.value ;
    
    const inputfildValue=parseFloat(inputfildString);

    // inputfild.value= ' ';
   
    return inputfildValue;
}
function setTextElementById(elementId,newValue){
    const textElement=document.getElementById(elementId);
    textElement.innerText=newValue;

}


// get input value from filde

document.getElementById('culculate').addEventListener('click',function(){
    const TotalIncome=getInputfildValueById('total-income');
    const foodsCost=getInputfildValueById('foods-id');

    const clothesCost=getInputfildValueById('clothesId');

    const rentCost=getInputfildValueById('rent-id');

    let TotalExpance=rentCost+clothesCost+foodsCost;
    let Blance= TotalIncome-TotalExpance;
    setTextElementById('Total-Expense', TotalExpance);
    setTextElementById('blance', Blance );
});



document.getElementById('save-id').addEventListener('click',function(){
    const Save=getInputfildValueById('save');

    const TotalIncome=getInputfildValueById('total-income');
    const foodsCost=getInputfildValueById('foods-id');

    const clothesCost=getInputfildValueById('clothesId');

    const rentCost=getInputfildValueById('rent-id');

    let TotalExpance=rentCost+clothesCost+foodsCost;
    let Blance= TotalIncome-TotalExpance;
    let discount=Save/Blance;
    let remeanigBlance= Blance-discount;
    
    setTextElementById('Total-Expense', TotalExpance);
    setTextElementById('blance', Blance );
    setTextElementById('SaveingId', discount);
    setTextElementById('remeaning',remeanigBlance );
    });


    document.getElementById('reset-id').addEventListener('click',function(){

        const totalincome=document.getElementById('total-income');
        totalincome.value= ' ';

        const foodsid=document.getElementById('foods-id');
        foodsid.value= ' ';

        const inputfildclothesId=document.getElementById('clothesId');
        inputfildclothesId.value= ' ';

        const inputfildRent=document.getElementById('rent-id');
        inputfildRent.value= ' ';

        const  RExpense =document.getElementById('Total-Expense');
        RExpense.value= ' ';

        const TotalBlance=document.getElementById('blance');
        TotalBlance.value= ' ';

        const saveid=document.getElementById('save-id');
        saveid.value= ' ';
    


        const SaveingId=document.getElementById('SaveingId');
        SaveingId.innerText= ' ';

        const remeaningId=document.getElementById('remeaning');
        remeaningId.innerText= ' ';
        
    });