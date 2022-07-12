// SIGNED-SOURCE: <af0bfe6f9a774b84287530633eb6b309>
/**
 * AUTO-GENERATED FILE
 * Do not modify. Update your schema and re-generate for changes.
 * For partially generated files, place modifications between the generated `BEGIN-MANUAL-SECTION` and
 * `END-MANUAL-SECTION` markers.
 */
import { Context } from "@aphro/runtime-ts";
import { SID_of } from "@aphro/runtime-ts";
import { NodeSpecWithCreate } from "@aphro/runtime-ts";
import GroceryInput from "./GroceryInput.js";
import { Data } from "./GroceryInput.js";

const spec: NodeSpecWithCreate<GroceryInput, Data> = {
  type: "node",
  createFrom(ctx: Context, data: Data) {
    const existing = ctx.cache.get(data["id"], GroceryInput.name);
    if (existing) {
      return existing;
    }
    const result = new GroceryInput(ctx, data);
    ctx.cache.set(data["id"], result);
    return result;
  },

  primaryKey: "id",

  storage: {
    engine: "sqlite",
    db: "undefined",
    type: "sql",
    tablish: "groceryinput",
  },

  outboundEdges: {},
};

export default spec;