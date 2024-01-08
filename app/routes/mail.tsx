import { Mail as MailComp } from "../components/mail/mail";
import { accounts, mails } from "../components/mail/data/data";

export default function Mail() {
  return (
    <div className=" flex-col md:flex">
      arm
      <MailComp
        accounts={accounts}
        mails={mails}
        defaultLayout={[20, 40, 40]}
        defaultCollapsed={false}
        navCollapsedSize={4}
      />
    </div>
  );
}
