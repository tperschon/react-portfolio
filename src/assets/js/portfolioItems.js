// import images, I'd like to do this in a more catch-all kind of way but time precludes it
const images = {
    passwordgenerator: require('../images/passwordgenerator.png'),
    weddingloop: require('../images/weddingloop.png'),
    pokedex: require('../images/pokedex.png'),
};

// an array containing objects that hold data related to each portfolio item    
const portfolioItems = [
    {
        name: 'Password Generator',
        image: images.passwordgenerator,
        url: 'https://tperschon.github.io/passwordgen/',
        alt: 'Image of the Password Generator project'
    },
    {
        name: 'The Wedding Loop',
        image: images.weddingloop,
        url: 'https://limitless-journey-28555.herokuapp.com/',
        alt: 'Image of the Wedding Loop project'
    },
    {
        name: 'PokeDex Project',
        image: images.pokedex,
        url: 'https://chefkhoird.github.io/PokemonProject/',
        alt: 'Image of the PokeDex project'
    },
];

export default portfolioItems;