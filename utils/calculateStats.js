const calculateStats = (repos) => {

    let totalStars = 0;
    let totalForks = 0;

    const languages = {};

    repos.forEach((repo) => {

        totalStars += repo.stargazers_count;

        totalForks += repo.forks_count;

        if(repo.language){

            languages[repo.language] =
                (languages[repo.language] || 0) + 1;
        }
    });

    let mostUsedLanguage = "None";

    let max = 0;

    for(let lang in languages){

        if(languages[lang] > max){

            max = languages[lang];

            mostUsedLanguage = lang;
        }
    }

    return {
        totalStars,
        totalForks,
        mostUsedLanguage
    };
};

module.exports = calculateStats;