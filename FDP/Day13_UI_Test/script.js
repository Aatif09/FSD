// // function makeObj(input) {
// //     const aj = {};
// //     for (let i = 0; i < input.length; i++) {
// //       const [key, value] = input[i];
// //       aj[key] = value;
// //     }
// //     return aj;
// //   }
// //   const final_array = [
// //     ['name', 'Lik'],
// //     ['city', 'DELHI'],
// //     ['CPI', '9.0']
// //   ];
// //   const result = makeObj(final_array);
// //   console.log(result);

// function totalPriceOfGoodProducsts(){
//     console.log("inside");
//        let data=fetch("https://dummyjson.com/products");
//        data.then(res=>{  
//        res.json().then(res=>{
//           console.log(res);

//          for(let i=0;i<res.length;i++){
//           document.getElementById('div1').innerHTML=res.products[i];
//           var sum=0;
//           if products[i].rating>=4.0{
//             sum=sum+products[i].rating;
//           }
//       return sum
//        }
//       });
//    })

//    }

// script.js

document.addEventListener('DOMContentLoaded', (event) => {
   const startBtn = document.getElementById('startBtn');
   const modal = document.getElementById('myModal');
   const modall = document.getElementById('modall');
   const closeBtn = document.querySelector('.close');
   const doneBtn = document.getElementById('doneBtn');
   const numberInput = document.getElementById('numberInput');
   const light = document.getElementById('lightBulbContainer');

   startBtn.addEventListener('click', () => {
      modal.style.display = 'block';
      modall.style.display = 'none';
      light.style.display = 'none';
   });

   closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';

   });

   window.addEventListener('click', (event) => {
      if (event.target === modal) {
         modal.style.display = 'none';
         light.style.display = 'block';
      }
   });

   doneBtn.addEventListener('click', () => {
      const numberValue = numberInput.value;
      const parent = document.getElementsByClassName("modal-content");
      if (numberValue) {
         alert(`You entered: ${numberValue}`);
         light.style.display = 'block';

         for (let i=0;i<=numberValue;i++){
            const image = document.createElement("img");
            image.setAttribute("src", "https://pics.clipartpng.com/midle/Yellow_Light_Bulb_PNG_Clip_Art-2108.png" );
            image.setAttribute("class", "card-img");
            parent.appendChild(image);
         }
        
      } else {
         alert('Please enter a number.');
      }
   });
});
