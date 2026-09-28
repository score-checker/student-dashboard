const routes = [
  ['/student_dashboard', 'Dashboard', '⌂'],
  ['/student_dashboard/current_courses', 'My Current Courses', '▤'],
  ['/student_dashboard/student_courses', 'Course & Credit History', '▦'],
  ['/student_dashboard/profile', 'Student Profile', '♙'],
  ['/student_dashboard/pending_payment/list', 'Payments & Transactions', '₹'],
  ['/student_dashboard/exam_cities_and_hall_ticket', 'Exam Cities & Hall Tickets', '⌖'],
  ['/student_dashboard/student_certificates', 'Certificates', '♧'],
  ['/student_dashboard/student_documents', 'Documents for Download', '⇩'],
  ['/student_dashboard/submitted_forms_and_receipt', 'Submitted Documents', '▧'],
  ['/student_dashboard/latest_updates', 'Latest Updates Archive', '◷'],
];

const courses = [
  {name:'Statistics for Data Science II', code:'MA1004', path:'ns_26t2_ma1004'},
  {name:'Mathematics for Data Science II', code:'MA1003', path:'ns_26t2_ma1003'},
  {name:'English II', code:'HS1002', path:'ns_26t2_hs1002'},
];

const updates = [
  {date:'24 Sep 2026',title:'The Sep 2026 Course Registration Awaits You',starred:false,html:`<p>Dear Student,</p><p>The Course Registration for the Sep 2026 term is now open.</p><p><strong class="deadline">Deadline for the Registration: September 25th, 2026; 11.59 PM IST</strong></p><p>Please do remember the important checkpoints <strong>Section 18 of student handbook</strong> to be remembered to ensure you keep your track on and do not miss the completion of courses within the stipulated timeline to continue the program.</p><p><strong>Important Dates:</strong></p><ul><li>Quiz 1 Examination: November 15, 2026 (Sunday, 2:00 PM – 6:00 PM)</li><li>Quiz 2 Examination: December 5, 2026 (Saturday, 2:00 PM – 6:00 PM)</li></ul><p>End Term Examination: January 10, 2026 (Sunday, 9:00 AM – 12:00 Noon, 2:00 PM – 5:00 PM)</p><p>Important documents for reference:</p><p>Student Handbook Link: <a href="https://docs.google.com/document/d/e/2PACX-1vRxGnnDCVAO3KX2CGtMIcJQuDrAasVk2JHbDxkjsGrTP5ShhZK8N6ZSPX89lexKx86QPAUswSzGLsOA/pub">CLICK HERE</a><br>Sep 2026 Grading Document Link: <a href="https://docs.google.com/document/d/e/2PACX-1vT_FeqnTq0Br4sUaN7OYAmj1B9MwjchyTEed1Bh5FkZvi5NyIMeAvvkuttostVsJBPjZcs3SjjEfiho/pub">CLICK HERE</a></p><p>IITM BS TEAM</p>`},
  {date:'09 Sep 2026',title:'GENERAL REMINDER : Registration Rules for Sep 2026 Term',starred:false,html:`<p>Please note that the students are advised to carefully review the following guidelines related to academic milestone requirements for the Foundation and Diploma levels.</p><p><strong>Scenario 1: Students who will not be able to Meet the Academic Milestone Requirements</strong></p><p>Students who will not be able to satisfy the required academic milestone even after registering for the maximum number of permitted theory/projects will not be allowed for registration in Sep 2026 term.</p><p>For such students:</p><ol><li>A notification message will be displayed on the first page of the course registration portal indicating that course registration is not permitted for the current term due to inability to meet the academic milestone requirements.</li><li>Notifications will also be communicated through System alerts, eMail and WhatsApp.</li><li>The student email ID will be deactivated after providing a notice period of one month.</li><li>The student ID card will also be revoked in the same term.</li></ol><p><strong>Scenario 2: Students in the Final Milestone Term Not Registering for the required Theory/Projects for the Milestone</strong></p><p>Students who are in their final term must ensure that they register for the required number of theory/projects needed to complete the milestone. If students do not register for the required number of theory/projects, the Operations Team will review registrations after the window closes and contact those students. Students must respond within the stipulated timeline. Students are strongly advised to verify their completed theory/projects and ensure appropriate registration during every term.</p><p><strong>Scenario 3: Students in the term preceding to Final Milestone Term Not Registering for the required Projects for the Milestone</strong></p><p>Students should register for required project courses in the preceding term to complete projects before the milestone term itself. This provides a one-term buffer to complete theory without last-minute academic pressure.</p><p>The above content can also be checked in the student handbook under <a href="#">section 18</a>.</p>`},
  {date:'15 May 2026',title:'Course Planner',starred:false,html:`<p>We are pleased to introduce the Course Planner application for IITM BS Degree students.</p><p>The application helps you understand your academic progress, plan upcoming courses, and stay informed about important milestones.</p><p>Course application: <a href="#">Open Course Planner</a></p>`},
];

