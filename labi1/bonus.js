var name = 'admin', text;

text = (name == 'admin') ? 'Hi' :
       (name == 'manager') ? 'Hello' :
       (name == '') ? 'No login' : '';

console.log(text);