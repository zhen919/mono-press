import { format } from 'date-fns';

export default function timeFormatter(time: string, formatString = "yyyy-MM-dd"): string {
    if (!time) return '';

    const date = new Date(time);

    if (isNaN((date).getTime())) {
        return '';
    }

    return format(date, formatString);
}
