import { Publisher, OrderCreatedEvent, Subjects } from "@ticketingweb/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
