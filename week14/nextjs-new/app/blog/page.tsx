import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Blog" },
};

const Blog = () => {
  return <h1>Blog page</h1>;
};

export default Blog;
