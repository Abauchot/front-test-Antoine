import React, { useEffect, useState } from "react";
import "./css/App.css";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import ProfileComponent from "./components/Profile";
import { useThemeContext } from "./context/ThemeContext";

export interface Profile {
    name: string;
    age: string;
    description: string;
    gender?: string;
}


const gens : Profile[] = [
    {
        name: "Alain Térieur",
        age: "12",
        description:
            "Fruitcake chocolate cake icing toffee marshmallow jujubes sweet shortbread jujubes. Biscuit jelly-o pudding bear claw lemon drops biscuit cupcake chocolate bar. Powder cake soufflé biscuit bonbon. Halvah topping powder marshmallow sugar plum macaroon pie. Candy tiramisu dessert powder sugar plum cookie brownie. Danish apple pie gummies marzipan topping marzipan cheesecake.",
    },
    {
        name: "Alain Verse",
        age: "24",
        description:
            "Jujubes liquorice tart halvah fruitcake croissant. Tart wafer toffee cake marzipan tart. Icing gingerbread dessert sweet cake carrot cake. Powder cookie sweet dessert dragée topping cotton candy apple pie. Cheesecake muffin jujubes jujubes carrot cake soufflé. Ice cream sesame snaps jujubes brownie sugar plum jelly. Jelly-o toffee jelly beans bonbon biscuit oat cake muffin. Dessert shortbread cotton candy donut bonbon tootsie roll marshmallow donut halvah. Apple pie chupa chups cotton candy marzipan sweet roll sweet.",
    },
    {
        name: "Alban Bou",
        age: "1",
        description:
            "Bear claw sesame snaps lemon drops candy canes wafer jujubes topping gummi bears. Gummi bears marshmallow ice cream biscuit gummi bears brownie. Bear claw donut sweet roll pastry lollipop tart gummies candy. Gingerbread cotton candy jelly biscuit chocolate cake jelly. Shortbread cookie liquorice marshmallow jelly beans chocolate cheesecake. Croissant jujubes fruitcake icing marshmallow sugar plum. Soufflé sugar plum cake cupcake wafer croissant tiramisu powder. Topping icing icing dragée dragée jelly beans jujubes carrot cake. Shortbread soufflé candy lemon drops sweet roll muffin apple pie biscuit cake.",
    },
    {
        name: "Albert Ichon",
        age: "12",
        description:
            "Candy lemon drops jelly-o pudding sesame snaps. Shortbread cotton candy gummies gummies liquorice. Jelly-o chocolate cake jujubes candy powder toffee brownie gummies. Candy tootsie roll bonbon powder chocolate icing. Cheesecake liquorice muffin gingerbread pastry. Chocolate bar icing fruitcake jelly beans chocolate. Dessert bear claw apple pie sweet candy pudding pudding tiramisu jelly beans. Cake tiramisu powder pudding sesame snaps powder. Sesame snaps halvah tootsie roll tart pastry soufflé cookie.",
    },
    {
        name: "Aldo Berman",
        age: "12",
        description:
            "Chocolate dessert gummies marzipan jelly. Tart croissant muffin muffin jelly-o ice cream toffee caramels apple pie. Shortbread wafer caramels bonbon macaroon liquorice dragée jelly. Powder chocolate bar chocolate cake danish powder gummies lemon drops croissant cupcake. Soufflé lollipop jelly-o tootsie roll shortbread cake jelly-o gummi bears pudding. Bear claw apple pie cheesecake cookie halvah donut muffin lemon drops. Halvah pudding sesame snaps ice cream chupa chups.",
    },
    {
        name: "Édith Orial",
        age: "34",
        description:
            "Halvah lollipop marzipan jelly-o chocolate cake. Gummi bears jelly-o shortbread croissant caramels sweet sesame snaps. Chocolate cake chocolate bar soufflé candy canes tart. Cookie soufflé cake gummies sesame snaps oat cake icing tart. Fruitcake sweet roll caramels halvah tootsie roll. Icing ice cream fruitcake lollipop jelly-o danish marshmallow danish chupa chups. Caramels marzipan jelly beans topping lollipop tootsie roll. Pastry danish apple pie tiramisu oat cake jelly-o. Halvah pie danish muffin dessert. Oat cake jelly-o bonbon icing candy canes brownie icing.",
    },
    {
        name: "Edmond Fils",
        age: "45",
        description:
            "Cheesecake lollipop gingerbread chocolate tootsie roll chupa chups icing jelly fruitcake. Marzipan jelly shortbread liquorice toffee apple pie gummi bears pastry icing. Pie pie powder sesame snaps danish pastry lollipop gingerbread sugar plum. Jelly beans candy ice cream powder soufflé candy canes jujubes. Gummies lollipop liquorice brownie fruitcake chocolate gummies chocolate sesame snaps. Cupcake sesame snaps soufflé gingerbread shortbread jelly beans chocolate bar donut. Chocolate bar soufflé carrot cake croissant tootsie roll.",
    },
    {
        name: "Edmond Grec",
        age: "65",
        description:
            "Cookie candy canes powder candy canes chocolate. Tiramisu lollipop tootsie roll danish tootsie roll icing pastry jelly-o brownie. Shortbread danish dragée sugar plum lemon drops cake chocolate bar marshmallow. Apple pie bear claw icing tart macaroon. Wafer oat cake chocolate bar chocolate cake tootsie roll chocolate cake. Dessert biscuit cupcake dessert gingerbread jelly beans candy canes chocolate. Candy bear claw wafer icing macaroon carrot cake caramels cake donut. Tootsie roll lollipop brownie macaroon muffin.",
    },
    {
        name: "Lary Bambel",
        age: "23",
        description:
            "Sweet jujubes marzipan tiramisu soufflé biscuit shortbread gingerbread chocolate bar. Chupa chups pudding lemon drops lemon drops soufflé cupcake cupcake danish. Lemon drops cheesecake pie tart sweet. Oat cake jelly powder cupcake lollipop. Cotton candy chocolate cake liquorice cotton candy muffin jujubes tiramisu chocolate cake candy. Pudding jelly-o chocolate bar bonbon gummies macaroon topping.",
    },
    {
        name: "Laure Brille",
        age: "76",
        description:
            "Shortbread chocolate bar lemon drops toffee wafer cheesecake candy sweet roll. Pudding gingerbread cake tootsie roll dragée liquorice dragée cheesecake apple pie. Cupcake cake ice cream gingerbread icing. Marzipan biscuit gummi bears jujubes jelly-o dragée. Sugar plum gingerbread shortbread sweet pie powder. Candy apple pie gingerbread apple pie dragée icing. Sweet bear claw chupa chups chocolate cake oat cake halvah. Caramels bonbon powder cotton candy sweet.",
    },
    {
        name: "Laure Dure",
        age: "08",
        description:
            "Cookie lemon drops gummi bears marzipan cheesecake macaroon liquorice pudding. Carrot cake tootsie roll fruitcake liquorice chupa chups bonbon jujubes cotton candy gummies. Chocolate bar cake topping jelly-o carrot cake marshmallow. Cupcake icing cake topping marzipan. Jelly-o marshmallow donut cotton candy shortbread candy. Jelly beans dessert pudding biscuit gingerbread.",
    },
    {
        name: "Laure Édubois",
        age: "23",
        description:
            "Pie icing sugar plum caramels donut soufflé fruitcake. Candy canes oat cake icing sesame snaps brownie tart. Shortbread cupcake oat cake oat cake cheesecake icing candy sweet. Liquorice cake bear claw bonbon jelly beans bonbon jelly beans gingerbread. Fruitcake ice cream donut fruitcake donut cake sweet candy canes. Wafer dragée pudding danish tiramisu bear claw powder soufflé.",
    },
];


