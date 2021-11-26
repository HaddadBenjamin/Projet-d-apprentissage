import {ChangeEvent, FC} from "react";
import {useDispatch} from "react-redux";
import {selectPaginateResponse} from "../../ids.selector";
import {IdFilters} from "../IdFilters/IdFilters";
import {IdsList} from "../IdList/IdsList";
import {PaginationButtons} from "../../../../shared/Pagination/components/PagnationButtons/PaginationButtons";
import usePagination from "../../../../shared/Pagination/hooks/usePagination";
import {getPaginateIdsRequestAction} from "../../ids.action";
import PaginationInformation
	from "../../../../shared/Pagination/components/PaginationInformation/PaginationInformation";

export const IdPage: FC = () => {
	const dispatch = useDispatch()
	const { pagination, setPagination, goToPreviousPage, goToPage, goToNextPage } = usePagination<number>(
		(page, pageSize) => dispatch(getPaginateIdsRequestAction(page, pageSize)),
		selectPaginateResponse,
		true,
		1,
		10)

	const handlePageSizeChange = (event: ChangeEvent<HTMLSelectElement>) =>
		setPagination({...pagination, pageSize: Number(event.target.value)})
	
	return <>
		<h1>Lazy pagination</h1>
		<IdFilters pageSize={pagination.pageSize} handlePageSizeChange={handlePageSizeChange}/>
		<IdsList ids={pagination.currentPage}/>
		<PaginationInformation pagination={pagination}/>
		<PaginationButtons
			pagination={pagination}
			goToPreviousPage={goToPreviousPage}
			goToPage={goToPage}
			goToNextPage={goToNextPage}
		/>
	</>
}

