var dinnerApp = {
    protBtn: document.getElementById('protBtn'),
    carbBtn: document.getElementById('carbBtn'),
    vegeBtn: document.getElementById('vegeBtn'),
    randomBtn: document.getElementById('randomize'),
    protInput: document.getElementById('protInput'),
    carbInput: document.getElementById('carbInput'),
    vegeInput: document.getElementById('vegeInput'),
    protList: document.getElementById('protList'),
    carbList: document.getElementById('carbList'),
    vegeList: document.getElementById('vegeList'),
    init: function() {
        dinnerApp.protBtn.addEventListener('click', dinnerApp.addItemProt);
        dinnerApp.carbBtn.addEventListener('click', dinnerApp.addItemCarb);
        dinnerApp.vegeBtn.addEventListener('click', dinnerApp.addItemVege);
        dinnerApp.randomBtn.addEventListener('click', dinnerApp.randomize);
        dinnerApp.protInput.addEventListener('keypress', dinnerApp.keyPressProt);
        dinnerApp.carbInput.addEventListener('keypress', dinnerApp.keyPressCarb);
        dinnerApp.vegeInput.addEventListener('keypress', dinnerApp.keyPressVege);
    },
    addItemProt: function() {
        if (dinnerApp.protInput.value != "") {
            const item = document.createElement('li');
            item.innerHTML = dinnerApp.protInput.value;
            dinnerApp.remove(item);
            dinnerApp.protList.appendChild(item);
            dinnerApp.protInput.value = "";
        }
    }, 
    addItemCarb: function() {
        if (dinnerApp.carbInput.value != "") {
            const item = document.createElement('li');
            item.innerHTML = dinnerApp.carbInput.value;
            dinnerApp.remove(item);
            dinnerApp.carbList.appendChild(item);
            dinnerApp.carbInput.value = "";
        }
    }, 
    addItemVege: function() {
        if (dinnerApp.vegeInput.value != "") {
            const item = document.createElement('li');
            item.innerHTML = dinnerApp.vegeInput.value;
            dinnerApp.remove(item);
            dinnerApp.vegeList.appendChild(item);
            dinnerApp.vegeInput.value = "";
        }
    },
    remove: function(item) {
        const remove = document.createElement('button');
        remove.innerHTML = 'Remove';
        remove.classList.add('remove');
        remove.onclick = function() {this.parentNode.remove()};
        item.appendChild(remove); 
    },
    keyPressProt: function(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            dinnerApp.protBtn.click();
        }
    },
    keyPressCarb: function(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            dinnerApp.carbBtn.click();
        }
    },
    keyPressVege: function(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            dinnerApp.vegeBtn.click();
        }
    },
    randomize: function() {
        let li = document.getElementById('protList').children;
        for ( i in li)
        console.log(li.innerHTML);  
    }
}
window.onload = dinnerApp.init;