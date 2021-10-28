export const getFormattedData = (data) => {
  const date = new Date(data['launch_date_utc']);

  return {
    missionName: data['mission_name'],
    rocket: data['rocket']['rocket_name'],
    date: `${date.getDate()} ${date.toDateString().split(' ')[1]} ${date.getFullYear()}`,
    mobileDate: data['launch_date_local'].replace('T', ' '),
    site: data['launch_site']['site_name'],
    siteLong: data['launch_site']['site_name_long'],
    ships: data['ships'],
    recovered: data['rocket']['fairings']?.['recovered'],
  };
};
