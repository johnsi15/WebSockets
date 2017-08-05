var socket = io.connect('http://localhost:8080', { 'forceNew': true });

socket.on('messages', function(data) {  
  console.log(data);
  // render(data);
})

// function render (data) {  
//   var html = data.map(function(elem, index) {
//     return(`<div>
//               <strong>${elem.author}</strong>:
//               <em>${elem.text}</em>
//             </div>`);
//   }).join(" ");

//   document.getElementById('messages').innerHTML = html;
// }

// function addMessage(e) {  
//   var message = {
//     author: document.getElementById('username').value,
//     text: document.getElementById('texto').value
//   };

//   socket.emit('new-message', message);
//   return false;
// }


$(document).ready(function() {  
  $.ajax({
    url: 'http://localhost/siteLaopinion/api/views/listanotas/?display_id=services_1',
    type: 'GET', 
    dataType: 'jsonp',
    success: function render(data) {
      console.log(data);
      var html = data.map(function(elem, index) {
        return(`<div>
                  <strong>${elem.node_title}</strong>:
                  <em>${elem.body}</em>
                </div>`);
      }).join(" ");

      document.getElementById('messages').innerHTML = html;
      // socket.emit('new-message', data);   
    },
    error: function () {
      console.log("error");
    }
  });
});

// const myHeaders = new Headers();

// myHeaders.append('Access-Control-Allow-Origin', '*');
// myHeaders.append('Access-Control-Allow-Credentials', 'true');
// myHeaders.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

// fetch('http://localhost/siteLaopinion/api/views/listanotas/?display_id=services_1', {
//   headers: myHeaders
// }).then(function (data){
//     console.log('Esto es la data ', data);
//   })