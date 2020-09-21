/* eslint-disable import/no-duplicates */
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt-BR';

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const formatDate = (date: Date): string =>
  format(utcToZonedTime(date, timezone), 'P', { locale: pt });

export default formatDate;
