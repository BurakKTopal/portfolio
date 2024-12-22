const descriptionMechanics = <>
    <p>
        This mandatory mathematics course refreshes the concepts of classical Newtonian mechanics along with its laws. We revisited work, energy, and principles that were mainly covered in high school.
    </p>
</>

const descriptionBasicConcInMath = <>
    <p>
        During the thematic days I had in my last year of high school, I had already gathered some information about logic
        and set theory, but that was not 'official'. Hence, during this introduction, we focused on the major foundations of
        Mathematics: proof, logic, order relations, and matrices.
    </p>
    <p>
        This was one such course that was not clear to me in the first five lessons but started to become clear
        towards the end of it. The mindset that is needed is certainly not to give up and to spend enough time
        clarifying your thoughts on the subject.
    </p>
</>

const descriptionCalc1 = <>
    <p>
        As I had eight hours of Mathematics each week in secondary school, this was mostly repetition. The newer concepts to me were
        Taylor expansions, which were excluded in my last year due to COVID, the error estimations, and
        the big-O notation.
    </p>
</>

const descriptionBasicConcAlgebraAndAnalysis = <>
    <p>
        As opposed to the first few subjects, this was totally new territory. I delved into more abstraction and
        rigor as we focused on the axiomatic system of real numbers. I can still remember that we needed to prove
        why a number plus 0 is still equal to that number within this system. Sounds ridiculous? It is not, since this gives
        you a deeper insight into this property and where it exactly comes from: questions that need to be asked as a Mathematician.
    </p>
    <p>
        We also worked on series, in the real numbers and equally in the complex plane, together with their properties such as convergence, Cauchy sequences,
        Bolzano-Weierstrass, etc.
    </p>
    <p>
        Due to its great importance in our later studies, we received a brief introduction to group theory; a set of elements served with an operation to which there
        are certain conditions to comply with. As will be clear in my future algebra courses, this is just the beginning.
    </p>
</>

const descriptionCalc2 = <>
    <p>
        Calculus 1 focused on the basics of working with derivatives and integrals. The next step was to
        build on this and introduce multi-dimensional integration and partial derivatives. In these lectures,
        I realized that these 'partial derivatives' were not half derivatives, as I'd first thought.
    </p>
    <p>
        Whereas we talked about Taylor expansions in 1D in Calculus 1, we improved by now going to
        higher dimensions. Generalizing is key, right? I fully agree with that, but as a freshman, the
        generalization of higher-dimensional Taylor took some time to grasp and finally understand.
    </p>
</>
const mathYearOneSemOne = [
    {
        subject: "Mechanics",
        credits: 5,
        year: 1,
        grade: 19,
        description: descriptionMechanics
    },
    {
        subject: "Basic Concepts in Mathematics",
        credits: 5,
        year: 1,
        grade: 19,
        description: descriptionBasicConcInMath
    },
    {
        subject: "Calculus 1",
        credits: 5,
        year: 1,
        grade: 19,
        description: descriptionCalc1
    },
    {
        subject: "Basic Concepts for Analysis and Algebra",
        credits: 5,
        year: 1,
        grade: 18,
        description: descriptionBasicConcAlgebraAndAnalysis
    },
    {
        subject: "Calculus 2",
        credits: 5,
        year: 1,
        grade: 17,
        description: descriptionCalc2
    }]

const descriptionDataAnalysis = <>
    <p>
        My first statistical course was mostly repetitive of my high school years. We received a solid introduction
        to distributions and statistical tests for univariate and bivariate data.
    </p>
    <p>
        This was also my first encounter with the programming language R. At that time, my programming skills were
        nowhere near what they are now, but it still took quite some time to get acquainted with the index of a list starting
        from 1! We had some extra lessons where an assistant taught us R, and there was some basic self-made documentation
        by our university. Nonetheless, I experienced a significant learning curve, probably because I didn't program much at the time, so
        I didn't really have it down.
    </p>
    <p>
        The exam was a little catastrophic because I felt really sick during it. I'm very stubborn and still went, which resulted in a
        big dip in my later data analysis &#x1F643;
    </p>
</>

const descriptionAnalysis1 = <>
    <p>
        We further built on our knowledge of series and learned about normed and metric spaces together with some
        topology. I thus came to the realization that Euclidean distance is just one metric of infinitely many!
    </p>
    <p>
        With the introduction of metric spaces, we generalized the theorems (convergence, continuity, ...) we had stated in previous analysis courses in
        an arbitrary metric space.
    </p>
</>

