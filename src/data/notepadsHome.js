import DoubleLinkedList from "../utils/DoubleLinkedList";
import PlotGrades from "../components/PlotGrades/PlotGrades";
import { mathYearOne, mathYearTwo, mathYearThree } from './GradesMath'
import { physicsYearOne, physicsYearTwo, physicsYearThree } from './GradesPhysics'
import WorkNotepadContent from "../components/workNotepadContent/WorkNotepadContent";


import MBlogo from '../assets/images/MobileVikings-logo.png';
import AHLogo from '../assets/images/AlbertHeijn-logo.png';
import iinnoBeneluxLogo from '../assets/images/iinno-benelux-logo.png';
import MSLogo from '../assets/images/MySherpa-logo.png';
import ProjectNotepadContent from "../components/ProjectNotepadContent/ProjectNotepadContent";




const testContent = <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus efficitur ligula, in aliquet justo congue ac. Sed vitae magna id metus posuere posuere. Nullam nec consectetur elit. Maecenas at ligula id lectus interdum feugiat a sit amet nunc. In ac fermentum dui. Sed euismod dapibus fermentum. Ut feugiat dui sed ipsum varius, vel euismod justo commodo. Sed euismod dui vel eros volutpat luctus. Sed tincidunt, libero ut pharetra convallis, nisl augue scelerisque lectus, eu lobortis arcu est eget ex. Fusce congue tellus eget purus aliquam, non vehicula lorem lobortis. Suspendisse potenti. Donec elementum, lacus id congue elementum, tortor dui euismod nisi, sit amet suscipit nulla libero vel lorem. Nulla ultricies lorem eget quam consectetur, vel rhoncus lorem vestibulum.

    Vestibulum at posuere odio. Phasellus vitae ex ac lectus euismod eleifend. Vivamus at est non arcu varius viverra. Ut aliquet metus in justo tincidunt tincidunt. Duis vestibulum ligula ac nisl congue, sit amet mollis justo tincidunt. Quisque at interdum elit. Proin laoreet a magna et feugiat. Integer in lorem arcu. Nulla tristique, libero eu tincidunt fermentum, lacus mauris ultricies odio, id maximus tellus ligula ut quam. Curabitur non tellus vitae leo lobortis scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer nec lacus non nunc fermentum cursus. Duis auctor lacus sit amet velit mollis, nec ullamcorper libero varius. Maecenas suscipit magna in purus suscipit vestibulum. Nullam eu nisi in mi consectetur ullamcorper.
</p>



const textAboutMe =
    <>
        <div id="aboutMe-intro">
            Hello there &#x1F604;
            <p>
                I'm Burak Kucuktopal and I'm 20 years old. Since I was young, I always wanted to reveal my thoughts to the broader public,
                and have some website to gather all my experiences, projects and also important dates. Something that resembles a biography. Due to the lack
                of knowledge and the limited programming skills, it quite took some time to realize this. But here it is!
            </p>
        </div>
        <p>
            I have introduced the concept of 'notepads' in this blog. This means that every story is written on a single notepad, and you can look at the backside
            of it by clicking on the arrow indicated at the bottom. You will notice that these notepads have more than two sides &#x1F609;
        </p>
        <p>
            There are currenlty 2 different pads, and thus stories:
        </p>
        <ul>
            <li>
                The first will talk some about my educational carreer. I have finished Mathematics and Physics for my Bachelor's. Since
                these are two different fields, I will talk about my feeling for each of these fields. Additionally, I have
                added my results in a plot for each semester, or a year in total. I felt these three years as a really special track, which
                motivates why I would not only give my grades, but the thoughts and expectations I got for each of these subjects. The description
                can be found by clicking on the points of the plot that is presented for either Mathematics of Physics.
            </li>
            <li>
                The second one talks about my work experience and what my tasks were at these places.
            </li>
        </ul>
        <p>
            The following are yet to be written, so keep tight!
        </p>

        <ul>
            <li>
                This third part will be about the projects I've realized. This can go from the highlights of my study, to the programming portfolios I've
                made. I personally think that this will be the most interesting, as it is the most concrete one.
            </li>
            <li>
                The fourth notepad will dive more into how the heck I even started with programming; it was not at all that smooth and nice as you'd expect!
            </li>
            <li>
                At last, I've added the extra-curricular activities, and some special events that stands out. This will go more about my short 'professional' carreer
                as chess player, all the way to how I got the chance to present my bachelor Thesis in front of more than 100 persons.
            </li>
        </ul>
        <p>
            If you are curious about any point in my story, you can contact me by the form at the end of this story, euhm page. Btw, if you would suffer to
            depression due to the dark color of this page, you can always switch to light mode by using the button at the upper left corner. I've set it default on dark to spare
            my eyes when I work on this project in the late nights &#x1F601;
        </p>


    </>
