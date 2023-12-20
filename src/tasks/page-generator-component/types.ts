export interface IComponent {
    type: string;
    value?: string;
    props?: React.CSSProperties;
    components?: IComponent[];
}

export type INav = JSX.Element;
