import Head from 'next/head'
import {Button, Container, Form, InputGroup, Spinner, Stack} from "react-bootstrap";
import React from "react";
import {ChevronRight} from "react-bootstrap-icons";
import {nameRegex} from "@/lib/name";
import favIcon from "../../public/favicon.ico";
import Image from "next/image";

export default function Home() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isValid, setIsValid] = React.useState(false);
  const [name, setName] = React.useState("");
  const [status, setStatus] = React.useState("");

  React.useEffect(() => {
    const matches = name.match(nameRegex);
    setIsValid(!(matches === null));
  }, [name]);

  const handleSubmit = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/hello', {
        method: 'post',
        body: JSON.stringify({
          name: name,
        }),
      });
      const response = await res.json();
      setStatus(response.greeting ?? response.message);
    } catch (err) {
      setStatus(`Error: ${err}`);
    } finally {
      setIsLoading(false);
    }
  }, [name]);

  return (
    <>
      <Head>
        <title>👋🏻 Hello World</title>
        <meta name="description" content="A Hello World greeter written in NextJS"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <Container
          style={{height: '100vh'}}
        >
          <Stack>
            <Stack gap={5} className="align-content-center py-5">
              <Stack
                style={{alignItems: 'center'}}
              >
                <pre style={{fontSize: 72}}>👋🏻</pre>
                <h1>Hello World!</h1>
                <h6>a simple greeter app in NextJS</h6>
              </Stack>
              <Stack>
                <Form.Label>
                  Name
                </Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    autoComplete="given-name"
                    placeholder="What's your name?"
                    isValid={isValid}
                    value={name}
                    onChange={e => setName(e.currentTarget.value)}
                  />
                  <Button
                    variant="primary"
                    disabled={isLoading || !isValid}
                    onClick={handleSubmit}
                  >
                    {isLoading ? <>Greet <Spinner size="sm"/></> : <>Greet <ChevronRight/></>}
                  </Button>
                </InputGroup>
                <Form.Text>
                  {isValid ? <>&nbsp;</> : "Please enter a valid name."}
                </Form.Text>
              </Stack>
              <Stack>
                <Form.Label>
                  Output Greeting
                </Form.Label>
                <Form.Control
                  as="textarea"
                  disabled
                  readOnly
                  value={`${status || "Enter a name and press \"Greet\"!"}\n`}
                />
              </Stack>
            </Stack>
            <Stack direction="horizontal" gap={1}>
              Built with <Image alt="NextJS" src={favIcon}/>
            </Stack>
          </Stack>
        </Container>
      </main>
    </>
  )
}