const notepadsAboutMe = new DoubleLinkedList();
notepadsAboutMe.addHead({ id: "aboutMe", title: "My story...", textContent: textAboutMe, button: false, datePeriod: '2004-...' });

// Initialize double linked lists for each category

// Mathematics
const notepadsMath = new DoubleLinkedList();

const mathIntroContent = <>
    <p>
        In 2021 I started my bachelor in Mathematics. In this three years we have focussed on the following fields:
    </p>

    <ul>
        <li>(Linear) Algebra</li>
        <li>Real & Complex Analysis</li>
        <li>Modelling (R & Matlab & Python)</li>
        <li>Statistics (Linear, Multi-linear, metrics to identify significance, …)</li>
        <li>In depth analysis of Calculus</li>
        <li>Partial/ordinary differential equations</li>
        <li>Numerical methods (Time Discretization Methods, Error Analysis, Finite-Elements/Volumes, …)</li>
        <li>(Differential) Geometry</li>
    </ul>

    Additionally, I’ve taken the following Computer Science subject:
    <ul>
        <li>
            Databases (SQL, ER diagrams, Relational Algebra, Functional Dependencies, Normal Forms)
        </li>
    </ul>

    <p>
        <span style={{ fontStyle: 'italic' }}>
            Press the button on the right upper-corner to see get a more detailed view on each year!
        </span>
    </p>

</>


notepadsMath.addHead({ id: "mathematics", title: "Mathematics", textContent: mathIntroContent, button: true, datePeriod: '2021-2024' });

const mathYearOneContent = <>
    <p>
        At UHasselt, to adapt to college, we started with a half-semester. This half-semester counted three introductory, but also fundamental courses:
    </p>
    <ul>
        <li>Calculus 1</li>
        <li>Basic Concepts in Mathematics</li>
        <li>Mechanics</li>
    </ul>
    <p>
        It was after this half-semester, that I started with the TWIN track. For the first semester, I only had the following courses for Mathematics, which
        started to deviate a lot from what I already knew. From this point on, attention was needed!
    </p>
    <ul>
        <li>Basic Concepts in the Algebra and Analysis</li>
        <li>Calculus 2</li>

    </ul>
    <p>
        In my second semester, it was Mathematics that got the overhand in number of courses:
    </p>
    <ul>
        <li>Data analysis and statistical models 1</li>
        <li>Analysis 1</li>
        <li>Linear Algebra</li>
        <li>Numerical Methods 1</li>
    </ul>

    <p>
        <span style={{ fontStyle: 'italic' }}>
            In the scatterplot below, you can look into my grades. By tapping on the dots, a text will appear below the plot, showcasing my specific experience with that subject!
        </span>
    </p>

</>
notepadsMath.addTail({ id: "mathematics1", title: "My first year", otherContent: <PlotGrades gradesData={mathYearOne} />, textContent: mathYearOneContent, button: true, datePeriod: '2021-2022' });

const mathYearTwoContent = <>
    <p>
        The first semester of my second year was personally the most difficult one! The first semester consisted of:
    </p>
    <ul>
        <li>Analysis 2</li>
        <li>Algebra 1</li>
        <li>Differential Geometry 1: Curves and Surfaces</li>
    </ul>
    {/* <p>
    The first semester of my second year was personally the most difficult one! After we had had Analysis 1, we continued to delve further into the abstractness of Analysis 2.
    This subject was unanimously agreed as the hardest course of the bachelor by the students. It counted over 100 pages, to which there was a proof for nearly every page! Nonetheless,
    with keeping track of what's happening throughout the year, it is certainly possible to perform well.  
</p>
<p>
    Additionlly, there was algebra 1, which talks more about abstract structures should as groups, p-sylow subgroups and many more.
</p> */}
    <p>The second semester consisted of</p>
    <ul>
        <li>Algebra 2</li>
        <li>Functional and Fourier Analysis</li>
        <li>Linear Statistical Models</li>
        <li>Geometry</li>
        <li>Numerical Methods 2</li>
    </ul>

