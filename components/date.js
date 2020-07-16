import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString} className="fw4">{format(date, ' — yyyy')}</time>
}