import {
  Box,
  Grid,
  Heading,
  HStack,
  Link,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { FC } from "react";
import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io";

import { BiPhoneCall, BiMailSend } from "react-icons/bi";
const Page: FC = () => {
  const { colorMode } = useColorMode();
  const cardBgColor = { light: "white", dark: "gray.900" };
  const cardColor = { light: "gray.900", dark: "white" };

  const headingNode = () => {
    return (
      <HStack spacing={4} alignItems="center">
        <Box
          bg={cardColor[colorMode]}
          color={cardBgColor[colorMode]}
          rounded="fill"
          p={1}
          w={150}
          h={104}
        >
          <Image
            src="/images/common/avatar.jpeg"
            alt="Abubakr Elghazawy"
            height={150}
            width={150}
            quality={100}
           
           
          />
        </Box>
        <Box>
          <VStack spacing={2} align="left">
            <Heading as="h1" size="xl">
             Abubakr Elghazawy
            </Heading>
            <Text>Software Developer Engineer | ReactJs | ReactNative (Expert in mobile apps, CMS, and eCommerce)</Text>
            
            <HStack spacing={2} alignItems="center">
                <Box as={BiPhoneCall} /> <Text>+20 01555504957</Text>
                <Box as={BiMailSend} /> <Text>abubakrelghazawy@gmail.com</Text>
              </HStack>
          </VStack>
        </Box>
      </HStack>
    );
  };

  const bioDescriptionNode = () => {
    return (
      <Box className="article">
        {/* <Text fontWeight="bold">
          Computer Science Engineer having interest in web-designing and
          development with an eye for detail.
        </Text>
        <Text>
          I'm also a big fan of{" "}
          <Box as="span" fontWeight="bold">
            React.js
          </Box>{" "}
          and have{" "}
          <Box as="span" fontWeight="bold">
            around 5 years
          </Box>{" "}
          experience with it. I have also fiddled with Ruby on Rails and Elixir.
          I'm eager to learn new frameworks, libraries and languages like Elm,
          Vue.js and ReasonML. I'm also interested in learning Go and Python.
        </Text> */}
        <Text>
          I Am Seeking Challenging Career Opportunity In The Field Of Software
           Engineering To Build Upon And Utilize My Academic Background And
            Software Skills. This Opportunity Will Allow Me To Enter
             The Market And Apply What I Studied And Learned Through My 
             Life Challenges . Last Two Years I Was Working 
             As Remote Software Developer Design Build And Deployment
              Websites For Clients Around World ,That Lead Me 
              To Founder Cairo Developers Company For Design Brands And Developing Software But I Failed ,Because Lack Of Experience In Both Business Development And Software Development ,
           In Any Way I Want Leave A Finger Print In The World
        </Text>
      </Box>
    );
  };


 

  const socialLinksNode = () => {
    return (
      <VStack spacing={4} align="left">
        <VStack spacing={2} align="left">
          <Heading as="h2" size="lg">
          Hire Me 
          </Heading>
          <Text>You Can Find Me and Feel Free  To  Contact With Me </Text>
        </VStack>
        <Box d="flex" alignItems="center">
          <HStack spacing={4}>
          
            <Link
              py={2}
              px={4}
              href="https://www.linkedin.com/in/abubakr-elghazawy-074956106/"
              rounded="md"
              bg="#0e76a8"
              color="#fff"
              fontWeight="bold"
              isExternal
            >
              <HStack spacing={2} alignItems="center">
                <Box as={IoLogoLinkedin} /> <Text>LinkedIn</Text>
              </HStack>
            </Link>
            <Link
              py={2}
              px={4}
              href=" https://wa.me/2001154747912"
              rounded="md"
              bg="#52CC5D"
              color="#fff"
              fontWeight="bold"
              isExternal
            >
              <HStack spacing={2} alignItems="center">
                <Box as={IoLogoWhatsapp} /> <Text>Whatsapp</Text>
              </HStack>
            </Link>
          </HStack>
        </Box>
      </VStack>
    );
  };

  return (
    <Box maxW="2xl" mx="auto" px={4} py={8}>
      <Grid templateColumns="1fr">
        <Box as="section">
          <VStack spacing={8} align="left">
            {headingNode()}
            {bioDescriptionNode()}
            {socialLinksNode()}
          </VStack>
        </Box>
      </Grid>
    </Box>
  );
};

export default Page;
