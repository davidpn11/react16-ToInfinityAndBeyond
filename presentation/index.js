// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  Image,
  Layout,
  Fit,
  Fill
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import profile from "../assets/profile.jpg";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Spectacle Boilerplate
          </Heading>
          <Layout>
            <Image
              height={300}
              width={300}
              src={profile}
              fit
              size={1}
              style={{ borderRadius: "100%" }}
            />
            <List>
              <Appear>
                <ListItem>Who am I?</ListItem>
              </Appear>
              <Appear>
                <ListItem>React - DIY</ListItem>
              </Appear>
              <Appear>
                <ListItem>React - Boilerplates</ListItem>
              </Appear>
              <Appear>
                <ListItem>React - THE boilerplate</ListItem>
              </Appear>
              <Appear>
                <ListItem>Next.js</ListItem>
              </Appear>
            </List>
          </Layout>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Spectacle Boilerplate
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Quero ver se atualiza{" "}
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Teste de Heading
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <Appear>
              <ListItem>Who am I?</ListItem>
            </Appear>
            <Appear>
              <ListItem>React - DIY</ListItem>
            </Appear>
            <Appear>
              <ListItem>React - Boilerplates</ListItem>
            </Appear>
            <Appear>
              <ListItem>React - THE boilerplate</ListItem>
            </Appear>
            <Appear>
              <ListItem>Next.js</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
        <CodeSlide
          bgColor="tertiary"
          transition={[]}
          lang="jsx"
          code={require("raw-loader!./code")}
          ranges={[
            { loc: [0, 10], title: "Walking through some code" },
            { loc: [2, 3], title: "The Beginning" },
            { loc: [4, 5], note: "Heres a note!" }
          ]}
        />
      </Deck>
    );
  }
}
