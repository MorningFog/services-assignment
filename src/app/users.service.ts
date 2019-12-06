export class UsersService {

    activeUsers = ['Anna', 'Manu'];
    inactiveUsers = ['Max', 'Chris'];

    addToActive(index: number) {
        this.activeUsers.push(this.inactiveUsers[index]);
        this.inactiveUsers.splice(index, 1);
    }

    addToInactive(index: number) {
        this.inactiveUsers.push(this.activeUsers[index]);
        this.activeUsers.splice(index, 1);
    }
}
