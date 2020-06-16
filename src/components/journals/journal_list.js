import React, { Component } from 'react';
import { JournalEntry, SomeOtherComponent } from "./journal_entry";

const rawJournalData = [
    {title: "Post One", content: "Post Content", status: 'draft'},
    {title: "Post Two", content: "Post Content", status: 'published'},
    {title: "Post Three", content: "Post Content", status: 'published'},
    {title: "Post Four", content: "Post Content", status: 'published'}
];

export default class Journalist extends Component {
    constructor(props) {
        super();
        this.state = {
            journalData: rawJournalData,
            greeting: "Hi there",
            isOpen: true
        }
        
    }

    render() {
        const journalEntries = this.state.journalData.map(journalEntry => {
            return (
                <div key={journalEntry.title}>
                    <JournalEntry title={journalEntry.title} content={JournalEntry.content}/>
                </div>
            )
        })

        return (
        <div>
            <h2>{this.props.heading}</h2>
            {journalEntries}
            {/* <JournalEntry title="Some Title" content="Some content"/>
            <JournalEntry title="Some other Title" content="Some content"/>
            <JournalEntry title="Some  other Title again" content="Some content"/>

            <SomeOtherComponent title="Some other title" content="Some other content"/> */}
        </div>
        );   
    };
}