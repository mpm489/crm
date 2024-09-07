export class User {
    firstName: string;
    lastName: string;
    email: string;
    birthDate: number;
    street: string;
    city: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email:'';
        this.birthDate = obj ? obj.birthDate : '0';
        this.street = obj ? obj.street : '';
        this.city = obj ? obj.city : '';
    }

}