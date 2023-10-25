import React, {FC} from 'react';
import {EuiBasicTable} from "@elastic/eui";
import {Post} from "../../types/data";
import {tableConfig} from "./config";

interface TableProps {
    data: Post[];
    isLoading: boolean;
}
export const Table: FC<TableProps> = ({data, isLoading}) => {
    return (
        <EuiBasicTable
            loading={isLoading}
            items={data}
            columns={tableConfig}
        />
    );
};
