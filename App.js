import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import HomePage from './HomePage';
import CodePage from './CodePage';
import GeoPage from './GeoPage';
import AnatPage from './AnatPage';
import NewPage from './NewPage';
import styles from './styles';


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
                homePageDisplay: 'block',
                anatPageDisplay: 'none',
                geoPageDisplay: 'none',
                javaPageDisplay: 'none',
                newSetDisplay: 'none',
        };
      }
    
    
      handleHomePageDisplay = () => {
        this.setState({
          homePageDisplay: 'block',
          anatPageDisplay: 'none',
          geoPageDisplay: 'none',
          javaPageDisplay: 'none',
          newSetDisplay: 'none',
        });
        
      };
    
      handleAnatPageDisplay = () => {
        this.setState({
            homePageDisplay: 'none',
            anatPageDisplay: 'block',
            geoPageDisplay: 'none',
            codePageDisplay: 'none',
            newPageDisplay: 'none',
        })
        
    };
    
    handleGeoPageDisplay = () => {
        this.setState({
            homePageDisplay: 'none',
            anatPageDisplay: 'none',
            geoPageDisplay: 'block',
            codePageDisplay: 'none',
            newPageDisplay: 'none',
        })
    };
    
    handleCodePageDisplay = () => {
        this.setState({
            homePageDisplay: 'none',
            anatPageDisplay: 'none',
            geoPageDisplay: 'none',
            codePageDisplay: 'block',
            newPageDisplay: 'none',
        })
    };
    
    handleNewPageDisplay = () => {
        this.setState({
            homePageDisplay: 'none',
            anatPageDisplay: 'none',
            geoPageDisplay: 'none',
            codePageDisplay: 'none',
            newPageDisplay: 'block',
        })
    };

    render() {
        return (
            <View style={styles.container}>

                <View style = {{display:this.state.homePageDisplay}}>
                        <HomePage 
                        handleCodePageDisplay={this.handleCodePageDisplay}
                        handleGeoPageDisplay={this.handleGeoPageDisplay}
                        handleAnatPageDisplay={this.handleAnatPageDisplay}
                        //Add more if needed.
                        />
                </View>

                <View style = {{display:this.state.codePageDisplay}}>
                        <CodePage 
                        handleHomePageDisplay={this.handleHomePageDisplay}
                        />
                </View>

                <View style = {{display:this.state.geoPageDisplay}}>
                        <GeoPage 
                        handleHomePageDisplay={this.handleHomePageDisplay}
                        />
                </View>

                <View style = {{display:this.state.anatPageDisplay}}>
                        <AnatPage 
                        handleHomePageDisplay={this.handleHomePageDisplay}
                        />
                </View>
 
            </View>
        );
    };
    
}