</>
notepadsMath.addTail({ id: "mathematics2", title: "My second year", otherContent: <PlotGrades gradesData={mathYearTwo} />, textContent: mathYearTwoContent, button: true, datePeriod: '2022-2023' });

const mathYearThreeContent = <>
    <p>
        In my first and second year, there was almost no room to take additional courses because this was already fully scheduled by the TWIN-track. Starting from the third year, there
        was some more room for this. Actually, this little bit of breathing room is not made to take some extra courses and increase the workload, but to actually work hard and good on your
        bachelor thesis, which I discuss in my portfolios section, as it is expected to be satisfying (high expectations I suppose).
    </p>
    <p>
        Although the warning, I did take some non-mandatory courses for TWIN at Mathematics, but this was only at the second semester. In my first semester, I had the two courses:
    </p>
    <ul>
        <li>Complex Analysis</li>
        <li>Fundamentals in probability Theory and Statistics (Statistics 3)</li>
    </ul>
    <p>
        In my second semester, I had far more subjects, counting up to 6 courses for Mathematics. Three compulsory, three optional
    </p>
    <p>compulsory:</p>
    <ul>
        <li>Dynamical Systems</li>
        <li>Partial Differential Equations</li>
        <li>Programming and Algorithmic Thinking</li>
    </ul>
    <p>Optional</p>
    <ul>
        <li>Databases</li>
        <li>Numerical Methods 3</li>
        <li>Modelling week</li>
    </ul>
</>
notepadsMath.addTail({ id: "mathematics3", title: "My Third year", otherContent: <PlotGrades gradesData={mathYearThree} />, textContent: mathYearThreeContent, button: true, datePeriod: '2023-2024' });

// Physics
const notepadsPhysics = new DoubleLinkedList();

const physicsIntroContent = <>
    <div>
        <p>
            To be honest, I would have never thought that I would be studying pure Physics. I understood the concepts and my understanding represented this well, but
            doing a bachelor in Physics never came to mind. But as I want to seize every opportunity, I'd taken the TWIN track as a challenge and picked up Physics along the way, and
            did not have any regret.
        </p>
    </div>
    <p>
        The courses that I've had during my bachelor's degree were characterized by more theoretical fields (Quantum mechanics) to the more practical ones (fluid dynamics). Even
        some computer science could be found.
    </p>
    <ul>
        <li>Quantum & Classical Mechanics</li>
        <li>Special & General Relativity</li>
        <li>(Relativistic) Electrodynamics</li>
        <li>Fluid and Thermodynamics</li>
        <li>Particle & Nuclei Physics</li>
        <li>Solid-state Physics</li>
    </ul>
    <p>
        Due to my high interest in Computer science, I’ve also taken the extra course:
    </p>
    <ul>
        <li>Computer Networks (Full discussion on the TCP/IP protocol stack
            together with Python implementations)</li>
    </ul>

</>
notepadsPhysics.addHead({ id: "physics", title: "Physics", textContent: physicsIntroContent, button: true, datePeriod: '2021-2024' });

const physicsFirstYearContent = <>
    <p>
        The first half-semester for Physics was identical for Mathematics (only difference being some extra labs). The second part of the first semester deviated quite some bit
    </p>
    <p>
        More specifically, I finished my first semester as a Physicist with the following courses:
    </p>
    <ul>
        <li>Optics</li>
        <li>Special Relativity</li>
    </ul>
    <p>
        In contrast to the first semester, the second counted much more subjects:
    </p>
    <ul>
        <li>Quantum Mechanics 1</li>
        <li>Electromagnetism</li>
        <li>Physics of Planet Earth, Climate and Life</li>
        <li>Introduction to astronomy and astrophysics</li>
    </ul>
    <p>
        <span style={{ fontStyle: 'italic' }}>
            In the scatterplot below, you can look into my grades. By tapping on the dots, a text will appear below the plot, showcasing my specific experience with that subject!
        </span>
    </p>

</>
notepadsPhysics.addTail({ id: "Physics1", title: "My first year", otherContent: <PlotGrades gradesData={physicsYearOne} />, textContent: physicsFirstYearContent, button: true, datePeriod: '2021-2022' });



