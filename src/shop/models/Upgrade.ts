export class Upgrade {
    // private name: string;
    // private price: number;
    private isOwnedByPlayer: boolean = false;

    private applyEffectOnClickBase() {
        if (!this.isOwnedByPlayer) {
            return;
        }
    }

    protected applyEffect() {

    }
}