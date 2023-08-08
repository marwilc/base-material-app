import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
    cardItems: any[] = [
        {
            icon: 'task',
            name: 'Assigned Tasks & Recommendations',
            value: '1',
            class: 'tasks',
        },
        {
            icon: 'model_training',
            name: 'Pending Training',
            value: '1',
            class: 'training',
        },
        {
            icon: 'sentiment_satisfied',
            name: 'Pending Survey',
            value: '1',
            class: 'survey',
        },
        {
            icon: 'quiz',
            name: 'Pending Quiz',
            value: '1',
            class: 'quiz',
        },
        // {
        //     icon: 'trending_up',
        //     name: 'Performance',
        //     value: '1',
        //     class: 'performance',
        // },
    ];

    public lineChartData: ChartConfiguration<'line'>['data'] = {
        labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
        ],
        datasets: [
            {
                data: [65, 59, 80, 81, 56, 55, 40],
                label: 'Trainings',
                fill: true,
                tension: 0.5,
                borderColor: '#598bff',
                backgroundColor: '#a6c1ff',
            },
        ],
    };
    public lineChartOptions: ChartOptions<'line'> = {
        responsive: true,
    };
    public lineChartLegend = true;

    public pieChartOptions: ChartOptions<'pie'> = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    };
    public pieChartLabels = [
        ['Employeers'],
        ['Clients'],
        ['Candidates'],
    ];
    public pieChartDatasets = [
        {
            data: [300, 500, 100],
            backgroundColor: ['#598bff', '#00d68f', '#94cbff'],
        },
    ];
    public pieChartLegend = true;
    public pieChartPlugins = [];
}
