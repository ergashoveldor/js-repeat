
let person = {
    firsName: 'Eldor',
    lastName: 'Ergashov',
    get fullName() {
        return this.firsName + ' ' + this.lastName;
    },

    set fullName(value) {
        let fullNameArray = value.split(' ');
        this.firsName = fullNameArray[0];
        this.lastName = fullNameArray[1];
    }
}
person.fullName = 'Alisher Kadirov';
console.log(person);