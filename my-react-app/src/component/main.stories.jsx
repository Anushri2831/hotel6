import React from "react";
import main from "..component/main"; // Adjust path as needed

export default {
  title: "component/main",
  component: main,
};

const Template = (args) => <main{...args} />;

export const Default = Template.bind({});
Default.args = {};