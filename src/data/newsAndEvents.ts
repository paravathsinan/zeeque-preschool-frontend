export type NewsEventType = 'news' | 'event';

export interface NewsEventItem {
    id: string;
    slug: string;
    type: NewsEventType;
    title: string;
    date: string;
    time?: string;
    location?: string;
    category: string;
    color: string;
    description: string;
    content: string; // Detailed HTML or Markdown string for the rich text page
    image: string;
    alt: string;
    featured?: boolean; // If true, it might show up on the homepage component
}

export const newsAndEventsData: NewsEventItem[] = [
    // ----------------- NEWS -----------------
    {
        id: "news-1",
        slug: "admissions-open-2026",
        type: "news",
        title: "Admissions Open for 2026-27",
        date: "March 15, 2026",
        category: "Announcement",
        color: "#3FB7E5",
        description: "We are delighted to announce that admissions for the upcoming academic year are now open. Secure a bright future for your child today.",
        content: `
            <p>We are thrilled to officially announce that admissions for the 2026-27 academic year are now open at Zeeque Preschool! At Zeeque, we are committed to providing a holistic early childhood education that blends modern learning with core values.</p>
            <br/>
            <p>Our curriculum is thoughtfully designed to ignite curiosity, foster creativity, and build a strong foundation for lifelong learning. With our state-of-the-art facilities and a passionate team of educators, we ensure every child receives personalized attention in a safe and nurturing environment. From sensory play to advanced cognitive exercises, our daily routines are crafted to bring out the very best in our young learners.</p>
            <br/>
            <p><strong>What Makes Zeeque Different?</strong></p>
            <ul style="list-style-type: disc; margin-left: 20px;">
                <li>Experienced and compassionate educators dedicated to child-centric teaching.</li>
                <li>Safe, hygienic, and secure campus with continuous monitoring.</li>
                <li>A perfect balance of academics, sports, and creative arts.</li>
                <li>Value-based Islamic Montessori education tailored for holistic growth.</li>
            </ul>
            <br/>
            <p><strong>Enrollment Details:</strong> Parents can register their children for playgroup, nursery, and kindergarten levels. We encourage you to schedule a campus tour and meet our faculty to understand our teaching methodology better. During the tour, you'll have the chance to see our classrooms in action and speak directly with our principal.</p>
            <br/>
            <p>Seats are limited and fill up quickly, so hurry up and secure a bright future for your child today! Please visit our admissions page to fill out the online registration form or contact our administration office for further assistance.</p>
        `,
        image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?q=80&w=600&auto=format&fit=crop",
        alt: "Admissions open announcement with smiling preschool students at ZeeQue Preschool in Kerala."
    },
    {
        id: "news-2",
        slug: "new-smart-classrooms",
        type: "news",
        title: "New Smart Classrooms Introduced",
        date: "February 28, 2026",
        category: "Campus",
        color: "#3FB7E5",
        description: "Experience our newly designed child-friendly smart classrooms equipped with the latest multimedia learning tools and colorful decor.",
        content: `
            <p>Education is evolving, and at Zeeque Preschool, we believe in staying ahead! We have successfully upgraded our campus by introducing child-friendly smart classrooms to make learning more engaging and interactive.</p>
            <br/>
            <p>These classrooms are equipped with the latest multimedia learning tools, interactive whiteboards, and vibrant, colorful decor designed to stimulate young minds. The integration of technology helps in delivering visual and auditory lessons that enhance comprehension and memory. For instance, our new digital storytelling sessions allow children to see their favorite characters come alive on screen, bridging the gap between imagination and reality.</p>
            <br/>
            <p>Furthermore, the physical layout of these rooms encourages collaborative play and group activities. We have introduced modular seating arrangements that can easily be shifted from individual focused learning setups to large group circles for interactive discussions.</p>
            <br/>
            <p><strong>Benefits of our Smart Classrooms:</strong></p>
            <ul style="list-style-type: disc; margin-left: 20px;">
                <li>Enhanced engagement through visual and interactive learning.</li>
                <li>Ability to cater to different learning styles (auditory, visual, kinesthetic).</li>
                <li>Access to a wealth of educational digital resources globally.</li>
                <li>Preparation for a technology-driven future in a safe, controlled environment.</li>
            </ul>
            <br/>
            <p>We invite all parents to come and witness a live demonstration of how these tools are being utilized by our teachers to create an unforgettable learning experience.</p>
        `,
        image: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=600&auto=format&fit=crop",
        alt: "Newly designed, child-friendly smart classrooms ready for students at ZeeQue Preschool in Kerala."
    },
    {
        id: "news-3",
        slug: "parent-orientation-program-2026",
        type: "news",
        title: "Parent Orientation Program",
        date: "February 10, 2026",
        category: "Community",
        color: "#3FB7E5",
        description: "A successful orientation program was held for new parents to understand our curriculum, approach, and the ZeeQue vision deeply.",
        content: `
            <p>We recently hosted our annual Parent Orientation Program for the incoming batch of 2026. The event was a massive success, bringing together parents, teachers, and school administrators for an insightful day.</p>
            <br/>
            <p>The primary goal of the orientation was to familiarize parents with the Zeeque Preschool curriculum, our unique teaching methodology, and the core vision that drives our institution. Experts shared valuable insights on early childhood development and how parents can actively participate in their child's learning journey.</p>
            <br/>
            <p>We thank all the parents who attended and made the session interactive and productive. We look forward to a fantastic academic year ahead!</p>
        `,
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop",
        alt: "Parents and teachers interacting during a successful orientation program at ZeeQue Preschool in Kerala."
    },

    // ----------------- EVENTS (Page) -----------------
    {
        id: "event-1",
        slug: "annual-sports-day-2026",
        type: "event",
        title: "Annual Sports Day",
        date: "April 12, 2026",
        time: "09:00 AM - 01:00 PM",
        location: "Main Playground",
        category: "Sports",
        color: "#ef4225",
        description: "Get ready to witness our little champions showcase their athletic skills, teamwork, and sportsmanship in a day full of fun events.",
        content: `
            <p>It's time to cheer for our little athletes! Zeeque Preschool is proud to host the Annual Sports Day 2026. A day dedicated to physical fitness, teamwork, and endless fun.</p>
            <br/>
            <p>Our students have been practicing diligently for various track and field events, including the classic sack race, lemon and spoon race, and relay. The emphasis of our sports day is not just on winning, but on participation, teamwork, and developing a healthy sporting spirit from a young age.</p>
            <br/>
            <p>Physical education is a core component of our curriculum. Regular physical activity helps in the development of gross motor skills, cardiovascular health, and muscle strength. It also plays a vital role in building self-confidence and reducing anxiety in children. By organizing events like these, we ensure that every child gets an opportunity to shine and experience the joy of outdoor play.</p>
            <br/>
            <p><strong>Event Highlights:</strong></p>
            <ul style="list-style-type: disc; margin-left: 20px;">
                <li>Grand Opening March Past by our senior kindergarten students.</li>
                <li>Exciting track events including hurdles, relays, and sprint races.</li>
                <li>Fun novelty races like the three-legged race and sack race.</li>
                <li>Medal and certificate distribution ceremony to honor participation.</li>
            </ul>
            <br/>
            <p>Parents are warmly invited to attend, encourage the participants, and even join in on a few special parent-child games. Let's celebrate health and happiness together! Don't forget to wear comfortable clothing and bring along your loudest cheers.</p>
        `,
        image: "/images/gallery/gallery photos/IMG_6290 - Copy.JPG",
        alt: "Little champions participating in Annual Sports Day on the main playground at ZeeQue Preschool in Kerala."
    },
    {
        id: "event-2",
        slug: "colors-day-celebration-2026",
        type: "event",
        title: "Colors Day Celebration",
        date: "May 05, 2026",
        time: "10:00 AM - 12:30 PM",
        location: "Campus Hall",
        category: "Celebration",
        color: "#fbaf01",
        description: "A vibrant day where children dress in their favorite colors, engage in creative arts, and learn about the beauty of the spectrum.",
        content: `
            <p>The world is a canvas of beautiful colors, and we are bringing them all to Zeeque Preschool for our Colors Day Celebration! This vibrant event is designed to help children recognize and appreciate different colors through engaging activities.</p>
            <br/>
            <p>Students are encouraged to come dressed in their favorite colors. The day will feature finger painting, color sorting games, and a special fashion walk where every child gets to showcase their colorful outfits.</p>
            <br/>
            <p>Such thematic celebrations are crucial for cognitive development and sensory learning. It promises to be a bright and joyous day for everyone involved.</p>
        `,
        image: "/images/gallery/gallery photos/IMG_5781.JPG",
        alt: "Children dressed in vibrant colors celebrating Colors Day in the campus hall at ZeeQue Preschool in Kerala."
    },
    {
        id: "event-3",
        slug: "meelad-day-reflections-2026",
        type: "event",
        title: "Meelad Day Reflections",
        date: "June 20, 2026",
        time: "09:30 AM - 11:30 AM",
        location: "Auditorium",
        category: "Community",
        color: "#0fb85c",
        description: "A special and peaceful gathering where kids recite beautiful surahs, perform adhkars, and learn about the importance of sharing and caring.",
        content: `
            <p>Join us for a peaceful and reflective morning as we observe Meelad Day at Zeeque Preschool. This special gathering aims to instill values of compassion, sharing, and gratitude in our young learners.</p>
            <br/>
            <p>The event will include beautiful recitations of short Surahs and Adhkars by our students. Teachers will share inspiring stories that highlight the importance of good character and kindness in our daily lives.</p>
            <br/>
            <p>We believe in nurturing not just the mind, but also the heart and soul of every child. Parents are welcome to join us in this serene gathering.</p>
        `,
        image: "/images/gallery/gallery photos/IMG_6331 - Copy.JPG",
        alt: "Kids performing adhkars and reciting surahs during Meelad Day in the auditorium at ZeeQue Preschool in Kerala."
    },

    // ----------------- FEATURED EVENTS (Homepage) -----------------
    {
        id: "event-4",
        slug: "annual-day-celebration-2025",
        type: "event",
        title: "Annual Day Celebration 2025",
        date: "March 15, 2025",
        time: "10:00 AM - 2:00 PM",
        location: "Main Auditorium",
        category: "Celebration",
        color: "#FFCB05",
        featured: true,
        description: "Join us for an exciting annual day filled with performances, art exhibitions, and fun activities by our little stars!",
        content: `
            <p>The Zeeque Preschool Annual Day is the highlight of our academic year! It is a day where we celebrate the incredible growth, talents, and achievements of our little stars.</p>
            <br/>
            <p>The event will feature a series of stage performances including dances, skits, and musical recitals. Alongside the performances, an art exhibition will showcase the creative masterpieces crafted by the students throughout the year.</p>
            <br/>
            <p>Our dedicated teachers have been working tirelessly with the children over the past month to ensure every performance shines brightly. Costumes have been tailored to perfection, the stage sets are being prepared, and the excitement in the air is palpable. This event also serves as a wonderful platform for our students to build confidence and overcome stage fright in a supportive environment.</p>
            <br/>
            <p>Following the performances, we will have an awards ceremony to recognize the outstanding progress of our students across various disciplines. Special trophies and certificates will be distributed to encourage continuous learning and positive behavior.</p>
            <br/>
            <p>It's a wonderful opportunity for the entire Zeeque family—students, parents, and teachers—to come together, celebrate milestones, and create lasting memories. Refreshments will be served after the event, allowing parents to interact and share their joyful experiences.</p>
        `,
        image: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?q=80&w=800&auto=format&fit=crop",
        alt: "Children performing during the colorful Annual Day Celebration at ZeeQue Preschool, Kerala."
    },
    {
        id: "event-5",
        slug: "parent-teacher-conference-2025",
        type: "event",
        title: "Parent-Teacher Conference",
        date: "March 22, 2025",
        time: "9:00 AM - 12:00 PM",
        location: "Classrooms",
        category: "Meeting",
        color: "#0060D6",
        featured: true,
        description: "An opportunity for parents and teachers to discuss child development, progress reports, and upcoming curriculum plans.",
        content: `
            <p>Communication between educators and parents is the key to a child's successful development. Our upcoming Parent-Teacher Conference provides a dedicated platform for this crucial dialogue.</p>
            <br/>
            <p>During the meeting, teachers will share detailed progress reports, highlighting each child's strengths, areas for improvement, and overall social development. It is also a great time for parents to ask questions, share observations from home, and understand the upcoming curriculum plans.</p>
            <br/>
            <p>We view parents as our vital partners in education. When parents and teachers collaborate, children exhibit better academic achievement, improved behavior, and greater social competence. These conferences are designed not as a one-way evaluation, but as a mutual sharing of insights that help us tailor our educational approach to your child's unique needs.</p>
            <br/>
            <p><strong>What to Expect:</strong></p>
            <ul style="list-style-type: disc; margin-left: 20px;">
                <li>A review of your child's portfolio containing their recent artwork and assignments.</li>
                <li>A discussion on behavioral and social milestones achieved.</li>
                <li>Guidance on activities you can do at home to support classroom learning.</li>
                <li>An opportunity to set collaborative goals for the next term.</li>
            </ul>
            <br/>
            <p>We highly encourage all parents to book a slot through our online portal and participate actively in shaping their child's educational journey. Each slot will be 20 minutes long to ensure a comprehensive discussion without rush.</p>
        `,
        image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
        alt: "Parents and teachers discussing child development securely at our leading Kerala preschool."
    },
    {
        id: "event-6",
        slug: "little-artists-exhibition-2025",
        type: "event",
        title: "Little Artists Exhibition",
        date: "April 5, 2025",
        time: "11:00 AM - 3:00 PM",
        location: "Creative Arts Wing",
        category: "Art",
        color: "#EF4225",
        featured: true,
        description: "Watch our young learners showcase their creativity through paintings, crafts, and collaborative art projects.",
        content: `
            <p>Creativity knows no bounds at Zeeque Preschool! We cordially invite you to the 'Little Artists Exhibition', a showcase of pure imagination and artistic expression by our students.</p>
            <br/>
            <p>From colorful finger paintings to intricate clay models and collaborative paper mache projects, the exhibition will display the hard work and creativity of our young learners. Art is an essential part of our Montessori curriculum as it fosters fine motor skills, emotional expression, and cognitive development.</p>
            <br/>
            <p>Come walk through our vibrant gallery and be amazed by the beautiful perspectives of our little artists!</p>
        `,
        image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=800&auto=format&fit=crop",
        alt: "Young learners showcasing creative paintings at the Zeeque Islamic Montessori art exhibition."
    }
];

export const getAllNews = () => newsAndEventsData.filter(item => item.type === 'news');
export const getEventsPageEvents = () => newsAndEventsData.filter(item => item.type === 'event' && !item.featured);
export const getFeaturedEvents = () => newsAndEventsData.filter(item => item.featured);
export const getItemBySlug = (slug: string) => newsAndEventsData.find(item => item.slug === slug);
