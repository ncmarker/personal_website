const projectsData = [
    {
        image: "/images/landing/landing_pixel.png",
        mockup: "/images/pixel/pixel_hero.png",
        alt: "Pixel Image",
        title: "Pixel",
        role: "Founder, Developer",
        description: "Ensuring your design and coded prototype are aligned",
        date: "April 2024",
        languages: ['js', 'css', 'python', 'flask', 'tailwind', 'html', 'react', 'scss'],
        github: "https://github.com/ncmarker/pixel",
        demo: "https://www.loom.com/share/95d742ff1db04623a2d9acf19dc7c7e2?sid=d171ce56-5c7e-4164-af32-f123aa89a314",
        details: "/Pixel",
        features: [
            {
                image: "/images/pixel/feature_1.png",
                title: "Enter Figma and Prototype Link",
                description: "Enter Figma File and Prototype Link and Pixel will scrape all pages and frames within your Figma file, in addition to all links stemming from the root link you pasted as your prototype."
            },
            {
                image: "/images/pixel/feature_2.png",
                title: "Choose Frame and Page",
                description: "Pick the corresponding page and frame within your Figma file, along with the specific page URL for the prototype page you want to check. This allows the user to upload only two links at the start, and then have the opportunity to check all pages from that single upload."
            },
            {
                image: "/images/pixel/feature_3.png",
                title: "Annotated Screen",
                description: "Pixel will output an annotated screen of all discrepancies present in the deployed prototype when compared to the original Figma design. This creates a visual indicator of where the errors occur, allowing the user to identify and change these mistakes with ease."
            },
            {
                image: "/images/pixel/feature_4.png",
                title: "Detailed Comments",
                description: "Pixel creates a list of comments describing each of the discrepancies identified. These comments describe the location of the error on the page, and give insight to what may be the potential cause for the indicated discrepancy (margin, color, text, etc.)."
            },
            {
                image: "/images/pixel/feature_5.png",
                title: "Code Callouts",
                description: "Pixel creates a callout of the specific code related to the element causing the discrepancy. This code included both the HTML of the element and the corresponding CSS that is styling the element."
            },
        ],
        systemDesign: "/images/pixel/pixel_system_design.png",
    },
    {
        image: "/images/landing/landing_ekko.png",
        mockup: "/images/ekko/ekko_hero.png",
        alt: "Ekko Image",
        title: "Ekko",
        role: "Developer, Designer",
        description: "Your personalized language learning vocal chatbot",
        date: "February 2024",
        languages: ['js', 'css', 'html', 'tailwind', 'bun', 'react'],
        github: "https://github.com/chroline/ekko",
        demo: "https://www.loom.com/share/5c348330f8514817baff9b02df00bb1d?sid=9fa298b1-cba7-489e-b0ab-3cb46901e606",
        details: "/Ekko",
        features: [
            {
                image: "/images/ekko/feature_1.png",
                title: "Proficiency Tracker",
                description: "Ekko keeps track of a user’s streak for consecutive days of practice to promote continuous learning. Ekko also displays the user’s current proficiency level, providing a metric of measuring progress."
            },
            {
                image: "/images/ekko/feature_2.png",
                title: "Personalized Learning",
                description: "While onboarding the user enters answers to a list of questions regarding their reasons for learning a new language in order to tailor the learning experience. For example, if a user says “For work” their learning will be catered towards more professional phrases whereas if they enter “For my study abroad trip” the provided feedback will be more towards conversational phrases."
            },
            {
                image: "/images/ekko/feature_3.png",
                title: "Verbal Conversation",
                description: "Ekko will have a verbal discussion with the user until the user decides to end the conversation. A button is hold down while the user speaks, and then Ekko will respond through audio. All messages are transcribed on screen, and specific feedback for each message is provided at the conclusion of the discussion."
            },
            {
                image: "/images/ekko/feature_4.png",
                title: "Catered Feedback",
                description: "Ekko provides specific feedback on phrases said in the conversation. Snippets of what the user said along with tailored suggestions based on their onboarding data are provided. A proficiency metric after each conversation is also provided."
            },
        ],
        systemDesign: "/images/ekko/ekko_system_design.png",
    },
    {
        image: "/images/landing/landing_desy.png",
        mockup: "/images/desy/desy_hero.png",
        alt: "DESY Image",
        title: "DESY",
        role: "Founder, Developer",
        description: "Implementing and exporting a design system with ease",
        date: "October 2024",
        languages: ['js', 'css', 'html'],
        github: "https://github.com/ncmarker/DESY",
        demo: "https://www.loom.com/share/e106e0a55e89482db5be4b3c264b14a7?sid=a3979e60-8381-4225-93ba-b74b928087d8",
        details: "/Desy",
        features: [
            {
                image: "/images/desy/feature_1.png",
                title: "Scan Elements in File",
                description: "Click “Scan File” to scan all elements in your file for design system compliance. All non-compliant elements will be listed under their parent frame name for organization. Based on the current qualities of the non-compliant element, the most similar style from your design system is recommended. There is also a efficient locator button that allows you to quickly find and select the element within your file."
            },
            {
                image: "/images/desy/feature_2.png",
                title: "Export CSS Code",
                description: "DESY provides exportable CSS code for all styles in your design system. Developers can copy this code into an external stylesheet and have a centralized place for all future updates and modifications to the brand’s design system."
            },
            {
                image: "/images/desy/feature_3.png",
                title: "Design System Expansion",
                description: "DESY will make suggestions for you to expand your design system based on repeated styles in your Figma file that do not comply with the current design system in place. You can quickly view all items with this non-compliant style, or dismiss the suggestion if you choose not to incorporate the new style into your design system."
            },
        ],
        systemDesign: "/images/desy/desy_system_design.png",
    },
    {
        image: "/images/landing/landing_spotify.png",
        mockup: "/images/spotify/spotify_hero.png",
        alt: "Spotify Image",
        title: "Song Guess",
        role: "Developer, Designer",
        description: "30 seconds to guess songs from your favorite genre",
        date: "May 2024",
        languages: ['js', 'css', 'html', 'php', 'mysql'],
        github: "https://github.com/ncmarker/Song_Guess",
        demo: "https://www.loom.com/share/1f5a543bac214153a88acbf8b241df4e?sid=5a03c213-7a3a-4917-9d5b-8160e1d2f604",
        details: "/Spotify",
        features: [
            {
                image: "/images/spotify/feature_1.png",
                title: "User Login",
                description: "Users log into the platform with an email and a password. This allows them to return back to the game and maintain their high score along with their profile specific data."
            },
            {
                image: "/images/spotify/feature_2.png",
                title: "Profile Customization",
                description: "Users can modify their email, password, favorite genre, and favorite song at any time once logged in. Users also have the ability to change their profile picture with the option of six different animals."
            },
            {
                image: "/images/spotify/feature_3.png",
                title: "Song Guessing Game",
                description: "The primary use of the application is the song guessing game. Users first authenticate their profile with Spotify prior to beginning. Then they select a genre of choice and click 'Begin'. The timer will start and the first song will begin playing. Type in the name of the song to earn a point, or click 'skip' to move onto the next song in the list."
            },
            {
                image: "/images/spotify/feature_4.png",
                title: "Top Scoring Leaderboard",
                description: "Users can view a leaderboard with the top scoring players and some information from their profile. Users can also search any username to find other players and their score, favorite song, and favorite genre."
            },
        ],
        systemDesign: "/images/spotify/spotify_system_design.png",
    },
    {
        image: "/images/landing/landing_mypassword.png",
        mockup: "/images/myPassword/myPassword_hero.png",
        alt: "MyPassword Image",
        title: "MyPassword",
        role: "Developer",
        description: "Assess password strength to maintain secure logins",
        date: "May 2024",
        languages: ['sklearn', 'python', 'flask', 'css', 'html'],
        github: "https://github.com/ncmarker/MyPassword",
        demo: "https://www.loom.com/share/459d2beac2684d069144e7a3120a16d2?sid=727ee987-96ab-4698-bc11-c87d0dec9845",
        details: "/MyPassword",
        features: [
            {
                image: "/images/myPassword/feature_1.png",
                title: "Assess Password Strength",
                description: "Enter any password and receive a predicted strength with 99% accuracy (accuracy from model training). Strength options include Weak, Medium, and Strong. Password strength is also displayed in a graphic, with a point representing the predicted strength."
            },
            {
                image: "/images/myPassword/feature_2.png",
                title: "Add Password to Dataset",
                description: "After receiving a prediction, a user can add their password with its corresponding strength to the dataset. This allows the dataset to continuously grow."
            },
            {
                image: "/images/myPassword/feature_3.png",
                title: "Password Frequency Graph",
                description: "View a histogram of all passwords in the dataset and their corresponding strengths. This graphic displays an overview of the number of passwords of one strength category relative to the others as the dataset grows."
            },
        ],
        systemDesign: "/images/myPassword/myPassword_system_design.png",
    },
    {
        image: "/images/landing/landing_blackjack.png",
        mockup: "/images/blackjack/blackjack_hero.png",
        alt: "Blackjack Image",
        title: "Blackjack",
        role: "Developer, Designer",
        description: "Try to beat the dealer in a classic gambling game",
        date: "May 2023",
        languages: ['js', 'css', 'html', 'react'],
        github: "https://github.com/ncmarker/blackjack",
        demo: "https://www.loom.com/share/52ed8bbb0d364959ba343b3f57422047?sid=ef7f4dfc-9099-48f6-b229-121d62ead676",
        details: "/Blackjack",
        features: [
            {
                image: "/images/blackjack/feature_1.png",
                title: "Bet, Hit, and Pass",
                description: "While playing Blackjack the user is dealt cards and then has the opportunity to first bet on their current hand and then either “Hit” (get another card) or “Pass” (end their turn). The dealer will then repeat the same steps and the player closest to 21 without going over wins the money that was bet."
            },
            {
                image: "/images/blackjack/feature_2.png",
                title: "Mock Bank Account",
                description: "The user starts with $100 and can purchase a variety of chips according to their game strategy. If the user loses all money while playing then they have “gone bankrupt” and lost the game. Any earned winnings can go towards new chips for the user to bet with."
            },
        ],
        systemDesign: "/images/blackjack/blackjack_system_design.png",
    },
    {
        image: "/images/landing/landing_search.png",
        mockup: "/images/mockSearch/mockSearch_hero.png",
        alt: "Search Image",
        title: "Mock Search",
        role: "Developer",
        description: "Predict user demographics based on keyword searches",
        date: "May 2023",
        languages: ['python'],
        github: "https://github.com/ncmarker/mockSearch",
        demo: "https://www.loom.com/share/737fdfb4b5a14147a137f43e2864de41?sid=a2be97a4-5616-41cf-9112-68bc0eabfede",
        details: "/MockSearch",
        features: [
            {
                image: "/images/mockSearch/feature_1.png",
                title: "Predict User Demographics",
                description: "After reading the directions, the user will be prompted to enter three mock Google searches. Based on the keywords in these phrases, specific demographics will be predicted about the user. The user also has the option to watch an example run through prior to entering their searches."
            },
        ],
        systemDesign: "/images/mockSearch/mockSearch_system_design.png",
    },
    {
        image: "/images/landing/landing_snap.png",
        mockup: "/images/snap/snap_hero.png",
        alt: "Snap Image",
        title: "Snap Lens",
        role: "Creator",
        description: "Act as if you and your friends are on the Jumbotron",
        date: "April 2024",
        languages: ['snap'],
        github: "https://www.snapchat.com/lens/3174dac6b2ba483e9345cea033490b7f?type=SNAPCODE&metadata=01",
        demo: "https://www.snapchat.com/lens/3174dac6b2ba483e9345cea033490b7f?type=SNAPCODE&metadata=01",
        details: "/Snap",
        features: [
            {
                image: "/images/snap/feature_1.png",
                title: "Jumbotron Experience",
                description: "User’s can use both their front and back camera to take pictures and videos of friends, family, pets, and more, to act as if they are on the Jumbotron at a live sports game."
            },
        ],
        systemDesign: "/images/snap/snap_system_design.png",
    },
  ];
  
  export default projectsData;
  