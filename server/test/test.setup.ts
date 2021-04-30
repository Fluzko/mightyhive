import {
  rollbackTransaction,
  setupTestEnvironment,
  startTransaction
} from "./test.util";

beforeAll(
  async (): Promise<void> => {
    await setupTestEnvironment();
  }
);

beforeEach(
  async (): Promise<void> => {
    await startTransaction();
  }
);

afterEach(
  async (): Promise<void> => {
    await rollbackTransaction();
  }
);
