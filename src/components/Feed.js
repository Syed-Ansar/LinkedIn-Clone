import { Create } from '@material-ui/icons'
import React from 'react'
import "./Feed.css"
import InputOptions from './InputOptions'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from "@material-ui/icons/Image"
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay"
import EventNoteIcon from "@material-ui/icons/EventNote"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"


const Feed = () => {
    return (
        <div className="feed">
            <div className="feed_input_container">
                <div className="feed_input">
                    <Create />
                    <form action="">
                        <input type="text" placeholder='Start a post' />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOptions Icon={ImageIcon} title={"Photo"} color="#7085F9" />
                    <InputOptions Icon={SubscriptionsIcon} title={"Video"} color="#E7A33E" />
                    <InputOptions Icon={EventNoteIcon} title={"Event"} color="#C0CBCD" />
                    <InputOptions Icon={CalendarViewDayIcon} title={"Write article"} color="#7FC15E" />
                </div>
            </div>

        </div>
    )
}

export default Feed