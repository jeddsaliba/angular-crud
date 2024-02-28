export interface LimitOptionsModel {
    label: string,
    value: number
}

export const limitOptions: LimitOptionsModel[] = [
    {
        label: '10',
        value: 10,
    },
    {
        label: '25',
        value: 25,
    },
    {
        label: '50',
        value: 50,
    },
    {
        label: '100',
        value: 100,
    }
];
