const screen1 = `   
<div id="app-page1">
    <section id="homepage-image">
        <h1>TECH ED</h1>
        <h2>What do you want to learn?</h2>

        <div class="flex-container">
            <div class="big-box"><img class = "cloud" src="Images/cloud.png">Cloud Computing</div>
            <div class="small-box"><a href="page2.html"><i class="arrow point"></i></a></div> 
        </div>
        <div class="flex-container">
            <div class="big-box"><img class = "barrel" src="Images/barrel.png">Containers</div>
            <div class="small-box"><a href="page3.html"><i class="arrow point"></i></a></div> 
        </div>
        <div class="flex-container">
            <div class="big-box"><img class = "folder" src="Images/folder.png">Local install</div>
            <div class="small-box"><a href="page4.html"><i class="arrow point"></i></a></div> 
        </div>
    </section>
</div>
`
const screen2 = `
<div id="app-screen">
    <div class="square">
        <p>Cloud computing involves running software applications on remote servers accessed over the internet. It offers various services, including infrastructure (IaaS), platform (PaaS), and software (SaaS), allowing users to leverage computing resources without the need for extensive infrastructure setup and management. In a cloud computing model, the application runs on virtualized servers hosted in data centers, managed by a cloud service provider. This approach provides scalability, flexibility, and accessibility, as applications can be easily scaled up or down based on demand and accessed from anywhere with an internet connection. It also offloads infrastructure maintenance and offers pay-as-you-go pricing models.</p>
    </div>
        
    <a href="index.html"><button class="button left">Home</button></a>
    <a href="contact-us.html"><button class="button right">Contact Us</button></a>
</div>
`
const screen3 = `
<div id="app-screen">
    <div class="square">
        <p>Containers provide a lightweight and portable way to package and run software applications. They encapsulate an application along with its dependencies and configuration into a single, isolated unit. Containers utilize containerization technologies like Docker to create an environment that is consistent across different systems and platforms. This approach offers benefits such as easy deployment, scalability, and reproducibility, as containers can be deployed consistently across various environments, from development to production. Containers can be run on local machines, on-premises servers, or in the cloud.</p>
        <a href="index.html"><button class="button left">Home</button></a>
        <a href="contact-us.html"><button class="button right">Contact Us</button></a>
    </div>
        
</div>
`
const screen4 = `
<div id="app-screen">
    <div class="square">
        <p>A local install refers to the traditional approach of running a software application directly on a user's computer or a local server. In this method, the application and all its dependencies are installed and executed on the user's machine, typically through an installer or package manager. This approach offers control and privacy as the software and its data remain within the user's premises. However, it requires manual installation, configuration, and maintenance, and scaling the application may be limited by the hardware resources available.</p>
        <a href="index.html"><button class="button left">Home</button></a>
        <a href="contact-us.html"><button class="button right">Contact Us</button></a>
    </div>
        
</div>

`
const screen5 = `
<div id="app">
    <h3>Got a question? Ask us here!</h3>

    <h4>Your name (optional)</h4>
    <!--Text box for name to be entered-->
    <label for="fname"></label>
    <input type="text" id="fname" name="fname">

    <h4>email*</h4>
    <!--Text box for email to be entered-->
    <label for="femail"></label>
    <input type="text" id="femail" name="femail">
    
    <h4>Your question*</h4>
    <!--Text box for Users question to be entered-->
    <label for="fquestion"></label>
    <input type="text" id="fquestion" name="fquestion">

    <button class="submit-button">Submit</button>
</div>

`

const screens = [screen1, screen2, screen3, screen4, screen5];
var select = screens[0];


function choose1(){
    select = screens[0];
    document.getElementById("app-holder").innerHTML = select;
};

function choose2(){
    select = screens[1]
    document.getElementById("app-holder").innerHTML = select;
};

function choose3(){
    select = screens[2];
    document.getElementById("app-holder").innerHTML = select;
};

function choose4(){
    select = screens[3];
    document.getElementById("app-holder").innerHTML = select;
};

function choose5(){
    select = screens[4];
    document.getElementById("app-holder").innerHTML = select;
};


var i = 0;

function prev(){
    if (i === 0){
        i = 4;
    }
    else {
        i = i - 1;
    }
    select = screens[i];
    document.getElementById("app-holder").innerHTML = select;
}

function next(){
    if (i === 4){
        i = 0;
    }
    else {
        i = i + 1;
    }
    select = screens[i];
    document.getElementById("app-holder").innerHTML = select;
}

document.getElementById("app-holder").innerHTML = select;