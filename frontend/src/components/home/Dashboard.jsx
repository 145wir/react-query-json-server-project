import React from 'react'
import styled from 'styled-components'
import { useDashboard } from '../../store/hooks/useDashboard'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
} from 'chart.js'

import { Bar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
)

const Dashboard = () => {
    const {
        kpi = {},
        userRanking = [],
        productRanking = []
    } = useDashboard()

    const userChartData = {
        labels: userRanking.map(item => item.name),
        datasets: [
            {
                label: '구매 건수',
                data: userRanking.map(item => item.count)
            }
        ]
    }

    const productChartData = {
        labels: productRanking.map(item => item.name),
        datasets: [
            {
                label: '판매 수량',
                data: productRanking.map(item => item.quantity)
            }
        ]
    }

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
            legend: {
                position: 'top'
            }
        }
    }

    return (
        <Container>
            <Title>📊 판매 대시보드</Title>

            <KpiGrid>
                <Card>
                    <Label>총 매출액</Label>
                    <Value>
                        {(kpi.totalSalesAmount || 0).toLocaleString()}원
                    </Value>
                </Card>

                <Card>
                    <Label>총 판매수량</Label>
                    <Value>
                        {(kpi.totalQuantity || 0).toLocaleString()}개
                    </Value>
                </Card>

                <Card>
                    <Label>총 주문건수</Label>
                    <Value>
                        {(kpi.totalOrderCount || 0).toLocaleString()}건
                    </Value>
                </Card>

                <Card>
                    <Label>고객 수</Label>
                    <Value>
                        {(kpi.customerCount || 0).toLocaleString()}명
                    </Value>
                </Card>

                <Card>
                    <Label>상품 수</Label>
                    <Value>
                        {(kpi.productCount || 0).toLocaleString()}개
                    </Value>
                </Card>
            </KpiGrid>

            <ChartGrid>
                <ChartCard>
                    <ChartTitle>
                        고객 구매 랭킹 TOP 10
                    </ChartTitle>

                    <ChartWrapper>
                        <Bar
                            data={userChartData}
                            options={chartOptions}
                        />
                    </ChartWrapper>
                </ChartCard>

                <ChartCard>
                    <ChartTitle>
                        상품 판매 랭킹 TOP 10
                    </ChartTitle>

                    <ChartWrapper>
                        <Bar
                            data={productChartData}
                            options={chartOptions}
                        />
                    </ChartWrapper>
                </ChartCard>
            </ChartGrid>
        </Container>
    )
}

export default Dashboard

const Container = styled.div`
    width: 100%;
    padding: 30px;
    background: #f5f7fa;
    min-height: 100vh;
`

const Title = styled.h1`
    margin-bottom: 30px;
    font-size: 32px;
    font-weight: 700;
    color: #222;
`

const KpiGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    margin-bottom: 30px;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const Card = styled.div`
    background: white;
    border-radius: 15px;
    padding: 25px;
    text-align: center;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
`

const Label = styled.div`
    font-size: 14px;
    color: #777;
    margin-bottom: 10px;
`

const Value = styled.div`
    font-size: 28px;
    font-weight: 700;
    color: #1677ff;
`

const ChartGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
    }
`

const ChartCard = styled.div`
    background: white;
    border-radius: 15px;
    padding: 25px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
`

const ChartTitle = styled.h3`
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 700;
    color: #333;
`

const ChartWrapper = styled.div`
    width: 100%;
    height: 450px;
`