// function addingEventListener() {
// }


// document.querySelector('#input').addEventListener('click', function addingEventListener(){
//     alert('I was clicked!');
// });

// function alertMe(){
//     return alert('I was clicked!');
// }

function addingEventListener(){
    document.querySelector('#input').addEventListener('click', addingEventListener);
    return alert('I was clicked!');
}
// document.querySelector('#input').addEventListener('click', addingEventListener);


