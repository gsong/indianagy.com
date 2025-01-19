import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <form action="https://api.web3forms.com/submit" method="POST">
      <input
        type="hidden"
        name="access_key"
        value="acea1c09-a201-43b8-bdc5-d1648047b50d"
      />

      <input type="hidden" name="subject" value="Website Contact Submission" />

      <input type="hidden" name="from_name" value="Client Name" />

      <input
        type="hidden"
        name="redirect"
        value="https://web3forms.com/success"
      />

      <input
        type="checkbox"
        name="botcheck"
        id=""
        style={{ display: "none" }}
      />

      <label>
        Email:
        <Input type="email" name="email" required />
      </label>

      <label>
        Name:
        <Input type="text" name="First Name" required />
      </label>

      <label>
        Message:
        <Textarea name="message" cols={30} rows={10} required />
      </label>

      <Button>Submit Form</Button>
    </form>
  );
};
