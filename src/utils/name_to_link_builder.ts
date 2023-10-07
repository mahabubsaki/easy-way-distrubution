export default function LinkBuilder(name: string) {
    return name.split('-').map((each, i) => {
        return each[0].toUpperCase() + each.slice(1, each.length);
    }).join(' ');
}