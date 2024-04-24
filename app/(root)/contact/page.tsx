import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import React from "react";
import ContactForm from "./ContactForm";
import { Metadata } from "next";

const ContactPage = () => {
  const contactLinks = [
    {
      icon: <MdOutlineMail size={80} />,
    },
  ];

  return (
    <div className="flex flex-col justify-center my-10 items-center">
      <h1 className="text-3xl md:text-4xl font-semibold">Contact Us</h1>
      <div className="my-2">
        <p>You can contact us these places</p>
      </div>
      <div className="flex gap-4 flex-wrap items-center justify-center">
        <SocialLink href="mailto:ssisodia128@gmail.com?subject=Contacting%20You&body=Hello,%0D%0A%0D%0AI%20am%20contacting%20you%20because...">
          <MdOutlineMail />
        </SocialLink>
        <SocialLink href="https://github.com/shubhamxdd">
          <FaGithub />
        </SocialLink>
        <SocialLink href="https://telegram.me/shubhammmmmmmm">
          <FaTelegram />
        </SocialLink>
      </div>
      <div className="my-16">
        <p>Or just Fill out this form we will contact you shortly!</p>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;

interface SocialLinkProps {
  href: string;
  children: React.ReactElement;
}

const SocialLink = ({ href, children }: SocialLinkProps) => (
  <div>
    <Link href={href}>
      {React.cloneElement(children, {
        size: 70,
        className: "hover:scale-110 transition-all duration-300 cursor-pointer",
      })}
    </Link>
  </div>
);

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact us for any query or feedback",
};
