import { Component, OnInit } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';
import { Subject, takeUntil } from 'rxjs';
import { AnalyticsService } from '../dashboards/analytics/analytics.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent implements OnInit {

  chartLanguage: ApexOptions;
  chartNewVsReturning: ApexOptions;
  chartGender: ApexOptions;
  chartAge: ApexOptions;

  data: any;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  /**
   * Constructor
   */
  constructor(
    private _analyticsService: AnalyticsService
  ) {
  }


  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Get the data
    this._analyticsService.data$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((data) => {

        console.log(data)

        // Store the data
        this.data = data;

        // Prepare the chart data
       this._prepareChartData();
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
       * Prepare the chart data from the data
       *
       * @private
       */
  private _prepareChartData(): void {

    // New vs. returning
    this.chartNewVsReturning = {
      chart: {
        animations: {
          speed: 400,
          animateGradually: {
            enabled: false
          }
        },
        fontFamily: 'inherit',
        foreColor: 'inherit',
        height: '100%',
        type: 'donut',
        sparkline: {
          enabled: true
        }
      },
      colors: ['#3182CE', '#63B3ED'],
      labels: this.data.newVsReturning.labels,
      plotOptions: {
        pie: {
          customScale: 0.9,
          expandOnClick: false,
          donut: {
            size: '70%'
          }
        }
      },
      series: this.data.newVsReturning.series,
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      },
      tooltip: {
        enabled: true,
        fillSeriesColor: false,
        theme: 'dark',
        custom: ({
          seriesIndex,
          w
        }): string => `<div class="flex items-center h-8 min-h-8 max-h-8 px-3">
                                                <div class="w-3 h-3 rounded-full" style="background-color: ${w.config.colors[seriesIndex]};"></div>
                                                <div class="ml-2 text-md leading-none">${w.config.labels[seriesIndex]}:</div>
                                                <div class="ml-2 text-md font-bold leading-none">${w.config.series[seriesIndex]}%</div>
                                            </div>`
      }
    };


  }
}
