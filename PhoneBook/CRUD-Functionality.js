// Task: CRUD Functionality
// Create a simple phone book application functionality using JavaScript objects. Your application should allow users to add new contacts, search for contacts by name, update existing contacts, and delete contacts.
// Implement the following functionalities:
// Add a new contact:  Allow users to add a new contact by providing their name, phone number, and email address.
// Search for a contact: Allow users to search for a contact by entering their name. If the contact is found, display their details (name, phone number, email). If not found, display a message indicating that the contact does not exist.
// Update a contact: Allow users to update the phone number and email address of an existing contact by providing their name and the updated information.
// Delete a contact: Allow users to delete a contact by entering their name.

function PhoneBook() {
    this.contacts = [];

    this.addContact = function(name, number, email) {
        this.contacts.push({name, number, email});
    };
    this.search = function(name){
        for(let i=0;i<this.contacts.length;i++){
            if(this.contacts[i].name == name){
                console.log(`Yes,It IS In Contact.`);
                return;
            }
        }
        console.log(`No,It IS Not In Contact.`);
    };
    this.Updatecontact = function(name, change){
        for(let i=0;i<this.contacts.length;i++){
            if(this.contacts[i].name == name){
                if (change.includes('@')){
                    this.contacts[i].email = change;
                }
                else{
                    this.contacts[i].number = change;
                }
                return;
            }
        }
        console.log(`No contact found with the name ${name}.`)
    };
    this.Deletecontact = function(name){
        for(let i=0;i<this.contacts.length;i++){
            if(this.contacts[i].name == name){
                delete this.contacts[i];
                console.log('Delete Successfully.')
                return;
            }
        }
        console.log(`No contact found to delete with the name ${name}.`)
    }
}
const a = new PhoneBook();
a.addContact('pratiksha', 23456789, 'prat@123gmail.com');
a.addContact('nik', 23456789, 'nik@12gmail.com');
// console.log(a.contacts);
// a.search('pratiksha');
a.Updatecontact('nik','krish@gmail.com')
// console.log(a.contacts);
// a.Deletecontact('nik')
// a.Deletecontact('pinku')
// console.log(a.contacts);


