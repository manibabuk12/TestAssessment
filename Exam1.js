var jsonObject = [
    {
        "title": "Amy Schneider’s Jeopardy! Streak Ends at 40 Consecutive Wins and $1.4 Million",
        "createdAt":"JANUARY 26 2022-11:43 PM EST",
        "link": "https://time.com/6142934/amy-schneider-jeopardy-streak-ends/"
    },
    {
        "title": "'Writing With Fire' Shines a Light on All-Women News Outlet",
        "createdAt":"JANUARY 26 2022-9:00 PM EST",
        "link": "https://time.com/6142628/writing-with-fire-india-documentary/"
    },
    {
        "title": "Moderna Booster May Wane After 6 Months",
        "createdAt":"JANUARY 26 2022-5:51 PM EST",
        "link": "https://time.com/6142852/moderna-booster-wanes-omicron/"
    },
    {
        "title": "Pressure Mounts for Biden to Nominate a Black Woman to the Supreme",
        "createdAt":"JANUARY 26 2022-3:51 PM EST",
        "link": "https://time.com/6142743/joe-biden-supreme-court-nominee-black-woman-campaign-promise/"
    },
    {
        "title": "The James Webb Space Telescope Is in Position—And Now We Wait",
        "createdAt":"JANUARY 26 2022-3:40 PM EST",
        "link": "https://time.com/6142769/james-webb-space-telescope-reaches-l2/"
    },
    {
        "title": "We Urgently Need a New National COVID-19 Response Plan",
        "createdAt":"JANUARY 26 2022-3:13 PM EST",
        "link": "https://time.com/6142718/we-need-new-national-covid-19-response-plan/"
    }
];
function renderStories() {
    var container = document.getElementById('stories-container');

    jsonObject.forEach(function (story) {
        var storyElement = document.createElement('div');

        var titleElement = document.createElement('h4');
        
        var timeElement = document.createElement('p');
        
        var linkElement = document.createElement('a');
       

        titleElement.textContent = story.title;
        timeElement.textContent = story.createdAt;
        linkElement.textContent = 'Read more';
        linkElement.setAttribute('href', story.link);
        linkElement.setAttribute('target', '_blank');

        storyElement.appendChild(titleElement);
        storyElement.appendChild(timeElement);

        storyElement.appendChild(linkElement);

        container.appendChild(storyElement);
    });
}
window.onload = renderStories;