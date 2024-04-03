import { Box, Flex } from "@radix-ui/themes";
import { Link } from "react-router-dom";

export default function HeaderLeft() {
  return (
    <Flex gap="9">
      <Link to="precedent-search">
        <Box>판례 검색</Box>
      </Link>
      <Link to="news">
        <Box>법 뉴스</Box>
      </Link>
    </Flex>
  );
}
