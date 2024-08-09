export const parseFilterParams = (query) => {
  const filter = {};

  const { type, isFavourite } = query;

  if (type) {
    filter.contactType = type;
  }

  if (typeof isFavourite !== 'undefined') {
    filter.isFavourite = isFavourite === 'true'; // Convert to boolean
  }

  return filter;
};
