/**
 * Created by Tony Bang on 2017-02-16.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';

class Profile extends Component {
    constructor() {
        super(...arguments);
        this.state = {};
    }

    componentWillMount() {

    }

    componentDidMount() {
        document.querySelector('.root').style.background = '#ff2388';
        Velocity.animate(document.querySelector('article.profile'),
            {scaleX: [1, 0]},
            {
                easing: 'easeInOutCirc',
                duration: 500,
                complete: function (element) {
                }
            }
        ).then(function () {
            let transitionTimeOutID = setTimeout(function () {
                if (!document.querySelector('article > .container > h1')) {
                    return false;
                }
                document.querySelector('article > .container > h1').style.margin = '2em auto .5em';
                document.querySelector('article > .container > h1').style.width = '12.5em';
                //base info
                document.querySelector('article.profile .baseInfo').style.display = 'block';
                Velocity.animate(document.querySelector('article.profile .baseInfo'),
                    {bottom: [0, '-1em']},
                    {
                        easing: 'spring',
                        duration: 200,
                        complete: function (element) {
                            //drag source
                            if (!document.querySelector('article.profile .dragSource')) {
                                return false;
                            }
                            document.querySelector('article.profile .dragSource').style.display = 'block';
                            Velocity.animate(document.querySelector('article.profile .dragSource'),
                                {bottom: [0, '-1em']},
                                {
                                    easing: 'spring',
                                    duration: 300,
                                    complete: function (element) {
                                        //drag target
                                        if (!document.querySelector('article.profile .dragTarget')) {
                                            return false;
                                        }
                                        document.querySelector('article.profile .dragTarget').style.display = 'block';
                                        Velocity.animate(document.querySelector('article.profile .dragTarget'),
                                            {bottom: [0, '-1em']},
                                            {
                                                easing: 'spring',
                                                duration: 400,
                                                complete: function (element) {
                                                    if (!document.querySelector('article.profile > .container > h1 > .btnBack')) {
                                                        return false;
                                                    }
                                                    document.querySelector('article.profile > .container > h1 > .btnBack').style.display = 'block';
                                                    Velocity.animate(document.querySelector('article.profile > .container > h1 > .btnBack'),
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
                                    }
                                }
                            );
                        }
                    }
                );
            }, 500);
        });
    }

    render() {
        return (
            <article className="profile">
                <div className="container">
                    <h1>Profile <Link to="/" className="btnBack">←</Link></h1>
                    <div className="inner">
                        <p className="baseInfo">
                            방정현, Front-end Developer, 서울 송파구 방이동, 1978년생
                        </p>
                        <div className="dragSource">
                            <div className="frontendDeveloper">
                                <span>Front-end<br/>Developer</span>
                            </div>
                            <div className="flasher">
                                <span>Flasher</span>
                            </div>
                            <div className="designer">
                                <span>Designer</span>
                            </div>
                        </div>

                        <section className="dragTarget">
                            <ul className="frontendDeveloper">
                                <li>SPA 형태의 웹앱 개발</li>
                                <li>REST API를 연동한 웹 클라이언트 개발</li>
                            </ul>
                            <ul className="designer">
                                <li>디자인, 기획 파트와 원활한 커뮤니케이션</li>
                                <li>Tone &amp; Manner를 지키는 UI 확장</li>
                            </ul>
                            <ul className="flasher">
                                <li>비주얼 및 인터렉션에 따른 디테일한 모션</li>
                                <li>Action Script 3.0</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </article>
        );
    }
}

export default Profile;