function App() {
    const [profileDisplayed, setProfileDisplayed] = useState("");
    const [profileDisplayedGender, setProfileDisplayedGender] = useState("");
    const [sortedByAge, setSortedByAge] = useState<"asc" | "desc">("asc");
    const [sortedProfiles, setSortedProfiles] = useState<Profile[]>([]);
    const [averageAge, setAverageAge] = useState<number>(0);
    const { theme, toggleTheme } = useThemeContext();

    const fetchGenderForName = async (name: string): Promise<string> => {
        try {
            if(!name) return 'unknown'
            const response = await fetch(`https://api.genderize.io?name=${name.split(" ")[0]}`);
            const data = await response.json();
            return data.gender;
        } catch (error) {
            console.error("Error fetching gender data:", error);
            return 'unknown';
        }
    };

    const displayProfile = async (profile: Profile): Promise<void> => {
        setProfileDisplayed(profile.name);
        if (!profile.gender) {
            const gender = await fetchGenderForName(profile.name);
            setProfileDisplayedGender(gender);
            const updatedProfiles = sortedProfiles.map((p) => (p.name === profile.name ? { ...p, gender } : p));
            setSortedProfiles(updatedProfiles);
        }
    };


    // trier les profils par age
    useEffect((): void => {
        sortProfilesByAge();
    }, []);

    // afficher le nom de la personne sélectionnée dans le titre de la page
    useEffect((): void => {
        document.title = profileDisplayed || "Profiles";
    }, [profileDisplayed]);





//trier par age
    const sortProfilesByAge = (): void => {
        const sortedGens: Profile[] = [...gens];
        sortedGens.sort((a: Profile, b: Profile) => {
            if (sortedByAge === "asc") {
                return parseInt(a.age) - parseInt(b.age);
            } else {
                return parseInt(b.age) - parseInt(a.age);
            }
        });
        setSortedByAge(sortedByAge === "asc" ? "desc" : "asc");
        setSortedProfiles(sortedGens);


        const averageAge: number = calculateAverageAge(sortedGens);
        setAverageAge(averageAge);
    };


    const calculateAverageAge = (profiles: Profile[]): number => {
        if (profiles.length === 0) {
            return 0;
        }
        const totalAge: number = profiles.reduce((sum: number, profile: Profile) => sum + parseInt(profile.age), 0);
        return totalAge / profiles.length;
    };

    return (
        <Box padding={5}>
            <Heading textAlign="center" color={theme === "light" ? "black" : "white"}>
                Profiles
            </Heading>
            <Button onClick={toggleTheme}>Toggle theme</Button>
            <Button onClick={sortProfilesByAge}>
                Trier par âge {sortedByAge === "asc" ? "croissant" : "décroissant"}
            </Button>
            <Box textAlign="right">Moyenne d'age :{averageAge.toFixed(0)} </Box>
            <Flex flexDir="column" bg="blue.200" color="white" p="4">
                Profile à afficher : {profileDisplayed}<br/>
                Gender: {profileDisplayedGender}
                <Box>
                    Description:
                    {gens.find((v: Profile): boolean => v.name === profileDisplayed)?.description}
                </Box>
            </Flex>
            {sortedProfiles.map((profile: Profile, index: number) => (
                <ProfileComponent
                    key={index}
                    name={profile.name}
                    age={profile.age}
                    onClick={() => displayProfile(profile)}
                 />
            ))}
        </Box>
    );
}

export default App;
