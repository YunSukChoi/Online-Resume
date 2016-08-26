/*
This is empty on purpose! Your code to build the resume will go here.
 */
var formattedName = HTMLheaderName.replace("%data%", "Yun Suk Choi");
var role = "Front Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
    "name": "Yun Suk Choi",
    "role": "Front Web Developer",
    "contacts": {
        "mobile": "215-500-3874",
        "email": "yunsukchoi3@gmail.com",
        "github": "yunsukchoi",
        "location": "Tysons Corner, VA"
    },
    "picture": "images/Me.png",
    "skills": ["HTML", "CSS", "JS", "JQuery", "GitHub", "Fluent in Korean"],
    "welcomemessage": "Get creative! Get inspired! Get going!"

};


var work = {
    "jobs": [{
        "employer": "Apsun Inc",
        "title": "Sales Support Representative",
        "dates": "01/2009 - 10/2013",
        "location": "Seoul, South Korea",
        "description": "Worked for a medical device company as an assistant to the sales lead and liaison to foreign business partners. Supported the sales team and company officers by interpreting meetings with business partners regarding the sales and training of new products and status of domestic sales"
    }, {
        "employer": "Lutronic",
        "title": "Customer Service Representative",
        "dates": "10/2006 - 07/2008",
        "location": "Gyeonggi, South Korea",
        "description": "Answered technical queries from customers at a laser manufacturing company. Monitored and updated the status of equipment returns, replacements, sales orders, delivery schedules, etc."
    }]
};

var education = {
    "schools": [{
        "name": "Chonbuk National University",
        "degree": "Bachelor's Degree",
        "dates": "03/2001 - 2/2006",
        "location": "Jeonju, South Korea",
        "majors": ["Electrical Engineering"]
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "In progress",
        "url": "www.udacity.com"
    }]
};



var projects = {
    "projects": [{
        "title": "A portfolio with responsive web design",
        "date": "2016",
        "description": "Made a portfolio with responsive web design for Nexus 5, iPad and Desktop",
        "images": ["images/project1.jpg", "images/project2.jpg", "images/project3.jpg"]
    }]
};


// display bio

bio.display = function() {


    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedPicture = HTMLbioPic.replace('%data%', "images/Me.png");
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomemessage);

    //header contacts info
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);
    $("#topContacts").after(formattedPicture);
    $("#topContacts").after(formattedWelcome);


    $("#header").append(HTMLskillsStart);

    var formattedSkills;
    for (var i = 0; i < bio.skills.length; i++) {
        formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkills);

    }

    //footer contacts info
    $("#footerContacts").append(formattedMobile);
    $("#tfooterContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedLocation);

};
bio.display();

//display work
function displayWork() {
    for (var job in work.jobs) {
      if(work.jobs.hasOwnProperty(job)){
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formatttedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formatttedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(formattedWorkDescription);
      }

    }
}
displayWork();

function displayProject() {
    for (var project in projects.projects) {
      if(projects.projects.hasOwnProperty(project)){
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDates);
        $(".project-entry:last").append(formattedProjectDescription);

        var formattedProjectImage;
        for (var i = 0; i < projects.projects[project].images.length; i++) {
            formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[i]);
            $(".project-entry:last").append(formattedProjectImage);
        }
      }

    }
}
displayProject();



// display school
function displayEducation() {

    for (var school in education.schools) {
      if(education.schools.hasOwnProperty(school)){
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[0]);

        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolMajor);
      }
    }

}
displayEducation();


//display online course
function displayonlineCourses() {
    $("#education").append(HTMLonlineClasses);
    for (var course in education.onlineCourses) {
      if(education.onlineCourses.hasOwnProperty(course)){
        $("#education").append(HTMLschoolStart);
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);
        $(".education-entry:last").append(formattedonlineDates);
        $(".education-entry:last").append(formattedonlineURL);
      }
    }
}
displayonlineCourses();


$("#mapDiv").append(googleMap);