/**
 * Comprehensive Course & Task Registry
 * Preserves exact file paths from existing directory structure.
 */

export const COURSES = {
  html: {
    id: "html",
    title: "HTML5",
    shortName: "HTML",
    subtitle: "Modern Web Semantics & Structure",
    description: "Build a strong foundation in modern HTML5 semantic elements, forms, media, and SEO best practices.",
    icon: "html5",
    color: "#ea580c",
    bgColor: "#fff7ed",
    darkBgColor: "rgba(234, 88, 12, 0.15)",
    badgeColor: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800/40",
    accentBorder: "border-orange-500",
    gradient: "from-orange-500 to-amber-500",
    daysCount: 10,
    days: [
      {
        day: 1,
        title: "HTML Fundamentals & Introduction",
        description: "Introduction to HTML structure, doctype, head, body, headings, and profile pages.",
        tasks: [
          {
            id: "html-d1-t1",
            taskNumber: 1,
            title: "Company Web Page",
            description: "Build an introductory corporate landing page using core HTML structure, semantic headings, and sections.",
            path: "HTML/Day 1/company.html",
            difficulty: "Beginner",
            type: "html"
          },
          {
            id: "html-d1-t2",
            taskNumber: 2,
            title: "Personal Profile Page",
            description: "Create a personal profile webpage practicing paragraph text, links, and biographical details.",
            path: "HTML/Day 1/profile.html",
            difficulty: "Beginner",
            type: "html"
          }
        ]
      },
      {
        day: 2,
        title: "Text Formatting & Lists",
        description: "Practice ordered, unordered, and definition lists, inline text emphasis, and structural divisions.",
        tasks: [
          {
            id: "html-d2-t1",
            taskNumber: 1,
            title: "Basic Elements & Formatting",
            description: "Practice bold, italic, underline, strikethrough, subscript, and superscript markup.",
            path: "HTML/Day 2/task1.html",
            difficulty: "Beginner",
            type: "html"
          },
          {
            id: "html-d2-t2",
            taskNumber: 2,
            title: "Ordered & Unordered Lists",
            description: "Create nested navigation lists and catalog hierarchies using ol, ul, and li elements.",
            path: "HTML/Day 2/task2.html",
            difficulty: "Beginner",
            type: "html"
          },
          {
            id: "html-d2-t3",
            taskNumber: 3,
            title: "Definition Lists & Quotes",
            description: "Implement dl, dt, dd definitions along with blockquote and citation tags.",
            path: "HTML/Day 2/task3.html",
            difficulty: "Beginner",
            type: "html"
          },
          {
            id: "html-d2-t4",
            taskNumber: 4,
            title: "Content Layout & Break Rules",
            description: "Structure article content with horizontal dividers and semantic paragraphs.",
            path: "HTML/Day 2/task4.html",
            difficulty: "Beginner",
            type: "html"
          },
          {
            id: "html-d2-t5",
            taskNumber: 5,
            title: "Comprehensive Formatting Challenge",
            description: "Complete Day 2 capstone combining formatting tags, nested lists, and semantic tags.",
            path: "HTML/Day 2/task5.html",
            difficulty: "Intermediate",
            type: "html"
          }
        ]
      },
      {
        day: 3,
        title: "Hyperlinks & Navigation",
        description: "Master anchor tags, relative and absolute URL paths, target attributes, and page bookmarks.",
        tasks: [
          {
            id: "html-d3-t1",
            taskNumber: 1,
            title: "Multi-Page Linking & Bookmarks",
            description: "Implement page bookmarks, email mailto links, phone links, and external resource anchors.",
            path: "HTML/Day 3/day3.html",
            difficulty: "Beginner",
            type: "html"
          }
        ]
      },
      {
        day: 4,
        title: "Images & Media Integration",
        description: "Integrate images with responsive attributes, alt text for accessibility, and figure/figcaption.",
        tasks: [
          {
            id: "html-d4-t1",
            taskNumber: 1,
            title: "Image Tags & Aspect Ratios",
            description: "Embed local and remote images with proper alt tags and dimensions.",
            path: "HTML/Day4/task1.html",
            difficulty: "Beginner",
            type: "html"
          },
          {
            id: "html-d4-t2",
            taskNumber: 2,
            title: "Image Galleries with Figures",
            description: "Construct an image collection utilizing figure and figcaption elements.",
            path: "HTML/Day4/task2.html",
            difficulty: "Beginner",
            type: "html"
          },
          {
            id: "html-d4-t3",
            taskNumber: 3,
            title: "Clickable Image Hyperlinks",
            description: "Wrap image tags inside anchor links to build graphical navigational banners.",
            path: "HTML/Day4/task3.html",
            difficulty: "Beginner",
            type: "html"
          },
          {
            id: "html-d4-t4",
            taskNumber: 4,
            title: "Favicons & Modern Image Formats",
            description: "Test WebP and modern image formats with fallback rendering.",
            path: "HTML/Day4/task4.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "html-d4-t5",
            taskNumber: 5,
            title: "Media Showcase Showcase",
            description: "Complete media showcase integrating vehicles, destinations, and food galleries.",
            path: "HTML/Day4/task5.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "html-d4-t6",
            taskNumber: 6,
            title: "My Favorite Things Page",
            description: "Design a curated showcase page featuring favorite books, movies, and places.",
            path: "HTML/Day4/myfavorite.html",
            difficulty: "Intermediate",
            type: "html"
          }
        ]
      },
      {
        day: 5,
        title: "Corporate Branding & Logos",
        description: "Assemble responsive corporate directories and technology logo showcases.",
        tasks: [
          {
            id: "html-d5-t1",
            taskNumber: 1,
            title: "Tech Companies Brand Board",
            description: "Build an index displaying top IT companies with logos (Amazon, Deloitte, Flipkart, Google, Infosys).",
            path: "HTML/Day5/task1.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "html-d5-t2",
            taskNumber: 2,
            title: "Interactive Corporate Directory",
            description: "Interactive brand listing with external links, logo tiles, and responsive markup.",
            path: "HTML/Day5/task2.1.html",
            difficulty: "Intermediate",
            type: "html"
          }
        ]
      },
      {
        day: 6,
        title: "HTML Forms & User Inputs",
        description: "Build rich input forms with validation attributes, fieldsets, textareas, dropdowns, and buttons.",
        tasks: [
          {
            id: "html-d6-t1",
            taskNumber: 1,
            title: "Comprehensive Form Elements",
            description: "Construct a complete registration form with text inputs, radio, checkboxes, selects, and submit handlers.",
            path: "HTML/Day6/form.html",
            difficulty: "Intermediate",
            type: "html"
          }
        ]
      },
      {
        day: 7,
        title: "HTML Tables & Data Representation",
        description: "Structure tabular data using table, thead, tbody, tfoot, tr, th, td, colspan, and rowspan.",
        tasks: [
          {
            id: "html-d7-t1",
            taskNumber: 1,
            title: "Student Marks & Records Table",
            description: "Display academic marks, student roll numbers, and grades with merged header cells.",
            path: "HTML/Day7/student.html",
            difficulty: "Beginner",
            type: "html"
          },
          {
            id: "html-d7-t2",
            taskNumber: 2,
            title: "Employee Directory & Salary Table",
            description: "Build an organizational staff directory with department, role, and salary columns.",
            path: "HTML/Day7/employee.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "html-d7-t3",
            taskNumber: 3,
            title: "College Timetable & Schedule",
            description: "Design an intricate weekly class schedule using extensive rowspan and colspan.",
            path: "HTML/Day7/college.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "html-d7-t4",
            taskNumber: 4,
            title: "Hospital Ward & Patient Ledger",
            description: "Tabulate patient logs, doctor appointments, room allotments, and statuses.",
            path: "HTML/Day7/hospital.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "html-d7-t5",
            taskNumber: 5,
            title: "E-Commerce Product Pricing Table",
            description: "Comparison matrix featuring product specifications, SKU codes, and pricing tiers.",
            path: "HTML/Day7/product.html",
            difficulty: "Intermediate",
            type: "html"
          }
        ]
      },
      {
        day: 8,
        title: "Semantic HTML5 Architecture",
        description: "Implement header, nav, main, section, article, aside, and footer semantic containers.",
        tasks: [
          {
            id: "html-d8-t1",
            taskNumber: 1,
            title: "Semantic Header & Nav",
            description: "Structure accessible document headers and navigation menus.",
            path: "HTML/Day8/task1.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "html-d8-t2",
            taskNumber: 2,
            title: "Articles vs Sections",
            description: "Demonstrate proper usage of independent articles nested inside categorized sections.",
            path: "HTML/Day8/task2.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "html-d8-t3",
            taskNumber: 3,
            title: "Sidebar & Complementary Aside",
            description: "Create an informational sidebar with related links, tags, and author info.",
            path: "HTML/Day8/task3.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "html-d8-t4",
            taskNumber: 4,
            title: "Document Footer & Copyrights",
            description: "Build an accessible footer with site-map anchors, contacts, and legal notices.",
            path: "HTML/Day8/task4.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "html-d8-t5",
            taskNumber: 5,
            title: "Complete Semantic Portal",
            description: "Synthesize all HTML5 semantic tags into a full newspaper/blog web layout.",
            path: "HTML/Day8/task5.html",
            difficulty: "Advanced",
            type: "html"
          }
        ]
      },
      {
        day: 9,
        title: "Audio, Video & Embedded Media",
        description: "Embed native HTML5 audio and video players with controls, sources, and embedded documents.",
        tasks: [
          {
            id: "html-d9-t1",
            taskNumber: 1,
            title: "Audio Player with Controls",
            description: "Embed MP3 audio with custom controls, autoplay policies, and fallback text.",
            path: "HTML/Day9/task1.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "html-d9-t2",
            taskNumber: 2,
            title: "Video Player Integration",
            description: "Configure HTML5 video player with MP4 source, poster thumbnail, and loop settings.",
            path: "HTML/Day9/task2.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "html-d9-t3",
            taskNumber: 3,
            title: "Day 9 - Task 3: Embedded Documents",
            description: "Embed PDF documents and external interactive widgets with iframes and object tags.",
            path: "HTML/Day9/task3.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "html-d9-t4",
            taskNumber: 4,
            title: "Day 9 - Task 4: Interactive Media Player",
            description: "Rich media dashboard with synchronised audio-video playback controls.",
            path: "HTML/Day9/task4.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "html-d9-t5",
            taskNumber: 5,
            title: "Day 9 - Task 5: Multimedia Portal",
            description: "Final comprehensive multimedia hub combining video, audio, and embedded resources.",
            path: "HTML/Day9/task5.html",
            difficulty: "Advanced",
            type: "html"
          }
        ]
      },
      {
        day: 10,
        title: "SEO, Meta Tags & Web Accessibility",
        description: "Master Open Graph, Twitter cards, meta descriptions, viewport, accessibility ARIA, and HTML5 capstone review.",
        tasks: [
          {
            id: "html-d10-t1",
            taskNumber: 1,
            title: "HTML5 Capstone & SEO Master",
            description: "Review core HTML5 concepts, meta tags, OpenGraph attributes, and semantic document outline.",
            path: "HTML/Day 1/company.html",
            difficulty: "Advanced",
            type: "html",
            note: "Capstone synthesis reviewing all 9 days of HTML5 techniques."
          }
        ]
      }
    ]
  },

  css: {
    id: "css",
    title: "CSS3 & Styling",
    shortName: "CSS",
    subtitle: "Modern Layouts, Flexbox, Grid & Animations",
    description: "Design clean, responsive, and aesthetically pleasing websites using CSS3 selectors, box model, Flexbox, Grid, and transitions.",
    icon: "palette",
    color: "#2563eb",
    bgColor: "#eff6ff",
    darkBgColor: "rgba(37, 99, 235, 0.15)",
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800/40",
    accentBorder: "border-blue-500",
    gradient: "from-blue-600 to-indigo-600",
    daysCount: 10,
    days: [
      {
        day: 1,
        title: "CSS Selectors & Cascade Basics",
        description: "Element, class, id selectors, inline vs internal vs external stylesheets, and CSS color values.",
        tasks: [
          {
            id: "css-d1-t1",
            taskNumber: 1,
            title: "Day 1 Challenge Task",
            description: "Apply complex CSS selectors, specificity, and cascading rules to style an interactive document.",
            path: "CSS/Day1/challengetask.html",
            difficulty: "Beginner",
            type: "html"
          },
          {
            id: "css-d1-t2",
            taskNumber: 2,
            title: "Task 1: Basic Selectors",
            description: "Practice element type, class, and ID selector styling with colors and font sizes.",
            path: "CSS/Day1/task1.html",
            difficulty: "Beginner",
            type: "html"
          },
          {
            id: "css-d1-t3",
            taskNumber: 3,
            title: "Task 2: Backgrounds & Borders",
            description: "Explore background colors, images, gradients, and border radius variations.",
            path: "CSS/Day1/task2.html",
            difficulty: "Beginner",
            type: "html"
          },
          {
            id: "css-d1-t4",
            taskNumber: 4,
            title: "Task 3: Text Typography",
            description: "Apply font-family, letter-spacing, text-transform, line-height, and shadows.",
            path: "CSS/Day1/task3.html",
            difficulty: "Beginner",
            type: "html"
          },
          {
            id: "css-d1-t5",
            taskNumber: 5,
            title: "Task 4: Grouping & Combinators",
            description: "Style descendant, child (>), adjacent sibling (+), and general sibling (~) elements.",
            path: "CSS/Day1/task4.html",
            difficulty: "Beginner",
            type: "html"
          },
          {
            id: "css-d1-t6",
            taskNumber: 6,
            title: "Task 5: Day 1 Summary",
            description: "Comprehensive page applying all core Day 1 CSS fundamentals.",
            path: "CSS/Day1/task5.html",
            difficulty: "Intermediate",
            type: "html"
          }
        ]
      },
      {
        day: 2,
        title: "CSS Box Model & Spacing",
        description: "Deep dive into content, padding, border, margin, box-sizing, and margin collapsing.",
        tasks: [
          {
            id: "css-d2-t1",
            taskNumber: 1,
            title: "Task 6: Box Model Capstone",
            description: "Master box-sizing: border-box, padding distributions, and border stylings.",
            path: "CSS/Day2/task6.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "css-d2-t2",
            taskNumber: 2,
            title: "Task 1: Margin & Padding",
            description: "Experiment with directional padding and margin auto centering.",
            path: "CSS/Day2/task1.html",
            difficulty: "Beginner",
            type: "html"
          },
          {
            id: "css-d2-t3",
            taskNumber: 3,
            title: "Task 2: Box Sizing Properties",
            description: "Compare content-box vs border-box calculations in multi-column layouts.",
            path: "CSS/Day2/task2.html",
            difficulty: "Beginner",
            type: "html"
          },
          {
            id: "css-d2-t4",
            taskNumber: 4,
            title: "Task 3: Outline & Border Radius",
            description: "Stylize buttons with rounded corners, outlines, and offset shadows.",
            path: "CSS/Day2/task3.html",
            difficulty: "Beginner",
            type: "html"
          },
          {
            id: "css-d2-t5",
            taskNumber: 5,
            title: "Task 4: Box Shadows & Depth",
            description: "Create cards with elevation shadows, inset shadows, and hover elevation.",
            path: "CSS/Day2/task4.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "css-d2-t6",
            taskNumber: 6,
            title: "Task 5: Card Layout Architecture",
            description: "Construct product card widgets balancing padding, borders, and margins.",
            path: "CSS/Day2/task5.html",
            difficulty: "Intermediate",
            type: "html"
          }
        ]
      },
      {
        day: 3,
        title: "CSS Display & Positioning",
        description: "Static, relative, absolute, fixed, and sticky positioning along with z-index stacking context.",
        tasks: [
          {
            id: "css-d3-t1",
            taskNumber: 1,
            title: "Day 3 Challenge Task",
            description: "Build an interactive UI with sticky headers, overlay modals, and floating badges.",
            path: "CSS/Day3/challengetask.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "css-d3-t2",
            taskNumber: 2,
            title: "Task 1: Display Properties",
            description: "Compare block, inline, inline-block, and none display behaviors.",
            path: "CSS/Day3/task1.html",
            difficulty: "Beginner",
            type: "html"
          },
          {
            id: "css-d3-t3",
            taskNumber: 3,
            title: "Task 2: Relative & Absolute Positioning",
            description: "Place notification badges and corner tags precisely relative to parent cards.",
            path: "CSS/Day3/task2.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "css-d3-t4",
            taskNumber: 3,
            title: "Task 3: Fixed Navbar & Sticky Sidebar",
            description: "Implement a sticky navigation bar that remains pinned while scrolling.",
            path: "CSS/Day3/task3.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "css-d3-t5",
            taskNumber: 4,
            title: "Task 4: Z-Index & Stacking Context",
            description: "Manage overlapping layers, drop-down menus, and modal dialog backdrops.",
            path: "CSS/Day3/task4.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "css-d3-t6",
            taskNumber: 5,
            title: "Task 5: Brand Card Positioning",
            description: "Style brand partner showcase using overlapping badges and custom cards.",
            path: "CSS/Day3/task5.html",
            difficulty: "Intermediate",
            type: "html"
          }
        ]
      },
      {
        day: 4,
        title: "CSS Floating & Clearfix Layouts",
        description: "Classic multi-column layouts, text wrapping around images, float property, and clearing fixes.",
        tasks: [
          {
            id: "css-d4-t1",
            taskNumber: 1,
            title: "Day 4 Multi-Column Layout",
            description: "Build a multi-column article layout utilizing floats, clearfixes, and responsive boundaries.",
            path: "CSS/Day4/index.html",
            difficulty: "Intermediate",
            type: "html"
          }
        ]
      },
      {
        day: 5,
        title: "CSS Flexbox Fundamentals",
        description: "Flex container, flex-direction, justify-content, align-items, flex-wrap, and flex-grow/shrink.",
        tasks: [
          {
            id: "css-d5-t1",
            taskNumber: 1,
            title: "Day 5 Flexbox Layout Showcase",
            description: "Build a modern flexible navbar, centered hero banner, and auto-wrapping card layout.",
            path: "CSS/Day5/index.html",
            difficulty: "Intermediate",
            type: "html"
          }
        ]
      },
      {
        day: 6,
        title: "Advanced Flexbox & Grid Introduction",
        description: "Align-self, flex order, gap properties, and two-dimensional CSS Grid fundamentals.",
        tasks: [
          {
            id: "css-d6-t1",
            taskNumber: 1,
            title: "Task 5: Flexbox Master Layout",
            description: "Construct an eCommerce product listing with dynamic flexible distribution.",
            path: "CSS/Day6/task5.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "css-d6-t2",
            taskNumber: 2,
            title: "Task 1: Flex Alignment",
            description: "Practice justify-content and align-items combinations.",
            path: "CSS/Day6/task1.html",
            difficulty: "Beginner",
            type: "html"
          },
          {
            id: "css-d6-t3",
            taskNumber: 3,
            title: "Task 2: Flex Wrap & Gap",
            description: "Build responsive tag clouds and button bars using flex-wrap and gap.",
            path: "CSS/Day6/task2.html",
            difficulty: "Beginner",
            type: "html"
          },
          {
            id: "css-d6-t4",
            taskNumber: 4,
            title: "Task 3: Flex Grow & Shrink",
            description: "Calculate proportional flex item sizing with flex-basis and flex-grow.",
            path: "CSS/Day6/task3.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "css-d6-t5",
            taskNumber: 5,
            title: "Task 4: Nested Flex Containers",
            description: "Create complex web cards with nested flex headers, bodies, and action footers.",
            path: "CSS/Day6/task4.html",
            difficulty: "Intermediate",
            type: "html"
          }
        ]
      },
      {
        day: 7,
        title: "CSS Grid Architecture",
        description: "Grid template columns, rows, fractional fr units, minmax, and grid-template-areas.",
        tasks: [
          {
            id: "css-d7-t1",
            taskNumber: 1,
            title: "Task 4: CSS Grid Dashboard",
            description: "Design an intricate dashboard layout with header, sidebar, widgets, and analytics panel.",
            path: "CSS/Day7/task4.html",
            difficulty: "Advanced",
            type: "html"
          },
          {
            id: "css-d7-t2",
            taskNumber: 2,
            title: "Task 1: Basic Grid Template",
            description: "Establish a 3x3 uniform grid with equal column fractions and gutters.",
            path: "CSS/Day7/task1.html",
            difficulty: "Beginner",
            type: "html"
          },
          {
            id: "css-d7-t3",
            taskNumber: 3,
            title: "Task 2: Grid Column & Row Spanning",
            description: "Span featured tiles across multiple columns and rows like a Bento grid.",
            path: "CSS/Day7/task2.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "css-d7-t4",
            taskNumber: 4,
            title: "Task 3: Grid Template Areas",
            description: "Define named grid template areas for semantic, readable web templates.",
            path: "CSS/Day7/task3.html",
            difficulty: "Intermediate",
            type: "html"
          }
        ]
      },
      {
        day: 8,
        title: "Responsive Web Design & Media Queries",
        description: "Mobile-first philosophy, breakpoint design, flexible units (vw, vh, rem, em), and fluid typography.",
        tasks: [
          {
            id: "css-d8-t1",
            taskNumber: 1,
            title: "Task 5: Fully Responsive Portal",
            description: "Build an adaptive site transitioning seamlessly across mobile, tablet, and widescreen monitors.",
            path: "CSS/Day8/task5.html",
            difficulty: "Advanced",
            type: "html"
          },
          {
            id: "css-d8-t2",
            taskNumber: 2,
            title: "Task 1: Mobile-First Breakpoints",
            description: "Write media queries targeting min-width 640px, 768px, and 1024px.",
            path: "CSS/Day8/task1.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "css-d8-t3",
            taskNumber: 3,
            title: "Task 2: Responsive Navigation Bar",
            description: "Convert desktop horizontal navbar into a stacked mobile menu on smaller screens.",
            path: "CSS/Day8/task2.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "css-d8-t4",
            taskNumber: 4,
            title: "Task 3: Fluid Typography with Clamp",
            description: "Employ clamp() and viewport units for typography that scales dynamically.",
            path: "CSS/Day8/task3.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "css-d8-t5",
            taskNumber: 5,
            title: "Task 4: Responsive Image Grids",
            description: "Auto-fit and auto-fill responsive grid columns with minmax(200px, 1fr).",
            path: "CSS/Day8/task4.html",
            difficulty: "Intermediate",
            type: "html"
          }
        ]
      },
      {
        day: 9,
        title: "CSS Transitions & Transforms",
        description: "Hover effects, 2D/3D transforms (translate, rotate, scale, skew), and cubic-bezier easing.",
        tasks: [
          {
            id: "css-d9-t1",
            taskNumber: 1,
            title: "Task 5: Interactive Card Animations",
            description: "Create 3D flip cards, smooth scale interactions, and micro-animations.",
            path: "CSS/Day9/task5.html",
            difficulty: "Advanced",
            type: "html"
          },
          {
            id: "css-d9-t2",
            taskNumber: 2,
            title: "Task 1: Button Hover Transitions",
            description: "Animate background colors, borders, and shadows with ease-in-out timing.",
            path: "CSS/Day9/task1.html",
            difficulty: "Beginner",
            type: "html"
          },
          {
            id: "css-d9-t3",
            taskNumber: 3,
            title: "Task 2: 2D Transforms",
            description: "Practice transform translate, rotate, scale, and skew on mouse hover.",
            path: "CSS/Day9/task2.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "css-d9-t4",
            taskNumber: 4,
            title: "Task 3: Animated Image Overlays",
            description: "Slide caption overlays onto gallery images with smooth CSS transitions.",
            path: "CSS/Day9/task3.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "css-d9-t5",
            taskNumber: 5,
            title: "Task 4: Interactive Loading Spinners",
            description: "Design infinite rotating spinner badges and pulsing indicators.",
            path: "CSS/Day9/task4.html",
            difficulty: "Intermediate",
            type: "html"
          }
        ]
      },
      {
        day: 10,
        title: "CSS Keyframe Animations & Capstone Challenge",
        description: "Complex @keyframes multi-step animations, infinite loops, and the Day 10 styling challenge.",
        tasks: [
          {
            id: "css-d10-t1",
            taskNumber: 1,
            title: "Day 10 Challenge: Grand Showcase",
            description: "Master challenge combining CSS Grid, Flexbox, keyframe animations, and custom UI design.",
            path: "CSS/Day10/challenge.html",
            difficulty: "Advanced",
            type: "html"
          },
          {
            id: "css-d10-t2",
            taskNumber: 2,
            title: "Task 1: Keyframe Pulse & Wave",
            description: "Build glowing pulse rings and wave loading animations.",
            path: "CSS/Day10/task1.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "css-d10-t3",
            taskNumber: 3,
            title: "Task 2: Sliding Banner Carousel",
            description: "Create an automated CSS-only sliding image banner.",
            path: "CSS/Day10/task2.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "css-d10-t4",
            taskNumber: 4,
            title: "Task 3: Parallax Scrolling Illusion",
            description: "Apply CSS background-attachment: fixed for subtle depth effects.",
            path: "CSS/Day10/task3.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "css-d10-t5",
            taskNumber: 5,
            title: "Task 4: Glassmorphism UI Card",
            description: "Craft modern frosted glass cards using backdrop-filter and translucent borders.",
            path: "CSS/Day10/task4.html",
            difficulty: "Advanced",
            type: "html"
          },
          {
            id: "css-d10-t6",
            taskNumber: 6,
            title: "Task 5: Mobile Interactive Showcase",
            description: "Design a high-fidelity mobile device mockup with interactive widgets.",
            path: "CSS/Day10/task5.html",
            difficulty: "Advanced",
            type: "html"
          },
          {
            id: "css-d10-test",
            taskNumber: 7,
            title: "🎯 CSS Formal Assessment Test",
            description: "Comprehensive timed evaluation assessing end-to-end CSS competencies.",
            path: "CSS/TEST/task5.html",
            difficulty: "Expert",
            type: "html",
            isTest: true
          }
        ]
      }
    ]
  },

  javascript: {
    id: "javascript",
    title: "JavaScript",
    shortName: "JavaScript",
    subtitle: "Modern ES6+, DOM Manipulation, Async JS & APIs",
    description: "Master modern ECMAScript, variables, arrays, objects, functions, DOM traversal, event handling, async/await, and APIs.",
    icon: "code",
    color: "#eab308",
    bgColor: "#fefce8",
    darkBgColor: "rgba(234, 179, 8, 0.15)",
    badgeColor: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800/40",
    accentBorder: "border-yellow-500",
    gradient: "from-amber-500 to-yellow-500",
    daysCount: 20,
    days: [
      {
        day: 1,
        title: "JavaScript Fundamentals & Syntax",
        description: "Variables (let, const, var), primitives, data types, console logging, and JS runtime mechanics.",
        tasks: [
          {
            id: "js-d1-t1",
            taskNumber: 1,
            title: "Day 1: JS Fundamentals & Theory",
            description: "Comprehensive notes and exercises covering JavaScript data types, declaration rules, and execution context.",
            path: "JAVASCRIPT/Day1/JAVASCRIPT.txt",
            difficulty: "Beginner",
            type: "txt"
          }
        ]
      },
      {
        day: 2,
        title: "Operators, Expressions & Type Coercion",
        description: "Arithmetic, assignment, comparison (== vs ===), logical operators, and truthy/falsy evaluation.",
        tasks: [
          {
            id: "js-d2-t1",
            taskNumber: 1,
            title: "Day 2: Expressions & Operators Lab",
            description: "Hands-on scripting evaluating complex arithmetic expressions, equality comparisons, and type casting.",
            path: "JAVASCRIPT/Day2/index.html",
            difficulty: "Beginner",
            type: "html"
          }
        ]
      },
      {
        day: 3,
        title: "Control Flow & Conditional Logic",
        description: "if/else statements, ternary operators, switch-case blocks, and conditional branching.",
        tasks: [
          {
            id: "js-d3-t1",
            taskNumber: 1,
            title: "Day 3: Conditionals & Branching",
            description: "Interactive examples of grading calculators, authentication branching, and switch statements.",
            path: "JAVASCRIPT/Day3/index.html",
            difficulty: "Beginner",
            type: "html"
          }
        ]
      },
      {
        day: 4,
        title: "Loops & Iterations",
        description: "for, while, do-while loops, break/continue statements, and nested iteration patterns.",
        tasks: [
          {
            id: "js-d4-t1",
            taskNumber: 1,
            title: "Day 4: Loop Mastery & Patterns",
            description: "Print mathematical series, Fibonacci numbers, number pyramids, and array traversals.",
            path: "JAVASCRIPT/Day4/index.html",
            difficulty: "Beginner",
            type: "html"
          }
        ]
      },
      {
        day: 5,
        title: "Functions, Parameters & Scope",
        description: "Function declarations, function expressions, default parameters, return values, and global vs local scope.",
        tasks: [
          {
            id: "js-d5-t1",
            taskNumber: 1,
            title: "Day 5: Logic Assignment",
            description: "Algorithmic challenges evaluating prime numbers, palindromes, and factorials using pure functions.",
            path: "JAVASCRIPT/Day5/Assignment/index.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "js-d5-t2",
            taskNumber: 2,
            title: "Day 5: Functional Calculator Task",
            description: "Develop a modular mathematical calculator leveraging clean reusable functions.",
            path: "JAVASCRIPT/Day5/Task/index.html",
            difficulty: "Intermediate",
            type: "html"
          }
        ]
      },
      {
        day: 6,
        title: "Arrow Functions & Problem Solving",
        description: "ES6 arrow functions, lexical this, concise return syntax, and problem-solving suites.",
        tasks: [
          {
            id: "js-d6-t1",
            taskNumber: 1,
            title: "Day 6: Tasks 1-5 Problem Suite",
            description: "Practical exercises 1 through 5 focusing on arrow functions and string algorithms.",
            path: "JAVASCRIPT/Day6/Task1_5/index.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "js-d6-t2",
            taskNumber: 2,
            title: "Day 6: Tasks 6-10 Problem Suite",
            description: "Advanced problem solving 6 through 10 exercising complex conditions and array loops.",
            path: "JAVASCRIPT/Day6/Task6_10/index.html",
            difficulty: "Intermediate",
            type: "html"
          }
        ]
      },
      {
        day: 7,
        title: "Arrays & Iteration Methods",
        description: "Array creation, push/pop/shift/unshift, slice/splice, and forEach array iteration.",
        tasks: [
          {
            id: "js-d7-t1",
            taskNumber: 1,
            title: "Day 7: Array Operations & Transforms",
            description: "Manipulate datasets using mutable and immutable array operations in a visual interface.",
            path: "JAVASCRIPT/Day7/index.html",
            difficulty: "Intermediate",
            type: "html"
          }
        ]
      },
      {
        day: 8,
        title: "Objects, Properties & Methods",
        description: "Object literals, dot and bracket notations, this keyword, Object.keys(), Object.values(), and Object.entries().",
        tasks: [
          {
            id: "js-d8-t1",
            taskNumber: 1,
            title: "Day 8: Object Modeling & Methods",
            description: "Model real-world entities (Users, Products, Bank Accounts) with properties and embedded methods.",
            path: "JAVASCRIPT/Day8/index.html",
            difficulty: "Intermediate",
            type: "html"
          }
        ]
      },
      {
        day: 9,
        title: "ES6+ Modern Features & Destructuring",
        description: "Template literals, array & object destructuring, rest and spread operators (...), and optional chaining.",
        tasks: [
          {
            id: "js-d9-t1",
            taskNumber: 1,
            title: "Day 9: ES6+ Modern Syntax Lab",
            description: "Modernize JavaScript code with rest parameters, object merges, template strings, and destructuring.",
            path: "JAVASCRIPT/Day9/index.html",
            difficulty: "Intermediate",
            type: "html"
          }
        ]
      },
      {
        day: 10,
        title: "Higher-Order Functions: Map, Filter, Reduce",
        description: "Functional programming in JavaScript, chaining array methods, accumulator patterns, and pure functions.",
        tasks: [
          {
            id: "js-d10-t1",
            taskNumber: 1,
            title: "Day 10: Higher-Order Functions Suite",
            description: "Data processing pipeline utilizing .map(), .filter(), and .reduce() on structured records.",
            path: "JAVASCRIPT/Day10/Tasks/index.html",
            difficulty: "Advanced",
            type: "html"
          }
        ]
      },
      {
        day: 11,
        title: "Strings, Regex & Text Manipulation",
        description: "String slicing, trimming, case conversions, template interpolation, and regular expressions.",
        tasks: [
          {
            id: "js-d11-t1",
            taskNumber: 1,
            title: "Day 11: String Utility & Validator",
            description: "Build email format validators, word count analyzers, and text transformers.",
            path: "JAVASCRIPT/Day11/index.html",
            difficulty: "Intermediate",
            type: "html"
          }
        ]
      },
      {
        day: 12,
        title: "Dates, Math & Browser Storage",
        description: "Date objects, timestamps, Math library methods, localStorage, and sessionStorage APIs.",
        tasks: [
          {
            id: "js-d12-t1",
            taskNumber: 1,
            title: "Day 12: Storage & Clock Utilities",
            description: "Create an active digital clock, countdown timer, and local storage state persistence.",
            path: "JAVASCRIPT/Day12/index.html",
            difficulty: "Intermediate",
            type: "html"
          }
        ]
      },
      {
        day: 13,
        title: "DOM Selection & Traversal",
        description: "Document Object Model tree, getElementById, querySelector, querySelectorAll, and parent/child navigation.",
        tasks: [
          {
            id: "js-d13-t1",
            taskNumber: 1,
            title: "DOM Structure Notes",
            description: "Comprehensive notes on browser DOM hierarchy, nodes, elements, and attributes.",
            path: "JAVASCRIPT/Day13/DOM.txt",
            difficulty: "Beginner",
            type: "txt"
          },
          {
            id: "js-d13-t2",
            taskNumber: 2,
            title: "Day 13 - Task 1: DOM Elements",
            description: "Target and inspect DOM elements dynamically using modern selector methods.",
            path: "JAVASCRIPT/Day13/Task1.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "js-d13-t3",
            taskNumber: 3,
            title: "Day 13 - Task 2: DOM Manipulations",
            description: "Alter element text, innerHTML, style rules, and classList toggle methods dynamically.",
            path: "JAVASCRIPT/Day13/Task2.html",
            difficulty: "Intermediate",
            type: "html"
          }
        ]
      },
      {
        day: 15,
        title: "DOM Event Handling & Interactions",
        description: "addEventListener, click, input, submit, keydown events, event bubbling, and event delegation.",
        tasks: [
          {
            id: "js-d15-t1",
            taskNumber: 1,
            title: "Task 1: Dynamic Button Interactivity",
            description: "Listen to user clicks and keystrokes to trigger real-time UI reactions.",
            path: "JAVASCRIPT/Day15/task1.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "js-d15-t2",
            taskNumber: 2,
            title: "Task 2: Dynamic Element Generation",
            description: "Create, append, and remove HTML elements dynamically with document.createElement.",
            path: "JAVASCRIPT/Day15/task2.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "js-d15-t3",
            taskNumber: 3,
            title: "Task 3: Interactive Image Gallery",
            description: "Construct an interactive gallery with thumbnail previews and dynamic zoom.",
            path: "JAVASCRIPT/Day15/task3.html",
            difficulty: "Intermediate",
            type: "html"
          }
        ]
      },
      {
        day: 16,
        title: "Asynchronous JavaScript & Promises",
        description: "Event loop, setTimeout, setInterval, callbacks, Promise states (.then, .catch, .finally).",
        tasks: [
          {
            id: "js-d16-t1",
            taskNumber: 1,
            title: "Task 1: Async Timer & Stopwatches",
            description: "Implement precision stopwatches and interval timers with asynchronous controls.",
            path: "JAVASCRIPT/Day16/task1.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "js-d16-t2",
            taskNumber: 2,
            title: "Task 2: Custom Promise Chains",
            description: "Simulate network delay and sequential asynchronous steps via chained Promises.",
            path: "JAVASCRIPT/Day16/task2.html",
            difficulty: "Advanced",
            type: "html"
          },
          {
            id: "js-d16-t3",
            taskNumber: 3,
            title: "Task 3: Promise.all Concurrent Tasks",
            description: "Orchestrate multiple concurrent tasks and aggregate resolved outputs.",
            path: "JAVASCRIPT/Day16/task3.html",
            difficulty: "Advanced",
            type: "html"
          }
        ]
      },
      {
        day: 17,
        title: "Fetch API & Asynchronous Await",
        description: "HTTP GET/POST requests, async/await keywords, JSON parsing, error boundaries, and loading spinners.",
        tasks: [
          {
            id: "js-d17-t1",
            taskNumber: 1,
            title: "Task 1: Fetching Public REST APIs",
            description: "Retrieve remote JSON records from a public API endpoint and render them in cards.",
            path: "JAVASCRIPT/Day17/task1.html",
            difficulty: "Advanced",
            type: "html"
          },
          {
            id: "js-d17-t2",
            taskNumber: 2,
            title: "Task 2: Async Data Search & Filter",
            description: "Implement an instant client-side search filter over asynchronous API results.",
            path: "JAVASCRIPT/Day17/task2.html",
            difficulty: "Advanced",
            type: "html"
          },
          {
            id: "js-d17-t3",
            taskNumber: 3,
            title: "Task 3: Error Handling & Retry Mechanism",
            description: "Gracefully catch 404/500 HTTP failures and display friendly retry notifications.",
            path: "JAVASCRIPT/Day17/task3.html",
            difficulty: "Advanced",
            type: "html"
          }
        ]
      },
      {
        day: 18,
        title: "Full Auth Simulation & Dashboard",
        description: "User registration, password encryption concept, session auth, validation, and restricted dashboard.",
        tasks: [
          {
            id: "js-d18-t1",
            taskNumber: 1,
            title: "User Registration System",
            description: "Complete form validation storing user credentials securely in browser memory.",
            path: "JAVASCRIPT/Day18/register.html",
            difficulty: "Advanced",
            type: "html"
          },
          {
            id: "js-d18-t2",
            taskNumber: 2,
            title: "Login Authentication Portal",
            description: "Authenticate submitted credentials against stored records with error indicators.",
            path: "JAVASCRIPT/Day18/login.html",
            difficulty: "Advanced",
            type: "html"
          },
          {
            id: "js-d18-t3",
            taskNumber: 3,
            title: "Protected Member Dashboard",
            description: "Restricted user interface displaying personalized session data and logout functionality.",
            path: "JAVASCRIPT/Day18/dashboard.html",
            difficulty: "Advanced",
            type: "html"
          }
        ]
      },
      {
        day: 19,
        title: "Advanced JavaScript Interactive Applications",
        description: "Complete end-to-end interactive apps: calculators, todo lists, weather cards, and drag & drop.",
        tasks: [
          {
            id: "js-d19-t1",
            taskNumber: 1,
            title: "Task 1: Interactive App 1",
            description: "Develop a feature-rich dynamic application with stateful DOM bindings.",
            path: "JAVASCRIPT/Day19/task1.html",
            difficulty: "Advanced",
            type: "html"
          },
          {
            id: "js-d19-t2",
            taskNumber: 2,
            title: "Task 2: Interactive App 2",
            description: "Complex UI component managing real-time calculations and user inputs.",
            path: "JAVASCRIPT/Day19/task2.html",
            difficulty: "Advanced",
            type: "html"
          },
          {
            id: "js-d19-t3",
            taskNumber: 3,
            title: "Task 3: Interactive App 3",
            description: "Modular interactive tool with input validation and feedback animations.",
            path: "JAVASCRIPT/Day19/task3.html",
            difficulty: "Advanced",
            type: "html"
          },
          {
            id: "js-d19-t4",
            taskNumber: 4,
            title: "Task 4: Interactive App 4",
            description: "Dynamic data presentation with sorting, filtering, and local state update.",
            path: "JAVASCRIPT/Day19/task4.html",
            difficulty: "Advanced",
            type: "html"
          },
          {
            id: "js-d19-t5",
            taskNumber: 5,
            title: "Task 5: Interactive App 5",
            description: "Complete Day 19 capstone widget demonstrating event-driven programming.",
            path: "JAVASCRIPT/Day19/task5.html",
            difficulty: "Advanced",
            type: "html"
          }
        ]
      },
      {
        day: 20,
        title: "JavaScript Capstone Project",
        description: "Full-scale JavaScript application orchestrating asynchronous data, local storage, and polished UI.",
        tasks: [
          {
            id: "js-d20-t1",
            taskNumber: 1,
            title: "Day 20 Capstone Web Application",
            description: "Production-ready JavaScript web app showcasing full mastery of JS frontend capabilities.",
            path: "JAVASCRIPT/Day20/index.html",
            difficulty: "Expert",
            type: "html"
          }
        ]
      }
    ]
  },

  tailwind: {
    id: "tailwind",
    title: "Tailwind CSS",
    shortName: "Tailwind",
    subtitle: "Utility-First CSS Framework & Rapid UI Prototyping",
    description: "Build clean, bespoke, and lightning-fast user interfaces without leaving your HTML using Tailwind utility classes.",
    icon: "wind",
    color: "#0284c7",
    bgColor: "#f0f9ff",
    darkBgColor: "rgba(2, 132, 199, 0.15)",
    badgeColor: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-800/40",
    accentBorder: "border-sky-500",
    gradient: "from-sky-500 to-cyan-500",
    daysCount: 5,
    days: [
      {
        day: 1,
        title: "Tailwind Utilities & Core System",
        description: "Spacing, sizing, typography, colors, flexbox, and responsive utility modifiers.",
        tasks: [
          {
            id: "tw-d1-t1",
            taskNumber: 1,
            title: "Task 1: Utility Typography & Text",
            description: "Practice font sizes, weights, leading, tracking, text colors, and alignments.",
            path: "TAILWINDCSS/Day1/task1.html",
            difficulty: "Beginner",
            type: "html"
          },
          {
            id: "tw-d1-t2",
            taskNumber: 2,
            title: "Task 2: Spacing & Flexbox Layout",
            description: "Build flexible containers with flex, items-center, justify-between, and gap utilities.",
            path: "TAILWINDCSS/Day1/task2.html",
            difficulty: "Beginner",
            type: "html"
          },
          {
            id: "tw-d1-t3",
            taskNumber: 3,
            title: "Task 3: Borders, Radii & Shadows",
            description: "Craft modern cards using rounded-2xl, shadow-lg, and border utilities.",
            path: "TAILWINDCSS/Day1/task3.html",
            difficulty: "Beginner",
            type: "html"
          },
          {
            id: "tw-d1-t4",
            taskNumber: 4,
            title: "Task 4: Responsive Modifiers",
            description: "Implement mobile-first responsive adjustments using sm:, md:, lg:, and xl: prefixes.",
            path: "TAILWINDCSS/Day1/task4.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "tw-d1-t5",
            taskNumber: 5,
            title: "Task 5: Modern Product Component",
            description: "Design a complete responsive card component with hover transitions and badge overlays.",
            path: "TAILWINDCSS/Day1/task5.html",
            difficulty: "Intermediate",
            type: "html"
          }
        ]
      },
      {
        day: 2,
        title: "Tailwind Components & Navigation",
        description: "Responsive navigations, hero sections, and glassmorphic UI cards.",
        comingSoon: true,
        tasks: [
          {
            id: "tw-d2-t1",
            taskNumber: 1,
            title: "Tailwind Responsive Navbar",
            description: "Build an accessible navigation bar with mobile hamburger drawer using Tailwind utilities.",
            path: "TAILWINDCSS/Day1/task5.html",
            difficulty: "Intermediate",
            type: "html"
          }
        ]
      }
    ]
  },

  bootstrap: {
    id: "bootstrap",
    title: "Bootstrap 5",
    shortName: "Bootstrap",
    subtitle: "Component Library & 12-Column Responsive Grid",
    description: "Rapidly build responsive websites using Bootstrap 5 grid containers, navbars, cards, modals, and utilities.",
    icon: "layers",
    color: "#7c3aed",
    bgColor: "#f5f3ff",
    darkBgColor: "rgba(124, 58, 237, 0.15)",
    badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800/40",
    accentBorder: "border-purple-500",
    gradient: "from-purple-600 to-indigo-600",
    daysCount: 2,
    days: [
      {
        day: 1,
        title: "Bootstrap Grid & Core Components",
        description: "Container, row, col-*, buttons, badges, and responsive layout structures.",
        tasks: [
          {
            id: "bs-d1-t1",
            taskNumber: 1,
            title: "Task 1: Bootstrap 12-Column Grid",
            description: "Practice grid column distributions across sm, md, and lg breakpoints.",
            path: "BOOTSTRAP/Day1/task1.html",
            difficulty: "Beginner",
            type: "html"
          },
          {
            id: "bs-d1-t2",
            taskNumber: 2,
            title: "Task 2: Buttons & Alerts",
            description: "Implement contextual buttons, alerts, and badges with Bootstrap helper classes.",
            path: "BOOTSTRAP/Day1/task2.html",
            difficulty: "Beginner",
            type: "html"
          },
          {
            id: "bs-d1-t3",
            taskNumber: 3,
            title: "Task 3: Responsive Card Deck",
            description: "Assemble responsive card layouts with headers, footers, and call-to-actions.",
            path: "BOOTSTRAP/Day1/task3.html",
            difficulty: "Intermediate",
            type: "html"
          }
        ]
      },
      {
        day: 2,
        title: "Bootstrap Navigation & Rich Components",
        description: "Navbars, carousels, modals, accordion FAQ items, and responsive footers.",
        tasks: [
          {
            id: "bs-d2-t1",
            taskNumber: 1,
            title: "Day 2: Full Bootstrap Landing Page",
            description: "Complete landing page incorporating navbar, hero banner, feature cards, and contact form.",
            path: "BOOTSTRAP/Day2/index.html",
            difficulty: "Intermediate",
            type: "html"
          }
        ]
      }
    ]
  },

  react: {
    id: "react",
    title: "React JS",
    shortName: "React",
    subtitle: "Component-Driven Architecture, Hooks & Single Page Apps",
    description: "Master React component lifecycles, JSX, state, props, hooks (useState, useEffect), and scalable architecture.",
    icon: "atom",
    color: "#06b6d4",
    bgColor: "#ecfeff",
    darkBgColor: "rgba(6, 182, 212, 0.15)",
    badgeColor: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800/40",
    accentBorder: "border-cyan-500",
    gradient: "from-cyan-500 to-blue-600",
    daysCount: 10,
    days: [
      {
        day: 1,
        title: "React Fundamentals & Environment",
        description: "Introduction to React, Virtual DOM, create-vite setup, and component mindset.",
        tasks: [
          {
            id: "react-d1-t1",
            taskNumber: 1,
            title: "Day 1: React Fundamentals & Setup",
            description: "Theoretical foundation, JSX principles, and setup notes for modern React development.",
            path: "REACT/Day1/Task.txt",
            difficulty: "Beginner",
            type: "txt"
          }
        ]
      },
      {
        day: 2,
        title: "JSX, Components & Build Output",
        description: "Component hierarchy, JSX expression embedding, and Vite build distribution.",
        tasks: [
          {
            id: "react-d2-t1",
            taskNumber: 1,
            title: "Day 2: React Build & Project Architecture",
            description: "Explore compiled production output and component tree architecture in my-react-project.",
            path: "REACT/Day2/dist/index.html",
            difficulty: "Intermediate",
            type: "html"
          }
        ]
      },
      {
        day: 3,
        title: "Props, Reusability & Data Flow",
        description: "Unidirectional data flow, passing props, children prop, and modular component design.",
        tasks: [
          {
            id: "react-d3-t1",
            taskNumber: 1,
            title: "Day 3: Props & Component Splitting (Project 1)",
            description: "Build composable UI widgets with configurable props and clean component boundaries.",
            path: "REACT/Day3/myproject/index.html",
            difficulty: "Intermediate",
            type: "html"
          },
          {
            id: "react-d3-t2",
            taskNumber: 2,
            title: "Day 3: Reusable Components Suite (Project 2)",
            description: "Create reusable UI component library items with flexible prop types and presets.",
            path: "REACT/Day3/myproject2/index.html",
            difficulty: "Intermediate",
            type: "html"
          }
        ]
      },
      {
        day: 4,
        title: "State Management with useState",
        description: "Declaring state, state updates, functional updater patterns, and re-rendering lifecycles.",
        tasks: [
          {
            id: "react-d4-t1",
            taskNumber: 1,
            title: "Day 4: Interactive State Management App",
            description: "Interactive application managing counters, toggle switches, and real-time form inputs with useState.",
            path: "REACT/Day4/myapp/index.html",
            difficulty: "Intermediate",
            type: "html"
          }
        ]
      },
      {
        day: 5,
        title: "Event Handling & Controlled Inputs",
        description: "Synthetic events, form controls, multiple input handlers, and form submission prevention.",
        tasks: [
          {
            id: "react-d5-t1",
            taskNumber: 1,
            title: "Day 5: Controlled Forms & Validation",
            description: "Build robust user intake forms with real-time field validation and structured state objects.",
            path: "REACT/Day5/day5project/index.html",
            difficulty: "Intermediate",
            type: "html"
          }
        ]
      },
      {
        day: 6,
        title: "Conditional Rendering & Dynamic Lists",
        description: "Ternary operators, logical AND short-circuiting, mapping arrays with unique keys.",
        tasks: [
          {
            id: "react-d6-t1",
            taskNumber: 1,
            title: "Day 6: Dynamic List Rendering & Filters",
            description: "Render complex collections dynamically with filter chips, sorting, and conditional empty states.",
            path: "REACT/Day6/day6project/index.html",
            difficulty: "Intermediate",
            type: "html"
          }
        ]
      },
      {
        day: 7,
        title: "Side Effects with useEffect",
        description: "Effect lifecycle, dependency arrays, subscriptions, and cleanup functions.",
        tasks: [
          {
            id: "react-d7-t1",
            taskNumber: 1,
            title: "Day 7: Side Effects & Browser Integration",
            description: "Synchronize component state with document titles, resize listeners, and timers using useEffect.",
            path: "REACT/Day7/day7project/index.html",
            difficulty: "Advanced",
            type: "html"
          }
        ]
      },
      {
        day: 8,
        title: "API Data Fetching & Async State",
        description: "Fetching remote data inside useEffect, managing loading, success, and error states.",
        tasks: [
          {
            id: "react-d8-t1",
            taskNumber: 1,
            title: "Day 8: REST API Data Consumer",
            description: "Fetch live data from remote endpoints, render loading skeletons, and handle network errors.",
            path: "REACT/Day8/day8project/index.html",
            difficulty: "Advanced",
            type: "html"
          }
        ]
      },
      {
        day: 9,
        title: "Multi-Component Architecture",
        description: "Lifting state up, prop drilling vs context, component composition, and modular tasks.",
        tasks: [
          {
            id: "react-d9-t1",
            taskNumber: 1,
            title: "Day 9: Multi-Component System",
            description: "Modular React application coordinating Task1, Task2, Task3, and Task4 subcomponents.",
            path: "REACT/Day9/day9project/index.html",
            difficulty: "Advanced",
            type: "html"
          }
        ]
      },
      {
        day: 10,
        title: "React Application Capstone",
        description: "Full-stack frontend React application integrating state, routing, custom components, and responsive styling.",
        tasks: [
          {
            id: "react-d10-t1",
            taskNumber: 1,
            title: "Day 10: Complete React Capstone Project",
            description: "Final comprehensive React project combining state management, animations, and modern UI.",
            path: "REACT/Day10/day10project/index.html",
            difficulty: "Expert",
            type: "html"
          }
        ]
      }
    ]
  },

  sql: {
    id: "sql",
    title: "SQL & Databases",
    shortName: "SQL",
    subtitle: "Relational Schemas, Queries, Joins & Transactions",
    description: "Design relational database schemas, execute DDL/DML queries, write performant JOINs, and manage indexes.",
    icon: "database",
    color: "#10b981",
    bgColor: "#ecfdf5",
    darkBgColor: "rgba(16, 185, 129, 0.15)",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/40",
    accentBorder: "border-emerald-500",
    gradient: "from-emerald-500 to-teal-600",
    daysCount: 10,
    days: [
      {
        day: 1,
        title: "DDL & Table Schema Architecture",
        description: "CREATE TABLE, ALTER, DROP, TRUNCATE, primary keys, foreign keys, and column constraints.",
        tasks: [
          {
            id: "sql-d1-t1",
            taskNumber: 1,
            title: "Day 1: DDL Database Schemas",
            description: "Define database structures, primary and foreign key constraints, and relational schemas.",
            path: "SQL/Day1/ddl.sql",
            difficulty: "Beginner",
            type: "sql"
          }
        ]
      },
      {
        day: 2,
        title: "DML & Data Manipulation",
        description: "INSERT INTO, UPDATE, DELETE, transactions, and basic SELECT queries.",
        tasks: [
          {
            id: "sql-d2-t1",
            taskNumber: 1,
            title: "Day 2: Student Data Manipulation",
            description: "Create and update a student table, insert records, delete rows, and query the results.",
            path: "SQL/Day2/students.sql",
            difficulty: "Beginner",
            type: "sql"
          }
        ]
      },
      {
        day: 3,
        title: "Filtering & Sorting (WHERE, ORDER BY)",
        description: "AND/OR/NOT, BETWEEN, IN, LIKE pattern matching, and LIMIT/OFFSET pagination.",
        tasks: [
          {
            id: "sql-d3-t1",
            taskNumber: 1,
            title: "Day 3: Employee Queries & Filtering",
            description: "Create employee records and practice SELECT queries with WHERE filters, comparisons, IN, BETWEEN, LIKE, and aliases.",
            path: "SQL/Day3/employees.sql",
            difficulty: "Beginner",
            type: "sql"
          }
        ]
      },
      {
        day: 4,
        title: "Aggregate Functions & GROUP BY",
        description: "COUNT, SUM, AVG, MIN, MAX, GROUP BY grouping, and HAVING filter conditions.",
        tasks: [
          {
            id: "sql-d4-t1",
            taskNumber: 1,
            title: "Day 4: Aggregate Functions & Grouping",
            description: "Use COUNT, SUM, AVG, MIN, MAX, GROUP BY, and HAVING to summarize employee data.",
            path: "SQL/Day4/Day4.sql",
            difficulty: "Intermediate",
            type: "sql"
          }
        ]
      },
      {
        day: 5,
        title: "Relational JOINs & Relationships",
        description: "INNER JOIN, LEFT OUTER JOIN, RIGHT OUTER JOIN, FULL OUTER JOIN, and CROSS JOIN.",
        tasks: [
          {
            id: "sql-d5-t1",
            taskNumber: 1,
            title: "Day 5: Student and Employee Joins",
            description: "Define course, student, department, and employee tables, then use an INNER JOIN to combine employee and department data.",
            path: "SQL/Day5/Day5.sql",
            difficulty: "Intermediate",
            type: "sql"
          }
        ]
      },
      {
        day: 6,
        title: "Subqueries & Nested Queries",
        description: "Scalar and correlated subqueries, IN, EXISTS, and nested aggregate queries.",
        tasks: [
          {
            id: "sql-d6-t1",
            taskNumber: 1,
            title: "Day 6: Subqueries and Nested Queries",
            description: "Use scalar, IN, EXISTS, and correlated subqueries to query employee and department data.",
            path: "SQL/Day6/Day6.sql",
            difficulty: "Advanced",
            type: "sql"
          }
        ]
      }
    ]
  }
};