const physicsSecondYearContent = <>
    <p>
        This year, and certainly this semester I experienced as the hardest one, but also the most successful one! This was due to the fact that I had many courses from
        Physics, but also one of the hardest courses in Mathematics, one being Analysis 2. Additionally, the schema for my exams
        were very tough. More specifically, the first week I had 2 exams on Tuesday, and two exams in that same week on Thursday! Yet, with some
        stress and dedication, I managed.
    </p>
    <p>
        This semester, we also started to get more into the experimental side of Physics:
    </p>
    <ul>
        <li>Hydrodynamics</li>
        <li>Quantum Mechanics 2</li>
        <li>Thermodynamics</li>
        <li>Vectorcalculus</li>
        <li>Mathematical methods of physics</li>
        <li>Advanced Measurement Methods</li>
    </ul>
    <p>
        The second semester was mainly governed by an experimental project to prepare us for the bachelor thesis in the third year.
    </p>
    <ul>
        <li>Analytical Mechanics</li>
        <li>Electrodynamics</li>
        <li>Experimental Techniques</li>
    </ul>
    <p>
        <span style={{ fontStyle: 'italic' }}>
            In the scatterplot below, you can look into my grades. By tapping on the dots, a text will appear below the plot, showcasing my specific experience with that subject!
        </span>
    </p>
</>
notepadsPhysics.addTail({ id: "Physics2", title: "My second year", otherContent: <PlotGrades gradesData={physicsYearTwo} />, textContent: physicsSecondYearContent, button: true, datePeriod: '2022-2023' });


const physicsThirdYearContent = <>
    <p>
        In the past two years, we mainly focussed on getting our basics right. In the final year of our study, we started to delve into
        the more serious subjects.
    </p>
    <p>
        The first semester the subsequent courses were:
    </p>
    <ul>
        <li>Statistical Physics</li>
        <li>Philosophy of Science</li>
        <li>Solid State Physic</li>
        <li>Quantum Mechanics 3</li>
        <li>Computer networks</li>
    </ul>
    <p>
        The final semester was mainly focussed on the Bachelor thesis, and for me finally the course which I've looked up to my whole three years:
        General Relativity!
    </p>
    <ul>
        <li>Nuclei and Particles</li>
        <li>Gravity</li>
        <li>Phyisics+</li>
    </ul>
    <p>
        <span style={{ fontStyle: 'italic' }}>
            In the scatterplot below, you can look into my grades. By tapping on the dots, a text will appear below the plot, showcasing my specific experience with that subject!
        </span>
    </p>
</>
notepadsPhysics.addTail({ id: "Physics3", title: "My Third year", otherContent: <PlotGrades gradesData={physicsYearThree} />, textContent: physicsThirdYearContent, button: true, datePeriod: '2023-2024' });


// Professional life
const notepadsProfessionalLife = new DoubleLinkedList();

const contentAboutExperienceAH = <>
    <p>
        Albert Heijn was my first student job. I came to realize that the real world differed a lot of that on what we learn on school. This job also learned
        me to express me more fluently with people I don't know, and helping them in an efficient and polite matter.
    </p>
    <p>
        Due to the fact that a company isn't open during weekends, but retail is I continued working in the Albert Heijn for a decent amount of time. Once I got the feeling that
        I would be more worth by using my analytical skills, I started to search for a study relevant job.
    </p>
</>
const workpadAH = <WorkNotepadContent title={"Warehouse worker"} location={"Hasselt, Flanders, Belgium · On Location"} skillSet={"Helping customers, keeping the store presentable and organized."}
    image={AHLogo} contentAboutExperience={contentAboutExperienceAH} invertInDarkMode={false} />

notepadsProfessionalLife.addHead({
    id: "albertheijn",
    title: "Albert Heijn",
    otherContent: workpadAH,
    button: true,
    datePeriod: 'Aug 2021- December 2023'
});


