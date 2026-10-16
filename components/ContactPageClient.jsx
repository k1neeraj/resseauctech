// import PageBanner from "@/components/common/PageBanner";
// import Link from "next/link";

// const contactCards = [
//   {
//     title: "Get in Touch",
//     text: "Contact Resseaux Tech for enterprise IT infrastructure, system integration, networking, security, power backup and support requirements.",
//   },
//   {
//     title: "Office Address",
//     content: (
//       <p className="break-words">
//         C-2, Soami Nagar (South),
//         <br />
//         New Delhi - 110017
//       </p>
//     ),
//   },
//   {
//     title: "Contact Details",
//     content: (
//       <div className="min-w-0 break-words">
//         <p className="mb-2">
//           Phone:{" "}
//           <a
//             href="tel:01141616233"
//             className="break-all text-[var(--color-primary)] hover:underline"
//           >
//             011-41616233
//           </a>
//         </p>
//         <p className="mb-2">
//           Email:{" "}
//           <a
//             href="mailto:info@resseauxtech.com"
//             className="break-all text-[var(--color-primary)] hover:underline"
//           >
//             info@resseauxtech.com
//           </a>
//         </p>
//         <p>
//           Alternate:{" "}
//           <a
//             href="mailto:ramesh@resseauxtech.com"
//             className="break-all text-[var(--color-primary)] hover:underline"
//           >
//             ramesh@resseauxtech.com
//           </a>
//         </p>
//       </div>
//     ),
//   },
// ];

// const infoBlocks = [
//   {
//     title: "Registered Office",
//     subtitle: "New Delhi",
//     text: "C-2, Soami Nagar (South), New Delhi - 110017.",
//     meta1: "Phone",
//     value1: "011-41616233",
//     meta2: "Email",
//     value2: "info@resseauxtech.com",
//   },
//   {
//     title: "Sales Inquiries",
//     subtitle: "Enterprise & Projects",
//     text: "T-19A, Malviya Nagar, Near Krishna Mandir, New Delhi - 110017.",
//     meta1: "Email",
//     value1: "info@resseauxtech.com",
//     meta2: "Support",
//     value2: "Business response during working hours",
//   },
//   {
//     title: "General Assistance",
//     subtitle: "Support & Coordination",
//     text: "Share your BOQ, RFQ, implementation need or infrastructure support request for further coordination.",
//     meta1: "Mail",
//     value1: "info@resseauxtech.com",
//     meta2: "Response",
//     value2: "Business response during working hours",
//   },
// ];

// const inputBase =
//   "w-full min-w-0 border-0 border-b border-[var(--color-border)] bg-transparent px-0 pb-3 pt-2 text-sm leading-6 text-[var(--color-text)] outline-none placeholder:break-words placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:ring-0";

// export default function ContactPage() {
//   return (
//     <>
//       <PageBanner
//         pageName="Contact Us"
//         pageTitle="Talk to Resseaux Tech about your infrastructure requirements"
//       />

//       <section className="overflow-x-hidden bg-[var(--color-surface-soft)] py-14 sm:py-16 lg:py-28">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
//             <div className="min-w-0 lg:col-span-8">
//               <form
//                 className="space-y-12 sm:space-y-14"
//                 action="mailto:info@resseauxtech.com"
//                 method="POST"
//                 encType="text/plain"
//               >
//                 <div className="min-w-0">
//                   <h4 className="mb-7 break-words text-[28px] font-semibold leading-tight tracking-tight text-[var(--color-text)] sm:mb-10 sm:text-2xl">
//                     <span className="mr-2 text-[var(--color-primary)]">
//                       01.
//                     </span>
//                     Your Details
//                   </h4>

//                   <div className="grid gap-x-8 gap-y-8 md:grid-cols-2">
//                     <div className="min-w-0">
//                       <label className="mb-3 block break-words text-sm font-medium text-[var(--color-text)]">
//                         Full Name
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Enter your full name"
//                         className={inputBase}
//                       />
//                     </div>

