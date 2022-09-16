export function convertHourStringToMinute(hourString: string) {
  const [ hours, minutes ] = hourString.split(':').map(Number)

  const minutesAmount = (hours * 60) + minutes

  return minutesAmount
}

export function convertMinutesToHourString(minutesAmount: number) {
  const hours = Math.floor(minutesAmount / 60).toString().padStart(2, '0')
  const minutes = (minutesAmount % 60).toString().padStart(2, '0')

  return `${hours}:${minutes}`
}