const courseScores = [
  {name:'Statistics for Data Science II',scoreRows:[['Week 1 Assignment','90.00'],['Week 2 Assignment','95.00'],['Week 3 Assignment','81.00'],['Week 4 Assignment','71.00'],['Week 5 Assignment','Absent'],['Week 6 Assignment','80.00'],['Week 7 Assignment','33.00'],['Week 8 Assignment','Absent'],['Week 9 Assignment','Absent'],['Week 10 Assignment','Absent'],['Week 1 Activity','100.00'],['Week 2 Activity','100.00'],['Week 3 Activity','100.00'],['Week 4 Activity','89.00'],['Week 5 Activity','100.00'],['Average Activity Score','5.00'],['Quiz 1','85.00'],['Quiz 2','78.00'],['BONUS','2.00'],['MOCK_ASSIGNMENT','Absent'],['End Term Exam Score','92.00'],['Total Course Score','90.00'],['Course Grade Letter','S'],['Allowed to take End Term Exam?','Yes']]},
  {name:'Mathematics for Data Science II',scoreRows:[['Week 1 Assignment','93.00'],['Week 2 Assignment','92.00'],['Week 3 Assignment','82.00'],['Week 4 Assignment','61.00'],...Array.from({length:6},(_,i)=>[`Week ${i+5} Assignment`,'Absent']),['Week 1 Activity','100.00'],['Week 2 Activity','100.00'],['Week 3 Activity','100.00'],['Average Activity Score','6.00'],['Quiz 1','78.00'],['Quiz 2','75.00'],['BONUS','2.00'],['MOCK_ASSIGNMENT','Absent'],['End Term Exam Score','80.00'],['Total Course Score','77.6'],['Course Grade Letter','B'],['Allowed to take End Term Exam?','Yes']]},
  {name:'English II',scoreRows:[...Array.from({length:4},(_,i)=>[`Week ${i+1} Assignment`,'100.00']),...Array.from({length:6},(_,i)=>[`Week ${i+5} Assignment`,'Absent']),['Quiz 1','84.00'],['Quiz 2','78.00'],['BONUS','2.00'],['End Term Exam Score','73.00'],['Total Course Score','80.00'],['Course Grade Letter','A'],['Allowed to take End Term Exam?','Yes']]},
];

const documents = [
  ['ADMISSION_LETTER','Admission Letter','assets/documents/admission-letter.pdf'],['IITM_ID_CARD','Student Identity Card-2026','assets/documents/student-identity-card.pdf'],['RECEIPT','Receipt of payment - F1-2026','assets/documents/payment-receipt-f1-2026.pdf'],['RECEIPT','F3-2025 FEE RECEIPT (QUALIFIER)','assets/documents/fee-receipt-f3-2025-qualifier.pdf'],['RECEIPT','Receipt of payment - F2-2026','assets/documents/payment-receipt-f2-2026.pdf'],['TERMWISE_PROGRESS_CARD','2026 January Progress Card','assets/documents/progress-card-january-2026.pdf'],['TERMWISE_PROGRESS_CARD','2025 September Progress Card','assets/documents/progress-card-september-2025.pdf'],
];

