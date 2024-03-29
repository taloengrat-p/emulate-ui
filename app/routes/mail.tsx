import { Mail as MailComp } from "../components/mail/mail";
import { accounts, mails } from "../components/mail/data/data";

export default function Mail() {
  return (
    <div className=" flex-col md:flex">
      <MailComp
        accounts={accounts}
        mails={mails}
        defaultLayout={[20, 40, 40]}
        defaultCollapsed={false}
        navCollapsedSize={2.32}
      />
    </div>
  );
}
