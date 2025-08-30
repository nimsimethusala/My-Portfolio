export const themeColors: Record<
    'blue' | 'purple' | 'green' | 'orange' | 'pink',
    {
        primary: string
        secondary: string
        accent: string
        background: string
        text: string
    }
> = {
    blue: {
        primary: '#001A6E',
        secondary: '#5409DA',
        accent: '#6439FF',
        background: '#000B58',
        text: '#A7E6FF',
    },
    purple: {
        primary: '#582d6b',
        secondary: '#7A1CAC',
        accent: '#AD49E1',
        background: '#2E073F',
        text: '#EBD3F8',
    },
    green: {
        primary: '#48ac48',
        secondary: '#06D001',
        accent: '#9BEC00',
        background: '#002303',
        text: '#a8efaf',
    },
    orange: {
        primary: '#f03c3c',
        secondary: '#FF8A08',
        accent: '#FF6500',
        background: 'rgba(66,2,2,0.99)',
        text: 'rgba(244,137,137,0.99)',
    },
    pink: {
        primary: '#F31559',
        secondary: '#f54278',
        accent: '#fa5788',
        background: '#2c010e',
        text: '#f1a4bb',
    },
}

export type ThemeColor = keyof typeof themeColors
