const descriptionOptics = <>
    <p>
        This was the first Physics course I had taken when I started with the TWIN track. Due to some
        administration, I only joined at lesson three. As a result, I felt a bit lost, and it did take some time to
        get into it; certainly because the exercises contained a lot of dirty convolution integrals, which wasn't that easy at all
    </p>
    <p>
        This course gave me a broad introduction to Fourier analysis in the broad sense, together with Linear time-independent Transmission
        systems (LTI) and how these systems are characterized by their Point Spread Function. Additionally, we got into how electron Microscopes actually work by
        using the Broglie wavelength of an electron.
    </p>
    <p>
        Besides the theory, we also had numerous lab work (such as measuring the diffraction patterns of a certain light source). I've had several labs during high school, yet this
        one was more serious as now we needed to write a paper afterwards to showcase our results.
    </p>
</>

const descriptionRelativity = <>

    <p>
        We've all heard about the special relativity theory that Einstein proposed in 1905. In this introductory course in SR, we
        covered in detail Lorentz contraction and transformations, proper time and time dilation; all in the flat, Minkowskian spacetime.
    </p>
    <p>
        As space and time are now entangled entities, an ordinary (three-)vector is not sufficient. As a result, we introduced the
        four-vectors in spacetime. With this, we have laid the foundations for the more more mathematically heavy brother, General Relativity.

    </p>
</>

const descriptionQM1 = <>
    <p>
        With this introductor course, we got familiar with standing waves. These waves were found by applying the separation of
        variables on the wave equation, which is represented as a partial
        differential equation.
    </p>
    <p>
        Once we've gotten some sense of these standing waves, we continued with the 'real' Quantum Mechanics. More
        specifically, what is a wave function (took some time to get my head around that haha). Once this was covered, we
        looked into the essential concepts in Quantum Mechanics, such as operators, commutators, eigenvalues and functions to eventually use these
        to determine the energy spectrum of potential wells and harmonic oscillators.
    </p>


</>


const descriptionElectromagnetism = <>
    <p>
        It is funny that we had this course after Optics. I clearly remember that when our professor started
        with Maxwell equations during Optics, I had no idea what he was talking about! It only took 4 more months to be relieved:
        in Electromagnetism we covered the elements of the Maxwell equations.
    </p>
    <p>
        We ended the course with some electronics too. This encapsulated DC circuits, capacitance and dielectrics,
        electromotive forces, DC and AC, induction and many more.
    </p>
</>


const descriptionPlanetEarth = <>
    <p>
        At this point, we already has some theoretical subjects, and we covered many concepts and
        theories. This course pushed us in thinking about the 'what' and 'why' certain things are the way we observe them in
        our surroundings. Moreover, 'what is life?' and how does 'climate change work?'.
    </p>
</>

const descriptionAstronomy = <>
    <p>
        This course gave us a high-level overview of the current state of the Universe. This means learning about
        the creation of stars, our solar system and overall the Universe. I experienced this course as quite heavy as it did contain
        a lot of information, with few images. Yet, it was an eye-opener as after this course, as now I can at least give some meaning
        to 'Universe' and its origins opposed to the earlier abstraction by the use of these 8 letters.
    </p>


</>
const physicsYearOneSemOne = [
    {
        subject: "Optics",
        credits: 6,
        year: 1,
        grade: 18,
        description: descriptionOptics
    },
    {
        subject: "Relativity",
        credits: 3,
        year: 1,
        grade: 18,
        description: descriptionRelativity
    }]


const physicsYearOneSemTwo = [
    {
        subject: "Quantum Mechanics 1",
        credits: 4,
        year: 1,
        grade: 19,
        description: descriptionQM1
    },
    {
        subject: "Electromagnetism",
        credits: 6,
        year: 1,
        grade: 18,
        description: descriptionElectromagnetism
    },
    {
        subject: "Physics of Planet Earth, Climate and Life",
        credits: 5,
        year: 1,
        grade: 18,
        description: descriptionPlanetEarth
    },
    {
        subject: "Introduction to astronomy and astrophysics",
        credits: 5,
        year: 1,
        grade: 19,
        description: descriptionAstronomy
    },

    // { 
    //     subject: "TOTAL",
    //     credits: 29,
    //     year: 1,
    //     totalResult: 110
    // },
    // { 
    //     subject: "Weighted result",
    //     weightedResult: 18.31,
    //     GPA: 5
    // }
];
const physicsYearOne = [physicsYearOneSemOne, physicsYearOneSemTwo]


