import Head from 'next/head';
import React from 'react';

import {
  Button,
  Container,
  Form,
  InputGroup,
  Spinner,
  Stack,
  Nav,
  Tab,
  Tabs,
} from 'react-bootstrap';

import Packages from './packages';
import Templates from './templates';
import FormA from './formA';

export default function Main() {
  const [currentTab, setCurrentTab] = React.useState('packages');
  return (
    <>
      <Head>
        <title>Main S10 Page</title>
        <meta name="description" content="S10 Main Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        style={{
          height: '100vh',
        }}
      >
        <Container
          style={{
            margin: '2em',
            border: '1px solid lightgray',
            borderRadius: '15px',
            height: '90vh',
          }}
        >
          <Container
          >
            <Container style={{
              margin: '1em 0'
            }}>
              <h2>S10 Document Factory</h2>
            </Container>
            <Tabs
              defaultActiveKey={currentTab}
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="packages" title="Packages">
                <Packages />
              </Tab>
              <Tab eventKey="templates" title="Templates">
                <Templates />
              </Tab>
              <Tab eventKey="formA" title="Form A">
                <FormA />
              </Tab>
            </Tabs>
          </Container>
        </Container>
      </Container>
    </>
  );
}
