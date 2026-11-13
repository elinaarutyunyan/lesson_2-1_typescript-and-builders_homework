export type WorkshopId = 'typescript' | 'build'

export type BookingStatus = 'new' | 'confirmed'

export interface Booking {
  id: string
  name: string
  seats: number
  status: BookingStatus
  source: 'web'
  workshop: WorkshopId
}