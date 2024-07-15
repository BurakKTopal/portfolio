const descriptionMechanics = <>
    <p>
        This course that is mandatory for Mathematics refreshes the concepts of classical, Newtonian Mechanics together
        with its laws. We revisited work and energy and principles that were mainly seen in high school.
    </p>
</>

const descriptionBasicConcInMath = <>
    <p>
        During the thematic days I had in my last year in high school, I already did gather some information about logic
        and set theory, but that was not 'official'. Hence during this introduction we focussed on major foundations of
        Mathematics: proof, logic, order relations and matrices.
    </p>
    <p>
        This was one such course which was not clear to me in the first 5 lessons, but started to clear out
        towards the end of it. The mindset that is needed is certainly not to give up and spend enough time in
        clearing your thoughts on the subject.
    </p>
</>

const descriptionCalc1 = <>
    <p>
        As I had 8 hours Mathematics each week in Secondary school, this was too mainly repetition. The newer concepts to me were
        Taylor expansions, which was excluded in my last year due to Covid, the error estimations and
        the big-Oh notation.
    </p>

</>

const descriptionBasicConcAlgebraAndAnalysis = <>
    <p>
        As opposed to the first few subjects, this was totally new territory. I got delved into more abstractness and
        rigor, as we focussed on the axiomatic system of real numbers. I can still remember that we needed to prove
        why a number plus 0 is still equal to that number with this system. Sounds ridiculous? It is not, since this gives
        you a bigger insight in this property and where it exactly comes from: questions that need to be asked as a Mathematician.
    </p>
    <p>
        We also worked on series, in the real numbers and equally in the complex plane together with their properties such as convergence, Cuachy seqeunces,
        Bolzano-Weierstrass...
    </p>
    <p>
        Due to the great importance in our later study, we got a brief intro to group theory; an set of elements served with an operation to which there
        are certain conditions to comply to. As will be later clear in my future algebra courses, this is just only the beginning.
    </p>
</>


const descriptionCalc2 = <>
    <p>
        Calculus 1 focussed on the basics to work with derivatives and integrals. The next step was to
        improve on this and introduce multi-dimensional integration and partial derivatives. In these lectures
        I realized that these 'partial derivatives' was not a half derivative, as I'd first thought.
    </p>
    <p>
        Whereas we talked about Taylor expansions in 1D at Calculus 1, we did improve by now going to
        higher dimensions. Generalizing is key, right? I fully agree with that, but as a freshman, the
        generalization of higher dimensional Taylor did take some time to consume, and finally understand.
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
        My first statistical course I experienced too as mostly repetitive of my High school years. We got a solid introduction
        on distributions and statistical tests for univariate and bivariate data.
    </p>
    <p>
        This was too my first encounter with the programming language R. At that time, my programming skills were
        nowhere near of what it is now, but yet it took quite some time to get acquianted with the index of a list starting
        from 1! We did have some extra lessons in which an assistant learned us R, and there was some basic self-made documentation
        by our uni. Nonetheless, I experienced a big learning curve, probably because I didn't program that much at the time so that
        I didn't really have it in my fingers.
    </p>
    <p>
        The exam was a little catastrophe because I felt really sick during my exam. I'm very stubborn and still went, which resulted in a
        big dip in my later data analysis &#x1F643;
    </p>
</>

const descriptionAnalysis1 = <>
    <p>
        We further built on our knowledge of series and learned about normed and metric spaces togeter with some
        topolgy. I thus came to realization that euclidean distance is just one metric of infinitely many!
    </p>
    <p>
        With the introduction of metric spaces, we generalized the theorems (convergence, continuity, ...) we had stated in previous analysis courses in
        an arbitrary metric space.
    </p>
</>

const descriptionLinearAlgebra = <>
    <p>
        We had learned the concepts of groups, it was time to enlarge our knowledge to vector spaces, and the
        linear transformations from one space to the other.
    </p>
    <p>
        The hardest part for me in my linear algebra course, was certainly how basis transformations worked. I still
        remember the page and the square-diagram for describing basis transformations. To be honest, for the exam is was
        not cristal clear, but it did the job. Secretly, I still keep my notes on transformation close to me to review it
        any time in case someone starts to talk about it &#x1F609;
    </p>
</>

const descriptionNumericalMethods1 = <>
    <p>
        This was the first more practical Mathematical course I got. We looked to the different representations of
        numbers such as floating-point representations. We also considered the errors that are possible to occur in computers.
        and how certain subsequent operations can lead to instablity and error propagation.
    </p>
    <p>
        We continued with discretization of derivatives, and Langrange/Hermite/splines interpolation with its direct implementation
        in numerically determining integrals.
    </p>
