export const slugify = (string: string): string => {
    return string
        .toString()
        .normalize('NFKD')
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\_/g, '-')
        .replace(/\-\-+/g, '-')
        .replace(/\-$/g, '')
}

export const unslugify = (slug: string, capitalize?: 'first' | 'all') => {
    let string = slug.replace(/-/g, ' ');
    if (capitalize === 'all') {
        string = string.replace(/-/g, '-');
    } else if (capitalize === 'first') {
        string = string.replace(/^./, (char) => char.toUpperCase());
    }
    return string;
}