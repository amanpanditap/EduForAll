# EduForAll - Solving the Education Accessibilty.
## A Proposal for the Community Development Project.

### About:
&nbsp;&nbsp;&nbsp;&nbsp;Since the advent of internet, free high-quality education is now in abundace, although a vast majority of people still struggle to have access to high-speed stable internet. This potentially hampers the growth of primarily rural students who have to resort to studying by the methods of days of Yore. This project aims to solve that problem.<br>
&nbsp;&nbsp;&nbsp;&nbsp;**EduForAll** is a Django Web App built to be hosted completely offline - on a LAN network providing features of getting Study Resources, taking chapterwise Tests and maintaining a Forum for the students to ask and answer each others' doubts within the Network.

### How to Install:
- Clone the Project using `https://github.com/amanpanditap/EduForAll.git`.
- Install **Python** if you haven't already.
- Install **Django** using  `python -m pip install Django`.
- In directory on level with `manage.py` run the following line on Terminal `python manage.py runserver`.
- That's it! You may go on the link given on the Terminal.
- You may use the Admin Panel by going to the `/admin`, admin creds are `Username: admin, Password: admin` (recommended to be changed during deployment)

### How to Host on the LAN:
- When you run the Server, use the following line: `python manage.py runserver <ipv4 address>:<port number>`
  - You may get your IPv4 address from Netowrks in your settings. Example: `192.168.0.107`. Make sure you're connected to a LAN network.
  - Port Number can be any number from `1024 to 65353`. We typically use `8000`.
- Your final code may therefore look something like - `python manage.py runserver 192.168.0.107:8000`. Unless you encounter a fire-wall, this would host EduForAll on your Local Server. Any device on the LAN can now access the website using the same URL you entered viz. `192.168.0.107:8000`.

### Features:
- **Tests**
  - Solve Chapter-based MCQ Tests to practice the necessary concepts.
  - Search for the tests based on your Medium, Board, Grade and Subject.
- **Syllabus**
  - Fetch the Textbooks by Medium, Board and Grade.
  - You may choose to read or download on your device.
- **Forum**
  - Ask any Doubts or help to get other students' doubts cleared.
  - You need to Register/Login for the same, so as to maintain the data of the answerer.

### Stack Used:
- **Backend** - Python, Django.
- **Database** - SQLite.
- **Frontend**- HTML, CSS, JS, jQuery, Bootstrap.

### Get in Touch
- *Team Rational Rulers*
  - **Veerja Kadam** - <a href="https://github.com/veerja-kadam">GitHub</a> | <a href="https://www.linkedin.com/in/veerja-kadam-ba23a316a/">LinkedIn</a>
  - **Aman Pandit** - <a href="https://github.com/amanpanditap">GitHub</a> | <a href="https://www.linkedin.com/in/amanpanditwce/">LinkedIn</a>
  - **Vatsala Singh** - <a href="mailto:@Vatsalasingh2212@gmail.com">Email</a> | <a href="https://www.instagram.com/tempest_steel_vatsala/">Instagram</a>
  - **Vaishnavi Mahajan** - <a href="https://github.com/VaishnaviM411">GitHub</a> | <a href="https://www.linkedin.com/in/vaishnavi-mahajan-a191121a5/">LinkedIn</a>
  - **Devang Kamble** - <a href="https://github.com/rising-entropy">GitHub</a> | <a href="https://www.linkedin.com/in/devang-kamble/">LinkedIn</a>