const descriptionHydronamics = <>
    <p>
        In the course Fluid dynamics, we started with the essentials: conservation of
        mass, momentum and energy. Slowly but surely we introduced additional complexities to our repertoire
        by including laminar flows, viscosity and how this can be described by Reynolds number. We finally ended this
        course by <span style={{ fontWeight: 'bold' }}>deriving</span> the Navier-Stokes equation for Newtonian fluids.
    </p>
    <p>
        In this course, I've also ran my very first simulation in Ansys, by conducting a flow study on the object that
        could be chosen by ourselves. In my case, I wanted to study the flow patterns that would be present around the
        the <span style={{ fontStyle: 'italic' }}>Orion the Multi Purpose Crew Vehicle</span>.
    </p>
    <p>
        Immediately after the exam, I had the feeling that I would fail this course because I wasn't sure about my answers on the questions at all! Apparently, judging on the final course, my gut feeling
        is not accurate...
    </p>
</>

const descriptionQM2 = <>

    <p>
        Building on the knowledge of Quantum Mechanics 1, we made our way into the more heavy stuff. This
        encapsulated the formalism of the Hilbert spaces in which the wave functions lives. We also introduced spin states
        and studied with our now over 1 year of Physics education, the Stern-Gerlach experiment.
    </p>
    <p>
        We concluded this course by deriving the analytical solution of only atom: hydrogen. Even though the derivation may be hidden in
        some part of my memory, one thing is still clear in my mind of the derivation: we'd used rho, 'l' and 'e' which are all equivalent in my
        writing!
    </p>
</>


const descriptionThermodynamics = <>
    <p>
        During this course, we focussed on the quasi-static systems. Additionally, this encapsulated the
        description of different engines, one being the famous Carnot engine. A great insight in this engine was the use for defining a temperature scale!
    </p>
    <p>
        This course also introduced me to the Legendre transformations, which is handy in converting the functions of several physical quantities.
        This transformation introduces new physical quantities (enthalpy, gibbs energy, ...), which can be connected with the ordinary ones (pressure, temperature) using
        the Maxwell relations.
    </p>
    <p>
        We finalized this course by looking at first- and second-order phase transitions, and touched on the Onsager theorem that is used in
        non-equilibrium situations.
    </p>
</>


const descriptionVectorcalculus = <>
    <p>
        Untill this point, we had two other calculi courses, which went from the 'simple' 1D integrals, to the 2D integrals on
        real-valued functions. In Vectorcalculus, we took the integral of vector-valued functions, considered higher dimensional integrals, and looked
        into fundamental theorems such as Gauss, Stokes' theorem and Green's (which is basically 2D Stokes).
    </p>
    <p>
        I also (finally!) got a better grasp on what the heck path integrals meant, as I'd seen this many times but couldn't get my
        head around it! As a bonus, we also looked into orthogonal curvilinear coordinate systems; which is a bigger subset then the more
        simple cartesian systems.
    </p>
</>



const descriptionMathematicalMethodsInPhysics = <>
    <p>
        We covered the general methods to solve first and second order linear differential equations. This meant looking
        into the Wronskian of an ODE, and solving higher ODEs by using an exponential ansatz.
    </p>
    <p>
        We especially looked at the Frobenius method, which is a powerfull tool to reduce a non-linear homogeneous equations into
        a recurrence relation of the power series term.
    </p>
</>


