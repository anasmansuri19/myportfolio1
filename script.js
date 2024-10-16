// Smooth scrolling effect for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in effect when sections scroll into view
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(section => {
    observer.observe(section);
});

// Image Slider Functionality
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

document.querySelector('.next-slide').addEventListener('click', () => {
    changeSlide(1);
});

document.querySelector('.prev-slide').addEventListener('click', () => {
    changeSlide(-1);
});

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}
// Initialize EmailJS with your user ID (replace 'YOUR_USER_ID' with the real one)
emailjs.init('YOUR_USER_ID');

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form fields
    if (name === "" || email === "" || message === "") {
        document.getElementById('form-response').textContent = "Please fill out all fields.";
        document.getElementById('form-response').style.color = "red";
        return;
    }

    // Set template parameters
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    // Send the message using EmailJS (replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with actual values)
    emailjs.send('service_ID', 'templatte_ ID', templateParams)
        .then(function (response) {
            document.getElementById('form-response').textContent = "Message sent successfully!";
            document.getElementById('form-response').style.color = "green";
            document.getElementById('contact-form').reset(); // Reset the form
        }, function (error) {
            document.getElementById('form-response').textContent = "Oops! Something went wrong.";
            document.getElementById('form-response').style.color = "red";
        });
});
// Toggle functionality for the About section
document.getElementById('toggle-about').addEventListener('click', function () {
    const aboutDesc = document.getElementById('about-description');
    if (aboutDesc.textContent.includes('web developer')) {
        aboutDesc.textContent = "My journey started with a deep curiosity for technology. I’ve traveled through the vast lands of programming languages and frameworks, picking up new skills along the way, and I’m excited to continue learning and growing.";
        this.textContent = "Show Less";
    } else {
        aboutDesc.textContent = "I'm a web developer passionate about solving complex problems and creating user-friendly interfaces. My journey in web development began as an exploration, and now it's my greatest adventure.";
        this.textContent = "Discover More";
    }
});
// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Chatbot visibility
const chatbotBtn = document.getElementById('chatbot-btn');
const chatbox = document.getElementById('chatbox');
const closeChatBtn = document.getElementById('close-chat');

chatbotBtn.addEventListener('click', function () {
    chatbox.classList.toggle('hidden');
});

closeChatBtn.addEventListener('click', function () {
    chatbox.classList.add('hidden');
});

// Handle sending messages
document.getElementById('send-btn').addEventListener('click', function () {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        displayMessage(userInput, 'user-message');
        generateResponse(userInput);
        document.getElementById('user-input').value = '';
    }
});

// Function to display message
function displayMessage(message, className) {
    const chatContent = document.getElementById('chat-content');
    const messageElem = document.createElement('p');
    messageElem.textContent = message;
    messageElem.classList.add(className);
    chatContent.appendChild(messageElem);
    chatContent.scrollTop = chatContent.scrollHeight;  // Auto-scroll to the latest message
}

// Predefined bot responses
const botResponses = {
    'hello': 'Hi! Welcome to my portfolio. You can ask me about my projects, skills, or how to contact me. How can I help you today?',
    'hi': 'Hi! Welcome to my portfolio. You can ask me about my projects, skills, or how to contact me. How can I help you today?',
    'hey there': 'Hi! Welcome to my portfolio. You can ask me about my projects, skills, or how to contact me. How can I help you today?',
    'what can you do': "I'm here to help you navigate my portfolio. You can ask me about my projects, skills, or contact info!",
    'tell me about yourself': "I'm [Your Name], a passionate web developer with expertise in creating dynamic websites. I specialize in front-end technologies like HTML, CSS, and JavaScript, and I love working on creative projects. Would you like to know more about my skills or experience?",
    'who are you': "I'm [Your Name], a passionate web developer with expertise in creating dynamic websites. I specialize in front-end technologies like HTML, CSS, and JavaScript, and I love working on creative projects. Would you like to know more about my skills or experience?",
    'what\'s your background': "I'm [Your Name], a passionate web developer with expertise in creating dynamic websites. I specialize in front-end technologies like HTML, CSS, and JavaScript, and I love working on creative projects. Would you like to know more about my skills or experience?",
    'show me your projects': "I've worked on several exciting projects, including [Project 1], [Project 2], and [Project 3]. You can explore them in the 'My Projects' section or ask me more about a specific one!",
    'what have you worked on': "I've worked on several exciting projects, including [Project 1], [Project 2], and [Project 3]. You can explore them in the 'My Projects' section or ask me more about a specific one!",
    'how can I contact you': "You can reach me at [your_email@example.com] or connect with me on LinkedIn at [LinkedIn link]. Feel free to fill out the contact form in the 'Contact Me' section as well.",
    'what skills do you have': "I'm skilled in a variety of technologies, including HTML, CSS, JavaScript, and frameworks like React. I also have experience with backend technologies like Node.js and databases. Is there a specific technology you'd like to know more about?",
    'tell me about your experience': "I have a degree in [Your Degree] from [Your University], and I've worked on various web development projects for [X] years. I’ve gained extensive experience in both front-end and back-end development. Would you like to hear more about a specific project or role?",
    'where can I find you online': "You can find me on these platforms:\n- LinkedIn: [LinkedIn URL]\n- GitHub: [GitHub URL]\n- Twitter: [Twitter URL]\nFeel free to connect with me!",
    'take me to your projects': "Sure! Here’s how you can navigate:\n- Projects: [URL or Section Link]\n- About Me: [URL or Section Link]\n- Skills: [URL or Section Link]\n- Contact Me: [URL or Section Link]\nJust let me know where you want to go!",
    'are you available for projects': "Yes, I’m open to new projects and collaborations. Whether it’s front-end web development, full-stack solutions, or anything in between, I’d love to hear about your ideas. You can contact me via email or fill out the form in the 'Contact Me' section.",
    'goodbye': "Goodbye! Have a great day!",
    'i need help': "Of course! What do you need help with? Feel free to ask me any questions.",
    'tell me a joke': "Why do programmers prefer dark mode? Because the light attracts bugs! 😄",
    'surprise me': "Why do programmers prefer dark mode? Because the light attracts bugs! 😄"
};

// Generate bot response
function generateResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();
    let botResponse = 'Sorry, I did not understand that.';

    for (const key in botResponses) {
        if (lowerCaseMessage.includes(key)) {
            botResponse = botResponses[key];
            break;
        }
    }

    setTimeout(() => {
        displayMessage(botResponse, 'bot-message');
    }, 1000);  // Simulate typing delay
}
