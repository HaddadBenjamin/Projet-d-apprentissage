import {FC} from "react";
import {Id} from "../Id/Id";
import styles from './IdsList.module.scss';

interface Props
{
	ids : number[]
}

export const IdsList : FC<Props> = ({ ids }) =>
	<div className={styles.container}>
		{ids.map(id => <Id key={id} id={id} />)}
	</div>