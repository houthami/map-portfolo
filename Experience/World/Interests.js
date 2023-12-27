import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Interests {
  constructor() {
    this.experience = new Experience()
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.resources = this.experience.resources
    this.camera = this.experience.camera
    this.debug = this.experience.debug
    this.device = this.sizes.device
    this.scrolling = this.experience.scrolling

    this.sizes.on('switchdevice', (device) => {
      this.device = device
      console.log(device);
    })

    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder('interest1')
    }

    this.obj = {
      x: 4,
      y: 1.2,
      z: 0.5
    }

    // Setup
    this.points = []
    this.raycaster = new THREE.Raycaster()
    this.setInterests()
    this.showInfos()
  }

  setInterests() {
    this.points = [
      {
        position: new THREE.Vector3(2.62, 1.2, 0.9),
        element: document.querySelector('.devFactory')
      },
      {
        position: new THREE.Vector3(-3.75, 1.2, 0.25),
        element: document.querySelector('.amosys')
      },
      {
        position: new THREE.Vector3(-3.75, 1.2, -1.55),
        element: document.querySelector('.oracle')
      },
      /*{
        position: new THREE.Vector3(-0.65, 0.17, -1.2),
        element: document.querySelector('.arcadia')
      },
      {
        position: new THREE.Vector3(3.12, 0.17, 0.41),
        element: document.querySelector('.nabi')
      },
      {
        position: new THREE.Vector3(-4.26, 0.17, 0.66),
        element: document.querySelector('.lumen')
      }*/
    ]

    // Debug
    if (this.debug.active) {
      this.debugFolder
        .add(this.points[2].position, 'x')
        .name('x2')
        .min(-10)
        .max(10)
        .step(0.01)

      this.debugFolder
        .add(this.points[2].position, 'y')
        .name('y2')
        .min(-10)
        .max(10)
        .step(0.01)

      this.debugFolder
        .add(this.points[2].position, 'z')
        .name('z2')
        .min(-10)
        .max(10)
        .step(0.01)

      this.debugFolder
        .add(this.points[1].position, 'x')
        .name('x1')
        .min(-10)
        .max(10)
        .step(0.01)

      this.debugFolder
        .add(this.points[1].position, 'y')
        .name('y1')
        .min(-10)
        .max(10)
        .step(0.01)

      this.debugFolder
        .add(this.points[1].position, 'z')
        .name('z1')
        .min(-10)
        .max(10)
        .step(0.01)
    }
  }

  showInfos() {
    const devFactory = document.querySelector('.devFactory')
    const amosys = document.querySelector('.amosys')
    const oracle = document.querySelector('.oracle')
    const arcadia = document.querySelector('.arcadia')
    const nabi = document.querySelector('.nabi')
    const lumen = document.querySelector('.lumen')

    const closeIcn = document.querySelector('.close')

    const infoPanel = document.querySelector('.info-panel')
    const infoPanelImage = document.querySelector('.info-panel-image')
    const infoPanelLogo = document.querySelector('.info-panel-logo')
    const infoPanelTitle = document.querySelector('.info-panel-title')
    const infoPanelLead = document.querySelector('.info-panel-lead')
    const infoPanelDescription = document.querySelector('.info-panel-description')
    const infoPanelTasks = document.querySelector('.info-panel-tasks')
    const infoPanelMo = document.querySelector('.info-panel-monday')
    const infoPanelTu = document.querySelector('.info-panel-tuesday')
    const infoPanelWe = document.querySelector('.info-panel-wednesday')
    const infoPanelTh = document.querySelector('.info-panel-thursday')
    const infoPanelFr = document.querySelector('.info-panel-friday')
    const infoPanelSa = document.querySelector('.info-panel-saturday')
    const infoPanelSu = document.querySelector('.info-panel-sunday')
    const infoPanelPhone = document.querySelector('.info-panel-phone')
    const infoPanelEmail = document.querySelector('.info-panel-email')
    const infoPanelWebsite = document.querySelector('.info-panel-website')
    let infoPanelRightStyle = '0'

    const infos = [
      // jobs
      {
        'image': '/images/img-devFactory.png',
        'title': 'Dev Factory',
        'role': 'Software engineer',
        'from': '06/01/2023',
        'too': 'present',
        'lead': 'DevFactory is a development and IT-focused association dedicated to preparing junior individuals, students, and those without an IT background for the job market.',
        'tasks': [
          'Oversee the planning, execution, and delivery of projects, ensuring they meet client requirements and deadlines.',
          'Actively participate in the development process, contributing to coding, debugging, and problem-solving activities.',
          'Provide leadership and guidance to the development team, ensuring a positive and productive work environment.'
        ],
        'contact': [
          '+212 627 520361',
          'dev.factory.grp@gmail.com'
        ],
        'website': '#'
      },
      {
        'image': '/images/img-amosys.png',
        'title': 'Amosys',
        'role': 'Software engineer',
        'from': '11/01/2022',
        'too': 'present',
        'lead': 'AMOSYS is a leading Moroccan-based assurance system dedicated to development. Collaborating with over 84 assurance companies across more than 15 countries, AMOSYS plays a pivotal role in shaping the landscape of assurance services in the African continent.',
        'tasks': [
          'Database Design and Implementation: Orchestrated the design and implementation of databases, including Oracle, MongoDB, and Postgres.',
          'User Interface and System Development: Led the development of a responsive UI/UX using Figma and React.js, along with the implementation of server APIs using Vert.x for streamlined integration.',
          'Team Collaboration and Project Oversight: Collaborated within a dynamic 10-member team, overseeing code review processes, and served as a Scrum Master to facilitate Agile methodologies, ensuring efficient project delivery and team collaboration.'
        ],
        'contact': [
          '+212 500 0000',
          'amosys@orsys.co.ma'
        ],
        'website': '#'
      },
      {
        'image': '/images/img-oracle.png', 
        'title': 'Oracle',
        'role': 'Software engineer intern',
        'from': '11/01/2022',
        'too': 'present',
        'lead': 'Oracle Corporation, a global technology leader, specializes in database management systems, cloud solutions, and enterprise software, shaping the forefront of information technology',
        'tasks': [
          "Database Optimization and Design: Lead the design and implementation of Oracle databases, focusing on optimizing data structures and ensuring efficient performance to meet the company's data management needs.",
          "User Interface Development: Develop user-friendly product screens using React.js, emphasizing an intuitive and visually appealing interface that enhances the overall user experience.",
          "API Development for Seamless Integration: Spearhead the development of product server APIs using Dropwizard, ensuring streamlined integration for improved system functionality and interconnectivity with other components."
        ],
        'contact': [
          '+212 522 977 308',
          'contact@oracle.com'
        ],
        'website': 'https://www.oracle.com/ma/corporate/contact/'
      },
      /* Restaurants & Cafés
      {
        'image': '/images/img-arcadia.jpg',
        'logo': '/images/logo-arcadia.svg',
        'title': 'Arcadia Restaurant',
        'lead': `Authentic Mediterranean dining at the heart of Lausanne's arts district`,
        'description': `Arcadia Restaurant, with its seven iconic arches, opens the door to a la carte Mediterranean cuisine, balancing fresh flavours with seasonal local ingredients and products. Our menu is served alongside an inspired cocktail offering and a selection of local beer and wines. <br><br>
        For those looking for a relaxed, tasty, and inclusive dining experience, whether at lunch for everyday cooking or in the evening for a more special occasion. Always in a relaxed and friendly environment.`,
        'schedule': [
          '10:00 - 23:00',
          'Closed',
          '10:00 - 23:00',
          '10:00 - 23:00',
          '10:00 - 23:00',
          '10:00 - 23:00',
          '10:00 - 18:00'
        ],
        'contact': [
          '+41 21 318 44 10',
          'info@arcadiarestaurant.ch'
        ],
        'website': 'https://www.arcadiarestaurant.ch/'
      },
      {
        'image': '/images/img-nabi.jpg',
        'logo': '/images/logo-nabi.svg',
        'title': 'Le Nabi Café-Restaurant',
        'lead': `Traditional cuisine to savour before or after a visit to Plateforme 10!`,
        'description': `The menu aims to be inviting, familial, yet inventive. Traditional cooking is restyled while the menu follows the seasons by adapting to the harvest of local producers. The drinks are artisanal. Meticulous service at reasonable prices for a convivial moment that everyone can afford to enjoy. Kids are very much welcome, too. Menu selections are designed for savory discoveries, and a play area encourages creativity.`,
        'schedule': [
          'Closed',
          '09:30 - 18:00',
          '09:30 - 18:00',
          '09:30 - 20:00',
          '09:30 - 18:00',
          '09:30 - 18:00',
          '09:30 - 18:00'
        ],
        'contact': [
          '+41 21 311 02 90',
          'info@lenabi.ch'
        ],
        'website': 'https://www.devFactory.ch/en/cafe-restaurant-2/'
      },
      {
        'image': '/images/img-lumen.jpg',
        'logo': '/images/logo-lumen.svg',
        'title': 'Lumen Café',
        'lead': `A spontaneous and fast cuisine with authentic artisanal products`,
        'description': `Le Café Lumen invites you to discover its menu of quick and spontaneous dishes that use artisanal products served simply on a board, in a clay bowl, or nestled between two slices of focaccia. Here you will find the best of the region’s culinary tradition. All our drinks are artisanal with a fine selection of craft cider and beer, wine, and homemade non-alcoholic beverages. Our coffee is freshly roasted. We’re a stop along the region’s greenway, the Voie Verte foot and bicycle path, with takeaway service available.`,
        'schedule': [
          '10:00 - 18:00',
          'Closed',
          '10:00 - 18:00',
          '10:00 - 20:00',
          '10:00 - 18:00',
          '10:00 - 18:00',
          '10:00 - 18:00'
        ],
        'contact': [
          '+41 21 311 02 90',
          'info@cafelumen.ch'
        ],
        'website': 'https://amosys.ch/de/cafe-lumen/'
      }*/
    ]

    if (this.device === 'desktop') {
      infoPanelRightStyle = '-33%'
    } else {
      infoPanelRightStyle = '-100%'
    }
    if (devFactory) {
      devFactory.addEventListener('click', () => {
        let taskHTML = ''
        infos[0].tasks.forEach((task) => {
          taskHTML += `<li>${task}</li>`
        })
        this.scrolling.target = 0
        infoPanel.style.right = '10px'
        infoPanelImage.src = infos[0].image
        infoPanelTitle.innerHTML = infos[0].title
        infoPanelLead.innerHTML = infos[0].lead
        infoPanelTasks.innerHTML = `<ol>${taskHTML}</ol>`
        infoPanelPhone.innerHTML = infos[0].contact[0]
        infoPanelEmail.innerHTML = infos[0].contact[1]
        infoPanelWebsite.href = infos[0].website
      });
    }
    if (amosys) {
      amosys.addEventListener('click', () => {
        let taskHTML = ''
        infos[1].tasks.forEach((task) => {
          taskHTML += `<li>${task}</li>`
        })
        this.scrolling.target = 0
        infoPanel.style.right = '0'
        infoPanelImage.src = infos[1].image 
        infoPanelTitle.innerHTML = infos[1].title
        infoPanelLead.innerHTML = infos[1].lead 
        infoPanelTasks.innerHTML = `<ol>${taskHTML}</ol>` 
        infoPanelPhone.innerHTML = infos[1].contact[0]
        infoPanelEmail.innerHTML = infos[1].contact[1]
        infoPanelWebsite.href = infos[1].website
      });
    }
    if (oracle) {
      oracle.addEventListener('click', () => {
        let taskHTML = ''
        infos[2].tasks.forEach((task) => {
          taskHTML += `<li>${task}</li>`
        })
        this.scrolling.target = 0
        infoPanel.style.right = '0'
        infoPanelImage.src = infos[2].image 
        infoPanelTitle.innerHTML = infos[2].title
        infoPanelLead.innerHTML = infos[2].lead  
        infoPanelTasks.innerHTML = `<ol>${taskHTML}</ol>`
        infoPanelPhone.innerHTML = infos[2].contact[0]
        infoPanelEmail.innerHTML = infos[2].contact[1]
        infoPanelWebsite.href = infos[2].website
      });
    }
    if (arcadia) {
      arcadia.addEventListener('click', () => {
        this.scrolling.target = 0
        infoPanel.style.right = '0'
        infoPanelImage.src = infos[3].image
        infoPanelLogo.src = infos[3].logo
        infoPanelTitle.innerHTML = infos[3].title
        infoPanelLead.innerHTML = infos[3].lead
        infoPanelDescription.innerHTML = infos[3].description
        infoPanelMo.innerHTML = infos[3].schedule[0]
        infoPanelTu.innerHTML = infos[3].schedule[1]
        infoPanelWe.innerHTML = infos[3].schedule[2]
        infoPanelTh.innerHTML = infos[3].schedule[3]
        infoPanelFr.innerHTML = infos[3].schedule[4]
        infoPanelSa.innerHTML = infos[3].schedule[5]
        infoPanelSu.innerHTML = infos[3].schedule[6]
        infoPanelPhone.innerHTML = infos[3].contact[0]
        infoPanelEmail.innerHTML = infos[3].contact[1]
        infoPanelWebsite.href = infos[3].website
      });
    }
    if (nabi) {
      nabi.addEventListener('click', () => {
        this.scrolling.target = 0
        infoPanel.style.right = '0'
        infoPanelImage.src = infos[4].image
        infoPanelLogo.src = infos[4].logo
        infoPanelTitle.innerHTML = infos[4].title
        infoPanelLead.innerHTML = infos[4].lead
        infoPanelDescription.innerHTML = infos[4].description
        infoPanelMo.innerHTML = infos[4].schedule[0]
        infoPanelTu.innerHTML = infos[4].schedule[1]
        infoPanelWe.innerHTML = infos[4].schedule[2]
        infoPanelTh.innerHTML = infos[4].schedule[3]
        infoPanelFr.innerHTML = infos[4].schedule[4]
        infoPanelSa.innerHTML = infos[4].schedule[5]
        infoPanelSu.innerHTML = infos[4].schedule[6]
        infoPanelPhone.innerHTML = infos[4].contact[0]
        infoPanelEmail.innerHTML = infos[4].contact[1]
        infoPanelWebsite.href = infos[4].website
      });
    }
    if (lumen) {
      lumen.addEventListener('click', () => {
        this.scrolling.target = 0
        infoPanel.style.right = '0'
        infoPanelImage.src = infos[5].image
        infoPanelLogo.src = infos[5].logo
        infoPanelTitle.innerHTML = infos[5].title
        infoPanelLead.innerHTML = infos[5].lead
        infoPanelDescription.innerHTML = infos[5].description
        infoPanelMo.innerHTML = infos[5].schedule[0]
        infoPanelTu.innerHTML = infos[5].schedule[1]
        infoPanelWe.innerHTML = infos[5].schedule[2]
        infoPanelTh.innerHTML = infos[5].schedule[3]
        infoPanelFr.innerHTML = infos[5].schedule[4]
        infoPanelSa.innerHTML = infos[5].schedule[5]
        infoPanelSu.innerHTML = infos[5].schedule[6]
        infoPanelPhone.innerHTML = infos[5].contact[0]
        infoPanelEmail.innerHTML = infos[5].contact[1]
        infoPanelWebsite.href = infos[5].website
      });
    }
    if (closeIcn) {
      closeIcn.addEventListener('click', () => {
        infoPanel.style.right = infoPanelRightStyle
      });
    }
  }

  resize() { }

  update() {
    for (const point of this.points) {
      console.log(point)
      const screenPosition = point.position.clone()
      screenPosition.project(this.camera.orthographicCamera)

      point.element.classList.add('visible')

      // this.raycaster.setFromCamera(screenPosition, this.camera.orthographicCamera)
      // const intersects = this.raycaster.intersectObjects(this.scene.children, true)

      // if(intersects.length === 0) {
      //   point.element.classList.add('visible')
      // } else {
      //   const intersectionDistance = intersects[0].distance
      //   const pointDistance = point.position.distanceTo(this.camera.orthographicCamera.position)

      //   if(intersectionDistance < pointDistance) {
      //     point.element.classList.remove('visible')
      //   } else {
      //     point.element.classList.add('visible')
      //   }
      // }

      const translateX = screenPosition.x * this.sizes.width * 0.5
      const translateY = - screenPosition.y * this.sizes.height * 0.5
      point.element.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`
    }
  }
}
