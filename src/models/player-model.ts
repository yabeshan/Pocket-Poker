
export class PlayerModel {
    
    id: string;
    name: string;
    balance: string;
    image: string;
      
    constructor(
        id: string,
        name: string,
        balance: string,
        image: string,
    ) {
        this.id = id;
        this.name = name;
        this.balance = balance;
        this.image = image;
    }

}