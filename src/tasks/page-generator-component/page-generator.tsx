import React from 'react';
import { dataOption2 } from './data';
import { renderLayoutSection } from './render-component';
import { IComponent } from './types';

const PageGenerator: React.FC = () => {
    return (
        <div className="container">
            {dataOption2.map((element) =>
                renderLayoutSection(element as IComponent)
            )}
        </div>
    );
};

export default PageGenerator;