const descriptionLinearAlgebra = <>
    <p>
        We had learned the concepts of groups; it was time to expand our knowledge to vector spaces and the
        linear transformations from one space to another.
    </p>
    <p>
        The hardest part for me in my linear algebra course was certainly how basis transformations worked. I still
        remember the page and the square-diagram for describing basis transformations. To be honest, for the exam it was
        not crystal clear, but it did the job. Secretly, I still keep my notes on transformation close to me to review them
        anytime in case someone starts to talk about it &#x1F609;
    </p>
</>

const descriptionNumericalMethods1 = <>
    <p>
        This was the first more practical mathematics course I took. We looked at the different representations of
        numbers such as floating-point representations. We also considered the errors that can occur in computers
        and how certain subsequent operations can lead to instability and error propagation.
    </p>
    <p>
        We continued with the discretization of derivatives and Lagrange/Hermite/splines interpolation with their direct implementation
        in numerically determining integrals.
    </p>
</>
const mathYearOneSemTwo = [
    {
        subject: "Data Analysis and Statistical Models 1",
        credits: 5,
        year: 1,
        grade: 14,
        description: descriptionDataAnalysis
    },
    {
        subject: "Analysis 1",
        credits: 5,
        year: 1,
        grade: 19,
        description: descriptionAnalysis1
    },
    {
        subject: "Linear Algebra",
        credits: 5,
        year: 1,
        grade: 16,
        description: descriptionLinearAlgebra
    },
    {
        subject: "Numerical Methods 1",
        credits: 5,
        year: 1,
        grade: 19,
        description: descriptionNumericalMethods1
    },
    // { 
    //     subject: "TOTAL",
    //     credits: 45,
    //     year: 1,
    //     totalResult: 160
    // },
    // { 
    //     subject: "Weighted result",
    //     weightedResult: 17.78,
    //     GPA: 5
    // }
];

const mathYearOne = [mathYearOneSemOne, mathYearOneSemTwo];


const descriptionAlgebra1 = <>
    <p>
        This was the first real Algebra course that I took, and it started with the study of
        groups that have special properties. Moreover, the quotient groups and normal subgroups. Connected
        to this, we considered Sylow's theorems and the (semi-)direct product of groups.
    </p>
    <p>
        With groups thoroughly discussed, we introduced a new construction: (factorial) rings, field extensions, and Noether, which is actually also
        known in Physics for her contributions in the fact that each symmetry in a physical system (with conservative forces) leads
        to a law of conservation.
    </p>
</>

const descriptionAnalysis2 = <>

    <p>
        Known as the hardest course due to its abstractness and rigor, Analysis 2 gave me a hard time. Not only because there were
        a lot of difficult exercises, which were only clear to me after I'd read the theory five times, but also because there was a lot
        to memorize. There were a total of 50 proofs that needed to be learned.
    </p>
    <p>
        Nonetheless, it gave me great enjoyment once I understood most of it. The course was focused on topological concepts. In the part about the
        Lebesgue integrals, I was mind-blown; I thought that there was only one kind of integrals! Apparently, the 'ordinary' integrals
        are Riemann integrals, defined by the use of upper and lower sums, while a Lebesgue integral is defined by the
        supremum of the integrals of the sum of simple (step) functions which actually approximate the real function. How we come to the point of defining the
        integral of one simple function, I will better spare for another time...
    </p>
</>

const descriptionDifferentialGeometry = <>
    <p>
        The first part was mainly revisiting the concepts of curvature that were seen in Calculus 2, more importantly the
        Frenet-Serret formulas. Once settled, the focus shifted to higher-dimensional curves and regular surfaces in 3D. This meant that we introduced the
        fundamental forms of differential geometry, to eventually end up with the Gauss-Bonnet theorem.
    </p>
</>
const mathYearTwoSemOne = [
    {
        subject: "Algebra 1",
        credits: 5,
        year: 2,
        grade: 18,
        description: descriptionAlgebra1
    },
    {
        subject: "Analysis 2",
        credits: 5,
        year: 2,
        grade: 19,
        description: descriptionAnalysis2
    },
    {
        subject: "Differential Geometry 1: Curves and Surfaces",
        credits: 4,
        year: 2,
        grade: 18,
        description: descriptionDifferentialGeometry
    }]


const descriptionAlgebra2 =
    <>
        <p>
            We again kicked off with the study of finitely generated commutative groups and continued by extending the concept of
            vector fields, which are defined over a mathematical field, to modules, which are less strict and are defined over
            a mathematical ring.
        </p>
        <p>
            We continued to delve into the world of representations and character tables, which are the sudoku of a Mathematician.
            We learned techniques to easily calculate these tables with Young diagrams and the Frobenius formula.
        </p>
    </>