//                     <div className="min-w-0">
//                       <label className="mb-3 block break-words text-sm font-medium text-[var(--color-text)]">
//                         Company / Organisation
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Your company or department name"
//                         className={inputBase}
//                       />
//                     </div>

//                     <div className="min-w-0">
//                       <label className="mb-3 block break-words text-sm font-medium text-[var(--color-text)]">
//                         Email Address
//                       </label>
//                       <input
//                         type="email"
//                         placeholder="name@company.com"
//                         className={inputBase}
//                       />
//                     </div>

//                     <div className="min-w-0">
//                       <label className="mb-3 block break-words text-sm font-medium text-[var(--color-text)]">
//                         Phone Number
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Enter your phone number"
//                         className={inputBase}
//                       />
//                     </div>

//                     <div className="min-w-0">
//                       <label className="mb-3 block break-words text-sm font-medium text-[var(--color-text)]">
//                         Department / Role
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="IT, Procurement, Admin, Project Team"
//                         className={inputBase}
//                       />
//                     </div>

//                     <div className="min-w-0">
//                       <label className="mb-3 block break-words text-sm font-medium text-[var(--color-text)]">
//                         Location
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="City / State"
//                         className={inputBase}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="min-w-0">
//                   <h4 className="mb-7 break-words text-[28px] font-semibold leading-tight tracking-tight text-[var(--color-text)] sm:mb-10 sm:text-2xl">
//                     <span className="mr-2 text-[var(--color-primary)]">
//                       02.
//                     </span>
//                     Requirement Details
//                   </h4>

//                   <div className="grid gap-x-8 gap-y-8 md:grid-cols-2">
//                     <div className="min-w-0">
//                       <label className="mb-3 block break-words text-sm font-medium text-[var(--color-text)]">
//                         Requirement Type
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Networking, Server, Storage, Security, UPS, AMC"
//                         className={inputBase}
//                       />
//                     </div>

//                     <div className="min-w-0">
//                       <label className="mb-3 block break-words text-sm font-medium text-[var(--color-text)]">
//                         Project Timeline
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Immediate, 1 month, 3 months"
//                         className={inputBase}
//                       />
//                     </div>

//                     <div className="min-w-0">
//                       <label className="mb-3 block break-words text-sm font-medium text-[var(--color-text)]">
//                         Estimated Budget
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Your approximate project budget"
//                         className={inputBase}
//                       />
//                     </div>

//                     <div className="min-w-0">
//                       <label className="mb-3 block break-words text-sm font-medium text-[var(--color-text)]">
//                         Preferred Contact Method
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Phone, Email, Meeting"
//                         className={inputBase}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="min-w-0">
//                   <h4 className="mb-7 break-words text-[28px] font-semibold leading-tight tracking-tight text-[var(--color-text)] sm:mb-10 sm:text-2xl">
//                     <span className="mr-2 text-[var(--color-primary)]">
//                       03.
//                     </span>
//                     Tell Us About Your Requirement
//                   </h4>

//                   <div className="space-y-8">
//                     <div className="min-w-0">
//                       <label className="mb-3 block break-words text-sm font-medium text-[var(--color-text)]">
//                         Project / Requirement Description
//                       </label>
//                       <textarea
//                         rows={6}
//                         placeholder="Share your requirement, project scope, products, services or support needs."
//                         className="w-full min-w-0 resize-none border-0 border-b border-[var(--color-border)] bg-transparent px-0 pb-3 pt-2 text-sm leading-6 text-[var(--color-text)] outline-none placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:ring-0"
//                       />
//                     </div>

//                     <div className="flex min-w-0 flex-col gap-4 rounded-2xl border border-dashed border-[var(--color-border-soft)] px-4 py-4 sm:px-5 sm:py-5">
//                       <div className="flex min-w-0 items-start gap-3 text-sm text-[var(--color-text-soft)]">
//                         <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand-50)] text-[var(--color-primary)]">
//                           <i className="fas fa-paperclip" />
//                         </span>

