import { Box, Button, Flex, FormControl, FormLabel, Heading, Image, Input, InputGroup, InputLeftAddon, Select, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Plus from '../Images/Plus.png'
import Rectangle1 from '../Images/Rectangle1.png'
import Rectangle2 from '../Images/Rectangle2.png'
import Rectangle3 from '../Images/Rectangle3.png'
import Formbg from '../Images/Formbg.png'
import Handbg from '../Images/Handbg.png'
import Laptopbg from '../Images/Laptopbg.png'
import Laptop from '../Images/Laptop.png'
import Rectpoints from '../Images/Rectpoints.png'
import noun_form from '../Images/noun_form.png'
import Partners from '../Images/Partners.png'
import Wave from '../Images/Wave.png'
import Speakerbg from '../Images/Speakerbg.png'
import Speakinfooter from '../Images/Speakinfooter.png'


const Home = () => {
  return (
    <div>
         <Flex flexDirection={"column"} h={{md:"870px",base:"265px"}} w={"100%"} >
      {/* Right: Content */}
      <Box
       width={{ base: '100%', md: '100%' }}
       h={{ base: 'auto', md: '100%' }}
      flex={{ base: 1, md: 'none' }} p="4" position={"relative"} display="flex" flexDirection="column" alignItems="flex-end" mt={{lg:"50px",base:"10px"}} >
        <Heading textAlign={"left"} width={{ base: '50%', md: '40%' }}  size={{lg:"lg",base:"sm"}} color={"white"}>Curate Your own Training Sessions with top Keynote Speakers</Heading>
        <Box p={"20px"} textAlign={"left"} w={{ base: '50%', md: '40%' }} mt={"10px"}
         bg="rgba(255, 255, 255, 0.1)"
         borderRadius="10px">
            <Box display={"flex"} w={"15%"} gap={"5px"} mb={"5px"} >
                <Image src='https://s3-alpha-sig.figma.com/img/afc0/c0aa/875dd90cfe49ea00812af540f6bdd690?Expires=1697414400&Signature=h75KESGBbVT785KuuKtiAGSa6hyqPZ2TgQBbUKy9DG40dV2YxSxYZJ4v0YasJLm0ycYc8RBm-2nm1kgAu8allVUzr7sUqkhTcyMiL6p5rCz~nyFJzr-o40gy6rGhpci3Q9DM4qByQmoppQ70eUJ3lTsz2j0M1qWz~tAYYJ9roz0NzSpAzsUYx9KYQc4WLh8rRjw3YXLTjYsTILZLZAO-fJWQrHoPmhMEE0DTQ-alCTbXEDXShb0CmEgWpT--kpeIDSPo6DmBVLttywy4yfowLPlPT7DDdz1nIbEpUrTM9Wm4mexujS19UcW631Og-lbeRLtKTIyjpn8qVkzSt3YMyg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></Image>
                <Image w={"50%"} h={"50%"} src={Plus}></Image>
                <Image borderRadius={"5px"} src='https://s3-alpha-sig.figma.com/img/bbae/02d4/d8fd275fe3684c10ed30987d88b84baf?Expires=1697414400&Signature=HoX4KDRigeOjtiKGGxxFVoAp2jBkPbhQ7mXZVCfk8KYMpmN4083uymJAxOv0wiDxw-WJgs7Jq~RSxgSmjuEAPsf5lSKZ21miJT~z9wmfrw0FV2g07KMYGNW-mhtBgzzjxbud-Sk4JD8jP~Oeo0oKRgL2Xi7YDNDiNtxaZ3QrvIOsjIhSW2L3kOc~hUbz7b0DUA8iGTS~4QBDMF-AppXD6URY2TWoExiZPjUjSJuvSOExDksyxmjzD4kZYb49DdtUOvWXJV-oR7dy6zONhwVvSvGlRqCd5ygRG7AfTsNydGKSdrSRjFATGIXrEknX0YQPe6o5bPq7HmlretKbUIRx2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></Image>
            </Box>
          
          <Box >
          <Heading   size={"sm"} color='white'>= Your Own Live Session in 30 minutes</Heading>
        <Button mt={"15px"} bg={" #FFDE00"} borderRadius={"57px"}>30 Minutes Schedule Now</Button>
          </Box>
          
        </Box>
      </Box>

      {/* Background Image */}
      <Box
        className="background-image"
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        backgroundPosition={"center"}
        zIndex="-1" 
        background={`url('https://s3-alpha-sig.figma.com/img/0a49/8bf4/c00885344306a42e69614907dc1a381f?Expires=1697414400&Signature=HcuOmw3eqVaMv~hH-L4AoUaZz1ZMlBygQ1Q0eEk8EUc9JbIzke6XeRKaJNe9XBC~5BOBedXtqM-M0GD6Qz96SdH8dfoNXAs6QrMVX52-9CiNTNanJO-qXn2Xz5xYtW8I0ZBEgOu8BH1tzI3XhMLX9HzWPEHHuufnpRhxCYWSW3TE6DTaNo0yz8xXBXKSTpA-ViL8VByk62t2Wrg0cxIaT9H5WPJcXt45d3zmrkyyvj810Tzb2bILBkG3b7H2Crj43aPRhFeN5WFv7Lisq1sLCjPeCqpAXQzf4z0-vQTfelSHq1wB3e6oWlBEDRImx~s2RhWUIi3yx1LkwlGsm4US5Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')`}
        backgroundSize="contain"
        backgroundRepeat= 'no-repeat'
        transform="scaleX(-1)"
        h={{md:"900px",base:"265px"}}
      ></Box>
       <Box mt={"0"}  position="absolute" top={{base:"130px",lg:"390px"}} left="0" right="0"> 
        <SimpleGrid columns={1} position={"relative"} >
          {/* Add your images here */}
          <Image src={Rectangle3}
          position="absolute"
          top="8"
          left="0"
          alt="Image 1" />
          <Image src={Rectangle2} 
          position="absolute"
          top="0"
          bottom={"15"}
           alt="Image 2" />
          <Image src={Rectangle1} 
          position="absolute"
          top="0"
          right="0"
        
          alt="Image 3" />
        </SimpleGrid>
      </Box>
    </Flex>
    <Box display={"flex"} gap={"20"} position={"relative"}>
    <Box  position={"absolute"}
    top={"-400px"}
    left={"100px"}
    
        bg="rgba(255, 255, 255, 1)" 
        p={8}
        borderRadius={10}
        boxShadow="md"
        h={"1000px"}
        backgroundImage={`url(${Formbg})`} 
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        fontFamily="Arial, sans-serif"
        display="flex"
        justifyContent="center"
        alignItems="center"
        
      >
        <Box w={"500px"} p={"50px"} borderWidth="1px" borderStyle="dashed" borderColor="gray.300" display={{lg:"block",base:"none"}}>
        <Box mb={"20px"}>
        <Image mx={"auto"} w={"50%"} src='https://s3-alpha-sig.figma.com/img/469b/7223/d0036baddc870ca9aa98f9466e3bbd48?Expires=1697414400&Signature=elwZMNwHGIOBxccgrMv5UBXHx0b62G5QIVpIg8PYOH5UykVajqplkbTHPjhog-CFx20yN5hLyu-Vd12LzwL66tftu4RpToQUh-WOmp9lpBgK4e3T-LINCqfHXSLA3DSaRexvtIn7RXcmNVK65UnNv1DQOTejb7jpjC9fcAwBpYg6~m4f-OxT0rw9YyvneW98gBCfV~U~GUBgWuC93lF2jJtoO~F3wi9MoSN~r3EBq0AFuHIT1pQSquZIJvtz9CE5xXEq7m-0Fnn6CwS0p~eMFvZcH4JbCFHUNWMtkHV-lrrwuqwDiig0Ry64zmrVf~WOe1PCoRpy66UTzaye1r9v0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></Image>
        <Heading>Welcome Form</Heading>
        <Text>Submit Your Requirement</Text>
        </Box>
        <form action="#" method="post">
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input type="text" id="name" name="name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input type="email" id="email" name="email" />
            </FormControl>
            <FormControl isRequired>
            <FormLabel htmlFor="mobile">Mobile Number</FormLabel>
  <InputGroup>
    <InputLeftAddon children="+91" />
    <Input type="tel" id="mobile" name="mobile" placeholder="+91" />
  </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="organization">Organization</FormLabel>
              <Input type="text" id="organization" name="organization" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="date">Select Date</FormLabel>
              <Input type='date' color={"grey"}></Input>
            </FormControl>
            
            <Text  textAlign="left" mb={4}>
          Topic of the Session:
        </Text>
        <Box display={"grid"} gridTemplateColumns={"repeat(2,1fr)"}  gap="5px">
        <Button borderRadius={"50px"} bg={"white"} border={"1px solid grey"}>Business Leadership</Button>
        <Button borderRadius={"50px"} bg={"white"} pl={"40px"} pr={"40px"} border={"1px solid grey"}>Motivation During Crisis</Button>
        <Button borderRadius={"50px"} bg={"white"} border={"1px solid grey"}>Spirituality</Button>
        </Box>
        
        <Button
              type="submit"
              bg="#007BFF"
              color="white"
              _hover={{ bg: '#0056b3' }}
              borderRadius={"46.8px"}
            >
              Register
            </Button>
          </Stack>
        </form>
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={{lg:"column",base:"row"}} w="30%" position={{lg:"absolute" ,base:"static"}} right={"0px"}>
        <Heading w={{lg:"400px",base:'600px'}} position={{lg:"relative" ,base:"static"}} top={"20px"} right={"300px"}>Grow with Indias Largest Network of Experts</Heading>
        <Box p={8}
        h={"400px"}
        right={"50px"}
        position={{lg:"relative" ,base:"relative"}} top={"-60px"}
        backgroundImage={Handbg} 
        backgroundSize="cover"
        backgroundPosition={{lg:"center",base:"right"}}
        backgroundRepeat="no-repeat"
        display="flex"
        justifyContent="center"
        alignItems="center"
       
        >
        <Image mt={"15px"}   borderRadius={"63.5px"} w={"100%"} src='https://s3-alpha-sig.figma.com/img/013c/4909/4e56358bc9568a7d4323c6113493c3ff?Expires=1697414400&Signature=qr1AMLWvIwr2L8yTalLYSub3ISBmWvNeXlvsADIMfL77nUp0fB~pk2wXc2rzoxvwkKWJxXQys0RI3Kj2R9AWJCwvgxRnlwvQrxDj-WREUDvpRhUcO7IglZrNkFWBSh9ouxWXi-JBHSiO40VlwNGGD1GJTb50GpeuCgATOZ7viV7I1TH9y7lNzcxI5OjDbwjSaOj76~HdyIhgb4Vg~V-PHfnfH2yXO2tKuO6k52Krc5QpX3J0uNnPbdRRW1GCoHEjWykQ8~1LJNC6IRUgmI82jHfV~e022Lm8dcCG4IKuWcbQRljfWKdtPk0fx0upwuOhPRflEoRzvnSS8nzoFSziAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></Image> 
        </Box>
      </Box>
      </Box>
      <Box m={"auto"} mt={"650px"} w={"70%"} mb={"30px"} >
        <Box textAlign={"left"} mb={"40px"}>
            <Heading>Why Curate Your Own Sessions? </Heading>
        </Box>
        <Box display={"grid"} gridTemplateColumns={{lg:"repeat(2,1fr)",base:"repeat(1,1fr)"}}
        gap={"40px"}>
        <Box>
            <Image w={{lg:"90%",base:"100%"}}  src={Laptopbg}></Image>
            <Image position={"relative"} bottom={{lg:"300",base:"200"}} left={'10'} src={Laptop}></Image>
        </Box>
        <Box w={{lg:"100%",base:"100%"}} display={"flex"} flexDirection={"column"} gap={"25px"}>
            <Box display={"flex"} alignItems={"center"} textAlign={"left"} gap={"20px"} >
            <Image maxHeight={"32px"} src={Rectpoints}></Image>
            <Heading size={"sm"} fontSize={"18px"}>Standard sessions do not personalize the learning for your audience</Heading>
            </Box>
            <Box display={"flex"} alignItems={"center"} textAlign={"left"} gap={"20px"} >
            <Image maxHeight={"32px"} src={Rectpoints}></Image>
            <Heading size={"sm"} fontSize={"18px"}>Pick & Choose the speakers who meet all your check boxes</Heading>
            </Box>
            <Box display={"flex"} alignItems={"center"} textAlign={"left"} gap={"20px"} >
            <Image maxHeight={"32px"} src={Rectpoints}></Image>
            <Heading size={"sm"} fontSize={"18px"}>Flexible schedule to meet your plans</Heading>
            </Box>
            <Box display={"flex"} alignItems={"center"} textAlign={"left"} gap={"20px"} >
            <Image maxHeight={"32px"} src={Rectpoints}></Image>
            <Heading size={"sm"} fontSize={"18px"}>Plug & Play with flawless technology backbone</Heading>
            </Box>
            <Box display={"flex"} alignItems={"center"} textAlign={"left"} gap={"20px"} >
            <Image maxHeight={"32px"} src={Rectpoints}></Image>
            <Heading size={"sm"} fontSize={"18px"}>Exclusive expert sessions on topic of your choice</Heading>
            </Box>
            
        </Box>
        </Box>
        
      </Box>
      <Box  backgroundColor={"#538DD7"} p={"50px 0px"} textAlign={"left"}>
      <Box w={"80%"} m={"auto"}  >
        <Box mb={"30px"}>
            <Button bg={"#FF8E4F"} color={"white"} borderRadius={"10px"}>Trending</Button>
            <Heading>Live Learning Sessions</Heading>
        </Box>
        <Box display={"flex"} gap={"20px"}>
        <Box bg={"white"} h={"auto"}
            borderTopLeftRadius={"14px"} borderTopRightRadius={"14px"} boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}>
                <Image borderRadius={"14px"} 
                      boxSize="100%" 
                      height="65%" 
                      objectFit="cover" 
                      w={"500px"}
                 src='https://s3-alpha-sig.figma.com/img/6a25/8668/32dbb87c29d0dfe4df9823d40f356101?Expires=1697414400&Signature=XYUSa~lFdey7pnn11tZwwJJIqQ4CICcYrtUxUlR5qbtcfcBiFi~3NaHb7bWN-BiRD5VnmdO-S9pSHZEkfnThctqUFXhIPj1mXv-9YcpnL6~5UFhpf5v4LIsXbvJuczzwOFr7q05hSvZEauJaQDfBXVmxBYgYmJW1dRyEqFM1nqXQESuuLv2p2Ap0kQ-selDRHnnOuUcNqfGDTA4B5EUflL-iR8mgPAWz50-EdhIIDqLk-SFlM3TxDwFWz8jz398dD0T1Lke5ocOsM8Jg9yyHCPWdexej7T1ZSffKpOUwYBo-n9DVy6b3kpubDgJne3iD~PjULjx7u0rhjltf82Zv6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></Image>
                <Text fontSize={"15px"} color={"#606060"} mt={"10px"} mb={"-50px"}  ml={"10px"}>Leadership and Executive coach</Text>
            </Box>
            <Box bg={"white"} h={"auto"}
            borderTopLeftRadius={"14px"} borderTopRightRadius={"14px"} boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}>
                <Image borderRadius={"14px"} 
                      boxSize="100%" 
                      height="65%" 
                      objectFit="cover" 
                 src='https://s3-alpha-sig.figma.com/img/1ab3/bd22/a3654dd9a7c09cdfd9ad97c225b9b10e?Expires=1697414400&Signature=Kg9trZj1ZvhJPb67o9nDhwdZ2EKUdGWhO6WONX0V4rjUlGgdo9mmoSDVFVFB-W6c0uAr5dpzg8VlY7eFHo2hH5lccB7uEkmcjxq16BIk6yX8KC6YS~hS-hZ5e2~vy2b9w5BHJ1GV35c99SVLbVNUu~OLI2I7kIF1rQH1QXHIQp9l8pPcpkXclEcjrlaJemwaD1N9Bh9EtJ~FZbWBfKn1nZIv2-nRLqXVoZXTKlkvrfA9h~k6kS0n9hvAiKl9tmRukML1mdMPbimL7R-l5IlblPp3IB9tMJVcZIX013jGP9EJbccKkVoYEry46aI3BI5yvjf1WfP1JxIAwm7KhMDf-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></Image>
                <Text fontSize={"15px"} color={"#606060"} mt={"10px"} mb={"-50px"}  ml={"10px"}>Change Management and Reboot Training
</Text>
            </Box>
            <Box bg={"white"} h={"auto"}
            borderTopLeftRadius={"14px"} borderTopRightRadius={"14px"} boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}>
                <Image borderRadius={"14px"} 
                      boxSize="100%" 
                      height="65%" 
                      objectFit="cover" 
                 src='https://s3-alpha-sig.figma.com/img/5931/6b41/1d204a60a8573c1e9575ed9debb8d3fa?Expires=1697414400&Signature=g-ICN6-ZaGtxOsnxqj4T6hNArgh3xgR-APzRJAaUIHu~pBBYFwF1LCsQDuFyB~58GS3i5oYloSJU3mC1-4wwyIizcA7Yc5kyO0kVEwTvwqYW~1XXiIjbUWr9pCHrrnqyFn7LPqBmMyHLzUr0ADsF77Hk6N9gYNf~LCljQSfZ19oiUnIAyu5mH5uVB0-2NKLznquUqXJhZLWWDhj-bvQvItG67sEzH5Mlr6DlqY2v1WXTpDMvk0rErhL~m46MnVlLysWMjAuRR9vXgeZIlqLYfJ592eiW3azsW0w5W1~KkjsxVQ8ZWcM6iqI2ShPq5DgJWjGztZ-qftaEgWnch9abwA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></Image>
                <Text fontSize={"15px"} color={"#606060"} mt={"10px"} mb={"-50px"}  ml={"10px"}>Employee Motivation and Engagement</Text>
            </Box>
            <Box bg={"white"} h={"auto"}
            borderTopLeftRadius={"14px"} borderTopRightRadius={"14px"} boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}>
                <Image borderRadius={"14px"} 
                      boxSize="100%" 
                      height="65%" 
                      objectFit="cover" 
                 src='https://s3-alpha-sig.figma.com/img/67db/147a/d2a25da6555fde8e8b0d970e3b2a2f66?Expires=1697414400&Signature=TV5C8DuA9m5yDbFOlmTTrmtC~fsEiXzSEil3jPOwlq41pzIOuN3iwA4mj4tsqpNGiYNEKeMT3mBLPJs9vb7gxp77vfBHseZdREXG4SXyVeBUzcMLSjDu~SXKeyLDBL~HJ2kb2yVXdSbj6QhK1409o4M3-n-1Fy~MO~Ayo6bcLUSoL5RTcAXKyXvewV8CVDukMRzFh9DEL6lqhZlo0TKQWbIDaZf9FFZJpKF3I0MJlAuBWPnGmRtO7dDZXzrLSxydJRTwuWaddYKuGIsf1Lf~cGLkVy4oE5z43ILsIHhkgGm4AVt4DtCsaw8bplg2ZUlenwNc0wDZJkhEMWVTKz5F~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></Image>
                <Text fontSize={"15px"} color={"#606060"} mt={"10px"} mb={"-50px"}  ml={"10px"}>Employee Upskill Sessions</Text>
            </Box>
            <Box bg={"white"} h={"auto"}
            borderTopLeftRadius={"14px"} borderTopRightRadius={"14px"} boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}>
                <Image borderRadius={"14px"} 
                      boxSize="100%" 
                      height="65%" 
                      objectFit="cover" 
                 src='https://s3-alpha-sig.figma.com/img/eb94/97b2/77aac7df8fdaee7635c12561375fc44d?Expires=1697414400&Signature=nMX9R8T27MXkUaS8t8kAaCTmN5Kp2hL-icshMeAkfEjhXMVFBkaqmj3bAGFNkBWoP3YDcjsXlmb3xoH4YYdttuuvLsfu8s-ClGZDw2kWcoaTFXuPlrc1J3KAwhKpNKWFa0lqvMN~axSrMu2qAi4G5jYQwLRsB86ZiMlnYO8rXssQwZrDD3LMsDywbDIQTA7vXEWhuRr089g8teHbq1lLFrqS0C9fPoOHJcYnVoEM1M1eWhrWZcCWXv7pxggbgo-ejWXe~8-oRYA284MRoGHta5evBd5P5zzlAzLLV3dDZQTvgysLrF9b9NFOzOMpw~UhTFJDfPWASYGXIv3Kt30WNA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></Image>
                <Text fontSize={"15px"} color={"#606060"} mt={"10px"} mb={"-50px"}  ml={"10px"}>Soft skills Training</Text>
            </Box>
        </Box>
      </Box>
      </Box>



      <Box mt={"100px"} textAlign={"center"}>
      <Box w={"60%"} m={"auto"}  >
      <Box mb={"40px"}>
            <Heading>How Live Sessions Work? </Heading>
        </Box>
        <Box display={"grid"} gridTemplateColumns={{lg:"repeat(4,1fr)",base:"repeat(2,2fr)"}} gap={"30px"} mt={"80px"}>
        <Box bg={"white"} h={"200px"}  
        p={"10px"} w={"200px"}
        
             boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
                <Image mx="auto"  src={noun_form}></Image>
                <Text w={"80%"}
                color={"#606060"}
                 mt={"10px"} mb={"-50px"} 
                  ml={"10px"}>
                Express the interest by Filling the form</Text>
            </Box>

            <Box bg={"white"} h={"auto"} 
        p={"10px"} w={"200px"}
             boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
                <Image mx="auto"  src={noun_form}></Image>
                <Text w={"80%"}
                color={"#606060"}
                 mt={"10px"} mb={"-50px"} 
                  ml={"10px"}>
                Finalize Speakers, Date and Time</Text>
            </Box>
            <Box bg={"white"} h={"auto"} 
        p={"10px"} w={"200px"}
             boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
                <Image mx="auto"  src={noun_form}></Image>
                <Text w={"80%"}
                color={"#606060"}
                 mt={"10px"} mb={"-50px"} 
                 
                  ml={"10px"}>
                Make payment through sent Payment Link</Text>
            </Box>
            <Box bg={"white"} h={"200px"} 
        p={"10px"} w={"200px"}
             boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
                <Image mx="auto"  src={noun_form}></Image>
                <Text w={"80%"}
                color={"#606060"}
                 mt={"10px"} mb={"-50px"} 
                  ml={"10px"}>
               Host your Fully Managed Live Session</Text>
            </Box>
        </Box>
      </Box>
      </Box>
      <Box mt={"100px"} bg={"#6CA4EB 0%"}p={"40px 80px"} w={"100%"}>
      <Box w={"80%"} m={"auto"} gap={"20"}  display={"grid"} gridTemplateColumns={{base:"repeat(1,1fr)",lg:"repeat(2,1fr)"}}>
        <Box textAlign={"left"} pt={"70px"} color={"white"}>
            <Heading>Real People
