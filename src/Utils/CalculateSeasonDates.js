import { format } from 'date-fns';

export function CalculateSeasonDates(year) {
    const springStart = new Date(year, 2, 1);
    const springEnd = new Date(year, 4, 31);
    const summerStart = new Date(year, 5, 1);
    const summerEnd = new Date(year, 7, 31);
    const autumnStart = new Date(year, 8, 1);
    const autumnEnd = new Date(year, 10, 30);
    const winterStart = new Date(year, 11, 1);
    const winterEnd = new Date(year + 1, 1, 29);

    const formatDate = (date) => format(date, "yyyy-MM-dd")

    return {
        spring: { start: formatDate(springStart), end: formatDate(springEnd) },
        summer: { start: formatDate(summerStart), end: formatDate(summerEnd) },
        autumn: { start: formatDate(autumnStart), end: formatDate(autumnEnd) },
        winter: { start: formatDate(winterStart), end: formatDate(winterEnd) }
    }
}