import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';
import { expect } from 'chai';
import App from '../src/components/app/App';
import InputTop from '../src/components/search/input/inputTop/InputTop';


const adapter = new Adapter();
Enzyme.configure({ adapter });


describe('The React Components', () => {

    describe('<App/> component', () => {
        let appWrapper;
    
        before('Create component', () => appWrapper = shallow(<App/>));
    
        it('renders a <div>', () => expect(appWrapper.find('div')).to.have.length(1));
    })

    describe('<InputTop/> component', () => {
        let inputTopWrapper;

        before('Create component', () => inputTopWrapper = shallow(<InputTop/>));

        it('renders each <button>', () => expect(inputTopWrapper.find('button')).to.have.length(4));
    })
})
