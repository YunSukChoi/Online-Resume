var bio = {
    "name": "Yun Suk Choi",
    "role": "Front Web Developer",
    "contacts": {
        "mobile": "215-500-3874",
        "email": "yunsukchoi3@gmail.com",
        "github": "yunsukchoi",
        "location": "Tysons Corner, VA"
    },
    "biopic": "images/Me.png",
    "skills": ["HTML", "CSS", "JS", "GitHub", "Adobe Illustrator", "Adobe Photoshop"],
    "welcomeMessage": "Get creative! Get inspired! Get going!"

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
        "majors": ["Electrical Engineering"],
        "url": "www.chonbuk.ac.kr"
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
        "dates": "2016",
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
    var formattedPicture = HTMLbioPic.replace('%data%', bio.biopic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);


    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);


    //header and footer contacts info
    $("#topContacts").after(formattedPicture, formattedWelcome);
    $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);


    $("#header").append(HTMLskillsStart);

    var formattedSkills;
    for (var i = 0; i < bio.skills.length; i++) {
        formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkills);

    }

};
bio.display();

//display work
work.display = function() {
    $("#workExperience").append(HTMLworkStart);
    for (var i = 0; i < work.jobs.length; i++) {


        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formatttedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formatttedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(formattedWorkDescription);

    }
};
work.display();

//display projects
projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    for (var i = 0; i < projects.projects.length; i++) {


        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDates);
        $(".project-entry:last").append(formattedProjectDescription);



        var formattedProjectImage;
        for (var j = 0; j < projects.projects[i].images.length; j++) {
            formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
            $(".project-entry:last").append(formattedProjectImage);
        }
    }

};
projects.display();



// display school
education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var i = 0; i < education.schools.length; i++) {
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[0]);
        var formattedURL = HTMLonlineURL.replace("%data%", education.schools[i].url)

        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolMajor);
        $(".education-entry:last").append(formattedURL);

    }

    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    for (var i = 0; i < education.onlineCourses.length; i++) {

        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);
        $(".education-entry:last").append(formattedonlineDates);
        $(".education-entry:last").append(formattedonlineURL);
    }

};
education.display();




$("#mapDiv").append(googleMap);