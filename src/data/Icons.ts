type Type = {
    [key: string]: {
        viewBox: string,
        svg: string
    }
}

export let Icons: Type = {
    Left: {
        viewBox: '-6 0 24 24',
        svg: `<path fill="currentColor" fill-rule="evenodd" d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414" stroke-width="0.1" stroke="#000"/>`
    },
} as const;