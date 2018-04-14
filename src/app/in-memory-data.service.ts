import { InMemoryDbService } from 'angular-in-memory-web-api';

import { createTestCustomers, createTestRegions, createTestStates } from './test-data';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        return { customers : createTestCustomers(), states : createTestStates(), regions : createTestRegions()} ;
    }
}