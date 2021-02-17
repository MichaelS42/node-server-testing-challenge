const Model = require('./users-model.js')
const db = require('../data/dbConfig.js');


describe('users model', () => {
    describe('insert()', () => {

        beforeEach(async () => {
            await db('users').truncate();
        });

        test('inserts the provided users', async () => {
            await Model.insert({ name: 'gaffer' });
            await Model.insert({ name: 'sam' });

            const users = await db('Users');
            expect(users).toHaveLength(2);
        });

        test('returns the inserted object', async () => {
            let user = await Model.insert({ name: 'gaffer' });
            expect(user.name).toBe('gaffer');

            user = await Model.insert({ name: 'sam' });
            expect(user.name).toBe('sam');

        });


    });
});