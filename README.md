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
- You may use the Admin Panel by going to the `/admin`, admin creds are `Username: admin, Password: admin`.

### How to Host on the LAN:
- When you run the Server, use the following line: `python manage.py runserver <ipv4 address>:<port number>`
  - You may get your IPv4 address from Netowrks in your settings. Example: `192.168.0.107`. Make sure you're connected to a LAN network.
  - Port Number can be any number from `1024 to 65353`. We typically use `8000`.
- Your final code may therefore look something like - `python manage.py runserver 192.168.0.107:8000`. Unless you encounter a fire-wall, this would host EduForAll on your Local Server. Any device on the LAN can now access the website using the same URL you entered viz. `192.168.0.107:8000`.
