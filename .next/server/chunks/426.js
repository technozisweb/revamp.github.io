exports.id=426,exports.ids=[426],exports.modules={480:e=>{e.exports={footerContainer:"style_footerContainer__bn4ax",footerContent:"style_footerContent__UwA_r",logo:"style_logo__ynj6r",brandLogo:"style_brandLogo__OWQUp",brandPromotion:"style_brandPromotion__eoIP_",footerLinks:"style_footerLinks__HK6Gc",iconWithTooltip:"style_iconWithTooltip__8iMbj",tooltip:"style_tooltip__B6l_Z",iconsBox:"style_iconsBox__2q_KZ",contentWrapper:"style_contentWrapper__9iVeU",title:"style_title__0Plfb",listItem:"style_listItem__2zqt2",bottomSection:"style_bottomSection__ofU9H",terms:"style_terms__rQ6Xt",copyrightSection:"style_copyrightSection__cf_fG"}},6120:e=>{e.exports={hamburgerContainer:"style_hamburgerContainer__KHQzU",hamburgerIcon:"style_hamburgerIcon__un1SI",bar:"style_bar__0t5fq",menuOverlay:"style_menuOverlay__k1z_Y",visible:"style_visible__WCBsm",closeIcon:"style_closeIcon__vsb_7",logo:"style_logo__fnisj",menuList:"style_menuList__hDzq6",menuItem:"style_menuItem__dTsfJ",subSegment:"style_subSegment__fHURb",subSegmentItem:"style_subSegmentItem__NN9On",title:"style_title__QUv1M",subTitle:"style_subTitle__UPrb_",actionButtons:"style_actionButtons__dTtsv",getStartedBtn:"style_getStartedBtn__XYzD5",loginBtn:"style_loginBtn__8r2V_"}},9942:e=>{e.exports={mainHeader:"style_mainHeader__fR_2c",mainHeaderContainer:"style_mainHeaderContainer__OzbQ_",logo:"style_logo__x43if",headerOptions:"style_headerOptions__hbTCj",header:"style_header__jSd0M",dropdownMenu:"style_dropdownMenu__VWdT_",short:"style_short__VQnvf",dropDownWrapper:"style_dropDownWrapper__NcPml",doubleGrid:"style_doubleGrid__19ajS",menuItem:"style_menuItem__ETnzX",iconWrapper:"style_iconWrapper__7JdNC",title:"style_title__PbAvx",subTitle:"style_subTitle__r9u3E",menuOpen:"style_menuOpen__He1b9",menuClose:"style_menuClose__ztg0F"}},1069:(e,t,i)=>{"use strict";i.d(t,{A:()=>o});var s=i(2015);let o=()=>{let[e,t]=(0,s.useState)(!1),[i,o]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let e=()=>{let e=window.matchMedia("(max-width: 768px)").matches,i=window.matchMedia("(min-width: 769px)").matches;t(e),o(i)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),{isMobile:e,isDesktop:i}}},7147:(e,t,i)=>{"use strict";i.d(t,{A:()=>l,N:()=>r});var s=i(8732);i(6715);var o=i(2015);let n=(0,o.createContext)(),r=({children:e})=>{let[t,i]=(0,o.useState)("light");return(0,o.useEffect)(()=>{let e=localStorage.getItem("theme");e&&i(e)},[]),(0,s.jsx)(n.Provider,{value:{theme:t,toggleTheme:e=>{i(e),localStorage.setItem("theme",e)}},children:(0,s.jsx)("div",{className:t,children:e})})},l=n},2426:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>W});var s=i(8732),o=i(6715),n=i.n(o),r=i(7147),l=i(1069);let a=[{title:"Our Expertise",listItems:[{label:"ServiceNow",link:"/services/service-now"},{label:"Salesforce",link:"/services/salesforce"},{label:"Data Analytics",link:"/services/data-analytics"},{label:"Open AI",link:"/services/emerging-tech"},{label:"Oracle",link:"/services/oracle"},{label:"SAP",link:"/services/sap"},{label:"Cloud & Infra",link:"/services/cloud-infra"},{label:"Mobility & Development",link:"/services/mobility-development"},{label:"Blockchain & Web3",link:"/services/blockchain-web3"}]},{title:"Business",listItems:[{label:"Professional Services & Build Teams",link:"/business/professional-services"},{label:"Managed IT Services",link:"/business/managed-it"},{label:"Develop & Operate",link:"/business/develop-operate"}]},{title:"Employees",listItems:[{label:"Careers",link:"/employees/careers"},{label:"Community",link:"/employees/community"},{label:"Culture",link:"/employees/culture"},{label:"Open Roles",link:"/employees/open-roles"}]},{title:"Company",listItems:[{label:"About Us",link:"/company"}]}],c=[{icon:"/static/images/linkedIn.svg",link:"https://www.linkedin.com/company/technozis",label:"Join our LinkedIn"},{icon:"/static/images/instagram.svg",link:"https://www.instagram.com/technozis/",label:"Join our Instagram"},{icon:"/static/images/link-icon.svg",link:"https://chat.whatsapp.com/Bu7OFoBvzV77wVNKyoiUjA",label:"Join our Community Group"}],d=`<div class="terms-container" style="max-width: 800px; margin: 40px auto; padding: 30px; font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; background-color: #fff; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
  <h2 class="terms-title" style="font-size: 28px; font-weight: 700; color: #2c3e50; margin-bottom: 20px; text-align: center; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">Terms &amp; Conditions</h2>
  <p class="intro-text" style="font-size: 16px; margin-bottom: 25px; color: #444;">Welcome to Technozis. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions:</p>

  <h3 class="section-title" style="font-size: 20px; font-weight: 600; color: #2c3e50; margin: 25px 0 10px 0; padding-left: 10px; border-left: 4px solid #3498db;">1. Use of Website</h3>
  <p style="margin-bottom: 15px; font-size: 15px;">The content provided on this website is for general information purposes only. We reserve the right to modify or remove content without notice.</p>

  <h3 class="section-title" style="font-size: 20px; font-weight: 600; color: #2c3e50; margin: 25px 0 10px 0; padding-left: 10px; border-left: 4px solid #3498db;">2. Intellectual Property</h3>
  <p style="margin-bottom: 15px; font-size: 15px;">All content, trademarks, logos, and graphics are the property of Technozis or its licensors and are protected by applicable intellectual property laws.</p>

  <h3 class="section-title" style="font-size: 20px; font-weight: 600; color: #2c3e50; margin: 25px 0 10px 0; padding-left: 10px; border-left: 4px solid #3498db;">3. Client Engagement</h3>
  <p style="margin-bottom: 15px; font-size: 15px;">All client engagements for staffing or project delivery are governed by individual agreements, which will supersede the general terms stated here.</p>

  <h3 class="section-title" style="font-size: 20px; font-weight: 600; color: #2c3e50; margin: 25px 0 10px 0; padding-left: 10px; border-left: 4px solid #3498db;">4. Third-Party Links</h3>
  <p style="margin-bottom: 15px; font-size: 15px;">Our website may contain links to third-party websites. We do not endorse or accept responsibility for the content or use of these websites.</p>

  <h3 class="section-title" style="font-size: 20px; font-weight: 600; color: #2c3e50; margin: 25px 0 10px 0; padding-left: 10px; border-left: 4px solid #3498db;">5. Limitation of Liability</h3>
  <p style="margin-bottom: 15px; font-size: 15px;">Technozis shall not be liable for any indirect, incidental, or consequential damages arising from your use of this site.</p>

  <h3 class="section-title" style="font-size: 20px; font-weight: 600; color: #2c3e50; margin: 25px 0 10px 0; padding-left: 10px; border-left: 4px solid #3498db;">6. Privacy Policy</h3>
  <p style="margin-bottom: 15px; font-size: 15px;">Use of this site is also governed by our Privacy Policy, which explains how we collect and handle your data.</p>

  <h3 class="section-title" style="font-size: 20px; font-weight: 600; color: #2c3e50; margin: 25px 0 10px 0; padding-left: 10px; border-left: 4px solid #3498db;">7. Changes to Terms</h3>
  <p style="margin-bottom: 15px; font-size: 15px;">We reserve the right to update these Terms & Conditions at any time. Please review this page periodically for any changes.</p>

  <p class="contact-info" style="margin-top: 30px; font-style: italic; color: #555;">If you have any questions about these terms, please contact us at <a href="mailto:careers@technozis.com" class="link" style="color: #3498db; text-decoration: none; transition: color 0.2s;">careers@technozis.com</a>.</p>

  <p class="footer-text" style="margin-top: 30px; font-size: 14px; text-align: center; color: #7f8c8d; border-top: 1px solid #eee; padding-top: 20px;">\xa9 2025 Technozis. All rights reserved.</p>
</div>
`,p=`<div class="privacy-container" style="max-width: 800px; margin: 40px auto; padding: 30px; font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; background-color: #fff; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
  <h2 class="privacy-title" style="font-size: 28px; font-weight: 700; color: #2c3e50; margin-bottom: 20px; text-align: center; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">Privacy Policy</h2>
  <p class="intro-text" style="font-size: 16px; margin-bottom: 25px; color: #444;">
    At <strong style="color: #2c3e50;">Technozis</strong>, we are committed to protecting your privacy and ensuring a safe online experience. This Privacy Policy outlines the information we collect, how we use it, and how we protect your data when you visit our website <strong>www.technozis.com</strong>.
  </p>
  <p style="font-size: 15px; margin-bottom: 25px; color: #444;">
    Please read this Privacy Policy carefully. By using our website, you consent to the practices described in this policy.
  </p>

  <hr style="border: 0; height: 1px; background: #eee; margin: 30px 0;">

  <h3 class="section-title" style="font-size: 20px; font-weight: 600; color: #2c3e50; margin: 25px 0 10px 0; padding-left: 10px; border-left: 4px solid #3498db;">1. Information We Collect</h3>
  <p style="margin-bottom: 15px; font-size: 15px;">
    We collect information from you when you visit our website, register for an account, subscribe to our newsletter, or interact with our services in other ways. The types of information we may collect include:
  </p>
  <ul style="margin-bottom: 20px; padding-left: 20px; font-size: 15px;">
    <li style="margin-bottom: 8px;"><strong>Personal Identification Information</strong>: Name, email address, phone number, company name, and other information you provide voluntarily.</li>
    <li style="margin-bottom: 8px;"><strong>Usage Data</strong>: IP address, browser type, pages viewed, time spent on the site, and other analytic data.</li>
    <li style="margin-bottom: 8px;"><strong>Cookies and Tracking Technologies</strong>: We use cookies and similar technologies to enhance your experience. See our Cookie Policy for details.</li>
  </ul>

  <h3 class="section-title" style="font-size: 20px; font-weight: 600; color: #2c3e50; margin: 25px 0 10px 0; padding-left: 10px; border-left: 4px solid #3498db;">2. How We Use Your Information</h3>
  <p style="margin-bottom: 15px; font-size: 15px;">
    The information we collect may be used for:
  </p>
  <ul style="margin-bottom: 20px; padding-left: 20px; font-size: 15px;">
    <li style="margin-bottom: 8px;"><strong>Service Improvement</strong>: To operate, maintain, and improve our website and services.</li>
    <li style="margin-bottom: 8px;"><strong>Communication</strong>: To send emails, newsletters, or updates.</li>
    <li style="margin-bottom: 8px;"><strong>Analytics</strong>: To understand user behavior and optimize functionality.</li>
    <li style="margin-bottom: 8px;"><strong>Security</strong>: To prevent unauthorized access and ensure safety.</li>
  </ul>

  <h3 class="section-title" style="font-size: 20px; font-weight: 600; color: #2c3e50; margin: 25px 0 10px 0; padding-left: 10px; border-left: 4px solid #3498db;">3. Sharing Your Information</h3>
  <p style="margin-bottom: 15px; font-size: 15px;">
    We do not sell or rent your personal information. However, we may share data with:
  </p>
  <ul style="margin-bottom: 20px; padding-left: 20px; font-size: 15px;">
    <li style="margin-bottom: 8px;"><strong>Service Providers</strong>: Trusted third parties who assist with hosting, analytics, etc.</li>
    <li style="margin-bottom: 8px;"><strong>Legal Compliance</strong>: When required by law or to protect rights and safety.</li>
    <li style="margin-bottom: 8px;"><strong>Business Transfers</strong>: During mergers, acquisitions, or asset sales.</li>
  </ul>

  <h3 class="section-title" style="font-size: 20px; font-weight: 600; color: #2c3e50; margin: 25px 0 10px 0; padding-left: 10px; border-left: 4px solid #3498db;">4. Cookies and Tracking Technologies</h3>
  <p style="margin-bottom: 15px; font-size: 15px;">
    We use cookies to enhance your experience. You can manage cookies via browser settings, but some features may not work without them. Learn more in our <a href="/cookie-policy" style="color: #3498db; text-decoration: none;">Cookie Policy</a>.
  </p>

  <h3 class="section-title" style="font-size: 20px; font-weight: 600; color: #2c3e50; margin: 25px 0 10px 0; padding-left: 10px; border-left: 4px solid #3498db;">5. Data Security</h3>
  <p style="margin-bottom: 15px; font-size: 15px;">
    We implement security measures to protect your data, but no method is 100% secure. We strive to use commercially acceptable means to safeguard your information.
  </p>

  <h3 class="section-title" style="font-size: 20px; font-weight: 600; color: #2c3e50; margin: 25px 0 10px 0; padding-left: 10px; border-left: 4px solid #3498db;">6. Your Rights and Choices</h3>
  <p style="margin-bottom: 15px; font-size: 15px;">
    Depending on your location, you may have the right to:
  </p>
  <ul style="margin-bottom: 20px; padding-left: 20px; font-size: 15px;">
    <li style="margin-bottom: 8px;">Access, correct, or delete your personal data.</li>
    <li style="margin-bottom: 8px;">Opt-out of marketing communications (use the "unsubscribe" link in emails).</li>
  </ul>
  <p style="margin-bottom: 15px; font-size: 15px;">
    Contact us at <a href="mailto:careers@technozis.com" style="color: #3498db; text-decoration: none;">careers@technozis.com</a> to exercise these rights.
  </p>

  <h3 class="section-title" style="font-size: 20px; font-weight: 600; color: #2c3e50; margin: 25px 0 10px 0; padding-left: 10px; border-left: 4px solid #3498db;">7. Third-Party Websites</h3>
  <p style="margin-bottom: 15px; font-size: 15px;">
    Our site may link to third-party websites. We are not responsible for their privacy practices. Review their policies before sharing data.
  </p>

  <h3 class="section-title" style="font-size: 20px; font-weight: 600; color: #2c3e50; margin: 25px 0 10px 0; padding-left: 10px; border-left: 4px solid #3498db;">8. Children’s Privacy</h3>
  <p style="margin-bottom: 15px; font-size: 15px;">
    Our website is not intended for children under 13. We do not knowingly collect their data and will delete it if discovered.
  </p>

  <h3 class="section-title" style="font-size: 20px; font-weight: 600; color: #2c3e50; margin: 25px 0 10px 0; padding-left: 10px; border-left: 4px solid #3498db;">9. Changes to This Privacy Policy</h3>
  <p style="margin-bottom: 15px; font-size: 15px;">
    We may update this policy periodically. Changes will be posted here with an updated "Effective Date." Check back for updates.
  </p>

  <h3 class="section-title" style="font-size: 20px; font-weight: 600; color: #2c3e50; margin: 25px 0 10px 0; padding-left: 10px; border-left: 4px solid #3498db;">10. Contact Us</h3>
  <p style="margin-bottom: 15px; font-size: 15px;">
    Questions? Reach us at:
  </p>
  <p style="margin-bottom: 15px; font-size: 15px;">
    <strong>Technozis</strong><br>
    Email: <a href="careers@technozis.com" style="color: #3498db; text-decoration: none;">careers@technozis.com</a><br>
    Address: Ground Floor, Tapasya Corp heights, subarea, Sector 126, Noida, Uttar Pradesh 201313
  </p>

  <hr style="border: 0; height: 1px; background: #eee; margin: 30px 0;">

  <p class="footer-text" style="margin-top: 20px; font-size: 14px; text-align: center; color: #7f8c8d; border-top: 1px solid #eee; padding-top: 20px;">
    <strong>By using our website, you agree to the terms of this Privacy Policy.</strong><br>
    \xa9 2025 Technozis. All rights reserved.
  </p>
</div>`;var m=i(480),h=i.n(m),g=i(1106),u=i.n(g);let x=()=>{let e=e=>{n().push(e)};return(0,s.jsxs)("div",{className:h().footerContainer,children:[(0,s.jsxs)("div",{className:h().footerContent,children:[(0,s.jsxs)("div",{className:h().logo,children:[(0,s.jsx)("img",{src:"/static/images/brand-logo.svg",className:h().brandLogo}),(0,s.jsx)("p",{className:h().brandPromotion,children:"We help businesses build, deploy, and operate offering premium professional services on various tech stacks."}),(0,s.jsx)("div",{className:h().footerLinks,children:c.map((e,t)=>(0,s.jsxs)("div",{className:h().iconWithTooltip,children:[(0,s.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("div",{className:h().iconsBox,children:(0,s.jsx)("img",{src:e.icon,alt:"icon"})})}),(0,s.jsx)("span",{className:h().tooltip,children:e.label})]},t))})]}),a.map((t,i)=>(0,s.jsxs)("div",{className:h().contentWrapper,children:[(0,s.jsx)("p",{className:h().title,children:t.title}),t.listItems.map((t,i)=>(0,s.jsx)("div",{className:h().listItem,onClick:()=>e(t.link),children:(0,s.jsx)("p",{children:t.label})},i))]},i))]}),(0,s.jsx)("hr",{}),(0,s.jsxs)("div",{className:h().bottomSection,children:[(0,s.jsx)("p",{className:h().copyrightSection,children:"Copyright \xa9 2024 Technozis. | All Rights Reserved |"}),(0,s.jsx)(u(),{href:{pathname:"/static",query:{htmlContent:d,title:"Terms and Conditions"}},className:h().terms,children:"Terms & Conditions |"}),(0,s.jsx)(u(),{href:{pathname:"/static",query:{htmlContent:p,title:"Privacy Policy"}},className:h().terms,children:"Privacy Policy"})]})]})};var b=i(2015),y=i(7912),f=i.n(y),v=i(943),_=i.n(v),w=i(3544),k=i(6120),z=i.n(k),j=i(8978);let C=[{headLabel:"What we do",subSegment:[{icon:"/static/images/header-menu/header-servicenow.svg",title:"ServiceNow",subtitle:"Expert consulting and solutions for ServiceNow implementation and optimization.",redirectionLink:"/services/service-now"},{icon:"/static/images/header-menu/header-salesforce.svg",title:"Salesforce",subtitle:"Custom Salesforce solutions tailored to your business needs and growth strategies.",redirectionLink:"/services/salesforce"},{icon:"/static/images/header-menu/header-data-analytics.svg",title:"Data Analytics, Data Science & Business Intelligence",subtitle:"Transform your data into actionable insights with cutting-edge analytics and BI solutions.",redirectionLink:"/services/data-analytics"},{icon:"/static/images/header-menu/header-openai.svg",title:"Open AI, Quantum Computing, Augmented Reality",subtitle:"Innovative solutions for AI, quantum computing, and augmented reality to future-proof your business.",redirectionLink:"/services/emerging-tech"},{icon:"/static/images/header-menu/header-oracle.svg",title:"Oracle",subtitle:"Optimize your Oracle applications and databases with specialized consulting and solutions.",redirectionLink:"/services/oracle"},{icon:"/static/images/header-menu/header-sap.svg",title:"SAP",subtitle:"Drive efficiency and scalability with SAP enterprise solutions for your business.",redirectionLink:"/services/sap"},{icon:"/static/images/header-menu/header-cloud.svg",title:"Cloud & Infra",subtitle:"Build a robust, scalable cloud infrastructure to support your business growth and digital transformation.",redirectionLink:"/services/cloud-infra"},{icon:"/static/images/header-menu/header-dev.svg",title:"Mobility & Development",subtitle:"Custom mobile app development and modern software solutions to empower your business on-the-go.",redirectionLink:"/services/mobility-development"},{icon:"/static/images/header-menu/header-data-analytics.svg",title:"Blockchain & Web3",subtitle:"Harness the power of blockchain and Web3 technologies for secure and decentralized solutions.",redirectionLink:"/services/blockchain-web3"}],redirectTo:""},{headLabel:"About us",subSegment:[],redirectionLink:"/company"}],S=()=>{let[e,t]=(0,b.useState)(!1),[i,o]=(0,b.useState)([]),[r,l]=(0,b.useState)(null),a=(e,t)=>{_()(e)?(o([]),l(null)):(o(e),l(t))},c=e=>{e&&n().push(e)};return(0,b.useEffect)(()=>{let e=()=>{t(!1),o([]),l(null)};return n().events.on("routeChangeStart",e),()=>{n().events.off("routeChangeStart",e)}},[]),(0,s.jsxs)("div",{className:z().hamburgerContainer,children:[(0,s.jsx)("div",{className:z().hamburgerIcon,onClick:()=>t(e=>!e),children:[void 0,void 0,void 0].map((e,t)=>(0,s.jsx)("div",{className:z().bar},t))}),e&&(0,s.jsx)("div",{className:`${z().menuOverlay} ${z().visible}`,children:(0,s.jsx)("ul",{className:z().menuList,children:C.map((e,t)=>(0,s.jsxs)("li",{children:[(0,s.jsxs)("div",{className:z().menuItem,onClick:()=>_()(e.subSegment)?c(e.redirectionLink):r===t?a([],null):a(e.subSegment,t),children:[(0,s.jsx)("p",{children:e.headLabel}),!_()(e.subSegment)&&(0,s.jsx)(s.Fragment,{children:r===t?(0,s.jsx)(j.rAP,{}):(0,s.jsx)(j.WnU,{})})]}),r===t&&!_()(i)&&(0,s.jsx)("div",{className:z().subSegment,children:i.map((e,t)=>(0,s.jsxs)("div",{className:z().subSegmentItem,onClick:()=>c(e.redirectionLink),children:[(0,s.jsx)("p",{className:z().title,children:e.title}),(0,s.jsx)("p",{className:z().subTitle,children:e.subtitle})]},t))})]},t))})})]})};var N=i(9942),T=i.n(N);let I=({isMobile:e,isDesktop:t})=>{let[i,o]=(0,b.useState)(null),[r,l]=(0,b.useState)(0),a=(0,b.useRef)([]),c=(0,b.useRef)(null),d=(e,t)=>{e?(c.current&&clearTimeout(c.current),o(t)):c.current=setTimeout(()=>{o(null)},500)};(0,b.useEffect)(()=>{null!==i&&a.current[i]&&l(a.current[i].getBoundingClientRect().left)},[i]),(0,b.useEffect)(()=>{let e=()=>{o(null)};return n().events.on("routeChangeStart",e),()=>{n().events.off("routeChangeStart",e)}},[]);let p=e=>{e&&n().push(e)};return(0,s.jsxs)(b.Fragment,{children:[(0,s.jsx)(f(),{children:(0,s.jsx)("link",{rel:"preload",as:"image"})}),(0,s.jsx)("header",{className:`${T().mainHeader} ${e?T().mobile:""}`,children:(0,s.jsxs)("div",{className:T().mainHeaderContainer,children:[(0,s.jsx)("div",{className:T().logo,children:(0,s.jsx)("img",{src:"/static/images/brand-logo.svg",onClick:()=>n().push("/")})}),(0,s.jsx)("div",{className:T().headerOptions,children:t?C.map((e,t)=>(0,s.jsxs)("div",{ref:e=>a.current[t]=e,className:`${T().header} ${_()(e.subSegment)?"":T().dropdown}`,onMouseEnter:()=>d(!0,t),onMouseLeave:()=>d(!1,t),onClick:()=>p(e.redirectionLink),children:[(0,s.jsx)("p",{children:e.headLabel}),!_()(e.subSegment)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(w.k6A,{}),i===t&&(0,s.jsx)("div",{className:`${T().dropdownMenu} ${e.subSegment.length<5?T().short:""}`,style:{left:e.subSegment.length>5?100:r},onMouseEnter:()=>d(!0,t),onMouseLeave:()=>d(!1,t),children:(0,s.jsx)("div",{className:`${T().dropDownWrapper} ${e.subSegment.length>5?T().doubleGrid:""}`,children:e.subSegment.map((e,t)=>(0,s.jsxs)("div",{className:T().menuItem,onClick:()=>p(e.redirectionLink),children:[!_()(e.icon)&&(0,s.jsx)("div",{className:T().iconWrapper,children:(0,s.jsx)("img",{src:e.icon,alt:"icon"})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:T().title,children:e.title}),(0,s.jsx)("p",{className:T().subTitle,children:e.subtitle})]})]},t))})})]})]},t)):(0,s.jsx)(S,{})})]})})]})},P=({children:e})=>{let{isMobile:t,isDesktop:i}=(0,l.A)();return(0,s.jsxs)("div",{children:[(0,s.jsx)(I,{isMobile:t,isDesktop:i}),(0,s.jsx)("main",{children:e}),(0,s.jsx)(x,{isMobile:t,isDesktop:i})]})};function W({Component:e,pageProps:t}){let i=(0,o.useRouter)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(f(),{children:[(0,s.jsx)("title",{children:"Technozis"}),(0,s.jsx)("link",{rel:"icon",href:"/static/images/brand-logo-2.png"})]}),(0,s.jsx)(P,{children:(0,s.jsx)("div",{className:"contentWrapper",children:"/"===i.pathname?(0,s.jsx)(r.N,{children:(0,s.jsx)(e,{...t})}):(0,s.jsx)(e,{...t})})})]})}i(8133),i(2109),i(4858)},4858:()=>{},2109:()=>{}};