const descriptionAdvancedMeasurementsMethod = <>
    <p>
        A Physicist should not only know his theories, but also need to be sufficiently elligible at lab work.
        This was exactly the purpose of advanced measurements method. We had each week lab work, and needed to several reports
        on these labs. The essential skill set that this brought with this was to work safely with lasers, the alignment of it and
        also the use of lab materials such as an lock-in amplifier.
    </p>
    <p>
        This course also gave us the basics of the programming language to control these measurement devices:
        Labview. This is a graphical language in which you need to connect several 'coding blocks' with eachother to
        eventually get something working.
        {/* Picture of Labview? */}
    </p>
</>
const physicsYearTwoSemOne = [

    {
        subject: "Hydrodynamics",
        credits: 4,
        year: 2,
        grade: 20,
        description: descriptionHydronamics
    },
    {
        subject: "Quantum Mechanics 2",
        credits: 4,
        year: 2,
        grade: 19,
        description: descriptionQM2
    },
    {
        subject: "Thermodynamics",
        credits: 5,
        year: 2,
        grade: 19,
        description: descriptionThermodynamics
    },
    {
        subject: "Vectorcalculus",
        credits: 3,
        year: 2,
        grade: 20,
        description: descriptionVectorcalculus
    },
    {
        subject: "Mathematical methods of physics",
        credits: 3,
        year: 2,
        grade: 19,
        description: descriptionMathematicalMethodsInPhysics
    },
    {
        subject: "Advanced Measurement Methods",
        credits: 6,
        year: 2,
        grade: 17,
        description: descriptionAdvancedMeasurementsMethod
    }]


const descriptionAnalyticalMechanics = <>
    <p>
        During our high school years, we struggle with learning to set up
        force diagrams to solve problems where we discuss the motion of (rigid) bodies.
        These are so-called Newtonian systems, and we all know how much efforts goes into constructing
        this.
    </p>
    <p>
        Another way of looking at these motion problems, can be done using the Langrange Formalism. We use the difference of the kinetic
        energy and the potential energy to setup the Euler-langrange equation. Solving this equation then leads to getting the equations of motion,
        hence solving our problem.
    </p>
    <p>
        This new way of thinking and stepping of the Newtonian Physics was very enlighting due to its beautiful use of
        (partial) differential equations.
    </p>
</>



const descriptionElectrodynamics = <>
    <p>
        We started this course with formulating the Maxwell's law in differential forms. This course
        was characterized by vectorcalculus, of which I was very happy that we had already had an introductory
        course.
    </p>
    <p>
        This course was a very heavy one, certainly because of the speed to which we were going. We finished in one semester
        course 12 chapters: from the basic description of electricity, to magnetism and eventually to the description of Maxwell's laws
        relativistically!
    </p>
    <p>
        A lot of effort I'd put into this course due to its high demands, which did pay off.
    </p>
</>


const descriptionExperimentalTechniques = <>
    <p>
        We were divided into groups of two persons to work on a big, experimental project during one semester in our second year.
        I was paired with <a href="https://blvckstudios.com">Adam blvck</a>, a super bright and very good programmer. We worked for 5 months with
        a PhD student on Nitrogen-vacancies in diamond. We hypothesized a new, and as a well-experienced
        data scientist, have written numereous lines of code to automatically read out the data. This data mainly came
        from the high-power laser experiments we did to force the fluoresence of our Nitrogen-vacancy.
    </p>
    <p>
        The code is open-source and can be found on our <a href="https://github.com/adamblvck/QuantumUSB-Research">github repository</a>.
    </p>
</>
const physicsYearTwoSemTwo = [
    {
        subject: "Analytical Mechanics",
        credits: 6,
        year: 2,
        grade: 20,
        description: descriptionAnalyticalMechanics
    },
    {
        subject: "Electrodynamics",
        credits: 5,
        year: 2,
        grade: 20,
        description: descriptionElectrodynamics
    },
    {
        subject: "Experimental Techniques",
        credits: 8,
        year: 2,
        grade: 18,
        description: descriptionExperimentalTechniques
    },
    // { 
    //     subject: "TOTAL",
    //     credits: 44,
    //     year: 2,
    //     totalResult: 172
    // },
    // { 
    //     subject: "Weighted Result",
    //     weightedResult: 18.95,
    //     GPA: 5
    // }
];
const physicsYearTwo = [physicsYearTwoSemOne, physicsYearTwoSemTwo];


