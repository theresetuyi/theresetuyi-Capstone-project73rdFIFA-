const speakerArray = [
    {
      image: 'Images/Gianni Infantino.jpg',
      name: 'Gianni Infantino, ',
      title: 'President of FIFA',
      description: 'Giovanni Vincenzo Infantino (born 23 March 1970) is a Swiss football administrator and the current president of FIFA. He was elected President of FIFA during the 2016 FIFA',
    },
    {
      image: 'Images/HE Paul Kagame.png',
      name: 'HE Paul Kagame',
      title: 'President of Rwanda',
      description: 'Paul Kagame is President of the Republic of Rwanda,Commonwealth Chair-in-Office',
    },
    {
      image: 'Images/Aleksander Čeferin.PNG',
      name: 'Aleksander Čeferin',
      title: 'president of UEFA',
      description: 'Aleksander Čeferin (born 13 October 1967) is a Slovenian lawyer and football administrator. Between 2011 and 2016, he was president of the Football Association of Slovenia. Since September 2016.',
    },
    {
      image: 'Images/Patrice Motsepe.PNG',
      name: 'Patrice Motsepe',
      title: 'President of the Confederation of African Football',
      description: ' Patrice Tlhopane Motsepe is a South African mining billionaire businessman. Since 12 March 2021, he has been serving as the President of the Confederation of African Football',
    },
    {
      image: 'Images/Salman Ebrahim.PNG',
      name: 'Salman bin Ibrahim Al Khalifa ',
      title: 'president of the Asian Football Confederation',
      description: ' the 10th President of the Asian Football Confederation with a resounding majority at the AFC Extraordinary Congress held in Kuala Lumpur, Malaysia, in May 2013. He was also elected to the FIFA Executive Committee (now known as the FIFA Council) by the same Congress.',
      },
      {
      image: 'Images/Mugabo Olivier.png',
      name: 'Mugabo Nizeyimana Olivier',
      title: ' FERWAFA president',
      description: 'Members of Rwanda Football Federation (FERWAFA) have backed businessman Olivier Nizeyimana to lead them in the next four years ',
      },
    ];
  const cardss = document.querySelector('.speaker-container');
  speakerArray.forEach((c) => {
    const card = document.createElement('article');
    card.innerHTML = (`
    <div class="speaker-main">
        <img class = "speaker-image" src="${c.image}" alt=" Image ">
        <div class="speaker-right">
            <h3> ${c.name}</h2>
            <p><i>${c.title}</i></p>
            <div class="guide_bar2"></div>
            <div class="speaker-divider-menu"></div>
            <p class="description">${c.description}</p>
        </div>
  </div>
    `);
    cardss.appendChild(card);
  });
