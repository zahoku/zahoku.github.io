/**
 * Created by Tony Bang on 2017-02-16.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';

class Experience extends Component {
    constructor() {
        super(...arguments);
        this.state = {};
    }

    componentWillMount() {

    }

    componentDidMount() {
        document.querySelector('.root').style.background = '#2596d5';
        Velocity.animate(document.querySelector('article.experience'),
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
                        document.querySelector('article.experience table:nth-child(1)').style.display = 'block';
                        Velocity.animate(document.querySelector('article.experience table:nth-child(1)'),
                            {bottom: [0, '-1em'], duration: 250},
                            {
                                easing: 'spring',
                                duration: 200,
                                complete: function (element) {
                                    if (!document.querySelector('article.experience table:nth-child(2)')) {
                                        return false;
                                    }
                                    document.querySelector('article.experience table:nth-child(2)').style.display = 'block';
                                    Velocity.animate(document.querySelector('article.experience table:nth-child(2)'),
                                        {bottom: [0, '-1em']},
                                        {
                                            easing: 'spring',
                                            duration: 300,
                                            complete: function (element) {
                                                if (!document.querySelector('article.experience table:nth-child(3)')) {
                                                    return false;
                                                }
                                                document.querySelector('article.experience table:nth-child(3)').style.display = 'block';
                                                Velocity.animate(document.querySelector('article.experience table:nth-child(3)'),
                                                    {bottom: [0, '-1em']},
                                                    {
                                                        easing: 'spring',
                                                        duration: 400,
                                                        complete: function (element) {
                                                            if (!document.querySelector('article.experience table:nth-child(4)')) {
                                                                return false;
                                                            }
                                                            document.querySelector('article.experience table:nth-child(4)').style.display = 'block';
                                                            Velocity.animate(document.querySelector('article.experience table:nth-child(4)'),
                                                                {bottom: [0, '-1em']},
                                                                {
                                                                    easing: 'spring',
                                                                    duration: 500,
                                                                    complete: function (element) {
                                                                        if (!document.querySelector('article.experience > .container > h1 > .btnBack')) {
                                                                            return false;
                                                                        }
                                                                        document.querySelector('article.experience > .container > h1 > .btnBack').style.display = 'block';
                                                                        Velocity.animate(document.querySelector('article.experience > .container > h1 > .btnBack'),
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
            <article className="experience">
                <div className="container">
                    <h1>Experience <Link to="/" className="btnBack">←</Link></h1>
                    <div className="inner">
                        <table>
                            <colgroup>
                                <col />
                                <col width="45%"/>
                            </colgroup>
                            <thead>
                            <tr>
                                <th colSpan="2">슈프리마<span> - Access Control 관련 사업체</span></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="period">2014년 08월 ~ 2017년 02월</td>
                                <td className="career">Front-end</td>
                            </tr>
                            <tr>
                                <td colSpan="2" className="detail">
                                    <span className="title">BiosStar2라는 Access Control System의 UI 개발</span>
                                    <ul>
                                        <li>Angular1을 이용한 SPA 형태의 웹앱</li>
                                        <li>Protractor를 이용한 E2E Test Case 작성</li>
                                        <li>Chartjs를 이용한 Dashboard 구현</li>
                                        <li>버전업시 프로토타이핑 수행</li>
                                    </ul>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <table>
                            <colgroup>
                                <col />
                                <col width="40%"/>
                            </colgroup>
                            <thead>
                            <tr>
                                <th colSpan="2">엔픽모바일<span> - 모바일 게임개발사</span></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="period">2013년 04월 ~ 2014년 05월</td>
                                <td className="career">Front-end</td>
                            </tr>
                            <tr>
                                <td colSpan="2" className="detail">
                                    <span className="title">Empire of Chaos(하이브리드앱 형태) TCG 게임 UI 개발</span>
                                    <ul>
                                        <li>Javascript Native OOP 구현</li>
                                        <li>안드로이드 버전별 웹뷰 크로스브라우징</li>
                                        <li>이펙트 연출 및 구현</li>
                                        <li>네이버 밴드 API 연동, 친구초대 및 선물하기</li>
                                    </ul>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <table>
                            <colgroup>
                                <col />
                                <col width="40%"/>
                            </colgroup>
                            <thead>
                            <tr>
                                <th colSpan="2">넷웍스<span> - 웹에이전시</span></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="period">2010년 02월 ~ 2011년 08월</td>
                                <td className="career">Flasher</td>
                            </tr>
                            <tr>
                                <td colSpan="2" className="detail">
                                    <ul>
                                        <li>2011년 데상트 시즌별 온라인 카탈로그</li>
                                        <li>환경기술원 3D ECO EXPO</li>
                                        <li>쇼핑몰 Front-end 업무 수행</li>
                                    </ul>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <table>
                            <colgroup>
                                <col />
                                <col width="40%"/>
                            </colgroup>
                            <thead>
                            <tr>
                                <th colSpan="2">Flasher, Designer</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="period">2001년 02월 ~ 2010년 02월</td>
                                <td className="career">Flasher, Designer</td>
                            </tr>
                            <tr>
                                <td colSpan="2" className="detail">
                                    <ul>
                                        <li>웹에이전시, SI업체 근무 및 프리랜서</li>
                                    </ul>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </article>
        );
    }
}

export default Experience ;