export interface StreakObject {
    streakName: string;
    streakMultiplier: number;
}

export function StreakCalculator(cps: number): StreakObject | null{
    if (cps > 10.5) {
        return {
            streakName: "Insane Streak",
            streakMultiplier: 1.1,
        };
    }

    if (cps > 10) {
        return {
            streakName: "Super Streak",
            streakMultiplier: 1.2,
        };
    }

    if (cps > 9) {
        return {
            streakName: "Basic Streak",
            streakMultiplier: 1.3,
        };
    }

    return null;
}