const descriptionFourierAnalysis = <>
    <p>
        At this point, I heard a lot about Fourier during my courses in Physics, and it was high time
        to solidify this more rigorously in my mind. We looked in this course at the Fourier series of periodic functions, Parseval's theorem
        which tells something about the conservation of the L2 norm between the original function and its Fourier coefficients. With the fundamentals covered,
        we stepped into the Fourier transform of functions, together with its inverse transformations and handy theorems such as
        Plancherel's theorem, which is the continuous counterpart of the Parseval identity we saw during the Fourier series.
    </p>
    <p>
        Additionally, we studied linear operators, continued with functionals and dual spaces, and the Riesz operator, which is a
        conjugate linear isometric isomorphism between a Hilbert space and its dual space. This result thus connects the two spaces.
    </p>
</>

const descriptionLinearStatisticalModels = <>
    <p>
        After my unpleasant memories from my previous statistics course, I wasn't initially very eager to
        take a second round, now with the linear regression model. The fact that it wasn't clear at all until the very end did not make it better either.
        We again made use of the programming language R, and we had to learn to make simulations with it in our final assignment!
    </p>
    <p>
        Besides R and the linear regression model, we extended to the multilinear regression model and explored appropriate parameters to estimate how
        bona fide the value we found is compared to that of the real one.
    </p>
    <p>
        We also discussed a method to compare the differences between groups within a data set using the analysis of variance (ANOVA) and implemented it
        in R. We ended the course by covering logistic regression models for binary outcomes, putting a strong focus on the interpretation to get as best as possible
        acquainted with the qualitative meanings through simulations shown during the lectures.
    </p>
</>

const descriptionGeometry = <>
    <p>
        We had only one course on pure geometry during our Bachelor's in Mathematics. It took quite some time to accept
        that within affine geometry, it is possible to define a point at infinity, but in the end, it clicked.
    </p>
    <p>
        In my eyes, this course sparked my interest, but because I'm not a drawing master, it was very hard to have my own
        proper notes on the proofs. Luckily, a book was provided. One topic in particular was the duality in geometry. This means
        that given a certain proposition within geometry, by replacing certain words with their duals, you get a direct and valid
        theorem in their dual version.
    </p>
</>

const descriptionNumericalMethods2 = <>
    <p>
        We extended Numerical Methods 2 by studying solution methods for (non)linear systems
        of algebraic equations, especially iterative methods such as the (conjugate) gradient method.
    </p>
    <p>
        In the second part, we looked into minimization problems and multi-step methods such as Runge-Kutta to numerically
        approximate the solution of ordinary differential equations.
    </p>
</>
const mathYearTwoSemTwo = [
    {
        subject: "Algebra 2",
        credits: 5,
        year: 2,
        grade: 17,
        description: descriptionAlgebra2
    },
    {
        subject: "Functional and Fourier Analysis",
        credits: 5,
        year: 2,
        grade: 18,
        description: descriptionFourierAnalysis
    },
    {
        subject: "Linear Statistical Models",
        credits: 5,
        year: 2,
        grade: 18,
        description: descriptionLinearStatisticalModels
    },
    {
        subject: "Geometry",
        credits: 5,
        year: 2,
        grade: 17,
        description: descriptionGeometry
    },
    {
        subject: "Numerical Methods 2",
        credits: 5,
        year: 2,
        grade: 18,
        description: descriptionNumericalMethods2
    },
    // { 
    //     subject: "TOTAL",
    //     credits: 39,
    //     year: 2,
    //     totalResult: 143
    // },
    // { 
    //     subject: "Weighted result",
    //     weightedResult: 17.87,
    //     GPA: 5
    // }
];
const mathYearTwo = [mathYearTwoSemOne, mathYearTwoSemTwo]


const descriptionComplexAnalysis = <>
    <p>
        Complex numbers are inevitable, and in our final year, we had a whole course to discuss them. We learned about integration
        and differentiation in the complex plane. We exploited singular points to evaluate integrals using the Cauchy representation
        formula and the residue theorems, and connected a function being analytical or not to the Cauchy-Riemann equations.
    </p>
    <p>
        Additionally, we extended the Taylor series to the complex plane, which in that case are known as the Laurent expansion.
    </p>
</>

