console.log('HELLO WORLD')
for (let i = 0; i < customers.results.length; i++) {
  console.log(customers.results[i].name.first)
  // document.querySelector('div').innerHTML = okok;
  let body = document.querySelector('body');
  let test = document.createElement('div');
  console.log(test)
  let okok = `

  <div class='all'>
  <div class="pic">
  <img src = ${customers.results[i].picture.large} alt = "face">
  </div>
  <div class='info'>
  <h3>${customers.results[i].name.first} ${customers.results[i].name.last}</h3>
  <p class='invis'>${customers.results[i].email}</p>
  <p class ='greytext'>${customers.results[i].location.street}</p>
  <p class='greytext'>${customers.results[i].location.city} ${customers.results[i].location.state} ${customers.results[i].location.postcode}</p>
  <p class='greytext'>${customers.results[i].phone}</p>
  <p class='ssn'>${customers.results[i].id.value}</p>
  </div>
  </div>
  
  `;
  console.log(okok)
  test.innerHTML += okok;
  body.appendChild(test)
}
