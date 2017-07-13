console.log('HELLO WORLD')
for (let i = 0; i < customers.results.length; i++) {
console.log(customers.results[i].name.first)
  // document.querySelector('div').innerHTML = okok;
  let body = document.querySelector('body');
  let test = document.createElement('div');
console.log(test)
  let okok = `
  <article>
  <div class='all'>
  <div class="pic">
  <img src = ${customers.results[i].picture.medium} alt = "face">
  </div>
  <div class='info'>
  <p>${customers.results[i].name.first} ${customers.results[i].name.last}</p>
  <p>${customers.results[i].email}</p>
  <p>${customers.results[i].location.street}</p>
  <p>${customers.results[i].location.city} ${customers.results[i].location.state} ${customers.results[i].location.postcode}</p>
  <p>${customers.results[i].phone}</p>
  <p>${customers.results[i].id.value}</p>
  </div>
  </div>
  </article>
  `;
console.log(okok)
  test.innerHTML += okok;
  body.appendChild(test)
}
