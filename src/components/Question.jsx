import React from 'react';
import { Card, CardTitle, CardText, CardMedia } from "material-ui/Card";
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

export default class Question extends React.Component {
    render() {
        return (
            <Card style={{maxWidth: '600px'}}>
                <CardTitle title={'Вопрос № ' + this.props.index} />
                {this.props.image &&
                    <CardMedia>
                        <img src={this.props.image} />
                    </CardMedia>
                }
                <CardText>
                    <p style={{marginTop: 0}}>{this.props.text}</p>
                    <RadioButtonGroup name='variants' onChange={(event, value) => this.props.onChange(value)}>
                        {this.props.variants.map((item, index) =>
                            <RadioButton
                                value={item.value}
                                label={item.label}
                                key={index}
                            />
                        )}
                    </RadioButtonGroup>
                </CardText>
            </Card>
        );
    }
}