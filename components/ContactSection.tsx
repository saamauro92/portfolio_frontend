/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Columns, Form, Section, Icon, Button } from "react-bulma-components";
const { Column } = Columns;

const ContactSection = (): JSX.Element => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <Section mt={6} mb={6}>
        <Columns>
          <Column desktop={{ size: 8 }} mobile={{ size: 12 }}>
            <form>
              <Form.Field>
                <Form.Label className="has-text-white">Name</Form.Label>
                <Form.Control>
                  <Form.Input
                    color="danger"
                    value={name}
                    onChange={(e) => {
                      return setName(e.target.value);
                    }}
                  />

                  <Icon align="right" size="small">
                    <i className="fas fa-exclamation-triangle" />
                  </Icon>
                </Form.Control>
                <Form.Help color="danger has-text-white">
                  This name is invalid
                </Form.Help>
              </Form.Field>

              <Form.Field>
                <Form.Label className="has-text-white">Email</Form.Label>
                <Form.Control>
                  <Form.Input
                    color="danger"
                    value={email}
                    onChange={(e) => {
                      return setEmail(e.target.value);
                    }}
                  />

                  <Icon align="right" size="small">
                    <i className="fas fa-exclamation-triangle" />
                  </Icon>
                </Form.Control>
                <Form.Help color="danger has-text-white">
                  This email is invalid
                </Form.Help>
              </Form.Field>

              <Form.Field>
                <Form.Label className="has-text-white">Message</Form.Label>
                <Form.Textarea
                  value={message}
                  onChange={(e) => {
                    return setMessage(e.target.value);
                  }}
                />
              </Form.Field>

              <Form.Field kind="group">
                <Form.Control>
                  <Button color="success">Send Message</Button>
                </Form.Control>
              </Form.Field>
            </form>
          </Column>
        </Columns>
      </Section>
    </>
  );
};

export default ContactSection;