Real Learnning</Heading>
            <Text>SpeakIn is Asia's largest on-demand network providing access to top regional speakers.</Text>
        </Box>
        <Box >
            <Image borderRadius={"10px"} src='https://s3-alpha-sig.figma.com/img/5ac0/1d97/074ad35642994e869f88e0dac6233016?Expires=1697414400&Signature=EG~ANnztT1WfbqXNwFJZQOVCUyrgspElrD-K1-hjdt7L9HOITdhQri5PjXdv2WZzRUjQHhRilXNFwGlhp3IDk5Q17OZWXLylBfX3FsrKAlPerIyem4Dnqh6eATn4YXxt9Xf-tuOZ5FSGXtuJxdQ8C41CPCmRUo7J~B8v98RN9HdeOCBobTNZYT~u19FZLj0ca1SDQ0wKfq9qKBPLeT1twgYcyikgGXzkEa7JEmMF9YcVRHF5CaH~LI-6b0gpxScH6xKmIfnvx3t9LQqnkXHjYXkHpjmjaQIUv7rTRYcMvOvhaguyUqem8j6YR1yYCzpfz2l3fIbFp83GPxXXt9d-Jg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></Image>
        </Box>
      </Box>
      </Box>
      <Box  w={"50%"} m={"auto"} mt={"70px"} >
            <Heading  mb={"20px"}>Your SpeakIn is Trusted by the Best of Clients</Heading>
            <Text>SpeakIn speakers have enthralled audiences across top-of-the-line businesses in varied sectors globally.</Text>
        
        </Box>
        <Image mb={"60px"} src={Partners}></Image>
        <Box bg={"#FFDE00"} h={"300px"} textAlign={"left"}>
            <Image  src={Wave}></Image>
            <Box display={"flex"} w={"95%"} m={"auto"} gap={"50px"} position={"relative"} top={"-460"} >
                <Box  w={"90%"}>
                <Image
                 boxSize="500%" 
                 height="280px"
                 objectFit="cover"
                opacity={"0.3"}  src={Speakerbg}></Image>
                <Image 
                 boxSize="auto" 
                 height="250px"
                 objectFit="cover"
                w={"50%"} position={"relative"} left={"50"} top={-250} src='https://s3-alpha-sig.figma.com/img/9434/1a09/0d24b53c16b1224f0e3405a449c55fc2?Expires=1697414400&Signature=nuttXu8oEX2QBUmNkz9JcTQO2DqXDwAOEDsgmJ41WigR8LMLn3xsPnvOx-Ru9xkto8wn4oYUOQOwCAjY2q55Hw3oT45B6KnGBguZMZaAiyXFzsQ4tB61cze4txQHkA5C4Q6zBGi9XwUnrBr6PEnlGfQSgyzi4NlBeglCjewvFuVJlmDatZF7izrlGi88Cp4INOQFcxOEQheQOiWD4XWUfW--UNXzQVA1EN1mAGKL4GL1eiKoaw4pEKtsH8pizrNV30mwCgI2TZJ176lscXDYe1Fs3uiGURwGkJhYQybv22wRqjF4Gd9jomN2DJPMg1hKIpmTD5ez8fSMERC5qsv5Ug__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></Image>
                </Box>
                
                <Box mt={"70px"}>
                    <Heading>About SpeakIn</Heading>
                    <Text>SpeakIn is Asia's largest on-demand network providing access to top regional speakers, thought leaders and their content. Enabling organizations to build performance agility and win over disruption, at SpeakIn only the best come together to inform, inspire and motivate.</Text>
                </Box>
            </Box>
        </Box>
        <Box mt={"200px"}>
            <Heading>Trending Speakers</Heading>
            <Box color={"white"} display={"flex"} gap={"20px"} w={"80%"} m={"auto"} mt={"50px"}>
                <Box bg={"#538DD7"} borderRadius={"11.98px"} w={"25%"}>
                <Image 
                height="70%" 
                borderTopLeftRadius={"11.98px"}
                borderTopRightRadius={"11.98px"}
                objectFit="cover"
                src='https://s3-alpha-sig.figma.com/img/223d/ed51/3c1901c47022bcb6cb19872c6befef07?Expires=1697414400&Signature=QqkGYnvnDd6Jb0qZhfqVERq7RP3zz0lSit-BL9fDb1WLnvzgnh1fMVscUGCZM-eEbBv3ay-URNN0-3U16fPv82GqvZZv5cZnyYFYOKWWmdTxScrrb3fCg4Jyd-f1O7NrhsTkY~4280WHOnTqXSskVymmhEy0TpcRDdvNEvhYezQrnKSyDPU70MyIXZeWGi25l-Bpy4qZqwugVfB3pMypDBQ1GlyVuRr6EFc3~M~67aHZ03VQaSPjZAmlk6lUMVsI82z0TZclrlGuhY-E3dArGEJNjQxciqTVmzzlnahsUfKt8E59tJ6oQBoYHmoCbDeoLmgJlIMIV~NOy8wefg779w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></Image>
                <Text fontWeight={"bold"}>Michael Kapoor</Text>
                <Text>Former Chairman and Managing Director, Air India</Text>
                </Box>
                <Box bg={"#538DD7"} borderRadius={"11.98px"} w={"25%"}>
                <Image
                height="70%" 
                borderTopLeftRadius={"11.98px"}
                borderTopRightRadius={"11.98px"}
                objectFit="cover"
                src='https://s3-alpha-sig.figma.com/img/8a15/5474/0a653376d6501a1e3eb8cfea6f7d6d27?Expires=1697414400&Signature=p99~aqHlGnVyElEVXfHPCHJP9DJKwni6EmDE~0TxJsdWHlvAXEplcgYlPy5xmLfS1YvakOhQ9t2RLwVDxe8tpDGZIEQKuY3R0UrPL8DOwCW-sU4CmRv7bDY0Ap-Ypxcq8b78Qa07aqdMkNMjngx2Xm108snlHE1cs~dKle9iTtfiOS1yxmleDkzAUDygONkfjMkmttUKGTeDOHkW~XwN0i7LrzozEn2I7vMfTihRrxubb2sJKLNRNvKub5nRGpMMZYOCsd1XuVO0GCZCThjK7IkEvX1Vkzr5DH0KoGIVY4OGVeCtgRVaW6PYK2s2MKOMjolxlsUDQlbiWIpLdIRDew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></Image>
                <Text fontWeight={"bold"}>Aditya Ghosh</Text>
                <Text>Board Member, Fabindia Overseas Pvt Ltd And OYO Rooms</Text>
                </Box>
                <Box bg={"#538DD7"} borderRadius={"11.98px"} w={"25%"}>
                <Image
                height="70%" 
                borderTopLeftRadius={"11.98px"}
                borderTopRightRadius={"11.98px"}
                objectFit="cover"
                src='https://s3-alpha-sig.figma.com/img/bd0b/d831/bd34fba183dc43235f7f3de780db9f56?Expires=1697414400&Signature=AY5ultMwkmSkjzHVe0HUMoHCVnFbr1Y80Tn8OhpZNV5skjl0WAddoIXXNtN7FfNfTb7e1CdzsiYW7YK5YP82gXqqEnmN5W~Vc3iaKrs122mnmQuV0sr2fgHphLz08cAlvAhacmvdfQj9vLLCQEKKR4ZV2RTjozkMw3AxZq499lZcH~8sazcK205byaa2uOOw7PL3JuLD53FZ6s0mQwXBH0zm~WQRruddyTGNituYCQ-xWh7fYeu0~G7uvpFnqfprJ0hhkrCVbtHOFMQx8InwlvN6lCCLgpk4MRaEuPbkjPOweUX3kGaF12Ztme0bXMUb9IlizSGdMgzToaYMmqHRtA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></Image>
                <Text fontWeight={"bold"}>Bhupendra Chaubey</Text>
                <Text>Executive Editor
 CNN News18</Text>
                </Box>
                <Box bg={"#538DD7"} borderRadius={"11.98px"} w={"25%"}>
                <Image
                height="70%" 
                borderTopLeftRadius={"11.98px"}
                borderTopRightRadius={"11.98px"}
                objectFit="cover"
                src='https://s3-alpha-sig.figma.com/img/04da/a17b/4d996a5e28ef7956e23c5648163f65ec?Expires=1697414400&Signature=GtpaGCRAs7QczI0X5SpKiR54E~QrkGeQJpLFrLJ0AxALSGhnfmQdYnRlkxVz7UQMOzIx859zjPzE2yj5C3ElKy-6i8ZnxJ3um4hvjWn3qu0mhJaaZlmyw92iDnDu8uzJY9TW4zubbYeJL8E~BFfL6tjCjlWwpWI25hN2LpL34yGfkQ-p9PSI9MzOS4evqszvLZ9Ed1DGv3bUvLkPUBRnqRc174xyif2n09xukj0vJ-qvfJOaXToqHZl2F2eCnbFoU7dKNHdtm7KDvAaN5jd2bWEMpyJaVkTNyZR6-5eizLpsVIWwmPzrbFT3cDotKzS9-dsdFGilz4x4f5TEiXSNNQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></Image>
                <Text fontWeight={"bold"}>Dr.Arogyaswami Velumani</Text>
                <Text fontWeight={"bold"}>Founder Thyrocare
