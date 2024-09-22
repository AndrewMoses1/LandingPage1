import './App.css';
import React, { useEffect } from 'react';
import {homeScroll, homeResize} from './index.js';
import homeBgXs from './Media/bgTall1.png';
import homeBgMd from './Media/bgSide.png';
import gitHubLogo from './Media/gitHubLogo.png';
import googleLogo from './Media/googleLogo.png';
import outlookLogo from './Media/outlookLogo.png';
import mobileMenuIconShow from './Media/mobileMenuIconShow.png';
import mobileMenuIconExit from './Media/mobileMenuIconExit.png';
import redPhone from './Media/redPhone.png';
import bluePhone from './Media/bluePhone.png';
import redTablet from './Media/redTablet.png';
import blueTablet from './Media/blueTablet.png';
import aboutTextXs from './Media/aboutTextXs.png';
import quotationMarksXs from './Media/quotationMarksXs.png';
import sidePortrait from './Media/sidePortrait.jpg';
import graduationCap from './Media/graduationCap.png';
import checkMark from './Media/checkMark.png';
import lightBulb from './Media/lightBulb.jpg';
import bracketImageXs from './Media/bracketImageXs.png';
import swirveGrayTransitionXs from './Media/swirveGrayTransitionXs.png';
import swirveGrayTransitionMd from './Media/swirveGrayTransitionMd.png';
import swirveGrayTransitionXl from './Media/swirveGrayTransitionXl.png';
import swirveBlueTransitionXl from './Media/swirveBlueTransitionXl.png';
import swirveBlueTransitionMd from './Media/swirveBlueTransitionMd.png';
import dotsIconMd from './Media/dotsIconMd.png';
import htmlLogoMd from './Media/htmlLogoMd.webp';
import cssLogoMd from './Media/cssLogoMd.png';
import javascriptLogoMd from './Media/javascriptLogoMd.webp';
import reactLogoMd from './Media/reactLogoMd.png';
import angularLogoMd from './Media/angularLogoMd.png';
import vueLogoMd from './Media/vueLogoMd.png';
import springBootLogoMd from './Media/springBootLogoMd.png';
import dotNetLogoMd from './Media/dotNetLogoMd.png';
import djangoLogoMd from './Media/djangoLogoMd.png';
import laravelLogoMd from './Media/laravelLogoMd.png';
import javaLogoMd from './Media/javaLogoMd.png';
import cSharpLogoMd from './Media/csharpLogoMd.png';
import pythonLogoMd from './Media/pythonLogoMd.png';
import phpLogoMd from './Media/phpLogoMd.png';
import photoshopLogoMd from './Media/photoshopLogoMd.png';
import illustratorLogoMd from './Media/illustratorLogoMd.png';
import figmaLogoMd from './Media/figmaLogoMd.webp';
import azureLogoMd from './Media/azureLogoMd.png';
import googleCloudLogoMd from './Media/googleCloudLogoMd.png';
import bootstrapLogoMd from './Media/bootstrapLogoMd.png';
import sassLogoMd from './Media/sassLogoMd.png';
import tailwindLogoMd from './Media/tailwindLogoMd.webp';
import procreateLogoMd from './Media/procreateLogoMd.png';
import awsLogoMd from './Media/awsLogoMd.png';
import mysqlLogoMd from './Media/mysqlLogoMd.png';
import vscLogoMd from './Media/vscLogoMd.png';
import playIconMd from './Media/playIconMd.png';
import splitIconMd from './Media/splitIconMd.png';
import searchIconMd from './Media/searchIconMd.png';
import contactTextXs from './Media/contactTextXs.png';
import azureBadgeXs from './Media/azureBadgeXs.png';
import homeIconMd from './Media/homeIconMd.png';
import workspaceIconMd from './Media/workspaceIconMd.png';
import phoneImageXs from './Media/phoneImageXs.png';
import frontPortraitXs from './Media/frontPortraitXs.png';
import binaryImageXs from './Media/binaryImageXs.png';
import snhuLogoXs from './Media/snhuLogoXs.webp';
import contactRectangleMd from './Media/contactRectangleMd.png';
import googleMailContactCardMd from './Media/googleMailContactCardMd9.png';
import iCloudMailContactCardMd from './Media/iCloudMailContactCardMd.png';
import snhuMailContactCardMd from './Media/snhuMailContactCardMd2.png';
import microsoftTeamsContactCardMd from './Media/microsoftTeamsContactCardMd.png';
import iosNotificationContactCardMd from './Media/iosNotificationContactCardMd.png';
import homeAddressContactCardMd from './Media/homeAddressContactCardMd.png';
import contactMenuIconMd from './Media/contactMenuIconMd.png';
import contactHomeIconMd from './Media/contactHomeIconMd.png';
import halfCircleIconMd from './Media/halfCircleIconMd.png';
import quarterCircleIconMd from './Media/quarterCircleIconMd.png';

