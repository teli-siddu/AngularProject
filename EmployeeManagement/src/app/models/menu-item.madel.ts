export class MenuItem {
    Id: number;
    Name: string;
    URL: string;
    ParentId: number
    Children: MenuItem[]

    constructor(menuItem?: Partial<MenuItem>) {
        Object.assign(this, menuItem);
    }
}