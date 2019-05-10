import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

const Book = ({img, likes, name, title, description}) => {
    return (
        <Card>
            <Image src={img} />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>{name}</Card.Meta>
                <Card.Description>{description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className="d-flex justify-content-between">
                    <a>
                        <Icon name='health' />
                        {health} лайков
                    </a>
                    <Button primary>Читать</Button>
                </div>
            </Card.Content>
        </Card>
    );
}

export default Book;