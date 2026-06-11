import React from 'react'
import { AgGridReact } from 'ag-grid-react'
import { useGetSales } from '../../store/hooks/useSales'
import styled from 'styled-components'

const SalesTable = () => {
    const rowData = useGetSales()

    const columnDefs = [
        { field: 'id', headerName: '주문번호', flex: 1 },
        { field: 'user_name', headerName: '회원명', flex: 1 },
        { field: 'product_name', headerName: '상품명', flex: 1 },
        { field: 'quantity', headerName: '수량', flex: 1 },
        { field: 'discount_rate', headerName: '할인율', flex: 1 },
        { field: 'total_price', headerName: '결제금액', flex: 1 },
        { field: 'created_at', headerName: '주문일자', flex: 1 },
    ]

    return (
        <Container>
            <Title>판매 내역</Title>

            <GridContainer className="ag-theme-alpine">
                <AgGridReact
                    theme="legacy"
                    rowData={rowData}
                    columnDefs={columnDefs}
                    pagination
                    paginationPageSize={14}
                    defaultColDef={{
                        sortable: true,
                        filter: true,
                        resizable: true,
                    }}
                />
            </GridContainer>
        </Container>
    )
}

export default SalesTable;

const Container = styled.div`
    width: 100%;
    padding: 24px;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
`;

const Title = styled.h2`
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 700;
    color: #222;
`;

const GridContainer = styled.div`
    width: 100%;
    height: 700px;

    .ag-root-wrapper {
        border: 1px solid #e5e7eb;
        border-radius: 10px;
        overflow: hidden;
    }

    .ag-header {
        background: #f8fafc;
        border-bottom: 1px solid #e5e7eb;
    }

    .ag-header-cell-label {
        font-weight: 700;
        color: #1f2937;
    }

    .ag-cell {
        display: flex;
        align-items: center;
    }

    .ag-row {
        transition: all 0.2s ease;
    }

    .ag-row:hover {
        background-color: #f8fafc;
    }

    .ag-paging-panel {
        border-top: 1px solid #e5e7eb;
    }
`;