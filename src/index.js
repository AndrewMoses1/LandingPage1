import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// this variable is used once when the page loads to set the state then is no longer relevant and will = 1, which means it does nothing after that point until the page refreshes
var startAdjust = 0;

// these variables control the state of the page throughout the user's entire session (used for scrolling event listeners)
var redExpandAndContract = 1;
var redFixedAndRelative = 1;
var fadeOutAndIn = 1;
var blueRelativeAndFixed = 1;
var blueContractAndExpand = 1;

// these variables control the state of the page throughout the user's entire session (used for resizing event listeners) (more specifically these variables are used to ensure certain resizing blocks of code are only executed once and not indefinitely when the resize happens between the 'Xs' and 'Md' breakpoints)
var startResizeXsToMd = 1;
var startResizeMdToXs = 1;
var startResizeTo950 = 1;
var startResizeFrom950 = 1;

// these variables are named to represent the elements they correspond to, the phrases 'Xs' or 'Md' etc. indicate that that element first appears starting at that breakpoint (this entire website starts from 'Xs' and moves towards '4Xl') if they do not have an 'Xs' or 'Md' etc. in their name then they apply to all or most breakpoints and screen sizes
    // as far as organization and variable naming is concerned, I try to reserve the word 'container' for elements that correspond to a major sectional element within the html that actually has a hyphenated class name assigned to it, and then use the word 'div' to represent a sub-section of one of those major elements
