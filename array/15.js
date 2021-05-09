
let person = {
    firsName: 'Eldor',
    lastName: 'Ergashov',
    get fullName() {
        return this.firsName + ' ' + this.lastName;
    },

    set fullName(value) {
        if(typeof value !== 'string') 
            throw new Error('value not a string');
        let fullNameArray = value.split(' ');
        
        this.firsName = fullNameArray[0];
        this.lastName = fullNameArray[1];
    }
}
try {
    person.fullName = null ;//'Alisher Kadirov';
}
catch(error) {
    console.log(error);
}
console.log(person);