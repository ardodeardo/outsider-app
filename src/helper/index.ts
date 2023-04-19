import dayjs from 'dayjs';

export const formatDate = (param: string, format: string = 'MMM DD, YYYY, hh.mm A') => {
  const formatted = dayjs(param).format(format);

  return formatted;
}

export const filterTitle = (media: string, title: string) => {
  let sanitized: string = title;

  const cutOffPart: Array<string> =
    [
      `- ${media}`,
      `${media} News`,
      `- The ${media}`
    ];

  for (let idx = 0; idx < cutOffPart.length; idx++) {
    if (title.includes(cutOffPart[idx])) {
      sanitized = title.replace(cutOffPart[idx], '');

      break;
    }
  }

  return sanitized;
}