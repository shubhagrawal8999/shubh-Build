export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "building-with-taste",
    title: "Building with taste",
    excerpt: "Taste is the habit of noticing what feels coherent, then editing until the work gets there.",
    date: "2026-02-18",
    readingTime: "4 min read",
    body: [
      "Taste is not a mysterious gift. It is a feedback loop between what you notice, what you make, and what you are willing to remove.",
      "The best builders I know keep their surfaces simple and their standards unusually specific. They ask whether every edge, transition, and sentence is earning its place.",
    ],
  },
  {
    slug: "notes-on-momentum",
    title: "Notes on momentum",
    excerpt: "Small visible wins make ambitious projects less fragile.",
    date: "2026-01-09",
    readingTime: "3 min read",
    body: [
      "Momentum is easier to maintain when progress is visible. A short changelog can do more for a team than a perfect roadmap that nobody reads.",
      "When the scope gets noisy, shrink the loop: decide, ship, learn, and write down what changed.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
