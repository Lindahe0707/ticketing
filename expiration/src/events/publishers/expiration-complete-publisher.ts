import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@ticketingweb/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
