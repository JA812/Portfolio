var bio = {
    "name": "Johanna Asmuss",
    "role": "Aspiring Web Developer",
    contacts: {
        "mobile": "404-964-4336",
        "email": "johanna.asmuss@gmail.com",
        "github": "JA812",
        "location": "Atlanta, GA"
    },
    "welcomeMessage": "Hello, welcome to my online Portfolio!",
    "skills": ["HTML", "CSS", "Javascript", "JQuery"],
    "bioPic": "images/bioPic.jpg"
};

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedWelcomeMessage);
$("#header").append(formattedImage);


if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#header").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#header").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#header").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#header").append(formattedSkill);



    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedAddress = HTMLcontactGeneric.replace("%data%", bio.contacts.address);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGitHub);
    $("#topContacts").append(formattedLocation);
}

var work = {
    jobs: [{
        "employer": "AT&T",
        "title": "Process Manager",
        "location": "Atlanta, GA",
        "dates": "2013 - present",
        "description": "Developing processes, host monthly training classes"
    }, {
        "employer": "Georgia State University",
        "title": "Instructional Designer",
        "location": "Atlanta, GA",
        "dates": "2010 - 2013",
        "description": ["Developing training classes", "conduct training"]
    }]
};

for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
}


var education = {
    "schools": [{
        "name": "Georgia State University",
        "city": "Atlanta, GA",
        "degree": "MA",
        "majors": "German Literature",
        "dates": "2009 - 2010",
        "url": "http://gsu.edu"
    }, {
        "name": "Potsdam University",
        "city": "Potsdam, Germany",
        "degree": "BA (US Equivalency)",
        "majors": ["English Literature/Spanish Philology"],
        "dates": "2003 - 2007",
        "url": "http://http://www.uni-potsdam.de/"
    }],
    "onlineCourses": [{
        "title": "Javascript Crash Course",
        "school": "Udacity",
        "dates": "2015 - 2016",
        "url": "www.udacity.com"

    }]
};

education.display = function() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedNameDegree = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);
        var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[school].city);
        $(".education-entry:last").append(formattedCity);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedMajors);

    }

    $("#education").append(HTMLonlineClasses);
    for (onlineCourse in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        var formattedOnlineTitleOnlineSchool = formattedOnlineTitle + formattedOnlineSchool;
        $(".education-entry:last").append(formattedOnlineTitleOnlineSchool);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
        $(".education-entry:last").append(formattedOnlineDates);
        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
        $(".education-entry:last").append(formattedOnlineUrl);
    }
}
education.display();




var projects = {
    "projects": [{
        "title": "Online Portfolio",
        "dates": "2016",
        "description": "Built an online Protfolio using HTML, CSS, Javascript and JQuery for Nanodegree Project",
        "images": [
            "images/197x148.gif", "images/197x148.gif"
        ],


    }, {
        "title": "CMS Migration",
        "dates": "2012",
        "description": "Migrated from RedDot Open Text to WordPress",
        "images": [
            "images/197x148.gif", "images/197x148.gif"
        ]


    }]
};

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);

            }
        }
    }
};
projects.display();


$("map").append(googleMap);

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGitHub);
$("#footerContacts").append(formattedLocation);