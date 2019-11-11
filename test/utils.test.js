import { expect } from 'chai';
import sinon from 'sinon';
import { searchKeywords } from '../src/utils';


describe('The Utility Functions', () => {
    
    describe('searchKeywords function', () => {

        const jobs = [
            {
                "jobID": "15178",
                "title": "Associate"
            },
            {
                "jobID": "14918",
                "title": "Associate Intern"
            }
        ]

        it('finds jobs by keywords', () => {
            expect(searchKeywords('intern', jobs)).to.have.length(1);
            expect(searchKeywords('14918', jobs)).to.have.length(1);
            expect(searchKeywords('associate', jobs)).to.have.length(2);
        })
        it('returns an empty array if there are no matching keywords', () => {
            expect(searchKeywords('react', jobs)).to.have.length(0);
            expect(searchKeywords('00000', jobs)).to.have.length(0);
        })

    })

})
