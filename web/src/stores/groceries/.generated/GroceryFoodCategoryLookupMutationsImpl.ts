import {
  CreateArgs,
  SetCategoryArgs,
} from "./GroceryFoodCategoryLookupMutations.js";
import { Changeset } from "@aphro/runtime-ts";
import { Data } from "./GroceryFoodCategoryLookup.js";
import GroceryFoodCategoryLookup from "./GroceryFoodCategoryLookup.js";
import { IMutationBuilder } from "@aphro/runtime-ts";

export function createImpl(
  mutator: Omit<
    IMutationBuilder<GroceryFoodCategoryLookup, Data>,
    "toChangeset"
  >,
  { id, categoryId }: CreateArgs
): void | Changeset<any>[] {
  mutator.set({
    id,
    categoryId,
  });
}

export function setCategoryImpl(
  mutator: Omit<
    IMutationBuilder<GroceryFoodCategoryLookup, Data>,
    "toChangeset"
  >,
  { categoryId }: SetCategoryArgs
): void | Changeset<any>[] {
  // Use the provided mutator to make your desired changes.
  // e.g., mutator.set({name: "Foo" });
  // You do not need to return anything from this method. The mutator will track your changes.
  // If you do return changesets, those changesets will be applied in addition to the changes made to the mutator.
  mutator.set({
    categoryId,
  });
}
