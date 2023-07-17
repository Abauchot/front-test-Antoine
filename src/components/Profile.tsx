import React from "react";
import { Box, Button, Divider } from "@chakra-ui/react";

interface profileProps {
    name: string;
    age: string;
    onClick: () => void;
}

const ProfileComponent: React.FC<profileProps> = ({
    name,
    age,
    onClick
}) => {
    const isOlder: boolean = parseInt(age) > 20;
    const opacity: number = Math.min(parseInt(age) / 100, 1);

    return (
        <>
                <Box
                    p="2"
                    className={`${isOlder ? "older" : ""}`}
                    style={{ backgroundColor: `rgba(50, 113, 168, ${opacity})` }}
                >
                    <li>{name}</li>
                    <li>{age}</li>
                    <Button  onClick={onClick}>Afficher</Button>
                </Box>
                <Divider />
        </>
    );
};

export default ProfileComponent;