function App() {

    function scrollToHome() {
        var mobileMenu = document.querySelector('.mobile-menu');
        var mobileMenuLinks = document.querySelector('.mobile-menu-links');
        var mobileMenuButtons = document.querySelector('.mobile-menu-buttons');
        var mobileMenuLogos = document.querySelector('.mobile-menu-logos');
        mobileMenu.style.zIndex = '10';
        mobileMenu.style.borderBottom = '0';
        mobileMenuLinks.style.opacity = '0';
        mobileMenuButtons.style.opacity = '0';
        mobileMenuLogos.style.opacity = '0';
        document.body.scrollIntoView({ behavior: 'auto', block: 'start'});
    };

    function scrollToProjects() {
        var mobileMenu = document.querySelector('.mobile-menu');
        var mobileMenuLinks = document.querySelector('.mobile-menu-links');
        var mobileMenuButtons = document.querySelector('.mobile-menu-buttons');
        var mobileMenuLogos = document.querySelector('.mobile-menu-logos');
        var projectsContainerXs = document.querySelector('.projects-container-xs');
        var projectsContainerXsRectTop = projectsContainerXs.getBoundingClientRect().top;
        var projectsContainerMd = document.querySelector('.projects-container-md');
        var projectsContainerMdRectTop = projectsContainerMd.getBoundingClientRect().top;
        mobileMenu.style.zIndex = '10';
        mobileMenu.style.borderBottom = '0';
        mobileMenuLinks.style.opacity = '0';
        mobileMenuButtons.style.opacity = '0';
        mobileMenuLogos.style.opacity = '0';
        if (window.innerWidth < 768) {
            window.scrollBy({
                top: projectsContainerXsRectTop,
                behavior: 'auto'
            });
        } else {
            window.scrollBy({
                top: projectsContainerMdRectTop,
                behavior: 'auto'
            });
        }
    };

    function scrollToAbout() {
        var mobileMenu = document.querySelector('.mobile-menu');
        var mobileMenuLinks = document.querySelector('.mobile-menu-links');
        var mobileMenuButtons = document.querySelector('.mobile-menu-buttons');
        var mobileMenuLogos = document.querySelector('.mobile-menu-logos');
        var aboutContainerXs = document.querySelector('.about-container-xs');
        var aboutContainerXsRectTop = aboutContainerXs.getBoundingClientRect().top;
        var aboutContainerMd = document.querySelector('.about-container-md');
        var aboutContainerMdRectTop = aboutContainerMd.getBoundingClientRect().top;
        mobileMenu.style.zIndex = '10';
        mobileMenu.style.borderBottom = '0';
        mobileMenuLinks.style.opacity = '0';
        mobileMenuButtons.style.opacity = '0';
        mobileMenuLogos.style.opacity = '0';
        if (window.innerWidth < 768) {
            window.scrollBy({
                top: aboutContainerXsRectTop * 1.01,
                behavior: 'auto'
            });
        } else {
            window.scrollBy({
                top: aboutContainerMdRectTop,
                behavior: 'auto'
            });
        }
    };

    function scrollToContact() {
        var mobileMenu = document.querySelector('.mobile-menu');
        var mobileMenuLinks = document.querySelector('.mobile-menu-links');
        var mobileMenuButtons = document.querySelector('.mobile-menu-buttons');
        var mobileMenuLogos = document.querySelector('.mobile-menu-logos');
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
        var contactContainerXs = document.querySelector('.contact-container-xs');
        var contactContainerXsRectTop = contactContainerXs.getBoundingClientRect().top;
        var contactContainerMd = document.querySelector('.contact-container-md');
        var contactContainerMdRectTop = contactContainerMd.getBoundingClientRect().top;
        mobileMenu.style.zIndex = '10';
        mobileMenu.style.borderBottom = '0';
        mobileMenuLinks.style.opacity = '0';
        mobileMenuButtons.style.opacity = '0';
        mobileMenuLogos.style.opacity = '0';
        if (window.innerWidth < 768) {
            window.scrollBy({
                top: contactContainerXsRectTop * .982,
                behavior: 'auto'
            });
            
        } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
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
            window.scrollBy({
                top: contactContainerMdRectTop * 1.02,
                behavior: 'auto'
            });
        } else {
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
            window.scrollBy({
                top: contactContainerMdRectTop * 1.06,
                behavior: 'auto'
            });
        }
    };
    
    function showMenu() {
        var mobileMenu = document.querySelector('.mobile-menu');
        var mobileMenuLinks = document.querySelector('.mobile-menu-links');
        var mobileMenuButtons = document.querySelector('.mobile-menu-buttons');
        var mobileMenuLogos = document.querySelector('.mobile-menu-logos');
        mobileMenuLinks.style.transition = 'opacity .3s';
        setTimeout(() => {
            mobileMenuLinks.style.opacity = '1';
        }, 100);
        setTimeout(() => {
            mobileMenuButtons.style.opacity = '1';
        }, 140);
        setTimeout(() => {
            mobileMenuLogos.style.opacity = '1';
        }, 180);
        mobileMenu.style.zIndex = '12';
        mobileMenu.style.transition = 'height .3s';
        if (window.innerWidth < 768) {
        mobileMenu.style.height = '610px';
        };
        if (window.innerWidth >= 768 && window.innerWidth < 1024) {
            mobileMenu.style.height = '690px';
        };
        if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
            mobileMenu.style.height = '760px';
        };
        mobileMenu.style.borderBottom = '2px solid white';
    };

    function exitMenu() {
        var mobileMenu = document.querySelector('.mobile-menu');
        var mobileMenuLinks = document.querySelector('.mobile-menu-links');
        var mobileMenuButtons = document.querySelector('.mobile-menu-buttons');
        var mobileMenuLogos = document.querySelector('.mobile-menu-logos');
        mobileMenu.style.transition = 'height .3s';
        mobileMenuLinks.style.transition = 'opacity .3s';
        mobileMenuLinks.style.opacity = '0';
        mobileMenuButtons.style.opacity = '0';
        mobileMenuLogos.style.opacity = '0';
        if(window.innerWidth < 768) {
            mobileMenu.style.height = '85px';
        }
        if(window.innerWidth >= 768) {
            mobileMenu.style.height = '130px';
        }
        setTimeout(() => {
            mobileMenu.style.zIndex = '10';
            mobileMenu.style.borderBottom = '0';
        }, 240);
    };

    // these variables are named to represent the elements they correspond to, the phrases 'Xs' or 'Md' etc. indicate that that element first appears starting at that breakpoint (this entire website starts from 'Xs' and moves towards '4Xl') if they do not have an 'Xs' or 'Md' etc. in their name then they apply to all or most breakpoints and screen sizes
        // as far as organization and variable naming is concerned, I try to reserve the word 'container' for elements that correspond to a major sectional element within the html that actually has a hyphenated class name assigned to it, and then use the word 'div' to represent a sub-section of one of those major elements
    useEffect(() => {
        var redExpandAndContract = 1;
        var redFixedAndRelative = 1;
        var fadeOutAndIn = 1;
        var blueRelativeAndFixed = 1;
        var blueContractAndExpand = 1;
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

// MOST OF THE CODE BELOW IS TO CONTROL THE STATE OF THE PAGE ONCE IT IS LOADED OR REFRESHED
        if (window.innerHeight >= 950) {                    // the code below is used to make the "projects-container-md" presentation more centered depending on the screen height
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

        if (window.innerWidth >= 460) {
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






// ONE OF THE MAJOR BREAKING POINTS THAT CONTROLS THE STATE OF THE PAGE UPON LOADING OR REFRESHING
        if (window.innerWidth < 768) {
            if (projectsContainerXsRectTop >= window.innerHeight / 2) {                         // the code below controls the functionality for the 'projects-container-xs' element
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
                    bluePhoneFixedXs.style.transition = 'opacity 0s';
                    bluePhoneFixedXs.style.opacity = '0';
                    bluePhoneFixedXs.style.transition = 'opacity 0s';
                    bluePhoneFixedXs.style.opacity = '0';
                    redTabletRelativeSm.style.transition = 'opacity 0s';
                    redTabletRelativeSm.style.opacity = '1';
                    redTabletFixedSm.style.transition = 'opacity 0s';
                    redTabletFixedSm.style.opacity = '0';
                    blueTabletFixedSm.style.transition = 'opacity 0s';
                    blueTabletFixedSm.style.opacity = '0';
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
                    bluePhoneRelativeXs.style.transition = 'opacity 0s';
                    bluePhoneRelativeXs.style.opacity = '0';
                    redTabletRelativeSm.style.transition = 'opacity 0s';
                    redTabletRelativeSm.style.opacity = '0';
                    redTabletFixedSm.style.transition = 'opacity 0s';
                    redTabletFixedSm.style.opacity = '1';
                    blueTabletRelativeSm.style.transition = 'opacity 0s';
                    blueTabletRelativeSm.style.opacity = '0';
                    blueTabletRelativeSm.style.transition = 'opacity 0s';
                    blueTabletRelativeSm.style.opacity = '0';
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





// ONE OF THE MAJOR BREAKING POINTS THAT CONTROLS THE STATE OF THE PAGE UPON LOADING OR REFRESHING
        if (window.innerWidth >= 768) {
            if (projectsContainerMdRectTop >= window.innerHeight / 2) {                 // the code below controls the functionality for the 'projects-container-md' element
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
                    redTabletFixedMd.style.transition = 'opacity 0s';
                    redTabletFixedMd.style.opacity = '0';
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

            if (aboutSidePortraitMdRectTop >= window.innerHeight / 2) {                 // the code below controls the functionality for the 'about-container-md' element
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

            window.addEventListener('resize', homeResize); 
            window.addEventListener('scroll', homeScroll);
        return () => {
            window.removeEventListener('resize', homeResize);
            window.removeEventListener('scroll', homeScroll);
        };
    }, []);
    return (
        
        // xs represents the screen size below the 520 breakpoint even though it is not an actual breakpoint
            // there are a few elements added below to fix glitch issues, often times if the element seems redundant or obscure then it most likely had something to do with a glitch causing undesirable outcomes
        <div className='entire-website-container flex flex-col items-center overflow-hidden'>

            <div className='mobile-menu absolute flex flex-col h-[85px] w-[94.5%] mt-[20px] bg-gradient-to-b from-30% from-black to-100% to-neutral-500 rounded-[15px] z-10 md:mt-[16px] md:rounded-[38px] lg:mt-[53px] xl:hidden'>
                <nav className='flex flex-row justify-between h-[50px] w-[100%] rounded-[15px] md:h-[101px]'>
                    <span className='mt-[4px] ml-[17px] text-[28px] text-white font-[Bitter] font-[500] cursor-pointer md:mt-[14.9px] md:ml-[31.9px] md:text-[37px]'>Andrew</span>
                    <span className='absolute mt-[38px] ml-[39.8px] text-[28px] text-blue-400 font-[Bitter] font-[500] cursor-pointer md:mt-[62.2px] md:ml-[80px] md:text-[37px]'>{ '{ Smith }' }</span>
                    <img className='mobile-menu-show h-[49px] w-[48px] mt-[19px] mr-[19px] cursor-pointer md:h-[60px] md:w-[60px] md:mt-[33.7px] md:mr-[35px]' src={mobileMenuIconExit} alt="A Clipart Of An X Exit Button" onClick={exitMenu}/>
                </nav>
                <ul className='mobile-menu-links flex flex-col items-center gap-[17px] opacity-0 mt-[96px] md:mt-[60px] md:gap-[20px] lg:mt-[95px]'>
                    <li className='text-[26px] text-white font-Poppins font-[500] cursor-pointer md:text-[27px]' onClick={scrollToHome}>Home</li>
                    <li className='text-[26px] text-white font-Poppins font-[500] cursor-pointer md:text-[27px]' onClick={scrollToProjects}>Projects</li>
                    <li className='text-[26px] text-white font-Poppins font-[500] cursor-pointer md:text-[27px]' onClick={scrollToAbout}>About</li>
                    <li className='text-[26px] text-white font-Poppins font-[500] cursor-pointer md:text-[27px]' onClick={scrollToContact}>Contact</li>
                </ul>
                <div className='mobile-menu-buttons flex flex-row self-center  mt-[46px] gap-[20px] opacity-0 md:mt-[50px] md:gap-[250px] lg:gap-[400px]'>
                    <a href="mailto:andrew.moses.smith@gmail.com"><button className='p-4 text-white bg-blue-600 font-Archivo font-[500] rounded-[40px] md:p-[17px] md:rounded-[40px] '>Send Me An Email</button></a>
                    <a href="https://artistix.blob.core.windows.net/artistix/AndrewSmithResume.png"><button className='p-4 text-white bg-black font-Archivo font-[500] rounded-[40px] md:p-[17px] md:rounded-[40px]'>View Resume</button></a>
                </div>
                <div className='mobile-menu-logos flex flex-row self-center mt-[53px] gap-[38px] opacity-0 md:mt-[60px] md:gap-[120px] lg:gap-[200px]'>
                    <a href="mailto:andrew.moses.smith@gmail.com"><img className='h-[57px] w-[57px] cursor-pointer md:h-[80px] md:w-[80px]' src={googleLogo} alt="A Google Logo" /></a>
                    <a href="mailto:andy.smith@snhu.edu"><img className='h-[57px] w-[57px] cursor-pointer md:h-[80px] md:w-[80px]' src={outlookLogo} alt="A Microsoft Outlook Logo" /></a>
                    <a href="https://github.com/AndrewMoses1"><img className='h-[57px] w-[57px] cursor-pointer md:h-[80px] md:w-[80px]' src={gitHubLogo} alt="A GitHub Logo" /></a>
                </div>
            </div>

            <div className='home-container flex flex-col h-[870px] w-[94.5%] mt-[20px] bg-black rounded-[15px] z-[11] md:h-[690px] md:w-[94.5%] md:mt-[15px] md:rounded-[40px] md:z-[11] md:overflow-hidden lg:h-[760px] lg:mt-[50px] 3xl:w-[1550px]'>
                <img className="hidden self-center md:flex h-[390px] w-[600px] mt-[155px] ml-[50px] scale-[1.8] lg:self-center lg:min-h-[845px] lg:h-[845px] lg:min-w-[1400px] lg:w-[1400px] lg:mt-[-43px] lg:ml-[200px] lg:scale-[.9] xl:self-center xl:ml-[400px]" src={homeBgMd} alt="Background For The Home Section" />
                <div className='hidden md:flex absolute  md:h-[690px] md:w-[80%] md:rounded-[40px] lg:h-[760px] lg:w-[94.5%] xl:min-w-[1730px] xl:w-[1730px]'></div>
                <div className='hidden md:flex absolute md:h-[690px] md:w-[94.5%] md:bg-gradient-to-b md:from-black md:from-0% md:to-transparent md:to-20% md:opacity-75 md:rounded-[40px] 3xl:w-[1548px]'></div>
                <nav className='flex flex-row justify-between h-[70px] w-[100%] rounded-[15px] md:-mt-[540px] md:z-[1] lg:mt-[-795px] 3xl:w-[1440px] z-[20]'>
                    <span className='mt-[4px] ml-[17px] text-[28px] text-white font-[Bitter] font-[500] cursor-pointer md:mt-[10.8px] md:ml-[32px] md:text-[37px]'>Andrew</span>
                    <span className='absolute mt-[38px] ml-[39.8px] text-[28px] text-blue-400 font-[Bitter] font-[500] cursor-pointer md:mt-[58px] md:ml-[80px] md:text-[37px]'>{ '{ Smith }' }</span>
                    <ul className='hidden xl:flex flex-row mt-[45px] ml-[100px] text-xl gap-10'>
                        <li className='text-white font-[Poppins] font-[300] cursor-pointer transition-all duration-[.2s] hover:text-blue-400' onClick={scrollToHome}>Home</li>
                        <li className='text-white font-[Poppins] font-[300] cursor-pointer transition-all duration-[.2s] hover:text-blue-400' onClick={scrollToProjects}>Projects</li>
                        <li className='text-white font-[Poppins] font-[300] cursor-pointer transition-all duration-[.2s] hover:text-blue-400' onClick={scrollToAbout}>About</li>
                        <li className='text-white font-[Poppins] font-[300] cursor-pointer transition-all duration-[.2s] hover:text-blue-400' onClick={scrollToContact}>Contact</li>
                    </ul>
                    <a href="mailto:andrew.moses.smith@gmail.com"><button className='hidden xl:flex justify-center items-center h-[55px] w-[180px] mt-[32px] mr-[40px] text-[15px] text-white font-[600] border-2 border-white rounded-[30px] transition-[background-color] duration-[.2s] hover:bg-white hover:text-black 2xl:w-[225px] 2xl:mr-[30px] 2xl:text-[16px] 3xl:w-[250px] 3xl:text-[17px]'>Send Me An Email</button></a>
                    <img className='mobile-menu-show h-[49px] w-[48px] mt-[19px] mr-[19px] cursor-pointer md:h-[60px] md:w-[60px] md:mt-[29px] md:mr-[35px] xl:hidden' src={mobileMenuIconShow} alt="A Clipart Of A Standard Mobile Hamburger Menu" onClick={showMenu} />
                </nav>
                <div className='absolute flex flex-col w-[300px] mt-[122px] ml-[20px] gap-[10px] z-[21] md:hidden'>
                    <span className='flex w-[300px] text-[33.8px] text-white font-[Archivo] font-[700] md:hidden'>Build High-Converting Websites That Captivate</span>
                    <span className='w-[300px] text-[14.2px] text-gray-300 font-[Bitter] font-[500] z-[1] md:hidden'>Creating appealing design aesethics and keeping up with the latest trends in web development will keep customers browsing through your site for longer periods of time</span>
                </div>
                <div className='hidden md:flex flex-col mr-[33vw] mt-[120px] ml-[20px] z-[1] lg:ml-[10px] xl:mt-[160px] xl:ml-[70px] 2xl:ml-[30px] 3xl:ml-[80px] 3xl:self-start'>
                    <span className='hidden md:flex w-[400px] ml-[21px] text-center text-[36px] text-white font-[Archivo] font-[700] lg:w-[615px] lg:text-[54px] xl:w-[800px] xl:text-[64px] xl:text-start'>Build High-Converting <br />Websites That Captivate</span>
                    <span className='hidden md:flex w-[440px] mt-[50px] text-center text-[19px] text-gray-300 font-[Bitter] font-[500] z-[1] lg:w-[620px] lg:mt-[20px] lg:ml-[30px] lg:text-[23px] xl:w-[680px] xl:mt-[25px] xl:text-start xl:text-[25px]'>Creating appealing design aesethics and keeping up with the latest trends in web development will keep customers browsing through your site for longer periods of time</span>
                    <div className='flex flex-row'>
                        <a href="mailto:andrew.moses.smith@gmail.com"><button className='absolute h-[60px] w-[190px] mt-[60px] ml-[120px] bg-blue-600 text-[20px] text-white font-[Archivo] rounded-[30px] xl:hover:w-[230px] xl:hover:bg-indigo-600 lg:mt-[60px] lg:ml-[234px] xl:ml-[20px] xl:transition-[width] xl:duration-[.2s]'>Contact Me</button></a>
                        <a href="https://github.com/AndrewMoses1"><img className='hidden xl:flex w-[60px] h-[60px] mt-[58px] ml-[310px] cursor-pointer' src={gitHubLogo} alt="A GitHub Logo" /></a>
                        <a href="mailto:andrew.moses.smith@gmail.com"><img className='hidden xl:flex w-[63px] h-[63px] mt-[57px] ml-[60px] cursor-pointer' src={googleLogo} alt="A Google Logo" /></a>
                        <a href="mailto:andy.smith@snhu.edu"><img className='hidden xl:flex w-[65px] h-[65px] mt-[56px] ml-[63px] cursor-pointer' src={outlookLogo} alt="A Microsoft Outlook Logo" /></a>
                    </div>
                </div>
                <div className='flex flex-col items-center mt-[25px] rounded-[15px] z-[20] overflow-hidden md:hidden'>
                    <div className='absolute h-[670px] w-[94.5%] rounded-b-[15px] z-[30]'></div>
                    <img className='min-h-[1410px] h-[1410px] min-w-[1000px] w-[1000px] mt-[-360px] ml-[-10px] scale-[.7] rounded-[15px]' src={homeBgXs} alt="Mobile Background For The Home Section" />
                    <a className="absolute mt-[697px] z-[31]" href="mailto:andrew.moses.smith@gmail.com"><button className='pt-[10px] pb-[10px] pl-[15px] pr-[15px] bg-blue-600 text-[20px] text-white font-[Archivo] rounded-[7vw]'>Contact Me</button></a>
                </div>
            </div>

            <div className='browse-text flex flex-col items-center w-[80%] mt-[45px] opacity-0 translate-y-[-8.5vw] md:translate-y-[-70px] xl:w-[85%]'>
                <span className='flex md:hidden text-center text-[31px] text-blue-600 font-[Archivo] font-[600]'>Browse Through My<br />Portfolio and</span>
                <span className='flex md:hidden text-center text-[31px] text-black font-[Archivo] font-[600]'>See My Journey <br />for Yourself</span>
                <span className='flex md:hidden mt-[20px] text-gray-600 text-center text-[17px] font-[Archivo] font-[400]'>My web development journey has allowed me to see the importance of making a website feel fresh and modern.  There's nothing worse than scrolling through a website that feels dull and outdated.  If the content is not visually appealing or functionally intuitive, then the user is probably not going to be looking at the website for a long period of time.  This is especially true for companies the user is not familiar with.</span>
                <span className='hidden md:flex mt-[20px] text-[38px] text-blue-600 font-[Archivo] font-[600] leading-tight lg:text-[50px] xl:hidden'>Browse Through My Portfolio <br />Of Work</span>
                <span className='hidden md:flex mt-[-47.5px] ml-[148px] text-[38px] font-[Archivo] font-[600] leading-tight lg:mt-[-62px] lg:ml-[190px] lg:text-[50px] xl:hidden'>and See My Journey <br />for Yourself</span>
                <span className='hidden md:flex mt-[15px] text-center text-[25px] text-gray-600 font-[Archivo] font-[400] w-[730px] lg:w-[900px] xl:hidden'>My web development journey has allowed me to see the importance of making a website feel fresh and modern.  There's nothing worse than scrolling through a website that feels dull and outdated.  If the content is not visually appealing or functionally intuitive, then I am probably not going to be looking at the website for a long period of time.  This is especially true for companies I am not familiar with.</span>
                <span className='hidden xl:flex mt-[10px] ml-[35px] text-[60px] text-blue-600 font-[Archivo] font-[600] leading-tight'>Browse Through My Portfolio Of Work <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and See</span>
                <span className='hidden xl:flex mt-[-75px] ml-[245px] text-[60px] font-[Archivo] font-[600] leading-tight'>My Journey for Yourself</span>
                <span className='hidden xl:flex w-[1110px] mt-[20px] ml-[5px] text-center text-[25px] text-gray-600 font-[Archivo] font-[400]'>My web development journey has allowed me to see the importance of making a website feel fresh and modern.  There's nothing worse than scrolling through a website that feels dull and outdated.  If the content is not visually appealing or functionally intuitive, then the user is probably not going to be looking at the website for a long period of time.  This is especially true for companies the user is not familiar with.</span>
            </div>

            <div className='projects-container-xs flex flex-col h-[1650px] w-[94.5%] mt-[65px] bg-black rounded-[40px] overflow-x-hidden sm:h-[1650px] md:hidden'>
                <div className='flex flex-row justify-between self-center w-[140vw] sm:w-[128vw]'>
                    <div></div>
                    <img className='max-h-[450px] max-w-[330px] h-[450px] w-[330px] mt-[50px] sm:hidden' src={redPhone} alt='' />
                    <img className='hidden max-h-[450px] max-w-[580px] h-[450px] w-[580px] mt-[50px] sm:flex sm:mt-[-10px]' src={redTablet} alt='' />
                </div>
                <div className='flex flex-col self-center mt-[-100px] ml-[-20px] z-[3] sm:mt-[-20px]'>
                    <a href="https://workhubpro-production.up.railway.app/"><button className='w-[40vw] pt-[7px] pb-[7px] pl-[14px] pr-[14px] text-[20px] text-white bg-red-600 font-[Archivo] font-[400] rounded-[10vw] opacity-100'>View Project</button></a>
                    <span className='mt-[15px] text-[30px] text-white font-[Archivo] font-[600]'>Software Development</span>
                    <span className='w-[80vw] mt-[5px] text-[17px] text-white font-[Archivo] font-[100]'>Code efficiency and readability is something that I am constantly trying to improve.  With this in mind, I try to organize and structure the architecture of my projects in a manner that allows other developers to quickly understand the overall flow and purpose.</span>
                </div>
                <div className='flex flex-row justify-between self-center w-[140vw] sm:w-[128vw]'>
                    <div></div>
                    <img className='max-h-[450px] max-w-[330px] h-[450px] w-[330px] mt-[255px] opacity-0 sm:hidden' src={bluePhone} alt='' />
                    <img className='hidden max-h-[450px] max-w-[580px] h-[450px] w-[580px] mt-[255px] opacity-0 sm:flex' src={blueTablet} alt='' />
                </div>
                <div className='flex flex-col self-center mt-[-100px] ml-[-20px] z-[3] sm:mt-[-20px]'>
                    <a href="https://artistix.blob.core.windows.net/artistix/azureVideo.mp4"><button className='w-[40vw] pt-[7px] pb-[7px] pl-[14px] pr-[14px] text-[20px] text-white bg-blue-600 font-[Archivo] font-[400] rounded-[10vw] opacity-100'>View Video</button></a>
                    <span className='mt-[15px] text-[30px] text-white font-[Archivo] font-[600]'>Dev Ops Management</span>
                    <span className='w-[80vw] mt-[5px] text-[17px] text-white font-[Archivo] font-[100]'>I created a quick video demonstrating how to set up various aspects of a DevOps environment and explaining why each aspect is important. Although I am familiar with AWS and Google Cloud Platform, I recently received my Azure Fundamentals certification (AZ-900), so I chose Azure for this video.</span>
                </div>
            </div>

            <img className='fixed flex right-[-20.3vw] max-h-[450px] max-w-[331px] h-[450px] w-[331px] mt-[50px] z-[1] opacity-0 z-[2] sm:hidden' src={redPhone} alt='' />
            <img className='fixed flex right-[-20.3vw] max-h-[450px] max-w-[331px] h-[450px] w-[331px] mt-[50px] z-[1] opacity-0 z-[1] sm:hidden' src={bluePhone} alt='' />
            <img className='hidden sm:flex fixed right-[-14vw] max-h-[450px] max-w-[580px] h-[450px] w-[580px] mt-[-10px] z-[2] opacity-0 z-[2] md:hidden' src={redTablet} alt='' />
            <img className='hidden sm:flex fixed right-[-14vw] max-h-[450px] max-w-[580px] h-[450px] w-[580px] mt-[-10px] z-[1] opacity-0 z-[2] md:hidden' src={blueTablet} alt='' />

            <div className='projects-container-md hidden md:flex md:flex-col md:justify-between md:items-center md:h-[2250px] md:w-[94.5%] md:mt-[65px] md:pb-[100px] md:bg-black md:rounded-[40px] md:overflow-x-hidden'>
                <div className='flex flex-row justify-between w-[115vw] mt-[33vh] ml-[15vw] lg:w-[110vw] lg:ml-[7vw] xl:w-[107vw] 2xl:w-[103vw] 2xl:ml-[3vw] 3xl:w-[100vw] 4xl:ml-[-2vw]'>
                    <div className='flex flex-col w-[43vw] ml-[6vw] xl:w-[40vw]'>
                        <a href="https://workhubpro-production.up.railway.app/"><button className='w-[200px] pt-[7px] pb-[7px] pl-[14px] pr-[14px] text-[20px] text-white bg-red-600 font-[Archivo] font-[400] rounded-[10vw] opacity-100 lg:w-[230px] lg:text-[30px]'>View Project</button></a>
                        <span className='mt-[15px] text-[32px] text-white font-[Archivo] font-[600] lg:text-[43px]'>Software Development</span>
                        <span className='mt-[5px] text-[22px] text-white font-[Archivo] font-[100] lg:text-[26px]'>Code efficiency and readability is something that I am constantly trying to improve because I believe it saves a lot of time and money especially when working with teams.  With this in mind, I try to organize and structure the architecture of my projects in a manner that allows other developers to quickly understand the overall flow and purpose.  Ideally, I want users to enjoy scrolling through my websites without getting bored or frustrated because this will leave a good impression and they will be more likely to return.</span>
                    </div>
                    <img className='max-h-[660px] max-w-[500px] h-[660px] w-[500px] mt-[-6px] lg:max-h-[730px] lg:max-w-[550px] lg:h-[730px] lg:w-[550px] xl:hidden' src={redPhone} alt='' />
                    <img className='hidden xl:flex xl:max-h-[600px] xl:max-w-[800px] xl:h-[600px] xl:w-[800px] xl:mt-[-129px] 2xl:max-h-[700px] 2xl:max-w-[935px] 2xl:h-[700px] 2xl:w-[935px] 3xl:mr-[-1.6vw] 4xl:max-h-[800px] 4xl:max-w-[1100px] 4xl:h-[800px] 4xl:w-[1100px] 4xl:mr-[-4.2vw]' src={redTablet} alt='' />
                </div>
                <div className='flex flex-row justify-between w-[115vw] ml-[15vw] mb-[9vh] lg:w-[110vw] lg:ml-[7vw] xl:w-[107vw] xl:mb-[9vh] 2xl:w-[103vw] 2xl:mb-[1vh] 2xl:ml-[3vw] 3xl:w-[100vw]'>
                    <div className='flex flex-col w-[43vw] ml-[6vw] xl:w-[40vw]'>
                        <a href="https://artistix.blob.core.windows.net/artistix/azureVideo.mp4"><button className='w-[200px] pt-[7px] pb-[7px] pl-[14px] pr-[14px] text-[20px] text-white bg-blue-600 font-[Archivo] font-[400] rounded-[10vw] opacity-100 lg:w-[230px] lg:text-[30px]'>View Video</button></a>
                        <span className='mt-[15px] text-[32px] text-white font-[Archivo] font-[600] lg:text-[43px]'>Dev Ops Management</span>
                        <span className='mt-[5px] text-[22px] text-white font-[Archivo] font-[100] lg:text-[26px]'>I created a quick video demonstrating how to set up various aspects of a DevOps environment and explaining why each aspect is important. Although I am familiar with AWS and Google Cloud Platform, I recently received my Azure Fundamentals certification (AZ-900), so I chose Azure for this video. While DevOps is not typically within a developer’s core responsibilities, I have chosen to learn it to continuously improve my skills and gain a comprehensive understanding of the entire process, from start to finish.</span>
                    </div>
                    <img className='max-h-[660px] max-w-[500px] h-[660px] w-[500px] mt-[-6px] opacity-0 lg:max-h-[730px] lg:max-w-[550px] lg:h-[730px] lg:w-[550px] xl:hidden' src={bluePhone} alt='' />
                    <img className='hidden xl:flex xl:max-h-[600px] xl:max-w-[800px] xl:h-[600px] xl:w-[800px] xl:mt-[-129px] 2xl:max-h-[700px] 2xl:max-w-[935px] 2xl:h-[700px] 2xl:w-[935px] 3xl:mr-[-1.6vw] 4xl:max-h-[800px] 4xl:max-w-[1135px] 4xl:h-[800px] 4xl:w-[1135px]' src={blueTablet} alt='' />
                </div>
            </div>

            <img className='hidden fixed md:flex right-[-15vw] max-h-[660px] max-w-[500px] h-[660px] w-[500px] mt-[32.7vh] z-[2] opacity-0 lg:right-[-8.5vw] lg:max-h-[730px] lg:max-w-[550px] lg:h-[730px] lg:w-[550px] lg:mt-[16.5vh] xl:hidden' src={redPhone} alt='' />
            <img className='hidden fixed md:flex right-[-15vw] max-h-[660px] max-w-[500px] h-[660px] w-[500px] mt-[32.7vh] z-[1] opacity-0 lg:right-[-8.5vw] lg:max-h-[730px] lg:max-w-[550px] lg:h-[730px] lg:w-[550px] lg:mt-[16.5vh] xl:hidden' src={bluePhone} alt='' />
            <img className='hidden fixed xl:flex xl:right-[-7.6vw] xl:max-h-[600px] xl:max-w-[800px] xl:h-[600px] xl:w-[800px] xl:mt-[19.5vh] xl:opacity-0 xl:z-[2] 2xl:right-[-3.6vw] 2xl:max-h-[700px] 2xl:max-w-[935px] 2xl:h-[700px] 2xl:w-[935px] 4xl:max-h-[800px] 4xl:max-w-[1100px] 4xl:h-[800px] 4xl:w-[1100px]' src={redTablet} alt='' />
            <img className='hidden fixed xl:flex xl:right-[-7.6vw] xl:max-h-[600px] xl:max-w-[800px] xl:h-[600px] xl:w-[800px] xl:mt-[19.5vh] xl:opacity-0 xl:z-[1] 2xl:right-[-3.6vw] 2xl:max-h-[700px] 2xl:max-w-[935px] 2xl:h-[700px] 2xl:w-[935px] 4xl:max-h-[800px] 4xl:max-w-[1100px] 4xl:h-[800px] 4xl:w-[1100px]' src={blueTablet} alt='' />

            <div className='about-container-xs flex flex-col items-center w-[100%] md:hidden' style={{background: 'linear-gradient(to bottom, white 0%, rgb(245, 245, 245) 98.05%, black 98.05%, black 100%)'}}>
                <img className='absolute h-[55px] w-[55px] mt-[1230px] ml-[-292px] opacity-[.4] z-[1] sm:mt-[1180px]' src={quotationMarksXs} alt='' />
                <div className='absolute flex flex-col items-center h-[80px] w-[100%]'>
                    <img className='absolute h-[70px] w-[220px] mt-[85px] ml-[-150px] rotate-[-33deg]' src={aboutTextXs} alt='' />
                </div>
                <img className='h-[350px] w-[240px] mt-[140px] ml-[70px] rounded-tl-[70px] rounded-bl-[50px] rounded-tr-[8px] rounded-br-[8px] z-[2]' src={sidePortrait} alt='' />
                <div className='flex flex-col items-center justify-center mt-[40px]'>
                    <img className='h-[55px] w-[55px] mt-[-8vw] ml-[92vw] opacity-[.4] z-[1] sm:ml-[400px]' src={quotationMarksXs} alt='' />
                    <img className='absolute h-[100px] w-[100px] mt-[-670px] ml-[-220px] opacity-[.5] sm:mt-[-600px]' src={azureBadgeXs} alt='' />
                    <span className='w-[80%] mt-[-40px] text-center text-[20px] font-[Archivo] font-[400] z-[2] sm:mt-[-20px]'>I enjoy staying up-to-date with the latest technologies as well as developing a deeper understanding of current ones.  I am constantly improving my design skills so that my webpage layouts can be more aesthetically pleasing and influencial to the users who are viewing them.</span>
                </div>
                <div className='flex flex-col w-[280px] mt-[25px] ml-[30px] gap-[15px] bg-transparent z-[2]'>
                    <div className='flex flex-col items-center justify-center h-[170px] w-[100%] mt-[0] bg-white border-[5px] border-gray-200 rounded-tr-[50px] sm:mt-[10px]'>
                        <div className='flex flex-row ml-[-30px] gap-[20px]'>
                            <img className='h-[27px] w-[38px]' src={graduationCap} alt='' />
                            <span className='mt-[-5px] text-[27px] text-blue-600 font-[Archivo] font-[500]'>Education</span>
                        </div>
                        <span className='text-[17px] font-[Archivo] font-[300]'>B.A. Psychology and Sociology</span>
                        <span className='mt-[5px] text-[17px] font-[Archivo] font-[300]'>M.Sc Information Technology</span>
                        <span className='italic mt-[5px] text-[15px] font-[Archivo] font-[200]'>(4.0 GPA)</span>
                    </div>
                    <div className='flex flex-col items-center justify-center h-[150px] w-[100%] bg-white border-[5px] border-gray-200 z-[1]'>
                        <div className='flex flex-row ml-[-15px] gap-[17px]'>
                            <img className='h-[30px] w-[35px]' src={checkMark} alt='' />
                            <span className='mt-[-5px] text-[27px] text-blue-600 font-[Archivo] font-[500]'>Experience</span>
                        </div>
                        <span className='text-[20px] font-[Archivo] font-[300]'>2+ years</span>
                        <span className='italic mt-[5px] text-[15px] font-[Archivo] font-[200]'>Full-Stack Development</span>
                        {/* this img tag below was added to fix a glitch that was occurring that would not allow the element to be aligned to the bottom of the container */}
                        <img className='absolute h-[110px] w-[105px] mt-[1115px] ml-[200px] opacity-[.4]' src={bracketImageXs} alt='' />
                    </div>
                    <div className='flex flex-col items-center justify-center h-[450px] w-[100%] bg-white border-[5px] border-gray-200 rounded-bl-[200px] z-[2]'>
                        <div className='flex flex-row mt-[-20px] ml-[-30px] gap-[5px]'>
                            <img className='h-[60px] w-[60px] mt-[-30px]' src={lightBulb} alt='' />
                            <span className='mt-[-13px] text-[27px] text-blue-600 font-[Archivo] font-[500]'>Skills</span>
                        </div>
                        <span className='text-[18px] font-[Archivo] font-[400]'>Front-End Development</span>
                        <span className='italic mt-[5px] text-[15px] font-[Archivo] font-[200]'>·HTML - CSS - JavaScript· <br />  &nbsp;&nbsp;&nbsp;·React - Angular - Vue·</span>
                        <span className='text-[18px] mt-[20px] font-[Archivo] font-[400]'>Back-End Development</span>
                        <span className='italic mt-[5px] text-[15px] font-[Archivo] font-[200]'>·Spring Boot - Django· <br /> &nbsp;&nbsp;·ASP.NET - Laravel·</span>
                        <span className='text-[24px] mt-[20px] ml-[80px] font-[Archivo] font-[400]'>Miscellaneous</span>
                        <span className='italic text-[15px] ml-[60px] font-[Archivo] font-[200]'>·Azure - Google Cloud - AWS· <br />·Photoshop - MySQL - Figma· <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;·Illustrator - Sass - Tailwind· <br /> &nbsp;&nbsp;·Procreate - VSC - Bootstrap·</span>
                    </div>
                </div>
                <img className='h-[170px] w-[100%] scale-x-[-1]' src={swirveGrayTransitionXs} alt='' />
            </div>

            <div className='about-container-md hidden md:flex md:flex-col md:items-center md:h-[2200px] md:w-[100%] md:bg-gradient-to-b md:from-[47.5%] md:from-white md:to-[47.5%] md:to-black xl:h-[3050px] xl:bg-gradient-to-b xl:from-[51%] xl:from-white xl:to-[51%] xl:to-black'>
                <div className='absolute h-[100px] w-[100px] mt-[60px] ml-[-610px] bg-transparent border-[3px] border-black rounded-[100px] z-[2] xl:h-[115px] xl:w-[115px] xl:mt-[150px] xl:ml-[-865px]'></div>
                <div className='absolute h-[140px] w-[140px] mt-[40px] ml-[-610px] bg-blue-600 border-[3px] border-black rounded-[100px] z-[2] xl:h-[170px] xl:w-[170px] xl:mt-[120px] xl:ml-[-865px]'></div>
                <div className='absolute h-[100px] w-[100px] mt-[195px] ml-[610px] bg-transparent border-[3px] border-black rounded-[100px] opacity-100 z-[2] xl:h-[115px] xl:w-[115px] xl:mt-[278px] xl:ml-[865px]'></div>
                <div className='absolute h-[140px] w-[140px] mt-[175px] ml-[610px] bg-blue-600 border-[3px] border-black rounded-[100px] opacity-100 z-[2] xl:h-[170px] xl:w-[170px] xl:mt-[248px] xl:ml-[865px]'></div>
                <div className='absolute h-[100px] w-[100px] mt-[705px] ml-[-455px] bg-transparent border-[3px] border-black rounded-[100px] opacity-100 z-[2] xl:h-[115px] xl:w-[115px] xl:mt-[1017px] xl:ml-[-600px]'></div>
                <div className='absolute h-[140px] w-[140px] mt-[685px] ml-[-455px] bg-blue-600 border-[3px] border-black rounded-[100px] opacity-100 z-[2] xl:h-[170px] xl:w-[170px] xl:mt-[990px] xl:ml-[-600px]'></div>
                <div className='absolute h-[100px] w-[100px] mt-[830px] ml-[170px] bg-transparent border-[3px] border-black rounded-[100px] opacity-100 z-[2] xl:h-[115px] xl:w-[115px] xl:mt-[1179px] xl:ml-[260px]'></div>
                <div className='absolute h-[140px] w-[140px] mt-[810px] ml-[170px] bg-blue-600 border-[3px] border-black rounded-[100px] opacity-100 z-[2] xl:h-[170px] xl:w-[170px] xl:mt-[1152px] xl:ml-[260px]'></div>
                <div className='absolute flex flex-row align-end justify-end h-[7px] w-[610px] mt-[160px] ml-[-20px] bg-blue-100 rounded-[10px] rotate-[12deg] z-[1] overflow-hidden xl:w-[890px] xl:mt-[255px] xl:ml-[-5px] xl:rotate-[8deg]'>
                    <span className='h-[100%] w-[200px] mr-[-200px] bg-blue-600'></span>
                </div>
                <div className='absolute flex flex-row align-end justify-end h-[7px] w-[630px] mt-[533px] ml-[-7px] bg-blue-300 rounded-[10px] rotate-[-43deg] z-[1] overflow-hidden xl:w-[1050px] xl:mt-[700px] xl:ml-[130px] xl:rotate-[-45.5deg]'>
                    <span className='h-[100%] w-[200px] mr-[-200px] bg-black'></span>
                </div>
                <div className='absolute flex flex-row align-end justify-end h-[7px] w-[325px] mt-[804px] ml-[-166px] bg-blue-100 rounded-[10px] rotate-[21deg] z-[1] overflow-hidden xl:w-[470px] xl:mt-[1154px] xl:ml-[-176px]'>
                    <span className='h-[100%] w-[200px] mr-[-200px] bg-blue-600'></span>
                </div>
                <div className='flex flex-row mt-[83px] z-[2] xl:mt-[180px]'>
                    <div className='flex flex-col h-[415px] w-[380px] gap-[20px] bg-gradient-to-b from-white from-20% to-blue-100 to-100% rounded-[40px] border-[3px] border-black opacity-[.9] shadow-[14px_14px_12px_0px_rgba(0,0,0,0.3)] xl:h-[530px] xl:w-[510px] xl:ml-[-1px]'>
                        <span className='w-[270px] mt-[20px] ml-[20px] pl-[7px] text-[55px] text-blue-600 font-[Archivo] font-[600] rounded-[10px] border-b-[3px] border-r-[3px] border-blue-600 z-[2] shadow-[2px_2px_5px_0px_rgba(0,0,255,.4)] xl:h-[100px] xl:w-[350px] xl:text-[65px]'>About Me</span>
                        <p className='w-[65%] ml-[20px] text-[15px] font-[Archivo] font-[300] z-[2] xl:text-[20px]'>I enjoy staying up-to-date with the latest technologies as well as developing a deeper understanding of current ones.  Along with my deep passion for anything computer related, I am constantly improving my design skills so that my webpage layouts can be more aesthetically pleasing and influencial to the users who are viewing them.  Learning more about art and how to draw has also helped the process immensely.</p>
                    </div>
                    <img className='h-[500px] w-[380px] mt-[130px] ml-[-100px] rounded-[40px] z-[4] shadow-[14px_14px_12px_0px_rgba(0,0,0,0.3)] xl:h-[670px] xl:w-[510px]' src={sidePortrait} alt='' />
                    <div className='absolute flex flex-col justify-center items-center h-[240px] w-[260px] mt-[460px] ml-[80px] z-[5] rounded-[40px] border-[3px] border-black shadow-[14px_14px_12px_0px_rgba(0,0,0,0.3)] xl:h-[320px] xl:w-[335px] xl:mt-[600px] xl:ml-[140px]'>
                        <img className='h-[38px] w-[47px] xl:h-[63px] xl:w-[79px]' src={graduationCap} alt='' />
                        <span className='text-[40px] text-blue-600 font-[Archivo] font-[500] z-[2] xl:text-[50px]'>Education</span>
                        <span className='text-[15px] font-[Archivo] font-[300] z-[2] xl:text-[20px]'>B.A. Psychology and Sociology</span>
                        <span className='text-[15px] font-[Archivo] font-[300] z-[2] xl:text-[20px]'>M.Sc Information Technology</span>
                        <span className='text-[15px] font-[Archivo] font-[200] z-[2] xl:text-[20px]'>(4.0 GPA)</span>
                    </div>
                    <div className='absolute flex flex-col justify-center items-center h-[240px] w-[260px] mt-[580px] ml-[390px] z-[5] bg-gradient-to-br from-50% from-blue-50 to-white to-100% rounded-[40px] border-[3px] border-black shadow-[14px_14px_12px_0px_rgba(0,0,0,0.3)] xl:h-[320px] xl:w-[335px] xl:mt-[760px] xl:ml-[570px]'>
                        <img className='h-[42px] w-[50px] xl:h-[63px] xl:w-[79px]' src={checkMark} alt='' />
                        <span className='text-[40px] text-blue-600 font-[Archivo] font-[500] xl:text-[50px]'>Experience</span>
                        <span className='text-[15px] font-[Archivo] font-[300] xl:text-[20px]'>2+ years</span>
                        <span className='text-[15px] font-[Archivo] font-[200] xl:text-[20px]'>Full-Stack Development</span>
                    </div>
                </div>
                <img className='self-start h-[200px] w-[100%] mt-[150px] ml-[-.5px] scale-x-[-1] xl:hidden' src={swirveGrayTransitionMd} alt='' />
                <img className='hidden xl:flex xl:self-start xl:h-[500px] xl:w-[100%] xl:mt-[150px] xl:ml-[-.5px]' src={swirveGrayTransitionXl} alt='' />
                <span className='mt-[100px] text-[45px] text-white font-[Archivo] font-[600] xl:mt-[70px] xl:text-[60px]'>Technologies I am Proficient in...</span>
                <div className='flex flex-col items-center w-[100%]'>
                    <div className='about-radial-gradient absolute h-[800px] w-[800px] mt-[-40px] xl:h-[1100px] xl:w-[1100px]'></div>
                    <div className='absolute flex flex-col justify-center items-center h-[220px] w-[220px] mt-[60px] ml-[10px] bg-black border-[1px] border-white rounded-[10px] z-[2] xl:h-[320px] xl:w-[320px]'>
                        <span className='front-end-title-md self-start w-[90px] mt-[-8px] ml-[15px] pt-[2px] pb-[2px] pl-[3px] pr-[3px] text-center text-[14px] text-white font-[Archivo] font-[400] border-[1px] border-white rounded-[100px] xl:w-[140px] xl:text-[21px]'>Front-End</span>
                        <div className='flex flex-row mt-[25px] ml-[-.6px] gap-[2.7px] xl:mt-[30px] xl:gap-[4.7px]'>
                            <img className='h-[60px] w-[60px] xl:h-[87px] xl:w-[87px]' src={htmlLogoMd} alt='' />
                            <img className='h-[65px] w-[63px] mt-[-9.7px] xl:h-[93px] xl:w-[88px] xl:mt-[-11px]' src={cssLogoMd} alt='' />
                            <img className='h-[57px] w-[55px] mt-[.2px] ml-[2px] xl:h-[83px] xl:w-[83px] xl:mt-[1px]' src={javascriptLogoMd} alt='' />
                        </div>
                        <div className='flex flex-row mt-[10px] ml-[-4px] gap-[14px] xl:mt-[15px] xl:ml-[-7px] xl:gap-[12px]'>
                            <img className='h-[55px] w-[55px] xl:h-[80px] xl:w-[80px]' src={angularLogoMd} alt='' />
                            <img className='h-[40px] w-[45px] mt-[8px] xl:h-[60px] xl:w-[65px] xl:ml-[7px]' src={reactLogoMd} alt='' />
                            <img className='h-[40px] w-[40px] mt-[8px] ml-[8px] xl:h-[60px] xl:w-[60px] xl:ml-[18px]' src={vueLogoMd} alt='' />
                        </div>
                        <div className='front-end-expanding-rectangle1-md absolute h-[220px] w-[220px] xl:hidden'></div>
                        <div className='front-end-expanding-rectangle2-md absolute h-[220px] w-[220px] xl:hidden'></div>
                        <div className='front-end-expanding-rectangle1-xl hidden xl:flex xl:absolute xl:h-[320px] xl:w-[320px]'></div>
                        <div className='front-end-expanding-rectangle2-xl hidden xl:flex xl:absolute xl:h-[320px] xl:w-[320px]'></div>
                    </div>
                    <div className='absolute flex flex-col justify-center items-center h-[220px] w-[220px] mt-[325px] ml-[-490px] bg-black border-[1px] border-white rounded-[10px] z-[2] xl:h-[320px] xl:w-[320px] xl:mt-[453px] xl:ml-[-710px]'>
                        <span className='back-end-title-md self-end w-[90px] mt-[10px] mr-[15px] pt-[2px] pb-[2px] pl-[3px] pr-[3px] text-center text-[14px] text-white font-[Archivo] font-[400] border-[1px] border-white rounded-[100px] xl:w-[140px] xl:text-[21px]'>Back-End</span>
                        <div className='flex flex-row mt-[25px] gap-[14.7px] xl:mt-[40px] xl:gap-[30px]'>
                            <img className='h-[55px] w-[60px] ml-[17px] xl:h-[70px] xl:w-[70px] xl:ml-[10px]' src={springBootLogoMd} alt='' />
                            <img className='h-[58px] w-[100px] ml-[1.5px] xl:h-[67px] xl:w-[120px]' src={dotNetLogoMd} alt='' />
                        </div>
                        <div className='flex flex-row mt-[10px] ml-[-6px] gap-[28px] xl:mt-[25px] xl:ml-[-16px] xl:gap-[40px]'>
                            <img className='h-[75px] w-[75px] xl:h-[95px] xl:w-[95px]' src={djangoLogoMd} alt='' />
                            <img className='h-[60px] w-[65px] mt-[8px] xl:h-[79px] xl:w-[82px]' src={laravelLogoMd} alt='' />
                        </div>
                        <div className='back-end-expanding-rectangle1-md absolute h-[220px] w-[220px] xl:hidden'></div>
                        <div className='back-end-expanding-rectangle2-md absolute h-[220px] w-[220px] xl:hidden'></div>
                        <div className='back-end-expanding-rectangle1-xl hidden xl:flex xl:absolute xl:h-[320px] xl:w-[320px]'></div>
                        <div className='back-end-expanding-rectangle2-xl hidden xl:flex xl:absolute xl:h-[320px] xl:w-[320px]'></div>
                    </div>
                    <div className='absolute flex flex-col justify-center items-center h-[220px] w-[220px] mt-[610px] ml-[-395px] bg-black border-[1px] border-white rounded-[10px] z-[2] xl:h-[320px] xl:w-[320px] xl:mt-[870px] xl:ml-[-595px]'>
                        <span className='oop-languages-title-md self-end w-[120px] mt-[-2px] mr-[15px] pt-[2px] pb-[2px] pl-[3px] pr-[3px] text-center text-[14px] text-white font-[Archivo] font-[400] border-[1px] border-white rounded-[100px] xl:w-[200px] xl:text-[21px]'>OOP Languages</span>
                        <div className='flex flex-row mt-[15px] gap-[7.2px] xl:mt-[22px] xl:gap-[15px]'>
                            <img className='h-[65px] w-[70px] ml-[.5px] xl:h-[95px] xl:w-[100px] xl:ml-[-10px]' src={javaLogoMd} alt='' />
                            <img className='h-[85px] w-[85px] mt-[-10px] xl:h-[105px] xl:w-[105px] xl:mt-[-6px]' src={cSharpLogoMd} alt='' />
                        </div>
                        <div className='flex flex-row mt-[10px] ml-[-6px] gap-[28px] xl:mt-[17px] xl:ml-[-13px] xl:gap-[46px]'>
                            <img className='h-[55px] w-[55px] xl:h-[77px] xl:w-[77px]' src={pythonLogoMd} alt='' />
                            <img className='h-[50px] w-[55px] xl:h-[68px] xl:w-[70px]' src={phpLogoMd} alt='' />
                        </div>
                        <div className='oop-languages-expanding-rectangle1-md absolute h-[220px] w-[220px] xl:hidden'></div>
                        <div className='oop-languages-expanding-rectangle2-md absolute h-[220px] w-[220px] xl:hidden'></div>
                        <div className='oop-languages-expanding-rectangle1-xl hidden xl:flex xl:absolute xl:h-[320px] xl:w-[320px]'></div>
                        <div className='oop-languages-expanding-rectangle2-xl hidden xl:flex xl:absolute xl:h-[320px] xl:w-[320px]'></div>
                    </div>
                    <div className='absolute flex flex-col justify-center items-center h-[320px] w-[350px] mt-[377px] ml-[305px] bg-black border-[1px] border-white rounded-[10px] z-[2] xl:h-[550px] xl:w-[550px] xl:mt-[550px] xl:ml-[490px]'>
                        <span className='miscellaneous-title-md self-center w-[120px] mt-[-19px] pt-[2px] pb-[2px] pl-[3px] pr-[3px] text-center text-[14px] text-white font-[Archivo] font-[400] border-[1px] border-white rounded-[100px] xl:w-[210px] xl:text-[25px]'>Miscellaneous</span>
                        <div className='flex flex-row mt-[30px] gap-[25px] xl:mt-[60px] xl:gap-[45px]'>
                            <img className='h-[45px] w-[50px] ml-[4px] xl:h-[75px] xl:w-[75px]' src={photoshopLogoMd} alt='' />
                            <img className='h-[45px] w-[50px] xl:h-[75px] xl:w-[75px]' src={illustratorLogoMd} alt='' />
                            <img className='h-[45px] w-[50px] xl:h-[75px] xl:w-[75px]' src={figmaLogoMd} alt='' />
                            <img className='h-[55px] w-[55px] xl:h-[80px] xl:w-[73px]' src={procreateLogoMd} alt='' />
                        </div>
                        <div className='flex flex-row mt-[23px] gap-[25px] xl:mt-[53px] xl:gap-[45px]'>
                            <img className='h-[50px] w-[50px] ml-[-6px] xl:h-[75px] xl:w-[75px]' src={azureLogoMd} alt='' />
                            <img className='h-[45px] w-[50px] xl:h-[75px] xl:w-[75px]' src={googleCloudLogoMd} alt='' />
                            <img className='h-[70px] w-[50px] mt-[-11px] xl:h-[90px] xl:w-[72px] xl:ml-[5px]' src={awsLogoMd} alt='' />
                            <img className='h-[45px] w-[45px] xl:h-[70px] xl:w-[70px]' src={mysqlLogoMd} alt='' />
                        </div>
                        <div className='flex flex-row mt-[23px] gap-[25px] xl:mt-[53px] xl:gap-[45px]'>
                            <img className='h-[48px] w-[48px] xl:h-[75px] xl:w-[75px]' src={sassLogoMd} alt='' />
                            <img className='h-[45px] w-[50px] xl:h-[72px] xl:w-[80px]' src={bootstrapLogoMd} alt='' />
                            <img className='h-[45px] w-[50px] xl:h-[70px] xl:w-[75px]' src={vscLogoMd} alt='' />
                            <img className='h-[50px] w-[50px] xl:h-[75px] xl:w-[70px]' src={tailwindLogoMd} alt='' />
                        </div>
                        <div className='miscellaneous-expanding-rectangle1-md absolute h-[320px] w-[350px] xl:hidden'></div>
                        <div className='miscellaneous-expanding-rectangle2-md absolute h-[320px] w-[350px] xl:hidden'></div>
                        <div className='miscellaneous-expanding-rectangle1-xl hidden xl:flex xl:absolute xl:h-[550px] xl:w-[550px]'></div>
                        <div className='miscellaneous-expanding-rectangle2-xl hidden xl:flex xl:absolute xl:h-[550px] xl:w-[550px]'></div>
                    </div>
                    <div className='absolute flex flex-col justify-center items-center h-[500px] w-[550px] mt-[170px] bg-black rounded-[10px] border-[1px] border-white overflow-hidden xl:h-[800px] xl:w-[870px] xl:mt-[220px]'>
                        <div className='about-coding-background-md flex flex-col justify-center items-center h-[1500px] w-[1500px] overflow-hidden xl:h-[1700px] xl:w-[1700px]'>
                            <div className='flex flex-row justify-between mt-[20px] gap-[395px] xl:gap-[630px] xl:mt-[-130px]'>
                                <img className='h-[23px] w-[23px] xl:h-[45px] xl:w-[45px]' src={dotsIconMd} alt='' />
                                <div className='flex flex-row items-center gap-[16px] xl:gap-[25px]'>
                                    <img className='h-[15px] w-[15px] xl:h-[25px] xl:w-[25px]' src={playIconMd} alt='' />
                                    <img className='h-[15px] w-[15px] xl:h-[25px] xl:w-[25px]' src={splitIconMd} alt='' />
                                    <img className='h-[15px] w-[15px] xl:h-[25px] xl:w-[25px]' src={searchIconMd} alt='' />
                                </div>
                            </div>
                            <div className='flex flex-row h-[500px] w-[650px] mt-[30px] text-white gap-[15px] xl:w-[870px] xl:mt-[35px] xl:gap-[25px]'>
                                <div className='flex flex-col h-[420px] w-[250px] bg-slate-950 border-2 border-gray-400 rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px] xl:h-[720px] xl:w-[320px]'>
                                    <div className='flex flex-row w-[50px] h-[50px] ml-[58px]'>
                                        <div className='flex flex-col h-[500px] border-r-2 border-gray-400 xl:h-[750px] xl:ml-[-44px]'>
                                            <img className='h-[19.4px] w-[20px] mt-[12px] mr-[28px] xl:h-[35px] xl:w-[35px] xl:mr-[48px]' src={homeIconMd} alt='' />
                                            <img className='h-[19.4px] w-[20px] mt-[16px] mr-[28px] xl:h-[35px] xl:w-[35px] xl:mr-[48px]' src={workspaceIconMd} alt='' />
                                        </div>
                                        <div className='flex flex-col h-[400px] ml-[10px] mt-[10px] text-white'>
                                            <div className='flex flex-row items-center gap-[5px]'>
                                                <span className='about-m-letter-md flex flex-col items-center justify-center h-[25px] w-[25px] text-[13px] text-gray-400 font-[Archivo] font-[600] xl:h-[40px] xl:w-[40px] xl:text-[20px]'>M</span>
                                                <span className='w-[130px] text-[12px] text-gray-400 font-[Archivo] font-[300] xl:w-[170px] xl:ml-[7px] xl:text-[20px]'>Main workspace</span>
                                            </div>
                                            <span className='h-[.5px] w-[138px] mt-[13px] bg-gray-400 xl:h-[2px] xl:w-[220px]'></span>
                                            <div className='flex flex-row gap-[17px]'>
                                                <div className='flex flex-row items-center h-[25px] w-[110px] mt-[13px] gap-[10px] bg-transparent border-[1px] border-gray-400 rounded-[2px] xl:h-[37px] xl:w-[175px] xl:mt-[20px]'>
                                                    <img className='h-[15px] w-[15px] ml-[4px] xl:h-[25px] xl:w-[25px]' src={searchIconMd} alt='' />
                                                    <span className='text-[13px] text-gray-400 font-[Archivo] font-[400] xl:text-[20px]'>Search</span>
                                                </div>
                                                <div className='flex flex-col h-[25px] w-[25px] mt-[13px] ml-[-10px] text-[16px] text-gray-400 bg-blue-600 rounded-[2px] font-[Archivo] font-[600] xl:h-[37.5px] xl:w-[37.5px] xl:mt-[19.7px] xl:ml-[-5px]'>
                                                    <span className='ml-[8.5px] text-[15px] text-gray-400 font-[Archivo] font-[600] xl:mt-[-3px] xl:ml-[10.2px] xl:text-[27px]'>+</span>
                                                </div>
                                            </div>
                                            <span className='h-[25px] w-[130px] mt-[13px] bg-blue-600 rounded-[2px]'></span>
                                            <span className='mt-[30px] text-[13px] text-gray-400 font-[Archivo] font-[400] xl:text-[22px]'>homeComponent.jsx</span>
                                            <span className='mt-[70px] text-[13px] text-gray-400 font-[Archivo] font-[400] xl:text-[22px]'>projectsStyling.css</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row h-[420px] w-[340px] gap-[20px] bg-slate-950 border-2 border-gray-400 rounded-tl-[5px] rounded-bl-[5px] rounded-br-[5px] xl:h-[720px] xl:w-[540px]'>
                                    <span className='ml-[7px] text-[14px] text-gray-400 font-[Archivo] font-[400] xl:text-[22px]'>&nbsp;&nbsp;1<br/>&nbsp;&nbsp;2<br/>&nbsp;&nbsp;3<br/>&nbsp;&nbsp;4<br/>&nbsp;&nbsp;5<br/>&nbsp;&nbsp;6<br/>&nbsp;&nbsp;7<br/>&nbsp;&nbsp;8<br/>&nbsp;&nbsp;9<br/>10<br/>11<br/>12<br/>13<br/>14<br/>15<br/>16<br/>17<br/>18<br/>19<br/>20<br/></span>
                                    <div className='about-code-text-md hidden flex-col mt-[42px] xl:mt-[66px]'>
                                        <div className='flex flex-row'>
                                            <span className='text-[14px] text-gray-400 font-[Archivo] font-[400] xl:text-[22px]'>{'<'}</span>
                                             <span className='text-[14px] text-blue-500 font-[Archivo] font-[400] xl:text-[22px]'>!DOCTYPE</span>
                                              <span className='text-[14px] text-gray-400 font-[Archivo] font-[400] xl:text-[22px]'>{'>'}</span>
                                               <div className='first-line-of-code-md absolute flex flex-row xl:hidden'>
                                                   <span className='first-line-of-code-cursor-md h-[20px] w-[1.5px] ml-[-2px]'></span>
                                                   <span className='h-[20px] w-[150px] bg-slate-950'></span>
                                               </div>
                                               <div className='first-line-of-code-xl hidden xl:absolute xl:flex xl:flex-row '>
                                                   <span className='first-line-of-code-cursor-xl h-[30px] w-[1.5px] ml-[-2px]'></span>
                                                   <span className='h-[30px] w-[230px] bg-slate-950'></span>
                                               </div>
                                        </div>
                                        <div className='flex flex-row'>
                                            <span className='text-[14px] text-gray-400 font-[Archivo] font-[400] xl:text-[22px]'>{'<'}</span>
                                             <span className='text-[14px] text-blue-500 font-[Archivo] font-[400] xl:text-[22px]'>html</span>
                                              <span className='text-[14px] text-blue-300 font-[Archivo] font-[400] xl:text-[22px]'>&nbsp;&nbsp;lang</span>
                                               <span className='text-[14px] text-gray-400 font-[Archivo] font-[400] xl:text-[22px]'>=</span>
                                                <span className='text-[14px] text-orange-300 font-[Archivo] font-[400] xl:text-[22px]'>"en"</span>
                                                 <span className='text-[14px] text-gray-400 font-[Archivo] font-[400] xl:text-[22px]'>{'>'}</span>
                                                  <div className='second-line-of-code-md absolute flex flex-row xl:hidden'>
                                                      <span className='second-line-of-code-cursor-md h-[20px] w-[1.5px] ml-[-2px]'></span>
                                                      <span className='h-[20px] w-[150px] bg-slate-950'></span>
                                                  </div>
                                                  <div className='second-line-of-code-xl hidden xl:absolute xl:flex xl:flex-row'>
                                                      <span className='second-line-of-code-cursor-xl h-[30px] w-[1.5px] ml-[-2px]'></span>
                                                      <span className='h-[30px] w-[260px] bg-slate-950'></span>
                                                  </div>
                                        </div>
                                        <div className='flex flex-row ml-[20px] xl:mt-[-.3px]'>
                                            <span className='text-[14px] text-gray-400 font-[Archivo] font-[400] xl:text-[22px]'>{'<'}</span>
                                             <span className='text-[14px] text-blue-500 font-[Archivo] font-[400] xl:text-[22px]'>head</span>
                                              <span className='text-[14px] text-gray-400 font-[Archivo] font-[400] xl:text-[22px]'>{'>'}</span>
                                               <div className='third-line-of-code-md absolute flex flex-row xl:hidden'>
                                                   <span className='third-line-of-code-cursor-md h-[20px] w-[1.5px] ml-[-2px]'></span>
                                                   <span className='h-[20px] w-[150px] bg-slate-950'></span>
                                               </div>
                                               <div className='third-line-of-code-xl hidden xl:absolute xl:flex xl:flex-row'>
                                                   <span className='third-line-of-code-cursor-xl h-[30px] w-[1.5px] ml-[-2px]'></span>
                                                   <span className='h-[30px] w-[190px] bg-slate-950'></span>
                                               </div>
                                        </div>
                                        <div className='flex flex-row ml-[40px]'>
                                            <span className='text-[14px] text-gray-400 font-[Archivo] font-[400] xl:text-[22px]'>{'<'}</span>
                                             <span className='text-[14px] text-blue-300 font-[Archivo] font-[400] xl:text-[22px]'>meta</span>
                                              <span className='text-[14px] text-blue-300 font-[Archivo] font-[400] xl:text-[22px]'>&nbsp;&nbsp;charset</span>
                                               <span className='text-[14px] text-gray-400 font-[Archivo] font-[400] xl:text-[22px]'>=</span>
                                                <span className='text-[14px] text-orange-300 font-[Archivo] font-[400] xl:text-[22px]'>"utf-8"</span>
                                                 <span className='text-[14px] text-gray-400 font-[Archivo] font-[400] xl:text-[22px]'>&nbsp;&nbsp;{'/'}</span>
                                                  <span className='text-[14px] text-gray-400 font-[Archivo] font-[400] xl:text-[22px]'>{'>'}</span>
                                                   <div className='fourth-line-of-code-md absolute flex flex-row xl:hidden'>
                                                      <span className='fourth-line-of-code-cursor-md h-[20px] w-[1.5px] ml-[-2px]'></span>
                                                      <span className='h-[20px] w-[260px] bg-slate-950'></span>
                                                   </div>
                                                   <div className='fourth-line-of-code-xl hidden xl:absolute xl:flex xl:flex-row'>
                                                      <span className='fourth-line-of-code-cursor-xl h-[30px] w-[1.5px] ml-[-2px]'></span>
                                                      <span className='h-[30px] w-[320px] bg-slate-950'></span>
                                                   </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='contact-container-xs flex flex-col items-center h-[950px] w-[100%] mt-[-1px] md:hidden'>
                <img className='absolute h-[40px] w-[220px] mt-[-11vw] ml-[-32vw] rotate-[13deg]' src={contactTextXs} alt='' />
                <img className='h-[300px] w-[100%] mt-[13px] opacity-[.4]' src={binaryImageXs} alt='' />
                <div className='h-[65px] w-[65px] mt-[-50px] ml-[-240px] rounded-[100px]'></div>
                <div className='h-[65px] w-[65px] mt-[90px] ml-[195px] rounded-[100px]'></div>
                <div className='h-[150px] w-[150px] mt-[20px] ml-[-280px] rounded-[100px] z-[2]'></div>
                <div className='h-[80px] w-[100px] mt-[-5px] ml-[-340px] rounded-[100px] blur-[5px] z-[1]'></div>
                <div className='h-[130px] w-[130px] mt-[-137px] ml-[220px] rounded-[100px] z-[2]'></div>
                <div className='h-[70px] w-[100px] mt-[-10px] ml-[150px] rounded-[100px] blur-[14px] z-[1]'></div>
                <div className='absolute flex flex-col items-center h-[500px] w-[330px] mt-[200px] rounded-[30px] z-[300]'>
                    <img className='h-[170px] w-[170px] mt-[-55px] rounded-[100px] z-[2]' src={frontPortraitXs} alt='' />
                    <div className='h-[80px] w-[120px] mt-[-70px] bg-slate-950 rounded-[100px] z-[1] blur-[15px]'></div>
                    <span className='text-[30px] text-white font-[Archivo] font-[600] drop-shadow-[0px_8px_5px_rgba(0,0,0,1)]'>Andrew Smith</span>
                    <span className='text-[18px] text-white drop-shadow-[0px_8px_5px_rgba(0,0,0,1)]'>developer</span>
                    <div className='flex flex-row items-center mt-[30px] gap-[18px]'>
                        <img className='h-[40px] w-[40px] shadow-[0px_3px_5px_0px_rgba(0,0,0,.7)]' src={phoneImageXs} alt='' />
                        <span className='text-[16px] text-white font-[Archivo] font-[400] drop-shadow-[0px_8px_5px_rgba(0,0,0,1)]'>(760) 983-8614</span>
                    </div>
                    <div className='flex flex-row items-center mt-[30px] gap-[18px]'>
                        <a href="mailto:andrew.moses.smith@gmail.com"><img className='h-[40px] w-[40px] rounded-[25px] shadow-[0px_3px_5px_0px_rgba(0,0,0,.7)]' src={googleLogo} alt='' /></a>
                        <a href="mailto:andrew.moses.smith@gmail.com"><span className='text-[16px] text-white font-[Archivo] font-[400] drop-shadow-[0px_8px_5px_rgba(0,0,0,1)]'>Andrew.Moses.Smith</span></a>
                    </div>
                    <div className='flex flex-row items-center mt-[30px] gap-[18px]'>
                        <a href="mailto:andy.smith@snhu.edu"><img className='h-[40px] w-[40px] rounded-[5px] shadow-[0px_3px_5px_0px_rgba(0,0,0,.7)]' src={snhuLogoXs} alt='' /></a>
                        <a href="mailto:andy.smith@snhu.edu"><span className='text-[16px] text-white font-[Archivo] font-[400] drop-shadow-[0px_8px_5px_rgba(0,0,0,1)]'>Andy.Smith@snhu.edu</span></a>
                    </div>
                    <div className='flex flex-row items-center mt-[30px] gap-[18px]'>
                        <a href="https://github.com/AndrewMoses1"><img className='h-[40px] w-[40px] rounded-[25px] shadow-[0px_3px_5px_0px_rgba(0,0,0,.7)]' src={gitHubLogo} alt='' /></a>
                        <a href="https://github.com/AndrewMoses1"><span className='text-[16px] text-white font-[Archivo] font-[400] drop-shadow-[0px_8px_5px_rgba(0,0,0,1)]'>github.com/AndrewMoses1</span></a>
                    </div>
                </div>
                <div className='flex flex-col items-center h-[100px] w-[100%] mt-[auto] gap-[10px] border-t-2 border-blue-300'>
                    <span className='mt-[20px] text-[15px] text-white'>Built by Andrew</span>
                    <span className='text-[15px] text-white'>2024 &nbsp;Ⓒ&nbsp; All Rights Reserved</span>
                </div>
            </div>

            <div className='contact-container-md hidden md:flex md:flex-col md:h-[1620px] md:w-[100%] md:mt-[-1px] md:bg-blue-100 xl:h-[1450px]'>
                <img className='self-start h-[200px] w-[100%] mt-[-18px] ml-[-.5px] scale-y-[-1] scale-x-[-1] xl:hidden' src={swirveBlueTransitionMd} alt='' />
                <img className='hidden xl:flex xl:self-start xl:h-[500px] xl:w-[100%] xl:mt-[-18px] xl:ml-[-.5px] xl:scale-y-[-1]' src={swirveBlueTransitionXl} alt='' />
                <div className='flex flex-col xl:flex-row-reverse xl:justify-between xl:mt-[-90px]'>
                    <img className='contact-half-circle-md absolute self-end h-[550px] w-[650px] mt-[-25px] opacity-[.7] xl:self-start xl:mt-[40px]' src={halfCircleIconMd} alt='' />
                    {/* a lot of things added in the below section to fix pixel quality problems caused by the div being skewed */}
                    <div className='flex flex-row justify-end self-end h-[610px] w-[660px] mt-[100px] pb-[20px] bg-gray-200 shadow-[10px_10px_5px_0px_rgba(0,0,0,.4)] skew-y-[5deg] xl:justify-center xl:w-[760px] xl:mt-[200px]'>
                        <img className='absolute h-[70px] w-[100%] mt-[-13px] skew-y-[-2.1deg] z-[10]' src={contactRectangleMd} alt='' />
                        <div className='absolute flex flex-row justify-between h-[50px] w-[100%] bg-gray-200'>
                            <div className='flex flex-row justify-center items-center'>
                                <img className='h-[13px] w-[13px] mt-[-7px] ml-[64px] skew-y-[-7deg] z-[11] xl:ml-[90px]' src={contactMenuIconMd} alt='' />
                                <span className='mt-[-5.5px] ml-[7px] text-[18px] font-[Bitter] font-[500] z-[11]'>Andrew</span>
                                <span className='mt-[-5.5px] ml-[2px] text-[18px] text-blue-400 font-[Bitter] font-[500] z-[11]'>{'{Smith}'}</span>
                            </div>
                            <img className='self-center h-[19.4px] w-[20px] mt-[-7px] mr-[15px] skew-y-[-7deg] z-[11]' src={contactHomeIconMd} alt='' />
                        </div>
                        <div className='flex flex-col justify-center items-center self-end h-[500px] w-[600px] bg-gray-50 xl:justify-self-center'>
                            <span className='contact-text-md absolute self-start mt-[-470px] ml-[22px] text-[15px]'>Contact Me</span>
                            <div className='absolute flex flex-col h-[450px] w-[560px] mt-[10px]'>
                                <div className='absolute flex flex-row'>
                                    <div className='absolute h-[214px] w-[173px] bg-gray-200'></div>
                                    <div className='absolute h-[210px] w-[173px] ml-[193.1px] bg-gray-200 text-white'></div>
                                    <div className='absolute h-[210px] w-[173px] ml-[386.4px] bg-gray-200'></div>
                                </div>
                                <div className='absolute flex flex-row mt-[230px]'>
                                    <div className='absolute h-[210px] w-[173px] bg-gray-200'></div>
                                    <div className='absolute h-[210px] w-[173px] ml-[193.1px] bg-gray-200'></div>
                                    <div className='absolute h-[210px] w-[173px] ml-[386.4px] bg-gray-200'></div>
                                </div>
                                <div className='absolute flex flex-row'>
                                    <div className='contact-google-md absolute flex flex-col h-[205px] w-[173px] bg-gray-200 z-[9]'>
                                        <img className='h-[230px] w-[173.8px] mt-[-7px] skew-y-[-5deg]' src={googleMailContactCardMd} alt='' />
                                        <span className='absolute mt-[125px] ml-[5px] text-[11px] text-gray-700 font-[Archivo] font-[500]'>Primary Email</span>
                                        <span className='absolute mt-[155px] ml-[21px] text-[12px] font-[Archivo] font-[800]'>Andrew.Moses.Smith</span>
                                        <span className='absolute mt-[185px] ml-[27px] italic text-[9px] text-gray-500 font-[Archivo] font-[400]'>(preferred method of contact)</span>
                                    </div>
                                    <div className='absolute flex flex-col h-[210px] w-[173px] ml-[193.1px] bg-gray-200 overflow-hidden'>
                                        <img className='h-[232px] w-[173px] mt-[-11px] skew-y-[-5deg]' src={iCloudMailContactCardMd} alt='' />
                                        <span className='absolute mt-[123px] ml-[6px] text-[11px] text-gray-700 font-[Archivo] font-[500]'>iCloud Email</span>
                                        <span className='absolute mt-[163px] ml-[21px] text-[12px] font-[Archivo] font-[800]'>Andrew.Moses.Smith</span>
                                    </div>
                                    <div className='contact-snhu-md absolute flex flex-col h-[210px] w-[173px] ml-[386.4px] bg-gray-200 z-[11] overflow-hidden'>
                                        <img className='h-[232px] w-[173px] mt-[-12px] skew-y-[-5deg]' src={snhuMailContactCardMd} alt='' />
                                        <span className='absolute mt-[120px] ml-[6px] text-[11px] text-gray-700 font-[Archivo] font-[500]'>Secondary Email</span>
                                        <span className='absolute mt-[155px] ml-[18px] text-[12px] font-[Archivo] font-[800]'>Andy.Smith@snhu.edu</span>
                                        <span className='absolute mt-[185px] ml-[34px] italic text-[9px] text-gray-500 font-[Archivo] font-[400]'>(my school email address)</span>
                                    </div>
                                </div>
                                <div className='absolute flex flex-row mt-[230px]'>
                                    <div className='absolute flex flex-col h-[210px] w-[173px] bg-gray-200 overflow-hidden'>
                                        <img className='h-[232px] w-[173px] mt-[-11px] skew-y-[-5deg] ' src={microsoftTeamsContactCardMd} alt='' />
                                        <span className='absolute mt-[123px] ml-[6px] text-[11px] text-gray-700 font-[Archivo] font-[500]'>Microsoft Teams</span>
                                        <span className='absolute mt-[155px] ml-[21px] text-center text-[12px] font-[Archivo] font-[800]'>Andrew.Moses.Smith <br />@gmail.com</span>
                                    </div>
                                    <div className='contact-ios-md absolute flex flex-col h-[210px] w-[173px] ml-[193.1px] bg-gray-200 z-[10] overflow-hidden'>
                                        <img className='h-[232px] w-[173px] mt-[-11px] skew-y-[-5deg]' src={iosNotificationContactCardMd} alt='' />
                                        <span className='absolute mt-[123px] ml-[6px] text-[11px] text-gray-700 font-[Archivo] font-[500]'>Phone Number</span>
                                        <span className='absolute mt-[155px] ml-[38px] text-[12px] font-[Archivo] font-[800]'>(760) 983-8614</span>
                                        <span className='absolute mt-[185px] ml-[27px] italic text-[9px] text-gray-500 font-[Archivo] font-[400]'>(alternate method of contact)</span>
                                    </div>
                                    <div className='absolute flex flex-col h-[210px] w-[173px] ml-[386.4px] bg-gray-200 overflow-hidden'>
                                        <img className='h-[232px] w-[173px] mt-[-11px] skew-y-[-5deg]' src={homeAddressContactCardMd} alt='' />
                                        <span className='absolute mt-[123px] ml-[6px] text-[11px] text-gray-700 font-[Archivo] font-[500]'>Mailing Address</span>
                                        <span className='absolute mt-[155px] ml-[23px] text-center text-[12px] font-[Archivo] font-[800]'>13012 Fir Ridge Ct <br /> Victorville, CA 92392</span>
                                    </div>
                                </div>             
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col mt-[40px] xl:mt-[140px] xl:w-[45%] 2xl:h-[600px] 4xl:ml-[100px] 5xl:ml-[300px]'>
                        <span className='w-[470px] mt-[60px] ml-[40px] text-[50px] text-blue-600 font-[Archivo] font-[800] z-[10] 2xl:w-[570px] 2xl:text-[55px] 3xl:w-[750px] 3xl:text-[65px]'>There are different ways to contact me to schedule an interview</span>
                        <span className='w-[85%] mt-[25px] ml-[40px] text-[20px] font-[Archivo] font-[400] xl:w-[70%] 2xl:w-[90%] 2xl:text-[25px] 3xl:text-[30px]'>Use any of the contact methods listed, but preferably use Gmail or mobile (text and phone are both acceptable)</span>
                        <a href="mailto:andrew.moses.smith@gmail.com"><button className='h-[45px] w-[220px] mt-[25px] ml-[40px] pl-[20px] text-start text-[18px] text-white bg-blue-600 rounded-[2px] font-[Archivo] font-[800] 2xl:h-[65px] 2xl:w-[258px] 2xl:text-[21.5px] 2xl:pt-[4px] 2xl:pb-[4px] 3xl:h-[80px] 3xl:w-[294px] 3xl:text-[25px] 3xl:pt-[6px] 3xl:pb-[6px] hover:bg-blue-900'>Email me via Google</button></a>
                        <a href="https://github.com/AndrewMoses1"><button className='h-[45px] w-[300px] mt-[15px] ml-[40px] pl-[20px] text-start text-[18px] bg-transparent border-2 border-black rounded-[2px] font-[Archivo] font-[800] 2xl:h-[65px] 2xl:w-[351px] 2xl:text-[21.5px] 2xl:pt-[4px] 2xl:pb-[4px] 3xl:h-[80px] 3xl:w-[400px] 3xl:text-[25px] 3xl:pt-[6px] 3xl:pb-[6px] hover:bg-black hover:text-white'>View my GitHub repositories</button></a>
                    </div>
                </div>
                <div className='contact-half-rectangle-md absolute self-end h-[200px] w-[210px] mt-[1520px] bg-blue-600 rounded-tl-[50px] rounded-bl-[50px] rounded-tr-0 rounded-br-0 opacity-[.6] xl:self-start xl:mt-[1350px] xl:rounded-tr-[50px] xl:rounded-br-[50px] xl:rounded-tl-[0] xl:rounded-bl-[0]'></div>
                <img className='contact-quarter-circle-md absolute hidden xl:flex self-end h-[220px] w-[320px] mt-[1170px] xl:mt-[1350px]' src={quarterCircleIconMd} alt='' />
            </div>
            <div className='hidden md:flex md:flex-col md:self-end md:h-[150px] md:w-[100%] md:border-t-[3px] md:border-black md:gap-[15px] xl:items-center xl:justify-center'>
                <span className='text-[25px] mt-[27px] ml-[40px] xl:mt-[-2px]'>Built by Andrew</span>
                <span className='text-[25px] ml-[40px] text-blue-600'>2024 &nbsp;Ⓒ&nbsp; All Rights Reserved</span>
            </div>
        </div>
    );
}

export default App;
