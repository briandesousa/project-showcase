import React from 'react';
import App from './App';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from "react-dom/test-utils";

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

it('renders project list', async () => {
    const fakeProjectList = {
        projects: [
            {
                name: 'test project',
                description: 'some test project',
                url: 'http://google.com'

            }
        ]
    };
    
    jest.spyOn(global, 'fetch').mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(fakeProjectList)
        })
    );

    await act(async () => {
        render(<App />, container);
    });

    expect(container.querySelector('h2').textContent).toBe(fakeProjectList.projects[0].name);
})

it('fails everytime, why?', async () => {
    expect('everything').toBe('wrong');
})
