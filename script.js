
// Chiediamo all'utente la sua email 
const userEmail = prompt('Scrivi qui la tua email per accedere')

// lista di email 
const listEmailUsers = ['manumaisano@gmail.com', 'booleansrl@gmail.com', 'mirkomaisano@gmail.com', 'elsavecchione@gmail.com', 'anonimoutente@gmail.com'];

let emailFound = false; 
for (let i = 0; i < listEmailUsers.length; i++) { 
    const login = listEmailUsers[i]

    if (userEmail === login) { 

        emailFound = true; 
    }
};

if (emailFound === true) { 
    alert('La mail è presente puoi accedere')
} else {
    alert('Mi dispiace, non puoi accedere') 
};