function homeScroll() {
    var browseText = document.querySelector('.browse-text');
    var browseTextRectBottom = browseText.getBoundingClientRect().bottom;
    var projectsContainerXs = document.querySelector('.projects-container-xs');
    var projectsContainerXsRectTop = projectsContainerXs.getBoundingClientRect().top;
    var projectsContainerXsRectBottom = projectsContainerXs.getBoundingClientRect().bottom;
    var projectsContainerMd = document.querySelector('.projects-container-md');
    var projectsContainerMdRectTop = projectsContainerMd.getBoundingClientRect().top;
    var projectsContainerMdRectBottom = projectsContainerMd.getBoundingClientRect().bottom;
    var redPhoneRelativeXs = document.querySelector('.projects-container-xs > div:first-child > img:nth-child(2)');
    var redPhoneRelativeMd = document.querySelector('.projects-container-md > div:first-child > img:nth-child(2)');
    var redPhoneRelativeMdRectTop = redPhoneRelativeMd.getBoundingClientRect().top;
    var redTabletRelativeSm = document.querySelector('.projects-container-xs > div:first-child > img:nth-child(3)');
    var redTabletRelativeMd = document.querySelector('.projects-container-md > div:first-child > img:nth-child(3)');
    var redTabletRelativeMdRectTop = redTabletRelativeMd.getBoundingClientRect().top;
    var redSoftwareButtonXs = document.querySelector('.projects-container-xs > div:nth-child(2) > a:first-child > button:first-child');
    var redSoftwareButtonXsRectBottom = redSoftwareButtonXs.getBoundingClientRect().bottom;
    var redSoftwareButtonMd = document.querySelector('.projects-container-md > div:first-child > div:first-child > a:first-child > button:first-child');
    var redSoftwareButtonMdRectBottom = redSoftwareButtonMd.getBoundingClientRect().bottom;
    var redSoftwareDescriptionMd = document.querySelector('.projects-container-md > div:first-child > div:first-child > span:nth-child(3)');
    var redSoftwareDescriptionMdRectBottom = redSoftwareDescriptionMd.getBoundingClientRect().bottom;
    var bluePhoneRelativeXs = document.querySelector('.projects-container-xs > div:nth-child(3) > img:nth-child(2)');
    var bluePhoneRelativeXsRectTop = bluePhoneRelativeXs.getBoundingClientRect().top;
    var bluePhoneRelativeMd = document.querySelector('.projects-container-md > div:nth-child(2) > img:nth-child(2)');
    var bluePhoneRelativeMdRectTop = bluePhoneRelativeMd.getBoundingClientRect().top;
    var blueTabletRelativeSm = document.querySelector('.projects-container-xs > div:nth-child(3) > img:nth-child(3)');
    var blueTabletRelativeSmRectTop = blueTabletRelativeSm.getBoundingClientRect().top;
    var blueTabletRelativeMd = document.querySelector('.projects-container-md > div:nth-child(2) > img:nth-child(3)');
    var blueTabletRelativeMdRectTop = blueTabletRelativeMd.getBoundingClientRect().top;
    var blueSoftwareButtonMd = document.querySelector('.projects-container-md > div:nth-child(2) > div:first-child > a:first-child > button:first-child');
    var blueSoftwareButtonMdRectBottom = blueSoftwareButtonMd.getBoundingClientRect().bottom;
    var redPhoneFixedXs = document.querySelector('.entire-website-container > img:nth-child(5)');
    var redPhoneFixedMd = document.querySelector('.entire-website-container > img:nth-child(10)');
    var bluePhoneFixedXs = document.querySelector('.entire-website-container > img:nth-child(6)');
    var bluePhoneFixedMd = document.querySelector('.entire-website-container > img:nth-child(11)');
    var redTabletFixedSm = document.querySelector('.entire-website-container > img:nth-child(7)');
    var redTabletFixedMd = document.querySelector('.entire-website-container > img:nth-child(12)');
    var blueTabletFixedSm = document.querySelector('.entire-website-container > img:nth-child(8)');
    var blueTabletFixedMd = document.querySelector('.entire-website-container > img:nth-child(13)');
    var aboutTop1SpinnerSmallerMd = document.querySelector('.about-container-md > div:first-child');
    var aboutTop1SpinnerBiggerMd = document.querySelector('.about-container-md > div:nth-child(2)');
    var aboutTop2SpinnerSmallerMd = document.querySelector('.about-container-md > div:nth-child(3)');
    var aboutTop2SpinnerBiggerMd = document.querySelector('.about-container-md > div:nth-child(4)');
    var aboutTop3SpinnerSmallerMd = document.querySelector('.about-container-md > div:nth-child(5)');
    var aboutTop3SpinnerBiggerMd = document.querySelector('.about-container-md > div:nth-child(6)');
    var aboutTop4SpinnerSmallerMd = document.querySelector('.about-container-md > div:nth-child(7)');
    var aboutTop4SpinnerBiggerMd = document.querySelector('.about-container-md > div:nth-child(8)');
    var aboutTop1LineMd = document.querySelector('.about-container-md > div:nth-child(9) > span:first-child');
    var aboutTop2LineMd = document.querySelector('.about-container-md > div:nth-child(10) > span:first-child');
    var aboutTop3LineMd = document.querySelector('.about-container-md > div:nth-child(11) > span:first-child');
    var aboutSidePortraitMd = document.querySelector('.about-container-md > div:nth-child(12) > img:nth-child(2)');
    var aboutSidePortraitMdRectTop = aboutSidePortraitMd.getBoundingClientRect().top;
    var aboutEducationDivMd = document.querySelector('.about-container-md > div:nth-child(12) > div:nth-child(3)');
    var aboutEducationDivMdRectTop = aboutEducationDivMd.getBoundingClientRect().top;
    var aboutEducationDivMdRectBottom = aboutEducationDivMd.getBoundingClientRect().bottom;
    var aboutExperienceDivMd = document.querySelector('.about-container-md > div:nth-child(12) > div:nth-child(4)');
    var aboutExperienceDivMdRectBottom = aboutExperienceDivMd.getBoundingClientRect().bottom;
    var aboutCodeTextMd = document.querySelector('.about-code-text-md');

    if (startAdjust === 0) {     // the following block of code executes only when the page is loading and then no longer is used until the page has refreshed
        if (window.innerHeight >= 950) {
            if (window.innerWidth < 1024) {
                redPhoneFixedMd.style.transition = 'margin-top 0s';
                redPhoneFixedMd.style.marginTop = '32.6vh';
                bluePhoneFixedMd.style.transition = 'margin-top 0s';
                bluePhoneFixedMd.style.marginTop = '32.6vh';
                redTabletFixedMd.style.transition = 'margin-top 0s';
                redTabletFixedMd.style.marginTop = '19vh';
                blueTabletFixedMd.style.transition = 'margin-top 0s';
                blueTabletFixedMd.style.marginTop = '19vh';
            } else if (window.innerWidth >= 1024) { // AND BELOW WHATEVER IS DECIDED LATER AT BIGGER SCREEN
                redPhoneFixedMd.style.transition = 'margin-top 0s';
                redPhoneFixedMd.style.marginTop = '32.7vh';
                bluePhoneFixedMd.style.transition = 'margin-top 0s';
                bluePhoneFixedMd.style.marginTop = '32.7vh';
                redTabletFixedMd.style.transition = 'margin-top 0s';
                redTabletFixedMd.style.marginTop = '19.3vh';
                blueTabletFixedMd.style.transition = 'margin-top 0s';
                blueTabletFixedMd.style.marginTop = '19.3vh';
            }
            startAdjust = 1;
        } else {
            if (window.innerWidth < 1024) {
                redPhoneFixedMd.style.transition = 'margin-top 0s';
                redPhoneFixedMd.style.marginTop = '11vh';
                bluePhoneFixedMd.style.transition = 'margin-top 0s';
                bluePhoneFixedMd.style.marginTop = '11vh';
                redTabletFixedMd.style.transition = 'margin-top 0s';
                redTabletFixedMd.style.marginTop = '6vh';
                blueTabletFixedMd.style.transition = 'margin-top 0s';
                blueTabletFixedMd.style.marginTop = '6vh';
            } else if (window.innerWidth >= 1024) { // AND BELOW WHATEVER IS DECIDED LATER AT BIGGER SCREEN
                redPhoneFixedMd.style.transition = 'margin-top 0s';
                redPhoneFixedMd.style.marginTop = '11vh';
                bluePhoneFixedMd.style.transition = 'margin-top 0s';
                bluePhoneFixedMd.style.marginTop = '11vh';
                redTabletFixedMd.style.transition = 'margin-top 0s';
                redTabletFixedMd.style.marginTop = '6vh';
                blueTabletFixedMd.style.transition = 'margin-top 0s';
                blueTabletFixedMd.style.marginTop = '6vh';
            }
            startAdjust = 1;
        };
    };

    if (browseTextRectBottom * .8 < window.innerHeight) {     // responsiveness for the 'browse-text' element is handled in the html with separate elements at different breakpoints having different display settings of "none" or "flex"
        setTimeout(() => {
            browseText.style.transition = 'transform 1s, opacity 1s';
            browseText.style.transform = 'translateY(0)';
            browseText.style.opacity = 1;
        }, 10);
    };

    if ((aboutExperienceDivMdRectBottom < 1)) {    // this block of code starts the typing animation in the 'about-container-md' element
        aboutCodeTextMd.style.transition = 'display 0s';
        aboutCodeTextMd.style.display = 'flex';
    }





// ONE OF THE MAJOR BREAKING POINTS THAT CONTROLS MUCH OF THE SCROLLING FUNCTIONALITY BELOW SCREEN WIDTH OF 768
    if (window.innerWidth < 768) {
        if (projectsContainerXsRectTop < window.innerHeight / 2 && redExpandAndContract === 1) {    // the code below controls the functionality for the 'projects-container-xs' element
            redExpandAndContract = 2;
            setTimeout(() => {
                projectsContainerXs.style.transition = 'width 1s, background-color 1s, background-image 1s, border-radius 1s';
                projectsContainerXs.style.width = '100%';
                projectsContainerXs.style.backgroundColor = 'rgb(132, 23, 23)';
                projectsContainerXs.style.backgroundImage = 'linear-gradient(to right, transparent 0%, black 100%)';
                projectsContainerXs.style.borderRadius = '0';
            }, 10);
        } else if (projectsContainerXsRectTop >= window.innerHeight / 2 && redExpandAndContract === 2) {
            redExpandAndContract = 1;
            setTimeout(() => {
                projectsContainerXs.style.transition = 'width 1s, background-color 1s, background-image 1s, border-radius 1s';
                projectsContainerXs.style.width = '94.5%';
                projectsContainerXs.style.backgroundColor = 'rgb(0, 0, 0)';
                projectsContainerXs.style.backgroundImage = 'linear-gradient(to right, transparent 0%, black 100%)';
                projectsContainerXs.style.borderRadius = '40px';
            }, 10);
        };
        if (projectsContainerXsRectTop < 1 && redFixedAndRelative === 1) {
            redFixedAndRelative = 2;
            setTimeout(() => {
                redPhoneRelativeXs.style.transition = 'opacity 0s';
                redPhoneRelativeXs.style.opacity = '0';
                redPhoneFixedXs.style.transition = 'opacity 0s';
                redPhoneFixedXs.style.opacity = '1';
                redTabletRelativeSm.style.transition = 'opacity 0s';
                redTabletRelativeSm.style.opacity = '0';
                redTabletFixedSm.style.transition = 'opacity 0s';
                redTabletFixedSm.style.opacity = '1';
            }, 10);
        } else if (projectsContainerXsRectTop >= 1 && redFixedAndRelative === 2) {
            redFixedAndRelative = 1;
            setTimeout(() => {
                redPhoneRelativeXs.style.transition = 'opacity 0s';
                redPhoneRelativeXs.style.opacity = '1';
                redPhoneFixedXs.style.transition = 'opacity 0s';
                redPhoneFixedXs.style.opacity = '0';
                redTabletRelativeSm.style.transition = 'opacity 0s';
                redTabletRelativeSm.style.opacity = '1';
                redTabletFixedSm.style.transition = 'opacity 0s';
                redTabletFixedSm.style.opacity = '0';
            }, 10);
        };
        if (redSoftwareButtonXsRectBottom < 1 && fadeOutAndIn === 1) {
            fadeOutAndIn = 2;
            setTimeout(() => {
                projectsContainerXs.style.transition = 'background-color .5s, background-image .5s';
                projectsContainerXs.style.backgroundColor = 'rgb(23, 23, 132)';
                projectsContainerXs.style.backgroundImage = 'linear-gradient(to right, transparent 0%, black 100%)';
                redPhoneFixedXs.style.transition = 'opacity .5s';
                redPhoneFixedXs.style.opacity = '0';
                bluePhoneFixedXs.style.transition = 'opacity .5s';
                bluePhoneFixedXs.style.opacity = '1';
                redTabletFixedSm.style.transition = 'opacity .5s';
                redTabletFixedSm.style.opacity = '0';
                blueTabletFixedSm.style.transition = 'opacity .5s';
                blueTabletFixedSm.style.opacity = '1';
            }, 10);
        } else if (redSoftwareButtonXsRectBottom >= 1 && fadeOutAndIn === 2) {
            fadeOutAndIn = 1;
            setTimeout(() => {
                projectsContainerXs.style.transition = 'background-color .5s, background-image .5s';
                projectsContainerXs.style.backgroundColor = 'rgb(132, 23, 23)';
                projectsContainerXs.style.backgroundImage = 'linear-gradient(to right, transparent 0%, black 100%)';
                redPhoneFixedXs.style.transition = 'opacity .5s';
                redPhoneFixedXs.style.opacity = '1';
                bluePhoneFixedXs.style.transition = 'opacity .5s';
                bluePhoneFixedXs.style.opacity = '0';
                redTabletFixedSm.style.transition = 'opacity .5s';
                redTabletFixedSm.style.opacity = '1';
                blueTabletFixedSm.style.transition = 'opacity .5s';
                blueTabletFixedSm.style.opacity = '0';
            }, 10);
        };
        if (((bluePhoneRelativeXsRectTop < 50 && bluePhoneRelativeXsRectTop !== 0) || (blueTabletRelativeSmRectTop + 10 < 1 && blueTabletRelativeSmRectTop !== 0)) && blueRelativeAndFixed === 1) {
            blueRelativeAndFixed = 2;
            setTimeout(() => {
                bluePhoneFixedXs.style.transition = 'opacity 0s';
                bluePhoneFixedXs.style.opacity = '0';
                bluePhoneRelativeXs.style.transition = 'opacity 0s';
                bluePhoneRelativeXs.style.opacity = '1';
                blueTabletFixedSm.style.transition = 'opacity 0s';
                blueTabletFixedSm.style.opacity = '0';
                blueTabletRelativeSm.style.transition = 'opacity 0s';
                blueTabletRelativeSm.style.opacity = '1';
            }, 10);
        // } else if ((bluePhoneRelativeXsRectTop >= 50 || blueTabletRelativeSmRectTop + 10 >= 1 && blueTabletRelativeSmRectTop !== 0) && blueRelativeAndFixed === 2) {
        } else if (((bluePhoneRelativeXsRectTop >= 50 && bluePhoneRelativeXsRectTop !== 0) || (blueTabletRelativeSmRectTop + 10 >= 1 && blueTabletRelativeSmRectTop !== 0)) && blueRelativeAndFixed === 2) {
            blueRelativeAndFixed = 1;
            setTimeout(() => {
                bluePhoneFixedXs.style.transition = 'opacity 0s';
                bluePhoneFixedXs.style.opacity = '1';
                bluePhoneRelativeXs.style.transition = 'opacity 0s';
                bluePhoneRelativeXs.style.opacity = '0';
                blueTabletFixedSm.style.transition = 'opacity 0s';
                blueTabletFixedSm.style.opacity = '1';
                blueTabletRelativeSm.style.transition = 'opacity 0s';
                blueTabletRelativeSm.style.opacity = '0';
            }, 10);
        };
        if (projectsContainerXsRectBottom < window.innerHeight / 2 && blueContractAndExpand === 1) {
            blueContractAndExpand = 2;
            setTimeout(() => {
                projectsContainerXs.style.transition = 'width 1s, background-color 1s, background-image 1s, border-radius 1s';
                projectsContainerXs.style.width = '94.5%';
                projectsContainerXs.style.backgroundColor = 'rgb(0, 0, 0)';
                projectsContainerXs.style.backgroundImage = 'linear-gradient(to right, transparent 0%, black 100%)';
                projectsContainerXs.style.borderRadius = '40px';
            }, 10);
        } else if (projectsContainerXsRectBottom >= window.innerHeight / 2 && blueContractAndExpand === 2) {
            blueContractAndExpand = 1;
            setTimeout(() => {
                projectsContainerXs.style.transition = 'width 1s, background-color 1s, background-image 1s, border-radius 1s';
                projectsContainerXs.style.width = '100%';
                projectsContainerXs.style.backgroundColor = 'rgb(23, 23, 132)';
                projectsContainerXs.style.backgroundImage = 'linear-gradient(to right, transparent 0%, black 100%)';
                projectsContainerXs.style.borderRadius = '0';
            }, 10);
        };

        if (window.scrollY === 0) {        // the following block of code fixes a glitch that occurs when the user scrolls really fast to the top or bottom of the page
            setTimeout(() => {
                redPhoneFixedXs.style.transition = 'opacity 0s';
                redPhoneFixedXs.style.opacity = '0';
                bluePhoneFixedXs.style.transition = 'opacity 0s';
                bluePhoneFixedXs.style.opacity = '0';
                redTabletFixedSm.style.transition = 'opacity 0s';
                redTabletFixedSm.style.opacity = '0';
                blueTabletFixedSm.style.transition = 'opacity 0s';
                blueTabletFixedSm.style.opacity = '0';
            }, 20);
        };
        if (window.scrollY === document.body.scrollHeight) {
            setTimeout(() => {
                redPhoneFixedXs.style.transition = 'opacity 0s';
                redPhoneFixedXs.style.opacity = '0';
                bluePhoneFixedXs.style.transition = 'opacity 0s';
                bluePhoneFixedXs.style.opacity = '0';
                redTabletFixedSm.style.transition = 'opacity 0s';
                redTabletFixedSm.style.opacity = '0';
                blueTabletFixedSm.style.transition = 'opacity 0s';
                blueTabletFixedSm.style.opacity = '0';
            }, 20);
        };
    };







// ONE OF THE MAJOR BREAKING POINTS THAT CONTROLS MUCH OF THE SCROLLING FUNCTIONALITY
    if (window.innerWidth >= 768) {
        if (projectsContainerMdRectTop < window.innerHeight / 2 && redExpandAndContract === 1) {     // the code below controls the functionality for the 'projects-container-md' element
            redExpandAndContract = 2;
            setTimeout(() => {
                projectsContainerMd.style.transition = 'width 1s, background-color 1s, background-image 1s, border-radius 1s';
                projectsContainerMd.style.width = '100%';
                projectsContainerMd.style.backgroundColor = 'rgb(132, 23, 23)';
                projectsContainerMd.style.backgroundImage = 'linear-gradient(to right, transparent 0%, black 100%)';
                projectsContainerMd.style.borderRadius = '0';
            }, 10);
        } else if (projectsContainerMdRectTop >= window.innerHeight / 2 && redExpandAndContract === 2) {
            redExpandAndContract = 1;
            setTimeout(() => {
                projectsContainerMd.style.transition = 'width 1s, background-color 1s, background-image 1s, border-radius 1s';
                projectsContainerMd.style.width = '94.5%';
                projectsContainerMd.style.backgroundColor = 'rgb(0, 0, 0)';
                projectsContainerMd.style.backgroundImage = 'linear-gradient(to right, transparent 0%, black 100%)';
                projectsContainerMd.style.borderRadius = '40px';
            }, 10);
        };












                if (window.innerHeight < 950) {
                        if ((((redSoftwareButtonMdRectBottom < window.innerHeight / 5) && (redPhoneRelativeMdRectTop !== 0)) || ((redSoftwareButtonMdRectBottom < 250) && (redTabletRelativeMdRectTop !== 0))) && (redFixedAndRelative === 1)) {
                            redFixedAndRelative = 2;
                            setTimeout(() => {
                                redPhoneRelativeMd.style.transition = 'opacity 0s';
                                redPhoneRelativeMd.style.opacity = '0';
                                redPhoneFixedMd.style.transition = 'opacity 0s';
                                redPhoneFixedMd.style.opacity = '1';
                                redTabletRelativeSm.style.transition = 'opacity 0s';
                                redTabletRelativeSm.style.opacity = '0';
                                redTabletFixedSm.style.transition = 'opacity 0s';
                                redTabletFixedSm.style.opacity = '1';
                                redTabletRelativeMd.style.transition = 'opacity 0s';
                                redTabletRelativeMd.style.opacity = '0';
                                redTabletFixedMd.style.transition = 'opacity 0s';
                                redTabletFixedMd.style.opacity = '1';
                                bluePhoneFixedMd.style.transition = 'opacity .5s';
                                bluePhoneFixedMd.style.opacity = '0';
                                blueTabletFixedSm.style.transition = 'opacity .5s';
                                blueTabletFixedSm.style.opacity = '0';
                                blueTabletFixedMd.style.transition = 'opacity .5s';
                                blueTabletFixedMd.style.opacity = '0';
                            }, 10);
                        } else if ((((redSoftwareButtonMdRectBottom  >= window.innerHeight / 5) && (redPhoneRelativeMdRectTop !== 0)) || ((redSoftwareButtonMdRectBottom >= 250) && (redTabletRelativeMdRectTop !== 0))) && (redFixedAndRelative === 2)) {
                                redFixedAndRelative = 1;
                                setTimeout(() => {
                                    redPhoneRelativeMd.style.transition = 'opacity 0s';
                                    redPhoneRelativeMd.style.opacity = '1';
                                    redPhoneFixedMd.style.transition = 'opacity 0s';
                                    redPhoneFixedMd.style.opacity = '0';
                                    redTabletRelativeSm.style.transition = 'opacity 0s';
                                    redTabletRelativeSm.style.opacity = '1';
                                    redTabletFixedSm.style.transition = 'opacity 0s';
                                    redTabletFixedSm.style.opacity = '0';
                                    redTabletRelativeMd.style.transition = 'opacity 0s';
                                    redTabletRelativeMd.style.opacity = '1';
                                    redTabletFixedMd.style.transition = 'opacity 0s';
                                    redTabletFixedMd.style.opacity = '0';
                                    bluePhoneFixedMd.style.transition = 'opacity .5s';
                                    bluePhoneFixedMd.style.opacity = '0';
                                    blueTabletFixedSm.style.transition = 'opacity .5s';
                                    blueTabletFixedSm.style.opacity = '0';
                                    blueTabletFixedMd.style.transition = 'opacity .5s';
                                    blueTabletFixedMd.style.opacity = '0';
                                }, 10);
                        };
                } else if (window.innerHeight < 1075 && window.innerHeight >= 950) {
                        if ((((projectsContainerMdRectTop < 1) && (redPhoneRelativeMdRectTop !== 0)) || ((projectsContainerMdRectTop < 1) && (redTabletRelativeMdRectTop !== 0))) && (redFixedAndRelative === 1)) {
                            redFixedAndRelative = 2;
                            setTimeout(() => {
                                redPhoneRelativeMd.style.transition = 'opacity 0s';
                                redPhoneRelativeMd.style.opacity = '0';
                                redPhoneFixedMd.style.transition = 'opacity 0s';
                                redPhoneFixedMd.style.opacity = '1';
                                redTabletRelativeSm.style.transition = 'opacity 0s';
                                redTabletRelativeSm.style.opacity = '0';
                                redTabletFixedSm.style.transition = 'opacity 0s';
                                redTabletFixedSm.style.opacity = '1';
                                redTabletRelativeMd.style.transition = 'opacity 0s';
                                redTabletRelativeMd.style.opacity = '0';
                                redTabletFixedMd.style.transition = 'opacity 0s';
                                redTabletFixedMd.style.opacity = '1';
                                bluePhoneFixedMd.style.transition = 'opacity .5s';
                                bluePhoneFixedMd.style.opacity = '0';
                                blueTabletFixedSm.style.transition = 'opacity .5s';
                                blueTabletFixedSm.style.opacity = '0';
                                blueTabletFixedMd.style.transition = 'opacity .5s';
                                blueTabletFixedMd.style.opacity = '0';
                            }, 10);
                        } else if ((((projectsContainerMdRectTop  >= 1) && (redPhoneRelativeMdRectTop !== 0)) || ((projectsContainerMdRectTop >= 1) && (redTabletRelativeMdRectTop !== 0))) && (redFixedAndRelative === 2)) {
                                redFixedAndRelative = 1;
                                setTimeout(() => {
                                    redPhoneRelativeMd.style.transition = 'opacity 0s';
                                    redPhoneRelativeMd.style.opacity = '1';
                                    redPhoneFixedMd.style.transition = 'opacity 0s';
                                    redPhoneFixedMd.style.opacity = '0';
                                    redTabletRelativeSm.style.transition = 'opacity 0s';
                                    redTabletRelativeSm.style.opacity = '1';
                                    redTabletFixedSm.style.transition = 'opacity 0s';
                                    redTabletFixedSm.style.opacity = '0';
                                    redTabletRelativeMd.style.transition = 'opacity 0s';
                                    redTabletRelativeMd.style.opacity = '1';
                                    redTabletFixedMd.style.transition = 'opacity 0s';
                                    redTabletFixedMd.style.opacity = '0';
                                    bluePhoneFixedMd.style.transition = 'opacity .5s';
                                    bluePhoneFixedMd.style.opacity = '0';
                                    blueTabletFixedSm.style.transition = 'opacity .5s';
                                    blueTabletFixedSm.style.opacity = '0';
                                    blueTabletFixedMd.style.transition = 'opacity .5s';
                                    blueTabletFixedMd.style.opacity = '0';
                                }, 10);
                        };
                } else if (window.innerHeight >= 1075 && window.innerHeight < 1200) {
                        if ((((projectsContainerMdRectTop < 1) && (redPhoneRelativeMdRectTop !== 0)) || ((projectsContainerMdRectTop + 30 < 1) && (redTabletRelativeMdRectTop !== 0))) && (redFixedAndRelative === 1)) {
                            redFixedAndRelative = 2;
                            setTimeout(() => {
                                redPhoneRelativeMd.style.transition = 'opacity 0s';
                                redPhoneRelativeMd.style.opacity = '0';
                                redPhoneFixedMd.style.transition = 'opacity 0s';
                                redPhoneFixedMd.style.opacity = '1';
                                redTabletRelativeSm.style.transition = 'opacity 0s';
                                redTabletRelativeSm.style.opacity = '0';
                                redTabletFixedSm.style.transition = 'opacity 0s';
                                redTabletFixedSm.style.opacity = '1';
                                redTabletRelativeMd.style.transition = 'opacity 0s';
                                redTabletRelativeMd.style.opacity = '0';
                                redTabletFixedMd.style.transition = 'opacity 0s';
                                redTabletFixedMd.style.opacity = '1';
                                bluePhoneFixedMd.style.transition = 'opacity .5s';
                                bluePhoneFixedMd.style.opacity = '0';
                                blueTabletFixedSm.style.transition = 'opacity .5s';
                                blueTabletFixedSm.style.opacity = '0';
                                blueTabletFixedMd.style.transition = 'opacity .5s';
                                blueTabletFixedMd.style.opacity = '0';
                            }, 10);
                        } else if ((((projectsContainerMdRectTop >= 1) && (redPhoneRelativeMdRectTop !== 0)) || ((projectsContainerMdRectTop + 30 >= 1) && (redTabletRelativeMdRectTop !== 0))) && (redFixedAndRelative === 2)) {
                                redFixedAndRelative = 1;
                                setTimeout(() => {
                                    redPhoneRelativeMd.style.transition = 'opacity 0s';
                                    redPhoneRelativeMd.style.opacity = '1';
                                    redPhoneFixedMd.style.transition = 'opacity 0s';
                                    redPhoneFixedMd.style.opacity = '0';
                                    redTabletRelativeSm.style.transition = 'opacity 0s';
                                    redTabletRelativeSm.style.opacity = '1';
                                    redTabletFixedSm.style.transition = 'opacity 0s';
                                    redTabletFixedSm.style.opacity = '0';
                                    redTabletRelativeMd.style.transition = 'opacity 0s';
                                    redTabletRelativeMd.style.opacity = '1';
                                    redTabletFixedMd.style.transition = 'opacity 0s';
                                    redTabletFixedMd.style.opacity = '0';
                                    bluePhoneFixedMd.style.transition = 'opacity .5s';
                                    bluePhoneFixedMd.style.opacity = '0';
                                    blueTabletFixedSm.style.transition = 'opacity .5s';
                                    blueTabletFixedSm.style.opacity = '0';
                                    blueTabletFixedMd.style.transition = 'opacity .5s';
                                    blueTabletFixedMd.style.opacity = '0';
                                }, 10);
                        };
                } else {
                        if ((((projectsContainerMdRectTop < 1) && (redPhoneRelativeMdRectTop !== 0)) || ((projectsContainerMdRectTop + 50 < 1) && (redTabletRelativeMdRectTop !== 0))) && (redFixedAndRelative === 1)) {
                            redFixedAndRelative = 2;
                            setTimeout(() => {
                                redPhoneRelativeMd.style.transition = 'opacity 0s';
                                redPhoneRelativeMd.style.opacity = '0';
                                redPhoneFixedMd.style.transition = 'opacity 0s';
                                redPhoneFixedMd.style.opacity = '1';
                                redTabletRelativeSm.style.transition = 'opacity 0s';
                                redTabletRelativeSm.style.opacity = '0';
                                redTabletFixedSm.style.transition = 'opacity 0s';
                                redTabletFixedSm.style.opacity = '1';
                                redTabletRelativeMd.style.transition = 'opacity 0s';
                                redTabletRelativeMd.style.opacity = '0';
                                redTabletFixedMd.style.transition = 'opacity 0s';
                                redTabletFixedMd.style.opacity = '1';
                                bluePhoneFixedMd.style.transition = 'opacity .5s';
                                bluePhoneFixedMd.style.opacity = '0';
                                blueTabletFixedSm.style.transition = 'opacity .5s';
                                blueTabletFixedSm.style.opacity = '0';
                                blueTabletFixedMd.style.transition = 'opacity .5s';
                                blueTabletFixedMd.style.opacity = '0';
                            }, 10);
                        } else if ((((projectsContainerMdRectTop >= 1) && (redPhoneRelativeMdRectTop !== 0)) || ((projectsContainerMdRectTop + 50 >= 1) && (redTabletRelativeMdRectTop !== 0))) && (redFixedAndRelative === 2)) {
                                redFixedAndRelative = 1;
                                setTimeout(() => {
                                    redPhoneRelativeMd.style.transition = 'opacity 0s';
                                    redPhoneRelativeMd.style.opacity = '1';
                                    redPhoneFixedMd.style.transition = 'opacity 0s';
                                    redPhoneFixedMd.style.opacity = '0';
                                    redTabletRelativeSm.style.transition = 'opacity 0s';
                                    redTabletRelativeSm.style.opacity = '1';
                                    redTabletFixedSm.style.transition = 'opacity 0s';
                                    redTabletFixedSm.style.opacity = '0';
                                    redTabletRelativeMd.style.transition = 'opacity 0s';
                                    redTabletRelativeMd.style.opacity = '1';
                                    redTabletFixedMd.style.transition = 'opacity 0s';
                                    redTabletFixedMd.style.opacity = '0';
                                    bluePhoneFixedMd.style.transition = 'opacity .5s';
                                    bluePhoneFixedMd.style.opacity = '0';
                                    blueTabletFixedSm.style.transition = 'opacity .5s';
                                    blueTabletFixedSm.style.opacity = '0';
                                    blueTabletFixedMd.style.transition = 'opacity .5s';
                                    blueTabletFixedMd.style.opacity = '0';
                                }, 10);
                        };
                };




                if (window.innerHeight < 950) {
                        if (redSoftwareDescriptionMdRectBottom * .05 < 10 && fadeOutAndIn === 1) {
                            fadeOutAndIn = 2;
                            setTimeout(() => {
                                projectsContainerMd.style.transition = 'background-color .5s, background-image .5s';
                                projectsContainerMd.style.backgroundColor = 'rgb(23, 23, 132)';
                                projectsContainerMd.style.backgroundImage = 'linear-gradient(to right, transparent 0%, black 100%)';
                                redPhoneFixedMd.style.transition = 'opacity .5s';
                                redPhoneFixedMd.style.opacity = '0';
                                bluePhoneFixedMd.style.transition = 'opacity .5s';
                                bluePhoneFixedMd.style.opacity = '1';
                                redTabletFixedSm.style.transition = 'opacity .5s';
                                redTabletFixedSm.style.opacity = '0';
                                blueTabletFixedSm.style.transition = 'opacity .5s';
                                blueTabletFixedSm.style.opacity = '1';
                                redTabletFixedMd.style.transition = 'opacity .5s';
                                redTabletFixedMd.style.opacity = '0';
                                blueTabletFixedMd.style.transition = 'opacity .5s';
                                blueTabletFixedMd.style.opacity = '1';
                            }, 10);
                        } else if (redSoftwareDescriptionMdRectBottom * .05 >= 10 && fadeOutAndIn === 2) {
                            fadeOutAndIn = 1;
                            setTimeout(() => {
                                projectsContainerMd.style.transition = 'background-color .5s, background-image .5s';
                                projectsContainerMd.style.backgroundColor = 'rgb(132, 23, 23)';
                                projectsContainerMd.style.backgroundImage = 'linear-gradient(to right, transparent 0%, black 100%)';
                                redPhoneFixedMd.style.transition = 'opacity .5s';
                                redPhoneFixedMd.style.opacity = '1';
                                bluePhoneFixedMd.style.transition = 'opacity .5s';
                                bluePhoneFixedMd.style.opacity = '0';
                                redTabletFixedSm.style.transition = 'opacity .5s';
                                redTabletFixedSm.style.opacity = '1';
                                blueTabletFixedSm.style.transition = 'opacity .5s';
                                blueTabletFixedSm.style.opacity = '0';
                                redTabletFixedMd.style.transition = 'opacity .5s';
                                redTabletFixedMd.style.opacity = '1';
                                blueTabletFixedMd.style.transition = 'opacity .5s';
                                blueTabletFixedMd.style.opacity = '0';
                            }, 10);
                        };
                        if (((blueSoftwareButtonMdRectBottom < 140 && bluePhoneRelativeMdRectTop !== 0) || (blueSoftwareButtonMdRectBottom < 250 && blueTabletRelativeMdRectTop !== 0)) && blueRelativeAndFixed === 1) {
                            blueRelativeAndFixed = 2;
                            setTimeout(() => {
                                bluePhoneFixedMd.style.transition = 'opacity 0s';
                                bluePhoneFixedMd.style.opacity = '0';
                                bluePhoneRelativeMd.style.transition = 'opacity 0s';
                                bluePhoneRelativeMd.style.opacity = '1';
                                blueTabletFixedSm.style.transition = 'opacity 0s';
                                blueTabletFixedSm.style.opacity = '0';
                                blueTabletRelativeSm.style.transition = 'opacity 0s';
                                blueTabletRelativeSm.style.opacity = '1';
                                blueTabletFixedMd.style.transition = 'opacity 0s';
                                blueTabletFixedMd.style.opacity = '0';
                                blueTabletRelativeMd.style.transition = 'opacity 0s';
                                blueTabletRelativeMd.style.opacity = '1';
                            }, 10);
                        } else if (((blueSoftwareButtonMdRectBottom >= 140&& bluePhoneRelativeMdRectTop !== 0) || (blueSoftwareButtonMdRectBottom >= 250 && blueTabletRelativeMdRectTop !== 0)) && blueRelativeAndFixed === 2) {
                            blueRelativeAndFixed = 1;
                            setTimeout(() => {
                                bluePhoneFixedMd.style.transition = 'opacity 0s';
                                bluePhoneFixedMd.style.opacity = '1';
                                bluePhoneRelativeMd.style.transition = 'opacity 0s';
                                bluePhoneRelativeMd.style.opacity = '0';
                                blueTabletFixedSm.style.transition = 'opacity 0s';
                                blueTabletFixedSm.style.opacity = '1';
                                blueTabletRelativeSm.style.transition = 'opacity 0s';
                                blueTabletRelativeSm.style.opacity = '0';
                                blueTabletFixedMd.style.transition = 'opacity 0s';
                                blueTabletFixedMd.style.opacity = '1';
                                blueTabletRelativeMd.style.transition = 'opacity 0s';
                                blueTabletRelativeMd.style.opacity = '0';
                            }, 10);
                        };
                } else {
                        if (redSoftwareButtonMdRectBottom < 1 && fadeOutAndIn === 1) {
                            fadeOutAndIn = 2;
                            setTimeout(() => {
                                projectsContainerMd.style.transition = 'background-color .5s, background-image .5s';
                                projectsContainerMd.style.backgroundColor = 'rgb(23, 23, 132)';
                                projectsContainerMd.style.backgroundImage = 'linear-gradient(to right, transparent 0%, black 100%)';
                                redPhoneFixedMd.style.transition = 'opacity .5s';
                                redPhoneFixedMd.style.opacity = '0';
                                bluePhoneFixedMd.style.transition = 'opacity .5s';
                                bluePhoneFixedMd.style.opacity = '1';
                                redTabletFixedSm.style.transition = 'opacity .5s';
                                redTabletFixedSm.style.opacity = '0';
                                blueTabletFixedSm.style.transition = 'opacity .5s';
                                blueTabletFixedSm.style.opacity = '1';
                                redTabletFixedMd.style.transition = 'opacity .5s';
                                redTabletFixedMd.style.opacity = '0';
                                blueTabletFixedMd.style.transition = 'opacity .5s';
                                blueTabletFixedMd.style.opacity = '1';
                            }, 10);
                        } else if (redSoftwareButtonMdRectBottom >= 1 && fadeOutAndIn === 2) {
                            fadeOutAndIn = 1;
                            setTimeout(() => {
                                projectsContainerMd.style.transition = 'background-color .5s, background-image .5s';
                                projectsContainerMd.style.backgroundColor = 'rgb(132, 23, 23)';
                                projectsContainerMd.style.backgroundImage = 'linear-gradient(to right, transparent 0%, black 100%)';
                                redPhoneFixedMd.style.transition = 'opacity .5s';
                                redPhoneFixedMd.style.opacity = '1';
                                bluePhoneFixedMd.style.transition = 'opacity .5s';
                                bluePhoneFixedMd.style.opacity = '0';
                                redTabletFixedSm.style.transition = 'opacity .5s';
                                redTabletFixedSm.style.opacity = '1';
                                blueTabletFixedSm.style.transition = 'opacity .5s';
                                blueTabletFixedSm.style.opacity = '0';
                                redTabletFixedMd.style.transition = 'opacity .5s';
                                redTabletFixedMd.style.opacity = '1';
                                blueTabletFixedMd.style.transition = 'opacity .5s';
                                blueTabletFixedMd.style.opacity = '0';
                            }, 10);
                        };
                        if (((bluePhoneRelativeMdRectTop < window.innerHeight / 3.07 && bluePhoneRelativeMdRectTop !== 0) || (blueTabletRelativeMdRectTop < window.innerHeight / 5.06 && blueTabletRelativeMdRectTop !== 0)) && blueRelativeAndFixed === 1) {
                            blueRelativeAndFixed = 2;
                            setTimeout(() => {
                                bluePhoneFixedMd.style.transition = 'opacity 0s';
                                bluePhoneFixedMd.style.opacity = '0';
                                bluePhoneRelativeMd.style.transition = 'opacity 0s';
                                bluePhoneRelativeMd.style.opacity = '1';
                                blueTabletFixedSm.style.transition = 'opacity 0s';
                                blueTabletFixedSm.style.opacity = '0';
                                blueTabletRelativeSm.style.transition = 'opacity 0s';
                                blueTabletRelativeSm.style.opacity = '1';
                                blueTabletFixedMd.style.transition = 'opacity 0s';
                                blueTabletFixedMd.style.opacity = '0';
                                blueTabletRelativeMd.style.transition = 'opacity 0s';
                                blueTabletRelativeMd.style.opacity = '1';
                            }, 10);
                        } else if (((bluePhoneRelativeMdRectTop >= window.innerHeight / 3.07 && bluePhoneRelativeMdRectTop !== 0) || (blueTabletRelativeMdRectTop >= window.innerHeight / 5.06 && blueTabletRelativeMdRectTop !== 0)) && blueRelativeAndFixed === 2) {
                            blueRelativeAndFixed = 1;
                            setTimeout(() => {
                                bluePhoneFixedMd.style.transition = 'opacity 0s';
                                bluePhoneFixedMd.style.opacity = '1';
                                bluePhoneRelativeMd.style.transition = 'opacity 0s';
                                bluePhoneRelativeMd.style.opacity = '0';
                                blueTabletFixedSm.style.transition = 'opacity 0s';
                                blueTabletFixedSm.style.opacity = '1';
                                blueTabletRelativeSm.style.transition = 'opacity 0s';
                                blueTabletRelativeSm.style.opacity = '0';
                                blueTabletFixedMd.style.transition = 'opacity 0s';
                                blueTabletFixedMd.style.opacity = '1';
                                blueTabletRelativeMd.style.transition = 'opacity 0s';
                                blueTabletRelativeMd.style.opacity = '0';
                            }, 10);
                        };
                }



        
    










        if (projectsContainerMdRectBottom < window.innerHeight / 2 && blueContractAndExpand === 1) {
            blueContractAndExpand = 2;
            setTimeout(() => {
                projectsContainerMd.style.transition = 'width 1s, background-color 1s, background-image 1s, border-radius 1s';
                projectsContainerMd.style.width = '94.5%';
                projectsContainerMd.style.backgroundColor = 'rgb(0, 0, 0)';
                projectsContainerMd.style.backgroundImage = 'linear-gradient(to right, transparent 0%, black 100%)';
                projectsContainerMd.style.borderRadius = '40px';
            }, 10);
        } else if (projectsContainerMdRectBottom >= window.innerHeight / 2 && blueContractAndExpand === 2) {
            blueContractAndExpand = 1;
            setTimeout(() => {
                projectsContainerMd.style.transition = 'width 1s, background-color 1s, background-image 1s, border-radius 1s';
                projectsContainerMd.style.width = '100%';
                projectsContainerMd.style.backgroundColor = 'rgb(23, 23, 132)';
                projectsContainerMd.style.backgroundImage = 'linear-gradient(to right, transparent 0%, black 100%)';
                projectsContainerMd.style.borderRadius = '0';
            }, 10);
        };

        if (aboutSidePortraitMdRectTop < window.innerHeight / 2 && aboutEducationDivMdRectTop >= window.innerHeight / 2) {     // this block of code controls the functionality of the 'about-container-md' element
            aboutTop1LineMd.style.transition = 'margin-right .75s';
            aboutTop1LineMd.style.marginRight = '-200px';
            aboutTop1SpinnerSmallerMd.style.transition = 'opacity .15s .25s';
            aboutTop1SpinnerSmallerMd.style.opacity = '0';
            aboutTop1SpinnerBiggerMd.style.transition = 'opacity .15s .25s';
            aboutTop1SpinnerBiggerMd.style.opacity = '0';
            aboutTop2SpinnerBiggerMd.style.transition = 'opacity .5s .25s';
            aboutTop2SpinnerBiggerMd.style.opacity = '1';
            aboutTop2SpinnerSmallerMd.style.transition = 'opacity .5s .25s';
            aboutTop2SpinnerSmallerMd.style.opacity = '1';
        } else if (aboutSidePortraitMdRectTop >= window.innerHeight / 2 && aboutEducationDivMdRectTop >= window.innerHeight / 2) {
            if (window.innerWidth >= 1280) {
                aboutTop1LineMd.style.transition = 'margin-right .75s';
                aboutTop1LineMd.style.marginRight = '1100px';    
            } else if (window.innerWidth < 1280) {
                aboutTop1LineMd.style.transition = 'margin-right .75s';
                aboutTop1LineMd.style.marginRight = '700px';
            }
            aboutTop1SpinnerSmallerMd.style.transition = 'opacity .5s .25s';
            aboutTop1SpinnerSmallerMd.style.opacity = '1';
            aboutTop1SpinnerBiggerMd.style.transition = 'opacity .5s .25s';
            aboutTop1SpinnerBiggerMd.style.opacity = '1';
            aboutTop2SpinnerBiggerMd.style.transition = 'opacity .15s .25s';
            aboutTop2SpinnerBiggerMd.style.opacity = '0';
            aboutTop2SpinnerSmallerMd.style.transition = 'opacity .15s .25s';
            aboutTop2SpinnerSmallerMd.style.opacity = '0';
        }
        if (aboutSidePortraitMdRectTop < window.innerHeight / 2 && aboutEducationDivMdRectTop < window.innerHeight / 2) {
            if (window.innerWidth >= 1280) {
                aboutTop2LineMd.style.transition = 'margin-right .75s';
                aboutTop2LineMd.style.marginRight = '1100px';    
            } else if (window.innerWidth < 1280) {
                aboutTop2LineMd.style.transition = 'margin-right .75s';
                aboutTop2LineMd.style.marginRight = '700px';
            }
            aboutTop2SpinnerSmallerMd.style.transition = 'opacity .15s .25s';
            aboutTop2SpinnerSmallerMd.style.opacity = '0';
            aboutTop2SpinnerBiggerMd.style.transition = 'opacity .15s .25s';
            aboutTop2SpinnerBiggerMd.style.opacity = '0';
            aboutTop3SpinnerBiggerMd.style.transition = 'opacity .5s .25s';
            aboutTop3SpinnerBiggerMd.style.opacity = '1';
            aboutTop3SpinnerSmallerMd.style.transition = 'opacity .5s .25s';
            aboutTop3SpinnerSmallerMd.style.opacity = '1';
        } else if (aboutSidePortraitMdRectTop < window.innerHeight / 2 && aboutEducationDivMdRectTop >= window.innerHeight / 2) {
            aboutTop2LineMd.style.transition = 'margin-right .75s';
            aboutTop2LineMd.style.marginRight = '-200px';
            aboutTop2SpinnerSmallerMd.style.transition = 'opacity .5s .25s';
            aboutTop2SpinnerSmallerMd.style.opacity = '1';
            aboutTop2SpinnerBiggerMd.style.transition = 'opacity .5s .25s';
            aboutTop2SpinnerBiggerMd.style.opacity = '1';
            aboutTop3SpinnerBiggerMd.style.transition = 'opacity .15s .25s';
            aboutTop3SpinnerBiggerMd.style.opacity = '0';
            aboutTop3SpinnerSmallerMd.style.transition = 'opacity .15s .25s';
            aboutTop3SpinnerSmallerMd.style.opacity = '0';
        }
        if (aboutEducationDivMdRectTop < window.innerHeight / 2 && aboutEducationDivMdRectBottom + 70 < window.innerHeight / 2) {
            aboutTop3LineMd.style.transition = 'margin-right .75s';
            aboutTop3LineMd.style.marginRight = '-200px';
            aboutTop3SpinnerSmallerMd.style.transition = 'opacity .15s .25s';
            aboutTop3SpinnerSmallerMd.style.opacity = '0';
            aboutTop3SpinnerBiggerMd.style.transition = 'opacity .15s .25s';
            aboutTop3SpinnerBiggerMd.style.opacity = '0';
            aboutTop4SpinnerBiggerMd.style.transition = 'opacity .5s .25s';
            aboutTop4SpinnerBiggerMd.style.opacity = '1';
            aboutTop4SpinnerSmallerMd.style.transition = 'opacity .5s .25s';
            aboutTop4SpinnerSmallerMd.style.opacity = '1';
        } else if (aboutEducationDivMdRectTop < window.innerHeight / 2 && aboutEducationDivMdRectBottom + 70 >= window.innerHeight / 2) {
            if (window.innerWidth >= 1280) {
                aboutTop3LineMd.style.transition = 'margin-right .75s';
                aboutTop3LineMd.style.marginRight = '1100px';    
            } else if (window.innerWidth < 1280) {
                aboutTop3LineMd.style.transition = 'margin-right .75s';
                aboutTop3LineMd.style.marginRight = '700px';
            }
            aboutTop3SpinnerSmallerMd.style.transition = 'opacity .5s .25s';
            aboutTop3SpinnerSmallerMd.style.opacity = '1';
            aboutTop3SpinnerBiggerMd.style.transition = 'opacity .5s .25s';
            aboutTop3SpinnerBiggerMd.style.opacity = '1';
            aboutTop4SpinnerBiggerMd.style.transition = 'opacity .15s .25s';
            aboutTop4SpinnerBiggerMd.style.opacity = '0';
            aboutTop4SpinnerSmallerMd.style.transition = 'opacity .15s .25s';
            aboutTop4SpinnerSmallerMd.style.opacity = '0';
        };

        if (window.scrollY === 0) {     // the following block of code fixes a glitch that occurs when the user scrolls really fast to the top or bottom of the page
            setTimeout(() => {
                redPhoneFixedMd.style.transition = 'opacity 0s';
                redPhoneFixedMd.style.opacity = '0';
                bluePhoneFixedMd.style.transition = 'opacity 0s';
                bluePhoneFixedMd.style.opacity = '0';
                redTabletFixedMd.style.transition = 'opacity 0s';
                redTabletFixedMd.style.opacity = '0';
                blueTabletFixedMd.style.transition = 'opacity 0s';
                blueTabletFixedMd.style.opacity = '0';
            }, 20);
        };
        if (window.scrollY === document.body.scrollHeight) {
            setTimeout(() => {
                redPhoneFixedMd.style.transition = 'opacity 0s';
                redPhoneFixedMd.style.opacity = '0';
                bluePhoneFixedMd.style.transition = 'opacity 0s';
                bluePhoneFixedMd.style.opacity = '0';
                redTabletFixedMd.style.transition = 'opacity 0s';
                redTabletFixedMd.style.opacity = '0';
                blueTabletFixedMd.style.transition = 'opacity 0s';
                blueTabletFixedMd.style.opacity = '0';
            }, 20);
        };
    };
};