//                         <div className="min-w-0">
//                           <label
//                             htmlFor="rfq-file"
//                             className="block cursor-pointer break-words font-medium text-[var(--color-text)]"
//                           >
//                             Attach RFQ, BOQ or supporting file
//                           </label>
//                           <p className="mt-1 break-words text-xs text-[var(--color-text-muted)]">
//                             up to 20MB
//                           </p>
//                         </div>
//                       </div>

//                       <input
//                         id="rfq-file"
//                         type="file"
//                         className="block w-full min-w-0 text-sm text-[var(--color-text-soft)] file:mr-3 file:rounded-full file:border-0 file:bg-[var(--brand-50)] file:px-4 file:py-2 file:text-sm file:font-medium file:text-[var(--color-primary)]"
//                       />
//                     </div>

//                     <button
//                       type="submit"
//                       className="inline-flex min-h-[56px] w-full items-center justify-center rounded-full border border-[var(--color-primary)] px-6 text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-primary)] hover:text-[var(--color-text-inverse)]"
//                     >
//                       Send Inquiry
//                     </button>

//                     <div className="h-12 sm:h-6" />
//                   </div>
//                 </div>
//               </form>
//             </div>

//             <aside className="min-w-0 lg:col-span-4 xl:col-span-3 xl:col-start-10">
//               <div className="space-y-10">
//                 {contactCards.map((card, index) => (
//                   <div key={index} className="min-w-0">
//                     <h5 className="mb-5 break-words text-lg font-semibold text-[var(--color-text)]">
//                       {card.title}
//                     </h5>
//                     {card.text ? (
//                       <p className="break-words text-sm leading-7 text-[var(--color-text-soft)]">
//                         {card.text}
//                       </p>
//                     ) : (
//                       <div className="min-w-0 break-words text-sm leading-7 text-[var(--color-text-soft)]">
//                         {card.content}
//                       </div>
//                     )}
//                     {index !== contactCards.length - 1 && (
//                       <div className="mt-10 h-px w-full bg-[var(--color-border-soft)]" />
//                     )}
//                   </div>
//                 ))}

//                 <div className="min-w-0">
//                   <h5 className="mb-5 break-words text-lg font-semibold text-[var(--color-text)]">
//                     Business Hours
//                   </h5>
//                   <p className="mb-2 break-words text-sm text-[var(--color-text-soft)]">
//                     Monday to Saturday
//                   </p>
//                   <p className="break-words text-sm text-[var(--color-text-soft)]">
//                     10:00 AM to 6:30 PM
//                   </p>
//                 </div>

//                 <div className="h-px w-full bg-[var(--color-border-soft)]" />

//                 <div className="space-y-4 min-w-0">
//                   <Link
//                     href="/about"
//                     className="inline-flex max-w-full items-start gap-2 break-words text-sm font-medium text-[var(--color-text)] transition hover:text-[var(--color-primary)]"
//                   >
//                     <span className="break-words">About Resseaux Tech</span>
//                     <i className="fas fa-arrow-right mt-1 shrink-0 text-xs" />
//                   </Link>

//                   <br />

//                   <Link
//                     href="/services"
//                     className="inline-flex max-w-full items-start gap-2 break-words text-sm font-medium text-[var(--color-text)] transition hover:text-[var(--color-primary)]"
//                   >
//                     <span className="break-words">Explore Services</span>
//                     <i className="fas fa-arrow-right mt-1 shrink-0 text-xs" />
//                   </Link>
//                 </div>
//               </div>
//             </aside>
//           </div>
//         </div>
//       </section>