const descriptionStatisticalPhysics = <>
    <p>
        Studying each individual interacting element in a system is not feasible. Therefore, we greatly simply
        our system by introducing (Boltzmann) Statistics. Moreover, we focussed on different apparatus to study the equilibrium of statistical systems. These
        apparatus are called ensembles. With the use of these ensembles, it is possible to get physical content
        out of our systems in the form of averages (the energy, entropy, temperature, ...).
    </p>
    <p>
        Using these ensembles, we studied the blackbody problem, and did the derivation that Planck did in 1900, giving the birth of
        Quantum Mechanics! Additionally, we looked at the ideal gases and how this is connected to fermions, bosons and bose-einstein condensation.
    </p>
    <p>
        This course was certainly a big highlight in my final year: I finally started to get answer on the big things I'd read at high school.
        It took 2 full years to get to this point of understanding, but once you get what great minds did years ago, it is a big relief and a fantastic feeling!
    </p>
</>

const descriptionPhilosophyOfScience = <>
    <p>
        This course was characterized by the paper we needed to write. I had chosen for attempting to
        answer the question 'Is Science discovered or invented?'. It took me 40 pages to construct a full
        framework and mathematical theory, and the concept of linearizing the scientific fields, I concluded that
        the experimental fields (Chemistry, Physics, Biology) are not fully invented. For the theoretical fields
        (e.d. Mathematics and Computer Science), the framework could not provide the same conclusion.
    </p>

</>


const descriptionSolidStatePhysics = <>
    <p>
        We started with looking at the problem that comes with modeling the heat capacity of materials, using the theories of
        Debye and Einstein. After this we continued with modeling the movements of electrons in metals using the
        Drude theory; oversimplifying the electrons as free particles. This model was further deepened by Sommerfeld, by
        introducing the fact that electrons are fermions, and not bosonic as Drude implicitly assumed.
    </p>
    <p>
        After discussing Sommerfeld's model, we continued with describing the different type of
        bonds and focussed on the Linear Combination of Atomic Orbitals (LCAO), together with the important Hopping Term.
    </p>
    <p>
        The second part of the course we learned about different crystal structures, to eventually end with semi-conductors. This last
        chapters also resolved my gaps in material science and strengthened me in my knowledge in how transistors work: an essential part
        of almost every electronic device!
    </p>
</>


const descriptionQM3 = <>
    <p>
        In this final course of Quantum Mechanics, we concluded with more real-world applications, in which we cannot solve
        everything analytically. We studied how time-(in)depent perturbation changed the energy in systems. More specifically,
        how these disruptions can lead to the description of the fine-finestructure of Hydrogen.
    </p>
    <p>
        Another very useful method was the variational principle in which we guess a wave function to bound the energies
        of a system.
    </p>
    <p>
        We had concluded the course with Quantum mechanical scattering theory. This includes the
        differential cross-section connected to the probability of scattering, and the Born approximation which gives us a
        way of determining the scattering of particles.
    </p>
</>



const descriptionComputerNetworks = <>
    <p>
        I loved this course! Everyday, we use our electronic devices, and I always wondered
        how on earth these communicate. Well, this was nicely answered in this course. We fully discussed
        the OSI-TCP/IP protocol stack. Additionally, we had several labs coding these concepts in Python
        (HTTP servers, Proxies, etc.) and the packet analyzer Wireshark. The development of my very own super Synchronized Gaming (application) Protocol (SGP),
        converging to only 1 byte overhead (!), was motivated by this course.
    </p>


</>
const physicsYearThreeSemOne = [
    {
        subject: "Statistical Physics",
        credits: 5,
        year: 3,
        grade: 17,
        description: descriptionStatisticalPhysics
    },
    {
        subject: "Philosophy of Science",
        credits: 3,
        year: 3,
        grade: 18,
        description: descriptionPhilosophyOfScience
    },
    {
        subject: "Solid State Physics",
        credits: 6,
        year: 3,
        grade: 20,
        description: descriptionSolidStatePhysics
    },
    {
        subject: "Quantum Mechanics 3",
        credits: 4,
        year: 3,
        grade: 20,
        description: descriptionQM3
    },
    {
        subject: "Computer Networks",
        credits: 7,
        year: 3,
        grade: 18,
        description: descriptionComputerNetworks
    }
]


