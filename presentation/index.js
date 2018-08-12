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
  CodePane,
  Link,
  Fill,
  Fit,
  Layout
} from "spectacle";
import CodeSlide from "spectacle-code-slide";
// Import theme
import createTheme from "spectacle/lib/themes/default";
import profile from "../assets/profile.jpg";
// Require CSS
require("normalize.css");

const images = {
  reactLogo: require("../assets/react-logo.png"),
  infinty: require("../assets/infinity.gif"),

  // routerLogo: require('../assets/react-router-logo.png'),
  // spectacleLogo: require('../assets/formidable-logo.svg'),
  twitterLogo: require("../assets/twitter-logo.svg"),
  // jestLogo: require('../assets/jest.svg'),
  githubLogo: require("../assets/github.svg")
  // camera: require('../assets/camera.svg'),
};

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "#CECECE",
    grayBg: "#37474F",
    whitesmoke: "whitesmoke",
    dark: "#111"
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
        {/* PRESENTATION SLIDE */}
        <Slide bgColor="dark">
          <Image width="20%" src={images.reactLogo} />
          <Heading
            size={1}
            fit
            caps
            lineHeight={1}
            color="whitesmoke"
            textFont="primary"
          >
            React 16
          </Heading>
          <Text size={2} textColor="gray">
            Ao infinito e além
          </Text>
          <Image width="20%" src={images.infinty} />
          {/* <Layout style={{ marginTop: 100, justifyContent: "space-between" }}>
            <Fill>
              <Text textColor="accent" style={{ textAlign: "left" }}>
                Sibelius Seraphini
              </Text>
            </Fill>
            <Fill>
              <Link href="https://github.com/sibelius" target="_blank">
                <Text textColor="accent" style={{ textAlign: "center" }}>
                  <Image
                    src={images.githubLogo}
                    style={{ height: 25, margin: "0 0 10 0" }}
                  />
                  sibelius
                </Text>
              </Link>
            </Fill>
            <Fill>
              <Link href="https://twitter.com/sseraphini" target="_blank">
                <Text textColor="accent" style={{ textAlign: "right" }}>
                  <Image
                    src={images.twitterLogo}
                    style={{ height: 25, margin: "0 0 10 0" }}
                  />
                  @sseraphini
                </Text>
              </Link>
            </Fill>
          </Layout> */}
        </Slide>

        {/* Slide pessoal */}
        <Slide transition={["zoom"]} bgColor="primary">
          <Layout>
            <Fill>
              <Image
                height={300}
                width={300}
                src={profile}
                fit
                size={1}
                style={{ borderRadius: "100%" }}
              />
            </Fill>
            <Fill>
              <Heading size={1} fit lineHeight={1} textColor="tertiary">
                $ whoami
              </Heading>
              <Heading size={2} fit caps lineHeight={1} textColor="secondary">
                David Nascimento
              </Heading>
              <List style={{ fontSize: "10px" }}>
                <ListItem>Take - BLiP</ListItem>
                <ListItem>Front End</ListItem>
              </List>
            </Fill>
          </Layout>
          <Link href="https://github.com/sibelius" target="_blank">
            <Text textColor="accent" style={{ textAlign: "center" }}>
              <Image
                src={images.githubLogo}
                style={{ height: 50, margin: "0 0 10 0" }}
              />
              @davidpn11
            </Text>
          </Link>
        </Slide>
        <Slide transition={["zoom"]} bgColor="grayBg">
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/code/code.example")}
          />
        </Slide>
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
          <Heading size={6} textColor="primary" caps>
            Introdução à react
          </Heading>
        </Slide>
        <CodeSlide
          bgColor="tertiary"
          transition={[]}
          lang="jsx"
          code={require("raw-loader!../assets/code/code.example")}
          ranges={[
            { loc: [0, 10], title: "Component React" },
            { loc: [2, 3], title: "Utiliza ES6 classes" },
            { loc: [3, 4], note: "Precisa de pelo menos um método render" }
          ]}
        />
      </Deck>
    );
  }
}