</>
const mathYearOneSemTwo = [
    {
        subject: "Data analysis and statistical models 1",
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
        This was the first real Algebra course that I got, and started with the study in
        groups that have special properties. Moreover, the quotient groups and normal subgroups. Connected
        to this, we considered Sylow's theorems, and the (semi-)direct product of groups.
    </p>
    <p>
        With groups profoundly discussed, we introduced a new construction: (factorial) rings, field extensions and Noether, which is actually also
        known in Physics for her contributions in the fact that each symmmetry in a Physical system (with conservative forces) leads
        to a law of conversation.
    </p>
</>

const descriptionAnalysis2 = <>

    <p>
        Known as the hardest course due to its abstractness and rigor, Analysis 2 gave me hard time. Not only because there were
        a lot of difficult exercises, which was only clear to me after I'd read 5 times the theory, but also because there was a lot
        to memorize. There were a total of 50 proofs that were needed to be learned.
    </p>
    <p>
        Nonetheless, it gave a big enjoyment once I understood most of it. The course was focussed on topological concepts. In the part about the
        Lebesgue integrals, I got mindblown; I thought that there was only one kind of integrals! Apparently, the 'ordinary' integrals
        are Riemann integrals, defined by the used of upper- and lowersums, while a lebesgue integral is defined by the
        supremum of the integrals of the sum of simple (step) functions which actually approximate the real function. How we come to the point of defining the
        integral of one simple function, I will better spare for another time...
    </p>
</>

const descriptionDifferentialGeometry = <>
    <p>
        The first part was mainly revisiting the concepts of curvature that was seen in Calculus 2, more importantly the
        Frenet-Serret formulas. Once settled, the focus started on higher dimensional curves, and regular surfaces in 3D. This meant that we introduced the
        fundamental forms of differential geometry, to eventual end up with the Gauss-bonnet theorem.
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
        subject: "Differential geometry 1 Curves and surfaces",
        credits: 4,
        year: 2,
        grade: 18,
        description: descriptionDifferentialGeometry
    }]


const descriptionAlgebra2 =
    <>
        <p>
            We again kicked off with the study of finitely generated commutative groups, and continued by extending the concept of
            vector fields, which is defined over a Mathematical field, to a module, which is less strict and is defined over
            a Mathematical ring.
        </p>
        <p>
            We continued to delve into the world of representations, and character tables, which are the sudoku of a Mathematician.
            We learned techniques to easily calculate these tables with Young diagrams and the Frobenius formula.
        </p>
    </>

const descriptionFourierAnalysis = <>
    <p>
        At this point, I heard a lot about Fourier during my courses in Physics and it was high time
        to make this more rigor in my head. We looked in this course at the Fourier series of periodic functions, the theorem of Parseval
        which tells something about the conservation of L2 norm between the original function, and its Fourier coefficients. With the fundamentals covered,
        we stepped to the Fourier transform of functions, together with its inverse transformations and handy theorems such as
        Plancherels theorem, which is the continuous counterpart of the Parseval identity we saw during the Fourier series.
    </p>
    <p>
        Additionally, we studied linear operators, continued with functionals and dual spaces, and Riesz operator which is a
        conjugate linear isometric isomorphism between an Hilbert space and its dual space. This result thus connects the two spaces.
    </p>
</>

const descriptionLinearStatisticalModels = <>
    <p>
        After my unpleasant memories from my previous statistics course, I wasn't initially very eager to
        have a second round, now with the linear regression model. The fact that it wasn't clear at all untill the very end, did not make it better either.
        We again made use of the programming language R, and we must learn to make simulations with it in our final assignment!
    </p>
    <p>
        Besides R and linear regression model, we extended to the multilinear regression model and explored appropiate parameters to estimate how
        bonafide the value we found is compared to that of the real one.
    </p>
    <p>
        We also talked about a method to compare the difference between groups within a data set using the analysis of Variance (ANOVA) and implemented it
        in R. We ended the course by covering Logistic regression models for binary outcomes, putting a strong focus on the interpretation to get as best possible
        acquianted with the qualitative meaning of the during the lectures shown simulations.
    </p>
</>

const descriptionGeometry = <>
    <p>
        We had only one course on pure geometry during our Bachelor's in Mathematics. It took quite some time to accept
        that within affine geometry, it is possible to define a point on infinity, but at the end it clicked.
    </p>
    <p>
        In my eyes, this course got my interest, but because I'm not a drawing master, it was very hard to have my own
        proper notes of the proofs. Luckily, a book was given. One topic on particular was the duality in geoemtry. This means
        that given a certain proposition within geometry, that by replacing certain words with their duals, you get a direct and valid
        theorem in their dual version.
    </p>