// these variables are named to represent the elements they correspond to, the phrases 'Xs' or 'Md' etc. indicate that that element first appears starting at that breakpoint (this entire website starts from 'Xs' and moves towards '4Xl') if they do not have an 'Xs' or 'Md' etc. in their name then they apply to all or most breakpoints and screen sizes
    // as far as organization and variable naming is concerned, I try to reserve the word 'container' for elements that correspond to a major sectional element within the html that actually has a hyphenated class name assigned to it, and then use the word 'div' to represent a sub-section of one of those major elements
function homeResize() {
    var mobileMenu = document.querySelector('.mobile-menu');
    var mobileMenuLinks = document.querySelector('.mobile-menu-links');
    var mobileMenuButtons = document.querySelector('.mobile-menu-buttons');
    var mobileMenuLogos = document.querySelector('.mobile-menu-logos');
    var homeContainerBuildTextContainerXs = document.querySelector('.home-container > div:nth-child(5)');
    var homeContainerBuildTextXs = document.querySelector('.home-container > div:nth-child(5) > span:first-child');
    var homeContainerCreatingTextXs = document.querySelector('.home-container > div:nth-child(5) > span:nth-child(2)');
    var projectsContainerXs = document.querySelector('.projects-container-xs');
    var projectsContainerXsRectTop = projectsContainerXs.getBoundingClientRect().top;
    var projectsContainerXsRectBottom = projectsContainerXs.getBoundingClientRect().bottom;
    var projectsContainerMd = document.querySelector('.projects-container-md');
    var projectsContainerMdRectTop = projectsContainerMd.getBoundingClientRect().top;
    var projectsContainerMdRectBottom = projectsContainerMd.getBoundingClientRect().bottom;
    var redPhoneRelativeXs = document.querySelector('.projects-container-xs > div:first-child > img:nth-child(2)');
    var redPhoneRelativeMd = document.querySelector('.projects-container-md > div:first-child > img:nth-child(2)');
    var redPhoneRelativeMdRectTop = redPhoneRelativeMd.getBoundingClientRect().top;
    var redTabletRelativeSm = document.querySelector('.projects-container-xs > div:first-child > img:nth-child(3)');
    var redTabletRelativeMd = document.querySelector('.projects-container-md > div:first-child > img:nth-child(3)');
    var redTabletRelativeMdRectTop = redTabletRelativeMd.getBoundingClientRect().top;
    var redSoftwareButtonXs = document.querySelector('.projects-container-xs > div:nth-child(2) > a:first-child > button:first-child');
    var redSoftwareButtonXsRectBottom = redSoftwareButtonXs.getBoundingClientRect().bottom;
    var redSoftwareButtonMd = document.querySelector('.projects-container-md > div:first-child > div:first-child > a:first-child > button:first-child');
    var redSoftwareButtonMdRectBottom = redSoftwareButtonMd.getBoundingClientRect().bottom;
    var bluePhoneRelativeXs = document.querySelector('.projects-container-xs > div:nth-child(3) > img:nth-child(2)');
    var bluePhoneRelativeXsRectTop = bluePhoneRelativeXs.getBoundingClientRect().top;
    var bluePhoneRelativeMd = document.querySelector('.projects-container-md > div:nth-child(2) > img:nth-child(2)');
    var bluePhoneRelativeMdRectTop = bluePhoneRelativeMd.getBoundingClientRect().top;
    var blueTabletRelativeSm = document.querySelector('.projects-container-xs > div:nth-child(3) > img:nth-child(3)');
    var blueTabletRelativeSmRectTop = blueTabletRelativeSm.getBoundingClientRect().top;
    var blueTabletRelativeMd = document.querySelector('.projects-container-md > div:nth-child(2) > img:nth-child(3)');
    var blueTabletRelativeMdRectTop = blueTabletRelativeMd.getBoundingClientRect().top;
    var redPhoneFixedXs = document.querySelector('.entire-website-container > img:nth-child(5)');
    var redPhoneFixedMd = document.querySelector('.entire-website-container > img:nth-child(10)');
    var bluePhoneFixedXs = document.querySelector('.entire-website-container > img:nth-child(6)');
    var bluePhoneFixedMd = document.querySelector('.entire-website-container > img:nth-child(11)');
    var redTabletFixedSm = document.querySelector('.entire-website-container > img:nth-child(7)');
    var redTabletFixedMd = document.querySelector('.entire-website-container > img:nth-child(12)');
    var blueTabletFixedSm = document.querySelector('.entire-website-container > img:nth-child(8)');
    var blueTabletFixedMd = document.querySelector('.entire-website-container > img:nth-child(13)');
    var aboutTop1SpinnerSmallerMd = document.querySelector('.about-container-md > div:first-child');
    var aboutTop1SpinnerBiggerMd = document.querySelector('.about-container-md > div:nth-child(2)');
    var aboutTop2SpinnerSmallerMd = document.querySelector('.about-container-md > div:nth-child(3)');
    var aboutTop2SpinnerBiggerMd = document.querySelector('.about-container-md > div:nth-child(4)');
    var aboutTop3SpinnerSmallerMd = document.querySelector('.about-container-md > div:nth-child(5)');
    var aboutTop3SpinnerBiggerMd = document.querySelector('.about-container-md > div:nth-child(6)');
    var aboutTop4SpinnerSmallerMd = document.querySelector('.about-container-md > div:nth-child(7)');
    var aboutTop4SpinnerBiggerMd = document.querySelector('.about-container-md > div:nth-child(8)');
    var aboutTop1LineMd = document.querySelector('.about-container-md > div:nth-child(9) > span:first-child');
    var aboutTop2LineMd = document.querySelector('.about-container-md > div:nth-child(10) > span:first-child');
    var aboutTop3LineMd = document.querySelector('.about-container-md > div:nth-child(11) > span:first-child');
    var aboutSidePortraitMd = document.querySelector('.about-container-md > div:nth-child(12) > img:nth-child(2)');
    var aboutSidePortraitMdRectTop = aboutSidePortraitMd.getBoundingClientRect().top;
    var aboutEducationDivMd = document.querySelector('.about-container-md > div:nth-child(12) > div:nth-child(3)');
    var aboutEducationDivMdRectTop = aboutEducationDivMd.getBoundingClientRect().top;
    var aboutEducationDivMdRectBottom = aboutEducationDivMd.getBoundingClientRect().bottom;

    mobileMenu.style.zIndex = '10';
    mobileMenu.style.borderBottom = '0';
    mobileMenuLinks.style.opacity = '0';
    mobileMenuButtons.style.opacity = '0';
    mobileMenuLogos.style.opacity = '0';

    if (window.innerWidth < 768) {
        mobileMenu.style.height = '20vw';
    };
    if (window.innerWidth >= 768) {
        mobileMenu.style.height = '130px';
    };

    if (window.innerHeight >= 950 && startResizeTo950 === 1) {      // this block of code is used to make sure that the 'projects-container-md' element only has conditions happen once per height resize into either the '< 950px' or '>= 950px' screen size to avoid indefinite executions of code as resizing keeps happening
        startResizeTo950 = 2;
        startResizeFrom950 = 1;
    } else if (window.innerHeight < 950 & startResizeFrom950 === 1) {
        startResizeFrom950 = 2;
        startResizeTo950 = 1;
    };

    if (window.innerHeight >= 950) {       // the code below is used to make the "projects-container-md" presentation more centered depending on the screen height
        if (window.innerWidth < 1024) {
            redPhoneFixedMd.style.transition = 'margin-top 0s';
            redPhoneFixedMd.style.marginTop = '32.6vh';
            bluePhoneFixedMd.style.transition = 'margin-top 0s';
            bluePhoneFixedMd.style.marginTop = '32.6vh';
            redTabletFixedMd.style.transition = 'margin-top 0s';
            redTabletFixedMd.style.marginTop = '19vh';
            blueTabletFixedMd.style.transition = 'margin-top 0s';
            blueTabletFixedMd.style.marginTop = '19vh';
        } else if (window.innerWidth >= 1024) { // AND BELOW WHATEVER IS DECIDED LATER AT BIGGER SCREEN
            redPhoneFixedMd.style.transition = 'margin-top 0s';
            redPhoneFixedMd.style.marginTop = '32.7vh';
            bluePhoneFixedMd.style.transition = 'margin-top 0s';
            bluePhoneFixedMd.style.marginTop = '32.7vh';
            redTabletFixedMd.style.transition = 'margin-top 0s';
            redTabletFixedMd.style.marginTop = '19.3vh';
            blueTabletFixedMd.style.transition = 'margin-top 0s';
            blueTabletFixedMd.style.marginTop = '19.3vh';
        }
    } else {
        if (window.innerWidth < 1024) {
            redPhoneFixedMd.style.transition = 'margin-top 0s';
            redPhoneFixedMd.style.marginTop = '11vh';
            bluePhoneFixedMd.style.transition = 'margin-top 0s';
            bluePhoneFixedMd.style.marginTop = '11vh';
            redTabletFixedMd.style.transition = 'margin-top 0s';
            redTabletFixedMd.style.marginTop = '6vh';
            blueTabletFixedMd.style.transition = 'margin-top 0s';
            blueTabletFixedMd.style.marginTop = '6vh';
        } else if (window.innerWidth >= 1024) { // AND BELOW WHATEVER IS DECIDED LATER AT BIGGER SCREEN
            redPhoneFixedMd.style.transition = 'margin-top 0s';
            redPhoneFixedMd.style.marginTop = '11vh';
            bluePhoneFixedMd.style.transition = 'margin-top 0s';
            bluePhoneFixedMd.style.marginTop = '11vh';
            redTabletFixedMd.style.transition = 'margin-top 0s';
            redTabletFixedMd.style.marginTop = '6vh';
            blueTabletFixedMd.style.transition = 'margin-top 0s';
            blueTabletFixedMd.style.marginTop = '6vh';
        }
    };

    if (window.innerWidth > 460) {
        homeContainerBuildTextContainerXs.style.alignItems = 'center';
        homeContainerBuildTextContainerXs.style.width = '94.5%';
        homeContainerBuildTextContainerXs.style.marginLeft = '0';
        homeContainerBuildTextXs.style.textAlign = 'center';
        homeContainerCreatingTextXs.style.textAlign = 'center';
    } else {
        homeContainerBuildTextContainerXs.style.alignItems = 'start';
        homeContainerBuildTextContainerXs.style.width = '300px';
        homeContainerBuildTextContainerXs.style.marginLeft = '20px';
        homeContainerBuildTextXs.style.textAlign = 'start';
        homeContainerCreatingTextXs.style.textAlign = 'start';
    };





// ONE OF THE MAJOR BREAKING POINTS THAT CONTROLS MUCH OF THE RESIZING FUNCTIONALITY
    if (window.innerWidth < 768 && startResizeXsToMd === 1) {
        startResizeXsToMd = 2;
        startResizeMdToXs = 1;
        if (projectsContainerXsRectTop >= window.innerHeight / 2) {                // the code below controls the functionality for the 'projects-container-xs' element
            redExpandAndContract = 1;
            redFixedAndRelative = 1;
            fadeOutAndIn = 1;
            blueRelativeAndFixed = 1;
            blueContractAndExpand = 1;
            setTimeout(() => {
                projectsContainerXs.style.transition = 'width 0s, background-color 0s, background-image 0s, border-radius 0s';
                projectsContainerXs.style.width = '94.5%';
                projectsContainerXs.style.backgroundColor = 'rgb(0, 0, 0)';
                projectsContainerXs.style.backgroundImage = 'linear-gradient(to right, transparent 0%, black 100%)';
                projectsContainerXs.style.borderRadius = '40px';
                redPhoneRelativeXs.style.transition = 'opacity 0s';
                redPhoneRelativeXs.style.opacity = '1';
                redPhoneFixedXs.style.transition = 'opacity 0s';
                redPhoneFixedXs.style.opacity = '0';
                bluePhoneRelativeXs.style.transition = 'opacity 0s';
                bluePhoneRelativeXs.style.opacity = '0';
                bluePhoneFixedXs.style.transition = 'opacity 0s';
                bluePhoneFixedXs.style.opacity = '0';
                redTabletRelativeSm.style.transition = 'opacity 0s';
                redTabletRelativeSm.style.opacity = '1';
                redTabletFixedSm.style.transition = 'opacity 0s';
                redTabletFixedSm.style.opacity = '0';
                blueTabletRelativeSm.style.transition = 'opacity 0s';
                blueTabletRelativeSm.style.opacity = '0';
                blueTabletFixedSm.style.transition = 'opacity 0s';
                blueTabletFixedSm.style.opacity = '0';
            }, 10);
        } else if (projectsContainerXsRectBottom < window.innerHeight / 2) {
            redExpandAndContract = 2;
            redFixedAndRelative = 2;
            fadeOutAndIn = 2;
            blueRelativeAndFixed = 2;
            blueContractAndExpand = 2;
            setTimeout(() => {
                projectsContainerXs.style.transition = 'width 0s, background-color 0s, background-image 0s, border-radius 0s';
                projectsContainerXs.style.width = '94.5%';
                projectsContainerXs.style.backgroundColor = 'rgb(0, 0, 0)';
                projectsContainerXs.style.backgroundImage = 'linear-gradient(to right, transparent 0%, black 100%)';
                projectsContainerXs.style.borderRadius = '40px';
                redPhoneRelativeXs.style.transition = 'opacity 0s';
                redPhoneRelativeXs.style.opacity = '0';
                redPhoneFixedXs.style.transition = 'opacity 0s';
                redPhoneFixedXs.style.opacity = '0';
                bluePhoneRelativeXs.style.transition = 'opacity 0s';
                bluePhoneRelativeXs.style.opacity = '1';
                bluePhoneFixedXs.style.transition = 'opacity 0s';
                bluePhoneFixedXs.style.opacity = '0';
                redTabletRelativeSm.style.transition = 'opacity 0s';
                redTabletRelativeSm.style.opacity = '0';
                redTabletFixedSm.style.transition = 'opacity 0s';
                redTabletFixedSm.style.opacity = '0';
                blueTabletRelativeSm.style.transition = 'opacity 0s';
                blueTabletRelativeSm.style.opacity = '1';
                blueTabletFixedSm.style.transition = 'opacity 0s';
                blueTabletFixedSm.style.opacity = '0';
            }, 10);
        };
        if (projectsContainerXsRectTop >= 1 && projectsContainerXsRectTop < window.innerHeight / 2) {
            redExpandAndContract = 2;
            redFixedAndRelative = 1;
            fadeOutAndIn = 1;
            blueRelativeAndFixed = 1;
            blueContractAndExpand = 1;
            setTimeout(() => {
                projectsContainerXs.style.transition = 'width 0s, background-color 0s, background-image 0s, border-radius 0s';
                projectsContainerXs.style.width = '100%';
                projectsContainerXs.style.backgroundColor = 'rgb(132, 23, 23)';
                projectsContainerXs.style.backgroundImage = 'linear-gradient(to right, transparent 0%, black 100%)';
                projectsContainerXs.style.borderRadius = '0';
                redPhoneRelativeXs.style.transition = 'opacity 0s';
                redPhoneRelativeXs.style.opacity = '1';
                redPhoneFixedXs.style.transition = 'opacity 0s';
                redPhoneFixedXs.style.opacity = '0';
                bluePhoneRelativeXs.style.transition = 'opacity 0s';
                bluePhoneRelativeXs.style.opacity = '0';
                bluePhoneFixedXs.style.transition = 'opacity 0s';
                bluePhoneFixedXs.style.opacity = '0';
                redTabletRelativeSm.style.transition = 'opacity 0s';
                redTabletRelativeSm.style.opacity = '1';
                redTabletFixedSm.style.transition = 'opacity 0s';
                redTabletFixedSm.style.opacity = '0';
                blueTabletRelativeSm.style.transition = 'opacity 0s';
                blueTabletRelativeSm.style.opacity = '0';
                blueTabletFixedSm.style.transition = 'opacity 0s';
                blueTabletFixedSm.style.opacity = '0';
            }, 10);
        } else if (projectsContainerXsRectTop < 1 && redSoftwareButtonXsRectBottom >= 1) {
            redExpandAndContract = 2;
            redFixedAndRelative = 2;
            fadeOutAndIn = 1;
            blueRelativeAndFixed = 1;
            blueContractAndExpand = 1;
            setTimeout(() => {
                projectsContainerXs.style.transition = 'width 0s, background-color 0s, background-image 0s, border-radius 0s';
                projectsContainerXs.style.width = '100%';
                projectsContainerXs.style.backgroundColor = 'rgb(132, 23, 23)';
                projectsContainerXs.style.backgroundImage = 'linear-gradient(to right, transparent 0%, black 100%)';
                projectsContainerXs.style.borderRadius = '0';
                redPhoneRelativeXs.style.transition = 'opacity 0s';
                redPhoneRelativeXs.style.opacity = '0';
                redPhoneFixedXs.style.transition = 'opacity 0s';
                redPhoneFixedXs.style.opacity = '1';
                bluePhoneRelativeXs.style.transition = 'opacity 0s';
                bluePhoneRelativeXs.style.opacity = '0';
                bluePhoneFixedXs.style.transition = 'opacity 0s';
                bluePhoneFixedXs.style.opacity = '0';
                redTabletRelativeSm.style.transition = 'opacity 0s';
                redTabletRelativeSm.style.opacity = '0';
                redTabletFixedSm.style.transition = 'opacity 0s';
                redTabletFixedSm.style.opacity = '1';
                blueTabletRelativeSm.style.transition = 'opacity 0s';
                blueTabletRelativeSm.style.opacity = '0';
                blueTabletFixedSm.style.transition = 'opacity 0s';
                blueTabletFixedSm.style.opacity = '0';
            }, 10);
        } else if (redSoftwareButtonXsRectBottom < 1 && ((bluePhoneRelativeXsRectTop >= 50 && bluePhoneRelativeXsRectTop !== 0) || (blueTabletRelativeSmRectTop + 10 >= 1 && blueTabletRelativeSmRectTop !== 0))) {
            redExpandAndContract = 2;
            redFixedAndRelative = 2;
            fadeOutAndIn = 2;
            blueRelativeAndFixed = 1;
            blueContractAndExpand = 1;
            setTimeout(() => {
                projectsContainerXs.style.transition = 'width 0s, background-color 0s, background-image 0s, border-radius 0s';
                projectsContainerXs.style.width = '100%';
                projectsContainerXs.style.backgroundColor = 'rgb(23, 23, 132)';
                projectsContainerXs.style.backgroundImage = 'linear-gradient(to right, transparent 0%, black 100%)';
                projectsContainerXs.style.borderRadius = '0';
                redPhoneRelativeXs.style.transition = 'opacity 0s';
                redPhoneRelativeXs.style.opacity = '0';
                redPhoneFixedXs.style.transition = 'opacity 0s';
                redPhoneFixedXs.style.opacity = '0';
                bluePhoneRelativeXs.style.transition = 'opacity 0s';
                bluePhoneRelativeXs.style.opacity = '0';
                bluePhoneFixedXs.style.transition = 'opacity 0s';
                bluePhoneFixedXs.style.opacity = '1';
                redTabletRelativeSm.style.transition = 'opacity 0s';
                redTabletRelativeSm.style.opacity = '0';
                redTabletFixedSm.style.transition = 'opacity 0s';
                redTabletFixedSm.style.opacity = '0';
                blueTabletRelativeSm.style.transition = 'opacity 0s';
                blueTabletRelativeSm.style.opacity = '0';
                blueTabletFixedSm.style.transition = 'opacity 0s';
                blueTabletFixedSm.style.opacity = '1';
            }, 10);
        } else if (((bluePhoneRelativeXsRectTop < 50 && bluePhoneRelativeXsRectTop !== 0) || (blueTabletRelativeSmRectTop + 10 < 1 && blueTabletRelativeSmRectTop !== 0)) && projectsContainerXsRectBottom >= window.innerHeight / 2) {
            redExpandAndContract = 2;
            redFixedAndRelative = 2;
            fadeOutAndIn = 2;
            blueRelativeAndFixed = 2;
            blueContractAndExpand = 1;
            setTimeout(() => {
                projectsContainerXs.style.transition = 'width 0s, background-color 0s, background-image 0s, border-radius 0s';
                projectsContainerXs.style.width = '100%';
                projectsContainerXs.style.backgroundColor = 'rgb(23, 23, 132)';
                projectsContainerXs.style.backgroundImage = 'linear-gradient(to right, transparent 0%, black 100%)';
                projectsContainerXs.style.borderRadius = '0';
                redPhoneRelativeXs.style.transition = 'opacity 0s';
                redPhoneRelativeXs.style.opacity = '0';
                redPhoneFixedXs.style.transition = 'opacity 0s';
                redPhoneFixedXs.style.opacity = '0';
                bluePhoneRelativeXs.style.transition = 'opacity 0s';
                bluePhoneRelativeXs.style.opacity = '1';
                bluePhoneFixedXs.style.transition = 'opacity 0s';
                bluePhoneFixedXs.style.opacity = '0';
                redTabletRelativeSm.style.transition = 'opacity 0s';
                redTabletRelativeSm.style.opacity = '0';
                redTabletFixedSm.style.transition = 'opacity 0s';
                redTabletFixedSm.style.opacity = '0';
                blueTabletRelativeSm.style.transition = 'opacity 0s';
                blueTabletRelativeSm.style.opacity = '1';
                blueTabletFixedSm.style.transition = 'opacity 0s';
                blueTabletFixedSm.style.opacity = '0';
            }, 10);
        };
    };






// ONE OF THE MAJOR BREAKING POINTS THAT CONTROLS MUCH OF THE RESIZING FUNCTIONALITY
    if (window.innerWidth >= 768 && startResizeMdToXs === 1) {
        startResizeMdToXs = 2;
        startResizeXsToMd = 1;
        if (projectsContainerMdRectTop >= window.innerHeight / 2) {                     // the code below controls the functionality for the 'projects-container-md' element
            redExpandAndContract = 1;
            redFixedAndRelative = 1;
            fadeOutAndIn = 1;
            blueRelativeAndFixed = 1;
            blueContractAndExpand = 1;
            setTimeout(() => {
                projectsContainerMd.style.transition = 'width 0s, background-color 0s, background-image 0s, border-radius 0s';
                projectsContainerMd.style.width = '94.5%';
                projectsContainerMd.style.backgroundColor = 'rgb(0, 0, 0)';
                projectsContainerMd.style.backgroundImage = 'linear-gradient(to right, transparent 0%, black 100%)';
                projectsContainerMd.style.borderRadius = '40px';
                redPhoneRelativeMd.style.transition = 'opacity 0s';
                redPhoneRelativeMd.style.opacity = '1';
                redPhoneFixedMd.style.transition = 'opacity 0s';
                redPhoneFixedMd.style.opacity = '0';
                bluePhoneRelativeMd.style.transition = 'opacity 0s';
                bluePhoneRelativeMd.style.opacity = '0';
                bluePhoneFixedMd.style.transition = 'opacity 0s';
                bluePhoneFixedMd.style.opacity = '0';
                redTabletRelativeMd.style.transition = 'opacity 0s';
                redTabletRelativeMd.style.opacity = '1';
                redTabletFixedMd.style.transition = 'opacity 0s';
                redTabletFixedMd.style.opacity = '0';
                blueTabletRelativeMd.style.transition = 'opacity 0s';
                blueTabletRelativeMd.style.opacity = '0';
                blueTabletFixedMd.style.transition = 'opacity 0s';
                blueTabletFixedMd.style.opacity = '0';
            }, 10);
        } else if (projectsContainerMdRectBottom < window.innerHeight / 2) {
            redExpandAndContract = 2;
            redFixedAndRelative = 2;
            fadeOutAndIn = 2;
            blueRelativeAndFixed = 2;
            blueContractAndExpand = 2;
            setTimeout(() => {
                projectsContainerMd.style.transition = 'width 0s, background-color 0s, background-image 0s, border-radius 0s';
                projectsContainerMd.style.width = '94.5%';
                projectsContainerMd.style.backgroundColor = 'rgb(0, 0, 0)';
                projectsContainerMd.style.backgroundImage = 'linear-gradient(to right, transparent 0%, black 100%)';
                projectsContainerMd.style.borderRadius = '40px';
                redPhoneRelativeMd.style.transition = 'opacity 0s';
                redPhoneRelativeMd.style.opacity = '0';
                redPhoneFixedMd.style.transition = 'opacity 0s';
                redPhoneFixedMd.style.opacity = '0';
                bluePhoneRelativeMd.style.transition = 'opacity 0s';
                bluePhoneRelativeMd.style.opacity = '1';
                bluePhoneFixedMd.style.transition = 'opacity 0s';
                bluePhoneFixedMd.style.opacity = '0';
                redTabletRelativeMd.style.transition = 'opacity 0s';
                redTabletRelativeMd.style.opacity = '0';
                blueTabletRelativeMd.style.transition = 'opacity 0s';
                blueTabletRelativeMd.style.opacity = '1';
                blueTabletFixedMd.style.transition = 'opacity 0s';
                blueTabletFixedMd.style.opacity = '0';
            }, 10);
        };





        
        if ((((projectsContainerMdRectTop >= 1) && (redPhoneRelativeMdRectTop !== 0)) || ((redTabletRelativeMdRectTop >= 1) && (redTabletRelativeMdRectTop !== 0))) && (projectsContainerMdRectTop < window.innerHeight / 2)) {
            redExpandAndContract = 2;
            redFixedAndRelative = 1;
            fadeOutAndIn = 1;
            blueRelativeAndFixed = 1;
            blueContractAndExpand = 1;
            setTimeout(() => {
                projectsContainerMd.style.transition = 'width 0s, background-color 0s, background-image 0s, border-radius 0s';
                projectsContainerMd.style.width = '100%';
                projectsContainerMd.style.backgroundColor = 'rgb(132, 23, 23)';
                projectsContainerMd.style.backgroundImage = 'linear-gradient(to right, transparent 0%, black 100%)';
                projectsContainerMd.style.borderRadius = '0';
                redPhoneRelativeMd.style.transition = 'opacity 0s';
                redPhoneRelativeMd.style.opacity = '1';
                redPhoneFixedMd.style.transition = 'opacity 0s';
                redPhoneFixedMd.style.opacity = '0';
                bluePhoneRelativeMd.style.transition = 'opacity 0s';
                bluePhoneRelativeMd.style.opacity = '0';
                bluePhoneFixedMd.style.transition = 'opacity 0s';
                bluePhoneFixedMd.style.opacity = '0';
                redTabletRelativeMd.style.transition = 'opacity 0s';
                redTabletRelativeMd.style.opacity = '1';
                redTabletFixedMd.style.transition = 'opacity 0s';
                redTabletFixedMd.style.opacity = '0';
                blueTabletRelativeMd.style.transition = 'opacity 0s';
                blueTabletRelativeMd.style.opacity = '0';
                blueTabletFixedMd.style.transition = 'opacity 0s';
                blueTabletFixedMd.style.opacity = '0';
            }, 10);
        } else if ((((projectsContainerMdRectTop < 1) && (redPhoneRelativeMdRectTop !== 0)) || ((redTabletRelativeMdRectTop < 1) && (redTabletRelativeMdRectTop !== 0))) && (redSoftwareButtonMdRectBottom >= 1)) {
            redExpandAndContract = 2;
            redFixedAndRelative = 2;
            fadeOutAndIn = 1;
            blueRelativeAndFixed = 1;
            blueContractAndExpand = 1;
            setTimeout(() => {
                projectsContainerMd.style.transition = 'width 0s, background-color 0s, background-image 0s, border-radius 0s';
                projectsContainerMd.style.width = '100%';
                projectsContainerMd.style.backgroundColor = 'rgb(132, 23, 23)';
                projectsContainerMd.style.backgroundImage = 'linear-gradient(to right, transparent 0%, black 100%)';
                projectsContainerMd.style.borderRadius = '0';
                redPhoneRelativeMd.style.transition = 'opacity 0s';
                redPhoneRelativeMd.style.opacity = '0';
                redPhoneFixedMd.style.transition = 'opacity 0s';
                redPhoneFixedMd.style.opacity = '1';
                bluePhoneRelativeMd.style.transition = 'opacity 0s';
                bluePhoneRelativeMd.style.opacity = '0';
                bluePhoneFixedMd.style.transition = 'opacity 0s';
                bluePhoneFixedMd.style.opacity = '0';
                redTabletRelativeMd.style.transition = 'opacity 0s';
                redTabletRelativeMd.style.opacity = '0';
                redTabletFixedMd.style.transition = 'opacity 0s';
                redTabletFixedMd.style.opacity = '1';
                blueTabletRelativeMd.style.transition = 'opacity 0s';
                blueTabletRelativeMd.style.opacity = '0';
                blueTabletFixedMd.style.transition = 'opacity 0s';
                blueTabletFixedMd.style.opacity = '0';
            }, 10);
        } else if ((redSoftwareButtonMdRectBottom < 1) && ((bluePhoneRelativeMdRectTop >= window.innerHeight / 3 && bluePhoneRelativeMdRectTop !== 0) || (blueTabletRelativeMdRectTop >= window.innerHeight / 4.6 && blueTabletRelativeMdRectTop !== 0))) {
            redExpandAndContract = 2;
            redFixedAndRelative = 2;
            fadeOutAndIn = 2;
            blueRelativeAndFixed = 1;
            blueContractAndExpand = 1;
            setTimeout(() => {
                projectsContainerMd.style.transition = 'width 0s, background-color 0s, background-image 0s, border-radius 0s';
                projectsContainerMd.style.width = '100%';
                projectsContainerMd.style.backgroundColor = 'rgb(23, 23, 132)';
                projectsContainerMd.style.backgroundImage = 'linear-gradient(to right, transparent 0%, black 100%)';
                projectsContainerMd.style.borderRadius = '0';
                redPhoneRelativeMd.style.transition = 'opacity 0s';
                redPhoneRelativeMd.style.opacity = '0';
                redPhoneFixedMd.style.transition = 'opacity 0s';
                redPhoneFixedMd.style.opacity = '0';
                bluePhoneRelativeMd.style.transition = 'opacity 0s';
                bluePhoneRelativeMd.style.opacity = '0';
                bluePhoneFixedMd.style.transition = 'opacity 0s';
                bluePhoneFixedMd.style.opacity = '1';
                redTabletRelativeMd.style.transition = 'opacity 0s';
                redTabletRelativeMd.style.opacity = '0';
                redTabletFixedMd.style.transition = 'opacity 0s';
                redTabletFixedMd.style.opacity = '0';
                blueTabletRelativeMd.style.transition = 'opacity 0s';
                blueTabletRelativeMd.style.opacity = '0';
                blueTabletFixedMd.style.transition = 'opacity 0s';
                blueTabletFixedMd.style.opacity = '1';
            }, 10);
        } else if (((bluePhoneRelativeMdRectTop < window.innerHeight / 3 && bluePhoneRelativeMdRectTop !== 0) ||  (blueTabletRelativeMdRectTop < window.innerHeight / 4.6 && blueTabletRelativeMdRectTop !== 0)) && projectsContainerMdRectBottom >= window.innerHeight / 2) {
            redExpandAndContract = 2;
            redFixedAndRelative = 2;
            fadeOutAndIn = 2;
            blueRelativeAndFixed = 2;
            blueContractAndExpand = 1;
            setTimeout(() => {
                projectsContainerMd.style.transition = 'width 0s, background-color 0s, background-image 0s, border-radius 0s';
                projectsContainerMd.style.width = '100%';
                projectsContainerMd.style.backgroundColor = 'rgb(23, 23, 132)';
                projectsContainerMd.style.backgroundImage = 'linear-gradient(to right, transparent 0%, black 100%)';
                projectsContainerMd.style.borderRadius = '0';
                redPhoneRelativeMd.style.transition = 'opacity 0s';
                redPhoneRelativeMd.style.opacity = '0';
                redPhoneFixedMd.style.transition = 'opacity 0s';
                redPhoneFixedMd.style.opacity = '0';
                bluePhoneRelativeMd.style.transition = 'opacity 0s';
                bluePhoneRelativeMd.style.opacity = '1';
                bluePhoneFixedMd.style.transition = 'opacity 0s';
                bluePhoneFixedMd.style.opacity = '0';
                redTabletRelativeMd.style.transition = 'opacity 0s';
                redTabletRelativeMd.style.opacity = '0';
                redTabletFixedMd.style.transition = 'opacity 0s';
                redTabletFixedMd.style.opacity = '0';
                blueTabletRelativeMd.style.transition = 'opacity 0s';
                blueTabletRelativeMd.style.opacity = '1';
                blueTabletFixedMd.style.transition = 'opacity 0s';
                blueTabletFixedMd.style.opacity = '0';
            }, 10);
        };

        if (aboutSidePortraitMdRectTop >= window.innerHeight / 2) {                         // this block of code controls the functionality of the 'about-container-md' element
            aboutTop2LineMd.style.transition = 'margin-right 0s';
            aboutTop2LineMd.style.marginRight = '-200px';
            if (window.innerWidth >= 1280) {
                aboutTop1LineMd.style.transition = 'margin-right .75s';
                aboutTop1LineMd.style.marginRight = '1100px';
                aboutTop3LineMd.style.transition = 'margin-right .75s';
                aboutTop3LineMd.style.marginRight = '1100px'; 
            } else if (window.innerWidth < 1280) {
                aboutTop1LineMd.style.transition = 'margin-right .75s';
                aboutTop1LineMd.style.marginRight = '700px';
                aboutTop3LineMd.style.transition = 'margin-right .75s';
                aboutTop3LineMd.style.marginRight = '700px'; 
            }
            aboutTop1SpinnerSmallerMd.style.transition = 'opacity 0s';
            aboutTop1SpinnerSmallerMd.style.opacity = '1';
            aboutTop1SpinnerBiggerMd.style.transition = 'opacity 0s';
            aboutTop1SpinnerBiggerMd.style.opacity = '1';
            aboutTop2SpinnerBiggerMd.style.transition = 'opacity 0s';
            aboutTop2SpinnerBiggerMd.style.opacity = '0';
            aboutTop2SpinnerSmallerMd.style.transition = 'opacity 0s';
            aboutTop2SpinnerSmallerMd.style.opacity = '0';
            aboutTop3SpinnerBiggerMd.style.transition = 'opacity 0s';
            aboutTop3SpinnerBiggerMd.style.opacity = '0';
            aboutTop3SpinnerSmallerMd.style.transition = 'opacity 0s';
            aboutTop3SpinnerSmallerMd.style.opacity = '0';
            aboutTop4SpinnerBiggerMd.style.transition = 'opacity 0s';
            aboutTop4SpinnerBiggerMd.style.opacity = '0';
            aboutTop4SpinnerSmallerMd.style.transition = 'opacity 0s';
            aboutTop4SpinnerSmallerMd.style.opacity = '0';
        } else if (aboutEducationDivMdRectTop >= window.innerHeight / 2 && aboutSidePortraitMdRectTop < window.innerHeight / 2 ) {
            aboutTop1LineMd.style.transition = 'margin-right 0s';
            aboutTop1LineMd.style.marginRight = '-200px';
            aboutTop2LineMd.style.transition = 'margin-right 0s';
            aboutTop2LineMd.style.marginRight = '-200px';
            if (window.innerWidth >= 1280) {
                aboutTop3LineMd.style.transition = 'margin-right .75s';
                aboutTop3LineMd.style.marginRight = '1100px'; 
            } else if (window.innerWidth < 1280) {
                aboutTop3LineMd.style.transition = 'margin-right .75s';
                aboutTop3LineMd.style.marginRight = '700px'; 
            }
            aboutTop1SpinnerSmallerMd.style.transition = 'opacity 0s';
            aboutTop1SpinnerSmallerMd.style.opacity = '0';
            aboutTop1SpinnerBiggerMd.style.transition = 'opacity 0s';
            aboutTop1SpinnerBiggerMd.style.opacity = '0';
            aboutTop2SpinnerBiggerMd.style.transition = 'opacity 0s';
            aboutTop2SpinnerBiggerMd.style.opacity = '1';
            aboutTop2SpinnerSmallerMd.style.transition = 'opacity 0s';
            aboutTop2SpinnerSmallerMd.style.opacity = '1';
            aboutTop3SpinnerBiggerMd.style.transition = 'opacity 0s';
            aboutTop3SpinnerBiggerMd.style.opacity = '0';
            aboutTop3SpinnerSmallerMd.style.transition = 'opacity 0s';
            aboutTop3SpinnerSmallerMd.style.opacity = '0';
            aboutTop4SpinnerBiggerMd.style.transition = 'opacity 0s';
            aboutTop4SpinnerBiggerMd.style.opacity = '0';
            aboutTop4SpinnerSmallerMd.style.transition = 'opacity 0s';
            aboutTop4SpinnerSmallerMd.style.opacity = '0';
        } else if (aboutEducationDivMdRectBottom + 70 >= window.innerHeight / 2 && aboutEducationDivMdRectTop < window.innerHeight / 2) {
            aboutTop1LineMd.style.transition = 'margin-right 0s';
            aboutTop1LineMd.style.marginRight = '-200px';
            if (window.innerWidth >= 1280) {
                aboutTop2LineMd.style.transition = 'margin-right .75s';
                aboutTop2LineMd.style.marginRight = '1100px';
                aboutTop3LineMd.style.transition = 'margin-right .75s';
                aboutTop3LineMd.style.marginRight = '1100px'; 
            } else if (window.innerWidth < 1280) {
                aboutTop2LineMd.style.transition = 'margin-right .75s';
                aboutTop2LineMd.style.marginRight = '700px';
                aboutTop3LineMd.style.transition = 'margin-right .75s';
                aboutTop3LineMd.style.marginRight = '700px'; 
            }
            aboutTop1SpinnerSmallerMd.style.transition = 'opacity 0s';
            aboutTop1SpinnerSmallerMd.style.opacity = '0';
            aboutTop1SpinnerBiggerMd.style.transition = 'opacity 0s';
            aboutTop1SpinnerBiggerMd.style.opacity = '0';
            aboutTop2SpinnerBiggerMd.style.transition = 'opacity 0s';
            aboutTop2SpinnerBiggerMd.style.opacity = '0';
            aboutTop2SpinnerSmallerMd.style.transition = 'opacity 0s';
            aboutTop2SpinnerSmallerMd.style.opacity = '0';
            aboutTop3SpinnerBiggerMd.style.transition = 'opacity 0s';
            aboutTop3SpinnerBiggerMd.style.opacity = '1';
            aboutTop3SpinnerSmallerMd.style.transition = 'opacity 0s';
            aboutTop3SpinnerSmallerMd.style.opacity = '1';
            aboutTop4SpinnerBiggerMd.style.transition = 'opacity 0s';
            aboutTop4SpinnerBiggerMd.style.opacity = '0';
            aboutTop4SpinnerSmallerMd.style.transition = 'opacity 0s';
            aboutTop4SpinnerSmallerMd.style.opacity = '0';
        } else if (aboutEducationDivMdRectBottom + 70 < window.innerHeight / 2) {
            aboutTop1LineMd.style.transition = 'margin-right 0s';
            aboutTop1LineMd.style.marginRight = '-200px';
            aboutTop3LineMd.style.transition = 'margin-right 0s';
            aboutTop3LineMd.style.marginRight = '-200px';
            if (window.innerWidth >= 1280) {
                aboutTop2LineMd.style.transition = 'margin-right .75s';
                aboutTop2LineMd.style.marginRight = '1100px';
            } else if (window.innerWidth < 1280) {
                aboutTop2LineMd.style.transition = 'margin-right .75s';
                aboutTop2LineMd.style.marginRight = '700px';
            }
            aboutTop1SpinnerSmallerMd.style.transition = 'opacity 0s';
            aboutTop1SpinnerSmallerMd.style.opacity = '0';
            aboutTop1SpinnerBiggerMd.style.transition = 'opacity 0s';
            aboutTop1SpinnerBiggerMd.style.opacity = '0';
            aboutTop2SpinnerBiggerMd.style.transition = 'opacity 0s';
            aboutTop2SpinnerBiggerMd.style.opacity = '0';
            aboutTop2SpinnerSmallerMd.style.transition = 'opacity 0s';
            aboutTop2SpinnerSmallerMd.style.opacity = '0';
            aboutTop3SpinnerBiggerMd.style.transition = 'opacity 0s';
            aboutTop3SpinnerBiggerMd.style.opacity = '0';
            aboutTop3SpinnerSmallerMd.style.transition = 'opacity 0s';
            aboutTop3SpinnerSmallerMd.style.opacity = '0';
            aboutTop4SpinnerBiggerMd.style.transition = 'opacity 0s';
            aboutTop4SpinnerBiggerMd.style.opacity = '1';
            aboutTop4SpinnerSmallerMd.style.transition = 'opacity 0s';
            aboutTop4SpinnerSmallerMd.style.opacity = '1';
        };
    };
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

export {homeScroll, homeResize}; 