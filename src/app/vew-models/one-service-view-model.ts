export class OneServiceViewModel {
    title?: string;
    summaries?: string[];
    picName?: string | null;
    link?: string;
    details?: {
        [name: string]: {
            price: number,
            schedule: string,
            hint?: string
        }
    };
}