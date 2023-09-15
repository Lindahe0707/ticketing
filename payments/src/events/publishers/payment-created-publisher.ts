import { Subjects, Publisher, PaymentCreatedEvent } from "@ticketingweb/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
