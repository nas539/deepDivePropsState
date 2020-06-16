import React, { Component } from 'react';

const rawJournalData = [
    {title: "Post One", content: "Post Content", status: 'draft'},
    {title: "Post Two", content: "Post Content", status: 'published'},
    {title: "Post Three", content: "Post Content", status: 'published'},
    {title: "Post Four", content: "Post Content", status: 'published'}
];

const JournalEntry = () => {
    return (
        <div>
            <h1>Hi there</h1>
            <p>Some amazing content</p>
        </div>
    );
};

export default class Journalist extends Component {
    constructor(props) {
        super();
        this.state ={
            journalData: rawJournalData,
            greeting: "Hi there",
            isOpen: true
        }
        
    }

    render() {
        return (
        <div>
            <h2>{this.props.heading}</h2>;
            <JournalEntry />
        </div>
        );   
    };
}