const contentAboutExperienceiinoBenelux = <>
    <p>
        The promising platform established by iinno-benelux named Jabba, provides intelligent AlphaESS battery control.
        My tasks within the Jabba team is to create and maintain the technical architecture for automizing the onboarding process of new customers, using Python within the Odoo environment.
    </p>
    <p>
        More specifically, my tasks are:
    </p>
    <ul>
        <li>Designed comprehensive onboarding flowcharts for new customers in collaboration with the team.</li>
        <li>Implemented a support system to automatically generate helpdesk tickets for incomplete client details or failed processes.</li>
        <li>Integrated backend APIs of close partners into our ticket system for seamless communication.</li>
        <li>Programmed and designed customer detail acquisition forms and custom websites using XML, HTML, CSS, and JavaScript.</li>
        <li>Developed object-oriented Python solutions within the Odoo framework, enhancing my understanding of software architecture.</li>
        <li>Utilized Bitbucket and Git for version control, deploying software to live Odoo environments and refining CLI skills in Linux.</li>
    </ul>
</>
const workpadiinno = <WorkNotepadContent title={"Junior Python Developer"} location={"Hasselt, Flanders, Belgium · Hybrid"} skillSet={'Odoo, Python Flask, Linux CLI, web devoplement (HMTL, CSS, JS, XML), architectural design'} image={iinnoBeneluxLogo} contentAboutExperience={contentAboutExperienceiinoBenelux}
    invertInDarkMode={false} />

notepadsProfessionalLife.addHead({
    id: "iinnobenelux",
    title: "iinno-benelux",
    otherContent: workpadiinno,
    button: true,
    datePeriod: 'April 2023-...'
});
const contentAboutExperienceMySherpa = <>
    <p>
        I always liked teaching others, and explaining the complexities of a subject. I came to the thought to turn this eagerness into a real job by applying
        at MySherpa. This way I helped several high school students to improve their Mathematics and Phyics. This meant going over their courses and revisiting core concepts.
    </p>
    <p>
        Not only did I help them out, I also improved my teaching skills by being forced to talk in a clear and also concise matter.
    </p>
</>
const workpadMySherpa = <WorkNotepadContent title={"Math & Physics tutor"} location={"Flanders, Belgium · Hybrid"} skillSet={'Communication in a clear and concise manner, coaching'}
    image={MSLogo} contentAboutExperience={contentAboutExperienceMySherpa} invertInDarkMode={false} />

notepadsProfessionalLife.addHead({
    id: "mysherpa",
    title: "MySherpa",
    otherContent: workpadMySherpa,
    button: true,
    datePeriod: 'April 2024-...'
});

const contentAboutExperienceMobileVikings = <>
    <p>
        During my previous programming job at iinno-benelux, I mostly focussed on backend operations, and only in a basic, but sufficient amount of frontend.
        At Mobile Vikings, I emphasized on purely frontend development in React (also used for this website) in combination with Next JS and radix-UI.
    </p>
</>
const workpadMB = <WorkNotepadContent title={"Frontend React developer"} location={"Hasselt, Flanders, Belgium · Hybrid"} skillSet={"React, Next JS , TypeScript, Radix-UI"} image={MBlogo} contentAboutExperience={contentAboutExperienceMobileVikings}
    invertInDarkMode={true} />

notepadsProfessionalLife.addHead({
    id: "mobilevikings",
    title: "Mobile Vikings",
    otherContent: workpadMB,
    button: true,
    datePeriod: 'July 2024-...'
});


notepadsProfessionalLife.addHead({
    id: "professionallife",
    title: "Work Experience",
    textContent: <>
        <p>
            My professional life has been a series of invaluable experiences, each teaching me something new about the industry and myself. From my first job to my current position, I've had the opportunity to work in various roles that have helped me grow both professionally and personally.
        </p>
        <p>
            In this section, I will detail my career path, the skills I've acquired, and the lessons I've learned along the way. Each job has contributed to my development and has prepared me for the next step in my career.
        </p>
    </>,
    button: true,
    datePeriod: '2021-...'
});

// Math and physics combining
const notepadsMathAndPhysics = new DoubleLinkedList();
notepadsMathAndPhysics.addHead({
    id: "bachelorThesis",
    title: "Bachelor Thesis",
    otherContent: testContent,
    button: true,
    datePeriod: '2024'
});