//       <section className="relative overflow-hidden overflow-x-hidden">
//         <div className="absolute left-3 right-3 top-3 z-10 rounded-2xl bg-white/95 px-4 py-3 shadow-lg sm:pointer-events-none sm:left-6 sm:right-auto sm:top-6">
//           <p className="break-words text-sm font-semibold text-slate-900">
//             Resseaux Tech – Registered Office
//           </p>
//           <p className="mt-1 break-words text-xs leading-5 text-slate-600">
//             C-2, Soami Nagar South, New Delhi - 110017
//           </p>
//         </div>

//         <iframe
//           src="https://www.google.com/maps?q=28.540444,77.224778&z=18&output=embed"
//           className="h-[420px] w-full border-0 sm:h-[500px]"
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//           allowFullScreen
//           title="Resseaux Tech registered office map"
//         />
//       </section>

//       <section className="overflow-x-hidden bg-[var(--color-surface)] py-14 sm:py-16 lg:py-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
//             {infoBlocks.map((item) => (
//               <div key={item.title} className="min-w-0">
//                 <h4 className="mb-4 break-words text-2xl font-semibold text-[var(--color-text)]">
//                   {item.title}
//                 </h4>
//                 <h5 className="mb-4 break-words text-base font-semibold text-[var(--color-text)]">
//                   {item.subtitle}
//                 </h5>
//                 <p className="mb-6 max-w-sm break-words text-sm leading-7 text-[var(--color-text-soft)]">
//                   {item.text}
//                 </p>
//                 <div className="mb-6 h-px w-full max-w-sm bg-[var(--color-border-soft)]" />
//                 <h6 className="mb-3 break-words text-sm font-medium leading-6 text-[var(--color-text)]">
//                   <span className="mr-2 text-[var(--color-primary)]">
//                     {item.meta1}
//                   </span>
//                   {item.value1}
//                 </h6>
//                 <h6 className="break-words text-sm font-medium leading-6 text-[var(--color-text)]">
//                   <span className="mr-2 text-[var(--color-primary)]">
//                     {item.meta2}
//                   </span>
//                   {item.value2}
//                 </h6>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";

import { useState } from "react";
import PageBanner from "@/components/common/PageBanner";
import Link from "next/link";

const contactCards = [
  {
    title: "Get in Touch",
    text: "Contact Resseaux Tech for enterprise IT infrastructure, system integration, networking, security, power backup and support requirements.",
  },
  {
    title: "Office Address",
    content: (
      <p className="break-words">
        T-19A, Near Krishna Mandir,
        <br />
        Khirki Extension, Malviya Nagar,
        <br />
        New Delhi - 110017
      </p>
    ),
  },
  {
    title: "Contact Details",
    content: (
      <div className="min-w-0 break-words">
        <p className="mb-2">
          Phone:{" "}
          <a
            href="tel:01141616233"
            className="break-all text-[var(--color-primary)] hover:underline"
          >
            011-41616233
          </a>
        </p>
        <p className="mb-2">
          Email:{" "}
          <a
            href="mailto:info@resseauxtech.com"
            className="break-all text-[var(--color-primary)] hover:underline"
          >
            info@resseauxtech.com
          </a>
        </p>
        <p>
          Alternate:{" "}
          <a
            href="mailto:ramesh@resseauxtech.com"
            className="break-all text-[var(--color-primary)] hover:underline"
          >
            ramesh@resseauxtech.com
          </a>
        </p>
      </div>
    ),
  },
];

const infoBlocks = [
  {
    title: "Registered Office",
    subtitle: "New Delhi",
    text: "T-19A, Near Krishna Mandir, Khirki Extension, Malviya Nagar, New Delhi - 110017.",
    meta1: "Phone",
    value1: "011-41616233",
    meta2: "Email",
    value2: "info@resseauxtech.com",
  },
  // {
  //   title: "Sales Inquiries",
  //   subtitle: "Enterprise & Projects",
  //   text: "T-19A, Near Krishna Mandir, Khirki Extension, Malviya Nagar, New Delhi - 110017.",
  //   meta1: "Email",
  //   value1: "info@resseauxtech.com",
  //   meta2: "Support",
  //   value2: "Business response during working hours",
  // },
  {
    title: "General Assistance",
    subtitle: "Support & Coordination",
    text: "Share your BOQ, RFQ, implementation need or infrastructure support request for further coordination.",
    meta1: "Mail",
    value1: "info@resseauxtech.com",
    meta2: "Response",
    value2: "Business response during working hours",
  },
];

