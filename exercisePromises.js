// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise = new Promise((resolve, reject)=>{
	setTimeout(resolve,4000,'success')
});

// #2) Run the above promise and make it console.log "success"
promise.then(values=>{console.log(values)});

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
var promise1 = Promise.resolve('success')
promise1.then(function(value){
	console.log(value);
})

//answer
const promise = Promise.resolve(
  setTimeout(() => {
    console.log("success");
  }, 4000)
);

// #4) Catch this error and console log 'Ooops something went wrong'
var promise2 = Promise.reject('failed')
promise2.then(resp=> {
	console.log(resp);
}).catch(console.log('Ooops something went wrong'));

//answer
Promise.reject('failed')
  .catch(console.log('Ooops something went wrong'))

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url => {
	return fetch(url).then(resp => resp.json());
})).then(results =>{
	console.log(results[0]);
	console.log(results[1]);
	console.log(results[2]);
	console.log(results[3]);
}).catch(() => console.log('error!'));

//answer
Promise.all(urls.map(url =>
    fetch(url).then(people => people.json())
))
  .then(array => {
    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
  })
  .catch(err => console.log('ughhhh fix it!', err));

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?