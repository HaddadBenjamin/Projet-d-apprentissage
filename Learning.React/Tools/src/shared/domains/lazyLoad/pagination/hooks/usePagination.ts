/* eslint no-nested-ternary: "warn" */
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import IPagination, {IPaginateResponse} from '../pagination.model';
import {ApplicationState} from '../../../../../samples/lazyRedux/root.state';

export interface usePaginationResponse<T> {
  pagination: IPagination<T>;
  setPagination: (pagination: IPagination<T>) => void;
  goToPreviousPage: () => void;
  goToNextPage: () => void;
  goToPage: (page: number) => void;
}

const usePagination = <T>(
  // Ces 3 champs sont nécéssaires quand on a besoin de faire des appels HTTP à chaque changement de page.
  onPageChange: (page: number, pageSize: number) => void,
  selectPaginateResponse: (state: ApplicationState) => IPaginateResponse<T>, // paginate response
  callHttpOnSelectPage: boolean = true,
  iPage: number = 1,
  iPageSize: number = 10
): usePaginationResponse<T> => {
  // paginate response
  const paginateResponse = useSelector(selectPaginateResponse);
  
  // pagination
  const [pagination, setPagination] = useState({
    items: [] as T[],
    currentPage: [] as T[],
    page: iPage,
    pageSize: iPageSize,
    pageSizeInThisPage: 1,
    hasPreviousPage: false,
    hasNextPage: false,
    lastPage: 1,
    itemsCount: iPageSize,
  });
  
  const computePagination = (): void => {
    // Simplifier cette merde
    const itemsCount = pagination.itemsCount ?? pagination.items.length;
    const pageSize =
      pagination.pageSize > itemsCount ? itemsCount : pagination.pageSize;
    const lastPage = pageSize === 0 ? 1 : Math.floor(itemsCount / pageSize);
    const page = pagination.page > lastPage ? lastPage : pagination.page;
    
    setPagination({
      ...pagination,
      pageSize,
      page,
      lastPage,
      currentPage: callHttpOnSelectPage
        ? pagination.items
        : pagination.items.slice(pageSize * (page - 1)).slice(0, pageSize),
      hasPreviousPage: page - 1 > 0,
      hasNextPage: page < lastPage,
      pageSizeInThisPage: callHttpOnSelectPage
        ? pageSize
        : page === lastPage
          ? itemsCount % pageSize
          : pageSize,
    });
  };
  
  useEffect(
    () =>
      setPagination({
        ...pagination,
        lastPage: paginateResponse.lastPage,
        itemsCount: paginateResponse.itemsCount,
        items: paginateResponse.items,
      }),
    [
      paginateResponse.lastPage,
      paginateResponse.itemsCount,
      paginateResponse.items,
    ]
  );
  
  useEffect(() => onPageChange(iPage, iPageSize), []);
  useEffect(
    () => onPageChange(pagination.page, pagination.pageSize),
    [pagination.page, pagination.pageSize]
  );
  useEffect(
    () => computePagination(),
    [pagination.page, pagination.pageSize, pagination.items]
  );
  
  const goToPreviousPage = (): void => {
    if (pagination.hasPreviousPage)
      setPagination({...pagination, page: pagination.page - 1});
  };
  const goToNextPage = (): void => {
    if (pagination.hasNextPage)
      setPagination({...pagination, page: pagination.page + 1});
  };
  
  const goToPage = (page: number) => {
    if (page >= 1 && page <= pagination.lastPage)
      setPagination({...pagination, page});
  };
  
  return {
    pagination,
    setPagination,
    goToPreviousPage,
    goToNextPage,
    goToPage,
  } as const;
};

export default usePagination;
