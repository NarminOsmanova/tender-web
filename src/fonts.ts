import localFont from 'next/font/local'

export const barlow = localFont({
    src: [
        {
            path: './assets/fonts/Barlow-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: './assets/fonts/Barlow-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: './assets/fonts/Barlow-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
});

export const poppins = localFont({
    src: [
        {
            path: './assets/fonts/Poppins-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: './assets/fonts/Poppins-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: './assets/fonts/Poppins-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
});