const mathAndPhysicsIntroContent = (
    <>
        <div id="mathematics-and-physics-intro">
            <p>
                Since I was young, I've always had a passion for creating and observing how things work. Initially, pursuing an engineering degree seemed like the perfect fit, and everyone around me agreed. However, everything changed during my last year of high school.
            </p>
        </div>
        <p>
            Since Languages aren't my strongest part, Mathematics and Physics became my beloved subjects. During summer breaks, I eagerly awaited the delivery of my books to dive deeper into Mathematical concepts. However, I never considered pursuing these subjects further in college, as I associated Mathematics solely with teaching high school—a path that didn't appeal to me. Engineering had been my childhood dream, and I intended to pursue it.
        </p>
        <p>
            That all changed during the 'thematic days' in my final year of high school. Despite already dedicating eight hours a week to Mathematics by my studies, I chose to delve deeper into 'logic'. Those three days became the highlight of my year. While it wasn't the complex proofs I'd encounter later, the abstract nature and rigorous approach sparked something within me. It was then that I realized pursuing engineering might not fulfill my desire for theoretical rigor and abstract problem-solving. As for future career prospects, I was uncertain, but following my passion and dreams seemed like the right path forward.
        </p>
        <p>
            In 2021, I enrolled in Mathematics. By the end of my first semester, I qualified for the 'TWIN-track', allowing me to study additional Physics subjects alongside Mathematics. This dual-degree track, however, didn't require me to complete 360 credits in three years due to overlapping coursework. I eventually completed 245 credits, thanks to exemptions granted based on my performance in related subjects.
        </p>
        <p>
            Below, I'll share my experiences in this academic journey, including insights into challenging topics, intriguing discoveries, and areas of particular interest.
        </p>
    </>
);


// Programming
const notepadsProgramming = new DoubleLinkedList();

const descriptionProgramming = <>
    <p>
        Programming has had many ups and downs for me. I started with C++ in 2019. Naively, I chose this difficult language as my introduction to programming, which led to only a basic understanding of its syntax. I used this knowledge for a small numerical analysis assignment, but C++'s complexity demotivated me, and I stopped coding for a long time after that project.
    </p>
    <p>
        Three years later, I gave programming another try, this time with Python. I followed courses on Codecademy, which steadily solidified my knowledge.
    </p>
    <p>
        In 2023, perhaps influenced by COVID, I experienced a programming boom. I created my first chess engine with a GUI using Pygame and an alpha-beta pruning algorithm. That summer, I focused more on Python, designing a neural network from scratch and testing it on the MNIST dataset, achieving over 95% accuracy.
    </p>
    <p>
        In my third year of my Bachelor's, I took an elective course in Computer Science: Computer Networks. I learned about the IP/TCP ISO model, and set up HTTP servers and proxies in Python. I concluded the course by developing an efficient synchronized gaming protocol on TCP, complete with RFC-like documentation.
    </p>
    <p>
        After this project, I shifted my focus back to C++ and Qt, designing a banking app with a localhost implementation and transaction capabilities.
    </p>
    <p>
        This is just the beginning, there are many more to come &#x1F60A;
    </p>
    <span style={{ fontStyle: 'italic' }}>
        The following sections provide more insights into these projects, along with the GitHub repositories. Feel free to visit them!
    </span>
</>
notepadsProgramming.addHead({
    id: "programming",
    title: "Programming",
    textContent: descriptionProgramming,
    button: true,
    datePeriod: "2019 -..."

});

const bankingAppContent = <>
    <p>
        During my previous programming job at iinno-benelux, I mostly focussed on backend operations, and only in a basic, but sufficient amount of frontend. At Mobile Vikings, I emphasized on purely frontend development in React (also used for this website) in combination with Next JS and radix-UI.
    </p>
</>
const notepadBankingApp = <ProjectNotepadContent skillSet="Qt, C++, C++/Qt networking, UI design" contentAboutProject={bankingAppContent}
    githubLink="https://github.com/BurakKTopal/QtBankingApp"
/>
notepadsProgramming.addTail({
    id: "bankingapp",
    title: "Banking App in Qt",
    otherContent: notepadBankingApp,
    button: true,
    datePeriod: "March 2024"
});


const sgpdescription = <>
    <p>
        During my previous programming job at iinno-benelux, I mostly focussed on backend operations, and only in a basic, but sufficient amount of frontend. At Mobile Vikings, I emphasized on purely frontend development in React (also used for this website) in combination with Next JS and radix-UI.
    </p>
