import React from "react";
import BlogPostPage from "@theme-original/BlogPostPage";
import type BlogPostPageType from "@theme/BlogPostPage";
import type { WrapperProps } from "@docusaurus/types";

type Props = WrapperProps<typeof BlogPostPageType>;

export default function BlogPostPageWrapper(props: Props): React.JSX.Element {
  // Only hide sidebar on individual blog post pages (not on blog list pages)
  const isBlogPostPage =
    props.content?.metadata?.permalink &&
    !props.content?.metadata?.permalink.endsWith("/");

  return (
    <>
      <BlogPostPage
        {...props}
        sidebar={isBlogPostPage ? null : props.sidebar}
      />
    </>
  );
}
