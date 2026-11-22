import { siteConfig } from "../config/siteConfig";

/**
 * Builds a WhatsApp chat link pre-filled with a message about the given
 * product (or a general enquiry if no product name is passed).
 */
export function whatsappEnquiryLink(productName?: string): string {
  const base = siteConfig.contact.whatsapp.link;
  const message = productName
    ? `Hi Petal Hugs! I'm interested in the "${productName}". Could you share more details?`
    : `Hi Petal Hugs! I'd love to know more about your handmade creations.`;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/**
 * Instagram doesn't support pre-filled DM text via a plain link, so this
 * simply opens the profile — the product name is shown to the user so they
 * can mention it themselves.
 */
export function instagramEnquiryLink(): string {
  return siteConfig.contact.instagram.link;
}

export function gmailLink(): string {
  return `mailto:${siteConfig.contact.gmail}`;
}
