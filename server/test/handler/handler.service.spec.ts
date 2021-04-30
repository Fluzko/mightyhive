import { BadRequestException } from "@nestjs/common";
import { KeyVal } from "../../src/handler/keyVal.entity";
import { KeyValBuilder } from "../builder/keyVal.builder";
import { HandlerService } from "../../src/handler/handler.service";
import { getProvider } from "../test.util";

describe("KeyValService", () => {
  let keyValService: HandlerService;
  beforeAll(async () => {
    keyValService = getProvider(HandlerService);
  });
  describe("get by key", () => {
    test("with valid key, returns the keyVal", async () => {
      const keyVal = await new KeyValBuilder()
        .withKey("key")
        .withValue("value")
        .buildAndPersist();

      const found: KeyVal = await keyValService.getByKey(keyVal.key);
      expect(found.value).toEqual(keyVal.value);
      expect(found.key).toEqual(keyVal.key);
    });

    test("with invalid key, throws badrequest error", async () => {
      await expect(keyValService.getByKey("some_key")).rejects.toBeInstanceOf(
        BadRequestException
      );
    });

    test("with no key, throws badrequest error", async () => {
      await expect(keyValService.getByKey(null)).rejects.toBeInstanceOf(
        BadRequestException
      );
      await expect(keyValService.getByKey(undefined)).rejects.toBeInstanceOf(
        BadRequestException
      );
      await expect(keyValService.getByKey("")).rejects.toBeInstanceOf(
        BadRequestException
      );
    });
  });

  describe("save", () => {
    test("with valid keyVal object, saves the object", async () => {
      const keyVal = new KeyVal();
      keyVal.key = "key";
      keyVal.value = "val";

      const persisted: KeyVal = await keyValService.save(keyVal);

      expect(persisted.key).toEqual(keyVal.key);
      expect(persisted.value).toEqual(keyVal.value);
    });
    test("with no keyVal object, throws badrequest exception", async () => {
      await expect(keyValService.save(null)).rejects.toBeInstanceOf(
        BadRequestException
      );
    });
  });
});
