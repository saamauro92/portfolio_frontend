/* eslint-disable @next/next/no-img-element */
import React, { useState, useReducer } from "react";
import {
  Columns,
  Form,
  Section,
  Button,
  Block,
  Heading,
} from "react-bulma-components";
import emailjs from "emailjs-com";

type DataTypes = {
  [x: string]: any;
};

const service = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE as string;
const template = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE as string;
const userId = process.env.NEXT_PUBLIC_EMAIL_JS_USER as string | undefined;

const initialState = {
  name: "",
  email: "",
  message: "",
};

function reducer(state: DataTypes, action: any) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.value };
    case "email":
      return { ...state, email: action.value };
    case "message":
      return { ...state, message: action.value };
    default:
      throw new Error();
  }
}

const { Label, Help, Control, Input, Textarea, Field } = Form;
const { Column } = Columns;

const ContactSection = (): JSX.Element => {
  const [formState, dispatch] = useReducer(reducer, initialState);
  const { name, email, message } = formState as DataTypes;
  const [showFormErr, setShowFormErr] = useState(false);
  const [showFormOrSuccess, setShowFormOrSuccess] = useState(false);
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoadingSpinner(true);
    const params = {
      ...formState,
    };

    if (name === "" || email === "" || message === "") {
      setShowFormErr(true);
      return;
    }

    emailjs.send(service, template, params, userId).then(
      ({ status }) => {
        if (status === 200) {
          setShowFormOrSuccess(true);
        } else {
          console.log(" Opps, something went wrong, please try again!");
        }
      },
      (err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        console.log(" Opps, something went wrong, please try again!");
      }
    );
  };

  return (
    <>
      <Section mt={6} mb={6}>
        {showFormOrSuccess ? (
          <Columns pb={6} mb={6}>
            <Column desktop={{ size: 8 }} mobile={{ size: 12 }} pb={6} mb={6}>
              <Block>
                <Heading subtitle className="has-text-white">
                  Thank you! Your message has been sent.
                </Heading>
              </Block>
            </Column>
          </Columns>
        ) : (
          <Columns>
            <Column desktop={{ size: 8 }} mobile={{ size: 12 }}>
              <form onSubmit={handleOnSubmit}>
                <Field>
                  <Label className="has-text-white" htmlFor="contact-form-name">
                    Name
                  </Label>
                  <Control>
                    <Input
                      id="contact-form-name"
                      type="text"
                      name="user_name"
                      value={name}
                      onChange={(e) =>
                        dispatch({ type: "name", value: e.target.value })
                      }
                      maxLength={40}
                      minLength={2}
                      required
                    ></Input>
                  </Control>
                </Field>
                <Field>
                  <Control>
                    <Label
                      className="has-text-white"
                      htmlFor="contact-form-email"
                    >
                      Email
                    </Label>
                    <Input
                      id="contact-form-email"
                      type="email"
                      name="user_email"
                      value={email}
                      onChange={(e) =>
                        dispatch({ type: "email", value: e.target.value })
                      }
                      required
                    ></Input>
                  </Control>
                </Field>
                <Field>
                  <Control>
                    <Label
                      className="has-text-white"
                      htmlFor="contact-form-message"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="contact-form-message"
                      name="message"
                      value={message}
                      onChange={(e) =>
                        dispatch({ type: "message", value: e.target.value })
                      }
                      minLength={5}
                      required
                    >
                      {" "}
                    </Textarea>
                  </Control>
                  <Help>
                    {" "}
                    {showFormErr ? (
                      <p className="has-text-white ">
                        Please fill in all three input boxes to send a message
                      </p>
                    ) : null}
                  </Help>
                </Field>
                <Field>
                  <Control>
                    <Button
                      color="success"
                      type="submit"
                      className={loadingSpinner ? "is-loading" : ""}
                    >
                      SEND
                    </Button>
                  </Control>
                </Field>
              </form>
            </Column>
          </Columns>
        )}
      </Section>
    </>
  );
};

export default ContactSection;
