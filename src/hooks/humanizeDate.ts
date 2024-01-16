import moment from 'moment';

export const humanizeDate = (isoDateString: string) => {
  moment.locale('es');
  moment.relativeTimeThreshold('y', 365);

  const now = moment();

  const formattedTime = moment
    .duration(-now.diff(isoDateString))
    .humanize(true);
  return formattedTime;
};
