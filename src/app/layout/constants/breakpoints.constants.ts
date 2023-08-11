import { Breakpoints } from '@angular/cdk/layout';
import { BreakpointsEnum } from '@layout/enums/breakpoints.enum';

export const BreakPointsMap = new Map([
    [Breakpoints.XSmall, BreakpointsEnum.XSmall],
    [Breakpoints.Small, BreakpointsEnum.Small],
    [Breakpoints.Medium, BreakpointsEnum.Medium],
    [Breakpoints.Large, BreakpointsEnum.Large],
    [Breakpoints.XLarge, BreakpointsEnum.XLarge],
]);
