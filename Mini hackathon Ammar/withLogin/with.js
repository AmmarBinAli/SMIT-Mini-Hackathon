let blogBtn = document.getElementById("blogbtn");
let title = document.getElementById("title");
let area = document.getElementById("area");
let bloggers = document.getElementById("bloggers")

 blogBtn.addEventListener ('click' , () => {
    bloggers.innerHTML+=` 
    <div class="card" style="width: 18rem;">
      <img src="i" class="card-img-top" alt="">
      <img src="../images/dmitry-chernyshov-mP7aPSUm7aE-unsplash.jpg" alt="#">
      <div class="card-body">
       <h2 style ="color : black;"> ${title.value}</h2>
        <p style="color: black;" class="card-text">${area.value}</p>
        

      </div>
    </div>`
    title.value = "";
    area.value = "";
 });
 
