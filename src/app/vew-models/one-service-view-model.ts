export interface OneServiceViewModel {
    title?: string;
    summaries?: string[];
    picName?: string | null;
    link?: string;
    shortSummary?: string
    details?: {
        [name: string]: {
            price: number,
            schedule: string,
            hint?: string
        }
    };
}