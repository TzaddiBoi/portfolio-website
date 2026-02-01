export const projects = [
  {
    id: 1,
    title: 'Bearcechen POS System',
    category: 'Application Development',
    description: 'Offline-first POS system with BIR compliance for Philippine retail businesses. Built with Python and SQLite for reliable inventory management.',
    fullDescription: `
      Local retail stores in the Philippines struggle with expensive cloud-based POS systems 
      requiring constant internet connectivity. Many small businesses needed an affordable, 
      offline-capable solution that's still BIR-compliant and feature-rich.
    `,
    challenge: 'Manual inventory tracking led to errors and inefficiency. Cloud-based systems were too expensive and unreliable in areas with poor internet connectivity.',
    solution: 'Developed an offline-first POS system using Python, SQLite, and Tkinter with comprehensive features including inventory management, sales tracking, and BIR-compliant reporting.',
    results: [
      '30% reduction in manual inventory errors',
      'Streamlined daily operations',
      'Zero dependency on internet connectivity',
      'BIR-compliant receipts and reporting',
      'Cost-effective solution with no monthly fees'
    ],
    tags: ['Python', 'SQLite', 'Tkinter', 'BIR Compliant', 'Offline-First'],
    metrics: '30% Error Reduction',
    featured: true,
    images: [
      '/images/pos-login.jpg',
      '/images/pos-dashboard.jpg',
      '/images/pos-products.jpg',
      '/images/pos-settings.jpg',
      '/images/pos-reports.jpg'
    ],
    tools: ['Python', 'SQLite', 'Tkinter'],
    duration: '3 months',
    role: 'Full-stack Developer',
    client: 'Local Retail Store',
    link: null
  },
  {
    id: 2,
    title: 'IoT Automatic Water Pump',
    category: 'IoT Solutions',
    description: 'Smart water pump automation system using Arduino and sensors for efficient water management and conservation.',
    fullDescription: `
      Traditional water pumps require manual operation, leading to water wastage through overflow, 
      forgotten pumps running dry, and inefficient water usage. Many households and small farms 
      lack affordable automated solutions.
    `,
    challenge: 'Water wastage from manual pump control and lack of automated monitoring systems.',
    solution: 'Developed an IoT-based automatic water pump system using Arduino, ultrasonic sensors, and relay modules for smart water level detection and pump control.',
    results: [
      '20% reduction in water usage',
      'Zero manual intervention required',
      '100% pump protection from dry-running',
      '24/7 automated operation',
      'Energy savings from optimized pump cycles'
    ],
    tags: ['Arduino', 'IoT', 'Sensors', 'C++', 'Automation'],
    metrics: '20% Water Savings',
    featured: true,
    images: [
      '/images/waterpump-circuit.png'
    ],
    tools: ['Arduino', 'Ultrasonic Sensor', 'Relay Module', 'C++'],
    duration: '2 months',
    role: 'Lead Engineer',
    client: 'Personal Project',
    link: null
  },
  {
    id: 3,
    title: 'Portfolio Website',
    category: 'Application Development',
    description: 'Modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.',
    fullDescription: 'Personal portfolio website to showcase projects and skills.',
    challenge: 'Create a professional online presence with modern design.',
    solution: 'Built with React, Tailwind CSS, and deployed on Netlify.',
    results: ['Professional online presence', 'Responsive design', 'Fast loading times'],
    tags: ['React', 'Tailwind', 'Vite', 'Responsive'],
    metrics: 'In Development',
    featured: false,
    images: [],
    tools: ['React', 'Tailwind CSS', 'Vite'],
    duration: '1 month',
    role: 'Full-stack Developer',
    client: 'Personal',
    link: null
  },
  {
    id: 4,
    title: 'Palm Oil CMS',
    category: 'Application Development',
    description: 'Centralized management system for palm oil production tracking and analytics.',
    fullDescription: 'Management system for tracking palm oil production processes.',
    challenge: 'Need for centralized production tracking.',
    solution: 'Building a comprehensive CMS for production management.',
    results: ['Improved tracking', 'Better analytics', 'Centralized data'],
    tags: ['Full-Stack', 'Database', 'Analytics', 'CMS'],
    metrics: 'In Development',
    featured: false,
    images: [],
    tools: ['React', 'Node.js', 'Database'],
    duration: 'Ongoing',
    role: 'Developer',
    client: 'Academic Research',
    link: null
  }
];