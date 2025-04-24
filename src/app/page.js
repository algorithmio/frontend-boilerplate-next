"use client";
import CustomButton from "@/components/CustomButton";
import { Title } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Title>Home</Title>
      <CustomButton
        children={"Go to Dashboard"}
        icon="none"
        onClick={() => {
          router.push("./dashboard");
        }}
      />
    </>
  );
}