</>

const descriptionNumericalMethods2 = <>
    <p>
        We extended Numerical methods 2 by studying solution methods for (non)linear systems
        of algebraic equations, especially iterative methods such as the (conjugate) gradient method.
    </p>
    <p>
        In the second part we looked into minimization problems and multiple step methods such as Runge-Kutta to numerically
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
        Complex numbers are inevitable, and in our final year we got a whole course to discuss it. We learned about integration
        and differentiation in the complex plane. We exploited singular points to evaluate integrals using the Cauchy representation
        formula and the residue theorems, and coupled a function being analytical or not to the Cauchy-Riemann equations.
    </p>
    <p>
        Additionally, we extended the Taylor series to the complex plane, which are in that case known as the Laurent expansion.
    </p>
</>

const descriptionFundamentalsInProbTheory = <>
    <p>
        Concluding the trilogy, we quickly revisited what a stochastic vector is. We continued with a
        small intermezzo with conditional distributions and the expectation values of them, to after that go back to
        the stochastic vectors. We studied how the distribution of the stochastic vector changes when we change transform our
        vector by a certain function (e.g. a quadratic function).
    </p>
    <p>
        We continued by looking at how given a sequence of stochastic vectors can converge, and study their
        asymptotic behaviour. Finally, we studied ways to find ideal estimators for statistical entities (such as the mean)
        for a given distribution using the maximum likelihood method.
    </p>
</>
const mathYearThreeSemOne = [
    {
        subject: "Complex analysis",
        credits: 5,
        year: 3,
        grade: 20,
        description: descriptionComplexAnalysis
    },
    {
        subject: "Fundaments in probability theory and statistics",
        credits: 5,
        year: 3,
        grade: 20,
        description: descriptionFundamentalsInProbTheory
    }]


const descriptionDatabases = <>
    <p>
        Due to my high interest in Computer Science that start growing near the end
        of my second year, I took some CS courses. Databases I had taken to learn in depth the
        fundamentals of SQL. As a bonus, I learned about Entity Relation diagrams: a nice tool to
        visualize your database you are about to set up, relational algebra to put your ideas in a general, but
        more rigor way.
    </p>
    <p>
        We finished the course by normal forms and how functional dependencies that are connecting your attributes through
        relations, can simplify your schemas into the Boyce-Codd normal forms, which efficiently consitutes by
        eliminating anomalies in your database.
    </p>

</>

const descriptionNumericalMethods3 = <>
    <p>
        We started this course by discretization of 1D differential equations, and went over to 2D. These
        discretization were given to be easily generalized to higher dimensional problems.
    </p>
    <p>
        The second part was about using finite elements to solve a problem numerically, and finished with a
        Matlab implementation of one such example using finite elements.
    </p>
</>


const descriptionDynamicalSystems = <>
    <p>
        This course was divided into two parts:
    </p>
    <li>
        Describing discrete dynamical systems, covering bifurcations and its different types, and the
        occurrence of bifurcations.
    </li>
    <li>
        Describing continuous dynamical systems in 1D and 2D, together with bifurcations and the limit cycli and
        Hopf bifurcations that can happen.
    </li>
    <p>

    </p>
</>

const descriptionPartialDiffEq = <>
    <p>
        We discussed three major types of PDEs: hyperbolic, elliptic and parabolic and looked
        into the existence and uniqueness of their, corresponding (boundary-valued) problems.
    </p>
    <p>
        We utilized several methods such as the similarity solutions, fundamental solution separation of variables. In our
        study, we also considered non-linear equations such as the (degenerate) Burger's equation.
    </p>
</>

const descriptionPAD = <>
    <p>
        This course gave a basic introduction to Python, which in my eyes came a little bit
        too late as at this time I already got myself quite comfortable in the syntax of Python by my
        self-learning. Nontheless, it did learn me some handy to-knows.
    </p>
</>

const descriptionSimulationWeek = <>
    <p>
        This optional course gave me the possibility to analyze the data of a external company in a group of four persons. In doing our data analysis,
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
        subject: "Numerical methods 3",
        credits: 5,
        year: 3,
        grade: 19,
        description: descriptionNumericalMethods3
    },
    {
        subject: "Dynamische systemen",
        credits: 5,
        year: 3,
        grade: 19,
        description: descriptionDynamicalSystems
    },
    {
        subject: "Partiele diff. Vergelijkingen",
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
        subject: "Simulation week",
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