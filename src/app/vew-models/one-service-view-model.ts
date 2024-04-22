export class OneServiceViewModel {
    title?: string;
    summaries?: string[];
    picName?: string | null;
    details?: {
        [name: string]: {
            price: number,
            schedule: string,
            hint?: string
        }
    };
}