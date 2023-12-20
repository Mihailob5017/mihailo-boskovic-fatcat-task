import { IComponent } from './types';

export const dataOption1: IComponent[] = [
    {
        type: 'header',
        props: {
            color: 'royalblue',
            fontSize: '2rem',
        },
        components: [
            {
                value: 'Header',
                type: 'heading',
            },
            {
                value: 'Link 1',
                type: 'nav-link',
            },
            {
                value: 'Link 2',
                type: 'nav-link',
            },
        ],
    },
    {
        type: 'content',
        props: {
            color: 'black',
            fontSize: '1rem',
        },
        components: [
            {
                type: 'paragraph',
                value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            },
        ],
    },
    {
        type: 'sidebar',
        components: [
            {
                type: 'ul',
                components: [
                    {
                        value: 'Item 1',
                        props: {
                            color: 'green',
                        },
                        type: 'li',
                    },
                    {
                        value: 'Item 2',
                        props: {
                            color: 'blue',
                        },
                        type: 'li',
                    },
                    {
                        value: 'Item 3',
                        props: {
                            color: 'red',
                        },
                        type: 'li',
                    },
                ],
            },
        ],
    },
    {
        type: 'footer',
        components: [
            {
                type: 'footer',
                value: 'Footer',
            },
            {
                type: 'footer-link',
                value: 'Link 1',
            },
        ],
    },
];

export const dataOption2 = [
    {
        type: 'header',

        components: [
            {
                value: 'Header',
                props: {
                    color: 'royalblue',
                    fontSize: '2rem',
                },
                type: 'heading',
            },
            {
                value: 'Link 1',
                type: 'nav-link',
            },
            {
                value: 'Link 2',
                type: 'nav-link',
            },
        ],
    },
    {
        type: 'content',
        components: [
            {
                type: 'form',
                value: 'Form',
                components: [
                    {
                        type: 'input',
                        value: 'Input',
                    },
                    {
                        type: 'button',
                        value: 'Button',
                    },
                ],
            },
        ],
    },
    {
        type: 'sidebar',
        components: [
            {
                type: 'ul',
                value: [
                    {
                        value: 'Item 1',
                        type: 'li',
                    },
                    {
                        value: 'Item 2',
                        type: 'li',
                    },
                    {
                        value: 'Item 3',
                        type: 'li',
                    },
                ],
            },
        ],
    },
    {
        type: 'footer',
        components: [
            {
                type: 'footer',
                value: 'Footer',
            },
            {
                type: 'footer-link',
                value: 'Link 1',
            },
        ],
    },
];

export const dataOption3 = [
    {
        type: 'header',
        components: [
            {
                value: 'Header',
                type: 'heading',
            },
        ],
    },
    {
        type: 'content',
        components: [
            {
                type: 'paragraph',
                props: {
                    color: 'black',
                    fontSize: '0.5rem',
                },
                value: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.`,
            },
        ],
    },

    {
        type: 'footer',
        components: [
            {
                type: 'footer',
                value: 'Footer',
            },
            {
                type: 'footer-link',
                value: 'Link 1',
            },
        ],
    },
];
