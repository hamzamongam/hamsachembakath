import type { BlogPost } from "./types";

export const blogPosts: BlogPost[] = [
  {
    id: "3",
    slug: "building-scalable-web-apps-architecture-tech-stack",
    title:
      "Building Scalable Web Apps: A Deep Dive into Modern Architecture and Tech Stacks",
    excerpt:
      "Discover the architectural decisions, modern tech stack, and Feature-Driven Development (FDD) approach that power highly scalable, robust web applications today.",
    date: "May 31, 2026",
    readTime: "8 min read",
    author: {
      name: "Hamsa",
      avatar: "/avatar.jpg",
    },
    tags: [
      "React 19",
      "TanStack Start",
      "Architecture",
      "FDD",
      "Web Development",
    ],
    content: `
      <p class="lead text-lg text-neutral-300 mb-8">
        When building a modern, data-intensive web application, establishing a scalable, maintainable, and highly performant foundation is critical. In this post, we'll dive deep into an optimized project folder architecture, explore the cutting-edge packages we rely on, and explain the core philosophy behind our Feature-Driven Development (FDD) approach.
      </p>

      <h2 class="text-2xl font-bold text-white mt-12 mb-6">The Tech Stack: Packages Powering Modern Apps</h2>
      <p class="mb-6 text-neutral-400">
        Our architecture relies on a modern, type-safe stack designed for both an exceptional developer experience and blazing-fast end-user performance. Here is a breakdown of the key technologies we use:
      </p>

      <h3 class="text-xl font-semibold text-white mt-8 mb-4">Frontend & Full-Stack Capabilities</h3>
      <ul class="list-disc pl-6 mb-8 space-y-2 text-neutral-400">
        <li><strong>TanStack Start:</strong> We choose TanStack Start for full-stack SSR and hydration capabilities. It leverages Vite and provides fully type-safe, code-based routing, ensuring that broken links and missing parameters are caught at compile time.</li>
        <li><strong>React 19 & Vite:</strong> We leverage the latest features of React 19 alongside Vite for rapid local development and optimized production builds. The React Compiler (<code>babel-plugin-react-compiler</code>) automatically memoizes components, drastically reducing boilerplate and manual performance tuning.</li>
        <li><strong>Tailwind CSS v4:</strong> For highly customizable, utility-first styling with the latest engine performance improvements.</li>
        <li><strong>Component Libraries:</strong> A robust combination of <code>@base-ui/react</code>, Radix UI primitives, and <code>lucide-react</code> for building accessible, premium interfaces without sacrificing customizability.</li>
      </ul>

      <h3 class="text-xl font-semibold text-white mt-8 mb-4">State Management & APIs</h3>
      <ul class="list-disc pl-6 mb-8 space-y-2 text-neutral-400">
        <li><strong>TanStack Query:</strong> Handling robust async state management, caching, and optimistic UI updates for a seamless, zero-latency feel.</li>
        <li><strong>ORPC:</strong> Using <code>@orpc/server</code>, <code>@orpc/client</code>, and <code>@orpc/tanstack-query</code> for fully type-safe RPC API communication between our client and server. This eliminates the need for manual API typing and keeps the backend and frontend in perfect sync.</li>
      </ul>

      <h3 class="text-xl font-semibold text-white mt-8 mb-4">Backend & Database Layer</h3>
      <ul class="list-disc pl-6 mb-8 space-y-2 text-neutral-400">
        <li><strong>Prisma ORM:</strong> Powering our data layer with strongly typed database access (<code>@prisma/client</code> and <code>@prisma/adapter-pg</code>), making complex relational queries safe and intuitive.</li>
        <li><strong>Better Auth:</strong> Providing a secure, comprehensive authentication system right out of the box.</li>
        <li><strong>Zod:</strong> Heavily used for schema validation on both the client and server, guaranteeing data integrity at the boundaries.</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-12 mb-6">High-Level Project Architecture</h2>
      <p class="mb-6 text-neutral-400">
        A well-structured repository promotes separation of concerns while keeping related code close together, minimizing context switching. Here is a look at the core <code>src/</code> directory:
      </p>
      
      <div class="bg-neutral-900/50 border border-white/10 rounded-lg p-6 my-8 font-mono text-sm text-neutral-300 overflow-x-auto">
<pre><code>src/
├── components/      # Global shared UI components (e.g., buttons, layouts)
├── config/          # Application configuration files
├── features/        # Feature-based modules (The core of our FDD architecture)
├── hooks/           # Global custom React hooks
├── integrations/    # Third-party integrations (e.g., payment gateways, AWS S3)
├── lib/             # Utility functions and shared libraries
├── routes/          # TanStack Start file-based route definitions
├── server/          # Global server setups and middleware
├── styles.css       # Global CSS (Tailwind entry point)
└── types/           # Global TypeScript type definitions</code></pre>
      </div>

      <p class="mb-6 text-neutral-400">
        The beating heart of this architecture is the <code>src/features/</code> directory. Let's explore how we structure it to maximize team velocity.
      </p>

      <h2 class="text-2xl font-bold text-white mt-12 mb-6">Feature-Driven Development (FDD): Vertical Slices</h2>
      <p class="mb-6 text-neutral-400">
        To ensure our codebase scales gracefully as the application grows, we use a strict <strong>Vertical Slices Architectural pattern</strong>. Instead of organizing files strictly by technical role (e.g., grouping all controllers in one folder and all models in another), we group code by <strong>Feature</strong> (e.g., <code>users</code>, <code>billing</code>, <code>dashboard</code>).
      </p>
      
      <p class="mb-6 text-neutral-400">
        This approach drastically reduces cognitive load because all the context needed to understand or modify a feature is located in one place. Inside each feature directory, we split the code into two distinct layers: <code>domain</code> and <code>ui</code>.
      </p>

      <h3 class="text-xl font-semibold text-white mt-8 mb-4">1. The Domain Layer (Server & Business Logic)</h3>
      <p class="mb-6 text-neutral-400">
        The <code>domain/</code> directory contains server-side logic, database interactions, and API definitions. <strong>Crucially, the domain folder must NEVER import from the UI folder.</strong> This ensures business logic remains independent of presentation.
      </p>
      <ul class="list-disc pl-6 mb-8 space-y-2 text-neutral-400">
        <li><code>[feature].schema.ts</code>: The single source of truth for all Zod schemas and TypeScript types. We avoid separate <code>type.ts</code> files to keep definitions consolidated.</li>
        <li><code>[feature].repo.ts</code>: The Repository layer for Prisma database access. By abstracting DB calls here, we can easily manage complex transactions without cluttering business logic.</li>
        <li><code>[feature].service.ts</code>: The Business Logic layer that orchestrates data and enforces domain rules.</li>
        <li><code>[feature].contract.ts</code>: ORPC contract definitions mapping API input/output signatures.</li>
        <li><code>[feature].router.ts</code>: API endpoint implementations. By tying this to specific features, we can securely scope our procedures via auth middleware by default.</li>
      </ul>

      <h3 class="text-xl font-semibold text-white mt-8 mb-4">2. The UI Layer (Client & Presentation)</h3>
      <p class="mb-6 text-neutral-400">
        The <code>ui/</code> directory houses React components and client-side logic specific to the feature.
      </p>
      <ul class="list-disc pl-6 mb-8 space-y-2 text-neutral-400">
        <li><code>components/</code>: Feature-specific UI components (e.g., <code>ProfileForm</code>, <code>BillingTable</code>). We favor small, composed components over massive monoliths.</li>
        <li><code>hooks/</code>: Custom hooks wrapping ORPC mutations and queries. This is where we implement Optimistic UI updates, caching strategies, and data transformations.</li>
        <li><code>view/</code>: Page-level container components assembling smaller components into full views, which are then cleanly imported by <code>src/routes/</code>.</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-12 mb-6">The True Benefits of Vertical Slices</h2>
      <ul class="list-disc pl-6 mb-8 space-y-2 text-neutral-400">
        <li><strong>Unmatched Predictability:</strong> Developers know exactly where to find the database query, the API route, and the React component for any given feature—they are all in the same folder. This eliminates hunting through deeply nested directories.</li>
        <li><strong>React Compiler Optimization:</strong> Keeping stable constants outside components allows the React 19 Compiler to perfectly optimize our UI without manual hooks.</li>
        <li><strong>Robust Security:</strong> By mandating authentication middleware at the feature router level, endpoints are secure by default, and access control logic lives next to the data it protects.</li>
        <li><strong>Scalable Team Workflows:</strong> Multiple developers can work on separate features simultaneously with near-zero merge conflicts, as their changes are isolated to different vertical slices.</li>
      </ul>

      <div class="bg-neutral-900/50 border border-white/10 rounded-lg p-6 my-8">
        <p class="text-neutral-300 italic">
          This architecture allows engineering teams to remain agile and robust, providing a premium experience for end-users while keeping the codebase a joy to work in.
        </p>
      </div>
    `,
  },
  {
    id: "1",
    slug: "nextjs-vs-tanstack-start-2026",
    title:
      "Next.js vs TanStack Start: Why Developers are Switching Gears in 2026",
    excerpt:
      "A deep dive into the shifting developer sentiment. Is Next.js fatigue real? Why is TanStack Start gaining so much love? We explore the key differences and why you might want to make the switch.",
    date: "Jan 15, 2026",
    readTime: "8 min read",
    author: {
      name: "Hamsa",
      avatar: "/avatar.jpg",
    },
    tags: ["React", "Next.js", "TanStack", "Web Development"],
    content: `
      <p class="lead text-lg text-neutral-300 mb-8">
        The React framework landscape has been dominated by Next.js for years. It became the default answer for "how to build a React app." But as we moved through 2025 and into 2026, a shift occurred. The excitement around <strong>TanStack Start</strong> is palpable, and "Next.js fatigue" is a term appearing more frequently in developer discussions. Let's break down why.
      </p>

      <h2 class="text-2xl font-bold text-white mt-12 mb-6">The State of Next.js in 2026</h2>
      <p class="mb-6 text-neutral-400">
        Next.js is undeniably powerful. It introduced Server Components to the masses and pushed the web forward. However, that power came with cost: <strong>Complexity</strong>.
      </p>
      <ul class="list-disc pl-6 mb-8 space-y-2 text-neutral-400">
        <li><strong>Cognitive Overload:</strong> The mental model shift from "Client" to "Server" components, caching semantics, and the App Router paradigms has been steep.</li>
        <li><strong>"Magic" vs. Control:</strong> Next.js often favors convention over configuration. When it works, it's magic. When it breaks, debugging the "black box" of Vercel-specific optimizations can be frustrating.</li>
        <li><strong>Vendor Lock-in Concerns:</strong> While you <em>can</em> host Next.js anywhere, features like OpenGraph image generation, ISR, and specific caching behaviors often feel best-suited for Vercel, leaving self-hosting developers feeling like second-class citizens.</li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-12 mb-6">Enter TanStack Start</h2>
      <p class="mb-6 text-neutral-400">
        Created by Tanner Linsley and the team behind the beloved TanStack Query and Table, <strong>TanStack Start</strong> isn't just another framework. It's built on a different philosophy: <em>Type Safety and Predictability over Magic.</em>
      </p>

      <h3 class="text-xl font-semibold text-white mt-8 mb-4">1. End-to-End Type Safety</h3>
      <p class="mb-6 text-neutral-400">
        This is the killer feature. With TanStack Router at its core, your routes are fully typed. You can't navigate to a broken link. Your search params are validated. The API layer (Server Functions) is typesafe from client to server without needing complex codegen or tRPC separate setups. It just flows.
      </p>

      <h3 class="text-xl font-semibold text-white mt-8 mb-4">2. "Just React" + Vite</h3>
      <p class="mb-6 text-neutral-400">
        TanStack Start uses Vite. This means you get the incredibly fast dev server, the vast plugin ecosystem, and a build process that isn't proprietary. It feels closer to "plain React" but with the server capabilities you need.
      </p>

      <h3 class="text-xl font-semibold text-white mt-8 mb-4">3. Server Functions as RPC</h3>
      <p class="mb-6 text-neutral-400">
        Instead of thinking about "API Routes" vs "Server Actions", TanStack Start treats server code as function calls. You define a function with \`createServerFn\`, and you call it from your client. The arguments and return types are inferred. It removes an entire layer of mental overhead.
      </p>

      <div class="bg-neutral-900/50 border border-white/10 rounded-lg p-6 my-8">
        <h4 class="text-lg font-bold text-cyan-400 mb-2">The Vibe Shift</h4>
        <p class="text-neutral-300 italic">
          "Next.js feels like a Framework with a capital F. It has opinions on EVERYTHING. TanStack Start feels like a toolkit for building excellent apps using the libraries you already love (Query, Router)."
        </p>
      </div>

      <h2 class="text-2xl font-bold text-white mt-12 mb-6">Comparison: Who wins?</h2>
      
      <div class="overflow-x-auto">
        <table class="w-full text-left text-neutral-300 border-collapse">
          <thead>
            <tr class="border-b border-white/10">
              <th class="py-4 px-2 font-bold text-white">Feature</th>
              <th class="py-4 px-2 font-bold text-white">Next.js</th>
              <th class="py-4 px-2 font-bold text-white">TanStack Start</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-white/5 bg-white/2">
              <td class="py-4 px-2">Build System</td>
              <td class="py-4 px-2">Webpack / Turbopack</td>
              <td class="py-4 px-2 text-cyan-400 font-medium">Vite</td>
            </tr>
            <tr class="border-b border-white/5">
              <td class="py-4 px-2">Routing</td>
              <td class="py-4 px-2">File-system based</td>
              <td class="py-4 px-2 text-cyan-400 font-medium">Code-based (Type-safe)</td>
            </tr>
            <tr class="border-b border-white/5 bg-white/2">
              <td class="py-4 px-2">Data Fetching</td>
              <td class="py-4 px-2">Fetch patched / Server Components</td>
              <td class="py-4 px-2 text-cyan-400 font-medium">TanStack Query</td>
            </tr>
            <tr class="border-b border-white/5">
              <td class="py-4 px-2">Philosophy</td>
              <td class="py-4 px-2">Batteries included, "Magic"</td>
              <td class="py-4 px-2 text-cyan-400 font-medium">Explicit, "Just React"</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-2xl font-bold text-white mt-12 mb-6">Conclusion</h2>
      <p class="mb-6 text-neutral-400">
        If you are building a massive enterprise site with thousands of static pages, Next.js is still a heavily tested beast. But for dashboard apps, SaaS products, and developers who value <strong>DX (Developer Experience)</strong> and type safety above all else, TanStack Start is winning hearts in 2026.
      </p>
      <p class="text-neutral-400">
        It feels like the "reset" button the React ecosystem needed.
      </p>
    `,
  },
  {
    id: "2",
    slug: "llmo-future-of-websites",
    title: "LLMO: Optimizing Websites for AI and Search Engines",
    excerpt:
      "The web is entering a new phase. Websites are no longer just for humans or search engines—they are being consumed by LLMs. Learn how to optimize for the AI-driven future.",
    date: "Jan 16, 2026",
    readTime: "5 min read",
    author: {
      name: "Hamsa",
      avatar: "/avatar.jpg",
    },
    tags: ["LLMO", "AI", "SEO", "Web Development"],
    content: `
      <p class="lead text-lg text-neutral-300 mb-8">
        <strong>🚀 LLMO (Large Language Model Optimization) is the Future of Websites</strong>
      </p>
      
      <p class="mb-6 text-neutral-400">
        The web is entering a new phase. Websites are no longer consumed only by humans or indexed only by search engines. They are now read, summarized, and recommended by <strong>Large Language Models (LLMs)</strong>.
      </p>

      <h2 class="text-2xl font-bold text-white mt-12 mb-6">What is LLMO?</h2>
      <p class="mb-6 text-neutral-400">
        LLMO focuses on making websites:
      </p>
      <ul class="list-disc pl-6 mb-8 space-y-2 text-neutral-400">
        <li><strong>Easy for AI models to understand context</strong></li>
        <li><strong>Structured for machine-generated summaries</strong></li>
        <li><strong>Optimized for AI-driven search and assistants</strong></li>
        <li><strong>Trustworthy through clarity, consistency, and strong semantics</strong></li>
      </ul>

      <h2 class="text-2xl font-bold text-white mt-12 mb-6">Looking Ahead</h2>
      <p class="mb-6 text-neutral-400">
        As we move forward, the traditional "10 blue links" of search results are evolving.
      </p>
      <ul class="list-disc pl-6 mb-8 space-y-2 text-neutral-400">
        <li>AI answers may replace traditional search results.</li>
        <li>Content visibility will depend on how well LLMs interpret your site.</li>
        <li>Developers and content creators must think beyond SEO.</li>
      </ul>

      <div class="bg-neutral-900/50 border border-white/10 rounded-lg p-6 my-8">
        <h4 class="text-lg font-bold text-purple-400 mb-2">The Winning Strategy</h4>
        <p class="text-neutral-300 italic">
          "Building for humans + AI will be the winning strategy in 2026 and beyond."
        </p>
      </div>

      <h2 class="text-2xl font-bold text-white mt-12 mb-6">The Question</h2>
      <p class="mb-6 text-neutral-400">
        Is LLMO the next evolution of SEO? The trends suggest yes. It's time to start structuring our data not just for Google bot, but for the reasoning engines that are becoming our primary interface to information.
      </p> 
    `,
  },
];
