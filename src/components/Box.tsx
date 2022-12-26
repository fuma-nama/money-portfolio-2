import { Card, styled } from "@nextui-org/react";

export const Box = styled("div", {
  boxSizing: "border-box",
});
export const Flex = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$md",
});

export const HStack = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "$md",
  justifyItems: "center",
});

export const Grid = styled("div", {
  display: "grid",
  gap: "$md",
});

export const Center = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const GlassCard = styled(Card, {
  w: "100%",
  h: "100%",
  background: "$glass",
  backdropFilter: "blur(8px)",
});
