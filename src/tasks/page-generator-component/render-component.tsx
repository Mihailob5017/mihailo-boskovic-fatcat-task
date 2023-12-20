import React from 'react';
import './render-styles.css';
import { IComponent, INav } from './types';

const renderHeader = (components: IComponent[]) => {
    const navLinks: INav[] = [];
    const otherComponents: INav[] = [];

    components.forEach((component: IComponent, index: number) => {
        const { type, value } = component;
        switch (type) {
            case 'heading':
                otherComponents.push(
                    <h1 style={component?.props} key={index}>
                        {value}
                    </h1>
                );
                break;
            case 'nav-link':
                navLinks.push(
                    <a
                        key={index}
                        style={component?.props}
                        href="#"
                        className="nav-link"
                    >
                        {value}
                    </a>
                );
                break;
            default:
                return null;
        }
    });

    return (
        <>
            {otherComponents}
            <nav>{navLinks}</nav>
        </>
    );
};

const renderForm = (components: IComponent[]) => {
    return components.map((component: IComponent, index: number) => {
        const { type, value } = component;
        switch (type) {
            case 'input':
                return (
                    <input
                        key={index}
                        style={component?.props}
                        placeholder={value}
                        className="input"
                    />
                );
            case 'button':
                return (
                    <button
                        key={index}
                        style={component?.props}
                        className="button"
                    >
                        {value}
                    </button>
                );
            default:
                return null;
        }
    });
};

const renderContent = (components: IComponent[]) => {
    return components.map((component: IComponent, index: number) => {
        const { type, value } = component;
        switch (type) {
            case 'paragraph':
                return (
                    <p
                        key={index}
                        style={component?.props}
                        className="paragraph"
                    >
                        {value}
                    </p>
                );
            case 'form':
                return (
                    <form key={index} style={component?.props} className="form">
                        {renderForm(component.components || [])}
                    </form>
                );
            default:
                return null;
        }
    });
};

const renderSidebar = (components: IComponent[]) => {
    return components.map((component: IComponent, index: number) => {
        const { type } = component;

        switch (type) {
            case 'ul':
                return (
                    <ul style={component?.props} key={index} className="list">
                        {renderList(
                            Array.isArray(component.components)
                                ? component.components
                                : []
                        )}
                    </ul>
                );
            default:
                return null;
        }
    });
};

const renderList = (components: IComponent[]) => {
    return components.map((item: IComponent, index: number) => {
        const { type, value } = item;
        switch (type) {
            case 'li':
                return (
                    <li style={item?.props} key={index} className="list-item">
                        {value}
                    </li>
                );
            default:
                return null;
        }
    });
};

const renderFooter = (components: IComponent[]) => {
    return components.map((component: IComponent, index: number) => {
        const { type, value } = component;
        switch (type) {
            case 'footer-text':
                return (
                    <div
                        style={component?.props}
                        key={index}
                        className="footer-text"
                    >
                        {value}
                    </div>
                );
            case 'footer-link':
                return (
                    <a
                        style={component?.props}
                        key={index}
                        href="#"
                        className="footer-link"
                    >
                        {value}
                    </a>
                );
            default:
                return null;
        }
    });
};

export const renderLayoutSection = (layout: IComponent) => {
    const { type, components } = layout;
    switch (type) {
        case 'header':
            return (
                <header style={layout?.props}>
                    {renderHeader(components || [])}
                </header>
            );
        case 'content':
            return (
                <main style={layout?.props}>
                    {renderContent(components || [])}
                </main>
            );
        case 'sidebar':
            return (
                <aside style={layout?.props}>
                    {renderSidebar(components || [])}
                </aside>
            );
        case 'footer':
            return (
                <footer style={layout?.props}>
                    {renderFooter(components || [])}
                </footer>
            );
        default:
            return '';
    }
};
