import { Publisher, Subjects, TicketUpdatedEvent } from "@ticketingweb/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
