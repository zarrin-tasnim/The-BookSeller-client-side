import React from 'react';
import useTitle from './../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs');
    return (
        <div>
            <div className="max-w-screen-xl mx-auto py-16 lg:py-28">
                <div className="title text-center">
                
                    <h1 className="text_2xl md: text-3xl lg:text-6xl font-bold  pb-24">
                        Our Blogs
                    </h1>
                </div>
                <div className="blog-area grid grid-cols-1 lg:grid-cols-1 gap-10">
                    <div className="card w-full bg-secondary-color shadow-xl hover:shadow-2xl">
                        <div className="card-body">
                            <h2 className="card-title theme-color text-center text-lg lg:text-3xl">What are the different ways to manage a state in a React application?</h2>
                            <p className="">There are four main types of state you need to properly manage in your React apps:

                                Local state
                                Global state
                                Server state
                                URL state

                                Let's cover each of these in detail:

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

                                There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</p>
                        </div>
                    </div>
                    <div className="card w-full bg-secondary-color shadow-xl hover:shadow-2xl">
                        <div className="card-body">
                            <h2 className="card-title theme-color text-center text-lg lg:text-3xl">How does prototypical inheritance work?</h2>
                            <p className="">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                        </div>
                    </div>
                    <div className="card w-full bg-secondary-color shadow-xl hover:shadow-2xl">
                        <div className="card-body">
                            <h2 className="card-title theme-color text-center text-lg lg:text-3xl">What is a unit test? Why should we write unit tests?</h2>
                            <p className=""> Definition
                                unit testing

                                TechTarget Contributor
                                By

                                TechTarget Contributor

                                Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.<br />
                                The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                            </p>
                        </div>
                    </div>
                    <div className="card w-full bg-secondary-color shadow-xl hover:shadow-2xl">
                        <div className="card-body">
                            <h2 className="card-title theme-color text-center text-lg lg:text-3xl">React vs. Angular vs. Vue?</h2>
                            <p className=""> Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;