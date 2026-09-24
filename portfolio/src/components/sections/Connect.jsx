import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowUpRight,
  Copy,
  Check,
  Mail,
  Send,
} from "lucide-react";
import SectionHeading from "../SectionHeading";
import { profile } from "../../data/portfolio";

export default function Connect() {
  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Copy email
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  // Handle form submit
  const submit = async (e) => {
    e.preventDefault();

    setSending(true);
    setSent(false);
    setError("");

    try {
      await emailjs.send(
        "service_ach13je",
        "template_5ppabkh",
        {
          name: form.name,
          email: form.email,
          subject: form.subject || `Portfolio enquiry from ${form.name}`,
          message: form.message,
        },
        {
          publicKey: "0Id8VgqGA7EOX5aNj",
        }
      );

      setSent(true);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);

      setError(
        "Unable to send your message. Please try again or email me directly."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="connect" className="section connect-section">
      <div className="container">

        <SectionHeading
          eyebrow="04 / CONNECT"
          title="Have an idea? Let’s build it."
          text="Send me a message directly through this form. I’ll get back to you as soon as possible."
        />

        <div className="connect-layout">

          {/* LEFT SIDE */}
          <div className="connect-intro reveal">

            <span className="contact-orbit">
              <Mail size={23} />
            </span>

            <p className="mini-label">
              DROP ME A LINE
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="email-link"
            >
              {profile.email}
            </a>

            <p>
              Whether it&apos;s a project, opportunity,
              collaboration or simply a conversation about
              technology — I&apos;d love to hear from you.
            </p>

            <button
              type="button"
              className="copy-email"
              onClick={copyEmail}
            >
              {copied ? (
                <Check size={16} />
              ) : (
                <Copy size={16} />
              )}

              {copied ? "Copied" : "Copy email"}
            </button>

          </div>

          {/* FORM */}
          <form
            className="contact-form reveal"
            onSubmit={submit}
          >

            <div className="form-row">

              {/* NAME */}
              <label>
                <span>Your name</span>

                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  placeholder="John Doe"
                />
              </label>

              {/* EMAIL */}
              <label>
                <span>Email</span>

                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  placeholder="john@example.com"
                />
              </label>

            </div>

            {/* SUBJECT */}
            <label>
              <span>Subject</span>

              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={(e) =>
                  setForm({
                    ...form,
                    subject: e.target.value,
                  })
                }
                placeholder="Let’s build something..."
              />
            </label>

            {/* MESSAGE */}
            <label>
              <span>Message</span>

              <textarea
                name="message"
                required
                rows="6"
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
                placeholder="Tell me about your idea..."
              />
            </label>

            {/* SUBMIT BUTTON */}
            <button
              className="btn btn-primary send-btn"
              type="submit"
              disabled={sending}
            >

              {sending ? (
                <>
                  <span className="button-spinner" />
                  Sending...
                </>
              ) : sent ? (
                <>
                  <Check size={17} />
                  Message Sent
                </>
              ) : (
                <>
                  Send Message
                  <ArrowUpRight size={17} />
                </>
              )}

            </button>

            {/* SUCCESS MESSAGE */}
            {sent && (
              <p className="form-success">
                Thanks! Your message has been sent successfully.
              </p>
            )}

            {/* ERROR MESSAGE */}
            {error && (
              <p className="form-error">
                {error}
              </p>
            )}

          </form>

        </div>
      </div>
    </section>
  );
}