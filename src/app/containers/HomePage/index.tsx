import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { BookCard } from "../../components/bookCard";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { AboutUs } from "./aboutus";
import { BookingSteps } from "./bookingSteps";
import { TopCars } from "./topcars";
import { TopSection } from "./topSection";

const PageContainer = styled.div`
  ${tw`
flex
flex-col
w-full
h-full
items-center
overflow-x-hidden

`}
`;

export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <BookCard />
      <BookingSteps />
      <AboutUs />
      <TopCars />
      <Footer />
    </PageContainer>
  );
}