const descriptionFundamentalsInProbTheory = <>
    <p>
        Concluding the trilogy, we quickly revisited what a stochastic vector is. We continued with
        a small interlude with conditional distributions and the expectation values of them, to then go back to
        the stochastic vectors. We studied how the distribution of the stochastic vector changes when we transform our
        vector with a certain function (e.g., a quadratic function).
    </p>
    <p>
        We continued by looking at how a sequence of stochastic vectors can converge and studied their
        asymptotic behavior. Finally, we studied ways to find ideal estimators for statistical entities (such as the mean)
        for a given distribution using the maximum likelihood method.
    </p>
</>
const mathYearThreeSemOne = [
    {
        subject: "Complex Analysis",
        credits: 5,
        year: 3,
        grade: 20,
        description: descriptionComplexAnalysis
    },
    {
        subject: "Fundamentals in Probability Theory and Statistics",
        credits: 5,
        year: 3,
        grade: 20,
        description: descriptionFundamentalsInProbTheory
    }]


const descriptionDatabases = <>
    <p>
        Due to my high interest in Computer Science that started growing near the end
        of my second year, I took some CS courses. In Databases, I learned in depth the
        fundamentals of SQL. As a bonus, I learned about Entity-Relationship diagrams: a nice tool to
        visualize the database you are about to set up, and relational algebra to present your ideas in a general, but
        more rigorous way.
    </p>
    <p>
        We finished the course by studying normal forms and how functional dependencies that connect your attributes through
        relations can simplify your schemas into the Boyce-Codd normal forms, which efficiently constitute by
        eliminating anomalies in your database.
    </p>

</>

const descriptionNumericalMethods3 = <>
    <p>
        We started this course by discretizing 1D differential equations and moved on to 2D. These
        discretizations were designed to be easily generalized to higher-dimensional problems.
    </p>
    <p>
        The second part was about using finite elements to solve a problem numerically, and it concluded with a
        MATLAB implementation of one such example using finite elements.
    </p>
</>


const descriptionDynamicalSystems = <>
    <p>
        This course was divided into two parts:
    </p>
    <li>
        Describing discrete dynamical systems, covering bifurcations and their different types, and the
        occurrence of bifurcations.
    </li>
    <li>
        Describing continuous dynamical systems in 1D and 2D, along with bifurcations and the limit cycles and
        Hopf bifurcations that can occur.
    </li>
    <p>
    </p>
</>

const descriptionPartialDiffEq = <>
    <p>
        We discussed three major types of PDEs: hyperbolic, elliptic, and parabolic, and examined
        the existence and uniqueness of their corresponding (boundary-valued) problems.
    </p>
    <p>
        We utilized several methods such as similarity solutions, fundamental solutions, and separation of variables. In our
        study, we also considered non-linear equations such as the (degenerate) Burger's equation.
    </p>
</>

const descriptionPAD = <>
    <p>
        This course provided a basic introduction to Python, which in my eyes came a little bit
        too late as by this time I had already become quite comfortable with the syntax of Python through my
        self-learning. Nonetheless, it taught me some handy tips.
    </p>
</>

const descriptionSimulationWeek = <>
    <p>
        This optional course gave me the opportunity to analyze the data of an external company in a group of four people. In doing our data analysis,
        we constructed several diagrams and worked heavily with the statistical programming language R.
    </p>
</>
const mathYearThreeSemTwo = [
    {
        subject: "Databases",
        credits: 6,
        year: 3,
        grade: 15,
        description: descriptionDatabases
    },
    {
        subject: "Numerical Methods 3",
        credits: 5,
        year: 3,
        grade: 19,
        description: descriptionNumericalMethods3
    },
    {
        subject: "Dynamical Systems",
        credits: 5,
        year: 3,
        grade: 19,
        description: descriptionDynamicalSystems
    },
    {
        subject: "Partial Differential Equations",
        credits: 5,
        year: 3,
        grade: 19,
        description: descriptionPartialDiffEq
    },
    {
        subject: "Programming and Algorithmic Thinking",
        credits: 5,
        year: 3,
        grade: 19,
        description: descriptionPAD
    },
    {
        subject: "Moddeling Week",
        credits: 3,
        year: 3,
        grade: 17,
        description: descriptionSimulationWeek
    },
    // { 
    //     subject: "TOTAL",
    //     credits: 39,
    //     year: 3,
    //     totalResult: 148
    // },
    // { 
    //     subject: "Weighted result",
    //     weightedResult: 18.49,
    //     GPA: 5
    // }
];


const mathYearThree = [mathYearThreeSemOne, mathYearThreeSemTwo]


export { mathYearOne, mathYearTwo, mathYearThree }