import React from "react";
import{
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    container

} from "reactstrap";

const Course=({Course})=>{
    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{Course.title}</CardSubtitle>
                <CardText text-align="center">{Course.description}</CardText>
                <container className="text-center">
                    <Button color="danger">Delete</Button>
                    <Button color="warning">Update </Button>
                </container>
            </CardBody>
        </Card>
    )

}

export default Course;