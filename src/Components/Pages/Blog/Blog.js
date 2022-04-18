import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container mt-5'>
            <div className='answer'>
                <p className='text-start fw-bold'>Question:Difference between authorization and authentication</p>
                <p>Answer:In authorization process,users authorities are checked for accessing the system resources.In this process users are validated.It takes places after the authentication process.It needs users previleges or security levels.It also determines which permissioin use have on the system.On the other hand, authorization process the identity of the user is checked for providing the access to a system.In this process users or persons are verified.It takes places before authorization.It usually needs user's login details.The whole process determines the person are trying to access the system is user or not.</p>
            </div>
            <div className='answer'>
                <p className='fw-bold'>Questioin:Why are you using firebase? What other options do you have to implement authentication?</p>
                <p>Answer:Firebase can be use as a server less backend for our mobile or web application.It is a service provided by Google .It has many features like database,Cloud functions,Analytics,Cloud Firestore.Firebase can be used for rapid development for production.We don't need to take care of servers,firebase will take care of it.If we don't need backend that much firebase is one of the best options for development.
                    The other optionsfor authentication are biometric like facial recognition,eye scanner,voice recognition,token based authentication,multi-factor authentication ,certificate-based authentication.
                </p>
            </div>
            <div className='answer'>
                <p className='fw-bold'>Question:What other services does firebase provide other than authentication?</p>
                <p>Answer:Except authentication firesbase provides realtime database,data validation,automated backups,cloud firestore,firestore integration,api references,storage,hosting etc.</p>
            </div>
        </div>
    );
};

export default Blog;