const dateTimeOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
}

export function formatDate(timestamp) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(timestamp));
}

export function formatDateTime(timestamp) {
  return new Intl.DateTimeFormat("en-US", {
    ...dateTimeOptions,
    timeZoneName: "short"
  }).format(new Date(timestamp));
}

export function formatLaunchSiteDateTime(timestamp) {

  // get the offset between launch site time zone and UTC time zone
  const timeStampOffset = timestamp.slice(-6); 
  const offsetSign = timeStampOffset.slice(0, 1);
  let launchSiteOffset = timeStampOffset.slice(1, 3) * 60 + timeStampOffset.slice(-2) * 1;

  // get the offset between user time zone and UTC time zone
  const userDate = new Date(timestamp);
  const UTCTimeZoneOffset = userDate.getTimezoneOffset();
  if (offsetSign === '-') launchSiteOffset = -Math.abs(launchSiteOffset);

  // add both offsets to user local time
  const launchSiteDate = userDate.setMinutes(userDate.getMinutes() + UTCTimeZoneOffset + launchSiteOffset);

  return new Intl.DateTimeFormat("en-US", dateTimeOptions).format(new Date(launchSiteDate)) + ` GMT${offsetSign}${Math.abs(launchSiteOffset / 60)}`;
}