const inputBase =
  "w-full min-w-0 border-0 border-b border-[var(--color-border)] bg-transparent px-0 pb-3 pt-2 text-sm leading-6 text-[var(--color-text)] outline-none placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:ring-0";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;

    setSubmitting(true);
    setSuccessMsg("");
    setErrorMsg("");

    const formData = new FormData(form);

    const payload = {
      fullName: formData.get("fullName") ?? "",
      company: formData.get("company") ?? "",
      email: formData.get("email") ?? "",
      phone: formData.get("phone") ?? "",
      department: formData.get("department") ?? "",
      location: formData.get("location") ?? "",
      requirementType: formData.get("requirementType") ?? "",
      projectTimeline: formData.get("projectTimeline") ?? "",
      estimatedBudget: formData.get("estimatedBudget") ?? "",
      preferredContact: formData.get("preferredContact") ?? "",
      description: formData.get("description") ?? "",
      website: formData.get("website") ?? "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.message || "Failed to send inquiry");
      }

      setSuccessMsg("Your inquiry has been sent successfully.");
      form.reset();
    } catch (err) {
      setErrorMsg(
        err?.message ||
          "There was a problem submitting your inquiry. Please try again or contact us directly by email.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <PageBanner
        pageName="Contact Us"
        pageTitle="Talk to Resseaux Tech about your infrastructure requirements"
      />

      <section className="overflow-x-hidden bg-[var(--color-surface-soft)] py-14 sm:py-16 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="min-w-0 lg:col-span-8">
              <form
                className="space-y-12 sm:space-y-14"
                onSubmit={handleSubmit}
              >
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    autoComplete="off"
                    tabIndex={-1}
                  />
                </div>

                <div className="min-w-0">
                  <h4 className="mb-7 break-words text-[28px] font-semibold leading-tight tracking-tight text-[var(--color-text)] sm:mb-10 sm:text-2xl">
                    <span className="mr-2 text-[var(--color-primary)]">
                      01.
                    </span>
                    Your Details
                  </h4>

                  <div className="grid gap-x-8 gap-y-8 md:grid-cols-2">
                    <div className="min-w-0">
                      <label className="mb-3 block break-words text-sm font-medium text-[var(--color-text)]">
                        Full Name<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Enter your full name"
                        required
                        className={inputBase}
                      />
                    </div>

                    <div className="min-w-0">
                      <label className="mb-3 block break-words text-sm font-medium text-[var(--color-text)]">
                        Company / Organisation
                      </label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Your company or department name"
                        className={inputBase}
                      />
                    </div>

                    <div className="min-w-0">
                      <label className="mb-3 block break-words text-sm font-medium text-[var(--color-text)]">
                        Email Address<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="name@company.com"
                        required
                        className={inputBase}
                      />
                    </div>

                    <div className="min-w-0">
                      <label className="mb-3 block break-words text-sm font-medium text-[var(--color-text)]">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone"
                        placeholder="Enter your phone number"
                        className={inputBase}
                      />
                    </div>

                    <div className="min-w-0">
                      <label className="mb-3 block break-words text-sm font-medium text-[var(--color-text)]">
                        Department / Role
                      </label>
                      <input
                        type="text"
                        name="department"
                        placeholder="IT, Procurement, Admin, Project Team"
                        className={inputBase}
                      />
                    </div>

                    <div className="min-w-0">
                      <label className="mb-3 block break-words text-sm font-medium text-[var(--color-text)]">
                        Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        placeholder="City / State"
                        className={inputBase}
                      />
                    </div>
                  </div>
                </div>

                <div className="min-w-0">
                  <h4 className="mb-7 break-words text-[28px] font-semibold leading-tight tracking-tight text-[var(--color-text)] sm:mb-10 sm:text-2xl">
                    <span className="mr-2 text-[var(--color-primary)]">
                      02.
                    </span>
                    Requirement Details
                  </h4>

                  <div className="grid gap-x-8 gap-y-8 md:grid-cols-2">
                    <div className="min-w-0">
                      <label className="mb-3 block break-words text-sm font-medium text-[var(--color-text)]">
                        Requirement Type<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="requirementType"
                        placeholder="Networking, Server, Storage, Security, UPS, AMC"
                        required
                        className={inputBase}
                      />
                    </div>

                    <div className="min-w-0">
                      <label className="mb-3 block break-words text-sm font-medium text-[var(--color-text)]">
                        Project Timeline
                      </label>
                      <input
                        type="text"
                        name="projectTimeline"
                        placeholder="Immediate, 1 month, 3 months"
                        className={inputBase}
                      />
                    </div>

                    <div className="min-w-0">
                      <label className="mb-3 block break-words text-sm font-medium text-[var(--color-text)]">
                        Estimated Budget
                      </label>
                      <input
                        type="text"
                        name="estimatedBudget"
                        placeholder="Your approximate project budget"
                        className={inputBase}
                      />
                    </div>

                    <div className="min-w-0">
                      <label className="mb-3 block break-words text-sm font-medium text-[var(--color-text)]">
                        Preferred Contact Method
                      </label>
                      <input
                        type="text"
                        name="preferredContact"
                        placeholder="Phone, Email, Meeting"
                        className={inputBase}
                      />
                    </div>
                  </div>
                </div>

                <div className="min-w-0">
                  <h4 className="mb-7 break-words text-[28px] font-semibold leading-tight tracking-tight text-[var(--color-text)] sm:mb-10 sm:text-2xl">
                    <span className="mr-2 text-[var(--color-primary)]">
                      03.
                    </span>
                    Tell Us About Your Requirement
                  </h4>

                  <div className="space-y-8">
                    <div className="min-w-0">
                      <label className="mb-3 block break-words text-sm font-medium text-[var(--color-text)]">
                        Project / Requirement Description
                        <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={6}
                        name="description"
                        required
                        placeholder="Share your requirement, project scope, products, services or support needs."
                        className="w-full min-w-0 resize-none border-0 border-b border-[var(--color-border)] bg-transparent px-0 pb-3 pt-2 text-sm leading-6 text-[var(--color-text)] outline-none placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:ring-0"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex min-h-[56px] w-full items-center justify-center rounded-full border border-[var(--color-primary)] px-6 text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-primary)] hover:text-[var(--color-text-inverse)] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {submitting ? "Sending..." : "Send Inquiry"}
                    </button>

                    {successMsg && (
                      <p className="text-xs leading-6 text-[var(--color-success)]">
                        {successMsg}
                      </p>
                    )}

                    {errorMsg && (
                      <p className="text-xs leading-6 text-[var(--color-error)]">
                        {errorMsg}
                      </p>
                    )}

                    <p className="text-xs leading-6 text-[var(--color-text-muted)]">
                      If the form does not work for any reason, email us
                      directly at{" "}
                      <a
                        href="mailto:info@resseauxtech.com"
                        className="text-[var(--color-primary)] hover:underline"
                      >
                        info@resseauxtech.com
                      </a>
                      .
                    </p>

                    <div className="h-12 sm:h-6" />
                  </div>
                </div>
              </form>
            </div>

            <aside className="min-w-0 lg:col-span-4 xl:col-span-3 xl:col-start-10">
              <div className="space-y-10">
                {contactCards.map((card, index) => (
                  <div key={index} className="min-w-0">
                    <h5 className="mb-5 break-words text-lg font-semibold text-[var(--color-text)]">
                      {card.title}
                    </h5>
                    {card.text ? (
                      <p className="break-words text-sm leading-7 text-[var(--color-text-soft)]">
                        {card.text}
                      </p>
                    ) : (
                      <div className="min-w-0 break-words text-sm leading-7 text-[var(--color-text-soft)]">
                        {card.content}
                      </div>
                    )}
                    {index !== contactCards.length - 1 && (
                      <div className="mt-10 h-px w-full bg-[var(--color-border-soft)]" />
                    )}
                  </div>
                ))}

                <div className="min-w-0">
                  <h5 className="mb-5 break-words text-lg font-semibold text-[var(--color-text)]">
                    Business Hours
                  </h5>
                  <p className="mb-2 break-words text-sm text-[var(--color-text-soft)]">
                    Monday to Saturday
                  </p>
                  <p className="break-words text-sm text-[var(--color-text-soft)]">
                    10:00 AM to 6:30 PM
                  </p>
                </div>

                <div className="h-px w-full bg-[var(--color-border-soft)]" />

                <div className="space-y-4 min-w-0">
                  <Link
                    href="/about"
                    className="inline-flex max-w-full items-start gap-2 break-words text-sm font-medium text-[var(--color-text)] transition hover:text-[var(--color-primary)]"
                  >
                    <span className="break-words">About Resseaux Tech</span>
                    <i className="fas fa-arrow-right mt-1 shrink-0 text-xs" />
                  </Link>

                  <br />

                  <Link
                    href="/services"
                    className="inline-flex max-w-full items-start gap-2 break-words text-sm font-medium text-[var(--color-text)] transition hover:text-[var(--color-primary)]"
                  >
                    <span className="break-words">Explore Services</span>
                    <i className="fas fa-arrow-right mt-1 shrink-0 text-xs" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden overflow-x-hidden">
        <div className="absolute left-3 right-3 top-3 z-10 rounded-2xl bg-white/95 px-4 py-3 shadow-lg sm:pointer-events-none sm:left-6 sm:right-auto sm:top-6">
          <p className="break-words text-sm font-semibold text-slate-900">
            Resseaux Tech – Registered Office
          </p>
          <p className="mt-1 break-words text-xs leading-5 text-slate-600">
            T19 A, near Krishna Mandir, Khirki Extension, Malviya Nagar, New
            Delhi - 110017
          </p>
        </div>

        <iframe
          src="https://www.google.com/maps?q=28.5336875,77.2146875&z=18&output=embed"
          className="h-[420px] w-full border-0 sm:h-[500px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          title="Resseaux Tech registered office map"
        />
      </section>

      <section className="overflow-x-hidden bg-[var(--color-surface)] py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {infoBlocks.map((item) => (
              <div key={item.title} className="min-w-0">
                <h4 className="mb-4 break-words text-2xl font-semibold text-[var(--color-text)]">
                  {item.title}
                </h4>
                <h5 className="mb-4 break-words text-base font-semibold text-[var(--color-text)]">
                  {item.subtitle}
                </h5>
                <p className="mb-6 max-w-sm break-words text-sm leading-7 text-[var(--color-text-soft)]">
                  {item.text}
                </p>
                <div className="mb-6 h-px w-full max-w-sm bg-[var(--color-border-soft)]" />
                <h6 className="mb-3 break-words text-sm font-medium leading-6 text-[var(--color-text)]">
                  <span className="mr-2 text-[var(--color-primary)]">
                    {item.meta1}
                  </span>
                  {item.value1}
                </h6>
                <h6 className="break-words text-sm font-medium leading-6 text-[var(--color-text)]">
                  <span className="mr-2 text-[var(--color-primary)]">
                    {item.meta2}
                  </span>
                  {item.value2}
                </h6>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
