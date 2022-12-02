import React from 'react';

const Blog = () => {
    return (
        <div className='px-10 bg-zinc-100'>
            <h1 className='text-3xl font-bold text-center text-sky-900'>What are the different ways to manage a state in a React application?</h1>
            <h3 className='text-xl text-center text-black'>When we talk about state in our applications, it’s important to be clear about what types of state actually matter.

                There are four main types of state you need to properly manage in your React apps:

                1.Local state
                2.Global state
                3.Server state
                4.URL state
                Local (UI) state – Local state is data we manage in one or another component.

                Local state is most often managed in React using the useState hook.

                For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.

                Global (UI) state – Global state is data we manage across multiple components.
                Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                Sometimes state we think should be local might become global.

                Server state – Data that comes from an external server that must be integrated with our UI state.

                Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                Fortunately there are tools such as SWR and React Query that make managing server state much easier.

                URL state – Data that exists on our URLs, including the pathname and query parameters.

                URL state is often missing as a category of state, but it is an important one.
                In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

                There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.

            </h3>
            <h1 className='text-3xl font-bold text-center text-sky-900'>How does prototypical inheritance work?</h1>
            <h3 className='text-xl text-center'>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.

                Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).

                JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.

                Today, we want to get you acquainted with prototypal inheritance in JavaScript to get you up to date with the ES6 capabilities.</h3>
            <h1 className='text-3xl font-bold text-center text-sky-900'>What is a unit test? Why should we write unit tests?</h1>
            <h3 className='text-xl text-center'>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.

                Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.

                Unit testing is a component of test-driven development (TDD), a pragmatic methodology that takes a meticulous approach to building a product by means of continual testing and revision. This testing method is also the first level of software testing, which is performed before other testing methods such as integration testing. Unit tests are typically isolated to ensure a unit does not rely on any external code or functions. Testing can be done manually but is often automated.
                How unit tests work

                A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.

                Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and predictable code base.

                Each test case is tested independently in an isolated environment, as to ensure a lack of dependencies in the code. The software developer should code criteria to verify each test case, and a testing framework can be used to report any failed tests. Developers should not make a test for every line of code, as this may take up too much time. Developers should then create tests focusing on code which could affect the behavior of the software being developed.

                Unit testing involves only those characteristics that are vital to the performance of the unit under test. This encourages developers to modify the source code without immediate concerns about how such changes might affect the functioning of other units or the program as a whole. Once all of the units in a program have been found to be working in the most efficient and error-free manner possible, larger components of the program can be evaluated by means of integration testing. Unit tests should be performed frequently, and can be done manually or can be automated.
            </h3>
            <h1 className='text-3xl font-bold text-center text-sky-900'> React vs. Angular vs. Vue?</h1>
            <h3 className='text-xl text-center'>There are three frameworks for building web applications that every frontend developer has heard about: React, Vue.js, and Angular.

                React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.

                They can be used almost interchangeably to build front-end applications, but they’re not 100 percent the same, so it makes sense to compare them and understand their differences.

                Each framework is component-based and allows the rapid creation of UI features.

                However, they all have a different structure and architecture — so first, we’ll look into their architectural differences to understand the philosophy behind them.</h3>
        </div>
    );
};

export default Blog;