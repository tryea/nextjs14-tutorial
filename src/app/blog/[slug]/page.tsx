import React from "react";

interface BlogDetailPageProps {
  params: { slug: string };
}

function BlogDetailPage({ params }: BlogDetailPageProps) {
  return <div>BlogDetailPage {params.slug}</div>;
}

export default BlogDetailPage;