const descriptionNucleiAndParticles = <>
    <p>
        We divided this course in two fundamental fields in Phyics: nuclei and particles.
    </p>
    <p>
        We started with nuclei. We considered the different nuclear properties, and focussed on the nuclear models
        (Fermi Gas model, Shell model, droplet model). We ended this part with radiation.
    </p>
    <p>
        The second part was about particles. I loved this section! When I was little, I heard a lot
        about Feynmann calculus, and thougt I will never really understand how it works. Well, with this course I got
        (some) grasp on it! We drew ourselves several Feyman diagrams, to eventually calculate the lifetime of certain
        processes (scattering/decay).
    </p>
    <p>
        As a bonus, we even throughoughly discussed, and 'derived' the Dirac equation from the Klein-Gordon equations. We didn't stop there!
        We continued by solving the equation for a wave-like solution, and found anti matter, by considering bilinear forms.
    </p>
</>

const descriptionGravity = <>
    <p>
        After more than 20 elemntary courses in Physics, I finally got the chance to learn about thé
        theory of Einstein: General Relativity!
    </p>
    <p>
        In Special Relativity, we only considered flat, Minkowskian spacetime. In GR, we went over to a more general approach
        to consider curved spacetime, which is encoded in our metric of our spacetime. One possible metric is given by the
        Schwarzschild metric. We used this metric to calculated the curvature of light in the presence of a massive object!
    </p>
    <p>
        This course was no easy at all, because it was very quantitative. We introduced heavy mathematical constructs such as
        the covariant derivate (generalized derivate in an arbitrary curved spacetime). As a consequence of the curved spacetime, we
        can't just compare two (four)vectors, which forced us to introduce parallel transport. The initially most hardest part of this
        course was certainly learning to play around with the Einstein convention, in which we omit summation symbols.
    </p>
    <p>
        You might think that dropping the summation sign won't make it so hard. Believe me, it comes with it is rules (upper- and lowerindices), and
        I even got to a point that my repertoire of Greek letters for the indices naming was depleted.
    </p>
</>

const descriptionPhysicsP = <>
    <p>
        This was a more inter-disciplinary course in which we focussed on 5 generic skills:
    </p>
    <ul>
        <li>selfdirected learning and action</li>
        <il>multidisciplinary collaboration</il>
        <li>communication and presentation</li>
        <li>stakeholder awareness</li>
        <li>ethical thinking and acting</li>
    </ul>
    <p>
        This was done by reading several papers on behalf of these subjects, as well as going to different research theory with our bus trip. This meant going to Tarbes in
        South France to visit ITER. Of course, the physicists we are, we equally visited CERN in Switzerland!
    </p>

</>
const physicsYearThreeSemTwo = [
    {
        subject: "Nuclei and Particles",
        credits: 6,
        year: 3,
        grade: 19,
        description: descriptionNucleiAndParticles
    },
    {
        subject: "General Relativity",
        credits: 5,
        year: 3,
        grade: 19,
        description: descriptionGravity
    },
    // {
    //     subject: "Bachelor Thesis",
    //     credits: 10,
    //     year: 3,
    //     grade: 19,
    //     description: "Description for Bachelor Thesis"
    // },
    {
        subject: "Physics+",
        credits: 3,
        year: 3,
        grade: 15,
        description: descriptionPhysicsP
    },
    // { 
    //     subject: "TOTAL",
    //     credits: 49,
    //     year: 3,
    //     totalResult: 165
    // },
    // { 
    //     subject: "Weighted Result",
    //     weightedResult: 18.55,
    //     GPA: 5
    // }
];

const physicsYearThree = [physicsYearThreeSemOne, physicsYearThreeSemTwo];

export { physicsYearOne, physicsYearTwo, physicsYearThree }