/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/


function showPage(list, page){
   let itemsPerPage = 9;
   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = page * itemsPerPage;
   
   const listStudents = document.querySelector('.student-list');
   listStudents.innerHTML = '';

   for(let i = 0; i < list.length; i++){
      //9 & 18
      if(i >= startIndex && i < endIndex){
        let html = `<li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
               <h3>${list[i].name.first} ${list[i].name.last}</h3>
               <span class="email">${list[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">${list[i].registered.date}</span>
            </div>
         </li>`
         listStudents.insertAdjacentHTML('beforeend', html);
      }
   }
}

// showPage(data, 2);
// console.log(data);




/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list){
   console.log(list);
   //1. creating a var to hold # of pgs needed
   //math.ceil method rounds up ex. 0.95 => 1
   let numOfPages = Math.ceil(list.length / 9)
   console.log(numOfPages, 'pagbutton');
   //2. created var to grab UL elm by its class name
   const linkList = document.querySelector('.link-list');
   //assigning it to empty str
   linkList.innerHTML = '';
   
   //iterating through numOfpages 
   for(let i = 1; i <= numOfPages; i++){
      console.log(numOfPages, 'secnumofpages');
      let button = `<li> <button type="button" class="${i === 1 ? "active" : ''}">${i}</button> </li>`
      linkList.insertAdjacentHTML('beforeend', button);
      console.log(button, 'button');
   
     
      console.log(button);
      linkList.addEventListener('click', (e) => {
      let activeButton = linkList.querySelector('button.active');
      if(e.target.tagName === "BUTTON"){
         activeButton.classList.remove('active'); 
         e.target.classList.add('active')
          showPage(list, e.target.textContent);
          console.log(e.target.textContent, "textcontent");
      }
   })
   
   }
}


// Call functions

showPage(data, 1);
addPagination(data);