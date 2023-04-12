export const filterTitle = (media: string, title: string) => {
  let sanitized: string = title;

  const cutOffPart: string[] =
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