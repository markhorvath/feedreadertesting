function AddressBook() {
    this.contacts = [];
    this.initialComplete = false;
};

AddressBook.prototype.addContact = function(contact) {
        this.contacts.push(contact);
};

AddressBook.prototype.getContact = function(i) {
        return this.contacts[i];
};

AddressBook.prototype.deleteContact = function(i) {
        this.contacts.splice(i, 1);
}

AddressBook.prototype.getInitialContacts = function(cb) {
        var self = this;

        setTimeout(function() {
            self.initialComplete = true;
            if (cb) {
                return cb();
            }
        }, 3);
}