function currentRoute(){
  const path=location.hash.startsWith('#/')?location.hash.slice(1):(location.pathname.replace(/\/$/,'')||'/student_dashboard');
  return routes.some(([r])=>r===path)||path==='/student_dashboard/edit_exam_city_preference'?path:'/student_dashboard';
}
function esc(text){return String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function nav(){
  const path=currentRoute();
  document.querySelector('#side-nav').innerHTML=routes.map(([href,label,icon])=>`<a class="nav-link ${href===path?'active':''}" href="#${href}" data-route="${href}"><span class="nav-icon">${icon}</span><span>${label}</span></a>`).join('');
}
function footer(){return `<footer class="main-footer"><p>Reporting harassment: IITM BS Degree Team is committed to ensuring that everyone is equally valued and treats one another with respect. All complaints of bullying or harassment will be taken seriously and will be dealt with quickly and with respect for all people involved. Learners may write to this email id students-grievance@study.iitm.ac.in which will be considered as a formal complaint. We will make reasonable and appropriate efforts to preserve an individual's privacy and protect the confidentiality of information.</p><p class="support-line">For any other queries or issues, <a href="#">click here</a> to report them or ask for support</p><div class="copyright">© IIT Madras. All rights reserved</div></footer>`;}
function updateCards(){return updates.map((u,i)=>`<article class="update-item" data-title="${esc(u.title.toLowerCase())}" data-starred="${u.starred}"><p class="update-date">${u.date}</p><div class="update-title-row"><h2 class="update-title">${esc(u.title)}</h2><button class="star-button ${u.starred?'starred':''}" aria-label="${u.starred?'Remove from':'Add to'} starred updates" data-star="${i}">★</button></div><div class="update-copy">${u.html}</div></article>`).join('');}
function badge(label,kind='assessment',small=false){
  const w=small?64:150,h=small?60:140;
  const text=kind==='topper'?'Top Course Grade': 'Most Assessment';
  const sub=kind==='topper'?'Foundation':'Completed';
  return `<svg class="badge-art ${small?'badge-art-small':''}" viewBox="0 0 150 140" role="img" aria-label="${esc(label)}" width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <path d="M75 10 132 39v58l-57 33-57-33V39z" fill="#092e9e" stroke="#bd8b00" stroke-width="5"/>
    <path d="M75 17 125 43v50l-50 29-50-29V43z" fill="none" stroke="#f5c400" stroke-width="2"/>
    <circle cx="75" cy="17" r="13" fill="#8b2d22" stroke="#d8b35e" stroke-width="2"/><circle cx="75" cy="17" r="8" fill="#d2ae58"/><path d="M75 10l2 5 5 1-4 3 1 5-4-3-4 3 1-5-4-3 5-1z" fill="#8b2d22"/>
    ${kind==='topper'?`<path d="M5 52h140l-10 10 10 10H5l10-10z" fill="#8e8e8e" stroke="#bdbdbd"/><text x="75" y="64" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" font-weight="700" fill="white">TOPPER</text><text x="75" y="83" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" font-weight="700" fill="white">Top Course Grade</text><text x="75" y="95" text-anchor="middle" font-family="Arial,sans-serif" font-size="9" font-weight="700" fill="white">- Foundation</text>`:`<g fill="none" stroke="white" stroke-width="1.4"><path d="M64 46h19v26H64zM68 42h11v6H68zM68 54l2 2 4-5M68 62l2 2 4-5M68 69l2 2 4-5M78 57l10-8 3 4-10 8zM78 65l10-8"/></g><text x="75" y="83" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" font-weight="700" fill="white">Most Assessment</text><text x="75" y="95" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" font-weight="700" fill="white">Completed</text>`}
  </svg>`;
}
function courseTiles(){return courses.map(c=>`<article class="course-tile"><div class="course-title">${esc(c.name)}</div><a class="course-expand" href="https://seek.study.iitm.ac.in/courses/${c.path}">More Details <span>⌄</span></a></article>`).join('');}
function dashboard(){return `<div class="dashboard-top">
  <section class="updates-column" aria-label="Latest updates"><div class="updates-tabs" role="tablist"><button class="tab-button active" data-tab="latest" role="tab">Latest Updates</button><button class="tab-button" data-tab="search" role="tab">SEARCH</button><button class="tab-button" data-tab="starred" role="tab">VIEW STARRED UPDATES</button></div><div class="updates-panel"><input class="search-input update-search" placeholder="Search updates..." aria-label="Search updates" hidden />${updateCards()}<div class="update-empty" hidden>No updates match your search.</div><a class="text-link older-link" data-route="/student_dashboard/latest_updates" href="#/student_dashboard/latest_updates">View older update &gt;</a></div></section>
  <section class="term-column"><h1 class="term-heading">MAY 2026 TERM</h1><p class="term-date">28 Sept 2026</p><div class="course-grid">${courseTiles()}</div><a class="current-courses-link" href="#/student_dashboard/current_courses" data-route="/student_dashboard/current_courses">Go to My Current Courses Page &gt;</a><a class="drop-courses-link" href="#">Drop Courses Form &gt;<small>Last date to drop courses:</small></a></section>
</div>
<div class="dashboard-cards">
  <div class="dashboard-card-column">
    <section class="dash-card history-card"><div class="dash-card-heading"><h2>Course &amp; Credit History</h2><a href="#/student_dashboard/student_courses" data-route="/student_dashboard/student_courses">Go to page &gt;</a></div><div class="dash-card-body"><p>Credits Earned: <strong>20</strong><br>Credits being pursued in current term: <strong>12</strong></p></div><div class="dash-card-body"><p>Course completed: <strong>8</strong><br>Course completed in current level: <strong>8</strong></p></div></section>
    <section class="dash-card profile-card"><div class="dash-card-heading"><h2>Student Profile</h2><a href="#/student_dashboard/profile" data-route="/student_dashboard/profile">Edit Public Profile &gt;</a></div><div class="dash-card-body"><div class="profile-field">PROGRAM<strong>BS in Data Science and Applications</strong></div><div class="profile-field">CURRENT LEVEL<strong>FOUNDATION</strong></div><div class="badges-label">Badges earned</div><div class="badge-icons">${Array.from({length:6},()=>badge('Most Assessment Completed','assessment',true)).join('')}</div></div></section>
    <section class="dash-card payment-card"><div class="dash-card-heading"><h2>Payment &amp; Transactions</h2></div><div class="dash-card-body">Student balance: <strong>0</strong><br>Scholarship balance: <strong>0</strong></div><div class="dash-card-body">You do not have any pending payments.</div><a class="dash-card-footer" href="#/student_dashboard/pending_payment/list" data-route="/student_dashboard/pending_payment/list">Payments &amp; Transactions Page &gt;</a></section>
  </div>
  <div class="dashboard-card-column">
    <section class="dash-card exam-card"><div class="dash-card-heading"><h2>Exam Cities &amp; Hall Tickets</h2></div><div class="dash-card-body"><div class="muted">Current Preferences:</div><p><strong>QUIZ1:</strong> Lucknow | Kanpur<br><strong>QUIZ2:</strong> Lucknow | Kanpur<br><strong>EXAM:</strong> Lucknow | Kanpur</p><a class="text-link" href="#/student_dashboard/edit_exam_city_preference" data-route="/student_dashboard/edit_exam_city_preference">Edit preferences &gt;</a></div></section>
    <section class="dash-card documents-card"><div class="dash-card-heading"><h2>Certificates and Documents</h2></div><div class="dash-card-body"><p>To view and download certificates earned so far, mark transcripts.</p><a href="#/student_dashboard/student_certificates" data-route="/student_dashboard/student_certificates">Certificates Page &gt;</a></div><div class="dash-card-body"><p>To view and download other documents for download such as student handbook.</p><a href="#/student_dashboard/student_documents" data-route="/student_dashboard/student_documents">Documents for Download Page &gt;</a></div><div class="dash-card-body"><p>To review all documents already submitted</p><a href="#/student_dashboard/submitted_forms_and_receipt" data-route="/student_dashboard/submitted_forms_and_receipt">Submitted Documents Page &gt;</a></div></section>
  </div>
</div>${footer()}`;}
function currentCourses(){return `<div class="course-page-heading"><div class="course-page-date"><strong>28 September, 2026</strong><small>MAY 2026 TERM</small></div><h1>My Current Courses</h1><p>Cumulative Grade Point Average (CGPA) till this term - <strong>9.00</strong></p></div><div class="score-cards">${courseScores.map(c=>`<article class="score-card"><header><h2>${esc(c.name)}</h2><small>NEW COURSE</small><p>BS in Data Science and Applications</p></header><div class="score-list">${c.scoreRows.map(([k,v])=>`<div>${esc(k)} - ${v}</div>`).join('')}<a href="https://seek.study.iitm.ac.in/courses/${courses.find(item=>item.name===c.name)?.path}">Go to Course page &gt;</a></div></article>`).join('')}</div>${footer()}`;}
function renderHistory(){const completed=[['English II','A'],['English I','S'],['Mathematics for Data Science I','C'],['Mathematics for Data Science II','B'],['Statistics for Data Science I','S'],['Computational Thinking','B'],['Programming in Python','S']];const current=[['Statistics for Data Science II','S'],['Mathematics for Data Science II','B'],['English II','A']];return `<div class="history-list"><h1>Program: BS In Data Science And Applications (Active)</h1><h2>Foundational Level Courses</h2><h3>COMPLETED COURSES</h3>${completed.map(([n,g])=>`<div class="history-course"><a href="#">${n}</a><span>Grade Letter: ${g}</span></div>`).join('')}<h3>CURRENT COURSES</h3>${current.map(([n,g])=>`<div class="history-course"><a href="#">${esc(n)}</a><span>Grade Letter: ${g}</span></div>`).join('')}</div>${footer()}`;}
function profile(){
 const types=['topper','assessment','topper','assessment','topper','topper','assessment','assessment'];
 return `<div class="profile-page"><h1>ADIT SINGH <span>✓</span></h1>
  <div class="profile-intro"><div class="profile-photo-placeholder"><img src="assets/profile-photo.jpg" alt="Adit Singh profile photo"></div><div class="profile-basic"><div>Program: BS in Data Science and Applications <span>✓</span></div><div>Level: FOUNDATION <span>✓</span></div><div>Date of Birth: 04 November 2002 <span>✓</span></div><a href="#profile-form">EDIT PROFILE INFO</a></div><div class="profile-visibility"><small>Current profile page status:</small><div><button class="visibility-choice">PRIVATE</button><button class="visibility-choice selected">PUBLIC</button></div><button class="tiny-setting">PUBLIC PROFILE SETTINGS ⚙</button><button class="tiny-setting">PREVIEW / SHARE PUBLIC PROFILE PAGE ↗</button></div></div>
  <section class="profile-badges"><h2>Badges <span>✓</span></h2><div class="profile-badge-row">${types.map(t=>badge(t==='topper'?'Top Course Grade - Foundation':'Most Assessment Completed',t)).join('')}</div></section>
  <div class="profile-sections">
   ${['About Me','Links','Resume'].map(x=>`<section class="profile-section profile-section-empty"><h2>${x}</h2><button class="text-link edit-section">EDIT</button></section>`).join('')}
   <section class="profile-section"><h2>Contact Details</h2><button class="text-link edit-section">EDIT</button><div class="profile-section-content">Phone number: +919415019200<br>Email address: 25f3004760@ds.study.iitm.ac.in <span>✓</span><br>Address for Communication:<br>D-929<br>Omaxe City, RBL Road, Near BBAU<br>Lucknow, Uttar-Pradesh, India - 226025</div></section>
   <section class="profile-section education-section"><h2>Education</h2><button class="text-link edit-section">EDIT</button><div class="profile-section-content"><article><time>2025 - present</time><strong>Lucknow Polytechnic Lucknow</strong><br>Lucknow, Uttar Pradesh, India<br><b>Diploma - Mechanical Engineering</b></article><article><time>2021 - 2024</time><strong>JSS Academy of Technical Education</strong><br>Noida, Uttar Pradesh, India<br><b>Bachelor of Technology - Electrical Engineering</b></article></div></section>
   ${['Work','Projects'].map(x=>`<section class="profile-section profile-section-empty"><h2>${x}</h2><button class="text-link edit-section">EDIT</button></section>`).join('')}
  </div><form id="profile-form" hidden class="profile-edit-form"><label class="field">About me<textarea></textarea></label><button class="button-link">Save</button><div class="success-note">Changes saved in this preview.</div></form></div>${footer()}`;
}
function payments(){return `<h1 class="page-title">Pending Payments</h1><div class="content-card"><div class="empty-state">No pending payments.</div></div>${footer()}`;}
function examCities(){const rows=[['Quiz 1','19 July 2026','Uttar Pradesh | Lucknow','Uttar Pradesh | Kanpur','Closed for edits'],['Quiz 2','16 August 2026','Uttar Pradesh | Lucknow','Uttar Pradesh | Kanpur','Closed for edits'],['End Term Exams','13 September 2026','Uttar Pradesh | Lucknow','Uttar Pradesh | Kanpur','Closed for edits']];return `<div class="exam-cities-page"><section class="hall-tickets-section"><h1>Hall Tickets For Download</h1><p>Your upcoming exam hall tickets will appear here.</p></section><section class="exam-preferences-section"><h2>Exam City Preferences</h2><div class="exam-table-wrap"><table class="data-table exam-city-table"><thead><tr>${['Exam name','Dates','Preference 1','Preference 2','Last Date to Edit Preference'].map(x=>`<th>${x}</th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map(cell=>`<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div><a class="exam-edit-link" href="#/student_dashboard/edit_exam_city_preference" data-route="/student_dashboard/edit_exam_city_preference">EDIT EXAM CITY PREFERENCES</a><p class="exam-city-note">Note: Exam City preferences within India and Outside India can be edited here. If you have any queries please write to <a href="mailto:support@study.iitm.ac.in">support@study.iitm.ac.in</a></p></section></div>${footer()}`;}
function examPrefs(){return `<h1 class="page-title">Edit Exam City Preference Form</h1><h2 class="page-subtitle">For May 2026 Term</h2><button class="outline-button" type="button">NEXT</button>${footer()}`;}
function tablePage(title,rows,cols){return `<h1 class="page-title">${title}</h1><div class="content-card"><div class="table-tools"><label>Show <select class="page-size"><option>10</option><option>25</option><option>50</option><option>100</option></select> entries</label><label>Search: <input class="table-search" aria-label="Search" /></label></div><table class="data-table"><thead><tr>${cols.map(c=>`<th>${c}</th>`).join('')}</tr></thead><tbody>${rows.length?rows.map(row=>`<tr>${row.map(cell=>`<td>${cell}</td>`).join('')}</tr>`).join(''):`<tr><td class="empty-state" colspan="${cols.length}">No data available in table</td></tr>`}</tbody></table><div class="table-pagination"><span>${rows.length?'Showing 1 to '+rows.length+' of '+rows.length+' entries':'Showing 0 to 0 of 0 entries'}</span><div><button class="pagination-button" disabled>Previous</button> <button class="pagination-button" disabled>Next</button></div></div></div>${footer()}`;}
function submitted(){const rows=[['Photograph',false],['OBC-NCL / EWS Certificate',true],['ID Card Scan',false],['Class 12th or Equivalent Marksheet / Degree Certificate / Certificate of Highest Level of Education',false],['Signature',false]];return `<h1 class="page-title">Submitted Documents</h1><div class="submitted-list">${rows.map(([name,verified])=>`<div class="submitted-row"><span class="document-status ${verified?'verified':''}">${verified?'✓':'−'}</span><div class="submitted-copy"><div><strong>${name}</strong> <button class="outline-button view-document">VIEW DOCUMENT</button></div>${verified?'':'<em>Document is under verification</em>'}</div></div>`).join('')}</div>${footer()}`;}
function olderUpdates(){return `<h1 class="page-title">Latest Updates</h1><div class="content-card">${updateCards()}<div class="table-pagination"><span>Showing recent announcements</span><button class="pagination-button">Load more</button></div></div>${footer()}`;}

function render(){
  nav();
  const route=currentRoute();
  const app=document.querySelector('#app');
  const routeClass={
    '/student_dashboard':'route-dashboard',
    '/student_dashboard/current_courses':'route-current-courses',
    '/student_dashboard/student_courses':'route-history',
    '/student_dashboard/profile':'route-profile',
    '/student_dashboard/pending_payment/list':'route-payments',
    '/student_dashboard/exam_cities_and_hall_ticket':'route-exam-cities',
    '/student_dashboard/edit_exam_city_preference':'route-exam',
    '/student_dashboard/student_certificates':'route-certificates',
    '/student_dashboard/student_documents':'route-documents',
    '/student_dashboard/submitted_forms_and_receipt':'route-submitted',
    '/student_dashboard/latest_updates':'route-archive',
  }[route];
  app.className=`page-content ${routeClass||'route-dashboard'}`;
  const page={
    '/student_dashboard':dashboard,
    '/student_dashboard/current_courses':currentCourses,
    '/student_dashboard/student_courses':renderHistory,
    '/student_dashboard/profile':profile,
    '/student_dashboard/pending_payment/list':payments,
    '/student_dashboard/exam_cities_and_hall_ticket':examCities,
    '/student_dashboard/edit_exam_city_preference':examPrefs,
    '/student_dashboard/student_certificates':()=>tablePage('Student Certificates',[],['Certificate Type','Certificate']),
    '/student_dashboard/student_documents':()=>tablePage('Student Documents',documents.map(([type,name,file])=>[type,file?`<a class="text-link document-open" href="${esc(file)}" target="_blank" rel="noopener noreferrer">${esc(name)}</a>`:esc(name)]),['Document Type','Document']),
    '/student_dashboard/submitted_forms_and_receipt':submitted,
    '/student_dashboard/latest_updates':olderUpdates,
  }[route]||dashboard;
  app.innerHTML=page();
  wire();
}
function wire(){
  document.querySelectorAll('[data-route]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();historyPush(a.dataset.route);}));
  document.querySelector('.menu-toggle').onclick=()=>{const s=document.querySelector('.sidebar');const open=s.classList.toggle('open');document.querySelector('.menu-toggle').setAttribute('aria-expanded',String(open));};
  document.querySelectorAll('.tab-button').forEach(b=>b.onclick=()=>setUpdatesTab(b.dataset.tab));
  document.querySelectorAll('[data-star]').forEach(b=>b.onclick=()=>{const card=b.closest('.update-item');const now=card.dataset.starred!=='true';card.dataset.starred=String(now);b.classList.toggle('starred',now);b.textContent='★';});
  const search=document.querySelector('.table-search');if(search)search.addEventListener('input',()=>document.querySelectorAll('.data-table tbody tr').forEach(row=>row.hidden=!row.innerText.toLowerCase().includes(search.value.toLowerCase())));
  const updateSearch=document.querySelector('.update-search');if(updateSearch)updateSearch.addEventListener('input',()=>filterUpdates(updateSearch.value));
  const next=document.querySelector('#exam-next');if(next)next.onclick=()=>{document.querySelector('#exam-step').hidden=true;document.querySelector('#exam-fields').hidden=false;};
  const back=document.querySelector('#exam-back');if(back)back.onclick=()=>{document.querySelector('#exam-fields').hidden=true;document.querySelector('#exam-step').hidden=false;};
  const form=document.querySelector('#exam-form');if(form)form.onsubmit=e=>{e.preventDefault();document.querySelector('.success-note').classList.add('show');};
  const profileForm=document.querySelector('#profile-form');if(profileForm)profileForm.onsubmit=e=>{e.preventDefault();profileForm.hidden=true;document.querySelector('.success-note').classList.add('show');};
  document.querySelectorAll('.edit-section').forEach(b=>b.onclick=()=>{const section=b.closest('section');const p=section?.querySelector('.muted');if(p){const input=document.createElement('input');input.className='search-input';input.placeholder='Add information';input.style.display='block';input.style.margin='8px 0';p.after(input);b.textContent='SAVE';b.classList.remove('edit-section');b.onclick=()=>{input.remove();b.textContent='EDIT';};}});
  document.querySelectorAll('.visibility-choice').forEach(b=>b.onclick=()=>{document.querySelectorAll('.visibility-choice').forEach(x=>x.classList.toggle('selected',x===b));});
  document.querySelectorAll('.view-document').forEach(b=>b.onclick=()=>alert('Document preview is not connected in this frontend demo.'));
}
function historyPush(path){location.hash=path;render();window.scrollTo(0,0);document.querySelector('.sidebar').classList.remove('open');}
function setUpdatesTab(tab){
  document.querySelectorAll('.tab-button').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab));
  const search=document.querySelector('.update-search');search.hidden=tab!=='search';
  if(tab==='search')search.focus();
  filterUpdates(search.value,tab);
}
function filterUpdates(query='',tab='latest'){
  const items=[...document.querySelectorAll('.update-item')];let shown=0;
  items.forEach(item=>{const match=item.dataset.title.includes(query.toLowerCase());const star=tab!=='starred'||item.dataset.starred==='true';item.hidden=!(match&&star);if(match&&star)shown++;});
  const empty=document.querySelector('.update-empty');if(empty)empty.hidden=shown>0;
}
window.addEventListener('popstate',render);
window.addEventListener('hashchange',render);
render();