</>
const notepadSgp = <ProjectNotepadContent skillSet="Byte manipulation, optimization, Python networking, documentation" contentAboutProject={sgpdescription}
    githubLink="https://github.com/BurakKTopal/Synchronized-Gaming-Protocol"
/>

notepadsProgramming.addTail({
    id: "sgp",
    title: "Synchronized gaming on TCP",
    otherContent: notepadSgp,
    button: true,
    datePeriod: "Nov 2023-Dec 2023"
});


const AIDescription = <>
    <p>
        During my previous programming job at iinno-benelux, I mostly focussed on backend operations, and only in a basic, but sufficient amount of frontend. At Mobile Vikings, I emphasized on purely frontend development in React (also used for this website) in combination with Next JS and radix-UI.
    </p>
</>
const notepadAI = <ProjectNotepadContent skillSet="Neural network design, Optimization, Python Flask, Numpy, web dev" contentAboutProject={AIDescription}
    githubLink="https://github.com/BurakKTopal/PY-NumberRecognitionAI"
/>

notepadsProgramming.addTail({
    id: "ai",
    title: "Number recognition AI",
    otherContent: notepadAI,
    button: true,
    datePeriod: "Aug 2023-Sep 2023"
});


const ChessDescription = <>
    <p>
        I got interested in playing chess at the age of 13 and really started playing when I was 14. At 16, I became the regional champion of my age category, and at 17, I became the champion of all age categories. However, my eagerness to play chess declined after that. To revive this interest and improve my Python skills, I started making a chess program in March 2023. After two hard weeks, I developed a program where moves could be played by entering them in the console using general chess notation. It didn't have an engine, wasn't optimized, and wasn't user-friendly, as not everyone knows proper chess notation. The code was a complex cluster of if and for loops and wasn't even commented. Despite its flaws, it worked, and I was happy with it. I knew that one day I'd need to clean it up to present it properly.
    </p>
    <p>
        On August 15, I started looking back into my program. At first glance, it was really chaotic; it took me, the maker of the program, two days to go through it and clean it up. I wrote a program to count the number of positions available for a certain depth. At depth 4 from the starting position, it took 23 minutes to count 197,281 positions! The number seems impressive, but the time it took to achieve this was gigantically poor; it would mean 194 nodes per second. Compare this miserable number to that of the super-engine Stockfish: nodes per second. From here, the optimization journey begins!
    </p>

</>
const notepadChess = <ProjectNotepadContent skillSet="Alpha-Beta Pruning, Hashing, Pygame, Python OOP" contentAboutProject={ChessDescription}
    githubLink="https://github.com/BurakKTopal/Chess"
/>

notepadsProgramming.addTail({
    id: "chess",
    title: "Chess & Chess engine",
    otherContent: notepadChess,
    button: true,
    datePeriod: "March 2023-Aug 2023"
});


// Projects
const notepadsExtraCurricular = new DoubleLinkedList();

const descriptionExtraCurricular = <>
    <p>
        The first real project we worked on, was during in my second to last year of high school about the Mathematical applications in the medical
        world. This was in 2020. After this big project, there were many assignments and little tasks that were given by college, but I these are not
        tasks that take hours and hours of work, but more side quests.
    </p>
    <p>
        Actually, programming had a lot of ups and downs. It was in 2019 that I started with programming in C++, obviously underestimating how hard
        this language is. Hence, I only got the understanding of the basic syntax. I did use this basic knowledge for some little assignment about
        numerical analysis, which wasn't spectacular at all. After this, coding kind of cooled down for me.
    </p>
    <p>
        It took 2 more years to get back to it. This time with the more logical approach by starting with Python. I followed some courses on
        Codecademy and solidified my knowledge in this programming language. Slowly, yet surely.
    </p>
    <p>
        In 2022, I experienced a programming boom and ever since intensively worked on improving my coding skills.
    </p>

</>
notepadsExtraCurricular.addHead({
    id: "extracurricular",
    title: "Extra-curricular",
    textContent: <p>
        &#x1F6A7; Hold Tight, working on it! &#x1F6A7;
    </p>,
    button: true,

});


// Exporting all the double linked lists
export {
    mathAndPhysicsIntroContent,
    notepadsAboutMe,
    notepadsPhysics,
    notepadsMath,
    notepadsMathAndPhysics,
    notepadsProgramming,
    notepadsProfessionalLife,
    notepadsExtraCurricular
};