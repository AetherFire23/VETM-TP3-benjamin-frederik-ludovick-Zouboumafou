class EventPublisher<T> {
    private events: ((state: T) => void)[] = [];
    private state: T;

    constructor(initial: T) {
        this.state = initial;
    }

    attach(fn: (state: T) => void) {
        this.events.push(fn);
    }

    notify(): void {
        for (let event of this.events) {
            event(this.state);
        }
    }
}
