const container = document.querySelector('.carousel-container');
const cards = container.querySelectorAll('.cardDiv');
let currentIndex = 0;

function changeCard(direction) {
    const cardWidth = parseFloat(cards[0].offsetWidth ) + 16; // Including margin
    const maxIndex = cards.length - 1; // Number of visible cards

    if (direction === 'left' && currentIndex > 0) {
    currentIndex--;
    } else if (direction === 'right' && currentIndex < maxIndex) {
    currentIndex++;
        console.log(cardWidth)
    }

    const translateValue = -currentIndex * cardWidth + 'px';
    
    // Only the cards within the container should move, not the container itself
    cards.forEach((card) => {
    card.style.transform = 'translateX(' + translateValue + ')';
    });
};

function firstCard(){
    currentIndex=0;
    const cardWidth = parseFloat(cards[0].offsetWidth ) + 16;

    const translateValue = (-currentIndex) * cardWidth +'px';
    cards.forEach((card) =>{
        card.style.transitionDuration = '0.8s';
        card.style.transform = 'translateX(' + translateValue + ')';
    });
}


function openInNewTab(url) {//open the link in a new tab
    window.open(url, '_blank');
  };
