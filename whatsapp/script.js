let body = document.getElementById('page-wrap');
let chatBox = document.getElementById('chat-box');
let form = document.getElementById('input-container');
let closeHeaderOverlay = document.getElementById('close-header-overlay');
let chatInput = document.getElementById('chat-input');
let toggleSender = document.getElementById('toggle-sender');
let currentTime= new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

let headerOverlay = document.querySelector('#header-overlay');


form.addEventListener('submit', function(e){
    
    e.preventDefault();
    
    let inputValue = chatInput.value;
    
    let div = document.createElement('div');
    let chatBubble = document.createElement('div');
    let bubble = document.createElement('div');
    let time = document.createElement('p');
    let icon = document.createElement('i');
    let check = document.createElement('i');
    
    icon.classList.add('bx', 'bxs-chevron-down');
    check.classList.add('bx', 'bx-check-double');

    time.textContent = currentTime;
    time.classList.add('time-span');
    
    if(toggleSender.checked == false){
        
        div.classList.add('receiver');
        chatBubble.classList.add('chat-bubble');
        bubble.classList.add('bubble');
        bubble.innerText = inputValue;
        bubble.appendChild(time);
        chatBubble.appendChild(bubble);
        div.appendChild(chatBubble);
        chatBox.appendChild(div);
        chatInput.value = " ";
        
        
        bubble.onclick = function(){
            headerOverlay.classList.add('active');
            bubble.classList.add('active');
            
            let deleteItem = document.querySelector('.bxs-trash-alt');
            
            deleteItem.onclick = function(){
                div.remove();
            }
        }
        
        
        window.onclick = function(e){
            if(e.target.id == 'chat-box' || e.target.id == 'input-container' || e.target.id == 'chat-input' ){
                headerOverlay.classList.remove('active');
                bubble.classList.remove('active');
            }
        }
        
        
        
        
        

           

                   
            
        
        
       
        
       }else{
                div.classList.add('sender');
                chatBubble.classList.add('chat-bubble');
                bubble.classList.add('bubble');
                bubble.innerText = inputValue;
                bubble.appendChild(check);
                bubble.appendChild(time);
                chatBubble.appendChild(bubble);
                div.appendChild(chatBubble);
                chatBox.appendChild(div);
                chatInput.value = "";
           
           bubble.onclick = function(){
            headerOverlay.classList.add('active');
            bubble.classList.add('active');
            
            let deleteItem = document.querySelector('.bxs-trash-alt');
            
            deleteItem.onclick = function(){
                div.remove();
            }
        }
        
        
        window.onclick = function(e){
            if(e.target.id == 'chat-box' || e.target.id == 'input-container' || e.target.id == 'chat-input' ){
                headerOverlay.classList.remove('active');
                bubble.classList.remove('active');
            }
        }
       }
    
    
   headerOverlay.onclick = function(){
        if(headerOverlay.classList.contains('active')){
         headerOverlay.classList.remove('active');
            bubble.classList.remove('active');
    }
    }
   
    
})



