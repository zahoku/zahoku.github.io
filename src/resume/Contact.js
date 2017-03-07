/**
 * Created by Tony Bang on 2017-02-16.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';

class Contact extends Component {
    constructor() {
        super(...arguments);
        this.state = {};
    }

    componentWillMount() {

    }

    componentDidMount() {
        document.querySelector('.root').style.background = '#abe165';
        Velocity.animate(document.querySelector('article.contact'),
            {scaleX: [1, 0]},
            {
                easing: 'easeInOutCirc',
                duration: 350,
                complete: function (element) {
                    let transitionTimeOutID = setTimeout(function () {
                        if (!document.querySelector('article > .container > h1')) {
                            return false;
                        }
                        document.querySelector('article > .container > h1').style.margin = '2em auto .5em';
                        document.querySelector('article > .container > h1').style.width = '11.2em';
                        //base info
                        document.querySelector('article.contact .email').style.display = 'block';
                        Velocity.animate(document.querySelector('article.contact .email'),
                            {bottom: [0, '-1em']},
                            {
                                easing: 'spring',
                                duration: 500,
                                complete: function (element) {
                                    if (!document.querySelector('article.contact > .container > h1 > .btnBack')) {
                                        return false;
                                    }
                                    document.querySelector('article.contact > .container > h1 > .btnBack').style.display = 'block';
                                    Velocity.animate(document.querySelector('article.contact > .container > h1 > .btnBack'),
                                        {left: [0, '-1em']},
                                        {
                                            easing: 'spring',
                                            duration: 300,
                                            complete: function (element) {

                                            }
                                        }
                                    );
                                }
                            }
                        );
                    }, 500);
                }
            }
        );
    }

    render() {
        return (
            <article className="contact">
                <div className="container">
                    <h1>Contact <Link to="/" className="btnBack">←</Link></h1>
                    <div className="inner">
                        <div className="email">
                            <a href="mailto:zahoku@gmail.com">zahoku@gmail.com</a>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}

export default Contact ;