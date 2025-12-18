#!/usr/bin/env node

/**
 * Comprehensive script to convert HVAC microsite to Roof Replacement microsite
 * This script will:
 * 1. Delete all HVAC-related service directories
 * 2. Create new roof replacement blog posts
 * 3. Create roof replacement service pages for each city
 * 4. Update resource pages
 */

const fs = require('fs');
const path = require('path');

const BASE_DIR = __dirname;
const PHONE = '(208) 505-9352';
const COMPANY = 'Top Shelf Roof Replacement';
const DOMAIN = 'boise-roof-replacement.com';

const CITIES = [
  { name: 'Boise', slug: 'boise', lat: '43.6150', lng: '-116.2023' },
  { name: 'Meridian', slug: 'meridian', lat: '43.6121', lng: '-116.3915' },
  { name: 'Nampa', slug: 'nampa', lat: '43.5407', lng: '-116.5635' },
  { name: 'Caldwell', slug: 'caldwell', lat: '43.6629', lng: '-116.6874' },
  { name: 'Eagle', slug: 'eagle', lat: '43.6954', lng: '-116.3540' },
  { name: 'Garden City', slug: 'garden-city', lat: '43.6474', lng: '-116.2357' },
  { name: 'Kuna', slug: 'kuna', lat: '43.4913', lng: '-116.4201' },
  { name: 'Star', slug: 'star', lat: '43.6921', lng: '-116.4935' },
  { name: 'Middleton', slug: 'middleton', lat: '43.7068', lng: '-116.6169' }
];

const ROOF_SERVICES = [
  {
    slug: 'full-roof-replacement',
    name: 'Full Roof Replacement',
    shortName: 'Full Replacement',
    description: 'Complete tear-off and new roof installation'
  },
  {
    slug: 'shingle-replacement',
    name: 'Shingle Replacement',
    shortName: 'Shingle Replacement',
    description: 'Asphalt shingle roof replacement and repair'
  },
  {
    slug: 'metal-roof-installation',
    name: 'Metal Roof Installation',
    shortName: 'Metal Roofing',
    description: 'Durable metal roofing systems installation'
  },
  {
    slug: 'tile-roof-replacement',
    name: 'Tile Roof Replacement',
    shortName: 'Tile Roofing',
    description: 'Clay and concrete tile roof replacement'
  },
  {
    slug: 'flat-roof-replacement',
    name: 'Flat Roof Replacement',
    shortName: 'Flat Roofing',
    description: 'Commercial and residential flat roof systems'
  }
];

const BLOGS = [
  {
    slug: 'roof-replacement-cost-boise',
    title: 'Roof Replacement Cost in Boise Idaho',
    metaDescription: 'What does roof replacement cost in Boise? Learn about pricing factors, material costs, and get accurate estimates for your home in the Treasure Valley.',
    h1: 'How Much Does Roof Replacement Cost in Boise?',
    keywords: 'roof replacement cost Boise, new roof price Idaho, roofing cost estimate'
  },
  {
    slug: 'signs-need-roof-replacement',
    title: '10 Signs You Need a New Roof',
    metaDescription: 'Is your Boise home ready for a new roof? Learn the warning signs that indicate you need roof replacement, from missing shingles to water damage.',
    h1: '10 Warning Signs You Need Roof Replacement',
    keywords: 'roof replacement signs, when to replace roof, roof damage indicators'
  },
  {
    slug: 'choosing-roofing-materials-boise',
    title: 'Choosing the Best Roofing Materials for Boise Climate',
    metaDescription: 'Which roofing material is right for Idaho weather? Compare asphalt shingles, metal roofing, and tile to find the best option for your Boise home.',
    h1: 'Best Roofing Materials for Boise Idaho Homes',
    keywords: 'roofing materials Boise, best roof shingles Idaho, metal vs asphalt roofing'
  },
  {
    slug: 'roof-replacement-process',
    title: 'What to Expect During Roof Replacement',
    metaDescription: 'Planning a roof replacement in Boise? Learn the step-by-step process, timeline, and what homeowners should expect during installation.',
    h1: 'The Roof Replacement Process: Step-by-Step Guide',
    keywords: 'roof replacement process, what to expect new roof, roof installation steps'
  },
  {
    slug: 'best-time-roof-replacement-boise',
    title: 'Best Time of Year for Roof Replacement in Boise',
    metaDescription: 'When should you replace your roof in Idaho? Learn the best seasons for roof replacement and how weather affects roofing projects in the Treasure Valley.',
    h1: 'When\'s the Best Time to Replace Your Roof in Boise?',
    keywords: 'best time roof replacement, seasonal roofing Idaho, when to replace roof'
  }
];

// Helper function to delete directory recursively
function deleteFolderRecursive(directoryPath) {
  if (fs.existsSync(directoryPath)) {
    fs.readdirSync(directoryPath).forEach((file) => {
      const curPath = path.join(directoryPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(directoryPath);
    console.log(`✓ Deleted: ${directoryPath}`);
  }
}

// Step 1: Delete all HVAC service directories
function deleteHVACServices() {
  console.log('\n=== STEP 1: Deleting HVAC Service Directories ===');
  const servicesDir = path.join(BASE_DIR, 'src/app/services');
  const hvacDirs = [
    'air-conditioning',
    'ductwork',
    'furnaces',
    'heat-pumps',
    'heating',
    'indoor-air-quality'
  ];

  hvacDirs.forEach(dir => {
    const fullPath = path.join(servicesDir, dir);
    deleteFolderRecursive(fullPath);
  });
}

// Step 2: Delete all HVAC blogs
function deleteHVACBlogs() {
  console.log('\n=== STEP 2: Deleting HVAC Blog Posts ===');
  const blogsDir = path.join(BASE_DIR, 'src/app/blogs');
  const hvacBlogs = [
    'choosing-hvac-contractor-boise',
    'signs-ac-needs-repair',
    'repair-vs-replace-furnace',
    'seasonal-hvac-maintenance',
    'hvac-pricing-explained'
  ];

  hvacBlogs.forEach(blog => {
    const fullPath = path.join(blogsDir, blog);
    deleteFolderRecursive(fullPath);
  });
}

// Step 3: Delete HVAC services from all city pages
function deleteHVACCityServices() {
  console.log('\n=== STEP 3: Deleting HVAC Services from City Pages ===');
  const citiesDir = path.join(BASE_DIR, 'src/app/cities-served');

  CITIES.forEach(city => {
    const cityDir = path.join(citiesDir, city.slug);
    const hvacServices = [
      'ac-installation',
      'ac-maintenance',
      'ac-repair',
      'furnace-installation',
      'furnace-repair',
      'heat-pump-installation',
      'heat-pump-repair',
      'hvac-maintenance'
    ];

    hvacServices.forEach(service => {
      const fullPath = path.join(cityDir, service);
      deleteFolderRecursive(fullPath);
    });
  });
}

console.log('🚀 Starting HVAC to Roof Replacement conversion...');
console.log('This will delete HVAC services and prepare for roof replacement content.');

// Execute deletion steps
deleteHVACServices();
deleteHVACBlogs();
deleteHVACCityServices();

console.log('\n✅ Deletion complete! HVAC content has been removed.');
console.log('Next: Run the content generation script to create roof replacement pages.');