Technologies</Text>
                </Box>
                <Box bg={"#538DD7"} borderRadius={"11.98px"} w={"25%"}>
                <Image
                height="70%" 
                borderTopLeftRadius={"11.98px"}
                borderTopRightRadius={"11.98px"}
                objectFit="cover"
                w={"100%"}
                src='https://s3-alpha-sig.figma.com/img/a4ae/2775/fcdfa7d20b960fe1ab3b35974bb928a8?Expires=1697414400&Signature=QnKV6GlqhTnjCFw3lUX4sj9cglKQwYI6ICavRBT4QUer-7vixvz5V7Nm8Z4LiFdHmG09ecIhQ8r7SU0MCukDEaVS9h8YHG4LQjl5iPkRYOQ9wuGYC9J~a467cuf-~LpVs~DoEFzUcHO1~rTkmFCk-uCqJUxbbSni0WuFTKvJ02zquDmdrpcFsWtpmtCDLD2yjXRXDJmzMNMoC1ANwJzNcRNpMVbDSDS1BSvlsdBDjzd-8sbCbLBRMZ2gIgXkkNEPvmUmxG71tr1mB0v3L1UuP3KrUzwfyICm5QCvJQGhaC~RM-FWvSljQOrIEWGBE3af80VcPpU2DytTDqigoq1sKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></Image>
                <Box>
                <Text fontWeight={"bold"}>Shashi Tharoor</Text>
                <Text>Member of Parliament Lok Sabha, Indian National Congress</Text>
                </Box>
                </Box>
                

            </Box>
        </Box>
        <Box p={"20px 50px"} display={"flex"} mt={"50px"} gap={"20px"} justifyContent={"space-between"} bg={"#000"} color={"white"}>
            <Box>
                <Image src={Speakinfooter}></Image>
                <Text textAlign={"left"} ml={"25px"}>© 2020 Speakin All rights reserved</Text>
            </Box>
            <Box>
                <Box display={"flex"} gap={"10px"}>
                <Input placeholder='Enter your email ID'></Input>
                <Button bg={"#538DD7"} color={"white"}>Subscribe</Button>
                </Box>
                
                <Text textAlign={"right"} mt={"5px"}>Subscribe to our news letter</Text>
            </Box>
        </Box>
    </div>
  )
}

export default Home
