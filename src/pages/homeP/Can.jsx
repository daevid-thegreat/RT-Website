import { Flex } from "@chakra-ui/react";

const Can = () => {
  return (
    <Flex
      as="section"
      pt={{ base: "89px", lg: "106px" }}
      justifyContent="center" // Changed to use Chakra UI's justifyContent prop directly
      className=""
    >
      <Flex
        flexDir={{ base: "column", md: "row", lg: "row" }}
        justifyContent="center" // Changed to use Chakra UI's justifyContent prop directly
        alignItems="center" // Added alignItems prop to center items vertically
        textAlign="Center"
        margin={10}
        mb={20}
        pr={10}
        pb={10}
        className="gap-20"

      >
        <div
        >
          <h1 className="cD600 text-[96px]">
            400+
          </h1>
          <p className="cD400">
            <strong>Community members</strong> with multi-disciplinary interests and skills across various Design and Tech professions
          </p>
        </div>

        <div>
          <h1 className="cD600 text-[96px]">
            30+
          </h1>
          <p className="cD400">
            active pairs of <strong>Accountability Partners</strong> with solid feedback on growth and career progress
          </p>
        </div>

        <div>
          <h1 className="cD600 text-[96px]">
            20%
          </h1>

          <p className="cD400">
            of <strong>newly onboarded members</strong> land their first gig/ internship/ job in the first 6 months of joining the closed community
          </p>
        </div>
      </Flex>
    </Flex>
  );
};

export default Can;
