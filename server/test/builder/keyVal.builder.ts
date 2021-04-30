import { KeyVal } from "../../src/handler/keyVal.entity";
import { Builder } from "./Builder";

export class KeyValBuilder extends Builder<KeyVal> {
  constructor() {
    super();
    this.instance = new KeyVal();
  }

  withKey(key: string): KeyValBuilder {
    this.instance.key = key;
    return this;
  }

  withValue(value: string): KeyValBuilder {
    this.instance.value = value;
    return this;
  }
}
