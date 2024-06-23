import {
  GridItem,
  Image,
  Link,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import { colors } from "../../theme";
import SectionContainer from "../SectionContainer";

const Bio = ({ secondary }) => (
  <GridItem>
    <VStack m="auto" w="75%" spacing="12px" pt="5%">
      <Text>
        Hi, I&apos;m Rayhan! A computer science student at the Sepuluh Nopember
        Institute of Technology, Indonesia. I&apos;m currently working on
        various projects, mostly focusing on back-end development.
      </Text>
      <Text>
        I&apos;m keen on creating optimal & scalable APIs that could solve any
        real world problems. I always try to keep up with the latest
        technologies, and recently became a graduate from{" "}
        <Link
          href="https://grow.google/intl/id_id/bangkit/?tab=cloud-computing"
          isExternal
        >
          Google Bangkit
        </Link>{" "}
        as a{" "}
        <strong style={{ color: secondary }}>
          Cloud Computing Cohort
        </strong>
        .
      </Text>
    </VStack>
  </GridItem>
);

const Headshot = () => (
  <GridItem>
    <Image
      m="auto"
      src="/rayhan.jpg"
      alt="Rayhan Arvianta"
      zIndex={1}
      className="image"
      boxSize="300px"
      objectFit="cover"
      onClick={() => {
        window.open("https://www.linkedin.com/in/rayhanarvianta/");
      }}
    />
  </GridItem>
);

export default function About() {
  const shouldAlternate = useBreakpointValue({ base: false, md: true });
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );
  return (
    <SectionContainer
      id="about"
      name="about"
      headerMt="-5%"
      headerText="About Me"
      useHeaderStyle
    >
      <SimpleGrid
        pl="10%"
        pt="5%"
        pr="10%"
        spacing={12}
        columns={[1, null, 2]}
        justifyContent="center"
      >
        {shouldAlternate ? <Bio secondary={secondary} /> : <Headshot />}
        {shouldAlternate ? <Headshot /> : <Bio secondary={secondary} />}
      </SimpleGrid>
    </SectionContainer>
  );
}
