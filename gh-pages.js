import ghpages from 'gh-pages';

ghpages.publish(
  'build', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/akoushke/niners-suite-controllers.git', // Update to point to your repository  
    user: {
      name: 'Arash Koushkebaghi', // update to use your name
      email: 'arash.koush@gmail.com' // Update to use your email
    }
  },
  () => {
    console.log('Deploy Complete!')
  }
)