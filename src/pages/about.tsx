/** @jsx jsx */
import { jsx } from "reflexjs";
import { Layout } from "../components";
import Hero from "../blocks/hero";
import Cards from "../blocks/cards";
import { Icon } from "reflexjs";

export default function IndexPage() {
  return (
    <Layout>
      <div variant="container">
        <div textAlign="center">
          <p>
            I am a PhD candidate in Mechanical Engineering at Worcester
            Polytechnic Institute (WPI) and working in the Autonomy, Control,
            and Estimation Laboratory (ACEL) under supervision of Professor
            Raghvendra V. Cowlagi. I have general interests in robotics,
            real-time and embedded systems. My current research focus is on the
            sensing and motion planning of self-driving cars.
          </p>
          <p>
            I received my Master’s degree in Robotics Engineering from WPI in
            May, 2013. And I spent about two years working on the DARPA Robotics
            Challenge with Professor Taskin Padir. Our Team WPI-CMU ranked 7th
            out of 23 competing teams in the DRC Finals.
          </p>
        </div>
      </div>
    </Layout>
  );
}
