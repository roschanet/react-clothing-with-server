import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  topi: 1,
  sepatu: 2,
  jaket: 3,
  wanite: 4,
  pria: 5,
};

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  );
