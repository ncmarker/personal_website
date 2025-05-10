const projectsData = [
    {
        image: "/images/landing/landing_personalizedcashback.png",
        mockup: "/images/personalizedCashback/personalizedcashback_hero.png",
        alt: "personalizedCashback Image",
        title: "Cashback",
        role: "Developer, Designer",
        description: "Simulate personalized cashback rewards with real-time data",
        date: "May 2025",
        languages: ['docker', 'ts', 'kafka', 'reactnative'],
        github: "https://github.com/ncmarker/personalized-cashback",
        demo: "https://www.loom.com/share/9a943757ff624c3cabca831ffc9805e0?sid=4965a0de-1c7f-456b-820c-860a66f15a11",
        details: "/PersonalizedCashback",
        features: [
            {
                image: "/images/personalizedCashback/feature_1.png",
                title: "Personalized Cashback Engine",
                description: "Calculates real-time cashback rewards for users based on their purchase history and a store's overstocked inventory. The system identifies purchasing trends and excess supply to issue dynamic, relevant rewards."
            },
            {
                image: "/images/personalizedCashback/feature_2.png",
                title: "Real-Time Inventory Logs",
                description: "Kafka streams inventory data for each store, reflecting live product category availability. This allows for reactive reward generation based on current stock levels."
            },
            {
                image: "/images/personalizedCashback/feature_3.png",
                title: "Transaction Monitoring",
                description: "Kafka also streams simulated transaction data from users across stores. These are consumed and processed live to match purchase patterns against reward criteria."
            },
            {
                image: "/images/personalizedCashback/feature_4.png",
                title: "Dyanamic Reward Refresh",
                description: "Users can tap a button to trigger the reward engine, which recalculates personalized cashback offers based on up-to-the-moment inventory and transaction data."
            },
        ],
        systemDesign: "/images/personalizedCashback/personalizedcashback_system_design.png",
    },
    {
        image: "/images/landing/landing_galaxyhunters.png",
        mockup: "/images/galaxyHunters/galaxyhunters_hero.png",
        alt: "Galaxy Hunters Image",
        title: "Galaxy Hunters",
        role: "Developer, Game Designer",
        description: "Test your survival in this multiplayer bullet hell game",
        date: "April 2025",
        languages: ['unity', 'csharp'],
        github: "https://github.com/ncmarker/galaxyHunters",
        demo: "https://www.loom.com/share/996187b212d94709a69afcde93b3eea0?sid=cfb00b20-9626-425c-a782-1f629d0de97d",
        details: "/GalaxyHunters",
        features: [
            {
                image: "/images/galaxyHunters/feature_1.png",
                title: "Character-Based Strategy",
                description: "Before jumping into the action, players choose between unique characters—each equipped with distinct starting weapons and passive abilities like increased health or speed. This encourages co-op coordination and complementary playstyles."
            },
            {
                image: "/images/galaxyHunters/feature_2.png",
                title: "Weapon Guide Preview",
                description: "A pre-game weapon guide lets players review each weapon's strengths, effects, and power-ups. This primes players to form survival strategies before gameplay begins."
            },
            {
                image: "/images/galaxyHunters/feature_3.png",
                title: "Dynamic Power-Ups",
                description: "Power-ups scattered throughout the level—health boosts, revives, XP magnets, and more—add fast-paced variability. These items raise the stakes and reward risk-taking in critical moments."
            },
            {
                image: "/images/galaxyHunters/feature_4.png",
                title: "Collaborative Co-op Combat",
                description: "At the heart of the game is its two-player mode. Some weapons only activate through joint actions (e.g. cross-player lasers or dual explosions), requiring constant communication and teamwork."
            },
            {
                image: "/images/galaxyHunters/feature_5.png",
                title: "In-Game Weapon Upgrades",
                description: "As players level up, they can upgrade weapons or unlock new ones. These mid-game decisions allow for evolving strategies, giving players a sense of progression and agency."
            },
            {
                image: "/images/galaxyHunters/feature_6.png",
                title: "Narrative Powered Minimap",
                description: "The minimap provides direction and ties directly into the story: destroy incubators, defeat bosses, collect stars, and save Earth. It keeps players on track while enhancing immersion."
            },
        ],
        systemDesign: "/images/galaxyHunters/galaxyhunters_system_design.png",
    },
    {
        image: "/images/landing/landing_compcreator.png",
        mockup: "/images/compCreator/compcreator_hero.png",
        alt: "CompCreator Image",
        title: "CompCreator",
        role: "Developer, Designer",
        description: "Create reusable UI components with ease",
        date: "November 2024",
        languages: ['js', 'css', 'html', 'react', 'tailwind'],
        github: "https://github.com/ncmarker/component-creator",
        demo: "https://www.loom.com/share/304265ca65c34cd180627f4dd3e2cdf6?sid=fe4fb656-e389-419b-aa37-f5f12b7ad7b2",
        details: "/CompCreator",
        features: [
            {
                image: "/images/compCreator/feature_1.png",
                title: "Secure User Login",
                description: "Users can create an account to securely save their components in a personal library. This means you can log in anytime, access your work, and keep improving or reusing your saved components without starting from scratch."
            },
            {
                image: "/images/compCreator/feature_2.png",
                title: "My Components Dashboard",
                description: "This dashboard provides a centralized view of all your saved components. Here, you can search, organize, and edit your library. The dashboard ensures efficient management of reusable components, helping you maintain a clean and structured approach to your projects."
            },
            {
                image: "/images/compCreator/feature_3.png",
                title: "Customize Components",
                description: "The heart of the platform is the component customization page. This is where you can create and customize basic reusable components in real time. With an interactive live render, you can see how your changes take effect instantly. Additionally, a code export option allows you to copy the React code of your component, making it ready for seamless implementation in your projects."
            },
            {
                image: "/images/compCreator/feature_4.png",
                title: "Discover Inspiration",
                description: "Creativity is often sparked by examples, which is why the inspiration page lets you search for design ideas effortlessly. This feature helps users discover visually appealing elements to guide their component creation process, ensuring your designs are both functional and aesthetically pleasing."
            },
            {
                image: "/images/compCreator/feature_5.png",
                title: "Personalized Inspiration Library",
                description: "Store and manage all your favorite inspiration photos in one place. This feature allows you to revisit your saved ideas when working on new components, providing a personalized repository for creativity and design reference."
            },
        ],
        systemDesign: "/images/compCreator/compcreator_system_design.png",
    },
    {
        image: "/images/landing/landing_elementalescape.png",
        mockup: "/images/elementalEscape/elementalescape_hero.png",
        alt: "Elemental Escape Image",
        title: "Elemental Escape",
        role: "Developer, Designer",
        description: "Simulate personalized cashback rewards with real-time data",
        date: "December 2024",
        languages: ['unity', 'csharp'],
        github: "https://github.com/ncmarker/elementalEscape",
        demo: "https://www.loom.com/share/946f561d32ad49b09709df6c5194020b?sid=b899395c-6c6e-479c-9f82-e88820d574ec",
        details: "/ElementalEscape",
        features: [
            {
                image: "/images/elementalEscape/feature_1.png",
                title: "Challenging Platformer Map",
                description: "The game's levels are designed as strategic platforming challenges. Players must navigate barricades, elevation changes, and destructible objects while planning their path carefully. Some obstacles require precise timing, while others demand clever use of elemental powers to clear the way."
            },
            {
                image: "/images/elementalEscape/feature_2.png",
                title: "10 Strategic Levels",
                description: "Each level introduces a different challenge, encouraging players to experiment with new strategies. Some levels emphasize mastering a specific element's ability, while others test navigation skills with complex terrain. Players can revisit completed levels to refine their approach and improve their performance."
            },
            {
                image: "/images/elementalEscape/feature_3.png",
                title: "Clear Directions",
                description: "Before starting, players can review detailed in-game instructions, including visuals explaining how to use each elemental power. These guides help new players quickly understand the mechanics and plan their approach before diving into the game."
            },
            {
                image: "/images/elementalEscape/feature_4.png",
                title: "Immersive Audio",
                description: "To enhance engagement, dynamic sound effects play for key actions like jumping, attacking, and using elemental abilities. Win and loss conditions trigger specific audio and visual feedback, making each interaction feel more immersive."
            },
            {
                image: "/images/elementalEscape/feature_5.png",
                title: "Element-Based Powers",
                description: "Players collect potions throughout each level that transform them into different elemental forms. Since each power is limited in use, timing and order matter. Players must think ahead to avoid getting stuck, adding an extra layer of depth to the puzzle-platformer experience."
            },
        ],
        systemDesign: "/images/elementalEscape/elementalescape_system_design.png",
    },
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
  