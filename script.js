let input_value = document.querySelector('.input_value');
let btn = document.querySelector('.btn');
let my_row = document.querySelector('.my_row');
let btn_save = document.querySelector('.btn_save');

let massive = [];


btn.addEventListener('click', (event) => {
    event.preventDefault();
    
    massive.push({
        
        text:input_value.value,
    })
    
    my_row.textContent = " "
    input_value.value = " "
    ekranga_chiqarish()
})

function ekranga_chiqarish(){
    let i = 0;

    massive.forEach((tex) => {
        let card = document.createElement('div');
        let btn_edit = document.createElement('button');
        let btn_delet = document.createElement('button');
        let title = document.createElement('h4');

        
        btn_edit.classList.add('btn', 'btn-warning');
        btn_delet.classList.add('btn', 'btn-danger');
        card.classList.add('col-4');


        title.innerText = tex.text;
        btn_edit.innerText = 'edit';
        btn_edit.type = "button"
        btn_delet.innerText = 'delete';
        btn_edit.setAttribute('onclick',"indexni_olish("+i+")");
        
        card.appendChild(title);
        card.appendChild(btn_edit);
        card.appendChild(btn_delet);

        my_row.appendChild(card);
        i++;

        btn_delet.addEventListener('click', (e) => {
            e.preventDefault();
      })
      
    });
};    
let global_index;

btn_save.addEventListener('click', (e) => {
    e.preventDefault();

    massive[global_index].text = input_value.value; 
    
    my_row.textContent = " "
    input_value.value = " "
    ekranga_chiqarish()
})

function indexni_olish(indeks){
    global_index = indeks;
    console.log(indeks);
    input_value.value = massive[indeks].text;
}





