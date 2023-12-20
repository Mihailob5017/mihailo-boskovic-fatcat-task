import './styles.css';
import React from 'react';
// Task 1
import List from './tasks/list-component/list';
// Task 2
import FormExample from './tasks/form-generator-component/form-example';
// Task 3
import PageGenerator from './tasks/page-generator-component/page-generator';
function App() {
    return (
        <main>
            <h1>React Tasks</h1>
            <section>
                <h2>Task 1</h2>
                <List />
            </section>
            {/* <section>
                <h2>Task 2</h2>
                <FormExample />
            </section> */}
            {/* <section>
                <h2>Task 3</h2>
                <PageGenerator />
            </section> */}
        </main>
    );
}

export default App;
