export class LoadingScreen {
    Loading: boolean;
    LoadingText: string;

    constructor(init?: Partial<LoadingScreen>) {
        Object.assign(this, init)

    }
}