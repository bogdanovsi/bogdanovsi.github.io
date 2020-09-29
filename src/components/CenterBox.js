import React from 'react';
import { Box } from '@material-ui/core'

export default class CenterBox extends React.Component {
    render() {
        return (
            <Box
                display="flex"
                width="100vw" height="100vh"
                alignItems="center"
                justifyContent="center"
            >
                <Box m="auto"
                    width="80%" height="80%"
                    bgcolor={"#d8eeed"}
                >
                    {this.props.children}
                </Box>
            </Box>
        );
    }
}