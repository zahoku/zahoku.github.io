import React, {Component} from 'react';
import update from 'react-addons-update';
import throttle from 'react-throttle-render';
import 'whatwg-fetch';
// import 'babel-polyfill';
import Velocity from 'velocity-animate';
import {Link} from 'react-router';

class ResumeContainer extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            selected: []
        }
        this.updateMenu = throttle(this.updateMenu.bind(this));
        this.navigation = [
            {
                id: 'profile',
                name: 'Profile'
            },
            {
                id: 'experience',
                name: 'Experience'
            },
            {
                id: 'contact',
                name: 'Contact'
            }
        ];
        this.introClickable = false;
    }

    componentWillReceiveProps(nextProps) {
        let routeChanged = nextProps.location.pathname !== this.props.location.pathname;
        if (routeChanged && nextProps.location.pathname === '/') {
            this.initIntro();
        }
    }

    componentWillMount() {
        this.setState({
            selected: [
                {
                    id: 'profile',
                    name: 'Profile'
                },
                {
                    id: 'experience',
                    name: 'Experience'
                },
                {
                    id: 'contact',
                    name: 'Contact'
                }
            ]
        })
    }

    componentDidMount() {
        this.initIntro(true);
    }

    initIntro(isLogoAnimate) {
        let intro = this;
        let logoElement = document.querySelector('h1.logo');
        let logoStartY = logoElement.offsetHeight;
        let openGNB = function () {
            Velocity.animate(document.querySelector('.gnb > ul > li:nth-child(1)'),
                {scaleX: [1, 0], duration: 350},
                {easing: 'easeInOutCirc'}
            );
            Velocity.animate(document.querySelector('.gnb > ul > li:nth-child(2)'),
                {scaleX: [1, 0], duration: 350},
                {easing: 'easeInOutCirc', delay: 200}
            );
            Velocity.animate(document.querySelector('.gnb > ul > li:nth-child(3)'),
                {scaleX: [1, 0], duration: 350},
                {
                    easing: 'easeInOutCirc', delay: 400,
                    complete: function () {
                        intro.onCompleteAnimation();
                    }
                }
            );
        };
        this.introClickable = false;
        document.querySelector('.gnb > ul > li:nth-child(1)').style.transform = 'scaleX(0)';
        document.querySelector('.gnb > ul > li:nth-child(2)').style.transform = 'scaleX(0)';
        document.querySelector('.gnb > ul > li:nth-child(3)').style.transform = 'scaleX(0)';

        if (isLogoAnimate) {
            logoElement.style.top = '-' + logoStartY + 'px';
            Velocity.animate(logoElement,
                {top: 0, duration: 1000},
                {
                    easing: 'spring',
                    complete: function () {
                        openGNB();
                    }
                }
            );
        } else {
            openGNB();
        }
    }

    updateMenu() {
        console.log(this.selected);
    }

    onCompleteAnimation() {
        this.introClickable = true;
    }

    viewMore(id) {
        if (this.introClickable) {
            this.introClickable = false;
            switch (id) {
                case this.navigation[0].id:
                    // this.initProfile();
                    break;
            }
        }
    }

    render() {
        return (
            <div className="container">
                <h1 className="logo"><Link to="/">ZAHOKU <span>- Tony's Resume</span></Link></h1>
                <article className="intro">
                    <div className="gnb">
                        <ul>
                            {
                                this.navigation.map((object) => (
                                    <li key={object.id} id={object.id} className={object.id}
                                        onClick={this.viewMore.bind(this, object.id)}>
                                        <Link to={'/' + object.id} className="label"><span>{object.name}</span></Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </article>
                {this.props.children}
            </div>
        );
    }
}

export default ResumeContainer;
