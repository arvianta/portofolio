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
        Hi, I&apos;m Rayhan! An Informatics graduate from the Sepuluh Nopember
        Institute of Technology, Indonesia, passionate about back-end engineering,
        cloud computing, and MLOps.
      </Text>
      <Text>
        I focus on building scalable APIs, data-driven applications, and reliable
        machine learning pipelines—always aiming to deliver solutions that solve
        real-world problems efficiently and at scale.
      </Text>
      <Text>
        I&apos;m always eager to grow—whether through industry projects,
        internships, or community initiatives. I&apos;m also a proud graduate of{" "}
        <Link
          href="https://grow.google/intl/id_id/bangkit/?tab=cloud-computing"
          isExternal
        >
          Google Bangkit
        </Link>{" "}
        as a{" "}
        <strong style={{ color: secondary }}>Cloud Computing Cohort</strong>.
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
