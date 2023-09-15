import { Subjects, Publisher, OrderCancelledEvent } from "@ticketingweb/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
