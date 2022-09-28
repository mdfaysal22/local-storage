const keyField = document.getElementById('key');
const valueField = document.getElementById('value');
document.getElementById('submit').addEventListener('click', function(){
    const keyName = keyField.value;
    const value = valueField.value;
    
    localStorage.setItem(keyName, value);
});

document.getElementById('remove').addEventListener('click', function(){
   localStorage.removeItem(keyField.value);
});

document.getElementById('clear').addEventListener('click', function(){
    localStorage.clear();
})